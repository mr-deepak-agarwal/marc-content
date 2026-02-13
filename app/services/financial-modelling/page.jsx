'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { BarChart3, TrendingUp, Target, PieChart, Calculator, ShieldCheck } from 'lucide-react'

const pageData = {
  tagline: 'Growth Strategy',
  title: 'Financial Modelling &',
  titleHighlight: 'Project Reports',
  description: 'Sound financial decisions require robust, reliable models. MARC builds financial models and project reports that go beyond spreadsheets — delivering structured, assumption-driven projections that support investment decisions, fundraising, expansion planning, and bank financing.',

  stats: [
    { value: '250+', label: 'Models Built' },
    { value: '₹8,000Cr+', label: 'Projects Evaluated' },
    { value: '30+', label: 'Sectors Covered' },
    { value: '95%', label: 'Lender Acceptance Rate' },
  ],

  valueProps: [
    { icon: BarChart3, title: 'Decision-Ready Models', desc: 'Integrated financial models with P&L, balance sheet, and cash flow projections built on transparent, auditable assumptions.' },
    { icon: Target, title: 'Scenario Planning', desc: 'Base, upside, and downside scenarios that help management and investors understand the range of outcomes and key sensitivities.' },
    { icon: TrendingUp, title: 'Investment Returns', desc: 'ROI, IRR, NPV, and payback period analysis to evaluate investment attractiveness and support go / no-go decisions.' },
    { icon: ShieldCheck, title: 'Lender & Investor Ready', desc: 'Structured project reports and financial models prepared to meet the requirements of banks, NBFCs, and institutional investors.' },
  ],

  methodology: [
    { num: '01', title: 'Business Understanding', desc: 'Deep-dive into business model, revenue streams, cost structure, capital requirements, and key value drivers.' },
    { num: '02', title: 'Assumption Development', desc: 'Build market-validated assumptions on revenue growth, margins, capex, working capital, and financing structure.' },
    { num: '03', title: 'Model Architecture', desc: 'Design integrated three-statement model (P&L, balance sheet, cash flow) with dynamic, linked assumptions.' },
    { num: '04', title: 'Returns & Feasibility Analysis', desc: 'Calculate ROI, IRR, NPV, DSCR, and payback period. Assess financial feasibility and debt serviceability.' },
    { num: '05', title: 'Scenario & Sensitivity Analysis', desc: 'Build base, upside, and downside scenarios. Identify key sensitivities and break-even thresholds.' },
    { num: '06', title: 'Report Preparation', desc: 'Prepare structured project reports or investor-ready financial summaries aligned with lender or investor requirements.' },
  ],
  methodologyDescription: 'We combine rigorous financial modelling with deep sector knowledge — building models that are not just mathematically sound but grounded in realistic market and operational assumptions.',

  services: [
    {
      title: 'Financial Modelling',
      desc: 'Integrated three-statement financial models covering P&L, balance sheet, and cash flow — built on structured, transparent assumptions for any business or project.',
      features: ['Three-Statement Model', 'Dynamic Assumptions', 'Scenario Analysis', 'Sensitivity Testing'],
      icon: BarChart3,
    },
    {
      title: 'Project Report (DPR)',
      desc: 'Detailed Project Reports for bank financing, NBFC lending, and government scheme applications — covering project overview, financial projections, and returns analysis.',
      features: ['Project Overview', 'Capex & Opex Planning', 'DSCR Analysis', 'Bank-Ready Format'],
      icon: Calculator,
    },
    {
      title: 'Investment Feasibility',
      desc: 'Assess the financial viability of new investments, expansions, or projects — with ROI, IRR, NPV, and payback analysis to support go / no-go decisions.',
      features: ['ROI & IRR Analysis', 'NPV Calculation', 'Payback Period', 'Break-even Analysis'],
      icon: Target,
    },
    {
      title: 'Valuation Support',
      desc: 'Build valuation models using DCF, comparable company analysis, or precedent transaction approaches to support fundraising, M&A, and strategic decisions.',
      features: ['DCF Valuation', 'Comparable Analysis', 'Transaction Benchmarks', 'Valuation Summary'],
      icon: PieChart,
    },
  ],

  caseStudies: [
    {
      client: 'Real Estate Developer',
      industry: 'Real Estate',
      service: 'Project Feasibility & Financial Model',
      challenge: 'A real estate developer needed a comprehensive financial model and project report for a mixed-use development to support bank financing and evaluate the project\'s financial viability.',
      solution: 'Built a detailed financial model covering construction costs, phased revenue projections, financing structure, and returns analysis. Prepared a structured project report meeting bank documentation requirements including DSCR analysis.',
      result: 'Secured bank financing with the project report and financial model accepted by the lending institution, enabling project commencement.',
    },
    {
      client: 'Manufacturing Startup',
      industry: 'Manufacturing',
      service: 'Investment Feasibility & DPR',
      challenge: 'An entrepreneur planning to set up a manufacturing facility needed a detailed project report for MSME scheme funding and a financial model to evaluate the investment\'s viability.',
      solution: 'Developed a full DPR covering plant setup, machinery costs, raw material planning, and capacity utilisation assumptions. Built integrated financial projections with ROI, IRR, and payback analysis across multiple scenarios.',
      result: 'Project report approved for MSME scheme funding. Financial model confirmed investment viability with IRR exceeding target return thresholds.',
    },
    {
      client: 'Hospitality Company',
      industry: 'Hospitality',
      service: 'Expansion Financial Model',
      challenge: 'A hospitality company evaluating expansion into a new property needed a financial model to assess returns and support investor discussions for the new project.',
      solution: 'Built an integrated financial model for the new property covering room revenue, F&B, events, and ancillary streams. Developed scenario analysis across occupancy and ADR assumptions with full returns analysis.',
      result: 'Clear go-ahead decision supported by the financial model, which was also used as the basis for investor presentations and capital raise discussions.',
    },
  ],

  faqs: [
    { q: 'What is the difference between a financial model and a project report?', a: 'A financial model is an Excel-based tool with integrated projections and scenario analysis. A project report (DPR) is a structured document — typically required by banks or lenders — that includes the financial model alongside project description, market analysis, and management overview.' },
    { q: 'What returns metrics do you calculate?', a: 'We typically calculate ROI, IRR, NPV, payback period, DSCR (debt service coverage ratio), and break-even analysis — tailored to the specific requirements of investors or lenders.' },
    { q: 'Can you prepare project reports for government scheme applications?', a: 'Yes. We prepare DPRs aligned with the documentation requirements of MSME schemes, SIDBI, NABARD, and various state government funding programs.' },
    { q: 'How long does financial modelling take?', a: 'A focused financial model typically takes 2–3 weeks. A full DPR with market analysis and financial projections typically takes 4–6 weeks.' },
    { q: 'Do you provide sensitivity and scenario analysis?', a: 'Yes. We always include scenario analysis (base, upside, downside) and sensitivity tables showing the impact of key assumptions on returns — giving decision-makers a clear view of the range of outcomes.' },
  ],

  ctaTitle: 'Ready to Build a Robust Financial Model?',
  ctaDescription: 'Partner with MARC to prepare financial models and project reports that support investment decisions, funding applications, and strategic planning.',
}

export default function FinancialModellingPage() {
  return <ServicePageTemplate {...pageData} />
}