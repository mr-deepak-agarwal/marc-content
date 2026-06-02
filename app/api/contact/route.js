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
  'digitalinfusive@gmail.com',
]

// ── In-memory rate limiter (resets on cold start, good enough for edge bots) ──
const rateLimitMap = new Map()

function isRateLimited(ip) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 3

  const record = rateLimitMap.get(ip) || { count: 0, start: now }

  // Reset window if expired
  if (now - record.start > windowMs) {
    rateLimitMap.set(ip, { count: 1, start: now })
    return false
  }

  if (record.count >= maxRequests) return true

  rateLimitMap.set(ip, { count: record.count + 1, start: record.start })
  return false
}

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name, email, mobile, message, company, service, source_page,
      // Anti-spam fields
      website,       // honeypot — must be empty
      formLoadedAt,  // timestamp when form loaded
    } = body

    // ── 1. Honeypot check ─────────────────────────────────────────────────────
    if (website && website.trim() !== '') {
      // Bot filled the hidden field — silently accept (don't tip off bots)
      return Response.json({ success: true })
    }

    // ── 2. Time check (bots submit instantly) ─────────────────────────────────
    if (formLoadedAt) {
      const elapsed = Date.now() - Number(formLoadedAt)
      if (elapsed < 3000) {
        // Submitted in under 3 seconds — almost certainly a bot
        return Response.json({ success: true })
      }
    }

    // ── 3. Rate limit by IP ───────────────────────────────────────────────────
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown'

    if (isRateLimited(ip)) {
      return Response.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }

    // ── 4. Basic field validation ─────────────────────────────────────────────
    if (!name || !email || !mobile || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    // Reject obviously fake names/emails (all random chars, no spaces or dots)
    const looksLikeName = /^[a-zA-Z\s'-]{2,}$/.test(name.trim())
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
    if (!looksLikeName || !looksLikeEmail) {
      return Response.json({ success: true }) // silent reject
    }

    // ── 5. Save to Supabase ───────────────────────────────────────────────────
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
      }])

    if (sbError) {
      console.error('Supabase error:', sbError)
      return Response.json({ success: false, error: 'Database error' }, { status: 500 })
    }

    // ── 6. Send notification email to the team ────────────────────────────────
    await resend.emails.send({
      from: 'MARC Glocal <contact@marcglocal.com>',
      to: NOTIFY_EMAILS,
      subject: `New Lead from Website – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
            New Contact Form Submission
          </h2>

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

    // ── 7. Send auto-reply to the lead ────────────────────────────────────────
    await resend.emails.send({
      from: 'MARC Glocal <contact@marcglocal.com>',
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
            We've received your message
          </h2>

          <p style="color: #1D342F; line-height: 1.6;">Dear ${name},</p>
          <p style="color: #1D342F; line-height: 1.6;">
            Thank you for contacting MARC Glocal. We have received your enquiry and our team will get back to you within <strong>1–2 business days</strong>.
          </p>
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