'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  FileText,
  MapPin,
  Landmark,
  ClipboardCheck,
  Rocket,
} from 'lucide-react'
import { VyaparContactCTA } from '@/components/MsmeSection'

/* ----------------------------------------------------------------------- */
/* NEW MSME — "before you start" track                                     */
/* Content mapped from conference-input notes: form of organisation,       */
/* compliances, choosing between states, and getting industrial land.      */
/* Same MARC Biz-Dost visual system as /msme (deep green, orange accent,   */
/* Poppins, numbered "0X" cards) so this reads as a continuation of the    */
/* journey-picker door, not a different product.                          */
/* ----------------------------------------------------------------------- */

function NewMsmeHero() {
  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{
        background: 'radial-gradient(ellipse at 20% 30%, #1a4a1e 0%, #0d280f 55%, #081508 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(129,199,132,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,199,132,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <Link
          href="/msme"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-80"
          style={{ color: '#A5D6A7' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to MARC Biz-Dost
        </Link>

        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8"
          style={{ backgroundColor: 'rgba(129,199,132,0.12)', color: '#81C784', border: '1px solid rgba(129,199,132,0.25)' }}
        >
          <Rocket className="w-3 h-3" />
          New MSME · Foundations
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Starting up? Get the foundations right before you spend a rupee.
        </h1>
        <p className="mt-6 text-lg leading-relaxed max-w-2xl" style={{ color: '#C2DDB4' }}>
          Four decisions every new MSME owner faces early — structure, compliance, location, and
          land — explained plainly, in the order you'll actually need them.
        </p>
      </div>
    </section>
  )
}

/* Shared "rung" card — matches the dark-green numbered card pattern used
   in VyaparServices on the main /msme page. */
function RungCard({ index, icon: Icon, tag, headline, points }) {
  return (
    <motion.div
      className="group relative rounded-3xl p-9 overflow-hidden"
      style={{ backgroundColor: '#1B5E20' }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between mb-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Icon className="w-5 h-5" style={{ color: '#A5D6A7' }} />
        </div>
        <ArrowUpRight
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          style={{ color: '#81C784' }}
        />
      </div>
      <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#A5D6A7' }}>
        0{index} · {tag}
      </span>
      <h3 className="text-xl lg:text-2xl font-bold text-white mt-2 mb-4 leading-snug tracking-tight">
        {headline}
      </h3>
      <ul className="space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: '#C2DDB4' }}>
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#81C784' }} />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function FoundationsGrid() {
  const rungs = [
    {
      icon: FileText,
      tag: 'Form of organisation',
      headline: 'Choose a structure that matches how you actually plan to grow',
      points: [
        'Sole Proprietorship — you and the business are legally one. Cheapest, fastest to start, but unlimited personal liability and hardest to raise outside money. Best if you\'re solo and starting small.',
        'Partnership Firm — two or more owners share profit and liability per your partnership deed. Good for family or co-founder businesses not planning to raise outside capital; liability is still personal.',
        'LLP — partners\' liability is limited to what they put in. More credible with lenders than a proprietorship, moderate yearly compliance, but you can\'t issue equity shares to raise VC funding.',
        'Private Limited Company — full limited liability and the only structure that can easily raise equity from investors. Highest compliance and cost (ROC filings, audits, board meetings) — worth it once you\'re actively planning to scale or raise funding.',
        'Quick read: solo + low-risk → proprietorship. Sharing with partners, no outside funding planned → partnership or LLP. Planning to raise money or scale fast → Pvt Ltd. Udyam/MSME registration sits on top of any of these and doesn\'t change which one to pick.',
      ],
    },
    {
      icon: ClipboardCheck,
      tag: 'Compliances',
      headline: 'Know the paperwork before it becomes a fire to put out',
      points: [
        'Year-one registrations to expect: Udyam Registration (MSME status), GST (once you cross the turnover threshold or sell across states), Shops & Establishment / trade licence (state-specific), Professional Tax where applicable, and EPFO/ESIC once staff strength crosses the threshold.',
        'Recurring filings to put on a calendar: GST returns (monthly or quarterly), income tax return plus advance tax, TDS returns if you deduct tax at source, and — for LLP/Pvt Ltd only — annual ROC filings.',
        'Hand your CA a simple checklist rather than discovering a lapsed filing at renewal time: what\'s registered, what\'s due when, and who owns each filing.',
      ],
    },
    {
      icon: MapPin,
      tag: 'Choosing a state',
      headline: 'Compare states before you sign anything, not after',
      points: [
        'What actually varies by state: capital subsidies, SGST reimbursement, land cost and availability, power tariff concessions, how fast the single-window clearance actually moves, and whether there\'s a cluster for your specific sector.',
        'Before committing, ask the state industrial department for the real disbursement timeline on any promised subsidy — not just the eligibility criteria — and whether the incentive has a sunset clause.',
        '"Closer to home" has a real cost too: factor in the time and money of managing a unit remotely against the value of the incentives on offer, since owners often underweight this until they\'re living it.',
      ],
    },
    {
      icon: Landmark,
      tag: 'Industrial land',
      headline: 'Get land without getting stuck in it for a year',
      points: [
        'Three routes: a state industrial corporation allotment (e.g. RIICO, MIDC) is usually cheaper but slower and comes with development conditions; open-market purchase is faster and unrestricted but costlier, including stamp duty; leasing has the lowest upfront cost and is a good way to test a location before committing.',
        'Capital subsidy schemes from SIDBI or the state can meaningfully offset land or shed cost in many states — check what you qualify for before assuming the market price is the real cost.',
        'Red flags before you put down a deposit: an allotment letter with no clear possession date, an industrial area where roads/power/water aren\'t actually built yet, or land with any pending litigation.',
      ],
    },
  ]

  return (
    <section className="py-20 font-sans" style={{ backgroundColor: '#F7FFF5' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-5 leading-[1.15] tracking-tight" style={{ color: '#1B5E20' }}>
            The four things to settle before you open your doors
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#33691E' }}>
            Most of the cost of "figuring it out as you go" shows up later — as a compliance
            penalty, a structure that can't raise money, or a location you can't undo. This is
            the order we'd walk through it with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rungs.map((r, i) => (
            <RungCard key={r.tag} index={i + 1} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}

function NextStepBanner() {
  return (
    <section className="py-16 font-sans bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="rounded-3xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ backgroundColor: '#F7FFF5', border: '1px solid rgba(46,125,50,0.15)' }}
        >
          <div>
            <p className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: '#2E7D32' }}>
              Already trading?
            </p>
            <p className="text-lg font-semibold" style={{ color: '#1B5E20' }}>
              If you're past setup and want to know how your business is actually doing, the free
              Business Health Check is the faster next step.
            </p>
          </div>
          <Link
            href="/checkup"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm flex-shrink-0"
            style={{ backgroundColor: '#FF6D00' }}
          >
            Take the Health Check
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function NewMsmePage() {
  return (
    <main>
      <NewMsmeHero />
      <FoundationsGrid />
      <NextStepBanner />
      <VyaparContactCTA />
    </main>
  )
}
