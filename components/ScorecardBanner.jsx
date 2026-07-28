import Link from 'next/link'
import { ClipboardCheck, ArrowRight } from 'lucide-react'

/**
 * ScorecardBanner
 * Drop-in CTA for the India Market Entry & Feasibility Scorecard lead magnet.
 * Used at the 5 placements specified in the Week 3 deliverable:
 *   1. Mid-page on the Feasibility Study service page
 *   2. Mid-page on the Market Research service page
 *   3. Entry CTA on the Global hub page
 *   4. Banner on the Blog index page
 *   5. Alternative option in the chatbot flow (see components/ChatbotWidget.jsx)
 *
 * `variant="dark"` is for placement on dark-background sections (e.g. the
 * Global hub, which uses a dark hero); default is light or use the
 * appropriate variant.
 */
export default function ScorecardBanner({ context, variant = 'light', source = 'Scorecard Banner' }) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 ${
        isDark ? 'bg-white/5 border border-white/15' : 'bg-[#F7FFF5] border border-[#C2DDB4]'
      }`}
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-white/10' : 'bg-white'}`}>
        <ClipboardCheck className="w-7 h-7 text-[#4E9141]" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${isDark ? 'text-[#C2DDB4]' : 'text-[#4E9141]'}`}>
          Free Self-Assessment
        </p>
        <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-[#1D342F]'}`}>
          India Market Entry &amp; Feasibility Scorecard
        </h3>
        <p className={`text-sm ${isDark ? 'text-[#C2DDB4]' : 'text-[#47635D]'}`}>
          {context || 'Get an instant readiness score across market, regulatory, financial, and operational dimensions — 4 minutes, free.'}
        </p>
      </div>
      <Link
        href="/scorecard"
        onClick={() => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scorecard_banner_click', { source })
          }
        }}
        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7333] transition-all whitespace-nowrap"
      >
        Take the Scorecard <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
