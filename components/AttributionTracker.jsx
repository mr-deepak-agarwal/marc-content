'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { captureAttribution } from '@/lib/attribution'

export default function AttributionTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Reads window.location.search directly rather than useSearchParams(),
    // which would force this component (and anything above it in the
    // tree) into a Suspense boundary in the App Router — not worth it for
    // a background side effect with no UI.
    captureAttribution()
  }, [pathname])

  return null
}
