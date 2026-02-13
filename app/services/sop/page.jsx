'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileText, Users, Target, Award, GitBranch, CheckCircle2, Workflow, BookOpen } from 'lucide-react'

const pageData = {
  tagline: 'Standard Operating Procedure (SOP) Services',
  title: 'Transform Informal Processes into',
  titleHighlight: 'Structured Operations',
  description: 'Many businesses operate with informal processes, undocumented workflows, and unclear responsibilities across departments. Over time, this leads to delays, inconsistent execution, and high dependence on a few individuals. MARC helps organizations put structure in place by designing and implementing clear and practical Standard Operating Procedures (SOPs) across all departments.',
  
  stats: [
    { value: '100+', label: 'SOPs Developed' },
    { value: '60%', label: 'Process Efficiency Gain' },
    { value: '90%', label: 'Reduced Key-Person Dependency' },
    { value: '50+', label: 'Organizations Structured' },
  ],
  
  valueProps: [
    { icon: Workflow, title: 'Smoother Operations', desc: 'Consistent operations across all departments with documented workflows and clear processes.' },
    { icon: Users, title: 'Clear Accountability', desc: 'Defined roles, responsibilities, and ownership through RASIC matrices and job descriptions.' },
    { icon: Target, title: 'Reduced Dependency', desc: 'Lower dependency on promoters or key individuals with systematic process documentation.' },
    { icon: Award, title: 'Scalability Foundation', desc: 'Strong foundation for growth, scaling, and system implementation.' },
  ],
  
  methodology: [
    { num: '01', title: 'Stakeholder Interaction', desc: 'Interact with management and team members across all departments to understand current ways of working.' },
    { num: '02', title: 'As-Is Documentation', desc: 'Document existing (as-is) processes through discussions and walkthroughs.' },
    { num: '03', title: 'Gap Identification', desc: 'Identify gaps, delays, and excessive dependency on individuals.' },
    { num: '04', title: 'To-Be Process Design', desc: 'Design improved (to-be) processes aligned with business needs and systems.' },
    { num: '05', title: 'Documentation & RASIC', desc: 'Prepare clear process flowcharts, approval workflows, and RASIC matrices defining roles and ownership.' },
    { num: '06', title: 'Implementation Support', desc: 'Draft job descriptions aligned to SOP responsibilities and support teams during transition.' },
  ],
  methodologyDescription: 'Our SOP writing engagements focus on clearly defining how day-to-day work should be carried out across the organisation. We work closely with management and teams on the ground to understand current practices and convert them into simple, workable SOPs that bring consistency, accountability, and better control.',
  
  services: [
    {
      title: 'Departmental SOPs',
      desc: 'Comprehensive SOPs covering all departments with process flowcharts and workflows.',
      features: ['Operations SOPs', 'Finance & Accounting SOPs', 'Sales & Marketing SOPs', 'HR & Admin SOPs'],
      icon: FileText,
    },
    {
      title: 'RASIC Matrices',
      desc: 'Detailed RASIC (Responsible, Accountable, Support, Informed, Consulted) matrices for role clarity.',
      features: ['Role Definition', 'Ownership Mapping', 'Escalation Paths', 'Decision Rights'],
      icon: GitBranch,
    },
    {
      title: 'Job Descriptions',
      desc: 'Comprehensive role-wise job descriptions aligned to SOP responsibilities.',
      features: ['Role-Based JDs', 'Responsibility Alignment', 'Reporting Structure', 'Performance Metrics'],
      icon: Users,
    },
    {
      title: 'Process Improvement',
      desc: 'Identify and implement process improvements during SOP development.',
      features: ['Efficiency Enhancement', 'Bottleneck Removal', 'Automation Opportunities', 'Control Checkpoints'],
      icon: Target,
    },
  ],
  
  caseStudies: [
    {
      title: 'Real Estate & Co-working Sector SOP',
      client: 'Co-working Space Operator',
      desc: 'Designed comprehensive SOPs across operations, leasing, facilities, billing, and collections. Established RASIC matrices and job descriptions creating a second line of management and significantly reducing partner involvement in routine operations. Resulted in smoother daily operations and stronger cross-functional coordination.',
      tags: ['Real Estate', 'Co-working', 'Scaling'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Automobile Sector SOP Implementation',
      client: 'Automotive Service Center',
      desc: 'Developed structured SOPs for workshop operations, spares management, billing, and finance functions. Created clear process flowcharts, reporting structures, and accountability frameworks resulting in more predictable operations, improved departmental coordination, and better management visibility.',
      tags: ['Automobile', 'Service Operations'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Manufacturing Operations SOP',
      client: 'Mid-Size Manufacturing Firm',
      desc: 'Implemented SOPs across procurement, production planning, inventory, and dispatch leading to standardized processes, reduced delays, and improved operational consistency across all departments.',
      tags: ['Manufacturing', 'Process Standardization'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is an SOP and why is it important?', a: 'Standard Operating Procedures (SOPs) are documented processes that define how day-to-day work should be carried out. They bring consistency, reduce dependency on individuals, improve accountability, and create a foundation for scaling operations.' },
    { q: 'Are your SOPs practical for day-to-day operations?', a: 'Absolutely. Our SOPs are designed for real-world use and include process flowcharts, approval matrices, RASIC frameworks, and role-wise job descriptions that teams can actually follow.' },
    { q: 'What is a RASIC matrix?', a: 'RASIC stands for Responsible, Accountable, Support, Informed, and Consulted. It\'s a framework that clearly defines who does what in each process, ensuring role clarity and accountability.' },
    { q: 'Which departments do you cover in SOP development?', a: 'We develop SOPs covering all departments including operations, finance, sales, marketing, HR, procurement, inventory, customer service, and any other function based on your business structure.' },
    { q: 'How long does SOP development take?', a: 'Timelines vary based on organizational complexity. For a typical mid-size organization, comprehensive SOP development takes 6-10 weeks including stakeholder interactions, documentation, and implementation support.' },
    { q: 'Do you support implementation after creating SOPs?', a: 'Yes, we support teams during implementation and transition, provide training if needed, and help ensure SOPs are adopted effectively across the organization.' },
    { q: 'Can SOPs help us scale our business?', a: 'Yes, SOPs create a strong foundation for growth and scaling by reducing key-person dependency, standardizing processes, and enabling smoother onboarding of new team members.' },
  ],
  
  ctaTitle: 'Ready to Structure Your Operations?',
  ctaDescription: 'Partner with MARC to design practical SOPs that bring consistency, accountability, and process control across your organization.',
}

export default function SOPPage() {
  return <ServicePageTemplate {...pageData} />
}
