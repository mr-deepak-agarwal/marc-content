'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, TrendingUp, Target, BarChart3, Briefcase, Layers, ShieldCheck, DollarSign, Calculator, Award, Building2, Scale } from 'lucide-react'

const pageData = {
  tagline: 'Business Valuation Services in India',
  title: 'Determining the true value of a business—',
  titleHighlight: 'backed by data, insight, and judgment.',
  description: 'MARC is among the leading business valuation firms in India, providing accurate, defensible valuations for mergers & acquisitions, fundraising, and strategic transactions. We support both buy-side and sell-side clients, helping them achieve fair valuation and stronger transaction outcomes. Our valuations are grounded in rigorous financial analysis, deep sector understanding, and a holistic view of value creation.',

  stats: [
    { value: '150+', label: 'Valuations Completed' },
    { value: '₹5,000Cr+', label: 'Transaction Value' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Sectors Covered' },
  ],

  valueProps: [
    { icon: Award, title: 'Clear Understanding', desc: 'Clear understanding of business value before negotiations and strategic decisions.' },
    { icon: ShieldCheck, title: 'Risk Identification', desc: 'Early identification of risks that may erode value and impact transaction outcomes.' },
    { icon: TrendingUp, title: 'Strategic Planning Support', desc: 'Input for strategic planning, performance evaluation, and capital allocation decisions.' },
    { icon: Calculator, title: 'Transaction Pricing', desc: 'Support for pricing decisions in purchase or sale transactions with defensible analysis.' },
  ],

  methodology: [
    { num: '01', title: 'Financial Analysis', desc: 'Analysis of historical performance and development of forward-looking projections based on unit economics, scalability, and operating leverage.' },
    { num: '02', title: 'Value Driver Assessment', desc: 'Assessment of financial performance, growth potential, management quality, market positioning, and intangible value drivers.' },
    { num: '03', title: 'DCF Valuation', desc: 'Discounted Cash Flow valuation estimating enterprise value by discounting expected future cash flows to present value, supported by sensitivity analysis.' },
    { num: '04', title: 'Earnings Multiple Valuation', desc: 'Value determination using earnings multiples derived from comparable companies and precedent transactions.' },
    { num: '05', title: 'Weighted Average Approach', desc: 'Combining DCF and earnings multiple outcomes to arrive at a balanced, market-aligned valuation.' },
    { num: '06', title: 'Reporting & Support', desc: 'Deliver comprehensive valuation report and support during investor/buyer discussions and negotiations.' },
  ],
  methodologyDescription: 'Business valuation is critical when a company is planning a merger or acquisition, raising equity or debt capital, bringing in strategic partners or shareholders, or restructuring or exiting part or all of the business. A robust valuation enables promoters, investors, and stakeholders to make informed, confident decisions backed by clear financial and strategic insight.',

  services: [
    {
      title: 'M&A Valuations',
      desc: 'Full or partial business valuation for mergers, acquisitions, and strategic alliances.',
      features: ['Buy-Side Valuations', 'Sell-Side Valuations', 'Strategic Alliance Valuations', 'Transaction Support'],
      icon: Building2,
    },
    {
      title: 'Fundraising Valuations',
      desc: 'Valuations supporting equity and debt capital raising for growth and expansion.',
      features: ['Equity Fundraising', 'Debt Capital Raising', 'Investor Entry Valuations', 'Cap Table Support'],
      icon: TrendingUp,
    },
    {
      title: 'Restructuring Valuations',
      desc: 'Valuations for business restructuring, reorganisation, and ownership changes.',
      features: ['Restructuring Support', 'Reorganisation Valuations', 'Shareholder Entry/Exit', 'Partnership Valuations'],
      icon: Layers,
    },
    {
      title: 'Financing & Dispute Valuations',
      desc: 'Valuations for asset-backed lending, fairness assessments, and contractual requirements.',
      features: ['Asset-Backed Lending', 'Fairness Opinions', 'Dispute Resolution', 'Contractual Valuations'],
      icon: Scale,
    },
  ],

  caseStudies: [
    {
      client: 'Fintech Company',
      industry: 'Financial Technology',
      service: 'Fundraising Valuation',
      challenge: 'A fintech company engaged MARC to support its growth and fundraising through a comprehensive business valuation.',
      solution: 'Analysed historical performance and developed forward-looking projections based on unit economics, scalability, and operating leverage. Conducted DCF valuation supported by earnings multiple benchmarking against fintech peers. Evaluated key value drivers, regulatory factors, and investor return scenarios through sensitivity analysis. Integrated valuation insights into the Information Memorandum for investor discussions.',
      result: 'A defensible, investor-ready valuation that supported fundraising and strategic engagement.',
    },
    {
      client: 'Apparel Company',
      industry: 'Fashion & Retail',
      service: 'Expansion & Fundraising Valuation',
      challenge: 'An apparel company engaged MARC to support expansion and fundraising plans.',
      solution: 'Normalised earnings to reflect sustainable operating performance. Built projections considering capacity expansion, channel mix (DTC, retail, wholesale), and margin improvement. Conducted DCF and market multiple valuation benchmarking. Evaluated brand strength, sourcing efficiency, working capital management, and risk factors.',
      result: 'A credible, market-aligned valuation that supported capital raising and strategic discussions.',
    },
    {
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      service: 'M&A Valuation',
      challenge: 'Companies engaging in M&A transactions require consistent, credible valuations to support structured negotiations and reduce information asymmetry.',
      solution: 'End-to-end valuation covering financial analysis, competitive positioning, market benchmarking, operating metrics, and sensitivity analysis—tailored to the specific transaction type and stakeholder requirements.',
      result: 'Transaction-ready valuation that reduces information gaps, supports negotiation positions, and enables structured, outcome-driven discussions.',
    },
  ],

  faqs: [
    { q: 'When do businesses need a valuation?', a: 'For M&A, fundraising, investor entry or exit, restructuring, disputes, and financing decisions.' },
    { q: 'What information is required for a valuation?', a: 'Financial statements, projections, business plans, customer and product details, and market data.' },
    { q: 'Which valuation method is used?', a: 'The method depends on the business and transaction. Common approaches include DCF, earnings multiples, or a combination.' },
    { q: 'How does valuation help in fundraising?', a: 'It helps investors assess value, growth potential, risks, and expected returns—making discussions structured and credible.' },
    { q: 'What do you deliver in a valuation engagement?', a: 'We provide an independent enterprise valuation report with clearly articulated assumptions, detailed financial analysis, valuation methodology assessment, and investor/stakeholder-ready summaries.' },
    { q: 'How long does a business valuation take?', a: 'Timelines vary based on complexity, data availability, and transaction requirements. Most valuation engagements are completed within two to three weeks.' },
    { q: 'Do you follow established valuation standards?', a: 'Yes, all valuations are conducted by experienced professionals in line with established valuation standards.' },
  ],

  ctaTitle: 'Trusted Business Valuation Firm in India',
  ctaDescription: 'Partner with MARC, one of the best business valuation firms in India, to unlock your company\'s true value and support confident decision-making across fundraising, M&A, and strategic transactions.',
}

export default function ValuationPage() {
  return <ServicePageTemplate {...pageData} />
}