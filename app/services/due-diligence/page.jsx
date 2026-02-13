'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Search, FileCheck, Shield, Eye, BarChart3, Building2, Scale, AlertTriangle, TrendingUp, Users } from 'lucide-react'

const pageData = {
  tagline: 'Due Diligence Services in India',
  title: 'Helping Investors Make Confident,',
  titleHighlight: 'Informed Decisions',
  description: 'MARC provides expert Due Diligence Services to investors, acquirers, and corporates across India. Our work helps clients validate financial and operational information, identify risks early, and make well-informed decisions across mergers, acquisitions, joint ventures, and strategic investments. Due diligence is a structured examination of financial statements and critical business records to assess accuracy, uncover risks, and evaluate the overall integrity and sustainability of a business. As a trusted due diligence firm, MARC supports clients in protecting deal value by validating assumptions and identifying issues before they impact pricing or execution.',

  stats: [
    { value: '200+', label: 'Due Diligence Projects' },
    { value: '₹20,000Cr+', label: 'Transaction Value' },
    { value: '50+', label: 'PE/VC Clients' },
    { value: '15+', label: 'Years Experience' },
  ],

  valueProps: [
    { icon: Search, title: 'Early Risk Identification', desc: 'Early identification of key red flags, normalised earnings, and transaction sensitivities.' },
    { icon: Shield, title: 'Effective Risk Mitigation', desc: 'Clear view of sustainable earnings with effective risk mitigation and downside protection.' },
    { icon: Eye, title: 'Stronger Negotiation Leverage', desc: 'Independent assessment providing stronger negotiation leverage and deal protection.' },
    { icon: Scale, title: 'True Business Performance', desc: 'Accurate reflection of true business performance beyond surface-level financial reviews.' },
  ],

  methodology: [
    { num: '01', title: 'Strategic Understanding', desc: 'Define transaction objectives and client priorities including sector dynamics, key value drivers, regulatory considerations, and deal structure to establish focused diligence roadmap.' },
    { num: '02', title: 'Scope Definition', desc: 'Establish scope based on transaction size, deal structure, and risk profile. Public information alone is insufficient to identify material risks.' },
    { num: '03', title: 'Historical Financial Review', desc: 'Review and audit of historical financial statements to assess accuracy and quality of earnings.' },
    { num: '04', title: 'Projections Validation', desc: 'Preparation and validation of forward-looking projections, consumer and market analysis.' },
    { num: '05', title: 'Risk Assessment', desc: 'Identification of operating inefficiencies, litigation review, regulatory considerations, and evaluation of third-party relationships.' },
    { num: '06', title: 'Reporting & Support', desc: 'Deliver actionable insights that directly support valuation, negotiations, and decision-making.' },
  ],
  methodologyDescription: 'For any transaction to succeed—whether an acquisition, merger, joint venture, or investment—a thorough due diligence process is essential. This involves a detailed review of financial, operational, legal, and commercial records to confirm facts, assess risks, and evaluate value drivers. MARC delivers comprehensive Due Diligence Services across India, supporting domestic and international investors and acquirers across sectors.',

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
      desc: 'Focus on quality of earnings, working capital, cash flows, liabilities, and accounting policies.',
      features: ['Quality of Earnings analysis', 'Working Capital assessment', 'Debt and liability analysis', 'Financial risk evaluation'],
      icon: TrendingUp,
    },
    {
      title: 'Commercial Due Diligence',
      desc: 'Assessment of market position, competitive dynamics, and growth potential.',
      features: ['Consumer and market analysis', 'Competitive positioning review', 'Growth drivers assessment', 'Regulatory compliance review'],
      icon: Users,
    },
  ],

  caseStudies: [
    {
      client: 'XYZ (Buyer)',
      industry: 'Industrial Manufacturing',
      service: 'Financial Due Diligence (Buy-Side)',
      challenge: 'XYZ (Buyer) engaged MARC to conduct financial due diligence on ABC Pvt. Ltd., a manufacturer of specialised industrial equipment, as part of a proposed acquisition. Objective: Assess the quality and sustainability of earnings and identify diligence adjustments to support valuation and transaction decisions.',
      solution: 'MARC reviewed historical financials, quality of earnings, tax and regulatory compliance, contracts, related-party transactions, debt and liabilities, and overall financial performance. Key Findings: Overstatement of export sales, misallocation of director remuneration inflating EBITDA, high-risk trade receivables, declining core product sales, MSME payment delays creating exposure, and raw material price volatility due to lack of long-term supplier contracts.',
      result: 'The buyer received a clear, normalised view of sustainable earnings, identification of hidden liabilities, and risk-adjusted valuation insights—strengthening negotiation leverage on pricing and deal structure.',
    },
    {
      client: 'XYZ Pvt. Ltd.',
      industry: 'Medical Services',
      service: 'Financial Due Diligence (Sell-Side)',
      challenge: 'XYZ Pvt. Ltd., a medical firm, engaged MARC to conduct sell-side due diligence in preparation for a potential transaction. Objective: Present a transparent and normalised view of earnings by assessing revenue sustainability, underlying profitability, and key risk areas.',
      solution: 'MARC reviewed historical financials, segregated sustainable and non-sustainable revenues, normalised EBITDA, analysed working capital and cash flows, and identified quantifiable and non-quantifiable adjustments. Key Findings: Non-sustainable revenue streams, elevated employee and G&A costs impacting margins, related-party transactions requiring transparency, weak internal controls, declining customer acquisition, and non-operating balances within working capital.',
      result: 'The sell-side diligence provided financial transparency, a credible EBITDA baseline, and early risk identification—allowing management to address issues upfront, support fair valuation, and enable a smoother transaction process.',
    },
    {
      client: 'Cross-Sector Transaction Clients',
      industry: 'Multiple Sectors',
      service: 'Comprehensive Due Diligence',
      challenge: 'Due diligence is essential when expanding products or services through acquisitions, entering new markets by acquiring an existing business, or increasing geographic reach through acquisition of similar businesses.',
      solution: 'Comprehensive due diligence process involving detailed review of historical financial statements, validation of forward-looking projections, consumer and market analysis, identification of operating inefficiencies, litigation review, assessment of regulatory considerations, and evaluation of third-party relationships.',
      result: 'Independent assessment of costs, benefits, assets, liabilities, and operating structure—supporting informed decision-making and successful transaction outcomes.',
    },
  ],

  faqs: [
    { q: 'What do due diligence firms do?', a: 'They conduct independent reviews of financial and operational information to help investors assess risks and make informed transaction decisions.' },
    { q: 'Why are due diligence services important in India?', a: 'India\'s regulatory complexity and market diversity make due diligence critical for identifying hidden liabilities and validating growth assumptions.' },
    { q: 'What are financial due diligence services?', a: 'They focus on quality of earnings, working capital, cash flows, liabilities, accounting policies, and financial risks to support accurate valuation.' },
    { q: 'Do you offer sell-side due diligence?', a: 'Yes. MARC provides sell-side due diligence and agreed-upon procedures to prepare companies for fundraising, M&A, and strategic exits.' },
    { q: 'Why is due diligence especially important for private company acquisitions?', a: 'In private company transactions, due diligence is especially critical due to limited public disclosures and higher dependence on management-reported information. Our diligence goes beyond surface-level review to uncover hidden risks, assess earnings quality, and evaluate long-term sustainability.' },
    { q: 'When is due diligence most critical?', a: 'Due diligence is essential when expanding products or services through acquisitions, entering new markets by acquiring an existing business, or increasing geographic reach through acquisition of similar businesses.' },
    { q: 'What scope does your due diligence cover?', a: 'Our due diligence covers review of historical financial statements, validation of forward-looking projections, consumer and market analysis, identification of operating inefficiencies, review of potential litigation, assessment of regulatory considerations, and evaluation of third-party relationships.' },
  ],

  ctaTitle: 'Partner with MARC, a trusted due diligence firm in India',
  ctaDescription: 'Protect value, reduce risk, and execute transactions with confidence through comprehensive due diligence services.',
}

export default function DueDiligencePage() {
  return <ServicePageTemplate {...pageData} />
}