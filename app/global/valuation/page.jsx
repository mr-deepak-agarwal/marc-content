'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Scale, BarChart3, TrendingUp, FileText, Shield, Users, Calculator, CheckCircle2 } from 'lucide-react'

const pageData = {
  tagline: 'Business Valuation | U.S. & Global Markets',
  title: 'Clear, Defensible Business Valuations',
  titleHighlight: 'for Transactions & Capital Raising',
  description: 'MARC provides independent business valuation services and transaction advisory support to companies, founders, and investors across the United States and global markets. Our valuations support mergers and acquisitions, capital raising, shareholder transactions, and strategic decision-making, delivering practical, market-aligned insights that withstand scrutiny from investors, boards, lenders, and M&A advisory firms.',

  heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',

  stats: [
    { value: 'US & Global', label: 'Market Coverage' },
    { value: 'DCF + Multiples', label: 'Dual Methodology' },
    { value: '2–3 Weeks', label: 'Typical Turnaround' },
    { value: '100%', label: 'White-Label Delivery' },
  ],

  valueProps: [
    {
      icon: Scale,
      title: 'Defensible & Market-Aligned',
      desc: 'Valuations built on accepted US and global standards, structured to support real-world transaction discussions and investor scrutiny.',
    },
    {
      icon: Shield,
      title: 'Audit-Ready Documentation',
      desc: 'Clear models, clean assumptions, and thorough documentation that withstand review from investors, boards, and lenders.',
    },
    {
      icon: TrendingUp,
      title: 'Transaction-Ready Output',
      desc: 'Investor and board-ready summaries designed for M&A negotiations, fundraising discussions, and due diligence processes.',
    },
    {
      icon: FileText,
      title: 'White-Label Delivery',
      desc: 'We operate as your extended team. All deliverables carry your brand—no MARC footprint visible to your clients.',
    },
  ],

  methodology: [
    {
      num: '01',
      title: 'Strategic Understanding',
      desc: 'Define the purpose and context of the valuation—M&A, fundraising, shareholder restructuring, or dispute—to establish the right methodology and scope.',
    },
    {
      num: '02',
      title: 'Financial Analysis & Normalisation',
      desc: 'Review historical financials, analyse revenue mix, customer concentration, operating leverage, and apply normalisation adjustments to reflect sustainable earnings.',
    },
    {
      num: '03',
      title: 'DCF Valuation',
      desc: 'Estimate enterprise value by discounting expected future cash flows to present value, incorporating business-specific risk, growth expectations, and capital structure.',
    },
    {
      num: '04',
      title: 'Market Multiples Benchmarking',
      desc: 'Determine value using earnings multiples derived from comparable public companies and precedent transactions within relevant industries and geographies.',
    },
    {
      num: '05',
      title: 'Sensitivity & Scenario Analysis',
      desc: 'Evaluate upside and downside scenarios related to growth assumptions, margin trajectory, customer retention, and market risk to stress-test the valuation range.',
    },
    {
      num: '06',
      title: 'Investor-Ready Reporting',
      desc: 'Deliver a structured valuation report with clearly articulated assumptions, methodology, findings, and investor-focused summaries ready for deal discussions.',
    },
  ],
  methodologyTitle: 'Our Approach',
  methodologySubtitle: 'Rigorous, US-Standard Valuation Methodology',
  methodologyDescription: 'Business valuation plays a critical role when companies raise capital, acquire or divest businesses, restructure ownership, or engage with institutional investors. At MARC, our valuation assignments follow accepted US and global standards and are structured to support real-world transaction discussions—not just compliance requirements.',

  servicesTitle: 'When You Need a Valuation',
  services: [
    {
      title: 'M&A and Divestitures',
      desc: 'Independent enterprise valuation to support buy-side and sell-side M&A transactions, informing pricing, negotiations, and deal structuring.',
      features: ['Buy-side valuation support', 'Sell-side positioning', 'Deal structuring inputs'],
      icon: Scale,
    },
    {
      title: 'Equity & Debt Fundraising',
      desc: 'Valuation analysis to support capital raising discussions with institutional investors, private equity funds, and strategic partners.',
      features: ['Investor-ready valuation reports', 'Growth and return analysis', 'Sensitivity frameworks'],
      icon: TrendingUp,
    },
    {
      title: 'Shareholder Transactions',
      desc: 'Support for shareholder entry, exit, restructuring, and ownership change scenarios requiring an independent and defensible view of value.',
      features: ['Entry / exit valuations', 'Ownership restructuring', 'Board-ready summaries'],
      icon: Users,
    },
    {
      title: 'Transaction Support & Disputes',
      desc: 'Valuation analysis for asset-backed financing, business restructuring, commercial disputes, and advisory support during investor due diligence.',
      features: ['Asset-backed financing', 'Dispute resolution support', 'Due diligence assistance'],
      icon: Shield,
    },
  ],

  caseStudies: [
    {
      client: 'Healthcare Technology Company (USA)',
      industry: 'Healthcare SaaS',
      service: 'Business Valuation & Information Memorandum',
      challenge: 'A US-based healthcare technology company providing software-enabled solutions to hospitals and outpatient providers engaged MARC to support capital raising and strategic growth initiatives. The company needed a defensible enterprise valuation and an investor-ready Information Memorandum.',
      solution: 'MARC reviewed historical financials analysing revenue mix, customer concentration, churn metrics, and operating leverage. Developed forward-looking financial projections incorporating customer growth, pricing expansion, and platform scalability. Conducted valuation using DCF supported by benchmarking against comparable US and global healthcare technology companies and recent transactions. Assessed key value drivers including recurring revenue visibility, regulatory readiness, and customer acquisition efficiency.',
      result: 'Robust, market-aligned valuation and a well-structured Information Memorandum. The company was positioned as a scalable healthcare technology platform with strong recurring revenues and a clearly articulated growth strategy, supporting effective investor engagement.',
    },
    {
      client: 'In-Car Entertainment Company (USA)',
      industry: 'Consumer Technology',
      service: 'Valuation for Capital Raising',
      challenge: 'A US-based in-car entertainment company engaged MARC to provide valuation support as part of a broader CIM preparation for capital raising and strategic discussions with institutional investors.',
      solution: 'Developed integrated financial projections aligned with the investment narrative. Embedded valuation analysis and sensitivity frameworks within the CIM. Ensured alignment between narrative, financials, and transaction objectives to reduce diligence friction for prospective investors.',
      result: 'A concise, market-aligned valuation embedded in an investor-ready CIM that supported investor outreach and diligence, positioning the company effectively for capital raising.',
    },
    {
      client: 'Mid-Market Advisor Clients',
      industry: 'Multiple Sectors',
      service: 'White-Label Valuation Support',
      challenge: 'Boutique investment banks and independent M&A advisors frequently face capacity constraints during active deal cycles, needing high-quality valuation support delivered on tight timelines without expanding full-time headcount.',
      solution: 'MARC provides on-demand, white-label valuation support—DCF models, market multiples analysis, valuation summaries—delivered to the advisor\'s standards and branded under their identity. Clean handovers, NDAs, and no brand leakage.',
      result: 'Advisors achieve faster turnaround, maintain deal quality, and scale their capacity without fixed hiring costs—supporting more mandates simultaneously.',
    },
  ],

  faqs: [
    {
      q: 'When is a business valuation required?',
      a: 'Valuations are required for M&A transactions, fundraising, shareholder entry or exit, restructuring, disputes, and financing decisions.',
    },
    {
      q: 'What information is needed for a valuation?',
      a: 'Financial statements, projections, business plans, customer and product details, and relevant market and operational information.',
    },
    {
      q: 'Which valuation method is used?',
      a: 'The approach depends on the business and transaction context. Common methods include DCF, market multiples, or a combination of both. We select the methodology most appropriate to the transaction and investor expectations.',
    },
    {
      q: 'How does valuation support fundraising?',
      a: 'Valuation helps investors understand enterprise value, growth potential, risks, and expected returns—enabling more structured and credible discussions and reducing friction during diligence.',
    },
    {
      q: 'How long does a business valuation typically take?',
      a: 'Timelines vary based on complexity, data availability, and transaction requirements. Most valuation engagements are completed within two to three weeks.',
    },
    {
      q: 'Do you work directly with end clients or through advisors?',
      a: 'We work both ways. For global advisors, we deliver entirely white-label—no MARC branding, clean handovers, full confidentiality. We also engage directly with companies preparing for transactions.',
    },
  ],

  ctaTitle: 'Partner with a Trusted Valuation Team',
  ctaDescription: 'Supporting U.S. and global transactions with defensible valuation analysis, transaction insight, and investor-ready documentation. Speak with our valuation team to discuss your transaction, fundraising, or strategic requirements.',
}

export default function GlobalValuationPage() {
  return <ServicePageTemplate {...pageData} />
}