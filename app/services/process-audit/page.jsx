'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { GitBranch, Search, FileCheck, AlertCircle, BarChart3, Award, Target, Workflow } from 'lucide-react'

const pageData = {
  tagline: 'Process Audit Services',
  title: 'Identify Inefficiencies and',
  titleHighlight: 'Strengthen Control Checkpoints',
  description: 'Process inefficiencies, undocumented workflows, and weak control checkpoints often result in cost overruns, revenue leakage, and accountability gaps. MARC\'s process audit services help organizations assess how work actually gets done versus how it is intended to be done.',
  
  stats: [
    { value: '100+', label: 'Process Audits Completed' },
    { value: '50%', label: 'Avg. Efficiency Improvement' },
    { value: '90%', label: 'Process Compliance Gain' },
    { value: '85%', label: 'Control Gap Closure' },
  ],
  
  valueProps: [
    { icon: Search, title: 'End-to-End Assessment', desc: 'Evaluate workflows across operational, financial, and compliance functions.' },
    { icon: Target, title: 'Gap Identification', desc: 'Identify inefficiencies, control gaps, and deviations from SOPs with quantified impact.' },
    { icon: Award, title: 'Sector Expertise', desc: 'Strong understanding of hospitality, manufacturing, and education environments.' },
    { icon: Workflow, title: 'Practical Improvements', desc: 'Recommendations to streamline operations, standardize processes, and reinforce accountability.' },
  ],
  
  methodology: [
    { num: '01', title: 'Document As-Is Processes', desc: 'Document "as-is" processes through stakeholder interviews and walkthroughs.' },
    { num: '02', title: 'Compare with SOPs', desc: 'Compare actual practices against documented SOPs, policies, and approval matrices.' },
    { num: '03', title: 'Sample Testing', desc: 'Perform sample testing of transactions and records to validate compliance.' },
    { num: '04', title: 'Identify Gaps', desc: 'Identify inefficiencies, redundancies, control gaps, and non-compliance.' },
    { num: '05', title: 'Quantify Impact', desc: 'Quantify operational and financial impact wherever possible.' },
    { num: '06', title: 'Recommend Improvements', desc: 'Recommend process improvements and control enhancements with follow-up monitoring.' },
  ],
  methodologyDescription: 'Our process audits evaluate end-to-end workflows across operational, financial, and compliance functions, with a focus on identifying inefficiencies, control gaps, and deviations from SOPs. The engagement results in practical recommendations to streamline operations and reinforce accountability.',
  
  services: [
    {
      title: 'Operational Process Audit',
      desc: 'Review of operational workflows, efficiency, and control effectiveness.',
      features: ['Workflow Analysis', 'Efficiency Assessment', 'Bottleneck Identification', 'Process Optimization'],
      icon: GitBranch,
    },
    {
      title: 'Financial Process Audit',
      desc: 'Audit of financial processes including procurement, billing, and collections.',
      features: ['Procurement Process', 'Billing Accuracy', 'Collection Efficiency', 'Payment Controls'],
      icon: BarChart3,
    },
    {
      title: 'Compliance Process Audit',
      desc: 'Assessment of compliance with internal policies and regulatory requirements.',
      features: ['Policy Adherence', 'Approval Controls', 'Documentation Compliance', 'SOP Validation'],
      icon: FileCheck,
    },
    {
      title: 'Supply Chain Process Audit',
      desc: 'End-to-end review of supply chain processes from procurement to delivery.',
      features: ['Vendor Management', 'Inventory Controls', 'Logistics Efficiency', 'Quality Checks'],
      icon: Workflow,
    },
  ],
  
  caseStudies: [
    {
      title: 'Process Audit – Manufacturing Sector',
      client: 'Mid-to-Large Manufacturing Company',
      desc: 'Comprehensive process audit across procurement, production planning, sales order management, and inventory identifying gaps in SOP adherence and process execution. Recommendations led to standardized documentation, clearer role ownership, streamlined dispatch and receivables, and increased ERP adoption reducing manual interventions.',
      tags: ['Manufacturing', 'Multi-Product Facility'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Hospitality Operations Audit',
      client: 'Hotel Operations',
      desc: 'Process audit of front office, housekeeping, F&B, and events uncovering workflow inefficiencies and control gaps leading to improved process consistency and better guest experience.',
      tags: ['Hospitality', 'Operations'],
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop',
    },
    {
      title: 'Retail Process Assessment',
      client: 'Multi-Store Retail Chain',
      desc: 'Process audit across inventory management, billing, and store operations resulting in standardized processes, reduced shrinkage, and improved operational efficiency.',
      tags: ['Retail', 'Multi-Location'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is a process audit and how is it different from internal audit?', a: 'Process audit focuses specifically on evaluating how work actually gets done versus how it should be done. It assesses end-to-end workflows, identifies inefficiencies, and validates compliance with SOPs. Internal audit has broader scope including financial controls and compliance.' },
    { q: 'What are the key benefits of process audit?', a: 'Key benefits include reduced operational inefficiencies and process-related risks, improved compliance with internal policies and regulatory requirements, clearer role ownership and authorization controls, and streamlined workflows leading to cost optimization.' },
    { q: 'Which sectors do you have process audit experience in?', a: 'We bring strong domain understanding of hospitality operations, manufacturing environments, and education institutions, enabling us to assess processes with sector-specific context and benchmarks.' },
    { q: 'How long does a process audit take?', a: 'Timelines vary based on process complexity and organizational size. Focused process audits typically take 3-5 weeks, while comprehensive multi-department audits may require 6-10 weeks.' },
    { q: 'Do you provide implementation support after process audit?', a: 'Yes, we monitor implementation through follow-up audits to ensure recommended improvements are actually adopted and delivering expected benefits.' },
    { q: 'Can you quantify the impact of process inefficiencies?', a: 'Yes, wherever possible we quantify operational and financial impact of inefficiencies to help prioritize improvement initiatives and build business case for change.' },
  ],
  
  ctaTitle: 'Ready to Optimize Your Processes?',
  ctaDescription: 'Partner with MARC for process audits that identify inefficiencies, strengthen controls, and drive operational excellence across your organization.',
}

export default function ProcessAuditPage() {
  return <ServicePageTemplate {...pageData} />
}
