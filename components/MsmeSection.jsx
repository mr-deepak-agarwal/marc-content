'use client'

import React from 'react'
import {
  TrendingUp,
  Settings,
  IndianRupee,
  Users,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Briefcase,
  Factory,
} from 'lucide-react'

/*
  MARC Vyapar — MSME vertical landing sections
  --------------------------------------------
  Rebuilt to match marcglocal.com's actual design system, pulled from your
  components_v2 reference (ServicesSection.jsx, WhyUsSection.jsx, tailwind.config.js):

    Font        : Poppins (font-sans / font-heading)
    Deep green  : #1B5E20  (section/card backgrounds, headline color)
    Mid green   : #2E7D32 / #43A047  (gradients, links)
    Light green : #81C784 / #A5D6A7  (text-on-dark, hairlines)
    Orange      : #E65100 / #FF6D00  (hover states, single accent — used sparingly)
    Cream bg    : #F7FFF5  (light section backgrounds)
    Body green  : #33691E  (paragraph text on light bg)

  Icons: lucide-react only — no emoji, matching the rest of the site.
  Card pattern: rounded-3xl, numbered "0X" eyebrow + hairline, arrow-up-right
  on hover — same pattern as ServicesSection.jsx, applied here instead of a
  generic Tailwind card so MARC Vyapar reads as the same brand, not a knockoff.
*/

/* ----------------------------------------------------------------------- */
/* 1. MSME INDUSTRY CONTEXT                                                */
/* SEO intent: "MSME India statistics", "MSME consulting India",           */
/* "small business advisory India" — keyword-bearing H1/H2, descriptive    */
/* stat labels (not just numbers) so the section carries on-page text.     */
/* ----------------------------------------------------------------------- */
export function MSMEIndustrySection() {
  // Verified, citable figures as of Feb 2026 — Ministry of MSME (PIB) / IBEF.
  // Source line is rendered below the grid; update yearly when the Ministry
  // publishes its next official release.
  const stats = [
    {
      value: '7.8 Cr+',
      label: 'MSMEs registered on Udyam',
      sub: 'Ministry of MSME, as of Feb 2026',
      icon: Factory,
    },
    {
      value: '31.1%',
      label: "Share of India's GDP",
      sub: 'MSME Gross Value Added, Ministry of MSME',
      icon: TrendingUp,
    },
    {
      value: '32.8 Cr',
      label: 'People employed by MSMEs',
      sub: 'Udyam-reported employment, second-largest after agriculture',
      icon: Users,
    },
    {
      value: '48.6%',
      label: "Share of India's exports",
      sub: 'MSME-specified products, Ministry of MSME',
      icon: Building2,
    },
  ]

  return (
    <section className="py-24 bg-[#F7FFF5] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
              World MSME Day · 27 June
            </span>
            <span className="w-8 h-px" style={{ backgroundColor: '#81C784' }} />
          </div>
          <h1
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ color: '#1B5E20' }}
          >
            MSME Business Consulting in India, Built for How You Actually Run Your Business
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#33691E' }}>
            India's 7.8 crore+ registered micro, small and medium enterprises contribute over
            31% of national GDP and nearly half of the country's exports — yet most operate
            without the financial visibility, growth planning or process discipline that larger
            companies take for granted. MARC Vyapar brings MARC's 15 years of growth advisory
            experience to business owners directly, in plain language and at a price built for
            MSMEs.
            <span className="block mt-2 text-sm" style={{ color: '#5D7A52' }}>
              Source: Ministry of MSME (Press Information Bureau), figures as of February 2026.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#1B5E20' }}
              >
                <div className="flex items-center justify-between mb-5">
                  <Icon className="w-6 h-6" style={{ color: '#81C784' }} />
                  <span className="text-xs font-semibold" style={{ color: '#A5D6A7' }}>
                    0{i + 1}
                  </span>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-white/90">{s.label}</div>
                <div className="mt-1 text-xs" style={{ color: '#A5D6A7' }}>
                  {s.sub}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* 2. REPOSITIONING HERO — MARC Vyapar                                     */
