'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import jsPDF from 'jspdf'
import Footer from '@/components/Footer'
import {
  TrendingUp, ShieldCheck, IndianRupee, Settings, ArrowRight, ArrowLeft,
  CheckCircle2, Download, Lock, Sparkles,
} from 'lucide-react'

/* ────────────────────────────────────────────────────────────────────────
   SAVING RESPONSES — same pattern as app/checkup, via /api/scorecard so
   completion also triggers the Day 0 nurture email + internal notification
   server-side. See app/api/scorecard/route.js for the table schema and the
   nurture-scheduling logic that kicks in when `completed` flips to true.
   ──────────────────────────────────────────────────────────────────────── */
async function persistScorecard(sessionId, payload) {
  try {
    const res = await fetch('/api/scorecard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, ...payload }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      console.warn('[Scorecard] persist failed:', body.error || res.status)
    }
  } catch (err) {
    console.warn('[Scorecard] persist failed:', err)
  }
}

function useSessionId() {
  const [id] = useState(() =>
    typeof crypto !== 'undefined' ? crypto.randomUUID() : Math.random().toString(36).slice(2)
  )
  return id
}

const SECTIONS = [
  {
    id: 'market',
    label: 'Market Readiness',
    icon: TrendingUp,
    questions: [
      {
        id: 'm1',
        text: 'How well do you understand demand for your product/service in the Indian market?',
        options: ['No research done', 'Some secondary research only', 'Primary research completed', 'Validated demand with pilot customers or LOIs'],
      },
      {
        id: 'm2',
        text: 'How clearly is your target customer segment in India defined?',
        options: ['Not defined', 'Broadly defined', 'Defined with personas', 'Validated through direct customer conversations'],
      },
      {
        id: 'm3',
        text: 'How well do you understand your competitive landscape in India?',
        options: ['Not researched', 'Aware of a few competitors', 'Mapped competitors and positioning', 'Deep competitive intelligence including pricing and gaps'],
      },
    ],
  },
  {
    id: 'regulatory',
    label: 'Regulatory & Compliance',
    icon: ShieldCheck,
    questions: [
      {
        id: 'r1',
        text: 'Where are you on entity structure / legal setup in India?',
        options: ['Not started', 'Researching options', 'Structure decided', 'Entity registered or in process'],
      },
      {
        id: 'r2',
        text: 'How familiar are you with sector-specific compliance or licensing requirements?',
        options: ['Not aware of requirements', 'Aware but not detailed', 'Detailed compliance checklist prepared', 'Compliance roadmap with timelines in place'],
      },
      {
        id: 'r3',
        text: 'Have you assessed FDI or other regulatory constraints relevant to your sector?',
        options: ['Not assessed', 'Aware FDI rules exist', 'Assessed applicable FDI route', 'Confirmed compliant structure with legal counsel'],
      },
    ],
  },
  {
    id: 'financial',
    label: 'Financial Readiness',
    icon: IndianRupee,
    questions: [
      {
        id: 'f1',
        text: 'How clear are your financial projections for the India market?',
        options: ['No projections', 'Rough estimates only', 'Detailed 1-year projections', 'Detailed 3-year projections with scenarios'],
      },
      {
        id: 'f2',
        text: 'How prepared is your funding or capital plan for this expansion?',
        options: ['No plan', 'Informal plan', 'Budget allocated', 'Funding secured or committed'],
      },
      {
        id: 'f3',
        text: 'How confident are you in your unit economics for the Indian market?',
        options: ['Not calculated', 'Rough assumptions', 'Modelled with local cost data', 'Validated with pilot data'],
      },
    ],
  },
  {
    id: 'operational',
    label: 'Operational Readiness',
    icon: Settings,
    questions: [
      {
        id: 'o1',
        text: 'Do you have a local team or partner in India?',
        options: ['None', 'Exploring options', 'In discussion with partners or hires', 'Local team or partner in place'],
      },
      {
        id: 'o2',
        text: 'How developed is your supply chain or delivery plan for India?',
        options: ['Not started', 'High-level plan only', 'Detailed plan with vendors identified', 'Plan tested or piloted'],
      },
      {
        id: 'o3',
        text: 'How clear is your market-entry timeline?',
        options: ['No timeline', 'Rough timeline', 'Detailed timeline with milestones', 'Timeline with milestones and named owners'],
      },
    ],
  },
]

