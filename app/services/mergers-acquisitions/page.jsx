'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Handshake, TrendingUp, Building2, Globe, Search, Scale, FileCheck, Users } from 'lucide-react'

const pageData = {
  tagline: 'Mergers & Acquisitions',
  title: 'Strategic M&A Advisory for',
  titleHighlight: 'Value Creation',
  description: 'Comprehensive M&A advisory services covering due diligence, valuation, and deal execution to help you navigate complex transactions with confidence.',
  
  stats: [
    { value: '200+', label: 'M&A Transactions' },
    { value: '₹30,000Cr+', label: 'Deal Value Advised' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'PE/VC Clients' },
  ],
  
  valueProps: [
    { icon: Search, title: 'Due Diligence', desc: 'Thorough investigation to uncover risks and validate assumptions.' },
    { icon: Scale, title: 'Valuation', desc: 'Independent, defensible valuations supporting deal decisions.' },
    { icon: Handshake, title: 'Deal Advisory', desc: 'End-to-end transaction support from strategy to closure.' },
    { icon: TrendingUp, title: 'Value Creation', desc: 'Focus on deals that create genuine strategic value.' },
  ],
  
  methodology: [
    { num: '01', title: 'Strategy Definition', desc: 'Align M&A strategy with corporate objectives and growth plans.' },
    { num: '02', title: 'Target/Buyer Search', desc: 'Identify and evaluate potential targets or acquirers.' },
    { num: '03', title: 'Due Diligence', desc: 'Comprehensive due diligence covering financial, commercial, and operational aspects.' },
    { num: '04', title: 'Valuation', desc: 'Independent valuation using multiple methodologies.' },
    { num: '05', title: 'Deal Structuring', desc: 'Structure transaction for optimal value and risk allocation.' },
    { num: '06', title: 'Execution & Closure', desc: 'Navigate negotiations and documentation through deal closure.' },
  ],
  methodologyDescription: 'Our team brings Big 4 experience and sector expertise to deliver M&A advisory that protects your interests and maximizes value.',
  
  services: [
    {
      title: 'Due Diligence',
      desc: 'Financial, commercial, and operational due diligence for informed decisions.',
      features: ['Financial DD', 'Commercial DD', 'Operational Review'],
      icon: Search,
    },
    {
      title: 'Valuation Advisory',
      desc: 'Independent valuations for transactions, disputes, and compliance.',
      features: ['Business Valuation', 'Intangible Assets', 'Fairness Opinion'],
      icon: Scale,
    },
    {
      title: 'Deal Advisory',
      desc: 'Buy-side and sell-side advisory through complete transaction lifecycle.',
      features: ['Buy-side', 'Sell-side', 'Deal Structuring'],
      icon: Handshake,
    },
    {
      title: 'Integration Support',
      desc: 'Post-merger integration planning and synergy realization.',
      features: ['Integration Planning', '100-Day Plan', 'Synergy Tracking'],
      icon: Users,
    },
  ],
  
  caseStudies: [
    {
      title: 'PE Portfolio Acquisition',
      client: 'Private Equity Fund',
      desc: 'Comprehensive due diligence and valuation for ₹800Cr platform acquisition.',
      tags: ['Private Equity', 'Due Diligence'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Strategic Divestiture',
      client: 'Industrial Conglomerate',
      desc: 'Managed sale of non-core business achieving 20% premium to initial offers.',
      tags: ['Sell-side', 'Divestiture'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Cross-border Transaction',
      client: 'International Investor',
      desc: 'Supported India entry through acquisition with comprehensive due diligence.',
      tags: ['Cross-border', 'India Entry'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What types of M&A transactions do you handle?', a: 'We advise on strategic acquisitions, PE/VC investments, divestitures, mergers, joint ventures, and cross-border transactions.' },
    { q: 'Do you work with private equity?', a: 'Yes, we have extensive experience supporting PE/VC funds with due diligence, valuation, and deal execution.' },
    { q: 'What industries do you cover?', a: 'We have M&A experience across manufacturing, consumer, healthcare, technology, infrastructure, and services sectors.' },
    { q: 'Can you help find acquisition targets?', a: 'Yes, we support buy-side clients with target identification, screening, and approach as part of our deal origination services.' },
  ],
  
  ctaTitle: 'Planning a Transaction?',
  ctaDescription: 'Partner with MARC for M&A advisory that protects your interests and maximizes transaction value.',
}

export default function MergersAcquisitionsPage() {
  return <ServicePageTemplate {...pageData} />
}
