'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { FileCheck, MapPin, Building2, TrendingUp, Calculator, Target, Layers, PieChart } from 'lucide-react'

const pageData = {
  tagline: 'Feasibility Study',
  title: 'Validate Your Business Ideas with',
  titleHighlight: 'Data-Backed Analysis',
  description: 'Comprehensive feasibility studies to assess the viability of your business ventures, new projects, or market entry strategies before you commit significant resources.',
  
  stats: [
    { value: '200+', label: 'Feasibility Studies' },
    { value: '95%', label: 'Accuracy Rate' },
    { value: '₹5000Cr+', label: 'Investment Decisions' },
    { value: '50+', label: 'Industries Covered' },
  ],
  
  valueProps: [
    { icon: FileCheck, title: 'Risk Mitigation', desc: 'Identify potential challenges and risks before making major investment decisions.' },
    { icon: Calculator, title: 'Financial Clarity', desc: 'Detailed financial projections including ROI, IRR, NPV, and payback periods.' },
    { icon: Target, title: 'Market Validation', desc: 'Validate demand assumptions with real market data and customer insights.' },
    { icon: Building2, title: 'Operational Insights', desc: 'Assess operational requirements, regulatory compliance, and resource needs.' },
  ],
  
  methodology: [
    { num: '01', title: 'Scope Definition', desc: 'Define project parameters, objectives, and key success criteria for the feasibility assessment.' },
    { num: '02', title: 'Market Analysis', desc: 'Analyze market size, demand drivers, customer segments, and competitive landscape.' },
    { num: '03', title: 'Technical Assessment', desc: 'Evaluate technical requirements, operational feasibility, and infrastructure needs.' },
    { num: '04', title: 'Financial Modeling', desc: 'Build detailed financial models with revenue projections, cost estimates, and investment analysis.' },
    { num: '05', title: 'Risk Assessment', desc: 'Identify and quantify risks with mitigation strategies and sensitivity analysis.' },
    { num: '06', title: 'Recommendation Report', desc: 'Deliver comprehensive feasibility report with clear go/no-go recommendations.' },
  ],
  methodologyDescription: 'Our structured approach combines market research, financial analysis, and operational assessment to provide a complete picture of project viability.',
  
  services: [
    {
      title: 'Land & Real Estate Feasibility',
      desc: 'Determine optimal use of land parcels by assessing market potential, development costs, and regulatory requirements.',
      features: ['Highest & Best Use', 'Demand-Supply Gap', 'Financial Viability'],
      icon: MapPin,
    },
    {
      title: 'Product & Service Feasibility',
      desc: 'Evaluate market potential for new products or services including demand estimation and pricing strategy.',
      features: ['Market Sizing', 'Pricing Analysis', 'Go-to-Market Strategy'],
      icon: Layers,
    },
    {
      title: 'Project Feasibility',
      desc: 'Comprehensive assessment of new business projects covering technical, financial, and operational aspects.',
      features: ['Technical Viability', 'CAPEX/OPEX Analysis', 'Timeline Planning'],
      icon: Building2,
    },
    {
      title: 'Investment Feasibility',
      desc: 'Detailed investment analysis for investors and lenders including due diligence and risk assessment.',
      features: ['ROI/IRR Analysis', 'Sensitivity Analysis', 'Risk Quantification'],
      icon: PieChart,
    },
  ],
  
  caseStudies: [
    {
      title: 'Industrial Land Development',
      client: 'Real Estate Developer',
      desc: 'Identified viable industrial/commercial alternatives for land near industrial estate with superior ROI potential.',
      tags: ['Real Estate', 'Land Feasibility'],
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?w=800',
    },
    {
      title: 'Manufacturing Unit Setup',
      client: 'International Manufacturer',
      desc: 'End-to-end feasibility study for setting up manufacturing facility in India including location selection.',
      tags: ['Manufacturing', 'Market Entry'],
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=800',
    },
    {
      title: 'Hotel Project Viability',
      client: 'Hospitality Group',
      desc: 'Comprehensive feasibility assessment for boutique hotel development in emerging tourist destination.',
      tags: ['Hospitality', 'Project Feasibility'],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What types of feasibility studies does MARC conduct?', a: 'We conduct land/real estate feasibility, product feasibility, project feasibility, and investment feasibility studies across diverse sectors and project types.' },
    { q: 'How detailed are the financial projections?', a: 'Our financial models include detailed revenue forecasts, cost breakdowns, cash flow projections, ROI/IRR calculations, sensitivity analysis, and scenario planning.' },
    { q: 'Do you help with regulatory compliance assessment?', a: 'Yes, we assess regulatory requirements, permits, licenses, and compliance needs as part of our feasibility studies.' },
    { q: 'Can feasibility studies be used for bank financing?', a: 'Absolutely. Our feasibility reports are comprehensive and meet the requirements of banks and financial institutions for project financing.' },
  ],
  
  ctaTitle: 'Validate Your Next Big Decision',
  ctaDescription: 'Get clarity on project viability before committing resources. Partner with MARC for data-driven feasibility analysis.',
}

export default function FeasibilityStudyPage() {
  return <ServicePageTemplate {...pageData} />
}
