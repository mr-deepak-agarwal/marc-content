'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { DollarSign, TrendingUp, BarChart3, FileText, Calculator, Award, Building2, Scale } from 'lucide-react'

const pageData = {
  tagline: 'Business Valuation Services | U.S. & Global Markets',
  title: 'Clear, Defensible Business Valuations for',
  titleHighlight: 'Transactions and Capital Raising',
  description: 'MARC provides independent business valuation services and transaction advisory support to companies, founders, and investors across the United States and global markets. Our valuations support mergers and acquisitions, capital raising, shareholder transactions, and strategic decision-making, delivering practical, market-aligned insights that withstand scrutiny from investors, boards, lenders, and M&A advisory firms.',
  
  stats: [
    { value: '150+', label: 'Valuations Completed' },
    { value: '$5B+', label: 'Transaction Value' },
    { value: '30+', label: 'Countries Served' },
    { value: '95%', label: 'Client Satisfaction' },
  ],
  
  valueProps: [
    { icon: Award, title: 'Market-Aligned Insights', desc: 'Practical valuations that withstand scrutiny from investors, boards, and M&A advisory firms.' },
    { icon: Calculator, title: 'Multiple Methodologies', desc: 'DCF, market multiples, and blended approaches following U.S. and global standards.' },
    { icon: TrendingUp, title: 'Transaction Support', desc: 'Structured to support real-world M&A discussions, due diligence, and capital raising decisions.' },
    { icon: Scale, title: 'Defensible Analysis', desc: 'Clear assumptions, normalization adjustments, and sensitivity analysis for confident decision-making.' },
  ],
  
  methodology: [
    { num: '01', title: 'Financial Analysis', desc: 'Analysis of historical financial performance, normalised earnings, and future cash flow potential.' },
    { num: '02', title: 'Competitive Positioning', desc: 'Evaluation of competitive positioning and key value drivers in the market context.' },
    { num: '03', title: 'DCF Valuation', desc: 'Discounted Cash Flow analysis estimating enterprise value by discounting expected future cash flows.' },
    { num: '04', title: 'Market Multiples', desc: 'Value determination using earnings multiples from comparable companies and precedent transactions.' },
    { num: '05', title: 'Weighted Average Approach', desc: 'Combining DCF and market-based methods with appropriate weightings for balanced valuation.' },
    { num: '06', title: 'Reporting & Support', desc: 'Deliver comprehensive valuation report and support during investor/buyer discussions.' },
  ],
  methodologyDescription: 'Business valuation plays a critical role when companies raise capital, acquire or divest businesses, restructure ownership, or engage with institutional investors and financing partners. A well-constructed valuation establishes clarity on enterprise value, strengthens negotiations, and improves transaction outcomes.',
  
  services: [
    {
      title: 'M&A Valuations',
      desc: 'Independent enterprise valuations supporting mergers, acquisitions, and divestitures.',
      features: ['Enterprise Valuation Report', 'Normalization Adjustments', 'Sensitivity Analysis', 'Investor-Ready Summaries'],
      icon: Building2,
    },
    {
      title: 'Fundraising Valuations',
      desc: 'Valuations for equity and debt fundraising with institutional investors.',
      features: ['Growth Company Valuations', 'Pre-Money/Post-Money Analysis', 'Cap Table Support', 'Investor Discussions'],
      icon: TrendingUp,
    },
    {
      title: 'Shareholder Transactions',
      desc: 'Valuations for shareholder entry, exit, and ownership restructuring.',
      features: ['Fair Value Assessments', 'Buy-Sell Agreements', 'Ownership Transitions', 'Partnership Valuations'],
      icon: Scale,
    },
    {
      title: 'Strategic Planning',
      desc: 'Valuation support for business restructuring and strategic decision-making.',
      features: ['Portfolio Valuation', 'Strategic Options Assessment', 'Asset-Based Analysis', 'Transaction Planning'],
      icon: FileText,
    },
  ],
  
  caseStudies: [
    {
      title: 'Healthcare Technology Valuation',
      client: 'U.S. Healthcare SaaS Company',
      desc: 'Enterprise valuation and Information Memorandum for capital raising, resulting in successful Series B funding round with robust, market-aligned valuation supporting effective investor engagement.',
      tags: ['Healthcare Tech', 'USA', 'Fundraising'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Cross-Border M&A Valuation',
      client: 'International Manufacturing Group',
      desc: 'Independent business valuation for cross-border acquisition supporting transaction structuring and investor due diligence.',
      tags: ['Manufacturing', 'Cross-Border', 'M&A'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Shareholder Buyout Valuation',
      client: 'Technology Services Firm',
      desc: 'Fair value assessment for shareholder exit transaction with comprehensive valuation analysis and negotiation support.',
      tags: ['Technology', 'Shareholder Transaction'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'When is a business valuation required?', a: 'Valuations are required for M&A transactions, fundraising, shareholder entry or exit, business restructuring, ownership changes, asset-backed financing, transaction support, and commercial disputes.' },
    { q: 'What information is needed for a valuation?', a: 'We need financial statements, projections, business plans, customer and product details, and relevant market and operational information to conduct a comprehensive valuation.' },
    { q: 'Which valuation method do you use?', a: 'The approach depends on the business and transaction context. Common methods include Discounted Cash Flow (DCF), market multiples from comparable companies, or a weighted average combination of both approaches.' },
    { q: 'What do you deliver in a valuation engagement?', a: 'We provide an independent enterprise valuation report with clearly articulated assumptions, detailed financial analysis including normalization adjustments and sensitivity analysis, valuation methodology assessment, and investor/board-ready summaries.' },
    { q: 'How does valuation support fundraising?', a: 'Valuation helps investors understand enterprise value, growth potential, risks, and expected returns, enabling more structured and credible fundraising discussions.' },
    { q: 'How long does a business valuation take?', a: 'Timelines vary based on complexity, data availability, and transaction requirements. Most valuation engagements are completed within two to three weeks.' },
    { q: 'Do you follow U.S. and global valuation standards?', a: 'Yes, our valuation assignments follow accepted U.S. and global standards and are structured to support real-world transaction discussions, due diligence reviews, and capital raising decisions.' },
  ],
  
  ctaTitle: 'Need a Defensible Business Valuation?',
  ctaDescription: 'Partner with MARC for business valuation services supporting U.S. and global transactions with defensible analysis, transaction insight, and investor-ready documentation.',
}

export default function ValuationPage() {
  return <ServicePageTemplate {...pageData} />
}
