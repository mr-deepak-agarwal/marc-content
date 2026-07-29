// lib/analytics.js
//
// Single place that fires a "real conversion happened" signal to every ad
// platform at once, instead of each component knowing about GA4/Ads/Meta
// individually. Call trackConversion() from the exact moment a lead is
// captured — not on page view, not on button hover.
//
// IMPORTANT — two things here need YOUR input before they do anything on
// the Google Ads / Meta side (until then, GA4 tracking still works fine,
// these are additive):
//
// 1. GOOGLE_ADS_CONVERSION_LABELS below are all `null`. Google Ads doesn't
//    let code invent a conversion label — you create each "conversion
//    action" in Google Ads UI (Goals > Conversions > + New conversion
//    action > Website), then it gives you a label like 'AbCdEfGhIjKlMnOp'.
//    Paste that in below. Until you do, trackConversion() still fires the
//    GA4 event (so you can mark it a GA4 conversion and import it into Ads
//    instead, if you'd rather not create 6 separate Ads conversion actions).
//
// 2. META_PIXEL_ID comes from NEXT_PUBLIC_META_PIXEL_ID (see app/layout.jsx)
//    — create a Pixel in Meta Events Manager and set that env var. Until
//    it's set, window.fbq never loads and the Meta call below is a no-op.

export const GOOGLE_ADS_ID = 'AW-928957158'

// TODO(client): paste real conversion labels here as you create them in
// Google Ads. Format is just the part after the slash, e.g. 'AbCdEfGhIjKlMnOp'.
export const GOOGLE_ADS_CONVERSION_LABELS = {
  form_submit: null,
  chatbot_high_intent: null,
  chatbot_low_intent: null,
  scorecard_complete: null,
  checklist_download: null,
  whatsapp_click: null,
}

/**
 * Enhanced Conversions for Leads (Google Ads).
 * Sends the lead's own email/phone to Google so a later offline close can
 * be matched back to the ad click, even across devices. Google hashes this
 * client-side — never send an already-hashed value here, gtag expects
 * plain text and hashes it itself.
 *
 * Requires "Enhanced conversions for leads" turned ON in Google Ads
 * (Admin > Conversions > Settings) — the call is harmless either way, it
 * just does nothing until that's switched on.
 */
export function setEnhancedConversionData({ email, phone } = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const userData = {}
  if (email) userData.email = email
  if (phone) userData.phone_number = phone
  if (Object.keys(userData).length > 0) {
    window.gtag('set', 'user_data', userData)
  }
}

/**
 * Fire this at the exact moment a real lead action completes.
 *
 * @param {string} eventName - one of the keys in GOOGLE_ADS_CONVERSION_LABELS,
 *   or any custom name if you only care about the GA4 side.
 * @param {object} opts
 * @param {string} [opts.email] - enables Enhanced Conversions if present
 * @param {string} [opts.phone]
 * @param {number} [opts.value] - conversion value, defaults to 0 (fine for
 *   lead-gen; only set this if you're valuing leads differently by type)
 * @param {object} [opts.params] - any extra GA4 event params (source, etc.)
 */
export function trackConversion(eventName, { email, phone, value = 0, ...params } = {}) {
  if (typeof window === 'undefined') return

  try {
    if (email || phone) setEnhancedConversionData({ email, phone })

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)

      const label = GOOGLE_ADS_CONVERSION_LABELS[eventName]
      if (label) {
        window.gtag('event', 'conversion', {
          send_to: `${GOOGLE_ADS_ID}/${label}`,
          value,
          currency: 'INR',
          ...params,
        })
      }
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: eventName, ...params })
    }
  } catch (err) {
    // Tracking must never break the actual user flow
    console.warn('[analytics] trackConversion failed:', err)
  }
}
