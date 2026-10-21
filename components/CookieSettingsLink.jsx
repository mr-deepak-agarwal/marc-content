'use client'

// Re-opens the cookie banner so a visitor can change or withdraw consent.
export const OPEN_COOKIE_SETTINGS_EVENT = 'marc:open-cookie-settings'

export default function CookieSettingsLink({ className, children = 'Cookie settings' }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
    >
      {children}
    </button>
  )
}
