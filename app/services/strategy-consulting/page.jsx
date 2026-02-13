'use client'

import ServicePageTemplate from '@/components/ServicePageTemplate'
import { Compass, Target, TrendingUp, Lightbulb, BarChart3, Rocket, Award, GitMerge } from 'lucide-react'

const pageData = {
  tagline: 'Growth Strategy',
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
    { icon: Compass, title: 'Strategic Direction', desc: 'Clear roadmaps that align business objectives with market opportunities and competitive realities.' },
    { icon: Target, title: 'Focused Execution', desc: 'Actionable plans with defined milestones, KPIs, and accountability frameworks.' },
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
  methodologyDescription: 'We combine analytical rigour with practical business sense to develop strategies that are both ambitious and achievable — grounded in data and built for real-world execution.',

  services: [
    {
      title: 'Corporate Strategy',
      desc: 'Define long-term strategic direction, portfolio strategy, and capital allocation priorities aligned with market opportunity.',
      features: ['Vision & Mission', 'Portfolio Strategy', 'Growth Roadmap'],
      icon: Compass,
    },
    {
      title: 'Growth Strategy',
      desc: 'Identify and prioritize growth opportunities including market expansion, new products, and inorganic growth options.',
      features: ['Market Expansion', 'New Products', 'Inorganic Growth'],
      icon: TrendingUp,
    },
    {
      title: 'Go-to-Market Strategy',
      desc: 'Develop market entry and expansion strategies with channel, pricing, and positioning plans tailored to your market.',
      features: ['Channel Strategy', 'Pricing Strategy', 'Market Entry'],
      icon: Rocket,
    },
    {
      title: 'Business Transformation',
      desc: 'Drive organizational transformation to improve performance and build future-ready capabilities for sustainable growth.',
      features: ['Operating Model', 'Process Excellence', 'Change Management'],
      icon: GitMerge,
    },
  ],

  caseStudies: [
    {
      client: 'Manufacturing Conglomerate',
      industry: 'Manufacturing',
      service: 'Corporate Strategy',
      challenge: 'A diversified manufacturing group needed a clear 5-year growth strategy to prioritize business units, allocate capital efficiently, and identify new market opportunities.',
      solution: 'Conducted portfolio assessment, competitive benchmarking, and market opportunity sizing. Developed a structured 5-year roadmap with business unit strategies, capital allocation priorities, and implementation milestones.',
      result: 'A clear strategic roadmap delivering 3x revenue growth over 5 years with defined accountability across business units.',
    },
    {
      client: 'Pan-India Retail Chain',
      industry: 'Retail',
      service: 'Growth & Expansion Strategy',
      challenge: 'A retail chain sought to accelerate expansion across India but lacked a data-backed framework for location selection, format strategy, and phased rollout planning.',
      solution: 'Market attractiveness analysis across target geographies, location scoring model, format strategy by market tier, and a phased 3-year expansion plan with financial projections.',
      result: 'A structured expansion strategy enabling 50+ new store openings over 3 years with clear go/no-go criteria per market.',
    },
    {
      client: 'Financial Services Firm',
      industry: 'Financial Services',
      service: 'Business Transformation',
      challenge: 'A financial services company needed to transform its operating model and build a digital-first customer experience to remain competitive in a rapidly evolving market.',
      solution: 'Assessed current operating model gaps, defined the target state, and developed a phased transformation roadmap covering technology, processes, and talent.',
      result: 'A fully defined transformation program with prioritized initiatives, enabling a successful shift to a digital-first operating model.',
    },
  ],

  faqs: [
    { q: 'How is strategy consulting different from management consulting?', a: 'Strategy consulting focuses on high-level decisions like market entry, growth direction, and competitive positioning, while management consulting often addresses operational improvements and execution.' },
    { q: 'How long does a strategy engagement typically take?', a: 'Most strategy projects span 8–16 weeks depending on scope, though we also offer rapid strategy sprints for focused questions that can be completed in 4–6 weeks.' },
    { q: 'Do you help with implementation after strategy formulation?', a: 'Yes. We offer implementation support to help translate strategy into action, track milestones, and course-correct based on market feedback.' },
    { q: 'What industries do you specialise in?', a: 'We work across industries including manufacturing, retail, healthcare, technology, hospitality, and financial services.' },
    { q: 'What makes MARC\'s strategy work different?', a: 'We combine deep market research capabilities with strategic advisory — meaning every strategy is grounded in primary data, not just frameworks and assumptions.' },
  ],

  ctaTitle: 'Ready to Chart Your Growth Path?',
  ctaDescription: 'Partner with MARC to develop strategies that drive sustainable growth, sharpen competitive positioning, and create long-term value.',
}

export default function StrategyConsultingPage() {
  return <ServicePageTemplate {...pageData} />
}