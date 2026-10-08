import { getSupabaseAdmin } from '@/lib/supabaseAdmin'
import { isRateLimited } from '@/lib/rateLimit'
import { clip, getClientIp, isValidEmail } from '@/lib/security'

// Logs a gated report download (name/email/mobile/company + which report).
// Previously the browser inserted straight into `report_downloads` with the public
// anon key, which meant anyone could write unlimited rows. Now it goes through here.

export async function POST(request) {
  try {
    const { name, email, mobile, company, report_name } = await request.json()

    if (!name || !isValidEmail(email) || !report_name) {
      return Response.json({ success: false, error: 'Please check your details.' }, { status: 400 })
    }

    if (await isRateLimited('report-download', getClientIp(request), { max: 8 })) {
      return Response.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { error } = await getSupabaseAdmin()
      .from('report_downloads')
      .insert([
        {
          name: clip(name, 120),
          email: clip(email, 254),
          mobile: clip(mobile, 30),
          company: clip(company, 160),
          report_name: clip(report_name, 200),
          downloaded_at: new Date().toISOString(),
        },
      ])

    if (error) {
      console.error('[report-download] Supabase error:', error)
      return Response.json({ success: false, error: 'Could not save your details.' }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[report-download] error:', err)
    return Response.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
