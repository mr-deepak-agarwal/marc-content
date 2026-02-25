'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Scale, TrendingUp, Users, Shield, FileText } from 'lucide-react'

const pageData = {
  tagline: 'Business Valuation | U.S. & Global Markets',
  title: 'Clear, Defensible Business Valuations',
  titleHighlight: 'for Transactions & Capital Raising',
  description: 'MARC provides independent business valuation services and transaction advisory support to companies, founders, and investors across the United States and global markets. Our valuations support mergers and acquisitions, capital raising, shareholder transactions, and strategic decision-making, delivering practical, market-aligned insights that withstand scrutiny from investors, boards, lenders, and M&A advisory firms.',

  heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',

  stats: [
    { value: 'DCF', label: 'Discounted Cash Flow' },
    { value: 'Multiples', label: 'Market & Transaction' },
    { value: 'Blended', label: 'Weighted Average Approach' },
    { value: '2–3 Weeks', label: 'Typical Turnaround' },
  ],

  valueProps: [
    {
      icon: Scale,
      title: 'Establishes Clear Enterprise Value',
      desc: 'Establishes a clear and defensible view of enterprise value to support transaction discussions and capital raising decisions.',
    },
    {
      icon: TrendingUp,
      title: 'Strengthens Investor Positioning',
      desc: 'Strengthens positioning in investor and buyer discussions and builds confidence with boards, institutional investors, and financing partners.',
    },
    {
      icon: Shield,
      title: 'Identifies Key Value Drivers & Risks',
      desc: 'Identifies key value drivers and underlying risks, supporting capital planning and strategic decision-making.',
    },
    {
      icon: FileText,
      title: 'Investor & Board-Ready Output',
      desc: 'Investor and board-ready valuation summaries for discussions and presentations, plus support during investor, buyer, or lender due diligence.',
    },
  ],

  methodology: [
    {
      num: '01',
      title: 'Historical Financial Analysis',
      desc: 'Analysis of historical financial performance, normalised earnings, and key operating drivers to establish a credible earnings baseline.',
    },
    {
      num: '02',
      title: 'Discounted Cash Flow (DCF)',
      desc: 'Estimates enterprise value by discounting expected future cash flows to present value, incorporating business-specific risk, growth expectations, and capital structure.',
    },
    {
      num: '03',
      title: 'Market Multiples',
      desc: 'Determines value using earnings multiples derived from comparable companies and precedent transactions within relevant industries and geographies.',
    },
    {
      num: '04',
      title: 'Weighted Average Approach',
      desc: 'Combines values derived from DCF and market-based methods using appropriate weightings to arrive at a balanced and defensible enterprise valuation.',
    },
    {
      num: '05',
      title: 'Sensitivity Analysis',
      desc: 'Detailed financial analysis including normalization adjustments and sensitivity analysis to stress-test the valuation range across scenarios.',
    },
    {
      num: '06',
      title: 'Investor-Ready Reporting',
      desc: 'Independent enterprise valuation report with clearly articulated assumptions, plus investor and board-ready summaries for discussions and presentations.',
    },
  ],
  methodologyTitle: 'Our Approach',
  methodologySubtitle: 'U.S. and Global Valuation Standards',
  methodologyDescription: 'Business valuation plays a critical role when companies raise capital, acquire or divest businesses, restructure ownership, or engage with institutional investors and financing partners. At MARC, our valuation assignments follow accepted U.S. and global standards and are structured to support real-world transaction discussions, due diligence reviews, and capital raising decisions—not just compliance requirements.',

  servicesTitle: 'When Do You Need Business Valuation',
  services: [
    {
      title: 'Mergers, Acquisitions & Divestitures',
      desc: 'Independent enterprise valuation to support M&A transactions, informing pricing, negotiations, and deal structuring.',
      features: ['Buy-side and sell-side support', 'Enterprise value assessment', 'Deal structuring inputs'],
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
      desc: 'Support for entry or exit of shareholders and strategic partners requiring an independent and defensible view of value.',
      features: ['Entry / exit valuations', 'Ownership restructuring support', 'Board-ready summaries'],
      icon: Users,
    },
    {
      title: 'Restructuring, Financing & Disputes',
      desc: 'Business restructuring and ownership changes, asset-backed or structured financing, and transaction support for commercial disputes.',
      features: ['Business restructuring', 'Asset-backed financing', 'Commercial dispute support'],
      icon: Shield,
    },
  ],

  caseStudies: [
    {
      client: 'Healthcare Technology Company (USA)',
      industry: 'Healthcare SaaS',
      service: 'Business Valuation & Information Memorandum',
      challenge: 'A U.S.-based healthcare technology company engaged MARC to support capital raising and strategic growth initiatives. The company provided software-enabled solutions to hospitals and outpatient providers, generating recurring subscription and transaction-based revenues. Objectives: establish enterprise valuation by assessing financial performance, scalability, and market opportunity; prepare an investor-focused Information Memorandum highlighting the business model, technology platform, regulatory environment, and growth strategy.',
      solution: 'Reviewed historical financials, analysing revenue mix, customer concentration, churn metrics, and operating leverage. Developed forward-looking financial projections incorporating customer growth, pricing expansion, margin improvement, and platform scalability. Conducted valuation using DCF, supported by benchmarking against comparable U.S. and global healthcare technology companies and recent transactions. Assessed key value drivers including recurring revenue visibility, regulatory readiness, platform scalability, and customer acquisition efficiency. Performed sensitivity analysis on reimbursement risk, implementation timelines, and customer retention.',
      result: 'A robust, market-aligned valuation and a well-structured Information Memorandum. The company was positioned as a scalable healthcare technology platform with strong recurring revenues, regulatory readiness, and a clearly articulated growth strategy, supporting effective investor engagement.',
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
      a: 'The approach depends on the business and transaction context. Common methods include DCF, market multiples, or a combination of both.',
    },
    {
      q: 'How does valuation support fundraising?',
      a: 'Valuation helps investors understand enterprise value, growth potential, risks, and expected returns, enabling more structured and credible discussions.',
    },
    {
      q: 'How long does a business valuation typically take?',
      a: 'Timelines vary based on complexity, data availability, and transaction requirements. Most valuation engagements are completed within two to three weeks.',
    },
  ],

  ctaTitle: 'Partner with a Trusted Business Valuation Firm',
  ctaDescription: 'Partner with MARC, a trusted provider of business valuation services, supporting U.S. and global transactions with defensible valuation analysis, transaction insight, and investor-ready documentation. Speak with our valuation team to discuss your transaction, fundraising, or strategic requirements.',
}

export default function GlobalValuationPage() {
  return <ServicePageTemplate {...pageData} />
}