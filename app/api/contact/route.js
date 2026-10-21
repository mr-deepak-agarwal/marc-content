import { Resend } from 'resend'
import { getSupabaseAdmin } from '@/lib/supabaseAdmin'
import { esc, cleanSubject, getClientIp, isValidEmail } from '@/lib/security'

const supabase = getSupabaseAdmin()

const resend = new Resend(process.env.RESEND_API_KEY)

const NOTIFY_EMAILS = [
  'svastekgoa@gmail.com',
  'vindhya@marcglocal.com',
]

// ── Forms that render the Turnstile widget ──────────────────────────────────
// A submission from one of these source pages MUST carry a verified token,
// AND the token's `action` (set via the widget's `options.action`) must match
// the value here — this stops a token solved on one surface from being
// replayed against another. Chatbot Widget and Lead Capture Popup don't
// render the widget (awkward fit in a chat bubble / small popup), so they
// aren't in this map — they still get every other check below. Add an entry
// here once you add the widget to one of those flows too.
const TURNSTILE_REQUIRED_SOURCES = new Map([
  ['Contact Us Page', 'contact_page'],
  ['Contact Popup', 'contact_popup'],
])

// Production hostname(s) siteverify's response must match. Comma-separated,
// e.g. "marcglocal.com,www.marcglocal.com". Falls back to marcglocal.com so
// this still works before the env var is set; add www. or any other verified
// domain from the Turnstile widget's hostname list if you use one.
// Both the bare domain and its www. twin are always accepted: the site is served
// on both, and a token solved on www.marcglocal.com reports hostname
// "www.marcglocal.com". Accepting only the bare domain made EVERY contact-page
// submission from www fail verification and get silently dropped.
const EXPECTED_HOSTNAMES = new Set(
  (process.env.TURNSTILE_HOSTNAMES || 'marcglocal.com,www.marcglocal.com')
    .split(',')
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean)
    .flatMap((h) => (h.startsWith('www.') ? [h, h.slice(4)] : [h, `www.${h}`]))
)

// ── Persistent rate limiting (Supabase-backed) ──────────────────────────────
// The old version used an in-memory Map, which resets on every serverless
// cold start — on Vercel that's often enough to make it toothless in
// production. This does the same 3-requests-per-15-minutes check against the
// `contact_rate_limits` table instead (see supabase/2026-09-30_contact_antispam_tables.sql).
// Fails OPEN: if the Supabase call itself errors, we don't block a real
// submission over an infra hiccup — we just skip the rate-limit check for it.
async function isRateLimited(ip) {
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3
  const now = new Date()

  try {
    const { data: existing } = await supabase
      .from('contact_rate_limits')
      .select('count, window_start')
      .eq('ip', ip)
      .maybeSingle()

    if (!existing || now - new Date(existing.window_start) > windowMs) {
      await supabase
        .from('contact_rate_limits')
        .upsert({ ip, count: 1, window_start: now.toISOString() })
      return false
    }

    if (existing.count >= maxRequests) return true

    await supabase
      .from('contact_rate_limits')
      .update({ count: existing.count + 1 })
      .eq('ip', ip)
    return false
  } catch (err) {
    console.error('Rate limit check failed, failing open:', err)
    return false
  }
}

// ── Cloudflare Turnstile server-side verification ───────────────────────────
// The frontend widget only disables the submit button in the browser — that's
// a UI nicety, not a security check. A bot posts straight to this endpoint
// and never has to touch the button. This is the check that actually matters:
// it asks Cloudflare directly whether the token is real, and — beyond just
// `success` — that it was solved for *this* surface (`action`) on *this*
// domain (`hostname`), so a token can't be solved once and replayed elsewhere.
// Returns { ok, detail }. `detail` is stored in the spam log when a check fails,
// so the real reason (Cloudflare error code, wrong hostname, wrong action) is
// visible instead of a bare "turnstile".
async function verifyTurnstile(token, ip, expectedAction) {
  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) {
    return { ok: false, detail: { why: 'missing_or_malformed_token' } }
  }

  let result
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(10_000),
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    })
    if (!res.ok) throw new Error(`siteverify ${res.status}`)
    result = await res.json()
  } catch (err) {
    console.error('Turnstile verification request failed:', err)
    // Fail closed here: if Cloudflare can't be reached, treat as unverified
    // rather than letting every submission through until it's back up.
    return { ok: false, detail: { why: 'siteverify_unreachable', error: String(err) } }
  }

  const errorCodes = Array.isArray(result['error-codes']) ? result['error-codes'] : []

  // Our own misconfiguration (secret missing/wrong in the server env) is not the
  // visitor's fault. Don't throw real enquiries away over it: let it through and
  // shout in the logs so it gets fixed.
  if (errorCodes.includes('missing-input-secret') || errorCodes.includes('invalid-input-secret')) {
    console.error('TURNSTILE_SECRET_KEY is missing or wrong — verification is NOT working:', errorCodes)
    return { ok: true, detail: { why: 'secret_misconfigured', errorCodes } }
  }

  const hostname = String(result.hostname || '').toLowerCase()
  const ok =
    result.success === true &&
    result.action === expectedAction &&
    EXPECTED_HOSTNAMES.has(hostname)

  return {
    ok,
    detail: {
      success: result.success,
      errorCodes,
      action: result.action ?? null,
      expectedAction,
      hostname: result.hostname ?? null,
    },
  }
}

