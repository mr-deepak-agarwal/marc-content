import { getSupabaseAdmin } from '@/lib/supabaseAdmin'

// Persistent per-IP rate limiting backed by the `contact_rate_limits` table.
// `scope` namespaces the counter so different endpoints don't share a budget
// (stored in the existing `ip` column as "<scope>:<ip>").
//
// Fails OPEN on infra errors so a Supabase hiccup never blocks a real visitor.
// Returns true when the caller should be rejected.
export async function isRateLimited(scope, ip, { max = 5, windowMs = 60 * 60 * 1000 } = {}) {
  const supabase = getSupabaseAdmin()
  const key = `${scope}:${ip}`
  const now = new Date()

  try {
    const { data: existing } = await supabase
      .from('contact_rate_limits')
      .select('count, window_start')
      .eq('ip', key)
      .maybeSingle()

    if (!existing || now - new Date(existing.window_start) > windowMs) {
      await supabase
        .from('contact_rate_limits')
        .upsert({ ip: key, count: 1, window_start: now.toISOString() })
      return false
    }

    if (existing.count >= max) return true

    await supabase
      .from('contact_rate_limits')
      .update({ count: existing.count + 1 })
      .eq('ip', key)
    return false
  } catch (err) {
    console.error(`[rateLimit:${scope}] check failed, failing open:`, err)
    return false
  }
}
