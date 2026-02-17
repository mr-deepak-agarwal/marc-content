'use client'

import ServicePageTemplate1 from '@/components/ServicePageTemplate1'
import { Search, Target, TrendingUp, BarChart3, Globe, Building2, PieChart } from 'lucide-react'

const pageData = {
  tagline: 'Market Research',
  title: 'Market Research in',
  titleHighlight: 'India',
  // ✅ KEYWORD: "market research in India" | "a leading market research firm in India" | "market research services in India"
  description: 'India is one of the world\'s fastest-growing economies—but also one of its most complex. Consumer behaviour, demand drivers, and regulations vary sharply across regions, making local market research in India critical for success. MARC is a leading market research firm in India, helping Indian and global businesses make confident decisions on market entry, expansion, and investment. Our market research services in India combine deep on-ground primary research with rigorous analysis to identify high-potential opportunities while reducing commercial, regulatory, and operational risk.',

  // Custom images for Option 1
  heroImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=1200',
  methodologyImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=800',

  stats: [
    { value: '500+', label: 'Research Projects' },
    { value: '30+', label: 'Countries Covered' },
    { value: '14+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ],

  valueProps: [
    // ✅ KEYWORD: "market research services in India"
    { icon: Search, title: 'Decision-Ready Intelligence', desc: 'Our market research services in India combine deep on-ground primary research with rigorous analysis to identify high-potential opportunities.' },
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
  // ✅ KEYWORD: "market research services in India"
  methodologyDescription: 'Our market research services in India are designed to support real business decisions—not just reports. We deliver decision-ready market intelligence for India and global markets.',

  // ✅ KEYWORD: "Market Research Services in India" (section heading)
  servicesSectionTitle: 'Market Research Services in India',

  services: [
    {
      // ✅ KEYWORD: "Feasibility Study in India" | "land feasibility studies in India"
      title: 'Land Feasibility Study in India',
      desc: 'Our land feasibility studies in India identify the most viable and profitable use of land by assessing market demand, demand–supply gaps, competition, regulatory constraints, and financial feasibility.',
      features: ['Market Demand Assessment', 'Demand–Supply Gap Analysis', 'Financial Feasibility'],
      icon: Building2,
    },
    {
      // ✅ KEYWORD: "product feasibility studies in India"
      title: 'Product Feasibility Study',
      desc: 'Launching products without validation increases risk. Our product feasibility studies in India assess demand potential, pricing, competitor benchmarks, distribution fit, and scalability across regions.',
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
      // ✅ KEYWORD: "global consulting firms" | "international market research services"
      title: 'International Market Research',
      desc: 'We support Indian companies expanding globally and act as a research backend for global consulting firms. Our international market research services include global market sizing, competitive landscape analysis, and market entry feasibility across multiple countries.',
      features: ['Global Market Sizing', 'Country Prioritisation', 'Go-to-Market Strategy'],
      icon: Globe,
    },
  ],

  caseStudies: [
    {
      client: 'Fly91 Aviation',
      industry: 'Aviation',
      service: 'Demand–Supply Gap Analysis',
      challenge: 'Assess the commercial viability of launching flights on four routes under India\'s UDAN scheme, including virgin routes with no existing air traffic data.',
      solution: 'Demand–supply dynamics analysis, traveller profiling across road and rail alternatives, route-level passenger demand modelling, and pricing scenario planning.',
      result: 'Clear go / no-go decisions with optimised flight frequency recommendations, enabling confident route launch planning.',
    },
    {
      client: 'ACC Alcon',
      industry: 'Building Materials',
      service: 'Market Expansion Research',
      challenge: 'Identify the best location and optimal scale for entering the gypsum plaster segment across two shortlisted states.',
      solution: 'Primary interviews with channel partners and contractors, competitor benchmarking, and a structured location scoring model across key parameters.',
      result: 'Selected the optimal expansion location with a defined scale of operations and go-to-market strategy.',
    },
    {
      client: 'Models Construction',
      industry: 'Real Estate',
      service: 'Land Feasibility Study',
      challenge: 'Evaluate viable industrial and commercial development options for a land parcel located near a notified industrial estate.',
      solution: 'Macro-level sector analysis, catchment radius assessment, competitor mapping across development typologies, and financial feasibility modelling.',
      result: 'Data-backed, regulation-compliant development strategy with a clearly superior return profile versus alternative uses.',
    },
  ],

  faqs: [
    { q: 'Why is local market research in India so important?', a: 'India is highly diverse, with consumer behaviour, demand drivers, and regulations varying across states and regions. Local market research ensures businesses make decisions based on accurate, on-ground realities rather than assumptions.' },
    { q: 'What industries does MARC specialize in for market research?', a: 'We work across multiple sectors including real estate, aviation, agriculture, consumer goods, and retail—delivering sector-specific insights backed by primary research.' },
    { q: 'How does MARC conduct its market research?', a: 'Our approach combines primary research (interviews with customers, distributors, and industry experts) with secondary data analysis, competitive benchmarking, regulatory reviews, and financial feasibility studies to deliver decision-ready intelligence.' },
    { q: 'Can MARC support international companies entering India?', a: 'Yes. We specialize in market entry research and expansion strategies, helping global firms understand India\'s regulatory environment, consumer demand, and competitive landscape to successfully establish operations.' },
    { q: 'What makes MARC different from other market research firms?', a: 'Unlike generic reports, MARC delivers actionable insights with clear go/no-go recommendations, tailored strategies, and measurable impact. Our strength lies in combining deep local expertise with global standards of analysis.' },
  ],

  // ✅ KEYWORD: "Market Research Partner in India"
  ctaTitle: 'Ready to Make Confident Market Decisions?',
  ctaDescription: 'Choose MARC as your Market Research Partner in India. We\'re ready to help you navigate India\'s complex markets with decision-ready intelligence, clear go/no-go recommendations, and strategies built for long-term growth.',
}

export default function MarketResearchPageOption1() {
  return <ServicePageTemplate1 {...pageData} />
}