'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Users, Heart, Award, TrendingUp, UserCheck, FileText, Building2, Target } from 'lucide-react'

const pageData = {
  tagline: 'HR Advisory',
  title: 'Build High-Performing Teams with',
  titleHighlight: 'Strategic HR',
  description: 'Comprehensive HR advisory services to help organizations attract, develop, and retain talent while building people practices that drive business performance.',
  
  stats: [
    { value: '80+', label: 'HR Projects' },
    { value: '30%', label: 'Avg. Retention Improvement' },
    { value: '50+', label: 'Organizations Served' },
    { value: '10,000+', label: 'Employees Impacted' },
  ],
  
  valueProps: [
    { icon: Users, title: 'Talent Strategy', desc: 'Attract and retain top talent with competitive HR practices.' },
    { icon: Award, title: 'Performance Culture', desc: 'Build performance-driven culture with effective systems.' },
    { icon: Heart, title: 'Employee Engagement', desc: 'Create engaging workplaces that inspire and motivate.' },
    { icon: TrendingUp, title: 'Organizational Growth', desc: 'Scale HR practices to support business growth.' },
  ],
  
  methodology: [
    { num: '01', title: 'HR Diagnostic', desc: 'Assess current HR practices, policies, and organizational health.' },
    { num: '02', title: 'Benchmarking', desc: 'Compare practices against industry standards and best practices.' },
    { num: '03', title: 'Strategy Development', desc: 'Develop HR strategy aligned with business objectives.' },
    { num: '04', title: 'Policy Design', desc: 'Design HR policies, processes, and systems.' },
    { num: '05', title: 'Implementation', desc: 'Support implementation of new HR initiatives and systems.' },
    { num: '06', title: 'Change Management', desc: 'Drive adoption through communication and change management.' },
  ],
  methodologyDescription: 'We combine HR expertise with business acumen to build people practices that drive organizational success.',
  
  services: [
    {
      title: 'HR Strategy & Planning',
      desc: 'Develop comprehensive HR strategy aligned with business goals and growth plans.',
      features: ['Workforce Planning', 'HR Roadmap', 'Budget Planning'],
      icon: Target,
    },
    {
      title: 'Compensation & Benefits',
      desc: 'Design competitive compensation structures and benefit programs.',
      features: ['Salary Benchmarking', 'Incentive Design', 'Benefits Strategy'],
      icon: Award,
    },
    {
      title: 'Performance Management',
      desc: 'Build performance management systems that drive results and development.',
      features: ['Goal Setting', 'Review Process', 'Feedback Systems'],
      icon: TrendingUp,
    },
    {
      title: 'Organization Design',
      desc: 'Design organization structures that enable efficiency and growth.',
      features: ['Structure Design', 'Role Definition', 'Span of Control'],
      icon: Building2,
    },
  ],
  
  caseStudies: [
    {
      title: 'HR Transformation',
      client: 'Manufacturing Company',
      desc: 'Complete HR transformation including policy redesign and HRIS implementation.',
      tags: ['Manufacturing', 'HR Transformation'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Compensation Restructuring',
      client: 'IT Services Company',
      desc: 'Redesigned compensation structure resulting in improved retention and competitiveness.',
      tags: ['Technology', 'Compensation'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Performance System Design',
      client: 'Financial Services',
      desc: 'Implemented new performance management system aligned with business KPIs.',
      tags: ['Finance', 'Performance'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What size companies do you work with?', a: 'We work with companies of all sizes from startups building first HR practices to large enterprises transforming existing systems.' },
    { q: 'Do you help with HR technology selection?', a: 'Yes, we can help evaluate, select, and implement HR technology solutions including HRIS and payroll systems.' },
    { q: 'Can you help with compliance?', a: 'Absolutely. We ensure HR practices comply with labor laws and regulatory requirements.' },
    { q: 'Do you provide interim HR support?', a: 'Yes, we can provide interim HR leadership and support during transitions or for specific projects.' },
  ],
  
  ctaTitle: 'Ready to Transform Your HR?',
  ctaDescription: 'Partner with MARC to build HR practices that attract talent, drive performance, and support growth.',
}

export default function HRAdvisoryPage() {
  return <ServicePageTemplate {...pageData} />
}
