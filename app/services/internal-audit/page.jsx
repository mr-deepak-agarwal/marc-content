'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Shield, Search, FileCheck, AlertTriangle, BarChart3, Award, CheckCircle2, TrendingUp } from 'lucide-react'

const pageData = {
  tagline: 'Internal Audit Services',
  title: 'Strengthen Governance and',
  titleHighlight: 'Control Effectiveness',
  description: 'In an increasingly complex regulatory and operating environment, internal audits play a critical role in strengthening governance, improving control effectiveness, and enhancing operational discipline. MARC\'s internal audit services are designed to provide independent, objective assurance while identifying opportunities to improve financial integrity, compliance, and risk management. MARC has deep experience delivering internal audit engagements across hospitality, manufacturing, and education sectors, where multi-location operations, high transaction volumes, and decentralized controls increase audit complexity.',
  
  stats: [
    { value: '150+', label: 'Internal Audits Completed' },
    { value: '95%', label: 'Control Improvement Rate' },
    { value: '40%', label: 'Avg. Leakage Reduction' },
    { value: '15+', label: 'Years Experience' },
  ],
  
  valueProps: [
    { icon: Shield, title: 'Risk-Based Approach', desc: 'Risk-based, insight-led approach beyond checklist-based compliance.' },
    { icon: Search, title: 'Deep Investigation', desc: 'Evaluate financial records, internal controls, statutory compliance, and policy adherence.' },
    { icon: TrendingUp, title: 'Early Risk Identification', desc: 'Identify control gaps and take corrective action before issues escalate.' },
    { icon: Award, title: 'Sector Expertise', desc: 'Deep experience across hospitality, manufacturing, and education sectors.' },
  ],
  
  methodology: [
    { num: '01', title: 'Define Objectives & Scope', desc: 'Define audit objectives, scope, and key risk areas in alignment with management priorities.' },
    { num: '02', title: 'Conduct Assessment', desc: 'Conduct walkthroughs, sample testing, and data analysis across critical processes.' },
    { num: '03', title: 'Evaluate Controls', desc: 'Assess adequacy and effectiveness of internal controls and compliance mechanisms.' },
    { num: '04', title: 'Identify Root Causes', desc: 'Identify root causes of control lapses, financial leakages, and process deviations.' },
    { num: '05', title: 'Deliver Recommendations', desc: 'Deliver structured reports with clear, actionable recommendations.' },
    { num: '06', title: 'Follow-Up Support', desc: 'Support follow-up reviews to track implementation and closure of audit findings.' },
  ],
  methodologyDescription: 'Our internal audits go beyond checklist-based compliance. We adopt a risk-based, insight-led approach that evaluates financial records, internal controls, statutory compliance, and policy adherence across functions. The objective is to help management gain clarity on risk exposure, identify control gaps, and take corrective action before issues escalate.',
  
  services: [
    {
      title: 'Financial Controls Audit',
      desc: 'Comprehensive review of financial processes, controls, and reporting accuracy.',
      features: ['Revenue Verification', 'Expense Controls', 'Financial Reporting', 'Reconciliation Review'],
      icon: BarChart3,
    },
    {
      title: 'Compliance Audit',
      desc: 'Assessment of statutory compliance and adherence to internal policies.',
      features: ['Regulatory Compliance', 'Policy Adherence', 'Statutory Requirements', 'Documentation Review'],
      icon: FileCheck,
    },
    {
      title: 'Operational Audit',
      desc: 'Evaluate operational processes, efficiency, and control effectiveness.',
      features: ['Process Efficiency', 'Control Testing', 'SOP Compliance', 'Operational Risk Assessment'],
      icon: Search,
    },
    {
      title: 'Revenue Assurance',
      desc: 'Identify and prevent revenue leakages through systematic testing.',
      features: ['Revenue Reconciliation', 'Discount Controls', 'Pricing Compliance', 'Leakage Identification'],
      icon: TrendingUp,
    },
  ],
  
  caseStudies: [
    {
      title: 'Internal Audit – Hospitality Sector',
      client: 'Leading 5-Star Hotel',
      desc: 'Comprehensive internal audit across room revenue, events, F&B, and HR identifying material control gaps including revenue leakages from unauthorized discounts, absence of SOPs, gaps in approval controls, and tax inefficiencies. Provided actionable recommendations strengthening internal controls and governance.',
      tags: ['Hospitality', 'India', '5-Star Hotel'],
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop',
    },
    {
      title: 'Manufacturing Internal Audit',
      client: 'Mid-Size Manufacturing Company',
      desc: 'Internal audit covering production, inventory, procurement, and finance uncovering process inefficiencies, inventory control gaps, and compliance issues leading to enhanced operational controls.',
      tags: ['Manufacturing', 'Multi-Department'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Education Sector Audit',
      client: 'Educational Institution',
      desc: 'Comprehensive internal audit of fee collection, expense management, and academic operations improving financial controls and compliance across multiple campuses.',
      tags: ['Education', 'Multi-Campus'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'How are MARC\'s audits different from traditional compliance audits?', a: 'Our audits go beyond checklists. We follow a risk-based, insight-led approach to identify control gaps, revenue leakages, and process inefficiencies, with clear, actionable recommendations.' },
    { q: 'What sectors do you have internal audit experience in?', a: 'We have deep experience delivering internal audit engagements across hospitality, manufacturing, and education sectors, where multi-location operations, high transaction volumes, and decentralized controls increase audit complexity.' },
    { q: 'What are the key outcomes of an internal audit?', a: 'Key outcomes include improved accuracy and reliability of financial reporting, early identification of revenue leakages and control weaknesses, strengthened internal controls and governance framework, and better management visibility into operational and financial risks.' },
    { q: 'Do you support implementation after audits?', a: 'Yes. We support implementation through follow-ups, management reviews, and tracking of corrective actions to ensure recommendations are actually executed.' },
    { q: 'How long does an internal audit take?', a: 'Timelines vary based on organizational complexity and audit scope. Typical internal audits range from 3-6 weeks depending on the number of locations and processes covered.' },
    { q: 'Can you conduct audits for multi-location operations?', a: 'Yes, we have strong experience working with multi-location and fast-growing organizations across various sectors.' },
  ],
  
  ctaTitle: 'Need to Strengthen Your Internal Controls?',
  ctaDescription: 'Partner with MARC for risk-based internal audits that identify control gaps, prevent revenue leakages, and strengthen governance across your organization.',
}

export default function InternalAuditPage() {
  return <ServicePageTemplate {...pageData} />
}