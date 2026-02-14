'use client'

import ServicePageTemplateOption2 from '@/components/ServicePageTemplate-Option2'
import { FileCheck, MapPin, Building2, TrendingUp, Calculator, Target, Shield, BarChart3, Users, Globe, PieChart } from 'lucide-react'

const pageData = {
  tagline: 'Feasibility Study for Business in India',
  title: 'Taking The Right Step Towards',
  titleHighlight: 'Your Business Future',
  description: 'Assess risks and rewards with MARC\'s feasibility study for business. We help you understand the risks, rewards, and everything in between before taking a business decision. Our feasibility study services in India combine market insight with business location & feasibility advisory services to help you proceed with confidence and clarity.',
  
  // Custom images for Option 2
  heroImage: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?w=1200',
  serviceImages: [
    'https://images.pexels.com/photos/3182752/pexels-photo-3182752.jpeg?w=600', // Market Demand Assessment
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?w=600', // Location Feasibility
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600', // Financial Viability
    'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?w=600', // Risk Analysis
    'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?w=600', // Competitive Benchmarking
    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=600', // Business Planning
  ],

  stats: [
    { value: '360°', label: 'Research Coverage' },
    { value: '100+', label: 'Feasibility Studies' },
    { value: '30+', label: 'Countries' },
    { value: '14+', label: 'Years Experience' },
  ],

  valueProps: [
    { icon: PieChart, title: 'Market Feasibility', desc: 'We analyse the target market by evaluating competitors, estimated sales, market constraints, and market potential.' },
    { icon: Shield, title: 'Technical Feasibility', desc: 'We analyse technical factors such as labour laws, legal compliance, and relevant regulations.' },
    { icon: Calculator, title: 'Financial Feasibility', desc: 'Capital requirements, and potential financial returns for the project with detailed projections.' },
    { icon: Target, title: '360-Degree Research', desc: 'We provide you with 360-degree research services that cover global, national, and local markets.' },
  ],

  methodology: [
    { num: '01', title: 'Market Analysis', desc: 'Analyse target market by evaluating competitors, estimated sales, market constraints, and market potential.' },
    { num: '02', title: 'Technical Assessment', desc: 'Analyse technical factors such as labour laws, legal compliance, and relevant regulations.' },
    { num: '03', title: 'Financial Evaluation', desc: 'Comprehensive analysis of capital requirements and potential financial returns for the project.' },
    { num: '04', title: 'Primary Research', desc: 'Through primary and secondary market research, evaluate feasibility at micro location level.' },
    { num: '05', title: 'Stakeholder Interviews', desc: 'Interview distinguished individuals who are current or former stakeholders to understand key factors.' },
    { num: '06', title: 'Roadmap Development', desc: 'Provide comprehensive way forward to the client including roadmap on execution of the project.' },
  ],
  methodologyDescription: 'The dynamic nature of the market provides various opportunities and potential risks. A business needs to gather data on current conditions and test future growth and market acceptance before it moves ahead with a new venture. As a trusted feasibility study company, MARC delivers data-backed evaluations that make every feasibility study for business practical, objective, and execution-ready.',

  services: [
    {
      title: 'Market Demand Assessment',
      desc: 'Evaluate market demand, customer profiling, and growth potential before committing capital.',
      features: ['Demand Analysis', 'Customer Profiling', 'Growth Potential', 'Market Trends'],
      icon: Target,
    },
    {
      title: 'Location Feasibility',
      desc: 'Business location & feasibility advisory services to identify optimal geographies and operating models.',
      features: ['Geographic Viability', 'Infrastructure Readiness', 'Demographic Demand', 'Cost Factors'],
      icon: MapPin,
    },
    {
      title: 'Financial Viability',
      desc: 'Comprehensive analysis of capital requirements, ROI projections, and financial sustainability.',
      features: ['Capital Requirements', 'ROI Analysis', 'Financial Projections', 'Sustainability Assessment'],
      icon: Calculator,
    },
    {
      title: 'Risk Analysis',
      desc: 'Identify potential risks, regulatory factors, and execution challenges before investment.',
      features: ['Risk Identification', 'Regulatory Review', 'Execution Challenges', 'Mitigation Strategies'],
      icon: Shield,
    },
    {
      title: 'Competitive Benchmarking',
      desc: 'Market sizing, entry barriers, pricing analysis, and competitive landscape mapping.',
      features: ['Market Sizing', 'Entry Barriers', 'Pricing Analysis', 'Competitive Mapping'],
      icon: BarChart3,
    },
    {
      title: 'Business Planning',
      desc: 'Integrated feasibility study and business planning services for structured execution roadmaps.',
      features: ['Execution Roadmap', 'Growth Strategy', 'Operational Planning', 'Implementation Support'],
      icon: FileCheck,
    },
  ],

  caseStudies: [
    {
      client: 'K12 Residential School',
      industry: 'Education',
      service: 'Location-Based Feasibility Study',
      challenge: 'An accomplished group wanted to launch a world class educational institution in Pune, India. We were tasked with conducting a location-based feasibility study of setting up a K12 residential school.',
      solution: 'We assessed different parameters including common size and variance analysis, analyzing key cost centers, comparison of budget and actuals, and vertical/segment wise analysis. Through primary and secondary market research, we evaluated the feasibility of the residential school at that micro location. We interviewed several distinguished individuals who were current or former stakeholders of schools.',
      result: 'Based on our study we provided a comprehensive way forward to the client including a roadmap on execution of the project. The project is underway.',
    },
    {
      client: 'Manufacturing Expansion',
      industry: 'Manufacturing',
      service: 'Market & Financial Feasibility',
      challenge: 'A manufacturing company planning expansion into new product lines needed comprehensive feasibility analysis covering market demand, technical requirements, and financial viability.',
      solution: 'Conducted detailed market analysis evaluating competitors, estimated sales, and market potential. Assessed technical factors including infrastructure requirements, labour availability, and regulatory compliance. Developed financial projections with capital requirements and ROI analysis.',
      result: 'Delivered a complete feasibility report with clear go/no-go recommendations, enabling the client to proceed with confidence on high-potential product lines while avoiding risky ventures.',
    },
    {
      client: 'Retail Chain Expansion',
      industry: 'Retail',
      service: 'Location Feasibility Study',
      challenge: 'A retail chain needed to identify optimal locations for new store openings across multiple cities, balancing market potential with operational feasibility.',
      solution: 'Evaluated geographic viability, infrastructure readiness, demographic demand, and cost factors across shortlisted locations. Conducted catchment area analysis, footfall assessment, and competitor mapping. Developed location scoring model with clear ranking criteria.',
      result: 'Successfully identified top 3 locations with highest ROI potential, detailed operational requirements, and phased expansion roadmap, leading to successful store launches.',
    },
  ],

  faqs: [
    { q: 'What is a feasibility study for business?', a: 'A feasibility study for a business evaluates market demand, financial viability, technical requirements, and operational risks before launching or expanding a venture.' },
    { q: 'Why are feasibility study services important in India?', a: 'With diverse markets and regulatory complexity, feasibility study services in India help businesses minimize risk and align investments with real market potential.' },
    { q: 'What does a feasibility company typically analyze?', a: 'A feasibility company assesses market feasibility, financial returns, location suitability, regulatory factors, and execution challenges.' },
    { q: 'Who should opt for business feasibility services?', a: 'Startups, MSMEs, investors, and large enterprises planning new ventures, expansions, or capital investments benefit from Business Feasibility Services.' },
    { q: 'When should I engage a feasibility study consultant?', a: 'A feasibility study consultant should be engaged before launching a new business, entering a new market, expanding operations, raising capital, or selecting a business location.' },
    { q: 'What does a market feasibility study include?', a: 'A market feasibility study typically covers demand assessment, customer profiling, competitive benchmarking, pricing analysis, market sizing, entry barriers, and growth potential.' },
    { q: 'Do you provide location-based feasibility studies?', a: 'Yes, MARC provides comprehensive location-based feasibility studies evaluating geographic viability, infrastructure, demographics, and cost factors to identify optimal business locations.' },
  ],

  ctaTitle: 'Planning a Feasibility Study for Business in India?',
  ctaDescription: 'Make informed decisions with MARC\'s expert-led Feasibility Study for Business, backed by market insight, financial analysis, and execution clarity.',
}

export default function FeasibilityStudyPageOption2() {
  return <ServicePageTemplateOption2 {...pageData} />
}