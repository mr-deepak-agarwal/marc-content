'use client'

import React from 'react'
import { motion } from 'framer-motion'
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
  MARC Biz-Dost — MSME vertical landing sections
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
  generic Tailwind card so MARC Biz-Dost reads as the same brand, not a knockoff.
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
            companies take for granted. MARC Biz-Dost brings MARC's 15 years of growth advisory
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
/* 2. REPOSITIONING HERO — MARC Biz-Dost                                   */
/* SEO intent: primary keyword "business growth consultant for MSMEs in    */
/* India" placed naturally in H1 + supporting copy.                        */
/*                                                                          */
/* SIGNATURE ELEMENT — the "vitals strip": a small, self-drawing line      */
/* graph above the headline. Left half is jagged and orange ("Before      */
/* MARC"), right half resolves into a steady climb and green ("With       */
/* MARC"). It's not decoration — it's the brief's entire pitch (raw       */
/* numbers turned into a confident read) rendered as one literal, legible */
/* instrument, so the page leads with a thesis instead of a generic dark  */
/* gradient hero. No dot-grid, no parallax blobs.                         */
/* ----------------------------------------------------------------------- */
function VitalsStrip() {
  const pathRef = React.useRef(null)
  const [pathLength, setPathLength] = React.useState(0)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
      // double rAF guarantees the browser paints the dashed (hidden) state
      // first, so the transition to dashoffset 0 is guaranteed to animate
      requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)))
    }
  }, [])

  return (
    <div className="inline-flex flex-col items-center">
      <svg viewBox="0 0 360 90" className="w-[280px] sm:w-[340px] h-auto" aria-hidden="true">
        <defs>
          <linearGradient id="vitalsFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF6D00" />
            <stop offset="48%" stopColor="#FF6D00" />
            <stop offset="58%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#81C784" />
          </linearGradient>
        </defs>
        <line x1="0" y1="45" x2="360" y2="45" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path
          ref={pathRef}
          d="M 0 50 L 16 30 L 32 62 L 48 22 L 64 55 L 80 18 L 96 48
             L 112 30 L 128 50
             C 160 58, 185 50, 205 42
             C 235 30, 265 24, 300 16
             C 320 12, 340 10, 360 8"
          fill="none"
          stroke="url(#vitalsFade)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: ready ? 0 : pathLength,
            transition: 'stroke-dashoffset 1.6s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />
      </svg>
      <div className="flex items-center justify-between w-[280px] sm:w-[340px] mt-1.5">
        <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#FFAB76' }}>
          Before MARC
        </span>
        <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#81C784' }}>
          With MARC
        </span>
      </div>
    </div>
  )
}

