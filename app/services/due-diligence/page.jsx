'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Search, FileCheck, Shield, Eye, BarChart3, Building2, Scale, AlertTriangle, TrendingUp, Users } from 'lucide-react'

const pageData = {
  tagline: 'Due Diligence Services in India',
  title: 'Helping Investors Make Confident,',
  titleHighlight: 'Informed Decisions',
  description: 'MARC provides expert Due Diligence Services to investors, acquirers, and corporates across India. Our work helps clients validate financial and operational information, identify risks early, and make well-informed decisions across mergers, acquisitions, joint ventures, and strategic investments.',
  
  stats: [
    { value: '200+', label: 'Due Diligence Projects' },
    { value: '₹20,000Cr+', label: 'Transaction Value' },
    { value: '50+', label: 'PE/VC Clients' },
    { value: '15+', label: 'Years Experience' },
  ],
  
  valueProps: [
    { icon: Search, title: 'Rigorous Analysis', desc: 'Due diligence that goes beyond surface-level review to uncover hidden risks and assess earnings quality.' },
    { icon: Shield, title: 'Risk Identification', desc: 'Early identification of red flags, sustainability of earnings, and transaction sensitivities.' },
    { icon: Eye, title: 'India Expertise', desc: 'Deep understanding of private company challenges and India market-specific considerations.' },
    { icon: Scale, title: 'Deal Protection', desc: 'Protecting deal value by validating assumptions and identifying issues before they impact pricing.' },
  ],
  
  methodology: [
    { num: '01', title: 'Strategic Understanding', desc: 'Define transaction objectives, sector dynamics, value drivers, regulatory considerations, and deal structure.' },
    { num: '02', title: 'Scope Definition', desc: 'Establish focused diligence roadmap based on transaction size, deal structure, and risk profile.' },
    { num: '03', title: 'Data Collection & Analysis', desc: 'Review historical financials, validate projections, and assess business records comprehensively.' },
    { num: '04', title: 'Financial & Commercial Review', desc: 'Deep-dive into quality of earnings, working capital, market analysis, and operational efficiency.' },
    { num: '05', title: 'Risk Assessment', desc: 'Identify operating inefficiencies, litigation risks, regulatory considerations, and third-party dependencies.' },
    { num: '06', title: 'Reporting & Support', desc: 'Deliver actionable insights supporting valuation, negotiations, and decision-making.' },
  ],
  methodologyDescription: 'Due diligence is a structured examination of financial statements and critical business records to assess accuracy, uncover risks, and evaluate the overall integrity and sustainability of a business. MARC supports clients in protecting deal value through rigorous, insight-driven analysis.',
  
  services: [
    {
      title: 'Buyer-Side Due Diligence',
      desc: 'Comprehensive support for acquirers throughout the acquisition process.',
      features: ['Target screening aligned with acquisition criteria', 'Financial modelling and valuation support', 'Cash proof and working capital assessment', 'Commercial and operational diligence', 'Coordination of diligence streams and negotiations'],
      icon: BarChart3,
    },
    {
      title: 'Sell-Side Due Diligence',
      desc: 'Prepare sellers for investor scrutiny and optimize transaction readiness.',
      features: ['Business positioning for investors', 'Preparation of teasers and pitch decks', 'Vendor due diligence and earnings normalisation', 'Management readiness support', 'Data room management and execution support'],
      icon: Building2,
    },
    {
      title: 'Financial Due Diligence',
      desc: 'Comprehensive analysis of financial statements, accounting policies, and earnings quality.',
      features: ['Quality of Earnings analysis', 'Working Capital assessment', 'Debt and liability analysis', 'Historical financials review'],
      icon: TrendingUp,
    },
    {
      title: 'Commercial Due Diligence',
      desc: 'Assessment of market position, competitive dynamics, and growth potential.',
      features: ['Consumer and market analysis', 'Competitive positioning review', 'Growth drivers assessment', 'Customer and supplier dependencies'],
      icon: Users,
    },
  ],
  
  caseStudies: [
    {
      title: 'PE Acquisition Due Diligence',
      client: 'Private Equity Fund',
      desc: 'Comprehensive financial and commercial due diligence for ₹500Cr manufacturing acquisition uncovering key risk factors and enabling informed investment decision.',
      tags: ['Private Equity', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Strategic Acquisition Review',
      client: 'Industrial Conglomerate',
      desc: 'Due diligence support for strategic acquisition in adjacent business segment with focus on operational synergies and integration planning.',
      tags: ['Strategic M&A', 'Industrial'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Cross-border Transaction',
      client: 'International Investor',
      desc: 'Comprehensive due diligence for international investor entering Indian market through acquisition, addressing regulatory and operational complexities.',
      tags: ['Cross-border', 'FDI'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is due diligence and why is it important?', a: 'Due diligence is a structured examination of financial statements and critical business records to assess accuracy, uncover risks, and evaluate the integrity and sustainability of a business. It is essential for protecting deal value and making informed investment decisions.' },
    { q: 'When is due diligence most critical?', a: 'Due diligence is essential when expanding products or services through acquisitions, entering new markets by acquiring an existing business, or increasing geographic reach through acquisition of similar businesses.' },
    { q: 'Why is due diligence especially important for private company acquisitions?', a: 'In private company transactions, due diligence is especially critical due to limited public disclosures and higher dependence on management-reported information. Our diligence goes beyond surface-level review to uncover hidden risks, assess earnings quality, and evaluate long-term sustainability.' },
    { q: 'What is the difference between buyer-side and sell-side due diligence?', a: 'Buyer-side due diligence helps acquirers validate assumptions, assess risks, and make informed decisions. Sell-side due diligence helps sellers prepare for investor scrutiny, position the business effectively, and optimize transaction readiness through vendor due diligence and earnings normalization.' },
    { q: 'What scope does your due diligence cover?', a: 'Our due diligence covers review of historical financial statements, validation of forward-looking projections, consumer and market analysis, identification of operating inefficiencies, review of potential litigation, assessment of regulatory considerations, and evaluation of third-party relationships.' },
    { q: 'How long does due diligence take?', a: 'Timeline depends on deal complexity and transaction size. The scope is defined based on deal structure, risk profile, and specific focus areas. We work closely with clients to establish appropriate timelines.' },
    { q: 'Do you support post-deal activities?', a: 'Yes, we can support post-deal integration planning, transition management, and ongoing advisory as needed to ensure successful transaction outcomes.' },
  ],
  
  ctaTitle: 'Planning an Acquisition or Investment?',
  ctaDescription: 'Partner with MARC for due diligence that protects your investment and enables confident, informed decision-making across India.',
}

export default function DueDiligencePage() {
  return <ServicePageTemplate {...pageData} />
}
