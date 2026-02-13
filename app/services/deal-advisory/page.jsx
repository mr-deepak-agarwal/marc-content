'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Handshake, Target, TrendingUp, Users, Search, FileText, Building2, Scale, CheckCircle, Award } from 'lucide-react'

const pageData = {
  tagline: 'Deal Advisory Services | India & Global',
  title: 'Expert Guidance Across the',
  titleHighlight: 'Deal Life Cycle',
  description: 'MARC is a trusted Deal Advisory and M&A consulting firm supporting domestic and cross-border transactions. We work closely with promoters, investors, family offices, private equity funds, and corporates to manage complexity, reduce execution risk, and deliver successful outcomes across mergers, acquisitions, divestments, joint ventures, and strategic investments.',
  
  stats: [
    { value: '100+', label: 'Deals Advised' },
    { value: '₹15,000Cr+', label: 'Deal Value' },
    { value: '85%', label: 'Deal Success Rate' },
    { value: '50+', label: 'Cross-border Deals' },
  ],
  
  valueProps: [
    { icon: Handshake, title: 'Holistic Approach', desc: 'Strong understanding of business fundamentals, industry dynamics, and regulatory frameworks across India and global markets.' },
    { icon: Target, title: 'Execution-First Mindset', desc: 'Focus on deal certainty and sustainable post-transaction outcomes with structured execution.' },
    { icon: TrendingUp, title: 'Cross-Border Expertise', desc: 'Experience across sectors and transaction sizes in both domestic and international markets.' },
    { icon: Scale, title: 'Post-Closure Support', desc: 'Involvement extends beyond signing with transition and stabilisation support.' },
  ],
  
  methodology: [
    { num: '01', title: 'Transaction Strategy', desc: 'Define clear and executable transaction strategy aligned with business objectives.' },
    { num: '02', title: 'Deal Preparation', desc: 'Prepare business plans, teasers, and Information Memorandums for investor readiness.' },
    { num: '03', title: 'Investor Engagement', desc: 'Identify and engage strategic investors, buyers, and partners in India and overseas.' },
    { num: '04', title: 'Valuation & Negotiation', desc: 'Support valuation assessment and commercial negotiations for optimal outcomes.' },
    { num: '05', title: 'Due Diligence', desc: 'Coordinate financial, commercial, and operational due diligence processes.' },
    { num: '06', title: 'Deal Closure', desc: 'Review transaction documentation, facilitate closure and fund flows, provide post-transaction support.' },
  ],
  methodologyDescription: 'M&A transactions offer powerful opportunities to scale operations, strengthen capabilities, enter new markets, and create long-term value. Realising these outcomes requires disciplined preparation, informed decision-making, and structured execution. MARC supports clients at every stage of the transaction journey with clarity, confidence, and an execution-first mindset.',
  
  services: [
    {
      title: 'M&A Readiness',
      desc: 'Prepare businesses for buyer and investor scrutiny before entering transaction process.',
      features: ['Financial & Earnings Readiness', 'Working Capital & Cash Flow Discipline', 'Operational & Organisational Readiness', 'Documentation & Diligence Preparedness'],
      icon: CheckCircle,
    },
    {
      title: 'Buy-side Advisory',
      desc: 'Support acquirers through target identification, due diligence, and deal execution.',
      features: ['Target Screening', 'Deal Structuring', 'Negotiation Support', 'Integration Planning'],
      icon: Search,
    },
    {
      title: 'Sell-side Advisory',
      desc: 'Help sellers achieve optimal outcomes through structured sale processes.',
      features: ['Buyer Identification', 'Process Management', 'Value Maximization', 'Transaction Documentation'],
      icon: Building2,
    },
    {
      title: 'Transaction Structuring',
      desc: 'Design optimal deal structures considering tax, legal, and commercial aspects.',
      features: ['Structure Optimization', 'Tax Planning', 'Risk Allocation', 'Documentation Review'],
      icon: FileText,
    },
  ],
  
  caseStudies: [
    {
      title: 'Strategic Acquisition',
      client: 'Industrial Group',
      desc: 'Advised on ₹400Cr strategic acquisition expanding manufacturing capabilities.',
      tags: ['Buy-side', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?w=800',
    },
    {
      title: 'Business Divestiture',
      client: 'Diversified Conglomerate',
      desc: 'Managed sale process for non-core business division to strategic buyer.',
      tags: ['Sell-side', 'Divestiture'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Cross-border M&A',
      client: 'International Corporation',
      desc: 'Supported cross-border acquisition of Indian company by international buyer.',
      tags: ['Cross-border', 'FDI'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What is Deal Advisory?', a: 'Deal Advisory involves professional support for buying or selling a company\'s shares or assets. This includes mergers, acquisitions, divestments, strategic investments, and joint ventures.' },
    { q: 'Do you work on both buy-side and sell-side?', a: 'Yes, we provide advisory services to both buyers and sellers, though never on the same transaction to avoid conflicts.' },
    { q: 'What size deals do you handle?', a: 'We work on deals ranging from ₹10Cr to ₹1,000Cr+, with particular strength in mid-market and promoter-led transactions.' },
    { q: 'What is M&A Readiness and why is it important?', a: 'M&A readiness is critical for Indian mid-market and promoter-led businesses where informal processes and key-person dependency are common. We help businesses prepare for buyer and investor scrutiny through early risk identification, proactive gap closure, and alignment with institutional and cross-border buyer expectations.' },
    { q: 'Do you help find targets or buyers?', a: 'Yes, we support target identification for acquirers and buyer identification for sellers as part of our deal origination services, both in India and overseas.' },
    { q: 'What industries do you cover?', a: 'We have deal experience across manufacturing, consumer, healthcare, technology, infrastructure, hospitality, and financial services sectors.' },
  ],
  
  ctaTitle: 'Planning a Transaction?',
  ctaDescription: 'Partner with MARC for expert deal advisory that reduces execution risk and delivers successful outcomes across mergers, acquisitions, and strategic investments.',
}

export default function DealAdvisoryPage() {
  return <ServicePageTemplate {...pageData} />
}