// ── Spam/blocked-submission log ─────────────────────────────────────────────
// Deliberately a separate table from `contact_requests` — the admin dashboard
// reads every row in that table with no status filter, so a spam row there
// would show up in the real leads list. Best-effort: a logging failure should
// never be the reason a legitimate request fails.
async function logBlocked(reason, body, ip, detail) {
  try {
    // Never store the Turnstile token itself; keep why the check failed.
    const { turnstileToken: _omit, ...safeBody } = body || {}
    await supabase.from('contact_spam_log').insert([{
      reason,
      ip,
      source_page: body?.source_page || null,
      name: body?.name || null,
      email: body?.email || null,
      mobile: body?.mobile || null,
      message: body?.message || null,
      raw: detail ? { ...safeBody, _verify: detail } : safeBody,
    }])
  } catch (err) {
    console.error('Failed to log blocked submission:', err)
  }
}

// ── Human-looking blocked submissions get an e-mail, so nothing real is lost ──
// A blocked submission is answered with "success" (so bots learn nothing), which
// means a real person caught by a false positive would vanish without a trace.
// If what was blocked still reads like a genuine enquiry, tell the team so they
// can follow up. Gibberish bot runs fail this test and stay silent.
function isGibberishName(name) {
  const n = String(name || '').trim()
  if (/\s/.test(n) || n.length < 10) return false
  return (n.match(/[a-z][A-Z]/g) || []).length >= 3
}

function looksHuman(body) {
  const msg = String(body?.message || '').trim()
  return (
    isValidEmail(String(body?.email || '')) &&
    !isGibberishName(body?.name) &&
    msg.length >= 15 &&
    !/^\d+$/.test(msg) &&
    (msg.match(/\s+/g) || []).length >= 2
  )
}

