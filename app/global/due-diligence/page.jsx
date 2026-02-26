'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Shield, Search, BarChart3, TrendingUp, FileText, Eye } from 'lucide-react'

const pageData = {
  tagline: 'Due Diligence & Quality of Earnings | US & Global',
  title: 'Due Diligence Services and',
  titleHighlight: 'Quality of Earnings Analysis',
  description: 'MARC provides Due Diligence Services and Quality of Earnings (QoE) Analysis for M&A and investment transactions across the US and global markets. Over the last five years, we have supported private equity firms, strategic acquirers, investors, and advisors in evaluating financial risk, validating earnings quality, and protecting transaction value. Our due diligence services go beyond reported numbers to assess the true sustainability, quality, and drivers of earnings—enabling confident decision-making across acquisitions, divestitures, and strategic investments.',

  heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',

  stats: [
    { value: '5+ Years', label: 'Supporting US Transactions' },
    { value: 'QoE', label: 'Quality of Earnings Focus' },
    { value: 'Buy & Sell', label: 'Both Sides of the Deal' },
    { value: 'SMB & Mid-Market', label: 'Acquisition Focus' },
  ],

  valueProps: [
    {
      icon: Search,
      title: 'Early Risk Identification',
      desc: 'Early identification of red flags and hidden risks before they impact deal pricing or post-close outcomes.',
    },
    {
      icon: BarChart3,
      title: 'Clear Earnings Visibility',
      desc: 'Clear visibility into sustainable earnings and cash flows—QoE analysis ensures reported EBITDA reflects true operating performance.',
    },
    {
      icon: Shield,
      title: 'Reduced Deal Uncertainty',
      desc: 'Reduced post-LOI surprises and renegotiations. Improved valuation accuracy and deal certainty.',
    },
    {
      icon: Eye,
      title: 'Enhanced Credibility',
      desc: 'Enhanced credibility with investors, buyers, and lenders through independent, structured financial evaluation.',
    },
  ],

  methodology: [
    {
      num: '01',
      title: 'Strategic Understanding',
      desc: 'Define transaction objectives, client priorities, industry dynamics, regulatory considerations, and key value drivers to establish a focused diligence roadmap.',
    },
    {
      num: '02',
      title: 'Preliminary Assessment',
      desc: 'Assess business model, customers, competitive landscape, and market dynamics to frame the diligence scope.',
    },
    {
      num: '03',
      title: 'Data Collection',
      desc: 'Collect financials, tax filings, bank statements, and debt agreements. Conduct preliminary review to identify gaps and inconsistencies.',
    },
    {
      num: '04',
      title: 'Financial Normalisation',
      desc: 'Adjustments for non-recurring and non-operational items to derive a clean, sustainable EBITDA baseline.',
    },
    {
      num: '05',
      title: 'Detailed Analysis',
      desc: 'Detailed analysis of liquidity, working capital, revenue quality, margins, KPIs, and GAAP compliance.',
    },
    {
      num: '06',
      title: 'Final Report',
      desc: 'Clear findings, adjustments, risks, and decision-ready conclusions to support valuation, deal negotiations, and structuring.',
    },
  ],
  methodologyTitle: 'Our Approach',
  methodologySubtitle: 'Structured Diligence for Live Transactions',
  methodologyDescription: 'Financial due diligence is an independent, structured evaluation of a company\'s financial, operational, and commercial information to confirm accuracy, identify risks, and assess overall business integrity prior to a transaction. The scope of due diligence varies based on transaction size, industry complexity, and risk profile. Effective diligence extends far beyond publicly available information.',

  servicesTitle: 'Our Due Diligence Services',
  services: [
    {
      title: 'Buy-Side Due Diligence',
      desc: 'Comprehensive financial and commercial diligence for acquirers and investors—focused on protecting deal value and informing transaction structuring.',
      features: [
        'Quality of Earnings (QoE) analysis',
        'Working capital and cash flow assessment',
        'Cash Proof analysis',
        'Commercial diligence support',
      ],
      icon: Search,
    },
    {
      title: 'Sell-Side Due Diligence',
      desc: 'Prepare sellers for investor scrutiny—normalise earnings, improve financial transparency, and reduce buyer diligence friction before process launch.',
      features: [
        'Vendor due diligence',
        'Earnings normalisation and SDE analysis',
        'Sell-side QoE preparation',
        'Cash proof readiness',
        'Quality of revenue analysis to support investor discussions',
      ],
      icon: FileText,
    },
    {
      title: 'Quality of Earnings (QoE) Report',
      desc: 'MARC prepares QoE reports to evaluate a company\'s true profitability and earnings sustainability. Our QoE analysis identifies non-recurring and one-time items, non-operational adjustments, EBITDA normalisation requirements, and reliance on core vs non-core business activities.',
      features: [
        'Non-recurring and one-time item identification',
        'Non-operational adjustments',
        'EBITDA normalisation',
        'Core vs non-core activity analysis',
      ],
      icon: BarChart3,
    },
    {
      title: 'SMB & Mid-Market Diligence',
      desc: 'Small and mid-sized business acquisitions often carry elevated diligence risk due to limited disclosures, informal systems, and founder-driven operations.',
      features: [
        'Identify hidden liabilities and contingent risks',
        'Assess durability and predictability of cash flows',
        'Evaluate earnings sustainability post-transaction',
        'Reduce post-LOI renegotiations and deal uncertainty',
      ],
      icon: Shield,
    },
  ],

  caseStudies: [
    {
      client: 'SaaS Company (California, USA)',
      industry: 'SaaS / Enterprise Software',
      service: 'Buy-Side Financial Due Diligence',
      challenge: 'A U.S.-based private equity firm engaged MARC to conduct buy-side financial due diligence for a mid-market SaaS acquisition. Scope: Quality of Earnings (QoE) analysis, revenue recognition review under U.S. GAAP, customer concentration and churn analysis, working capital assessment, and Cash Proof analysis.',
      solution: 'Key Findings: EBITDA included non-recurring revenues; high customer concentration increased revenue risk; deferred expenses required normalisation; Cash Proof analysis identified timing differences.',
      result: 'Normalized earnings supported valuation adjustments and informed deal structuring, including earn-outs and working capital targets.',
    },
    {
      client: 'Healthcare Services Provider (Texas, USA)',
      industry: 'Healthcare Services',
      service: 'Sell-Side Due Diligence',
      challenge: 'An investment banker engaged MARC to perform sell-side due diligence for a multi-location healthcare provider. Scope: Sell-side QoE report, earnings normalisation and SDE validation, payer mix and reimbursement analysis, working capital assessment, and Cash Proof analysis.',
      solution: 'Key Findings: EBITDA impacted by above-market owner compensation; one-time legal expenses required adjustment; cash discrepancies resolved through transaction tracing.',
      result: 'Improved financial transparency, reduced buyer diligence friction, and supported smoother valuation discussions.',
    },
  ],

  faqs: [
    {
      q: 'What do due diligence companies do?',
      a: 'Due diligence companies conduct independent reviews of financial, operational, and commercial data to help investors and buyers assess risk and make informed decisions.',
    },
    {
      q: 'What is included in financial due diligence services?',
      a: 'Financial due diligence typically includes QoE analysis, working capital and cash flow assessment, cash proof analysis, accounting policy review, and identification of valuation risks.',
    },
    {
      q: 'Why is a Quality of Earnings report important?',
      a: 'A QoE report ensures reported EBITDA reflects sustainable operating performance by adjusting for non-recurring and non-operational items.',
    },
    {
      q: 'Do you provide buy-side and sell-side due diligence?',
      a: 'Yes. MARC provides both buy-side and sell-side due diligence services across the USA and global markets.',
    },
  ],

  ctaTitle: 'Ready to Bring in Execution Support?',
  ctaDescription: 'Whether you need a QoE report, full financial due diligence, or support for a live deal, MARC delivers on your timelines—reliably and to US standards.',
}

export default function GlobalDueDiligencePage() {
  return <ServicePageTemplate {...pageData} />
}