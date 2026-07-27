'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'
import { getStoredConsent, storeConsent, pushConsentUpdate } from '@/lib/consent'

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const existing = getStoredConsent()

    if (!existing) {
      // Small delay so it doesn't slam in before the page has rendered
      const t = setTimeout(() => setVisible(true), 700)
      return () => clearTimeout(t)
    }

    // Returning visitor — re-apply their earlier choice, since Consent Mode
    // always starts each page load in "denied" state until we tell it otherwise.
    pushConsentUpdate(existing === 'granted')
  }, [])

  function handleChoice(granted) {
    storeConsent(granted ? 'granted' : 'denied')
    pushConsentUpdate(granted)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 sm:pb-6 sm:px-6"
    >
      <div className="max-w-3xl mx-auto bg-white border border-[#C2DDB4] rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#F7FFF5] border border-[#C2DDB4] flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-[#4E9141]" />
        </div>

        <div className="flex-1">
          <p className="text-sm text-[#1D342F] leading-relaxed">
            We use cookies to understand site traffic and improve your experience. You can
            accept all cookies or continue with only the essential ones.{' '}
            <Link
              href="/privacy-policy"
              className="text-[#4E9141] underline underline-offset-2 hover:text-[#3e7433]"
            >
              Read our Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
          <button
            onClick={() => handleChoice(false)}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-[#C2DDB4] text-[#47635D] hover:border-[#4E9141] hover:text-[#4E9141] transition-colors"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold bg-[#4E9141] text-white hover:bg-[#3e7433] transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