const CATEGORIES = [
  { max: 40, label: 'Early Stage', sub: 'Significant Groundwork Needed', color: '#B45309' },
  { max: 65, label: 'Developing', sub: 'Needs Structured Preparation', color: '#B7791F' },
  { max: 85, label: 'Ready to Explore', sub: 'Proceed with Guided Support', color: '#2E7D32' },
  { max: 101, label: 'Market-Ready', sub: 'Positioned to Move Fast', color: '#1D342F' },
]

function categoryFor(score) {
  return CATEGORIES.find((c) => score <= c.max)
}

function dimensionScore(section, answers) {
  const total = section.questions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0)
  return Math.round((total / (section.questions.length * 3)) * 100)
}

const WEAKEST_ADVICE = {
  market: 'Prioritise primary market research — talking to real prospective customers beats any amount of secondary research for de-risking demand assumptions.',
  regulatory: 'Get your entity structure and compliance roadmap in writing before you commit further capital — this is the area most likely to cause expensive delays later.',
  financial: 'Build a proper unit-economics model with India-specific cost data rather than adapted assumptions from your home market — the two rarely translate cleanly.',
  operational: 'Line up a local team or partner and a concrete delivery plan — market and financial validation mean little without the ability to execute on the ground.',
}

export default function ScorecardClient({ source = 'Scorecard Page' }) {
  const [step, setStep] = useState('intro') // intro | questions | lead | results
  const [sectionIdx, setSectionIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [lead, setLead] = useState({ name: '', email: '', company: '', industry: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const sessionId = useSessionId()

  const totalQuestions = SECTIONS.reduce((a, s) => a + s.questions.length, 0)
  const answeredCount = Object.keys(answers).length

  const dimensionScores = SECTIONS.map((s) => ({
    id: s.id,
    label: s.label,
    score: dimensionScore(s, answers),
  }))
  const overallScore = Math.round(dimensionScores.reduce((a, d) => a + d.score, 0) / dimensionScores.length)
  const category = categoryFor(overallScore)
  const weakest = [...dimensionScores].sort((a, b) => a.score - b.score)[0]

  // Auto-save partial progress as the user answers, same debounce pattern as /checkup
  useEffect(() => {
    if (Object.keys(answers).length === 0) return
    const t = setTimeout(() => {
      persistScorecard(sessionId, { answers, completed: false, source })
    }, 800)
    return () => clearTimeout(t)
  }, [answers]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleAnswer(qId, idx) {
    setAnswers((prev) => ({ ...prev, [qId]: idx }))
  }

  function sectionComplete(section) {
    return section.questions.every((q) => answers[q.id] !== undefined)
  }

  function goNextSection() {
    if (sectionIdx < SECTIONS.length - 1) {
      setSectionIdx((i) => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setStep('lead')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function goPrevSection() {
    if (sectionIdx > 0) {
      setSectionIdx((i) => i - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setStep('intro')
    }
  }

  async function handleLeadSubmit(e) {
    e.preventDefault()
    setError('')
    if (!lead.name.trim() || !lead.email.trim()) {
      setError('Name and email are required to see your full results.')
      return
    }
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email.trim())
    if (!looksLikeEmail) {
      setError('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    await persistScorecard(sessionId, {
      lead,
      answers,
      score: overallScore,
      category: `${category.label} — ${category.sub}`,
      dimensionScores,
      completed: true,
      source,
    })
    setSubmitting(false)
    setStep('results')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function downloadPDF() {
    const doc = new jsPDF()
    let y = 20

    doc.setFontSize(18)
    doc.setTextColor(29, 52, 47)
    doc.text('India Market Entry & Feasibility Scorecard', 20, y)
    y += 10
    doc.setFontSize(11)
    doc.setTextColor(71, 99, 93)
    doc.text(`Prepared for: ${lead.name}${lead.company ? ' — ' + lead.company : ''}`, 20, y)
    y += 6
    doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, 20, y)
    y += 14

    doc.setFontSize(14)
    doc.setTextColor(78, 145, 65)
    doc.text(`Overall Score: ${overallScore}/100 — ${category.label}`, 20, y)
    y += 6
    doc.setFontSize(11)
    doc.setTextColor(71, 99, 93)
    doc.text(category.sub, 20, y)
    y += 14

    doc.setFontSize(13)
    doc.setTextColor(29, 52, 47)
    doc.text('Dimension Breakdown', 20, y)
    y += 8

    dimensionScores.forEach((d) => {
      doc.setFontSize(11)
      doc.setTextColor(29, 52, 47)
      doc.text(`${d.label}: ${d.score}/100`, 24, y)
      y += 7
    })
    y += 6

    doc.setFontSize(13)
    doc.setTextColor(29, 52, 47)
    doc.text('Recommended Next Step', 20, y)
    y += 8
    doc.setFontSize(10)
    doc.setTextColor(71, 99, 93)
    const advice = doc.splitTextToSize(WEAKEST_ADVICE[weakest.id], 170)
    doc.text(advice, 20, y)
    y += advice.length * 5 + 12

    doc.setFontSize(9)
    doc.setTextColor(150, 150, 150)
    doc.text('MARC Glocal — marcglocal.com — This scorecard is a self-assessment guide, not a substitute for a full feasibility study.', 20, 280)

    doc.save(`MARC-Scorecard-${(lead.name || 'result').replace(/\s+/g, '-')}.pdf`)
  }

  const progress = step === 'questions' ? ((sectionIdx + (sectionComplete(SECTIONS[sectionIdx]) ? 1 : 0.3)) / SECTIONS.length) * 100 : 0

  return (
    <div className="bg-white min-h-screen">
      {/* ── Intro ──────────────────────────────────────────────────────── */}
      {step === 'intro' && (
        <section className="pt-32 pb-20 bg-[#F7FFF5]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] font-bold tracking-wide uppercase text-sm">Free Self-Assessment</span>
              <div className="w-12 h-[2px] bg-[#4E9141]" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1D342F] mb-6 leading-tight">
              India Market Entry &amp; Feasibility Scorecard
            </h1>
            <p className="text-[#47635D] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              12 questions across market, regulatory, financial, and operational readiness — takes
              about 4 minutes. Get an instant readiness score, a dimension-by-dimension breakdown,
              and a downloadable PDF before you commission (or skip) a full feasibility study.
            </p>
            <button
              onClick={() => setStep('questions')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7333] transition-all text-lg"
            >
              Start the Free Assessment <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-[#47635D] text-sm mt-4">No email required until you're ready to see your results.</p>
          </div>
        </section>
      )}

      {/* ── Questions ──────────────────────────────────────────────────── */}
      {step === 'questions' && (
        <section className="pt-28 pb-20 bg-white min-h-screen">
          <div className="max-w-2xl mx-auto px-6">
            <div className="w-full h-2 bg-[#C2DDB4]/40 rounded-full mb-10 overflow-hidden">
              <div className="h-full bg-[#4E9141] transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            <div className="flex items-center gap-3 mb-8">
              {(() => {
                const Icon = SECTIONS[sectionIdx].icon
                return (
                  <div className="w-12 h-12 bg-[#F7FFF5] rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#4E9141]" />
                  </div>
                )
              })()}
              <div>
                <div className="text-xs font-semibold text-[#4E9141] uppercase tracking-wide">
                  Section {sectionIdx + 1} of {SECTIONS.length}
                </div>
                <h2 className="text-xl font-bold text-[#1D342F]">{SECTIONS[sectionIdx].label}</h2>
              </div>
            </div>

            <div className="space-y-10">
              {SECTIONS[sectionIdx].questions.map((q) => (
                <div key={q.id}>
                  <p className="text-[#1D342F] font-semibold mb-3">{q.text}</p>
                  <div className="grid gap-2">
                    {q.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(q.id, i)}
                        className={`text-left px-4 py-3 rounded-xl border-2 text-sm transition-all ${
                          answers[q.id] === i
                            ? 'border-[#4E9141] bg-[#F7FFF5] text-[#1D342F] font-semibold'
                            : 'border-[#C2DDB4] text-[#47635D] hover:border-[#4E9141]/60'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-12">
              <button
                onClick={goPrevSection}
                className="inline-flex items-center gap-2 text-[#47635D] font-semibold hover:text-[#4E9141] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                onClick={goNextSection}
                disabled={!sectionComplete(SECTIONS[sectionIdx])}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7333] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {sectionIdx < SECTIONS.length - 1 ? 'Next Section' : 'See My Score'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Lead capture gate ──────────────────────────────────────────── */}
      {step === 'lead' && (
        <section className="pt-28 pb-20 bg-[#F7FFF5] min-h-screen">
          <div className="max-w-lg mx-auto px-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center mb-8">
              <Lock className="w-8 h-8 text-[#4E9141] mx-auto mb-4" />
              <div className="text-5xl font-bold text-[#1D342F] mb-2">{overallScore}<span className="text-2xl text-[#47635D]">/100</span></div>
              <p className="text-[#4E9141] font-bold">{category.label}</p>
              <p className="text-[#47635D] text-sm mt-3">
                Enter your details to unlock your full dimension-by-dimension breakdown and a
                downloadable PDF.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-4">
              <div>
                <label className="text-sm font-semibold text-[#1D342F] block mb-1.5">Full Name *</label>
                <input
                  type="text"
                  value={lead.name}
                  onChange={(e) => setLead((l) => ({ ...l, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#C2DDB4] focus:border-[#4E9141] outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#1D342F] block mb-1.5">Email *</label>
                <input
                  type="email"
                  value={lead.email}
                  onChange={(e) => setLead((l) => ({ ...l, email: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#C2DDB4] focus:border-[#4E9141] outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#1D342F] block mb-1.5">Company</label>
                <input
                  type="text"
                  value={lead.company}
                  onChange={(e) => setLead((l) => ({ ...l, company: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#C2DDB4] focus:border-[#4E9141] outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-[#1D342F] block mb-1.5">Industry</label>
                <input
                  type="text"
                  value={lead.industry}
                  onChange={(e) => setLead((l) => ({ ...l, industry: e.target.value }))}
                  placeholder="e.g. Retail, SaaS, Manufacturing"
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-[#C2DDB4] focus:border-[#4E9141] outline-none"
                />
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7333] transition-all disabled:opacity-60"
              >
                {submitting ? 'Unlocking...' : 'Show My Full Results'}
              </button>
              <p className="text-xs text-[#47635D] text-center">
                We'll also send a copy to your inbox, plus occasional useful follow-ups. No spam,
                unsubscribe any time.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* ── Results ────────────────────────────────────────────────────── */}
      {step === 'results' && (
        <section className="pt-28 pb-20 bg-white min-h-screen">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <CheckCircle2 className="w-10 h-10 text-[#4E9141] mx-auto mb-4" />
              <div className="text-6xl font-bold text-[#1D342F] mb-2">{overallScore}<span className="text-3xl text-[#47635D]">/100</span></div>
              <p className="text-2xl font-bold" style={{ color: category.color }}>{category.label}</p>
              <p className="text-[#47635D] mt-1">{category.sub}</p>
            </div>

            <div className="bg-[#F7FFF5] rounded-2xl p-8 mb-8">
              <h2 className="text-lg font-bold text-[#1D342F] mb-6">Dimension Breakdown</h2>
              <div className="space-y-5">
                {dimensionScores.map((d) => (
                  <div key={d.id}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-semibold text-[#1D342F]">{d.label}</span>
                      <span className="text-[#47635D]">{d.score}/100</span>
                    </div>
                    <div className="w-full h-2.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-[#4E9141] rounded-full transition-all duration-700" style={{ width: `${d.score}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-[#C2DDB4] rounded-2xl p-8 mb-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-[#4E9141]" />
                <h2 className="text-lg font-bold text-[#1D342F]">Your Priority Next Step</h2>
              </div>
              <p className="text-[#47635D] leading-relaxed">
                Your lowest-scoring dimension is <strong className="text-[#1D342F]">{weakest.label}</strong>.
                {' '}{WEAKEST_ADVICE[weakest.id]}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadPDF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#4E9141] text-[#4E9141] rounded-full font-semibold hover:bg-[#F7FFF5] transition-all"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7333] transition-all"
              >
                Talk to Our Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-[#47635D] text-center mt-6">
              We've emailed a copy of this result to {lead.email}.
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
