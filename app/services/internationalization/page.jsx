'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Globe, Plane, Building2, FileCheck, MapPin, Users, TrendingUp, Shield } from 'lucide-react'

const pageData = {
  tagline: 'Internationalization',
  title: 'Expand Your Business',
  titleHighlight: 'Globally',
  description: 'End-to-end support for Indian companies expanding internationally and global companies entering India, from market assessment through operational setup.',
  
  stats: [
    { value: '30+', label: 'Countries Covered' },
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
      desc: 'Help international companies enter and grow in the Indian market.',
      features: ['Market Assessment', 'Partner Search', 'Setup Support'],
      icon: MapPin,
    },
    {
      title: 'Global Expansion',
      desc: 'Support Indian companies expanding to international markets.',
      features: ['Market Selection', 'Entry Strategy', 'Execution Support'],
      icon: Globe,
    },
    {
      title: 'Cross-border M&A',
      desc: 'Facilitate cross-border acquisitions and joint ventures.',
      features: ['Target Search', 'Due Diligence', 'Deal Execution'],
      icon: Building2,
    },
    {
      title: 'Regulatory & Compliance',
      desc: 'Navigate regulatory requirements for international operations.',
      features: ['FDI Compliance', 'Entity Setup', 'Ongoing Compliance'],
      icon: FileCheck,
    },
  ],
  
  caseStudies: [
    {
      title: 'European Market Entry',
      client: 'Indian Manufacturer',
      desc: 'Supported successful entry into European market through subsidiary setup and distributor network.',
      tags: ['Global Expansion', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?w=800',
    },
    {
      title: 'India Entry Strategy',
      client: 'US Technology Company',
      desc: 'Developed India market entry strategy and supported subsidiary establishment.',
      tags: ['India Entry', 'Technology'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
    {
      title: 'Cross-border Acquisition',
      client: 'European Industrial Group',
      desc: 'Advised on acquisition of Indian manufacturing company for market access.',
      tags: ['Cross-border M&A', 'FDI'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
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
