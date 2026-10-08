// Shared helpers for API routes. Server-side use only.

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

// Escape user-supplied text before it goes into an HTML email.
// Returns '' for null/undefined so `${esc(x) || '—'}` fallbacks keep working.
export function esc(value) {
  if (value === null || value === undefined) return ''
  return String(value).replace(/[&<>"']/g, (c) => HTML_ESCAPES[c])
}

// Plain-text cleanup for email subjects: no line breaks (header injection), capped length.
export function cleanSubject(value, max = 120) {
  if (value === null || value === undefined) return ''
  return String(value).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max)
}

export function isValidEmail(value) {
  return (
    typeof value === 'string' &&
    value.length <= 254 &&
    /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/.test(value.trim())
  )
}

export function clip(value, max = 500) {
  if (value === null || value === undefined) return ''
  return String(value).slice(0, max)
}

export function getClientIp(request) {
  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  )
}
