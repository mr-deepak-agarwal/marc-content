'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, BarChart3, TrendingUp, Users, Scale, Globe, Layers, CheckCircle2 } from 'lucide-react'

const pageData = {
  tagline: 'CIM & Pitch Deck Advisory | M&A and Fundraising',
  title: 'Investor-Ready Communication for',
  titleHighlight: 'M&A and Fundraising',
  description: 'A Confidential Information Memorandum (CIM) or Pitch Deck is a core document in US and global mergers and acquisitions and fundraising processes. It presents a company\'s business model, market opportunity, financial performance, and investment rationale in a clear, structured, and investor-ready format aligned with expectations of M&A advisory firms and institutional investors. MARC supports companies and advisors across the full lifecycle of CIM and Pitch Deck preparation.',

  heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',

  stats: [
    { value: 'US & Global', label: 'Market Alignment' },
    { value: 'CIM + Deck', label: 'Full Lifecycle Support' },
    { value: 'White-Label', label: 'Delivery Option' },
    { value: 'PE & Strategic', label: 'Investor Audience Ready' },
  ],

  valueProps: [
    {
      icon: FileText,
      title: 'Clarity',
      desc: 'Every document is structured to clearly explain the business model, market opportunity, and investment thesis—aligned to how institutional investors evaluate opportunities.',
    },
    {
      icon: Scale,
      title: 'Credibility',
      desc: 'Grounded in robust financial analysis, valuation logic, and a clear articulation of value creation—not just polished slides.',
    },
    {
      icon: TrendingUp,
      title: 'Transaction Readiness',
      desc: 'Reduce friction during investor diligence and negotiations. Our documents are built to hold up under scrutiny, not just generate interest.',
    },
    {
      icon: Layers,
      title: 'White-Label Delivery',
      desc: 'Advisors and investment banks use MARC as their invisible execution partner. Clean handovers, NDAs, and your brand on every page.',
    },
  ],

  methodology: [
    {
      num: '01',
      title: 'Strategic & Operational Assessment',
      desc: 'Evaluate the fundamentals investors focus on—organizational structure, governance, management depth, operating model, scalability, customer mix, revenue concentration, pricing sustainability, and product differentiation.',
    },
    {
      num: '02',
      title: 'Market & Competitive Analysis',
      desc: 'Market sizing, growth trends, and industry context. Competitive benchmarking and positioning. Identification of growth levers, expansion opportunities, and key risks to establish market relevance.',
    },
    {
      num: '03',
      title: 'Financial Projections & Analysis',
      desc: 'Development of financial projections incorporating historical performance, management inputs, market conditions, and identified growth drivers—supported by structured sensitivity analysis.',
    },
    {
      num: '04',
      title: 'Valuation Integration',
      desc: 'Embed valuation analysis—DCF, trading multiples, transaction benchmarking—into the narrative to support pricing expectations and help investors assess returns on a consistent basis.',
    },
    {
      num: '05',
      title: 'CIM / Pitch Deck Preparation',
      desc: 'Structured CIM covering company overview, strategy, and growth roadmap. Development of investment highlights aligned with investor expectations. Ensuring consistency across narrative, numbers, and transaction rationale.',
    },
    {
      num: '06',
      title: 'Returns & Exit Considerations',
      desc: 'Identification of value creation levers and return drivers. Alignment of financial projections with strategic initiatives. Outline of potential exit pathways and investment horizons—a standard expectation in US M&A.',
    },
  ],
  methodologyTitle: 'Our Approach',
  methodologySubtitle: 'Clarity, Credibility, and Transaction Readiness',
  methodologyDescription: 'Our CIM and Pitch Deck development approach focuses on three principles: clarity, credibility, and transaction readiness. We begin with a full review of the business model, operations, and management structure—then build outward to the investment thesis, financial projections, and return framework. Every document we produce is built to reduce diligence friction, not just secure the first meeting.',

  servicesTitle: 'What We Deliver',
  services: [
    {
      title: 'Confidential Information Memorandum (CIM)',
      desc: 'A comprehensive, investor-ready CIM covering company overview, market opportunity, financial performance, growth strategy, and investment rationale—structured to meet the expectations of PE funds and strategic buyers.',
      features: [
        'Business model and operating economics',
        'Market opportunity and competitive positioning',
        'Historical financials and normalised earnings',
        'Integrated financial projections',
        'Valuation analysis and sensitivity frameworks',
      ],
      icon: FileText,
    },
    {
      title: 'Investor & Buyer Pitch Decks',
      desc: 'Institutional-quality pitch decks that tell a tight equity story—built for first meetings with PE sponsors, strategic acquirers, or debt providers.',
      features: [
        'Sharply articulated investment thesis',
        'Value creation narrative',
        'Financial highlights and projections',
        'Market sizing and competitive landscape',
        'Clean design + sharp messaging (white-labelled)',
      ],
      icon: Layers,
    },
    {
      title: 'Investment Teasers',
      desc: 'One to two page anonymous teasers designed to generate qualified buyer or investor interest before sharing the full CIM.',
      features: [
        'Anonymous business profile',
        'Key financial metrics',
        'Growth opportunity summary',
        'Transaction rationale',
      ],
      icon: Globe,
    },
    {
      title: 'Financial Modelling & Value Bridge',
      desc: 'Integrated financial models supporting the CIM narrative—historical analysis, forward projections, valuation bridge, and sensitivity tables built to hold up under investor diligence.',
      features: [
        'Three-statement integrated model',
        'Revenue and cost build-up',
        'DCF and multiple-based valuation',
        'Value bridge narratives',
        'Scenario and sensitivity analysis',
      ],
      icon: BarChart3,
    },
  ],

  caseStudies: [
    {
      client: 'In-Car Entertainment Company (USA)',
      industry: 'Consumer Technology',
      service: 'CIM Preparation for Capital Raising',
      challenge: 'A US-based in-car entertainment company engaged MARC to prepare an investor-ready CIM to support capital raising and strategic discussions with institutional investors and strategic buyers.',
      solution: 'Developed a structured CIM articulating the business model, market opportunity, and growth strategy. Analysed historical financial performance and key operating drivers. Built integrated financial projections aligned with the investment narrative. Embedded valuation analysis and sensitivity frameworks. Ensured alignment between narrative, financials, and transaction objectives.',
      result: 'A concise, market-aligned CIM that supported investor outreach and diligence, positioning the company effectively for capital raising and long-term execution.',
    },
    {
      client: 'Healthcare Technology Company (USA)',
      industry: 'Healthcare SaaS',
      service: 'CIM & Valuation for Fundraising',
      challenge: 'A US-based healthcare technology company sought to raise institutional capital. They needed both a defensible valuation and an investor-ready Information Memorandum that would hold up under PE-level scrutiny.',
      solution: 'Reviewed historical financials analysing revenue mix, customer concentration, and operating leverage. Built forward projections incorporating customer growth, margin improvement, and platform scalability. Conducted DCF valuation benchmarked against comparable healthcare technology companies. Prepared a comprehensive investor-ready IM covering technology architecture, addressable market, regulatory considerations, and growth roadmap.',
      result: 'The company was positioned as a scalable platform with strong recurring revenues and regulatory readiness, supporting structured investor engagement and reducing diligence friction.',
    },
    {
      client: 'Boutique M&A Advisors — Multiple Mandates',
      industry: 'Financial Advisory',
      service: 'White-Label CIM Execution',
      challenge: 'Boutique investment banks frequently need to run multiple CIM processes simultaneously but lack the internal bandwidth to produce institutional-quality materials across concurrent mandates without compromising turnaround times.',
      solution: 'MARC serves as the white-label execution team—handling financial analysis, market research, projection development, and document preparation—delivering to the advisor\'s templates and standards with no MARC branding visible to their clients.',
      result: 'Advisors successfully manage higher deal volumes, deliver better-quality CIMs faster, and improve buyer engagement outcomes—without expanding headcount.',
    },
  ],

  faqs: [
    {
      q: 'Why is a valuation included in a CIM?',
      a: 'A valuation provides an independent view of enterprise value, supporting pricing expectations and enabling investors to assess returns, risks, and assumptions on a consistent basis. This is a standard requirement across M&A advisory firms.',
    },
    {
      q: 'Which valuation methodologies are used?',
      a: 'Methodologies are transaction-specific. Discounted Cash Flow (DCF) is commonly applied, supported by trading and transaction multiple benchmarking against relevant comparable companies and precedent transactions.',
    },
    {
      q: 'How are financial projections developed?',
      a: 'Projections are based on historical performance, management inputs, market conditions, and identified growth drivers—supported by structured market research, operating assumptions, and sensitivity analysis.',
    },
    {
      q: 'How does a CIM support investor diligence?',
      a: 'A CIM consolidates financial, valuation, and strategic analysis into a single structured document, enabling investors to quickly assess the opportunity and reducing the volume of follow-up questions during diligence.',
    },
    {
      q: 'How does a CIM improve transaction execution?',
      a: 'By aligning the investment narrative, financial projections, and valuation framework upfront, a CIM reduces execution risk and improves efficiency during investor discussions and diligence—leading to fewer rewrites and faster closings.',
    },
    {
      q: 'Do you work with advisors on a white-label basis?',
      a: 'Yes. Many of our engagements are with boutique investment banks and M&A advisors who need execution capacity. We deliver under their brand, with NDAs, clean handovers, and no MARC footprint visible to their clients.',
    },
  ],

  ctaTitle: 'Discuss Your CIM or Pitch Deck Requirements',
  ctaDescription: 'Whether you are preparing for capital raising, a strategic partnership, or an M&A transaction, MARC supports management teams and advisors with investor-ready CIMs and Pitch Decks backed by financial analysis, valuation, and M&A expertise.',
}

export default function GlobalCIMPitchdeckPage() {
  return <ServicePageTemplate {...pageData} />
}