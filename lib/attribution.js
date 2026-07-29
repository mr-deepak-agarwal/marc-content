// lib/attribution.js
//
// Captures which campaign/ad actually brought a visitor, and holds onto it
// until they convert — which might be several pages and several minutes
// later. Without this, a lead saved to Supabase has no way to be traced
// back to a specific ad; GA4 tracks it at the session level, but that's
// aggregate reporting, not something you can see next to one lead's name.
//
// Model: most-recent campaign touch wins (if the URL has utm/gclid/fbclid
// params, they overwrite what's stored), but persists for 90 days so an
// organic page-to-page browse after the ad click doesn't erase it.

const STORAGE_KEY = 'marc_attribution'
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000

const TRACKED_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']

export function captureAttribution() {
  if (typeof window === 'undefined') return
  try {
    const params = new URLSearchParams(window.location.search)
    const hasNewParams = TRACKED_PARAMS.some((k) => params.get(k))

    const existingRaw = localStorage.getItem(STORAGE_KEY)
    const existing = existingRaw ? JSON.parse(existingRaw) : null
    const existingFresh = existing && Date.now() - existing.captured_at < MAX_AGE_MS

    if (!hasNewParams && existingFresh) return // nothing new to record

    const record = { captured_at: hasNewParams ? Date.now() : existing?.captured_at || Date.now() }
    TRACKED_PARAMS.forEach((k) => {
      record[k] = params.get(k) || (existingFresh ? existing[k] : null) || null
    })
    record.landing_page = hasNewParams ? window.location.pathname : existing?.landing_page || window.location.pathname

    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch (err) {
    // localStorage can be blocked (private browsing, some in-app browsers) —
    // attribution is a nice-to-have, never let it break the page
  }
}

/** Returns the stored attribution as a flat object ready to spread into a
 *  lead-capture payload — { utm_source, utm_medium, ..., gclid, fbclid }.
 *  All keys are present (null if unset) so API routes can insert them
 *  directly without per-field existence checks. */
export function getAttribution() {
  if (typeof window === 'undefined') {
    return Object.fromEntries(TRACKED_PARAMS.map((k) => [k, null]))
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const stored = raw ? JSON.parse(raw) : null
    const fresh = stored && Date.now() - stored.captured_at < MAX_AGE_MS
    if (!fresh) return Object.fromEntries(TRACKED_PARAMS.map((k) => [k, null]))
    return Object.fromEntries(TRACKED_PARAMS.map((k) => [k, stored[k] || null]))
  } catch {
    return Object.fromEntries(TRACKED_PARAMS.map((k) => [k, null]))
  }
}