export function VyaparHero() {
  const container = {
    hidden: {},
    show: {
      // delayChildren is timed to start once the vitals strip has mostly
      // finished drawing (~1.5s in), so the page reads as one sequence:
      // line resolves → copy follows → CTAs land — not two unrelated effects.
      transition: { staggerChildren: 0.1, delayChildren: 1.5 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{
        background: 'linear-gradient(170deg, #133d16 0%, #0f3812 55%, #0a280c 100%)',
      }}
    >
      {/* quiet paper-grain texture, replaces the dot-grid + blob-glow pattern
          used elsewhere on the page — kept deliberately subtle since the
          vitals strip is doing the visual work here */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, transparent 1px, transparent 3px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <VitalsStrip />
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#C2DDB4' }}
          >
            <Briefcase className="w-3.5 h-3.5" />
            MARC Biz-Dost · Growth Advisory for Business Owners
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 text-4xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight"
          >
            A Business Growth Consultant for MSMEs, Built for India's Owner-Run Businesses
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#C2DDB4' }}
          >
            The same strategy, financial and operations advisory MARC brings to large
            enterprises — scoped, priced and explained for MSME owners who need clear
            answers this quarter, not a 60-page corporate deck.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.a
              href="/checkup"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
              style={{ backgroundColor: '#FF6D00' }}
            >
              Take the Free Business Health Check
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
            >
              Talk to an Advisor
            </motion.a>
          </motion.div>
        </motion.div>
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
/* Pricing section commented out for now — replaced with a contact CTA below.
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
*/

/* ----------------------------------------------------------------------- */
/* 4b. CONTACT CTA — replaces pricing for now                              */
/* ----------------------------------------------------------------------- */
export function VyaparContactCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 font-sans"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 50% 0%, #2E7D32 0%, transparent 60%), linear-gradient(160deg, #1B5E20 0%, #133d16 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4CAF50 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(255,109,0,0.1)' }}
      />
      <motion.div
        className="relative max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15]">
          Ready to Grow Your Business with MARC Biz-Dost?
        </h2>
        <p className="mt-5 text-lg leading-relaxed" style={{ color: '#C2DDB4' }}>
          Tell us where your business stands today, and we'll get back to you with the right
          starting point — no jargon, no long lock-ins.
        </p>
        <div className="mt-9">
          <motion.a
            href="https://www.marcglocal.com/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white"
            style={{ backgroundColor: '#FF6D00' }}
          >
            Talk to MARC Biz-Dost
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
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
              Based on 32 data points across your business · Scored by MARC Biz-Dost AI
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* 6. MARC MARKET PULSE — Carousel Teaser                                 */
/* Three slides mirroring the actual launch deck:                         */
/*   Slide 1 — Announcing: India market intelligence you can rely on      */
/*   Slide 2 — How it works: Four steps. One number you can rely on.      */
/*   Slide 3 — Generic AI vs MARC: Same question. Two answers.            */
/* Client-side carousel, no external dep — useState + translate trick.    */
/* ----------------------------------------------------------------------- */
export function MarcMarketPulseSection() {
  const [active, setActive] = React.useState(0)
  const [paused, setPaused] = React.useState(false)

  const slides = [
    /* SLIDE 1 — Announcement / hero */
    {
      eyebrow: 'ANNOUNCING',
      label: '01 / 03',
      content: (
        <div className="flex flex-col justify-end h-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            India market intelligence
            <br />
            <em className="not-italic font-bold" style={{ color: '#81C784', fontStyle: 'italic' }}>
              you can rely on.
            </em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: '#C2DDB4' }}>
            Analyst-validated market sizing and full strategy reports, in minutes.
            Built for India's founders and MSME owners.
          </p>
          {/* TAM / SAM / SOM bar visual — from linkedin image */}
          <div className="mt-10 space-y-3 max-w-sm">
            {[
              { label: 'TAM', w: '100%' },
              { label: 'SAM', w: '55%' },
              { label: 'SOM', w: '28%' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-4">
                <span className="w-10 text-xs font-semibold tracking-widest" style={{ color: '#A5D6A7' }}>
                  {b.label}
                </span>
                <div className="flex-1 h-2.5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: b.w, backgroundColor: '#4CAF50' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm font-semibold italic" style={{ color: '#81C784' }}>
            Studio opens 31 July 2026 · MARC's 16th anniversary
          </p>
        </div>
      ),
    },

    /* SLIDE 2 — How it works */
    {
      eyebrow: 'HOW IT WORKS',
      label: '02 / 03',
      content: (
        <div className="flex flex-col justify-end h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">
            Four steps. One number{' '}
            <br className="hidden md:block" />
            you can{' '}
            <em style={{ color: '#81C784', fontStyle: 'italic' }}>rely on.</em>
          </h2>
          <div className="mt-10 space-y-3">
            {[
              {
                n: '01',
                title: 'Ask',
                desc: 'Describe your market in one plain-English line. No spreadsheet, no template.',
                highlight: false,
              },
              {
                n: '02',
                title: 'Size',
                desc: 'MARC sizes it from sourced anchors, with every assumption on the table.',
                highlight: false,
              },
              {
                n: '03',
                title: 'Validate',
                desc: 'A senior MARC analyst signs off before any number is released.',
                highlight: true,
                badge: 'THE MARC DIFFERENCE',
              },
              {
                n: '04',
                title: 'Deliver',
                desc: 'A defensible number, ready to act on as a PDF or a board-ready deck.',
                highlight: false,
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex items-start gap-5 rounded-2xl px-6 py-4"
                style={{
                  backgroundColor: step.highlight
                    ? 'rgba(129,199,132,0.1)'
                    : 'rgba(255,255,255,0.05)',
                  border: step.highlight
                    ? '1px solid rgba(129,199,132,0.25)'
                    : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span
                  className="text-2xl font-bold italic flex-shrink-0 w-8"
                  style={{ color: '#81C784', fontStyle: 'italic' }}
                >
                  {step.n}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-white">{step.title}</span>
                    {step.badge && (
                      <span
                        className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ color: '#81C784', backgroundColor: 'rgba(129,199,132,0.12)' }}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm leading-relaxed" style={{ color: '#C2DDB4' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    /* SLIDE 3 — Generic AI vs MARC */
    {
      eyebrow: 'GENERIC AI VS MARC',
      label: '03 / 03',
      content: (
        <div className="flex flex-col justify-end h-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">
            Same question.
            <br />
            <em style={{ color: '#81C784', fontStyle: 'italic' }}>Two answers.</em>
          </h2>
          <p className="mt-4 text-sm" style={{ color: '#C2DDB4' }}>
            "How big is the EV-charging market in India?"
          </p>

          {/* Generic AI box */}
          <div
            className="mt-8 rounded-2xl p-5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#94A3B8' }}
            >
              A Generic AI Tool
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
              "The India EV-charging market is large and growing rapidly. It is expected to
              be worth billions in the coming years, with many players competing. Overall, a
              promising space with strong potential."
            </p>
          </div>

          {/* MARC box */}
          <div
            className="mt-3 rounded-2xl p-5"
            style={{
              backgroundColor: 'rgba(129,199,132,0.08)',
              border: '1px solid rgba(129,199,132,0.25)',
            }}
          >
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#81C784' }}
            >
              MARC Market Pulse
            </p>
            <p className="text-sm leading-relaxed text-white">
              <span
                className="inline-block px-2 py-0.5 rounded font-semibold mr-1"
                style={{ backgroundColor: 'rgba(129,199,132,0.2)', color: '#81C784' }}
              >
                ₹14,200 Cr
              </span>
              today, growing ~24% a year [IBEF, MoSPI]. Serviceable now:{' '}
              <span
                className="inline-block px-2 py-0.5 rounded font-semibold mx-1"
                style={{ backgroundColor: 'rgba(129,199,132,0.2)', color: '#81C784' }}
              >
                ₹3,800 Cr
              </span>
              . Near-term obtainable:{' '}
              <span
                className="inline-block px-2 py-0.5 rounded font-semibold mx-1"
                style={{ backgroundColor: 'rgba(129,199,132,0.2)', color: '#81C784' }}
              >
                ₹620 Cr
              </span>
              . Verdict: real, win on speed. Signed off by a MARC analyst.
            </p>
            <p className="mt-3 text-xs italic" style={{ color: '#81C784' }}>
              Illustrative example. Every live figure is sourced and confidence-flagged.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const prev = () => setActive((a) => (a === 0 ? slides.length - 1 : a - 1))
  const next = () => setActive((a) => (a === slides.length - 1 ? 0 : a + 1))

  React.useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActive((a) => (a === slides.length - 1 ? 0 : a + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{
        background: 'radial-gradient(ellipse at top right, #1a3a1a 0%, #0d2010 60%, #081408 100%)',
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, #4CAF50 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Bottom-left glow */}
      <div
        className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(255,109,0,0.1)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(255,109,0,0.18)', color: '#FFAB76' }}
            >
              Launching 31 July 2026
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              <span style={{ color: '#81C784' }}>MARC</span> Market Pulse
            </h2>
            <p className="mt-2 text-sm max-w-md" style={{ color: '#C2DDB4' }}>
              While the Business Health Check reads your <em>internal</em> operations,
              Market Pulse tackles <em>external</em> uncertainty — market size, competition,
              and demographics in minutes.
            </p>
          </div>

          {/* Carousel nav */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
              aria-label="Previous slide"
            >
              ←
            </button>
            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: active === i ? '20px' : '8px',
                    height: '8px',
                    backgroundColor: active === i ? '#81C784' : 'rgba(255,255,255,0.25)',
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Slide panel */}
        <div
          className="overflow-hidden rounded-3xl"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex items-start transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 p-8 md:p-12"
                style={{ minWidth: '100%', backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                {/* Slide eyebrow + counter */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: '#81C784' }}
                  >
                    {slide.eyebrow}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: '#4a7a4a' }}>
                    {slide.label}
                  </span>
                </div>
                {slide.content}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div
          className="mt-8 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p className="text-sm font-medium" style={{ color: '#C2DDB4' }}>
            Be first in. Free for MSME owners during the launch window.{' '}
            <span className="text-white font-semibold">Studio opens 31 July 2026.</span>
          </p>
          <a
            href="https://launch.marcglocal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5 whitespace-nowrap text-sm"
            style={{ backgroundColor: '#FF6D00' }}
          >
            Get Early Access
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------------- */
/* Combined page                                                            */
/* New order per brief:                                                     */
/*   1. Hero banner (VyaparHero)                                           */
/*   2. MSME overview / stats (MSMEIndustrySection)                       */
/*   3. Diagnostic / health check (BusinessCheckupSection)                */
/*   4. MSME Pulse teaser (MarcMarketPulseSection)                        */
/*   5. MARC Services in plain language (VyaparServices)                  */
/*   6. Contact CTA (VyaparContactCTA, replaces pricing for now)           */
/* ----------------------------------------------------------------------- */
export default function MARCVyaparPage() {
  return (
    <main>
      <VyaparHero />
      <MSMEIndustrySection />
      <BusinessCheckupSection />
      <MarcMarketPulseSection />
      <VyaparServices />
      <VyaparContactCTA />
    </main>
  )
}