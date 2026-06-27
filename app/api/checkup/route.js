import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// ── Save / update checkup progress ──────────────────────────────────────────
// Table: checkup_responses (id, session_id unique, data jsonb, completed,
// created_at, updated_at). Everything the form collects — lead info,
// answers, AI results, and which step the visitor is on — is packed into
// the single `data` jsonb column, since that's the real table shape.
//
// We upsert on session_id so repeated saves (auto-save on every answer)
// update the same row instead of creating duplicates.
export async function POST(request) {
  try {
    const body = await request.json()
    const { sessionId, lead, answers, results, step, completed } = body

    if (!sessionId) {
      return Response.json({ success: false, error: 'Missing sessionId' }, { status: 400 })
    }

    // Merge with any existing row so a partial save (e.g. just `lead`)
    // never wipes out answers/results saved in an earlier request.
    const { data: existing } = await supabase
      .from('checkup_responses')
      .select('data')
      .eq('session_id', sessionId)
      .maybeSingle()

    const mergedData = {
      ...(existing?.data || {}),
      ...(lead !== undefined ? { lead } : {}),
      ...(answers !== undefined ? { answers } : {}),
      ...(results !== undefined ? { results } : {}),
      ...(step !== undefined ? { step } : {}),
    }

    const { error } = await supabase
      .from('checkup_responses')
      .upsert(
        {
          session_id: sessionId,
          data: mergedData,
          completed: completed ?? false,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'session_id' }
      )

    if (error) {
      console.error('[checkup] Supabase upsert error:', error)
      return Response.json({ success: false, error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('[checkup] API error:', err)
    return Response.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}