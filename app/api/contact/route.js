import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

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
const EXPECTED_HOSTNAMES = new Set(
  (process.env.TURNSTILE_HOSTNAMES || 'marcglocal.com')
    .split(',')
    .map((h) => h.trim())
    .filter(Boolean)
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
async function verifyTurnstile(token, ip, expectedAction) {
  if (typeof token !== 'string' || token.length === 0 || token.length > 2048) return false

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
    return false
  }

  return (
    result.success === true &&
    result.action === expectedAction &&
    EXPECTED_HOSTNAMES.has(result.hostname)
  )
}

// ── Spam/blocked-submission log ─────────────────────────────────────────────
// Deliberately a separate table from `contact_requests` — the admin dashboard
// reads every row in that table with no status filter, so a spam row there
// would show up in the real leads list. Best-effort: a logging failure should
// never be the reason a legitimate request fails.
async function logBlocked(reason, body, ip) {
  try {
    await supabase.from('contact_spam_log').insert([{
      reason,
      ip,
      source_page: body?.source_page || null,
      name: body?.name || null,
      email: body?.email || null,
      mobile: body?.mobile || null,
      message: body?.message || null,
      raw: body,
    }])
  } catch (err) {
    console.error('Failed to log blocked submission:', err)
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name, email, mobile, message, company, service, source_page,
      // Anti-spam fields
      website,       // honeypot — must be empty
      formLoadedAt,  // timestamp when form loaded
      turnstileToken, // Cloudflare Turnstile token (required for sources in TURNSTILE_REQUIRED_SOURCES)
      // Attribution (see lib/attribution.js) — null when absent, that's fine
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid,
    } = body

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // ── 1. Honeypot check ─────────────────────────────────────────────────────
    if (website && website.trim() !== '') {
      // Bot filled the hidden field — silently accept (don't tip off bots)
      await logBlocked('honeypot', body, ip)
      return Response.json({ success: true })
    }

    // ── 2. Time check (bots submit instantly; missing = direct API call) ────────
    const elapsed = formLoadedAt ? Date.now() - Number(formLoadedAt) : 0
    if (elapsed < 3000) {
      // Under 3 s or no timestamp — almost certainly a bot or raw API call
      await logBlocked('timing', body, ip)
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
      const humanVerified = await verifyTurnstile(turnstileToken, ip, expectedAction)
      if (!humanVerified) {
        await logBlocked('turnstile', body, ip)
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
    const looksLikeName = /^[a-zA-Z'-]+(\s+[a-zA-Z'-]+)+$/.test(name.trim())
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
    // Reject a message that's just digits, or too short to be a real enquiry —
    // catches the "message: 4673663851" pattern from the bot run.
    const looksLikeMessage = message.trim().length >= 10 && !/^\d+$/.test(message.trim())

    if (!looksLikeName || !looksLikeEmail || !looksLikeMessage) {
      await logBlocked(
        !looksLikeName ? 'pattern_name' : !looksLikeEmail ? 'pattern_email' : 'pattern_message',
        body,
        ip
      )
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
        ? `💬 New Chatbot Lead – ${name} (${company || 'Unknown Company'})`
        : `New Lead from Website – ${name}`,
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
              <td style="padding: 10px 8px; color: #1D342F;">${name}</td>
            </tr>
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Email</td>
              <td style="padding: 10px 8px; color: #1D342F;">
                <a href="mailto:${email}" style="color: #4E9141;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Mobile</td>
              <td style="padding: 10px 8px; color: #1D342F;">${mobile || '—'}</td>
            </tr>
            ${company ? `
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Company</td>
              <td style="padding: 10px 8px; color: #1D342F;">${company}</td>
            </tr>` : ''}
            ${service ? `
            <tr>
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Service</td>
              <td style="padding: 10px 8px; color: #1D342F;">${service}</td>
            </tr>` : ''}
            <tr style="background: #F7FFF5;">
              <td style="padding: 10px 8px; font-weight: bold; color: #47635D; vertical-align: top;">Message</td>
              <td style="padding: 10px 8px; color: #1D342F; white-space: pre-line;">${message || '—'}</td>
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
              <a href="mailto:${email}" style="color: #4E9141;">${email}</a>
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
        ? `Great speaking with you, ${name}! We'll be in touch soon.`
        : `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
            ${isChatbot ? "Thanks for chatting with us! 👋" : "We've received your message"}
          </h2>

          <p style="color: #1D342F; line-height: 1.6;">Dear ${name},</p>
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