'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Compass, Target, TrendingUp, Lightbulb, BarChart3, Users, Rocket, Award } from 'lucide-react'

const pageData = {
  tagline: 'Strategy Consulting',
  title: 'Transform Vision into',
  titleHighlight: 'Actionable Strategy',
  description: 'Strategic advisory services that help organizations define their path to growth, optimize operations, and build sustainable competitive advantages in dynamic markets.',
  
  stats: [
    { value: '300+', label: 'Strategy Projects' },
    { value: '85%', label: 'Implementation Success' },
    { value: '₹10,000Cr+', label: 'Value Created' },
    { value: '100+', label: 'Companies Transformed' },
  ],
  
  valueProps: [
    { icon: Compass, title: 'Strategic Direction', desc: 'Clear roadmaps that align business objectives with market opportunities.' },
    { icon: Target, title: 'Focused Execution', desc: 'Actionable plans with defined milestones, KPIs, and accountability.' },
    { icon: TrendingUp, title: 'Sustainable Growth', desc: 'Strategies designed for long-term value creation and market leadership.' },
    { icon: Award, title: 'Competitive Edge', desc: 'Build differentiated positioning and defensible market advantages.' },
  ],
  
  methodology: [
    { num: '01', title: 'Diagnostic Assessment', desc: 'Deep-dive into current state, capabilities, market position, and competitive dynamics.' },
    { num: '02', title: 'Opportunity Mapping', desc: 'Identify growth opportunities, market gaps, and strategic options for expansion.' },
    { num: '03', title: 'Strategy Formulation', desc: 'Develop comprehensive strategy with clear objectives, initiatives, and resource allocation.' },
    { num: '04', title: 'Business Modeling', desc: 'Build robust business models with financial projections and scenario planning.' },
    { num: '05', title: 'Implementation Planning', desc: 'Create detailed implementation roadmap with timelines, responsibilities, and milestones.' },
    { num: '06', title: 'Execution Support', desc: 'Ongoing support to ensure successful strategy execution and course correction.' },
  ],
  methodologyDescription: 'We combine analytical rigor with practical business sense to develop strategies that are both ambitious and achievable.',
  
  services: [
    {
      title: 'Corporate Strategy',
      desc: 'Define long-term strategic direction, portfolio strategy, and capital allocation priorities.',
      features: ['Vision & Mission', 'Portfolio Strategy', 'Growth Roadmap'],
      icon: Compass,
    },
    {
      title: 'Growth Strategy',
      desc: 'Identify and prioritize growth opportunities including market expansion, new products, and M&A.',
      features: ['Market Expansion', 'New Products', 'Inorganic Growth'],
      icon: TrendingUp,
    },
    {
      title: 'Go-to-Market Strategy',
      desc: 'Develop market entry and expansion strategies with channel, pricing, and positioning plans.',
      features: ['Channel Strategy', 'Pricing Strategy', 'Market Entry'],
      icon: Rocket,
    },
    {
      title: 'Business Transformation',
      desc: 'Drive organizational transformation to improve performance and build future-ready capabilities.',
      features: ['Operating Model', 'Process Excellence', 'Change Management'],
      icon: Lightbulb,
    },
  ],
  
  caseStudies: [
    {
      title: '5-Year Growth Strategy',
      client: 'Manufacturing Conglomerate',
      desc: 'Developed comprehensive growth strategy resulting in 3x revenue growth over 5 years.',
      tags: ['Corporate Strategy', 'Manufacturing'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800',
    },
    {
      title: 'Market Expansion Plan',
      client: 'Retail Chain',
      desc: 'Created expansion strategy for pan-India presence with 50+ new stores over 3 years.',
      tags: ['Growth Strategy', 'Retail'],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800',
    },
    {
      title: 'Digital Transformation',
      client: 'Financial Services',
      desc: 'Led strategic transformation program to build digital-first customer experience.',
      tags: ['Transformation', 'Financial Services'],
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    },
  ],
  
  faqs: [
    { q: 'How is strategy consulting different from management consulting?', a: 'Strategy consulting focuses on high-level strategic decisions like market entry, growth direction, and competitive positioning, while management consulting often addresses operational improvements.' },
    { q: 'How long does a strategy engagement typically take?', a: 'Most strategy projects span 8-16 weeks depending on scope, though we also offer rapid strategy sprints for focused questions.' },
    { q: 'Do you help with implementation?', a: 'Yes, we offer implementation support services to help translate strategy into action and ensure successful execution.' },
    { q: 'What industries do you specialize in?', a: 'We work across industries including manufacturing, retail, healthcare, technology, hospitality, and financial services.' },
  ],
  
  ctaTitle: 'Ready to Chart Your Growth Path?',
  ctaDescription: 'Partner with MARC to develop strategies that drive sustainable growth and competitive advantage.',
}

export default function StrategyConsultingPage() {
  return <ServicePageTemplate {...pageData} />
}
