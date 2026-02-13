'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, TrendingUp, Users, Target, BarChart3, Award, Presentation, Briefcase } from 'lucide-react'

const pageData = {
  tagline: 'Information Memorandum (IM) & Pitch Deck Services',
  title: 'Investor-Ready Documentation for',
  titleHighlight: 'Fundraising & Transactions',
  description: 'An Information Memorandum (IM) or Pitch Deck is a critical fundraising and transaction document that presents a business opportunity in a clear, structured, and investor-ready format. MARC helps companies prepare high-impact Information Memorandums and Pitch Decks that enable investors, strategic partners, and acquirers to quickly understand the business model, market opportunity, growth strategy, and investment rationale.',
  
  stats: [
    { value: '100+', label: 'IMs Prepared' },
    { value: '₹5,000Cr+', label: 'Capital Raised' },
    { value: '85%', label: 'Fundraising Success Rate' },
    { value: '50+', label: 'Strategic Transactions' },
  ],
  
  valueProps: [
    { icon: Target, title: 'Clear Positioning', desc: 'Position the company effectively, highlighting core value drivers and differentiation.' },
    { icon: TrendingUp, title: 'Investment Rationale', desc: 'Articulate compelling investment thesis aligned with investor expectations.' },
    { icon: BarChart3, title: 'Credible Financials', desc: 'Integration of operating metrics and financial projections for credibility.' },
    { icon: Award, title: 'Transaction Support', desc: 'Enable focused valuation discussions and structured investor conversations.' },
  ],
  
  methodology: [
    { num: '01', title: 'Strategic Understanding', desc: 'Review organizational structure, governance, operating model, and scalability potential.' },
    { num: '02', title: 'Market & Competitive Analysis', desc: 'Assess market size, growth trends, competitive positioning, and strategic differentiation.' },
    { num: '03', title: 'Value Proposition Development', desc: 'Clear articulation of products, services, customer base, and value proposition.' },
    { num: '04', title: 'IM & Pitch Deck Preparation', desc: 'Structured IM covering company overview, business plan, growth strategy, and investment highlights.' },
    { num: '05', title: 'Financial Integration', desc: 'Integration of operating metrics, financial projections, and returns analysis.' },
    { num: '06', title: 'Investor Readiness', desc: 'Prepare investment teasers and support targeted investor outreach and discussions.' },
  ],
  methodologyDescription: 'From a transaction perspective, an IM serves as a decision-support tool. It reduces information asymmetry, builds credibility, and ensures consistent communication with investors and buyers. A well-prepared IM helps clearly articulate the business model, highlight investment merits, support valuation expectations, and enable structured investor conversations.',
  
  services: [
    {
      title: 'Information Memorandum (IM)',
      desc: 'Comprehensive IM for fundraising, M&A, and strategic partnerships.',
      features: ['Company Overview', 'Business Plan & Growth Strategy', 'Financial Analysis & Projections', 'Investment Highlights'],
      icon: FileText,
    },
    {
      title: 'Investor Pitch Deck',
      desc: 'Compelling pitch deck presentations for investor meetings and roadshows.',
      features: ['Executive Summary', 'Market Opportunity', 'Business Model', 'Financial Highlights'],
      icon: Presentation,
    },
    {
      title: 'Investment Teaser',
      desc: 'Concise, high-level summaries for initial investor outreach.',
      features: ['Business Snapshot', 'Key Metrics', 'Investment Opportunity', 'Transaction Overview'],
      icon: Briefcase,
    },
    {
      title: 'Financial Modeling',
      desc: 'Detailed financial projections and valuation support.',
      features: ['Revenue Modeling', 'Expense Forecasting', 'Cash Flow Analysis', 'Returns Assessment'],
      icon: BarChart3,
    },
  ],
  
  caseStudies: [
    {
      title: 'Technology Company Fundraising',
      client: 'SaaS Platform',
      desc: 'Prepared comprehensive IM and pitch deck for Series A fundraising highlighting recurring revenue model, market opportunity, and scalability. Successfully raised target capital from tier-1 VCs.',
      tags: ['Technology', 'Fundraising', 'Series A'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Manufacturing M&A',
      client: 'Industrial Manufacturing Group',
      desc: 'Developed detailed IM for sell-side M&A transaction articulating operational strengths, market position, and growth potential resulting in successful acquisition by strategic buyer.',
      tags: ['Manufacturing', 'M&A', 'Sell-Side'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Healthcare Investment',
      client: 'Healthcare Services Provider',
      desc: 'Created investor-ready IM covering service model, regulatory landscape, and expansion strategy supporting successful PE investment round.',
      tags: ['Healthcare', 'Private Equity'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is an Information Memorandum (IM)?', a: 'An Information Memorandum is a comprehensive document that presents a business opportunity in a structured, investor-ready format. It serves as a decision-support tool for fundraising, M&A, and strategic partnerships by providing detailed information about the company, market, financials, and investment rationale.' },
    { q: 'What is the difference between an IM and a pitch deck?', a: 'An IM is a detailed, comprehensive document (typically 30-50 pages) providing in-depth information. A pitch deck is a concise presentation (typically 10-20 slides) used in investor meetings. Both serve different purposes in the fundraising process.' },
    { q: 'What is an investment teaser?', a: 'An investment teaser is a concise, high-level summary (typically 2-3 pages) designed to generate initial interest and support targeted investor outreach before sharing the detailed IM.' },
    { q: 'How does an IM support fundraising?', a: 'An IM helps clearly articulate the business model and growth story, highlight key investment merits and differentiation, support valuation expectations and deal discussions, and enable structured, outcome-driven investor conversations.' },
    { q: 'What information is included in an IM?', a: 'A comprehensive IM typically covers company overview and history, products/services and value proposition, market analysis and competitive landscape, business model and operations, financial performance and projections, management team and governance, growth strategy and opportunities, and investment highlights and terms.' },
    { q: 'How long does IM preparation take?', a: 'IM preparation typically takes 3-5 weeks depending on information availability, business complexity, and level of financial modeling required.' },
    { q: 'Do you provide ongoing support during fundraising?', a: 'Yes, we provide ongoing support during investor discussions, help refine materials based on feedback, and assist with due diligence responses.' },
  ],
  
  ctaTitle: 'Ready to Raise Capital or Execute a Transaction?',
  ctaDescription: 'Partner with MARC to prepare investor-ready documentation that positions your business effectively and enables successful fundraising and M&A outcomes.',
}

export default function InformationMemorandumPage() {
  return <ServicePageTemplate {...pageData} />
}
