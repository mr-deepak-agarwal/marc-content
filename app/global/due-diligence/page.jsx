'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Shield, Search, BarChart3, TrendingUp, FileText, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react'

const pageData = {
  tagline: 'Due Diligence & Quality of Earnings | US & Global',
  title: 'Due Diligence Services and',
  titleHighlight: 'Quality of Earnings Analysis',
  description: 'MARC provides Due Diligence Services and Quality of Earnings (QoE) Analysis for M&A and investment transactions across the US and global markets. Over the last five years, we have supported private equity firms, strategic acquirers, investors, and advisors in evaluating financial risk, validating earnings quality, and protecting transaction value. Our due diligence services go beyond reported numbers to assess the true sustainability, quality, and drivers of earnings—enabling confident decision-making across acquisitions, divestitures, and strategic investments.',

  heroImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',

  stats: [
    { value: '5+ Years', label: 'Supporting US Transactions' },
    { value: 'QoE', label: 'Quality of Earnings Focus' },
    { value: 'Buy & Sell', label: 'Both Sides of the Deal' },
    { value: '100%', label: 'White-Label Delivery' },
  ],

  valueProps: [
    {
      icon: Search,
      title: 'Early Risk Identification',
      desc: 'Identify hidden liabilities, contingent risks, and financial red flags before they impact deal pricing or post-close outcomes.',
    },
    {
      icon: BarChart3,
      title: 'True Earnings Clarity',
      desc: 'QoE analysis ensures reported EBITDA reflects sustainable operating performance—adjusted for non-recurring and non-operational items.',
    },
    {
      icon: Shield,
      title: 'Reduced Deal Uncertainty',
      desc: 'Fewer post-LOI renegotiations, fewer surprises after close. Our diligence gives buyers and sellers a credible, shared view of the business.',
    },
    {
      icon: Eye,
      title: 'You Stay Client-Facing',
      desc: 'We operate as your execution team. You manage the relationship. We handle the grind—on timelines that match your deal cycle.',
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
      title: 'Data Collection & Preliminary Review',
      desc: 'Collect financials, tax filings, bank statements, and debt agreements. Conduct preliminary review to identify gaps, inconsistencies, and areas requiring deeper investigation.',
    },
    {
      num: '03',
      title: 'Financial Normalisation',
      desc: 'Adjust for non-recurring and non-operational items to derive a clean, sustainable EBITDA baseline aligned with how sophisticated buyers and sellers assess value.',
    },
    {
      num: '04',
      title: 'Quality of Earnings (QoE) Analysis',
      desc: 'Identify non-recurring items, non-operational adjustments, and EBITDA normalisation requirements to ensure reported earnings reflect ongoing operating performance.',
    },
    {
      num: '05',
      title: 'Working Capital & Cash Proof',
      desc: 'Assess working capital trends, cash flow sustainability, and perform Cash Proof analysis—reconciling bank statements with accounting records to verify accuracy.',
    },
    {
      num: '06',
      title: 'Final Report & Decision Support',
      desc: 'Deliver clear findings, adjustments, risks, and decision-ready conclusions structured to support valuation, deal negotiations, and earn-out structuring.',
    },
  ],
  methodologyTitle: 'Our Approach',
  methodologySubtitle: 'Structured Diligence Built for Live Deal Timelines',
  methodologyDescription: 'Financial due diligence is an independent, structured evaluation of a company\'s financial, operational, and commercial information to confirm accuracy, identify risks, and assess overall business integrity prior to a transaction. Our process is built for the pace of live deals—focused, efficient, and aligned with how US advisors and PE firms operate.',

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
        'Revenue recognition review (US GAAP)',
      ],
      icon: Search,
    },
    {
      title: 'Sell-Side Due Diligence',
      desc: 'Prepare sellers for investor scrutiny—normalise earnings, improve financial transparency, and reduce buyer diligence friction before process launch.',
      features: [
        'Vendor due diligence (VDD)',
        'Earnings normalisation and SDE analysis',
        'Sell-side QoE preparation',
        'Cash proof readiness',
        'Quality of revenue analysis',
      ],
      icon: FileText,
    },
    {
      title: 'Quality of Earnings (QoE) Report',
      desc: 'A core deliverable in financial due diligence—our QoE reports evaluate a company\'s true profitability and earnings sustainability, adjusted for non-recurring items.',
      features: [
        'Non-recurring and one-time item identification',
        'Non-operational adjustments',
        'EBITDA normalisation',
        'Core vs. non-core activity analysis',
        'Defensible conclusions for deal negotiations',
      ],
      icon: BarChart3,
    },
    {
      title: 'SMB & Mid-Market Diligence',
      desc: 'Tailored diligence for small and mid-sized business acquisitions, which carry elevated risk due to limited disclosures and founder-driven operations.',
      features: [
        'Hidden liabilities and contingent risk identification',
        'Cash flow durability assessment',
        'Earnings sustainability post-transaction',
        'Post-LOI renegotiation risk reduction',
      ],
      icon: Shield,
    },
  ],

  caseStudies: [
    {
      client: 'SaaS Company — Buy-Side (California, USA)',
      industry: 'SaaS / Enterprise Software',
      service: 'Buy-Side Financial Due Diligence',
      challenge: 'A US-based private equity firm engaged MARC to conduct buy-side financial due diligence for a mid-market SaaS acquisition. Scope included QoE analysis, revenue recognition review under US GAAP, customer concentration and churn analysis, working capital assessment, and Cash Proof analysis.',
      solution: 'MARC identified EBITDA that included non-recurring revenues, high customer concentration increasing revenue risk, and deferred expenses requiring normalisation. Cash Proof analysis identified timing differences in the financial records.',
      result: 'Normalised earnings supported valuation adjustments and informed deal structuring, including earn-outs and working capital targets. The buyer entered negotiations with a clear, risk-adjusted view of sustainable earnings.',
    },
    {
      client: 'Healthcare Services Provider — Sell-Side (Texas, USA)',
      industry: 'Healthcare Services',
      service: 'Sell-Side Due Diligence & QoE',
      challenge: 'An investment banker engaged MARC to perform sell-side due diligence for a multi-location healthcare provider preparing for a sale process. Scope included a sell-side QoE report, earnings normalisation and SDE validation, payer mix and reimbursement analysis, working capital assessment, and Cash Proof analysis.',
      solution: 'MARC identified EBITDA impacted by above-market owner compensation, one-time legal expenses requiring adjustment, and cash discrepancies resolved through transaction-level tracing.',
      result: 'Improved financial transparency, reduced buyer diligence friction, and supported smoother valuation discussions—helping the seller enter the process with a credible, normalised earnings baseline.',
    },
    {
      client: 'Boutique M&A Advisor — Overflow Support',
      industry: 'Financial Advisory',
      service: 'White-Label Diligence Execution',
      challenge: 'A boutique investment bank engaged MARC during a period of high deal volume to provide overflow diligence execution across multiple live mandates. The bank needed quality diligence output on tight timelines without disclosing the support arrangement to their clients.',
      solution: 'MARC delivered white-label QoE reports, management question packs, and red flag analyses across multiple engagements simultaneously—aligned to the advisor\'s format and standards, with clean handovers and full NDA coverage.',
      result: 'The advisor successfully managed multiple active mandates with no drop in quality or client-facing capacity, expanding effective throughput without adding headcount.',
    },
  ],

  faqs: [
    {
      q: 'What do due diligence companies do?',
      a: 'Due diligence companies conduct independent reviews of financial, operational, and commercial data to help investors and buyers assess risk and make informed decisions before executing a transaction.',
    },
    {
      q: 'What is included in financial due diligence services?',
      a: 'Financial due diligence typically includes QoE analysis, working capital and cash flow assessment, Cash Proof analysis, accounting policy review, revenue recognition review, and identification of valuation risks.',
    },
    {
      q: 'Why is a Quality of Earnings report important?',
      a: 'A QoE report ensures reported EBITDA reflects sustainable operating performance by adjusting for non-recurring and non-operational items. It is a core input to valuation and deal structuring in US M&A transactions.',
    },
    {
      q: 'Do you provide buy-side and sell-side due diligence?',
      a: 'Yes. MARC provides both buy-side and sell-side due diligence services across the USA and global markets.',
    },
    {
      q: 'Can you work directly with our PE firm or do you only work through advisors?',
      a: 'Both. We work directly with private equity firms, strategic acquirers, and corporates. We also serve as white-label execution partners for investment banks and M&A advisors who need capacity support.',
    },
    {
      q: 'How do you handle confidentiality?',
      a: 'All engagements are covered by NDAs. For advisor-led mandates, we operate entirely in the background—no MARC branding in deliverables, clean handovers, and no contact with the end client.',
    },
  ],

  ctaTitle: 'Ready to Bring in Execution Support?',
  ctaDescription: 'Whether you need a QoE report, full financial due diligence, or surge capacity for a live deal, MARC delivers on your timelines—reliably, confidentially, and to US standards.',
}

export default function GlobalDueDiligencePage() {
  return <ServicePageTemplate {...pageData} />
}