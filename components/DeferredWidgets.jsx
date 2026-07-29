'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// ssr:false is only legal inside a Client Component, which is why this
// wrapper exists separately from layout.jsx (a Server Component). None of
// these four ever need to be in the server-rendered HTML or the initial JS
// bundle: WhatsApp/Chatbot are fixed buttons that matter once someone is
// already engaged, LeadCapturePopup is timer/scroll-triggered, and the
// cookie banner only needs to exist before the user interacts with the page.
const WhatsAppButton = dynamic(() => import('./WhatsAppButton'), { ssr: false })
const ChatbotWidget = dynamic(() => import('./ChatbotWidget'), { ssr: false })
const LeadCapturePopup = dynamic(() => import('./LeadCapturePopup'), { ssr: false })
const CookieConsentBanner = dynamic(() => import('./CookieConsentBanner'), { ssr: false })

export default function DeferredWidgets({ phoneNumber }) {
  // Wait until the browser is idle (or a short fallback timeout) before even
  // requesting these chunks, so they never compete with hero image / fonts /
  // hydration for bandwidth or main-thread time during the critical path.
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(() => setReady(true), { timeout: 3000 })
      : setTimeout(() => setReady(true), 1500)

    return () => {
      if (window.requestIdleCallback && window.cancelIdleCallback) {
        window.cancelIdleCallback(idle)
      } else {
        clearTimeout(idle)
      }
    }
  }, [])

  if (!ready) return null

  return (
    <>
      <WhatsAppButton phoneNumber={phoneNumber} />
      <ChatbotWidget />
      <LeadCapturePopup />
      <CookieConsentBanner />
    </>
  )
}
