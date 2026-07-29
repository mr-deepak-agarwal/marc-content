import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { day0Email } from '@/lib/nurtureEmails'

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
//
// create table public.scorecard_responses (
//   id uuid not null default gen_random_uuid (),
//   session_id text null,
//   data jsonb null,
//   completed boolean null default false,
//   created_at timestamp with time zone null default now(),
//   updated_at timestamp with time zone null default now(),
//   constraint scorecard_responses_pkey primary key (id),
//   constraint scorecard_responses_session_id_key unique (session_id)
// );
//
// `data` holds: { lead, answers, score, category, dimensionScores, source,
//                 nurture: { day3_due, day7_due, day14_due,
//                            day3_sent, day7_sent, day14_sent } }
// Same single-jsonb-column pattern as checkup_responses — see
// app/api/checkup/route.js for the precedent this follows.
//
// The cron job (app/api/cron/nurture/route.js) reads rows where completed
// = true and the relevant *_due timestamp has passed and *_sent is not
// true yet, sends that stage's email, and flags it sent.

function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d.toISOString()
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId, lead, answers, score, category, dimensionScores, completed, source, attribution } = body

    if (!sessionId) {
      return Response.json({ success: false, error: 'Missing sessionId' }, { status: 400 })
    }

    const { data: existing } = await supabase
      .from('scorecard_responses')
      .select('data, completed')
      .eq('session_id', sessionId)
      .maybeSingle()

    const wasAlreadyCompleted = existing?.completed === true
    const nowCompleting = completed === true && !wasAlreadyCompleted

    const mergedData = {
      ...(existing?.data || {}),
      ...(lead !== undefined ? { lead } : {}),
      ...(answers !== undefined ? { answers } : {}),
      ...(score !== undefined ? { score } : {}),
      ...(category !== undefined ? { category } : {}),
      ...(dimensionScores !== undefined ? { dimensionScores } : {}),
      ...(source !== undefined ? { source } : {}),
      ...(attribution !== undefined ? { attribution } : {}),
    }

    // Schedule the nurture sequence the moment the lead completes the
    // assessment (not before — partial/abandoned sessions never enter it).
    if (nowCompleting) {
      const now = new Date()
      mergedData.nurture = {
        day3_due: addDays(now, 3),
        day7_due: addDays(now, 7),
        day14_due: addDays(now, 14),
        day3_sent: false,
        day7_sent: false,
        day14_sent: false,
      }
    }

    const { error } = await supabase
      .from('scorecard_responses')
      .upsert(
        {
          session_id: sessionId,
          data: mergedData,
          completed: completed ?? existing?.completed ?? false,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'session_id' }
      )

    if (error) {
      console.error('[scorecard] Supabase upsert error:', error)
      return Response.json({ success: false, error: error.message }, { status: 500 })
    }

    // ── Fire the Day 0 email + internal notification, once, on completion ──
    if (nowCompleting && lead?.email) {
      try {
        const { subject, html } = day0Email({
          name: lead.name || 'there',
          score,
          category,
          industry: lead.industry,
        })
        await resend.emails.send({
          from: 'MARC Glocal <contact@marcglocal.com>',
          to: lead.email,
          subject,
          html,
        })

        await resend.emails.send({
          from: 'MARC Glocal <contact@marcglocal.com>',
          to: NOTIFY_EMAILS,
          subject: `📊 New Scorecard Lead – ${lead.name} (${lead.company || 'Unknown Company'}) – ${category}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
              <h2 style="color: #1D342F; border-bottom: 2px solid #4E9141; padding-bottom: 12px; margin-top: 0;">
                New India Market Entry &amp; Feasibility Scorecard Submission
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr><td style="padding:8px; font-weight:bold; color:#47635D; width:140px;">Name</td><td style="padding:8px;">${lead.name || '—'}</td></tr>
                <tr style="background:#F7FFF5;"><td style="padding:8px; font-weight:bold; color:#47635D;">Email</td><td style="padding:8px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
                <tr><td style="padding:8px; font-weight:bold; color:#47635D;">Company</td><td style="padding:8px;">${lead.company || '—'}</td></tr>
                <tr style="background:#F7FFF5;"><td style="padding:8px; font-weight:bold; color:#47635D;">Industry</td><td style="padding:8px;">${lead.industry || '—'}</td></tr>
                <tr><td style="padding:8px; font-weight:bold; color:#47635D;">Score</td><td style="padding:8px;">${score}/100 — ${category}</td></tr>
                <tr style="background:#F7FFF5;"><td style="padding:8px; font-weight:bold; color:#47635D;">Source</td><td style="padding:8px;">${source || 'Scorecard'}</td></tr>
              </table>
            </div>
          `,
        })
      } catch (mailErr) {
        // Don't fail the whole request if email delivery has an issue —
        // the lead is already saved either way.
        console.error('[scorecard] Day 0 email error:', mailErr)
      }
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[scorecard] API error:', err)
    return Response.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
