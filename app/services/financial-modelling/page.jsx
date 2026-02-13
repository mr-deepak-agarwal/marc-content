'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Calculator, FileText, TrendingUp, PieChart, Building2, BarChart3, DollarSign, Target } from 'lucide-react'

const pageData = {
  tagline: 'Financial Modelling',
  title: 'Strategic Financial Models for',
  titleHighlight: 'Informed Decisions',
  description: 'Robust financial models and project reports that support investment decisions, fundraising, strategic planning, and business case development.',
  
  stats: [
    { value: '250+', label: 'Financial Models' },
    { value: '₹15,000Cr+', label: 'Deals Supported' },
    { value: '50+', label: 'Banks & Investors' },
    { value: '99%', label: 'Model Accuracy' },
  ],
  
  valueProps: [
    { icon: Calculator, title: 'Precision Modeling', desc: 'Detailed financial models built with rigorous assumptions and validation.' },
    { icon: FileText, title: 'Investor-Ready Reports', desc: 'Professional project reports meeting bank and investor requirements.' },
    { icon: TrendingUp, title: 'Scenario Analysis', desc: 'Multiple scenarios to understand risks and opportunities.' },
    { icon: Target, title: 'Decision Support', desc: 'Clear insights to support strategic and investment decisions.' },
  ],
  
  methodology: [
    { num: '01', title: 'Requirement Understanding', desc: 'Define model objectives, key questions to answer, and stakeholder requirements.' },
    { num: '02', title: 'Assumption Development', desc: 'Develop robust assumptions based on market research and industry benchmarks.' },
    { num: '03', title: 'Model Architecture', desc: 'Design model structure with clear logic, inputs, calculations, and outputs.' },
    { num: '04', title: 'Model Building', desc: 'Build detailed financial model with projections, sensitivities, and scenarios.' },
    { num: '05', title: 'Validation & Testing', desc: 'Rigorous testing and validation to ensure accuracy and reliability.' },
    { num: '06', title: 'Documentation & Training', desc: 'Document assumptions, provide user guide, and train stakeholders.' },
  ],
  methodologyDescription: 'We build financial models that are not just technically sound but also practical, flexible, and aligned with decision-making needs.',
  
  services: [
    {
      title: 'Business Financial Models',
      desc: 'Integrated financial models for business planning, budgeting, and strategic decisions.',
      features: ['P&L Projections', 'Cash Flow', 'Balance Sheet'],
      icon: Calculator,
    },
    {
      title: 'Project Finance Models',
      desc: 'Detailed project finance models for capital projects, infrastructure, and real estate.',
      features: ['Project Economics', 'Debt Structuring', 'Returns Analysis'],
      icon: Building2,
    },
    {
      title: 'Valuation Models',
      desc: 'DCF, comparable, and transaction-based valuation models for M&A and investments.',
      features: ['DCF Valuation', 'Multiples Analysis', 'Sensitivity'],
      icon: PieChart,
    },
    {
      title: 'Project Reports',
      desc: 'Comprehensive project reports for bank financing and investor presentations.',
      features: ['Techno-Economic', 'CMA Data', 'DPR'],
      icon: FileText,
    },
  ],
  
  caseStudies: [
    {
      title: 'Infrastructure Project Model',
      client: 'Infrastructure Developer',
      desc: 'Built comprehensive financial model for ₹1,000Cr highway project supporting bank financing.',
      tags: ['Infrastructure', 'Project Finance'],
      image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?w=800',
    },
    {
      title: 'Startup Fundraising Model',
      client: 'Technology Startup',
      desc: 'Developed investor-ready financial model supporting successful Series A fundraise.',
      tags: ['Technology', 'Fundraising'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Real Estate Project DPR',
      client: 'Real Estate Developer',
      desc: 'Prepared detailed project report for mixed-use development supporting bank approval.',
      tags: ['Real Estate', 'Project Report'],
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What types of financial models do you build?', a: 'We build business models, project finance models, valuation models, LBO models, and custom models for specific decision-making needs.' },
    { q: 'Are your models accepted by banks?', a: 'Yes, our models and project reports are designed to meet requirements of major banks and financial institutions.' },
    { q: 'Do you provide model training?', a: 'Yes, we provide training to help your team understand, use, and update the financial models.' },
    { q: 'Can you update existing models?', a: 'Absolutely. We can review, audit, and update existing financial models to improve accuracy and usability.' },
  ],
  
  ctaTitle: 'Need a Financial Model?',
  ctaDescription: 'Partner with MARC for robust financial models that support confident investment and strategic decisions.',
}

export default function FinancialModellingPage() {
  return <ServicePageTemplate {...pageData} />
}
