'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { TrendingUp, TrendingDown, Calculator, PieChart, BarChart3, DollarSign, Target, FileText } from 'lucide-react'

const pageData = {
  tagline: 'Profit & Loss Analysis',
  title: 'Drive Profitability with',
  titleHighlight: 'Financial Insights',
  description: 'In-depth profit and loss analysis to identify revenue opportunities, optimize costs, and improve bottom-line performance across your business.',
  
  stats: [
    { value: '100+', label: 'P&L Projects' },
    { value: '25%', label: 'Avg. Margin Improvement' },
    { value: '₹500Cr+', label: 'Costs Optimized' },
    { value: '200+', label: 'Recommendations Implemented' },
  ],
  
  valueProps: [
    { icon: TrendingUp, title: 'Revenue Optimization', desc: 'Identify opportunities to increase revenue through pricing, mix, and volume improvements.' },
    { icon: TrendingDown, title: 'Cost Reduction', desc: 'Uncover cost savings through detailed expense analysis and benchmarking.' },
    { icon: Target, title: 'Margin Improvement', desc: 'Drive profitability improvements across products, customers, and channels.' },
    { icon: BarChart3, title: 'Performance Visibility', desc: 'Gain clear visibility into financial performance drivers and trends.' },
  ],
  
  methodology: [
    { num: '01', title: 'Data Collection', desc: 'Gather comprehensive financial data including P&L statements, cost breakdowns, and operational metrics.' },
    { num: '02', title: 'Trend Analysis', desc: 'Analyze historical trends in revenue, costs, and margins to identify patterns and anomalies.' },
    { num: '03', title: 'Profitability Analysis', desc: 'Deep-dive into profitability by product, customer, channel, and geography.' },
    { num: '04', title: 'Benchmarking', desc: 'Compare performance against industry benchmarks and best practices.' },
    { num: '05', title: 'Root Cause Analysis', desc: 'Identify root causes of underperformance and areas of value leakage.' },
    { num: '06', title: 'Improvement Roadmap', desc: 'Develop prioritized action plan with quantified impact and implementation steps.' },
  ],
  methodologyDescription: 'We combine financial expertise with operational understanding to deliver actionable insights that drive measurable profitability improvements.',
  
  services: [
    {
      title: 'Revenue Analysis',
      desc: 'Analyze revenue streams, pricing effectiveness, product mix, and customer profitability.',
      features: ['Revenue Decomposition', 'Pricing Analysis', 'Mix Optimization'],
      icon: TrendingUp,
    },
    {
      title: 'Cost Analysis',
      desc: 'Deep-dive into cost structure including fixed, variable, direct, and indirect costs.',
      features: ['Cost Breakdown', 'Variance Analysis', 'Cost Drivers'],
      icon: Calculator,
    },
    {
      title: 'Margin Analysis',
      desc: 'Analyze gross margins, contribution margins, and operating margins across dimensions.',
      features: ['Gross Margin', 'Contribution Analysis', 'EBITDA Analysis'],
      icon: PieChart,
    },
    {
      title: 'Profitability Improvement',
      desc: 'Identify and prioritize opportunities for margin improvement and cost optimization.',
      features: ['Quick Wins', 'Structural Changes', 'Implementation Plan'],
      icon: Target,
    },
  ],
  
  caseStudies: [
    {
      title: 'Manufacturing Cost Optimization',
      client: 'Industrial Products Company',
      desc: 'Identified ₹15Cr annual cost savings through detailed P&L analysis and process improvements.',
      tags: ['Manufacturing', 'Cost Optimization'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Retail Profitability Analysis',
      client: 'Multi-brand Retailer',
      desc: 'Analyzed store-level profitability leading to portfolio optimization and 20% margin improvement.',
      tags: ['Retail', 'Profitability'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    },
    {
      title: 'Product Portfolio Rationalization',
      client: 'Consumer Goods Company',
      desc: 'Conducted SKU-level profitability analysis to optimize product portfolio.',
      tags: ['FMCG', 'Portfolio Strategy'],
      image: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What data do you need for P&L analysis?', a: 'We typically need historical P&L statements, cost breakdowns, sales data by product/customer/channel, and relevant operational metrics.' },
    { q: 'How granular can the analysis be?', a: 'We can analyze profitability at multiple levels including product/SKU, customer, channel, geography, and business unit levels.' },
    { q: 'Do you help implement the recommendations?', a: 'Yes, we support implementation of improvement initiatives and help track benefits realization.' },
    { q: 'How quickly can we see results?', a: 'Quick wins can show results within 2-3 months, while structural improvements may take 6-12 months to fully realize.' },
  ],
  
  ctaTitle: 'Ready to Improve Your Profitability?',
  ctaDescription: 'Partner with MARC to uncover profit improvement opportunities and drive bottom-line results.',
}

export default function ProfitLossAnalysisPage() {
  return <ServicePageTemplate {...pageData} />
}
