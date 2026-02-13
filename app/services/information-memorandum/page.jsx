'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, TrendingUp, Target, BarChart3, Briefcase, Layers, ShieldCheck } from 'lucide-react'

const pageData = {
  tagline: 'Information Memorandum & Pitch Deck',
  title: 'Investor-Ready Documentation for',
  titleHighlight: 'Fundraising & Transactions',
  description: 'An Information Memorandum (IM) or Pitch Deck is a critical fundraising and transaction document that presents a business opportunity in a clear, structured, and investor-ready format. MARC helps companies prepare high-impact IMs and Pitch Decks that enable investors, strategic partners, and acquirers to quickly understand the business model, market opportunity, growth strategy, and investment rationale.',

  stats: [
    { value: '100+', label: 'IMs Prepared' },
    { value: '₹5,000Cr+', label: 'Capital Raised' },
    { value: '85%', label: 'Fundraising Success Rate' },
    { value: '50+', label: 'Strategic Transactions' },
  ],

  valueProps: [
    { icon: Target, title: 'Clear Positioning', desc: 'Position the company effectively, highlighting core value drivers and differentiation for investors and acquirers.' },
    { icon: TrendingUp, title: 'Compelling Investment Thesis', desc: 'Articulate growth story and investment rationale aligned with investor expectations and deal objectives.' },
    { icon: BarChart3, title: 'Credible Financials', desc: 'Integration of operating metrics and financial projections that support valuation expectations and deal discussions.' },
    { icon: ShieldCheck, title: 'Reduced Information Asymmetry', desc: 'Build credibility and ensure consistent communication with investors and buyers throughout the process.' },
  ],

  methodology: [
    { num: '01', title: 'Strategic Understanding', desc: 'Review of organisational structure, governance, operating model, scalability, customer base, revenue mix, and pricing sustainability.' },
    { num: '02', title: 'Market & Competitive Analysis', desc: 'Assessment of market size, growth trends, competitive positioning, strategic differentiation, and key risks and growth levers.' },
    { num: '03', title: 'Value Proposition Development', desc: 'Clear articulation of products, services, customer base, and the core value proposition that drives investor interest.' },
    { num: '04', title: 'IM & Pitch Deck Preparation', desc: 'Structured IM covering company overview, business plan, growth strategy, and investment highlights aligned with investor expectations.' },
    { num: '05', title: 'Financial Integration', desc: 'Integration of operating metrics, financial projections, return drivers, scalability levers, and potential exit pathways.' },
    { num: '06', title: 'Investor Readiness', desc: 'Preparation of investment teasers and support for targeted investor outreach and structured deal discussions.' },
  ],
  methodologyDescription: 'From a transaction perspective, an IM serves as a decision-support tool. It reduces information asymmetry, builds credibility, and ensures consistent communication with investors and buyers — enabling structured, outcome-driven conversations.',

  services: [
    {
      title: 'Information Memorandum (IM)',
      desc: 'Comprehensive IM for fundraising, M&A, and strategic partnerships — covering company overview, business plan, growth strategy, operating metrics, and investment highlights.',
      features: ['Company Overview', 'Business Plan & Growth Strategy', 'Financial Projections', 'Investment Highlights'],
      icon: FileText,
    },
    {
      title: 'Investor Pitch Deck',
      desc: 'Compelling pitch deck presentations for investor meetings and roadshows — designed to communicate the opportunity quickly, clearly, and persuasively.',
      features: ['Executive Summary', 'Market Opportunity', 'Business Model', 'Financial Highlights'],
      icon: Layers,
    },
    {
      title: 'Investment Teaser',
      desc: 'Concise, high-level summaries (2–3 pages) designed to generate initial investor interest and support targeted outreach before sharing the detailed IM.',
      features: ['Business Snapshot', 'Key Metrics', 'Investment Opportunity', 'Transaction Overview'],
      icon: Briefcase,
    },
    {
      title: 'Returns & Exit Analysis',
      desc: 'Return drivers, value-creation roadmap, scalability levers, and potential exit pathways aligned with sector dynamics and investor expectations.',
      features: ['Return Drivers', 'Value-Creation Roadmap', 'Scalability Levers', 'Exit Pathways'],
      icon: BarChart3,
    },
  ],

  caseStudies: [
    {
      client: 'Multi-Outlet Restaurant Brand',
      industry: 'Food & Beverage',
      service: 'Fundraising IM & Pitch Deck',
      challenge: 'A growing restaurant brand needed an investor-focused IM and Pitch Deck to support its capital raise and communicate a scalable expansion strategy across owned, leased, and franchised models.',
      solution: 'Reviewed business model, outlet formats, unit economics, and cost structure. Developed a full IM covering brand story, operating metrics, growth roadmap, and financial projections. Prepared an investment teaser for targeted investor outreach.',
      result: 'An investor-ready IM that clearly communicated the brand\'s scalable operating model and expansion-led growth strategy, enabling active investor engagement.',
    },
    {
      client: 'Private School — Capacity Expansion',
      industry: 'Education',
      service: 'Institutional Funding IM',
      challenge: 'A private school planning capacity expansion needed a structured IM for discussions with investors and strategic education partners, covering academics, governance, and financial sustainability.',
      solution: 'Reviewed academic framework, governance, compliance, enrolment trends, and cost drivers. Developed a structured IM covering institutional overview, infrastructure, and expansion plans with financial projections reflecting enrolment growth and operating leverage.',
      result: 'A well-structured IM positioning the school as a credible, scalable institution with a clear growth roadmap, supporting active funding discussions.',
    },
    {
      client: 'Cross-Sector Transaction Client',
      industry: 'M&A / Strategic Partnerships',
      service: 'Transaction IM & Deal Support',
      challenge: 'Companies engaging in M&A, minority or majority stake sales, or strategic partnerships require consistent, credible documentation to support structured investor conversations and reduce information asymmetry.',
      solution: 'End-to-end IM preparation covering competitive positioning, market analysis, operating metrics, financial projections, return considerations, and investment highlights — tailored to the specific transaction type and investor audience.',
      result: 'Investor-ready documentation that reduces information gaps, supports valuation expectations, and enables structured, outcome-driven discussions with investors and acquirers.',
    },
  ],

  faqs: [
    { q: 'When should a company prepare an Information Memorandum or Pitch Deck?', a: 'During fundraising, M&A, strategic partnerships, minority or majority stake sales, or any transaction involving external investors or acquirers.' },
    { q: 'What is the difference between an investment teaser and an IM?', a: 'An investment teaser is a concise, high-level summary (typically 2–3 pages) designed to generate initial interest. An IM provides a detailed, comprehensive view of the business, financials, and investment rationale — typically 30–50 pages.' },
    { q: 'What does an Information Memorandum typically include?', a: 'Company overview, business model, products or services, market analysis, competitive positioning, growth strategy, operating metrics, financial projections, management team, and return considerations.' },
    { q: 'How does an IM support investor discussions?', a: 'It ensures consistent communication, reduces information gaps, and enables structured discussions around growth, risk, and value creation — giving investors the confidence to move forward.' },
    { q: 'How long does IM preparation typically take?', a: 'IM preparation typically takes 3–5 weeks depending on information availability, business complexity, and the level of financial modelling required.' },
    { q: 'Do you provide support during the fundraising process?', a: 'Yes. We provide ongoing support during investor discussions, help refine materials based on feedback, and assist with due diligence responses throughout the process.' },
  ],

  ctaTitle: 'Ready to Raise Capital or Execute a Transaction?',
  ctaDescription: 'Partner with MARC to build clear, credible, and investor-ready Information Memorandums and Pitch Decks that articulate your business story and support confident investor engagement.',
}

export default function InformationMemorandumPage() {
  return <ServicePageTemplate {...pageData} />
}