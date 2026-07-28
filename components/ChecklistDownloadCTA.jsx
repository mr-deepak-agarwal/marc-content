'use client'

import { useState } from 'react'
import jsPDF from 'jspdf'
import { Download, X } from 'lucide-react'

// The actual checklist content — a genuine, useful reference, not filler.
// Organised the same way the Scorecard's 4 dimensions are, so the two
// lead magnets feel like one coherent system rather than unrelated add-ons.
const CHECKLIST_SECTIONS = [
  {
    heading: 'Market Feasibility',
    items: [
      'Target customer segment defined and validated with real conversations, not just assumptions',
      'Demand estimated using primary research, not only secondary/desk sources',
      'Competitive landscape mapped, including pricing and positioning gaps',
      'Distribution/channel strategy identified for your specific category',
    ],
  },
  {
    heading: 'Technical & Regulatory Feasibility',
    items: [
      'Entity structure and legal setup path identified',
      'Sector-specific licensing/compliance requirements documented',
      'FDI route (if applicable) assessed with legal counsel',
      'Location-level constraints (zoning, infrastructure, utilities) checked',
    ],
  },
  {
    heading: 'Financial Feasibility',
    items: [
      '12-month financial projections built with India-specific cost assumptions',
      'Unit economics modelled, not just top-line revenue estimates',
      'Capital/funding plan mapped against your projected runway',
      'Break-even timeline estimated under a conservative demand scenario',
    ],
  },
  {
    heading: 'Operational Feasibility',
    items: [
      'Local team or partner identified, or a concrete hiring plan in place',
      'Supply chain / delivery plan drafted with named vendors where possible',
      'Entry timeline built with milestones and an accountable owner for each',
      'A go/no-go decision point defined before further capital is committed',
    ],
  },
]

async function persistChecklistLead(lead, source) {
  try {
    await fetch('/api/checklist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead, source }),
    })
  } catch (err) {
    console.warn('[ChecklistCTA] persist failed:', err)
  }
}

function generateChecklistPDF(name) {
  const doc = new jsPDF()
  let y = 20

  doc.setFontSize(18)
  doc.setTextColor(29, 52, 47)
  doc.text('India Feasibility Study Checklist', 20, y)
  y += 8
  doc.setFontSize(10)
  doc.setTextColor(71, 99, 93)
  doc.text('MARC Glocal — marcglocal.com', 20, y)
  y += 12

  CHECKLIST_SECTIONS.forEach((section) => {
    if (y > 255) {
      doc.addPage()
      y = 20
    }
    doc.setFontSize(13)
    doc.setTextColor(78, 145, 65)
    doc.text(section.heading, 20, y)
    y += 8

    section.items.forEach((item) => {
      if (y > 270) {
        doc.addPage()
        y = 20
      }
      doc.setFontSize(10)
      doc.setTextColor(29, 52, 47)
      doc.text('\u2610', 22, y)
      const wrapped = doc.splitTextToSize(item, 165)
      doc.text(wrapped, 28, y)
      y += wrapped.length * 5 + 3
    })
    y += 6
  })

  doc.setFontSize(8)
  doc.setTextColor(150, 150, 150)
  doc.text('This checklist is a self-assessment guide, not a substitute for a full feasibility study.', 20, 287)

  doc.save(`MARC-India-Feasibility-Checklist${name ? '-' + name.replace(/\s+/g, '-') : ''}.pdf`)
}

export default function ChecklistDownloadCTA({ source = 'Feasibility Page' }) {
  const [open, setOpen] = useState(false)
  const [lead, setLead] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!lead.name.trim() || !lead.email.trim()) {
      setError('Name and email are required.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setSubmitting(true)
    await persistChecklistLead(lead, source)
    generateChecklistPDF(lead.name)
    setSubmitting(false)
    setOpen(false)
    setLead({ name: '', email: '' })
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C2DDB4] text-[#47635D] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all"
      >
        <Download className="w-4 h-4" /> Download the India Feasibility Checklist
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-[#47635D] hover:text-[#1D342F]"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-[#1D342F] mb-1">Get the Checklist</h3>
            <p className="text-sm text-[#47635D] mb-5">
              16-point feasibility checklist across market, regulatory, financial, and operational
              readiness — delivered instantly as a PDF.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                value={lead.name}
                onChange={(e) => setLead((l) => ({ ...l, name: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-[#C2DDB4] focus:border-[#4E9141] outline-none text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={lead.email}
                onChange={(e) => setLead((l) => ({ ...l, email: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-[#C2DDB4] focus:border-[#4E9141] outline-none text-sm"
              />
              {error && <p className="text-red-600 text-xs">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#4E9141] text-white rounded-full font-semibold text-sm hover:bg-[#3d7333] transition-all disabled:opacity-60"
              >
                {submitting ? 'Preparing...' : 'Download PDF'}
              </button>
              <p className="text-[11px] text-[#47635D] text-center">
                We'll also email you a copy. No spam, unsubscribe any time.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