async function notifyBlockedForReview(reason, body, detail) {
  try {
    if (!looksHuman(body)) return
    await resend.emails.send({
      from: 'MARC Glocal <contact@marcglocal.com>',
      to: NOTIFY_EMAILS,
      subject: `⚠️ Blocked enquiry may be genuine – ${cleanSubject(body?.name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #8A5A06; margin-top: 0;">Blocked by spam filter (${esc(reason)}), but it looks like a real enquiry</h2>
          <p><b>Name:</b> ${esc(body?.name)}<br/>
             <b>Email:</b> ${esc(body?.email)}<br/>
             <b>Mobile:</b> ${esc(body?.mobile)}<br/>
             <b>Company:</b> ${esc(body?.company) || '—'}<br/>
             <b>Service:</b> ${esc(body?.service) || '—'}<br/>
             <b>Source:</b> ${esc(body?.source_page)}</p>
          <p style="white-space: pre-line;"><b>Message:</b><br/>${esc(body?.message)}</p>
          <p style="font-size:12px;color:#777;">Filter detail: ${esc(JSON.stringify(detail || {}))}. Saved in contact_spam_log.</p>
        </div>`,
      replyTo: body.email,
    })
  } catch (err) {
    console.error('Failed to send blocked-review notification:', err)
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name, email, mobile, message, company, service, source_page,
      // Anti-spam fields
      website,       // honeypot — must be empty
      formLoadedAt,  // timestamp when form loaded (legacy; clock-dependent)
      formElapsedMs, // ms the visitor spent on the form, measured on THEIR clock
      turnstileToken, // Cloudflare Turnstile token (required for sources in TURNSTILE_REQUIRED_SOURCES)
      // Attribution (see lib/attribution.js) — null when absent, that's fine
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid,
    } = body

    const ip = getClientIp(request)

    // ── 1. Honeypot check ─────────────────────────────────────────────────────
    if (website && website.trim() !== '') {
      // Bot filled the hidden field — silently accept (don't tip off bots)
      await logBlocked('honeypot', body, ip)
      return Response.json({ success: true })
    }

    // ── 2. Time check (bots submit instantly; missing = direct API call) ────────
    // Use the duration measured in the visitor's own browser (formElapsedMs).
    // The old check compared the visitor's clock with the server's clock, so a
    // phone whose clock ran ~20 s fast looked like an instant bot and real
    // enquiries were silently dropped. The chatbot and pop-up have no real
    // "form open" moment, so they are exempt (their timestamp was a fixed fake).
    const TIMING_EXEMPT = new Set(['Chatbot Widget', 'Lead Capture Popup'])
    const fillMs = formElapsedMs === undefined || formElapsedMs === null ? null : Number(formElapsedMs)
    const noTimingSignal = fillMs === null && !formLoadedAt // direct API call
    const tooFast = fillMs !== null && Number.isFinite(fillMs) && fillMs >= 0 && fillMs < 2000
    if (!TIMING_EXEMPT.has(source_page) && (noTimingSignal || tooFast)) {
      await logBlocked('timing', body, ip)
      await notifyBlockedForReview('timing', body)
      return Response.json({ success: true })
    }

    // ── 3. Rate limit by IP (persistent — see contact_rate_limits table) ──────
    if (await isRateLimited(ip)) {
      await logBlocked('rate_limit', body, ip)
      return Response.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    // ── 4. Turnstile verification (the check that actually stops bots that ────
    //      render real pages — honeypot/timing only catch naive bots) ─────────
    if (TURNSTILE_REQUIRED_SOURCES.has(source_page)) {
      const expectedAction = TURNSTILE_REQUIRED_SOURCES.get(source_page)
      const verdict = await verifyTurnstile(turnstileToken, ip, expectedAction)
      if (!verdict.ok) {
        await logBlocked('turnstile', body, ip, verdict.detail)
        await notifyBlockedForReview('turnstile', body, verdict.detail)
        return Response.json({ success: true }) // silent reject, same as the other bot checks
      }
    }

    // ── 5. Basic field validation ─────────────────────────────────────────────
    if (!name || !email || !mobile || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    // Reject obviously fake names: require at least two space-separated words,
    // so a single unbroken gibberish string (e.g. "dshStTfLISCMNGcwvGK") fails
    // where the old charset-only check let it through.
    // Real names can be one word ("Karan", "Zaid") or contain punctuation, so the
    // old "at least two words, letters only" rule rejected genuine people. Reject
    // only what is clearly not a name: no letters, links/emails, too long, or the
    // unbroken mixed-case gibberish the bot run used.
    const trimmedName = String(name).trim()
    const looksLikeName =
      trimmedName.length >= 2 &&
      trimmedName.length <= 80 &&
      /\p{L}/u.test(trimmedName) &&
      !/https?:|www\.|@/i.test(trimmedName) &&
      !isGibberishName(trimmedName)
    const looksLikeEmail = isValidEmail(email)
    // Reject a message that's just digits, or too short to be a real enquiry —
    // catches the "message: 4673663851" pattern from the bot run.
    const looksLikeMessage = message.trim().length >= 10 && !/^\d+$/.test(message.trim())

    if (!looksLikeName || !looksLikeEmail || !looksLikeMessage) {
      await logBlocked(
        !looksLikeName ? 'pattern_name' : !looksLikeEmail ? 'pattern_email' : 'pattern_message',
        body,
        ip
      )
      await notifyBlockedForReview('pattern', body)
      return Response.json({ success: true }) // silent reject
    }

    // ── 6. Save to Supabase ───────────────────────────────────────────────────
    const fullMessage = [
      message,
      company ? `Company: ${company}` : '',
      service  ? `Service: ${service}`  : '',
    ].filter(Boolean).join('\n')

    const { error: sbError } = await supabase
      .from('contact_requests')
      .insert([{
        name,
        email,
        mobile,
        message: fullMessage,
        source_page: source_page || 'Website',
        created_at: new Date().toISOString(),
        status: 'new',
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        utm_term: utm_term || null,
        utm_content: utm_content || null,
        gclid: gclid || null,
        fbclid: fbclid || null,
      }])

    if (sbError) {
      console.error('Supabase error:', sbError)
      return Response.json({ success: false, error: 'Database error' }, { status: 500 })
    }

    const isChatbot = source_page === 'Chatbot Widget'

    // ── 7. Send notification email to the team ────────────────────────────────
    await resend.emails.send({
      from: 'MARC Glocal <contact@marcglocal.com>',
      to: NOTIFY_EMAILS,
      subject: isChatbot
        ? `💬 New Chatbot Lead – ${cleanSubject(name)} (${cleanSubject(company) || 'Unknown Company'})`
        : `New Lead from Website – ${cleanSubject(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
            ${isChatbot ? '💬 New Chatbot Enquiry' : 'New Contact Form Submission'}
          </h2>

          ${isChatbot ? `
          <div style="margin-bottom: 16px; padding: 10px 14px; background: #EAF5E6; border-left: 4px solid #4E9141; border-radius: 4px; font-size: 13px; color: #1D342F;">
            This lead came through the <strong>chatbot widget</strong> on the website.
          </div>` : ''}

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 10px 8px; color: #1D342F;">${esc(name)}</td>
            </tr>
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Email</td>
              <td style="padding: 10px 8px; color: #1D342F;">
                <a href="mailto:${esc(email)}" style="color: #4E9141;">${esc(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Mobile</td>
              <td style="padding: 10px 8px; color: #1D342F;">${esc(mobile) || '—'}</td>
            </tr>
            ${company ? `
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Company</td>
              <td style="padding: 10px 8px; color: #1D342F;">${esc(company)}</td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Service</td>
              <td style="padding: 10px 8px; color: #1D342F;">${esc(service)}</td>
            </tr>` : ''}
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Message</td>
              <td style="padding: 10px 8px; color: #1D342F; white-space: pre-line;">${esc(message) || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Source</td>
              <td style="padding: 10px 8px; color: #1D342F;">${source_page || 'Website'}</td>
            </tr>
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Time</td>
              <td style="padding: 10px 8px; color: #1D342F;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 12px 16px; background: #F7FFF5; border-left: 4px solid #4E9141; border-radius: 4px;">
            <p style="margin: 0; font-size: 13px; color: #47635D;">
              Reply directly to this email or reach out at
              <a href="mailto:${esc(email)}" style="color: #4E9141;">${esc(email)}</a>
            </p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa; text-align: center;">
            MARC Glocal — marcglocal.com
          </p>
        </div>
      `,
      replyTo: email,
    })

    // ── 8. Send auto-reply to the lead — only ever reached once every check above
    //      has passed, so a bot can no longer use this endpoint to relay mail to a
    //      third party's inbox under marcglocal.com's name. ─────────────────────
    await resend.emails.send({
      from: 'MARC Glocal <contact@marcglocal.com>',
      to: email,
      subject: isChatbot
        ? `Great speaking with you, ${cleanSubject(name)}! We'll be in touch soon.`
        : `Thank you for reaching out, ${cleanSubject(name)}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
            ${isChatbot ? "Thanks for chatting with us! 👋" : "We've received your message"}
          </h2>

          <p style="color: #1D342F; line-height: 1.6;">Dear ${esc(name)},</p>
          ${isChatbot ? `
          <p style="color: #1D342F; line-height: 1.6;">
            It was great connecting with you through our chat! We've saved your details and a member of the MARC Glocal team will reach out to you within <strong>1–2 business days</strong>.
          </p>
          <p style="color: #1D342F; line-height: 1.6;">
            If you'd like to get in touch sooner, feel free to WhatsApp us or drop an email at
            <a href="mailto:contact@marcglocal.com" style="color: #4E9141;">contact@marcglocal.com</a>.
          </p>` : `
          <p style="color: #1D342F; line-height: 1.6;">
            Thank you for contacting MARC Glocal. We have received your enquiry and our team will get back to you within <strong>1–2 business days</strong>.
          </p>`}
          <p style="color: #1D342F; line-height: 1.6;">
            In the meantime, feel free to explore our services at
            <a href="https://marcglocal.com" style="color: #4E9141;">marcglocal.com</a>.
          </p>

          <p style="color: #1D342F; margin-top: 24px;">
            Warm regards,<br/>
            <strong>MARC Glocal Team</strong><br/>
            <a href="mailto:contact@marcglocal.com" style="color: #4E9141;">contact@marcglocal.com</a>
          </p>

          <p style="margin-top: 24px; font-size: 12px; color: #aaa; text-align: center;">
            MARC Glocal — marcglocal.com
          </p>
        </div>
      `,
    })

    return Response.json({ success: true })

  } catch (err) {
    console.error('Contact API error:', err)
    return Response.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}