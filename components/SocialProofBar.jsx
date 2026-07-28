import { Quote, TrendingUp } from 'lucide-react'

/**
 * SocialProofBar
 * Week 4 deliverable — "proximity-to-CTA" social proof.
 *
 * Two things render here, both optional and both real (no fabricated
 * quotes or numbers):
 *   1. `stat` — a single {value,label} pulled from the page's own existing
 *      `stats` array (e.g. Feasibility page already has "100+ Feasibility
 *      Studies" in its hero stats — this just resurfaces the first one
 *      directly above the CTA, which is where the proposal wants it).
 *   2. `proof` — either a real verbatim client quote:
 *        { type: 'quote', text, author, role }
 *      or a real project outcome (not a quote, since not every named
 *      project has an attributed quote on record):
 *        { type: 'outcome', client, result }
 *
 * Only set `proof` where the underlying data is real — see
 * app/services/feasibility-study-service-in-india/page.jsx (Fly91 outcome)
 * and app/services/market-research-company-in-india/page.jsx (Planet
 * Hollywood quote, from data/mock.js) for the two cases currently wired up.
 */
export default function SocialProofBar({ stat, proof }) {
  if (!stat && !proof) return null

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 px-5 py-4 bg-white border border-[#C2DDB4] rounded-xl">
      {stat && (
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#F7FFF5] flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-[#4E9141]" />
          </div>
          <div>
            <div className="text-lg font-bold text-[#1D342F] leading-none">{stat.value}</div>
            <div className="text-[11px] text-[#47635D] leading-tight">{stat.label}</div>
          </div>
        </div>
      )}

      {proof && stat && <div className="hidden sm:block w-px self-stretch bg-[#C2DDB4]" />}

      {proof?.type === 'quote' && (
        <div className="flex items-start gap-2">
          <Quote className="w-4 h-4 text-[#4E9141] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#47635D] leading-snug">
            "{proof.text}"
            <span className="block text-xs text-[#1D342F] font-semibold mt-1">
              — {proof.author}{proof.role ? `, ${proof.role}` : ''}
            </span>
          </p>
        </div>
      )}

      {proof?.type === 'outcome' && (
        <div className="flex items-start gap-2">
          <Quote className="w-4 h-4 text-[#4E9141] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#47635D] leading-snug">
            {proof.result}
            <span className="block text-xs text-[#1D342F] font-semibold mt-1">
              — {proof.client}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}
