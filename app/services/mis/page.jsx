'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { BarChart3, TrendingUp, Eye, FileSpreadsheet, Target, Award, Database, LineChart } from 'lucide-react'

const pageData = {
  tagline: 'MIS Setup Services',
  title: 'Convert Raw Data into',
  titleHighlight: 'Meaningful Insights',
  description: 'Limited visibility into financial and operational performance often leads to delayed decisions, cost overruns, and weak financial control. MARC\'s MIS setup services help organizations design and implement structured, reliable management reporting systems that convert raw data into meaningful insights for decision-makers.',
  
  stats: [
    { value: '50+', label: 'MIS Systems Implemented' },
    { value: '100%', label: 'Client Adoption Rate' },
    { value: '40%', label: 'Avg. Time Saved' },
    { value: '85%', label: 'Better Decision-Making' },
  ],
  
  valueProps: [
    { icon: Eye, title: 'Improved Visibility', desc: 'Clear view of revenues, costs, and overall financial performance across all business units.' },
    { icon: Target, title: 'Early Variance Detection', desc: 'Identify performance deviations early through actual versus budget tracking frameworks.' },
    { icon: Award, title: 'Stronger Financial Discipline', desc: 'Consistent, reliable monthly reporting that strengthens cost control and planning.' },
    { icon: TrendingUp, title: 'Data-Driven Decisions', desc: 'Better decision-making across the organization with decision-ready insights.' },
  ],
  
  methodology: [
    { num: '01', title: 'Business Understanding', desc: 'Understand business structure, reporting needs, and management review requirements.' },
    { num: '02', title: 'MIS Structure Design', desc: 'Customize MIS covering revenues, expenses, cost centres, and business units on case-by-case basis.' },
    { num: '03', title: 'Framework Establishment', desc: 'Establish actual versus budget tracking and variance analysis frameworks.' },
    { num: '04', title: 'Data Integration', desc: 'Define data sources, validation checks, reporting timelines, and align with existing systems.' },
    { num: '05', title: 'Dashboard Development', desc: 'Develop monthly management reports and dashboards focused on clarity and usability.' },
    { num: '06', title: 'Implementation Support', desc: 'Support implementation, handover, and ongoing refinement of the MIS framework.' },
  ],
  methodologyDescription: 'Our MIS engagements focus on building end-to-end reporting frameworks that track key performance indicators (KPIs) across revenues, expenses, budgets, and business units. We help management move from fragmented data and static reports to consistent, decision-ready monthly MIS.',
  
  services: [
    {
      title: 'Financial MIS Setup',
      desc: 'Comprehensive financial reporting system covering P&L, balance sheet, and cash flow.',
      features: ['Revenue & Expense Tracking', 'Budget vs Actual Analysis', 'Departmental P&L', 'Monthly Financial Dashboards'],
      icon: BarChart3,
    },
    {
      title: 'Operational MIS',
      desc: 'Track operational KPIs and performance metrics across business functions.',
      features: ['Operational KPIs', 'Performance Metrics', 'Efficiency Tracking', 'Real-Time Dashboards'],
      icon: LineChart,
    },
    {
      title: 'Variance Analysis Framework',
      desc: 'Systematic tracking and analysis of budget variances and performance deviations.',
      features: ['Actual vs Budget', 'Variance Reporting', 'Trend Analysis', 'Alert Mechanisms'],
      icon: Target,
    },
    {
      title: 'Custom Reporting Solutions',
      desc: 'Tailored reporting frameworks aligned with sector-specific business drivers.',
      features: ['Custom Report Design', 'Integration with ERP', 'Automated Data Flows', 'Executive Summaries'],
      icon: FileSpreadsheet,
    },
  ],
  
  caseStudies: [
    {
      title: 'Hospitality Sector MIS Implementation',
      client: '5-Star Hotel Group',
      desc: 'Designed and implemented structured MIS providing clear financial performance visibility across rooms, F&B, events, and ancillary services. Enabled better cost control, early variance identification, and data-driven decision-making with monthly departmental tracking.',
      tags: ['Hospitality', 'India', 'MIS Setup'],
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop',
    },
    {
      title: 'Manufacturing MIS Framework',
      client: 'Multi-Unit Manufacturing Facility',
      desc: 'Built comprehensive MIS tracking production costs, material consumption, and department-wise profitability enabling monthly performance reviews and improved financial discipline.',
      tags: ['Manufacturing', 'Multi-Location'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Education Sector Reporting',
      client: 'Educational Institution Group',
      desc: 'Implemented MIS covering academic units, fee collection, expense tracking, and student metrics providing complete visibility into financial and operational performance.',
      tags: ['Education', 'Multi-Campus'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What does MIS setup typically include?', a: 'MIS setup includes defining KPIs, actual vs budget tracking, variance analysis, reporting structures, and monthly management dashboards aligned with decision-making needs.' },
    { q: 'Which sectors do you have MIS experience in?', a: 'We have strong domain understanding across hospitality, manufacturing, and education sectors, enabling us to design MIS frameworks aligned with sector-specific business drivers, cost structures, and management priorities.' },
    { q: 'How long does MIS implementation take?', a: 'Implementation timelines vary based on business complexity and existing systems. Typically, basic MIS can be set up in 4-6 weeks, while comprehensive frameworks may take 8-12 weeks.' },
    { q: 'Can you integrate with our existing accounting system?', a: 'Yes, we align MIS with existing accounting systems, ERP, and operational data to ensure seamless data flow and reduce manual interventions.' },
    { q: 'What are the key benefits of MIS setup?', a: 'Key benefits include improved visibility into revenues and costs, early identification of variances, stronger financial discipline, consistent monthly reporting, and better data-driven decision-making across the organization.' },
    { q: 'Do you provide ongoing support after implementation?', a: 'Yes, we support implementation, handover, and ongoing refinement of the MIS framework to ensure it continues to meet evolving business needs.' },
  ],
  
  ctaTitle: 'Need Better Financial Visibility?',
  ctaDescription: 'Partner with MARC to design and implement a structured MIS that provides clear, timely, and actionable insights into your business performance.',
}

export default function MISPage() {
  return <ServicePageTemplate {...pageData} />
}
