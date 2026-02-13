'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Search, Target, TrendingUp, Shield, PieChart, Users, BarChart3, Globe } from 'lucide-react'

const pageData = {
  tagline: 'Market Research',
  title: 'Data-Driven Insights for',
  titleHighlight: 'Confident Decisions',
  description: 'Comprehensive market research and analysis to help you understand your market, identify opportunities, and make strategic decisions with clarity and confidence.',
  
  stats: [
    { value: '500+', label: 'Research Projects' },
    { value: '30+', label: 'Countries Covered' },
    { value: '14+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
  
  valueProps: [
    { icon: Shield, title: 'Minimize Risk', desc: 'Validate market demand, feasibility, and competitive intensity before major investments.' },
    { icon: TrendingUp, title: 'Unlock Growth', desc: 'Identify underserved segments, emerging opportunities, and high-potential markets.' },
    { icon: Target, title: 'Strategic Clarity', desc: 'Reliable insights on market sizing, consumer behavior, and industry dynamics.' },
    { icon: Globe, title: 'Global Reach', desc: 'Research capabilities spanning India and 30+ international markets.' },
  ],
  
  methodology: [
    { num: '01', title: 'Industry Assessment', desc: 'In-depth analysis of market size, growth potential, key segments, and regulatory frameworks.' },
    { num: '02', title: 'Primary Research', desc: 'On-ground research with distributors, customers, and industry experts for real-time validation.' },
    { num: '03', title: 'Competitive Intelligence', desc: 'Comprehensive competitor analysis covering offerings, pricing, positioning, and market share.' },
    { num: '04', title: 'Customer Segmentation', desc: 'Integrate research to segment customers and identify attractive target segments.' },
    { num: '05', title: 'Data Analytics', desc: 'Advanced analytics to uncover patterns, trends, and actionable insights from data.' },
    { num: '06', title: 'Strategic Recommendations', desc: 'Translate insights into actionable strategies with clear implementation roadmaps.' },
  ],
  methodologyDescription: 'We combine deep sector expertise with strong on-ground intelligence to deliver insights that drive confident business decisions.',
  
  services: [
    {
      title: 'Market Sizing & Opportunity Assessment',
      desc: 'Determine total addressable market, serviceable market, and growth potential for your products or services.',
      features: ['TAM/SAM/SOM Analysis', 'Growth Projections', 'Opportunity Mapping'],
      icon: PieChart,
    },
    {
      title: 'Consumer & Customer Research',
      desc: 'Understand your target audience through surveys, interviews, and behavioral analysis.',
      features: ['Survey Design', 'Focus Groups', 'Behavioral Analysis'],
      icon: Users,
    },
    {
      title: 'Competitive Landscape Analysis',
      desc: 'Map the competitive environment including market shares, strategies, and positioning.',
      features: ['Competitor Profiling', 'SWOT Analysis', 'Market Share'],
      icon: BarChart3,
    },
    {
      title: 'Industry & Sector Research',
      desc: 'Deep-dive into industry trends, dynamics, value chains, and future outlook.',
      features: ['Trend Analysis', 'Value Chain', 'Regulatory Review'],
      icon: Search,
    },
  ],
  
  caseStudies: [
    {
      title: 'Aviation Route Viability Study',
      client: 'Regional Airline',
      desc: 'Assessed viability of launching flights on multiple routes with demand-supply dynamics analysis.',
      tags: ['Aviation', 'Demand Analysis'],
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?w=800',
    },
    {
      title: 'FMCG Market Entry',
      client: 'Consumer Goods Company',
      desc: 'Comprehensive market research for new product category entry in Indian market.',
      tags: ['FMCG', 'Market Entry'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    },
    {
      title: 'Healthcare Expansion Study',
      client: 'Hospital Chain',
      desc: 'Location analysis and demand assessment for multi-city hospital expansion.',
      tags: ['Healthcare', 'Expansion'],
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'What industries does MARC cover for market research?', a: 'We cover diverse sectors including real estate, manufacturing, aviation, FMCG, healthcare, technology, hospitality, and more. Our sector-agnostic approach ensures deep insights regardless of industry.' },
    { q: 'How long does a typical market research project take?', a: 'Project timelines vary based on scope. A focused study may take 4-6 weeks, while comprehensive research can span 8-12 weeks depending on complexity.' },
    { q: 'Do you provide both primary and secondary research?', a: 'Yes, we combine robust secondary research with extensive primary research including stakeholder interviews, surveys, and on-ground intelligence.' },
    { q: 'Can MARC support international market research?', a: 'Absolutely. We have conducted research across 30+ countries, supporting Indian companies in global expansion and international investors entering India.' },
  ],
  
  ctaTitle: 'Ready to Make Informed Decisions?',
  ctaDescription: 'Partner with MARC for market research that delivers clarity, confidence, and actionable strategies.',
}

export default function MarketResearchPage() {
  return <ServicePageTemplate {...pageData} />
}
