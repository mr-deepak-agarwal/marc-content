'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Search, Target, TrendingUp, BarChart3, Globe, Building2, PieChart, FileText } from 'lucide-react'

const pageData = {
  tagline: 'Market Research',
  title: 'Market Research in',
  titleHighlight: 'India',
  description: 'India is one of the world\'s fastest-growing economies—but also one of its most complex. Consumer behaviour, demand drivers, and regulations vary sharply across regions, making local market research in India critical for success.',

  stats: [
    { value: '500+', label: 'Research Projects' },
    { value: '30+', label: 'Countries Covered' },
    { value: '14+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ],

  valueProps: [
    { icon: Search, title: 'Decision-Ready Intelligence', desc: 'Deep on-ground primary research combined with rigorous analysis to identify high-potential opportunities.' },
    { icon: Target, title: 'Risk Reduction', desc: 'We reduce commercial, regulatory, and operational risk so you can enter and expand in Indian markets with confidence.' },
    { icon: TrendingUp, title: 'Local Expertise, Global Standards', desc: 'We work with investors, developers, manufacturers, and brands across sectors, delivering actionable market intelligence.' },
    { icon: BarChart3, title: 'Financial Feasibility', desc: 'Financial feasibility analysis including ROI, IRR, and NPV modelling to support go / no-go decisions.' },
  ],

  methodology: [
    { num: '01', title: 'Market Sizing', desc: 'Market sizing and growth assessment for Indian markets using bottom-up and top-down methodologies.' },
    { num: '02', title: 'Regulatory Analysis', desc: 'Regulatory and policy landscape analysis to map compliance requirements and constraints.' },
    { num: '03', title: 'Primary Research', desc: 'On-ground interviews with customers, distributors, manufacturers, and industry experts.' },
    { num: '04', title: 'Competitive Benchmarking', desc: 'Competitive and pricing benchmarking to identify market positioning opportunities.' },
    { num: '05', title: 'Financial Feasibility', desc: 'Financial feasibility analysis including ROI, IRR, and NPV modelling.' },
    { num: '06', title: 'Go / No-Go Recommendation', desc: 'Clear go / no-go and market entry recommendations with measurable impact.' },
  ],
  methodologyDescription: 'Our approach is designed to support real business decisions—not just reports. We deliver decision-ready market intelligence for India and global markets.',

  services: [
    {
      title: 'Land Feasibility Study',
      desc: 'Identify the most viable and profitable use of land by assessing market demand, demand–supply gaps, competition, regulatory constraints, and financial feasibility.',
      features: ['Market Demand Assessment', 'Demand–Supply Gap Analysis', 'Financial Feasibility'],
      icon: Building2,
    },
    {
      title: 'Product Feasibility Study',
      desc: 'Assess demand potential, pricing, competitor benchmarks, distribution fit, and scalability across regions before launching products.',
      features: ['Demand Validation', 'Pricing Benchmarks', 'Scalability Analysis'],
      icon: BarChart3,
    },
    {
      title: 'Demand–Supply Gap Analysis',
      desc: 'Identify genuine, underserved market gaps using bottom-up and top-down demand modelling validated through primary research.',
      features: ['Bottom-up Modelling', 'Top-down Modelling', 'Primary Research Validation'],
      icon: PieChart,
    },
    {
      title: 'Market Expansion Research',
      desc: 'Help businesses identify where to expand in India, at what scale, and with what strategy using precision research and location scoring.',
      features: ['Location Scoring', 'Scale Assessment', 'Expansion Strategy'],
      icon: TrendingUp,
    },
    {
      title: 'Market Entry Research',
      desc: 'Competitive and pricing landscape analysis, regulatory environment review, and market entry feasibility for new markets.',
      features: ['Competitor Benchmarking', 'Regulatory Review', 'Entry Feasibility'],
      icon: Target,
    },
    {
      title: 'International Market Research',
      desc: 'Support Indian companies expanding globally and act as a research backend for global consulting firms across multiple countries.',
      features: ['Global Market Sizing', 'Country Prioritisation', 'Go-to-Market Strategy'],
      icon: Globe,
    },
  ],

  caseStudies: [
    {
      title: 'Aviation Route Feasibility — Fly91',
      client: 'Regional Airline, India',
      desc: 'Evaluated demand–supply dynamics for four proposed flight routes including UDAN-supported virgin routes. Outcome: Clear go / no-go decisions and optimized route recommendations.',
      tags: ['Demand–Supply Gap Analysis', 'Aviation'],
      image: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?w=800',
    },
    {
      title: 'Market Expansion — ACC Alcon',
      client: 'Building Materials Manufacturer',
      desc: 'Evaluated two shortlisted locations for gypsum plaster expansion using primary research and location scoring models. Outcome: Selection of the optimal expansion location with recommended scale of operations.',
      tags: ['Market Expansion Research', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?w=800',
    },
    {
      title: 'Industrial & Commercial Land Development',
      client: 'Real Estate Developer, India',
      desc: 'Evaluated development options for land near a notified industrial estate, assessing sector demand, competitive intensity, regulatory feasibility, and financial returns. Outcome: A data-backed, regulation-compliant development strategy with superior return potential.',
      tags: ['Land Feasibility Study', 'Real Estate'],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?w=800',
    },
  ],

  faqs: [
    { q: 'Why is local market research in India so important?', a: 'India is highly diverse, with consumer behaviour, demand drivers, and regulations varying across states and regions. Local market research ensures businesses make decisions based on accurate, on-ground realities rather than assumptions.' },
    { q: 'What industries does MARC specialize in for market research?', a: 'We work across multiple sectors including real estate, aviation, agriculture, consumer goods, and retail—delivering sector-specific insights backed by primary research.' },
    { q: 'How does MARC conduct its market research?', a: 'Our approach combines primary research (interviews with customers, distributors, and industry experts) with secondary data analysis, competitive benchmarking, regulatory reviews, and financial feasibility studies to deliver decision-ready intelligence.' },
    { q: 'Can MARC support international companies entering India?', a: 'Yes. We specialize in market entry research and expansion strategies, helping global firms understand India\'s regulatory environment, consumer demand, and competitive landscape to successfully establish operations.' },
    { q: 'What makes MARC different from other market research firms?', a: 'Unlike generic reports, MARC delivers actionable insights with clear go/no-go recommendations, tailored strategies, and measurable impact. Our strength lies in combining deep local expertise with global standards of analysis.' },
  ],

  ctaTitle: 'Ready to Make Confident Market Decisions?',
  ctaDescription: 'We\'re ready to help you navigate India\'s complex markets with decision-ready intelligence, clear go/no-go recommendations, and strategies built for long-term growth.',
}

export default function MarketResearchPage() {
  return <ServicePageTemplate {...pageData} />
}