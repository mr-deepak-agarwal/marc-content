'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  BookOpen,
  Landmark,
  Banknote,
  FileSearch,
  Database,
  LineChart,
  Wallet,
} from 'lucide-react'
import { VyaparContactCTA } from '@/components/MsmeSection'

/* ----------------------------------------------------------------------- */
/* KNOWLEDGE HUB — the "always available" rail                            */
/* Absorbs the conference-input topics that aren't tied to a single stage: */
/* finance literacy, working capital, capital sources (NBFC/SIDBI),        */
/* MSME schemes, the data-repository idea, and IPO readiness as the        */
/* advanced tier of the same audience. Written as reference/explainer      */
/* content, not a sales pitch — this is the section anyone can browse      */
/* whether or not they have a live business yet.                           */
/* ----------------------------------------------------------------------- */

function KnowledgeHubHero() {
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
          <BookOpen className="w-3 h-3" />
          Knowledge Hub
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
          Finance, funding, and schemes — explained in plain language.
        </h1>
        <p className="mt-6 text-lg leading-relaxed max-w-2xl" style={{ color: '#C2DDB4' }}>
          No login, no business required. Browse whenever a term, a funding source, or a scheme
          comes up and you want the plain-English version before the next conversation.
        </p>
      </div>
    </section>
  )
}

/* ---- Finance terms glossary — accordion ---- */
function FinanceGlossary() {
  const [open, setOpen] = React.useState(0)
  const terms = [
    {
      q: 'Working capital',
      a: 'The cash you need on hand to run day-to-day operations — paying suppliers and staff before customer payments arrive. Most MSME financing exists specifically to bridge this gap, which is why understanding it comes before understanding financing options.',
    },
    {
      q: 'Cash flow vs profit',
      a: 'Profit is what your books say you earned. Cash flow is what\'s actually in your account. A profitable business can still run out of cash if payments come in slower than bills go out — this is one of the most common reasons growing MSMEs get into trouble.',
    },
    {
      q: 'Collateral',
      a: 'An asset you pledge to secure a loan — property, equipment, or inventory. Some MSME schemes are specifically "collateral-free," which is why it\'s worth checking scheme terms before assuming you need to pledge something.',
    },
    {
      q: 'Credit score / CIBIL',
      a: 'A numeric score reflecting how reliably you\'ve repaid past debt. NBFCs and banks use it to price and approve loans — a healthier score generally means faster approval and better terms.',
    },
    {
      q: 'IPO readiness',
      a: 'The advanced end of financial discipline: clean, audited books, formal governance, and predictable reporting. Most MSMEs will never list, but the underlying habits — consistent bookkeeping, real financial controls — pay off long before an IPO is on the table.',
    },
  ]

  return (
    <section className="py-20 font-sans bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
            Finance, explained
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight" style={{ color: '#1B5E20' }}>
            Terms you'll hear, in plain language
          </h2>
        </div>

        <div className="space-y-3">
          {terms.map((t, i) => {
            const isOpen = open === i
            return (
              <div
                key={t.q}
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(46,125,50,0.15)' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  style={{ backgroundColor: '#F7FFF5' }}
                >
                  <span className="font-semibold" style={{ color: '#1B5E20' }}>
                    {t.q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                    style={{ color: '#2E7D32', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-sm leading-relaxed" style={{ color: '#33691E' }}>
                      {t.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---- Capital sources — cards ---- */
function CapitalSources() {
  const sources = [
    {
      icon: Banknote,
      title: 'NBFCs',
      desc: 'Non-banking financial companies now account for roughly half of MSME lending in India, per industry data cited on this page\'s launch context. Typically faster approval and more flexible criteria than banks, usually at a higher interest rate.',
    },
    {
      icon: Landmark,
      title: 'SIDBI',
      desc: 'The Small Industries Development Bank of India runs and refinances a range of MSME-focused credit schemes, often at more favourable terms than open-market lending, aimed specifically at closing the small-business funding gap.',
    },
    {
      icon: Wallet,
      title: 'Banks',
      desc: 'Generally the lowest-cost credit if you qualify, but with stricter documentation and collateral expectations than NBFCs. Worth a first stop before NBFC options for lower urgency, better-documented businesses.',
    },
  ]

  return (
    <section className="py-20 font-sans" style={{ backgroundColor: '#F7FFF5' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
            Where the money actually comes from
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight" style={{ color: '#1B5E20' }}>
            Capital availability, by source
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sources.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-3xl p-8"
                style={{ backgroundColor: 'white', border: '1px solid rgba(46,125,50,0.15)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#2E7D32' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1B5E20' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#33691E' }}>
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---- MSME schemes — simplified explainer, not an exhaustive/authoritative list ---- */
function SchemesSection() {
  return (
    <section className="py-20 font-sans bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
              Simplified, not simplistic
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-5 tracking-tight leading-[1.15]" style={{ color: '#1B5E20' }}>
              MSME schemes, without the fine-print maze
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#33691E' }}>
              Government and SIDBI-backed schemes generally fall into a few broad categories —
              collateral-free credit, interest subvention, and capital or technology subsidies.
              Eligibility and terms change, so we don't publish specific scheme names or amounts
              here. Tell us your sector and stage, and we'll tell you which categories are
              realistically worth applying for.
            </p>
            <div className="mt-8">
              <a
                href="https://www.marcglocal.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm"
                style={{ backgroundColor: '#FF6D00' }}
              >
                Check what applies to you
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl p-8" style={{ backgroundColor: '#1B5E20' }}>
            <FileSearch className="w-6 h-6 mb-4" style={{ color: '#81C784' }} />
            <p className="text-sm font-semibold tracking-wide uppercase mb-3" style={{ color: '#A5D6A7' }}>
              Broad scheme categories
            </p>
            <ul className="space-y-3">
              {[
                'Collateral-free credit guarantee schemes',
                'Interest subvention on working capital loans',
                'Capital and technology-upgrade subsidies',
                'Export promotion and market-access support',
              ].map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: '#C2DDB4' }}>
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#81C784' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- Data repository teaser — same "launching soon" treatment as Market Pulse ---- */
function DataRepositoryTeaser() {
  return (
    <section
      className="relative overflow-hidden py-20 font-sans"
      style={{
        background: 'radial-gradient(ellipse at top right, #1a3a1a 0%, #0d2010 60%, #081408 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, #4CAF50 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'rgba(129,199,132,0.12)', border: '1px solid rgba(129,199,132,0.25)' }}
          >
            <Database className="w-7 h-7" style={{ color: '#81C784' }} />
          </div>
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(255,109,0,0.18)', color: '#FFAB76' }}
            >
              In development
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              The MSME data repository
            </h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: '#C2DDB4' }}>
              Compliance requirements, scheme eligibility, capital sources, and state-by-state
              comparisons — one searchable, verified source instead of ten browser tabs.
              Everything on this page today is the content backbone; the searchable tool is next.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function KnowledgeHubPage() {
  return (
    <main>
      <KnowledgeHubHero />
      <FinanceGlossary />
      <CapitalSources />
      <SchemesSection />
      <DataRepositoryTeaser />
      <VyaparContactCTA />
    </main>
  )
}