/* SEO intent: primary keyword "business growth consultant for MSMEs in    */
/* India" placed naturally in H1 + supporting copy.                        */
/* ----------------------------------------------------------------------- */
export function VyaparHero() {
  return (
    <section className="relative overflow-hidden font-sans" style={{ backgroundColor: '#1B5E20' }}>
      {/* signature dot grid, same texture language as WhyUsSection's globe panel */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, #4CAF50 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div
        className="absolute -top-24 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(255,109,0,0.12)' }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#C2DDB4' }}
        >
          <Briefcase className="w-3.5 h-3.5" />
          MARC Vyapar · Growth Advisory for Business Owners
        </span>

        <h1 className="mt-7 text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight">
          A Business Growth Consultant for MSMEs, Built for India's Owner-Run Businesses
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#C2DDB4' }}>
          The same strategy, financial and operations advisory MARC brings to large
          enterprises — scoped, priced and explained for MSME owners who need clear
          answers this quarter, not a 60-page corporate deck.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/checkup"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: '#FF6D00' }}
          >
            Take the Free Business Health Check
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-colors hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* 3. SERVICES REFRAMED IN MSME LANGUAGE                                   */
/* SEO intent: each card title doubles as a long-tail query an MSME owner  */
/* would actually type ("how to know if my business is profitable", etc.) */
/* ----------------------------------------------------------------------- */
export function VyaparServices() {
  const items = [
    {
      tag: 'Strategy Consulting',
      headline: 'Grow your business beyond your city',
      desc: 'A practical market-entry and expansion plan for your next city or region — backed by real demand data, not assumptions.',
      icon: TrendingUp,
    },
    {
      tag: 'Financial Modelling',
      headline: 'Know exactly where your money is going, and where growth is coming from',
      desc: 'A clear monthly financial model that shows margins by product or branch, so you stop guessing what is actually profitable.',
      icon: IndianRupee,
    },
    {
      tag: 'Feasibility Study',
      headline: 'Should you open the next branch? We will tell you.',
      desc: 'Independent feasibility analysis on demand, cost and payback period before you commit capital or sign a lease.',
      icon: Building2,
    },
    {
      tag: 'Standard Operating Procedures',
      headline: 'Build a business that runs without you micromanaging',
      desc: 'Documented SOPs and accountability structures so your team can run daily operations to your standard, not just when you are watching.',
      icon: Settings,
    },
  ]

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ color: '#1B5E20' }}
          >
            MARC's Advisory Expertise, in the Language of Business Owners
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#33691E' }}>
            Same rigour we bring to enterprise mandates — strategy, financial modelling,
            feasibility and operations — reframed around the decisions MSME owners
            actually face every month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <div
                key={it.tag}
                className="group relative rounded-3xl p-9 overflow-hidden transition-all duration-300"
                style={{ backgroundColor: '#1B5E20' }}
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

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#A5D6A7' }}>
                    0{i + 1} · {it.tag}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-snug tracking-tight">
                  {it.headline}
                </h3>
                <p className="leading-relaxed" style={{ color: '#C2DDB4' }}>
                  {it.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* 4. ENTRY-LEVEL PRICING TIERS                                            */
/* SEO intent: "business consulting fees for small business India",        */
/* "MSME advisory cost" — pricing shown transparently, which both serves   */
/* the price-sensitive MSME buyer and reads well for "cost" search intent. */
/* ----------------------------------------------------------------------- */
export function VyaparPricing() {
  const tiers = [
    {
      name: 'Business Health Check',
      price: '₹50,000',
      duration: '2 weeks',
      desc: 'A fast diagnostic across sales, finance, operations and team to identify what is costing you growth right now.',
      features: [
        'Scored health report across 4 dimensions',
        'One findings walkthrough with an advisor',
        'Prioritised action list, ranked by impact',
      ],
      cta: 'Start Health Check',
      highlight: false,
    },
    {
      name: 'Growth Diagnostic',
      price: '₹95,000',
      duration: '4 weeks',
      desc: 'A deeper study on one specific growth decision — a new market, a new branch, or a new product line.',
      features: [
        'Market and feasibility analysis',
        'Financial model with projections',
        'Clear go / no-go recommendation',
      ],
      cta: 'Start Growth Diagnostic',
      highlight: true,
    },
    {
      name: '90-Day Growth Plan',
      price: '₹1,50,000',
      duration: '12 weeks',
      desc: 'A complete strategy, SOP and financial plan, with hands-on support to land the first measurable wins.',
      features: [
        'Strategy, SOPs and financial plan',
        'Monthly advisor check-ins',
        'Implementation tracking and reporting',
      ],
      cta: 'Start 90-Day Plan',
      highlight: false,
    },
  ]

  return (
    <section className="py-24 bg-[#F7FFF5] font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ color: '#1B5E20' }}
          >
            Transparent MSME Consulting Pricing — Start Small, Scale as You See Results
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#33691E' }}>
            No long lock-ins and no jargon-heavy proposals. Choose the entry point that
            matches where your business is today, then upgrade as the advisory pays for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl p-8 bg-white transition-all duration-300"
              style={
                t.highlight
                  ? { boxShadow: '0 20px 50px -12px rgba(27,94,32,0.25)', border: '1.5px solid #2E7D32' }
                  : { border: '1.5px solid #E0EFD6' }
              }
            >
              {t.highlight && (
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: '#E0EFD6', color: '#1B5E20' }}
                >
                  Most Chosen
                </span>
              )}
              <h3 className="text-xl font-bold tracking-tight" style={{ color: '#1B5E20' }}>
                {t.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight" style={{ color: '#1B5E20' }}>
                  {t.price}
                </span>
                <span className="text-sm" style={{ color: '#5D7A52' }}>
                  / {t.duration}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#33691E' }}>
                {t.desc}
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#1D342F' }}>
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2E7D32' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`mt-8 flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 ${
                  t.highlight ? 'text-white' : ''
                }`}
                style={
                  t.highlight
                    ? { backgroundColor: '#1B5E20' }
                    : { border: '1.5px solid #1B5E20', color: '#1B5E20' }
                }
              >
                {t.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* 5. LEAD MAGNET — AI Business Health Checkup                             */
/* Brief specified #0f172a background explicitly for this section — kept   */
/* as the one deliberate departure from the cream/green system, since a    */
/* dark diagnostic-tool panel reads as "instrument", not "brand page".     */
/* MARC green + orange used as the only accents so it still feels in-      */
/* family rather than a generic dark SaaS template.                        */
/* ----------------------------------------------------------------------- */
export function BusinessCheckupSection() {
  const pills = [
    { icon: TrendingUp, label: 'Sales' },
    { icon: Settings, label: 'Operations' },
    { icon: IndianRupee, label: 'Finance' },
    { icon: Users, label: 'Team & HR' },
  ]

  const bars = [
    { label: 'Sales', score: 82 },
    { label: 'Operations', score: 64 },
    { label: 'Finance', score: 71 },
    { label: 'Team & HR', score: 58 },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden font-sans" style={{ backgroundColor: '#0f172a' }}>
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #43A047 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(67,160,71,0.12)' }}
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <span
            className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(67,160,71,0.15)', color: '#81C784' }}
          >
            Free Diagnostic · 10 Minutes
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Is Your Business <span style={{ color: '#81C784' }}>Truly Healthy?</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: '#94A3B8' }}>
            Get an AI-powered score across Sales, Operations, Finance and Team —
            benchmarked against businesses like yours, in under 10 minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {pills.map((p) => {
              const Icon = p.icon
              return (
                <span
                  key={p.label}
                  className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#CBD5E1' }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#81C784' }} />
                  {p.label}
                </span>
              )
            })}
          </div>

          <a
            href="/checkup"
            className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed)' }}
          >
            Take the Free Checkup
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* RIGHT — mock score card */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">Business Health Score</span>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: '#FFF3E0', color: '#E65100' }}
              >
                Average
              </span>
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-bold tracking-tight" style={{ color: '#1B5E20' }}>
                74
              </span>
              <span className="text-lg text-slate-400 mb-1">/100</span>
            </div>

            <div className="mt-7 space-y-4">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">
                    <span>{b.label}</span>
                    <span>{b.score}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${b.score}%`, backgroundColor: '#2E7D32' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-5 text-xs text-slate-400" style={{ borderTop: '1px solid #F1F5F9' }}>
              Based on 32 data points across your business · Scored by MARC Vyapar AI
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* Combined page (optional — for quick preview)                            */
/* ----------------------------------------------------------------------- */
export default function MARCVyaparPage() {
  return (
    <main>
      <VyaparHero />
      <MSMEIndustrySection />
      <VyaparServices />
      <BusinessCheckupSection />
      <VyaparPricing />
    </main>
  )
}
