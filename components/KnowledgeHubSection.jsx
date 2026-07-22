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
  MapPin,
  ShieldAlert,
  Building2,
  Users,
  Target,
  Layers,
  GraduationCap,
  AlertTriangle,
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

/* ---- MSME schemes — short intro strip pointing into the sections below ---- */
function SchemesIntro() {
  return (
    <section className="pt-20 pb-4 font-sans bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
          Simplified, not simplistic
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-5 tracking-tight" style={{ color: '#1B5E20' }}>
          MSME schemes, without the fine-print maze
        </h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#33691E' }}>
          Government and SIDBI-backed support generally falls into a few broad categories —
          collateral-free credit, interest subvention, and capital or technology subsidies. Pick
          your state below for the specifics, or browse the digital-first schemes that apply
          nationally right after.
        </p>
      </div>
    </section>
  )
}

/* ---- State scheme explorer — tab picker, data from the MSME research spreadsheet ---- */
const STATE_SCHEMES = {
  Goa: [
    {
      title: 'Capital Subsidy Scheme (under Umbrella Scheme)',
      offers:
        '30% non-refundable grant on capital investment, capped around ₹25 lakh (₹27.5 lakh for women/SC-ST)',
      who: 'New or expanding micro & small manufacturing units, white/green/orange pollution category',
    },
    {
      title: 'Interest Subsidy Scheme',
      offers:
        '30% of interest paid or 1.5% of turnover (whichever is lower), capped at ₹5 lakh/year, for 5 years',
      who: 'Same manufacturing units as above',
    },
    {
      title: 'Goa Package Scheme of Incentives',
      offers: 'Special incentive up to 70% (backward talukas) or 50% (other talukas) of capital expenditure',
      who: 'Units employing minimum 80% local Goans',
    },
    {
      title: "Chief Minister's Rojgar Yojana (CMRY)",
      offers: 'Self-employment loan scheme',
      who: 'First-time entrepreneurs/self-employment seekers',
    },
  ],
  Karnataka: [
    {
      title: 'Investment Promotion Subsidy (Industrial Policy 2025-30)',
      offers:
        'Up to 35% of fixed capital investment (Zone 1/backward districts), 25% (Zone 2), lower/none in Bengaluru',
      who: 'New/expanding MSMEs — subsidy scales down as location gets more developed',
    },
    {
      title: 'Interest Subsidy',
      offers: 'Up to 6% on term loans, max loan ₹50 lakh',
      who: 'MSMEs taking term loans for new investment',
    },
    {
      title: 'KSFC MSME Loan',
      offers: '₹10 lakh–₹10 crore term loans at 9–12%, plus 1% rebate for women, 1% extra for SC/ST',
      who: 'Manufacturing, service, trade enterprises',
    },
    {
      title: "CMEGP (Karnataka's own employment generation scheme)",
      offers: 'Margin money/capital subsidy, applied via cmegp.kar.nic.in',
      who: 'New self-employment ventures',
    },
  ],
  Maharashtra: [
    {
      title: 'Industrial Promotion Subsidy (IPS)',
      offers: '100% refund of state GST paid on first sale of goods',
      who: 'New/expanding manufacturing MSMEs — rewards you after you start selling',
    },
    {
      title: 'Technology Upgradation Subsidy',
      offers: '5% subsidy on new capital equipment, capped at ₹25 lakh',
      who: 'Expanding MSMEs upgrading machinery',
    },
    {
      title: 'Quality Certification Subsidy',
      offers: '75% of certification cost',
      who: 'MSMEs pursuing quality certifications',
    },
    {
      title: 'Patent Registration Subsidy',
      offers: '75% of cost, capped ₹10 lakh (national) / ₹20 lakh (international)',
      who: 'MSMEs filing patents',
    },
  ],
}

