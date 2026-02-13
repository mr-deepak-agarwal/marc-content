'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { BarChart3, TrendingUp, Target, DollarSign, PieChart, ShieldCheck } from 'lucide-react'

const pageData = {
  tagline: 'Growth Strategy',
  title: 'Profit & Loss',
  titleHighlight: 'Analysis',
  description: 'A clear understanding of your P&L is the foundation of every sound business decision. MARC\'s P&L analysis services help businesses understand where they make money, where they lose it, and what levers drive profitability — enabling sharper decisions on pricing, costs, and growth investments.',

  stats: [
    { value: '200+', label: 'P&L Engagements' },
    { value: '15%', label: 'Avg. Margin Improvement' },
    { value: '30+', label: 'Industries Covered' },
    { value: '₹500Cr+', label: 'Cost Savings Identified' },
  ],

  valueProps: [
    { icon: BarChart3, title: 'Profitability Clarity', desc: 'Understand exactly where margins are made and lost — by product, channel, customer, or business unit.' },
    { icon: Target, title: 'Cost Optimisation', desc: 'Identify cost overruns, inefficiencies, and underperforming areas with clear recommendations to reduce leakage.' },
    { icon: TrendingUp, title: 'Revenue Enhancement', desc: 'Identify pricing gaps, revenue mix opportunities, and undermonetised segments to improve top-line performance.' },
    { icon: ShieldCheck, title: 'Decision Support', desc: 'Management-ready P&L reports and dashboards that make financial performance visible and actionable.' },
  ],

  methodology: [
    { num: '01', title: 'Financial Data Assessment', desc: 'Review and structure historical P&L data across business units, products, channels, or geographies.' },
    { num: '02', title: 'Revenue Analysis', desc: 'Analyse revenue mix, pricing trends, volume drivers, and customer or channel-level contribution.' },
    { num: '03', title: 'Cost Structure Review', desc: 'Break down fixed and variable costs, benchmark against industry norms, and identify cost inefficiencies.' },
    { num: '04', title: 'Margin & Unit Economics', desc: 'Calculate gross, operating, and net margins at a granular level to pinpoint profitability drivers and drags.' },
    { num: '05', title: 'Variance Analysis', desc: 'Compare actuals against budget and prior periods to identify deviations, root causes, and corrective actions.' },
    { num: '06', title: 'Recommendations & Reporting', desc: 'Deliver structured reports with prioritised recommendations on revenue, cost, and margin improvement levers.' },
  ],
  methodologyDescription: 'We go beyond presenting numbers — we interpret them. Our P&L analysis translates financial data into clear insights on what is driving performance and what needs to change.',

  services: [
    {
      title: 'P&L Structuring & Review',
      desc: 'Build or restructure P&L statements to ensure accurate, consistent reporting across business units, cost centres, and product lines.',
      features: ['Multi-unit P&L Design', 'Cost Centre Mapping', 'Revenue Attribution', 'Reporting Framework'],
      icon: BarChart3,
    },
    {
      title: 'Profitability Analysis',
      desc: 'Deep-dive into margin performance at the product, channel, customer, or geography level to identify what is truly profitable.',
      features: ['Gross Margin Analysis', 'Unit Economics', 'Contribution Margin', 'Segment Profitability'],
      icon: PieChart,
    },
    {
      title: 'Cost Optimisation',
      desc: 'Identify and quantify cost inefficiencies, leakages, and overruns with prioritised recommendations for cost reduction.',
      features: ['Fixed vs Variable Analysis', 'Overhead Review', 'Benchmarking', 'Savings Identification'],
      icon: Target,
    },
    {
      title: 'Budgeting & Variance Analysis',
      desc: 'Build structured budgets and establish monthly variance analysis frameworks to maintain financial discipline and enable early corrective action.',
      features: ['Budget Preparation', 'Actual vs Budget', 'Variance Reporting', 'Corrective Action Tracking'],
      icon: TrendingUp,
    },
  ],

  caseStudies: [
    {
      client: 'Multi-Outlet F&B Brand',
      industry: 'Food & Beverage',
      service: 'Unit Economics & Margin Analysis',
      challenge: 'A growing restaurant brand with multiple outlets had limited visibility into outlet-level profitability, making it difficult to identify underperforming locations and prioritize expansion decisions.',
      solution: 'Built outlet-level P&L statements, calculated unit economics including APC, revenue per cover, and food cost ratios. Identified high and low-performing outlets and the key drivers of the performance gap.',
      result: 'Clear visibility into outlet-level profitability enabled targeted cost interventions and a data-backed expansion prioritization framework.',
    },
    {
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      service: 'Cost Structure & Margin Review',
      challenge: 'A manufacturer with multiple product lines was experiencing margin pressure but lacked clarity on which products were profitable and where cost overruns were originating.',
      solution: 'Restructured the P&L by product line, analysed material costs, overhead allocation, and pricing across SKUs. Benchmarked cost structure against industry norms and identified key cost leakage areas.',
      result: 'Identified 3 underperforming product lines and cost savings opportunities of over 12% of total COGS through renegotiation and process improvements.',
    },
    {
      client: 'Services Company',
      industry: 'Professional Services',
      service: 'Budgeting & Variance Framework',
      challenge: 'A fast-growing services firm had no formal budgeting process and limited ability to track actual performance against targets, leading to cost overruns and reactive financial management.',
      solution: 'Developed an annual budgeting framework, built monthly actual vs budget P&L templates, and designed a variance analysis process with clear escalation triggers for management review.',
      result: 'Structured financial discipline with monthly management reporting enabling early identification of deviations and timely corrective actions.',
    },
  ],

  faqs: [
    { q: 'What is the difference between a P&L review and an audit?', a: 'A P&L review focuses on understanding profitability drivers, cost structure, and performance insights to support business decisions. An audit is a formal compliance exercise verifying the accuracy of financial statements.' },
    { q: 'How granular can a P&L analysis go?', a: 'We can analyse P&L at any level — total company, business unit, product line, channel, customer segment, or individual outlet — depending on data availability and business needs.' },
    { q: 'Can you help set up a monthly P&L reporting process?', a: 'Yes. We design and implement monthly P&L reporting frameworks including actual vs budget tracking, variance analysis, and management dashboards that can be maintained by your internal team.' },
    { q: 'How long does a P&L analysis engagement take?', a: 'A focused P&L review typically takes 3–5 weeks. A full restructuring and reporting framework setup may take 6–8 weeks depending on complexity.' },
    { q: 'What data do you need to begin?', a: 'We typically start with historical financial statements, trial balances, and any existing management reports. We work with whatever is available and help structure data gaps during the engagement.' },
  ],

  ctaTitle: 'Ready to Take Control of Your Profitability?',
  ctaDescription: 'Partner with MARC to gain clear visibility into your P&L, identify what is driving performance, and build the financial discipline needed for sustainable growth.',
}

export default function ProfitLossPage() {
  return <ServicePageTemplate {...pageData} />
}