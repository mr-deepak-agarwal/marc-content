import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { day3Email, day7Email, day14Email } from '@/lib/nurtureEmails'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)
const resend = new Resend(process.env.RESEND_API_KEY)

// Triggered daily by Vercel Cron (see vercel.json). Also callable manually
// for testing — protected by CRON_SECRET so it can't be hit by randoms.
//
// Logic: pull every completed scorecard response, check each of the 3
// remaining stages (day3/day7/day14) — if the due date has passed and
// that stage hasn't been sent yet, send it and flag it sent. Runs daily
// rather than trying to schedule exact-time sends, which is the standard
// pattern for a lightweight nurture sequence without a dedicated email
// automation platform.

const STAGES = [
  { key: 'day3', dueField: 'day3_due', sentField: 'day3_sent', build: day3Email },
  { key: 'day7', dueField: 'day7_due', sentField: 'day7_sent', build: day7Email },
  { key: 'day14', dueField: 'day14_due', sentField: 'day14_sent', build: day14Email },
]

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { data: rows, error } = await supabase
      .from('scorecard_responses')
      .select('id, session_id, data')
      .eq('completed', true)

    if (error) throw error

    const now = new Date()
    let sentCount = 0
    const errors = []

    for (const row of rows || []) {
      const nurture = row.data?.nurture
      const lead = row.data?.lead
      if (!nurture || !lead?.email) continue

      let updatedNurture = null

      for (const stage of STAGES) {
        const due = nurture[stage.dueField]
        const alreadySent = nurture[stage.sentField]
        if (!due || alreadySent) continue
        if (new Date(due) > now) continue

        try {
          const { subject, html } = stage.build({ name: lead.name || 'there', industry: lead.industry })
          await resend.emails.send({
            from: 'MARC Glocal <contact@marcglocal.com>',
            to: lead.email,
            subject,
            html,
          })
          updatedNurture = { ...nurture, ...(updatedNurture || {}), [stage.sentField]: true }
          sentCount += 1
        } catch (sendErr) {
          errors.push({ session_id: row.session_id, stage: stage.key, error: String(sendErr) })
        }
      }

      if (updatedNurture) {
        await supabase
          .from('scorecard_responses')
          .update({ data: { ...row.data, nurture: updatedNurture }, updated_at: now.toISOString() })
          .eq('id', row.id)
      }
    }

    return Response.json({ success: true, sent: sentCount, errors })
  } catch (err) {
    console.error('[cron/nurture] error:', err)
    return Response.json({ success: false, error: String(err) }, { status: 500 })
  }
}
