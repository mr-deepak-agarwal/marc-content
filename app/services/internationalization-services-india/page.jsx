'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Globe, Plane, Building2, FileCheck, MapPin, Users, TrendingUp, Shield } from 'lucide-react'

const pageData = {
  tagline: 'Internationalization',
  title: 'Expand Your Business',
  titleHighlight: 'Globally',
  description: 'End-to-end support for Indian companies expanding internationally and global companies entering India, from market assessment through operational setup.',
  
  stats: [
    { value: '5', label: 'Continents served' },
    { value: '100+', label: 'Market Entry Projects' },
    { value: '₹5,000Cr+', label: 'Investments Facilitated' },
    { value: '95%', label: 'Success Rate' },
  ],
  
  valueProps: [
    { icon: Globe, title: 'Global Reach', desc: 'Deep expertise across major markets in Americas, Europe, Asia, and Middle East.' },
    { icon: MapPin, title: 'Local Knowledge', desc: 'On-ground intelligence and local partner networks in target markets.' },
    { icon: Shield, title: 'Risk Mitigation', desc: 'Navigate regulatory, cultural, and operational complexities.' },
    { icon: TrendingUp, title: 'Growth Enablement', desc: 'Structured approach to international expansion success.' },
  ],
  
  methodology: [
    { num: '01', title: 'Market Assessment', desc: 'Evaluate target markets for demand, competition, and entry barriers.' },
    { num: '02', title: 'Entry Strategy', desc: 'Define optimal entry mode - export, partnership, subsidiary, or acquisition.' },
    { num: '03', title: 'Regulatory Navigation', desc: 'Navigate regulatory requirements, permits, and compliance needs.' },
    { num: '04', title: 'Partner Identification', desc: 'Identify and evaluate potential local partners, distributors, or targets.' },
    { num: '05', title: 'Setup Support', desc: 'Support entity formation, team building, and operational setup.' },
    { num: '06', title: 'Go-to-Market', desc: 'Launch market entry with sales, marketing, and distribution setup.' },
  ],
  methodologyDescription: 'We provide comprehensive support from initial market assessment through successful market entry and growth.',
  
  services: [
    {
      title: 'India Entry Services',
      desc: 'Support international companies in entering and scaling in India through data-backed market assessment, regulatory navigation, partner identification, and on-ground setup execution.',
      features: ['Market Assessment', 'Partner Search', 'Setup Support'],
      icon: MapPin,
    },
    {
      title: 'Global Expansion',
      desc: 'Enable Indian companies to expand into global markets through structured market selection, entry strategy design, and execution support.',
      features: ['Market Selection', 'Entry Strategy', 'Execution Support'],
      icon: Globe,
    },
    {
      title: 'Cross border M&A',
      desc: 'Facilitate Cross border acquisitions and joint ventures through structured target identification, commercial and financial due diligence, and end-to-end deal execution',
      features: ['Target Search', 'Due Diligence', 'Deal Execution'],
      icon: Building2,
    },
    {
      title: 'Regulatory & Compliance',
      desc: 'Support international operations by navigating regulatory frameworks, FDI norms, and entity setup requirements.',
      features: ['FDI Compliance', 'Entity Setup', 'Ongoing Compliance'],
      icon: FileCheck,
    },
  ],
  
  caseStudies: [
  {
    industry: 'Engineering Services',
    service: 'Global Expansion',
    client: 'India-Based Engineering Services Provider — International Expansion',
    challenge: 'An India-based precast concrete design firm wanted to expand internationally but lacked clarity on which overseas markets to prioritise and how to structure entry.',
    solution: 'MARC assessed regional demand across continents, built a structured rating matrix covering market landscape, regulatory environment, and commercial attractiveness to shortlist the top 3 markets. Designed country-specific go-to-market strategies and evaluated adjacent sectors for portfolio expansion.',
    result: 'Delivered a clear primary launch market, a secondary expansion market, a sector-prioritisation matrix, and a list of probable customers — giving the client a decision-ready roadmap for international growth.',
  },
  {
    industry: 'Electronics Manufacturing',
    service: 'Market Entry Strategy',
    client: 'India-Based Electronics Components Manufacturer — Global Market Entry',
    challenge: 'An electronics manufacturing firm supplying automotive and industrial components wanted to establish an international manufacturing and market presence but needed data-backed country selection.',
    solution: 'MARC assessed market size, tech adoption, and ease of doing business across regions; mapped global competitors, distributors, and key buyers; and developed a weighted scoring matrix to rank countries. Evaluated entity setup options, certifications, tax/tariff implications, and initial capital investment for shortlisted markets.',
    result: 'Identified a Primary market for immediate entry and a Secondary market for near-term expansion, with recommended entry models (distributor, agent, JV, or direct sales) tailored to each market.',
  },
  {
    industry: 'Defence',
    service: 'Sector Research',
    client: 'Global Defence Sector — Investment Opportunity Assessment',
    challenge: 'A client evaluating the global defence sector as a potential investment opportunity needed a structured, decision-ready view of market sizing, growth potential, and emerging verticals.',
    solution: 'MARC covered market sizing, military spending trends, and key global player mapping across the USA, Canada, and Israel. Identified high-growth verticals including AI/ML military devices, advanced air mobility, and robotics/automation.',
    result: 'Delivered a comprehensive investment-ready analysis of the global defence sector with insights on rising defence budgets, emerging tech trends, and strategic developments shaping key regional markets.',
  },
],
  
  faqs: [
    { q: 'Which markets do you cover?', a: 'We have expertise across major markets including USA, Europe, Middle East, Southeast Asia, and Africa, with particular depth in markets relevant for Indian businesses.' },
    { q: 'Can you help find local partners?', a: 'Yes, partner search and evaluation is a key service. We identify, screen, and help evaluate potential distributors, JV partners, or acquisition targets.' },
    { q: 'Do you help with regulatory compliance?', a: 'Absolutely. We navigate FDI regulations, entity formation requirements, tax implications, and ongoing compliance needs.' },
    { q: 'How long does market entry typically take?', a: 'Timeline varies by market and entry mode. Export setup may take 3-6 months while subsidiary formation typically takes 6-12 months.' },
  ],
  
  ctaTitle: 'Ready to Go Global?',
  ctaDescription: 'Partner with MARC to navigate international expansion with confidence and expert support.',
}

export default function InternationalizationPage() {
  return <ServicePageTemplate {...pageData} />
}
