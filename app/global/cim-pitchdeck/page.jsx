'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, BarChart3, TrendingUp, Scale, Layers } from 'lucide-react'

const pageData = {
  tagline: 'CIM & Pitch Deck Advisory | M&A and Fundraising',
  title: 'Investor-Ready Communication for',
  titleHighlight: 'M&A and Fundraising',
  description: 'A Confidential Information Memorandum (CIM) or Pitch Deck is a core document in U.S. and global mergers and acquisitions and fundraising processes. It presents a company\'s business model, market opportunity, financial performance, and investment rationale in a clear, structured, and investor-ready format aligned with expectations of M&A advisory firms and institutional investors. MARC supports companies across the full lifecycle of CIM and Pitch Deck preparation, combining strategic analysis, market research and consulting, financial modelling and valuation, and investor-focused storytelling to position businesses for successful transactions.',

  heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',

  stats: [
    { value: 'CIMs', label: 'Confidential Info Memos' },
    { value: 'Pitch Decks', label: 'Investor & Buyer Decks' },
    { value: 'Teasers', label: 'Investment Teasers' },
    { value: 'PE & Strategic', label: 'Investor Audience Ready' },
  ],

  valueProps: [
    {
      icon: FileText,
      title: 'Clarity',
      desc: 'Clearly explain the business model and operating economics. Articulate the market opportunity and competitive positioning.',
    },
    {
      icon: Scale,
      title: 'Credibility',
      desc: 'Each document is grounded in robust financial analysis, valuation logic, and a clear articulation of value creation—ensuring credibility throughout investor discussions.',
    },
    {
      icon: TrendingUp,
      title: 'Transaction Readiness',
      desc: 'Highlight value creation levers and growth drivers. Align financial projections with strategic priorities. Reduce friction during investor diligence and negotiations.',
    },
    {
      icon: Layers,
      title: 'Investor-Focused Storytelling',
      desc: 'Our work reflects the rigor applied by leading M&A advisory firms and business strategy consulting firms, combining analysis with sharp investor-focused narrative.',
    },
  ],

  methodology: [
    {
      num: '01',
      title: 'Strategic & Operational Assessment',
      desc: 'Evaluation of organizational structure, governance, and management depth. Review of operating model, systems, and scalability. Analysis of customer mix, revenue concentration, and pricing sustainability. Clear articulation of product and service differentiation.',
    },
    {
      num: '02',
      title: 'Market & Competitive Analysis',
      desc: 'Market sizing, growth trends, and industry context. Competitive benchmarking and positioning. Identification of growth levers, expansion opportunities, and key risks.',
    },
    {
      num: '03',
      title: 'Investment Thesis & Key Value Drivers',
      desc: 'Review of the business model, operations, and management structure. Clear articulation of the investment thesis and key value drivers.',
    },
    {
      num: '04',
      title: 'Financial Projections & Growth Assumptions',
      desc: 'Development of financial projections and growth assumptions. Assessment of return expectations and potential exit considerations.',
    },
    {
      num: '05',
      title: 'CIM / Pitch Deck Preparation',
      desc: 'Structuring a comprehensive CIM covering company overview, strategy, and growth roadmap. Development of investment highlights. Integration of operating metrics, financial projections, and valuation insights.',
    },
    {
      num: '06',
      title: 'Returns & Exit Considerations',
      desc: 'Identification of value creation levers and return drivers. Alignment of financial projections with strategic initiatives. Outline of potential exit pathways and investment horizons.',
    },
  ],
  methodologyTitle: 'Our Approach',
  methodologySubtitle: 'Clarity, Credibility, and Transaction Readiness',
  methodologyDescription: 'Our CIM and Pitch Deck development approach focuses on three principles: clarity, credibility, and transaction readiness. We prepare investor-ready CIMs, Pitch Decks, and Investment Teasers designed to meet the expectations of institutional investors, private equity funds, and strategic buyers across U.S. and global markets.',

  servicesTitle: 'What We Do',
  services: [
    {
      title: 'Confidential Information Memorandums (CIMs)',
      desc: 'Structuring a comprehensive CIM covering company overview, strategy, and growth roadmap. Development of investment highlights aligned with investor expectations. Integration of operating metrics, financial projections, and valuation insights.',
      features: [
        'Business model and operating economics',
        'Market opportunity and competitive positioning',
        'Financial projections and valuation analysis',
        'Ensuring consistency across narrative, numbers, and transaction rationale',
      ],
      icon: FileText,
    },
    {
      title: 'Investor & Buyer Pitch Decks',
      desc: 'Investor and buyer pitch decks designed to meet the expectations of institutional investors, private equity funds, and strategic buyers across U.S. and global markets.',
      features: [
        'Investment thesis and key value drivers',
        'Market sizing and competitive landscaping',
        'Financial modeling and value bridge narratives',
        'Clean design + sharp messaging',
      ],
      icon: Layers,
    },
    {
      title: 'Financial Modelling & Valuation',
      desc: 'Each document is grounded in robust financial analysis, valuation logic, and a clear articulation of value creation, ensuring credibility throughout investor discussions.',
      features: [
        'Development of financial projections and growth assumptions',
        'Assessment of return expectations and exit considerations',
        'Valuation analysis supporting pricing discussions',
        'Sensitivity analysis frameworks',
      ],
      icon: BarChart3,
    },
    {
      title: 'Market Research & Competitive Analysis',
      desc: 'We place the business within its broader market context to establish scale, relevance, and growth potential for investor audiences.',
      features: [
        'Market sizing, growth trends, and industry context',
        'Competitive benchmarking and positioning',
        'Identification of growth levers and expansion opportunities',
        'Key risk identification',
      ],
      icon: TrendingUp,
    },
  ],

  caseStudies: [
    {
      client: 'In-Car Entertainment Company (USA)',
      industry: 'Consumer Technology',
      service: 'CIM Preparation for Capital Raising',
      challenge: 'A US-based in-car entertainment company engaged MARC to prepare an investor-ready CIM to support capital raising and strategic discussions.',
      solution: 'Developed a structured CIM articulating the business model, market opportunity, and growth strategy. Analyzed historical financial performance and key operating drivers. Built integrated financial projections aligned with the investment narrative. Embedded valuation analysis and sensitivity frameworks. Ensured alignment between narrative, financials, and transaction objectives.',
      result: 'A concise, market-aligned CIM that supported investor outreach and diligence, positioning the company for capital raising and long-term execution.',
    },
  ],

  faqs: [
    {
      q: 'Why is a valuation included in a CIM?',
      a: 'A valuation provides an independent view of enterprise value, supporting pricing expectations and enabling investors to assess returns, risks, and assumptions on a consistent basis. This is a standard requirement across M&A advisory firms.',
    },
    {
      q: 'Which valuation methodologies are used?',
      a: 'Methodologies are transaction-specific. Discounted Cash Flow (DCF) is commonly applied, supported by trading and transaction multiple benchmarking.',
    },
    {
      q: 'How are financial projections developed?',
      a: 'Projections are based on historical performance, management inputs, market conditions, and identified growth drivers, supported by structured market research and sensitivity analysis.',
    },
    {
      q: 'How does a CIM support investor diligence?',
      a: 'A CIM consolidates financial, valuation, and strategic analysis into a single structured document, enabling investors to quickly assess the opportunity.',
    },
    {
      q: 'How does a CIM improve transaction execution?',
      a: 'By aligning the investment narrative, financial projections, and valuation framework upfront, a CIM reduces execution risk and improves efficiency during investor discussions and diligence.',
    },
  ],

  ctaTitle: 'Discuss Your CIM or Pitch Deck Requirements',
  ctaDescription: 'Whether you are preparing for capital raising, a strategic partnership, or an M&A transaction, MARC supports management teams with investor-ready CIMs and Pitch Decks. Speak with our team to understand how we can support your transaction with credibility and execution focus.',
}

export default function GlobalCIMPitchdeckPage() {
  return <ServicePageTemplate {...pageData} />
}