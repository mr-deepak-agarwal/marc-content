// lib/consent.js
// Minimal cookie-based consent store + Google Consent Mode v2 helper.
// No external deps. Client-side only (safe no-ops during SSR).

const CONSENT_COOKIE = 'marc_consent' // 'granted' | 'denied'
const CONSENT_MAX_AGE_DAYS = 365

export function getStoredConsent() {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

export function storeConsent(value) {
  if (typeof document === 'undefined') return
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`
}

// Pushes an update to Google Consent Mode v2, and Meta Pixel's consent API
// if the pixel is loaded. Safe to call even if gtag/fbq haven't loaded yet
// — each just won't do anything until it has.
export function pushConsentUpdate(granted) {
  const state = granted ? 'granted' : 'denied'
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    })
  }
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('consent', granted ? 'grant' : 'revoke')
  }
}
