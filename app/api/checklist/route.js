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

// ── Table (Supabase SQL editor) ──────────────────────────────────────────
// create table public.checklist_leads (
//   id uuid not null default gen_random_uuid (),
//   name text null,
//   email text null,
//   source text null,
//   utm_source text null,
//   utm_medium text null,
//   utm_campaign text null,
//   utm_term text null,
//   utm_content text null,
//   gclid text null,
//   fbclid text null,
//   created_at timestamp with time zone null default now(),
//   constraint checklist_leads_pkey primary key (id)
// );
//
// Already created this table from an earlier delivery without the utm_*/
// gclid/fbclid columns? Run this instead:
//   alter table public.checklist_leads
//     add column if not exists utm_source text,
//     add column if not exists utm_medium text,
//     add column if not exists utm_campaign text,
//     add column if not exists utm_term text,
//     add column if not exists utm_content text,
//     add column if not exists gclid text,
//     add column if not exists fbclid text;

export async function POST(request) {
  try {
    const { lead, source, attribution } = await request.json()

    if (!lead?.email) {
      return Response.json({ success: false, error: 'Missing email' }, { status: 400 })
    }

    const { error } = await supabase.from('checklist_leads').insert({
      name: lead.name || null,
      email: lead.email,
      source: source || 'Feasibility Page',
      utm_source: attribution?.utm_source || null,
      utm_medium: attribution?.utm_medium || null,
      utm_campaign: attribution?.utm_campaign || null,
      utm_term: attribution?.utm_term || null,
      utm_content: attribution?.utm_content || null,
      gclid: attribution?.gclid || null,
      fbclid: attribution?.fbclid || null,
    })

    if (error) {
      console.error('[checklist] Supabase insert error:', error)
      // Still let the download proceed client-side even if the DB write
      // fails — don't block the lead's PDF over a logging failure.
    }

    try {
      await resend.emails.send({
        from: 'MARC Glocal <contact@marcglocal.com>',
        to: lead.email,
        subject: 'Your India Feasibility Checklist',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color:#1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
              Your India Feasibility Checklist
            </h2>
            <p style="color:#1D342F; line-height:1.6;">Hi ${lead.name || 'there'},</p>
            <p style="color:#1D342F; line-height:1.6;">
              Thanks for downloading the India Feasibility Checklist — you should already have
              the PDF from the page. Keeping a copy in your inbox too, in case it's easier to
              find later.
            </p>
            <p style="color:#1D342F; line-height:1.6;">
              If working through it raises questions about your specific situation, our
              feasibility team is happy to talk it through —
              <a href="https://marcglocal.com/contact-us" style="color:#4E9141;">get in touch here</a>.
            </p>
            <p style="color:#1D342F; margin-top: 24px;">
              Best,<br/><strong>MARC Glocal Team</strong>
            </p>
          </div>
        `,
      })

      await resend.emails.send({
        from: 'MARC Glocal <contact@marcglocal.com>',
        to: NOTIFY_EMAILS,
        subject: `📋 Feasibility Checklist Download – ${lead.name || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
              New Feasibility Checklist Download
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr><td style="padding:8px; font-weight:bold; color:#47635D; width:120px;">Name</td><td style="padding:8px;">${lead.name || '—'}</td></tr>
              <tr style="background:#F7FFF5;"><td style="padding:8px; font-weight:bold; color:#47635D;">Email</td><td style="padding:8px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#47635D;">Source</td><td style="padding:8px;">${source || 'Feasibility Page'}</td></tr>
            </table>
          </div>
        `,
      })
    } catch (mailErr) {
      console.error('[checklist] email error:', mailErr)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[checklist] API error:', err)
    return Response.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
