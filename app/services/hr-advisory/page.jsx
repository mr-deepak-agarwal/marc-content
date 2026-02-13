'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Users, Target, TrendingUp, Award, ClipboardList, ShieldCheck } from 'lucide-react'

const pageData = {
  tagline: 'Growth Strategy',
  title: 'HR Advisory &',
  titleHighlight: 'People Strategy',
  description: 'People are the most critical driver of business performance. MARC\'s HR advisory services help growing businesses build the people structures, processes, and policies needed to attract, retain, and develop talent — and to scale operations without losing performance or culture.',

  stats: [
    { value: '80+', label: 'HR Engagements' },
    { value: '5,000+', label: 'Employees Impacted' },
    { value: '25+', label: 'Sectors Covered' },
    { value: '60%', label: 'Avg. Attrition Reduction' },
  ],

  valueProps: [
    { icon: Users, title: 'Organisational Design', desc: 'Structure your organisation for the next phase of growth — with the right roles, reporting lines, and spans of control.' },
    { icon: Target, title: 'Talent Frameworks', desc: 'Build competency frameworks, job families, and grading structures that attract and retain the right people at every level.' },
    { icon: TrendingUp, title: 'Performance Management', desc: 'Design KPI-linked appraisal systems that drive accountability, reward performance, and support career development.' },
    { icon: ShieldCheck, title: 'HR Process & Compliance', desc: 'Establish compliant, documented HR processes covering onboarding, policies, exit management, and statutory requirements.' },
  ],

  methodology: [
    { num: '01', title: 'HR Diagnostic', desc: 'Assess current HR practices, organisational structure, policies, compliance status, and people-related pain points.' },
    { num: '02', title: 'Organisational Design', desc: 'Define the optimal organisational structure — roles, reporting lines, spans of control, and manpower planning.' },
    { num: '03', title: 'Job Architecture', desc: 'Design job families, role descriptions, grading structures, and compensation bands aligned to business needs.' },
    { num: '04', title: 'Policy & Process Design', desc: 'Develop HR policies, onboarding processes, leave management, and performance review frameworks aligned with compliance requirements.' },
    { num: '05', title: 'Performance Framework', desc: 'Build KPI-linked performance management systems with goal-setting, mid-year reviews, and annual appraisal processes.' },
    { num: '06', title: 'Implementation Support', desc: 'Support rollout of new HR frameworks with communication plans, manager training, and adoption monitoring.' },
  ],
  methodologyDescription: 'We work with founders, CHROs, and management teams to build HR systems that are practical, scalable, and aligned to the business — not generic templates copied from large corporations.',

  services: [
    {
      title: 'Organisational Design',
      desc: 'Design the right organisational structure for your current stage and growth ambitions — with clear reporting lines, role clarity, and defined spans of control.',
      features: ['Org Structure Design', 'Manpower Planning', 'Reporting Lines', 'Role Clarity'],
      icon: Users,
    },
    {
      title: 'Job Architecture & Grading',
      desc: 'Build structured job families, role descriptions, and grading frameworks that provide career pathways and support equitable compensation decisions.',
      features: ['Job Family Design', 'Role Descriptions', 'Grading Structure', 'Compensation Bands'],
      icon: ClipboardList,
    },
    {
      title: 'Performance Management',
      desc: 'Design and implement KPI-linked performance management systems — from goal-setting to appraisal — that drive accountability and reward the right behaviours.',
      features: ['KPI Framework', 'Goal Setting Process', 'Appraisal Design', 'Feedback Mechanisms'],
      icon: Target,
    },
    {
      title: 'HR Policies & Compliance',
      desc: 'Develop comprehensive HR policy manuals, employee handbooks, and compliance frameworks covering all statutory and regulatory requirements.',
      features: ['HR Policy Manual', 'Employee Handbook', 'Statutory Compliance', 'Onboarding Framework'],
      icon: ShieldCheck,
    },
  ],

  caseStudies: [
    {
      client: 'Fast-Growing Services Company',
      industry: 'Professional Services',
      service: 'Organisational Design & Job Architecture',
      challenge: 'A rapidly scaling services firm had no formal organisational structure or job grading system, leading to role confusion, compensation inequity, and difficulty attracting senior talent.',
      solution: 'Designed a structured organisational framework with defined reporting lines and spans of control. Built a job family architecture with role descriptions and grading bands. Developed a compensation benchmarking framework aligned to market data.',
      result: 'Improved role clarity across the organisation, a structured compensation framework reducing pay inequity, and a stronger talent attraction proposition for senior hires.',
    },
    {
      client: 'Manufacturing Conglomerate',
      industry: 'Manufacturing',
      service: 'Performance Management System',
      challenge: 'A multi-unit manufacturing group had no consistent performance management process — appraisals were informal, KPIs were undefined, and high performers had no structured recognition or career path.',
      solution: 'Designed a KPI-linked performance management framework with goal-setting templates, mid-year review processes, and annual appraisal formats. Built a performance calibration process for consistency across business units.',
      result: 'A structured, consistent appraisal process across all business units with measurable improvement in performance visibility and employee satisfaction with the review process.',
    },
    {
      client: 'Hospitality Group',
      industry: 'Hospitality',
      service: 'HR Policy & Compliance Framework',
      challenge: 'A growing hospitality group with multiple properties lacked consistent HR policies, resulting in compliance risks, inconsistent employee experience, and high attrition driven by unclear expectations.',
      solution: 'Developed a comprehensive HR policy manual covering all key people processes — onboarding, attendance, leave, code of conduct, grievance, and exit. Aligned policies with statutory compliance requirements and property-level operational needs.',
      result: 'Standardised employee experience across properties, reduced compliance exposure, and improved onboarding quality contributing to measurable reduction in early attrition.',
    },
  ],

  faqs: [
    { q: 'At what stage should a business invest in HR advisory?', a: 'Typically when a business reaches 50+ employees, is scaling rapidly, or experiencing people-related challenges like high attrition, role confusion, or performance inconsistency. Earlier investment in HR structure pays dividends as the business grows.' },
    { q: 'Do you help with recruitment?', a: 'Our focus is on building the HR systems, structures, and frameworks that make recruitment and retention more effective — rather than direct recruitment execution.' },
    { q: 'Can you work alongside our existing HR team?', a: 'Yes. We frequently work as an extension of internal HR teams — providing specialist advisory, framework design, and implementation support while your team manages day-to-day HR operations.' },
    { q: 'What is the difference between an HR policy and an SOP?', a: 'HR policies define the rules and principles governing people-related decisions (leave, conduct, appraisals). SOPs define how specific operational tasks should be executed step by step. Both are complementary and often designed together.' },
    { q: 'How long does an HR advisory engagement take?', a: 'A focused engagement such as policy design or performance framework typically takes 6–8 weeks. A full organisational design and job architecture project may take 10–14 weeks.' },
  ],

  ctaTitle: 'Ready to Build Your People Infrastructure?',
  ctaDescription: 'Partner with MARC to design the HR systems, structures, and processes that support sustainable growth and a high-performing organisation.',
}

export default function HRAdvisoryPage() {
  return <ServicePageTemplate {...pageData} />
}