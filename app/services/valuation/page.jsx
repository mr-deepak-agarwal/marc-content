'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { BarChart3, TrendingUp, Scale, Building2, Target, Users, PieChart, DollarSign } from 'lucide-react'

const pageData = {
  // ✅ KEYWORD: "Business Valuation Services in India"
  tagline: 'Business Valuation Services in India',
  title: 'Determining the True Value of',
  titleHighlight: 'Your Business',
  // ✅ KEYWORD: "business valuation firms in India"
  description: 'MARC is among the leading business valuation firms in India, providing accurate, defensible valuations for mergers & acquisitions, fundraising, and strategic transactions. We support both buy-side and sell-side clients, helping them achieve fair valuation and stronger transaction outcomes. Our valuations are grounded in rigorous financial analysis, deep sector understanding, and a holistic view of value creation.',

  stats: [
    { value: '150+', label: 'Valuations Completed' },
    { value: '₹15,000Cr+', label: 'Transaction Value' },
    { value: '50+', label: 'PE/VC Clients' },
    { value: '15+', label: 'Years Experience' },
  ],

  valueProps: [
    { icon: Scale, title: 'Defensible Valuations', desc: 'Rigorous, data-backed valuations that hold up to investor and regulatory scrutiny.' },
    { icon: Target, title: 'Transaction-Ready', desc: 'Valuation outputs structured to directly support negotiations, fundraising, and deal execution.' },
    { icon: TrendingUp, title: 'Growth Potential Assessed', desc: 'We assess financial performance, growth potential, management quality, and intangible value drivers.' },
    { icon: BarChart3, title: 'Sector-Informed', desc: 'Deep sector understanding enabling realistic, market-aligned valuations across industries.' },
  ],

  methodology: [
    { num: '01', title: 'Strategic Understanding', desc: 'Understand transaction objectives, business model, sector dynamics, and key value drivers to frame the valuation scope.' },
    { num: '02', title: 'Financial Analysis', desc: 'Review and normalise historical financials to reflect sustainable operating performance, stripping out one-offs and distortions.' },
    { num: '03', title: 'Projections Development', desc: 'Build forward-looking projections based on unit economics, capacity, channel mix, and operating leverage assumptions.' },
    { num: '04', title: 'DCF Valuation', desc: 'Estimate enterprise value by discounting expected future cash flows to present value, supported by sensitivity analysis.' },
    { num: '05', title: 'Earnings Multiple Benchmarking', desc: 'Determine value using earnings multiples derived from comparable companies and precedent transactions.' },
    { num: '06', title: 'Weighted Valuation & Reporting', desc: 'Combine DCF and earnings multiple outcomes into a balanced, market-aligned valuation with investor-ready outputs.' },
  ],
  // ✅ KEYWORD: "Business Valuation Services"
  methodologyDescription: 'Our Business Valuation Services cover the full spectrum of valuation needs — from M&A and fundraising to restructuring and dispute resolution. All valuations are conducted by experienced professionals in line with established valuation standards.',

  // ✅ KEYWORD: "Our Business Valuation Services"
  servicesTitle: 'Our Business Valuation Services',

  services: [
    {
      title: 'M&A & Strategic Transaction Valuation',
      desc: 'Valuation for mergers, acquisitions, and strategic alliances — supporting both buyers and sellers with accurate, defensible pricing.',
      features: ['Buy-Side Valuation', 'Sell-Side Valuation', 'Strategic Alliance Pricing', 'Fairness Assessment'],
      icon: Building2,
    },
    {
      title: 'Fundraising Valuation',
      desc: 'Investor-ready valuations for equity and debt fundraising, structured to support credible investor discussions and capital raising.',
      features: ['Equity Fundraising', 'Debt & Asset-Backed Financing', 'Information Memorandum Support', 'Investor Return Scenarios'],
      icon: DollarSign,
    },
    {
      title: 'Restructuring & Reorganisation Valuation',
      desc: 'Valuations to support business restructuring, reorganisation, and exit planning — including partial and full business assessments.',
      features: ['Full Business Valuation', 'Partial Stake Valuation', 'Exit Planning Support', 'Reorganisation Advisory'],
      icon: PieChart,
    },
    {
      title: 'Strategic Partner & JV Valuation',
      desc: 'Valuations for introducing strategic investors, joint-venture partners, or new shareholders — ensuring fair and transparent deal terms.',
      features: ['JV Partner Valuation', 'Shareholder Entry Pricing', 'Contractual Valuations', 'Dispute-Related Assessments'],
      icon: Users,
    },
  ],

  caseStudies: [
    {
      client: 'Fintech Company',
      industry: 'Fintech',
      service: 'Fundraising Valuation',
      challenge: 'A fintech company engaged MARC to support its growth and fundraising through a comprehensive business valuation, requiring a defensible, investor-ready output for strategic engagement.',
      solution: 'Analysed historical performance and developed forward-looking projections based on unit economics, scalability, and operating leverage. Conducted DCF valuation supported by earnings multiple benchmarking against fintech peers. Evaluated key value drivers, regulatory factors, and investor return scenarios through sensitivity analysis. Integrated valuation insights into the Information Memorandum for investor discussions.',
      result: 'A defensible, investor-ready valuation that supported fundraising and strategic engagement with prospective investors.',
    },
    {
      client: 'Apparel Company',
      industry: 'Apparel & Retail',
      service: 'Expansion & Fundraising Valuation',
      challenge: 'An apparel company engaged MARC to support expansion and fundraising plans, requiring a credible valuation that reflected sustainable performance and growth potential across multiple sales channels.',
      solution: 'Normalised earnings to reflect sustainable operating performance. Built projections considering capacity expansion, channel mix (DTC, retail, wholesale), and margin improvement. Conducted DCF and market multiple valuation benchmarking. Evaluated brand strength, sourcing efficiency, working capital management, and risk factors.',
      result: 'A credible, market-aligned valuation that supported capital raising and strategic discussions with investors and partners.',
    },
    {
      client: 'Cross-Sector Transaction Clients',
      industry: 'Multiple Sectors',
      service: 'M&A & Strategic Valuation',
      challenge: 'Business valuation is critical when companies plan a merger or acquisition, raise equity or debt capital, bring in strategic partners or shareholders, or restructure and exit part or all of the business.',
      solution: 'Comprehensive valuation combining financial performance analysis, growth potential assessment, management quality review, market positioning evaluation, and intangible value driver identification — using DCF, earnings multiples, and weighted average methodologies.',
      result: 'Informed, confident decisions backed by clear financial and strategic insight — enabling promoters, investors, and stakeholders to negotiate and transact with conviction.',
    },
  ],

  faqs: [
    { q: 'When do businesses need a valuation?', a: 'For M&A, fundraising, investor entry or exit, restructuring, disputes, and financing decisions.' },
    { q: 'What information is required for a valuation?', a: 'Financial statements, projections, business plans, customer and product details, and market data.' },
    { q: 'Which valuation method is used?', a: 'The method depends on the business and transaction. Common approaches include DCF, earnings multiples, or a weighted combination of both.' },
    { q: 'How does valuation help in fundraising?', a: 'It helps investors assess value, growth potential, risks, and expected returns — making discussions structured and credible.' },
    { q: 'Why is business valuation important before M&A?', a: 'A robust valuation enables promoters, investors, and stakeholders to make informed, confident decisions backed by clear financial and strategic insight — protecting against mispricing and negotiation risk.' },
    { q: 'What are the benefits of a professional business valuation?', a: 'Clear understanding of business value before negotiations, early identification of risks that may erode value, support for pricing decisions, better capital allocation, and critical input for return expectations and earnings optimisation.' },
    { q: 'Do you support both buy-side and sell-side clients?', a: 'Yes. MARC supports both buy-side and sell-side clients — helping buyers validate target value and helping sellers present a credible, investor-ready valuation.' },
  ],

  // ✅ KEYWORD: "Business Valuation Firm in India" | "best business valuation firms in India"
  ctaTitle: 'Partner with a Trusted Business Valuation Firm in India',
  ctaDescription: 'MARC is one of the best business valuation firms in India — helping you unlock your company\'s true value and support confident decision-making across fundraising, M&A, and strategic transactions.',
}

export default function BusinessValuationPage() {
  return <ServicePageTemplate {...pageData} />
}