'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { ClipboardList, GitMerge, Users, ShieldCheck, BarChart3, Layers } from 'lucide-react'

const pageData = {
  tagline: 'Growth Strategy',
  title: 'Standard Operating',
  titleHighlight: 'Procedures (SOPs)',
  // ✅ KEYWORD: "Standard Operating Procedures (SOPs)" — description updated to match doc exactly
  description: 'Many businesses operate with informal processes, undocumented workflows, and unclear responsibilities across departments. Over time, this leads to delays, inconsistent execution, and high dependence on a few individuals. MARC helps organizations put structure in place by designing and implementing clear and practical Standard Operating Procedures (SOPs) across all departments. We develop SOPs supported by process flowcharts, RASIC (Responsible, Accountable, Support, Informed, Consulted) matrices, and role-wise job descriptions — creating a structured operating framework that makes daily operations smoother and easier to manage.',

  stats: [
    { value: '100+', label: 'SOPs Delivered' },
    { value: '10+', label: 'Sectors Covered' },
    { value: '50+', label: 'Companies Structured' },
    { value: '3x', label: 'Reduction in Escalations' },
  ],

  valueProps: [
    { icon: ClipboardList, title: 'Process Clarity', desc: 'Clearly defined how day-to-day work should be carried out — removing ambiguity and reducing dependence on individuals.' },
    { icon: Users, title: 'Role Ownership', desc: 'RASIC matrices and job descriptions that define responsibilities, escalation paths, and accountability across every function.' },
    { icon: GitMerge, title: 'Consistent Execution', desc: 'Standardized workflows that ensure operations run the same way every time, regardless of who is doing the work.' },
    { icon: ShieldCheck, title: 'Foundation for Scale', desc: 'SOPs that create the structural foundation needed for growth, system implementation, and reduced founder dependency.' },
  ],

  methodology: [
    { num: '01', title: 'Current State Assessment', desc: 'Interact with management and team members across all departments to understand current ways of working and pain points.' },
    { num: '02', title: 'As-Is Documentation', desc: 'Document existing processes through discussions and walkthroughs. Identify gaps, delays, and dependency on individuals.' },
    { num: '03', title: 'Gap & Risk Analysis', desc: 'Identify inefficiencies, redundancies, control gaps, non-compliance, and inter-departmental coordination issues.' },
    { num: '04', title: 'To-Be Process Design', desc: 'Design improved processes aligned with business needs and systems, with clear approval workflows and control checkpoints.' },
    { num: '05', title: 'SOP Documentation', desc: 'Prepare process flowcharts, RASIC matrices, approval hierarchies, and role-wise job descriptions aligned to SOP responsibilities.' },
    { num: '06', title: 'Implementation Support', desc: 'Support teams during implementation and transition, with follow-up reviews to ensure adoption and effectiveness.' },
  ],
  methodologyDescription: 'Our SOP writing engagements focus on clearly defining how day-to-day work should be carried out across the organisation. We work closely with management and teams on the ground to understand current practices and convert them into simple, workable SOPs that bring consistency, accountability, and better control across all departments.',

  services: [
    {
      title: 'SOP Design & Documentation',
      desc: 'End-to-end SOP writing covering all departments — operations, finance, HR, sales, and administration — with clear process flowcharts.',
      features: ['Process Flowcharts', 'Approval Workflows', 'Control Checkpoints', 'All Departments'],
      icon: ClipboardList,
    },
    {
      title: 'RASIC Matrix Development',
      desc: 'Define who is Responsible, Accountable, Support, Informed, and Consulted for every key process and decision across the organization.',
      features: ['Role Clarity', 'Escalation Paths', 'Decision Ownership', 'Cross-functional Alignment'],
      icon: GitMerge,
    },
    {
      title: 'Job Description Design',
      desc: 'Draft clear, structured job descriptions aligned to SOP responsibilities — providing clarity on roles, KPIs, and reporting lines.',
      features: ['Role Definitions', 'KPI Alignment', 'Reporting Structure', 'Accountability Framework'],
      icon: Users,
    },
    {
      title: 'Implementation & Training',
      desc: 'Support teams through the transition from informal practices to structured SOPs, with training, monitoring, and follow-up audits.',
      features: ['Team Training', 'Change Management', 'Adoption Monitoring', 'Follow-up Reviews'],
      icon: Layers,
    },
  ],

  caseStudies: [
    {
      client: 'Co-working & Real Estate Company',
      industry: 'Real Estate',
      service: 'Organisation-Wide SOP Design',
      challenge: 'A scaling co-working and real estate operator had no formal organisational structure or standardized processes, resulting in high dependency on managing partners for all day-to-day decisions.',
      solution: 'Assessed existing processes across all functions. Designed to-be processes using structured flowcharts covering operations, leasing, facilities, billing, and collections. Developed RASIC matrices and detailed job descriptions. Established a second line of management.',
      result: 'Smoother daily operations, stronger cross-functional coordination, tighter financial controls, and significantly reduced partner involvement in routine decisions.',
    },
    {
      client: 'Automobile Dealership',
      industry: 'Automobile',
      service: 'Workshop & Operations SOP',
      challenge: 'Workshop operations, spares management, and billing processes were largely dependent on individuals rather than systems, causing service delivery delays and inconsistent customer experience.',
      solution: 'Reviewed as-is processes across service advisors, workshop staff, spares, billing, and finance. Designed clear process flowcharts for workshop operations, spares procurement, and billing. Defined reporting structures, approval hierarchies, and accountability frameworks.',
      result: 'More structured and predictable operations, improved departmental coordination, and better management visibility and control over daily activities.',
    },
    {
      client: 'Multi-Location Services Business',
      industry: 'Services',
      service: 'Process Standardisation',
      challenge: 'A fast-growing services company expanding to multiple locations faced inconsistent execution across sites, with no standardised processes for customer delivery, billing, or operations.',
      solution: 'Documented and redesigned core operational workflows for multi-location deployment. Built approval matrices, escalation protocols, and standard reporting formats to ensure consistent execution regardless of location or team.',
      result: 'Consistent service delivery across all locations with clear accountability structures, enabling the business to scale without proportional increase in management overhead.',
    },
  ],

  faqs: [
    { q: 'Are SOPs practical for day-to-day operations?', a: 'Absolutely. Our SOPs are designed for real-world use — not theoretical documents. They include process flowcharts, approval matrices, RASIC frameworks, and role-wise job descriptions that teams can actually follow.' },
    { q: 'How long does an SOP engagement take?', a: 'Depending on the number of departments and complexity of operations, a full SOP engagement typically takes 6–10 weeks from assessment to final documentation.' },
    { q: 'Do you support implementation after the SOPs are prepared?', a: 'Yes. We support implementation through team training, follow-up reviews, and tracking of adoption to ensure the SOPs are actually being used and embedded into daily operations.' },
    { q: 'What is a RASIC matrix?', a: 'A RASIC matrix defines who is Responsible, Accountable, Support, Informed, and Consulted for each process or decision — eliminating confusion about ownership and escalation paths.' },
    { q: 'What types of businesses benefit most from SOPs?', a: 'Businesses that are scaling, have high staff turnover, operate across multiple locations, or where founders are heavily involved in day-to-day operations benefit most from structured SOPs.' },
  ],

  ctaTitle: 'Ready to Build Structure for Scale?',
  ctaDescription: 'Partner with MARC to design and implement SOPs that shift decision-making from individuals to systems — freeing founders to focus on growth.',
}

export default function SOPPage() {
  return <ServicePageTemplate {...pageData} />
}