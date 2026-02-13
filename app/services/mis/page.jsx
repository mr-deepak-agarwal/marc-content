'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { LayoutDashboard, BarChart3, TrendingUp, ShieldCheck, Database, Target } from 'lucide-react'

const pageData = {
  tagline: 'Growth Strategy',
  title: 'Management Information',
  titleHighlight: 'Systems (MIS)',
  description: 'Limited visibility into financial and operational performance leads to delayed decisions, cost overruns, and weak financial control. MARC\'s MIS setup services help organizations design and implement structured, reliable management reporting systems that convert raw data into meaningful insights for decision-makers.',

  stats: [
    { value: '15+', label: 'MIS Frameworks Built' },
    { value: '3', label: 'Sector Specialisations' },
    { value: '100%', label: 'Custom to Business' },
    { value: '4 weeks', label: 'Avg. Implementation Time' },
  ],

  valueProps: [
    { icon: LayoutDashboard, title: 'Single Source of Truth', desc: 'One reliable view of financial and operational performance on a monthly basis — replacing fragmented spreadsheets and manual reports.' },
    { icon: BarChart3, title: 'Variance Visibility', desc: 'Actual vs budget tracking that identifies deviations early and supports timely corrective actions before they escalate.' },
    { icon: TrendingUp, title: 'Better Decisions', desc: 'Management-ready dashboards and reports that make performance data accessible and actionable for leadership teams.' },
    { icon: ShieldCheck, title: 'Financial Discipline', desc: 'Structured reporting that strengthens financial controls, improves cost management, and builds planning capabilities.' },
  ],

  methodology: [
    { num: '01', title: 'Needs Assessment', desc: 'Understand business structure, reporting needs, management review requirements, and current data availability.' },
    { num: '02', title: 'MIS Structure Design', desc: 'Customise a MIS structure covering revenues, expenses, cost centres, and business units based on case-to-case requirements.' },
    { num: '03', title: 'KPI Framework', desc: 'Define key performance indicators relevant to the business, with clear definitions, calculation methods, and benchmarks.' },
    { num: '04', title: 'Budget & Variance Framework', desc: 'Establish actual versus budget tracking and variance analysis frameworks with escalation triggers for management review.' },
    { num: '05', title: 'Data Integration', desc: 'Define data sources, validation checks, and reporting timelines. Align MIS with existing accounting systems and ERP.' },
    { num: '06', title: 'Implementation & Handover', desc: 'Develop monthly management reports and dashboards. Support implementation, team training, and ongoing refinement.' },
  ],
  methodologyDescription: 'We bring strong domain understanding across hospitality, manufacturing, and education sectors — enabling us to design MIS frameworks aligned with sector-specific business drivers, cost structures, and management priorities.',

  services: [
    {
      title: 'MIS Framework Design',
      desc: 'Build a fully customised MIS structure covering all relevant revenue streams, cost centres, and business units specific to your operations.',
      features: ['Revenue Tracking', 'Cost Centre Design', 'Business Unit Reporting', 'Custom KPI Framework'],
      icon: LayoutDashboard,
    },
    {
      title: 'Actual vs Budget Reporting',
      desc: 'Establish structured budgeting and monthly actual vs budget comparison frameworks with variance analysis and corrective action tracking.',
      features: ['Budget Templates', 'Monthly Variance Reports', 'Deviation Alerts', 'Corrective Action Logs'],
      icon: BarChart3,
    },
    {
      title: 'Management Dashboards',
      desc: 'Develop clear, decision-ready monthly management dashboards focused on usability — giving leadership the right information at a glance.',
      features: ['Visual Dashboards', 'Executive Summaries', 'Trend Analysis', 'Performance Highlights'],
      icon: TrendingUp,
    },
    {
      title: 'ERP & System Integration',
      desc: 'Align the MIS with existing accounting systems, ERP platforms, and operational data sources to ensure consistency and eliminate manual data entry.',
      features: ['ERP Alignment', 'Data Validation', 'Automated Feeds', 'System Reconciliation'],
      icon: Database,
    },
  ],

  caseStudies: [
    {
      client: '5-Star Hospitality Company',
      industry: 'Hospitality',
      service: 'MIS Setup & Financial Reporting',
      challenge: 'A leading 5-star hotel with multiple revenue streams across rooms, F&B, events, and ancillary services had no structured MIS. Management faced fragmented data and limited visibility into actual vs budgeted performance.',
      solution: 'Designed and implemented a full MIS covering departmental revenue and expense tracking, actual vs budget comparison, and monthly management dashboards. Defined data sources, validation checks, and reporting timelines aligned with the hotel\'s accounting systems.',
      result: 'Management gained a single, reliable monthly view of hotel performance. Improved cost control, early variance identification, and more informed, data-driven decisions across departments.',
    },
    {
      client: 'Manufacturing Company',
      industry: 'Manufacturing',
      service: 'Operational & Financial MIS',
      challenge: 'A multi-product manufacturer lacked integrated reporting across production, procurement, inventory, and finance — making it difficult to monitor performance or identify cost overruns in time.',
      solution: 'Built an integrated MIS covering production volumes, raw material costs, inventory levels, and financial performance. Established KPIs for each function and designed monthly management reports for senior leadership.',
      result: 'Improved visibility across the supply chain and financials, enabling earlier identification of cost deviations and better production planning decisions.',
    },
    {
      client: 'Private Educational Institution',
      industry: 'Education',
      service: 'Academic & Financial MIS',
      challenge: 'A growing school with expanding capacity needed structured reporting on enrolment, fee collections, department expenses, and overall financial performance to support management and investor discussions.',
      solution: 'Designed an education-specific MIS tracking enrolment trends, fee collection efficiency, department-wise expenditure, and overall financial health with budget vs actual frameworks.',
      result: 'Consistent monthly reporting supporting management reviews, funding discussions, and financial planning for the next phase of expansion.',
    },
  ],

  faqs: [
    { q: 'What does MIS setup typically include?', a: 'MIS setup includes defining KPIs, building actual vs budget tracking frameworks, designing variance analysis reports, and developing monthly management dashboards aligned with the business\'s decision-making needs.' },
    { q: 'Do you build the MIS in Excel or a specific software?', a: 'We design MIS frameworks that can be implemented in Excel, Google Sheets, or integrated with your existing ERP or accounting software — depending on your current systems and preferences.' },
    { q: 'How long does MIS setup take?', a: 'A typical MIS setup engagement takes 4–6 weeks from needs assessment to implementation, depending on business complexity and data availability.' },
    { q: 'Can your MIS be maintained by our internal team?', a: 'Yes. We design for handover — the MIS is built to be maintained by your internal finance team, with documentation and training provided as part of the engagement.' },
    { q: 'What sectors do you specialise in for MIS design?', a: 'We have deep experience designing MIS frameworks for hospitality, manufacturing, and education businesses — sectors where multi-department operations and complex cost structures require tailored reporting approaches.' },
  ],

  ctaTitle: 'Ready for Clear, Reliable Management Reporting?',
  ctaDescription: 'Partner with MARC to design and implement an MIS that gives leadership the visibility they need to manage performance, control costs, and drive growth.',
}

export default function MISPage() {
  return <ServicePageTemplate {...pageData} />
}