function StateSchemesExplorer() {
  const states = Object.keys(STATE_SCHEMES)
  const [active, setActive] = React.useState(states[0])

  return (
    <section className="py-16 font-sans" style={{ backgroundColor: '#F7FFF5' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="w-4 h-4" style={{ color: '#2E7D32' }} />
          <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
            By state
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Select a state">
          {states.map((state) => {
            const isActive = state === active
            return (
              <button
                key={state}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(state)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
                style={
                  isActive
                    ? { backgroundColor: '#1B5E20', color: 'white' }
                    : { backgroundColor: 'white', color: '#1B5E20', border: '1px solid rgba(46,125,50,0.25)' }
                }
              >
                {state}
              </button>
            )
          })}
          <span
            className="px-5 py-2.5 rounded-full text-sm font-medium"
            style={{ backgroundColor: 'rgba(46,125,50,0.06)', color: '#5A8A5D', border: '1px dashed rgba(46,125,50,0.3)' }}
          >
            More states coming
          </span>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {STATE_SCHEMES[active].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl p-6 bg-white"
              style={{ border: '1px solid rgba(46,125,50,0.15)' }}
            >
              <h3 className="text-base font-bold mb-3 leading-snug" style={{ color: '#1B5E20' }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#33691E' }}>
                <span className="font-semibold" style={{ color: '#2E7D32' }}>
                  What it offers:{' '}
                </span>
                {s.offers}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#5A8A5D' }}>
                <span className="font-semibold" style={{ color: '#2E7D32' }}>
                  Who it's for:{' '}
                </span>
                {s.who}
              </p>
            </div>
          ))}
        </motion.div>

        <p className="text-xs mt-6" style={{ color: '#5A8A5D' }}>
          Figures are indicative and change with policy updates — confirm current caps and eligibility
          before applying.
        </p>
      </div>
    </section>
  )
}

/* ---- NeSL — Core Registration, e-BG, and eIA (eIA is NOT run by NeSL) ---- */
function NeslSection() {
  const products = [
    {
      name: 'NeSL Core Registration',
      subtitle: 'Information Utility under the Insolvency & Bankruptcy Code',
      what: [
        "Registration as a user on NeSL's Information Utility (IU) platform",
        "India's first IU under the IBC, 2016, regulated by IBBI",
      ],
      who: [
        'Financial creditors, operational/MSME creditors, borrowers, co-obligants, guarantors',
        'Individuals and entities (Insolvency Professionals too)',
      ],
      how: [
        'Go to iu.nesl.co.in',
        'Identity verification via Aadhaar e-Sign OTP or Digital Signature Certificate (DSC)',
        'PAN verified against the Income Tax database',
        'Mobile number and email ID verification',
        'Entities need an authority letter or board resolution',
      ],
      benefits: [
        'Creates a verified, tamper-proof record of debt/liabilities',
        'Acts as a central reservoir accessible to auditors, IPs, and adjudicating authorities',
        "Speeds up insolvency resolution — legally recognized as a 'Record of Default' (RoD)",
        'Reduces disputes via a single agreed statement of outstanding balance',
        'Better credit monitoring for lenders; more transparency for borrowers',
      ],
    },
    {
      name: 'e-BG (Electronic Bank Guarantee)',
      subtitle: "NeSL's DDE platform",
      what: [
        'Fully digital, paperless issuance, amendment, invocation and cancellation of bank guarantees',
      ],
      who: [
        'Banks/NBFCs (as issuers, integrated via API)',
        'Applicants (borrowers requesting a BG) and beneficiaries (recipients of the BG)',
      ],
      how: [
        "Bank initiates the BG request on NeSL's DDE platform",
        'Stamp duty is fetched digitally from integrated state government systems',
        'Signed via Aadhaar e-Sign or DSC (or fully automated "server-based signing")',
        'BG is instantly hosted and accessible on the NeSL portal',
      ],
      benefits: [
        'Near-instant activation vs. days for physical BGs',
        'No physical paperwork or manual bank verification needed',
        'Faster release of credit limits, faster contract implementation',
        'Available 24/7, including holidays',
        'Tamper-proof, digitally signed, legally valid',
        'Supports the full lifecycle: amendments, renewals, closures, invocations, even court injunctions',
        'Works with existing BG templates — no need to standardize nationally',
      ],
    },
    {
      name: 'e-Insurance Account (eIA)',
      subtitle: 'Important: NOT run by NeSL',
      warning:
        'Regulated by IRDAI, completely separate from the IBC/IBBI/NeSL ecosystem above — included here because it gets confused with NeSL products, and the digital-first logic is similar.',
      what: [
        'A single digital account holding all your insurance policies (life, health, motor, general) electronically',
        'Similar concept to a demat account for shares',
      ],
      who: ['Any individual holding or planning to buy insurance policies'],
      how: [
        'Registered via an Insurance Repository (NSDL/NIR, CAMS/Centrico, Karvy, CIRL) — not NeSL',
        'Fill the eIA application form + submit KYC (ID proof, address proof)',
        'Submit via insurer, repository, or an "Approved Person" agent',
        'Account is typically activated within about a week',
      ],
      benefits: [
        'Free of cost to the policyholder',
        'Single consolidated view of all policies across insurers',
        'No risk of losing physical policy documents',
        'Faster, smoother claims process for nominees',
        'Free annual consolidated statement',
        'One-point premium payments and service requests',
        'Now practically mandatory when buying term insurance',
      ],
    },
  ]

  const [open, setOpen] = React.useState(0)

  return (
    <section className="py-20 font-sans bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
            Digital-first, and mostly free
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight" style={{ color: '#1B5E20' }}>
            NeSL and related digital records
          </h2>
        </div>

        <div className="space-y-3">
          {products.map((p, i) => {
            const isOpen = open === i
            return (
              <div key={p.name} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(46,125,50,0.15)' }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  style={{ backgroundColor: '#F7FFF5' }}
                >
                  <span>
                    <span className="font-semibold block" style={{ color: '#1B5E20' }}>
                      {p.name}
                    </span>
                    <span
                      className="text-xs flex items-center gap-1.5 mt-1"
                      style={{ color: p.warning ? '#B45309' : '#5A8A5D' }}
                    >
                      {p.warning && <AlertTriangle className="w-3 h-3 flex-shrink-0" />}
                      {p.subtitle}
                    </span>
                  </span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                    style={{ color: '#2E7D32', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 py-6 bg-white space-y-5">
                    {p.warning && (
                      <div
                        className="rounded-xl px-4 py-3 text-sm leading-relaxed flex items-start gap-2.5"
                        style={{ backgroundColor: '#FFF7ED', color: '#9A3412', border: '1px solid #FDBA74' }}
                      >
                        <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        {p.warning}
                      </div>
                    )}
                    <SchemeDetailList label="What it is" items={p.what} />
                    <SchemeDetailList label="Who it's for" items={p.who} />
                    <SchemeDetailList label="How it works" items={p.how} />
                    <SchemeDetailList label="Key benefits" items={p.benefits} />
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

function SchemeDetailList({ label, items }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#2E7D32' }}>
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: '#33691E' }}>
            <span style={{ color: '#81C784' }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---- Corporate Mitra Scheme — logic model (inputs → outputs → outcome → goal) ---- */
function CorporateMitraSection() {
  const stages = [
    {
      icon: Layers,
      label: 'Inputs',
      caption: 'Eligibility and hiring route',
      items: [
        'Candidates (graduates, up to age 30)',
        '₹3,000+GST course fee (50% off for women/NE states)',
        'Training delivered via the SWAYAM Plus portal',
        'Backed by ICAI + ICSI + ICMAI + IIT Madras',
      ],
    },
    {
      icon: GraduationCap,
      label: 'Outputs',
      caption: 'What the candidate completes',
      items: [
        'Trained, certified candidates — 6 months of online coursework plus on-the-job training with an ICAI/ICSI/ICMAI-recognised firm',
      ],
    },
    {
      icon: Users,
      label: 'Outcome',
      caption: 'The end result',
      items: [
        'A nationwide pool of certified "Corporate Mitras" who MSMEs can hire cheaply for compliance, accounting and governance help',
      ],
    },
    {
      icon: Target,
      label: 'Goal',
      caption: 'Why it exists',
      items: [
        'Make compliance affordable for MSMEs, especially in Tier-II/III towns, by creating a new category of trained paraprofessionals',
      ],
    },
  ]

  return (
    <section className="py-20 font-sans" style={{ backgroundColor: '#F7FFF5' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
            Affordable compliance help
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight" style={{ color: '#1B5E20' }}>
            Corporate Mitra Scheme, how it actually works
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {stages.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="relative">
                <div className="rounded-2xl p-6 h-full bg-white" style={{ border: '1px solid rgba(46,125,50,0.15)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#2E7D32' }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#FF6D00' }}>
                    {s.label}
                  </p>
                  <p className="text-xs mb-4" style={{ color: '#5A8A5D' }}>
                    {s.caption}
                  </p>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="text-sm leading-relaxed" style={{ color: '#33691E' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < stages.length - 1 && (
                  <div
                    className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 items-center justify-center z-10"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4" style={{ color: '#81C784' }} />
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

/* ---- NITCON — advisory/consulting partner overview, grouped by category ---- */
function NitconSection() {
  const categories = [
    {
      icon: FileSearch,
      title: 'Consulting & advisory',
      items: [
        'General strategic and technical advisory for government bodies and PSUs, covering planning, design, and execution support',
        'Transaction advisory — support for land monetization and similar transactions, including architectural design and deal structuring',
        'Techno-economic viability studies — feasibility and viability reports used by banks to support credit decisions on new or restructured projects',
        'International services — cross-border project delivery, such as setting up vocational training and incubation centres abroad',
      ],
    },
    {
      icon: Building2,
      title: 'Infrastructure & workforce',
      items: [
        'Infrastructure development works — DPR preparation, architectural/engineering design, bid process management, and construction supervision',
        'Manpower deployment for govt/PSU — sourcing and placing technical and administrative staff on contract',
        'Trainings & skill development — capacity-building programs and vocational training centres for workforce upskilling',
        'Health care services — setting up healthcare infrastructure such as centres of excellence and nursing centres for municipal bodies',
      ],
    },
    {
      icon: LineChart,
      title: 'Technology',
      items: [
        'IT applications — development and deployment of software applications for government use',
        'IT integration — connecting and streamlining IT systems across government departments and agencies',
        'Digital governance vertical — advisory and implementation support for e-governance and digital public service delivery',
      ],
    },
    {
      icon: Banknote,
      title: 'Energy & feasibility',
      items: [
        'Energy management — efficiency studies and audits, including upgrading equipment to meet BEE 5-star standards at DISCOMs',
        'Project management consultancy — end-to-end PMU/PMC services overseeing project execution from planning through delivery',
        'Detailed project reports (DPR) — formal project blueprints covering technical design, cost, and implementation plans for approval and funding',
      ],
    },
  ]

  return (
    <section className="py-20 font-sans bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-sm font-semibold tracking-tight" style={{ color: '#2E7D32' }}>
            Government & PSU advisory
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight" style={{ color: '#1B5E20' }}>
            NITCON, what it offers
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: '#33691E' }}>
            Less a scheme, more a category of partner — worth knowing about if a project needs
            government-facing consulting, DPR work, or technical/manpower support at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="rounded-2xl p-7" style={{ border: '1px solid rgba(46,125,50,0.15)', backgroundColor: '#F7FFF5' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(46,125,50,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#2E7D32' }} />
                </div>
                <h3 className="text-base font-bold mb-3" style={{ color: '#1B5E20' }}>
                  {c.title}
                </h3>
                <ul className="space-y-2">
                  {c.items.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: '#33691E' }}>
                      <span style={{ color: '#81C784' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
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
              comparisons — one searchable, verified source instead of ten browser tabs. Everything
              on this page today is the content backbone, growing state by state; a searchable tool
              on top of it is next.
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
      <SchemesIntro />
      <StateSchemesExplorer />
      <NeslSection />
      <CorporateMitraSection />
      <NitconSection />
      <DataRepositoryTeaser />
      <VyaparContactCTA />
    </main>
  )
}
