'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, ArrowUpRight, Building2, TrendingUp, Award,
  Target, CheckCircle2, Lightbulb, Filter
} from 'lucide-react'

const industries = [
  { id: 'all', label: 'All', count: 6 },
  { id: 'hospitality', label: 'Hospitality', count: 2 },
  { id: 'retail', label: 'Retail', count: 1 },
  { id: 'real-estate', label: 'Real Estate', count: 1 },
  { id: 'manufacturing', label: 'Manufacturing', count: 1 },
  { id: 'aviation', label: 'Aviation', count: 1 },
]

const caseStudies = [
  {
    id: 1,
    title: 'Profitability Analysis for Premium Jewellery Brand',
    client: 'Abharan Jewellers',
    industry: 'retail',
    service: 'Profitability Analysis',
    challenge: 'Identify key factors impacting store profitability and develop actionable improvement strategies across multiple retail locations.',
    solution: 'Comprehensive cost analysis, SKU-level profitability mapping, and operational efficiency audit.',
    outcomes: ['15% margin improvement', '20% cost reduction', 'Data-driven inventory'],
    image: 'https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'Revenue Optimization for Fine Dining Restaurant',
    client: 'Copper Leaf',
    industry: 'hospitality',
    service: 'Strategy Consulting',
    challenge: 'Optimize operations and enhance revenue streams for a premium dining establishment in a competitive market.',
    solution: 'Menu engineering, pricing strategy optimization, and customer experience enhancement program.',
    outcomes: ['20% revenue growth', '25% table turnover', 'Better retention'],
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?w=800',
    featured: true,
  },
  {
    id: 3,
    title: 'Turnaround Strategy for Beach Resort',
    client: 'Premium Hospitality',
    industry: 'hospitality',
    service: 'Profitability Analysis',
    challenge: 'Reverse declining profitability and optimize revenue streams across seasonal fluctuations.',
    solution: 'Seasonal pricing model, ancillary revenue development, and cost structure optimization.',
    outcomes: ['30% EBITDA boost', 'New revenue streams', 'Seasonal optimization'],
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?w=800',
  },
  {
    id: 4,
    title: 'Co-working Space Market Positioning',
    client: 'Vertex',
    industry: 'real-estate',
    service: 'Market Research',
    challenge: 'Define market positioning and growth strategy in an increasingly competitive co-working space market.',
    solution: 'Competitive benchmarking, customer segmentation, and pricing strategy development.',
    outcomes: ['Clear positioning', '40% occupancy up', 'Premium pricing'],
    image: 'https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?w=800',
  },
  {
    id: 5,
    title: 'Regional Aviation Route Feasibility',
    client: 'Fly91',
    industry: 'aviation',
    service: 'Feasibility Study',
    challenge: 'Assess commercial viability of launching flights on four regional routes under UDAN scheme.',
    solution: 'Demand-supply analysis, traveller profiling, competitor assessment, and route optimization.',
    outcomes: ['Go/no-go clarity', 'Optimal frequency', 'Risk mitigation'],
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?w=800',
  },
  {
    id: 6,
    title: 'Building Materials Market Entry',
    client: 'ACC Alcon',
    industry: 'manufacturing',
    service: 'Market Entry Strategy',
    challenge: 'Strategic market entry and location selection for gypsum plaster segment expansion in India.',
    solution: 'Location scoring model, competitive intelligence, and go-to-market strategy development.',
    outcomes: ['Best location found', 'Clear roadmap', '40% faster entry'],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=800',
  },
]

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Award },
  { value: '30+', label: 'Industries Served', icon: Building2 },
  { value: '98%', label: 'Success Rate', icon: Target },
  { value: '3x', label: 'Avg. Client ROI', icon: TrendingUp },
]

const process = [
  { num: '01', title: 'Discovery', desc: 'Deep dive into your business challenges and objectives' },
  { num: '02', title: 'Research', desc: 'Comprehensive data collection and market analysis' },
  { num: '03', title: 'Strategy', desc: 'Develop actionable recommendations and roadmap' },
  { num: '04', title: 'Implementation', desc: 'Support execution and measure outcomes' },
]

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState('all')
  const [visibleCards, setVisibleCards] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => ({ ...prev, [entry.target.dataset.index]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-index]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [activeIndustry])

  const filteredStudies = caseStudies.filter(study => 
    activeIndustry === 'all' || study.industry === activeIndustry
  )

  const featuredStudies = caseStudies.filter(s => s.featured)

  return (
    <div className="bg-[#F0F4F0] min-h-screen" data-testid="case-studies-page">

      {/* Hero Section - Clean Light Theme */}
      <section className="relative pt-32 pb-20 bg-white border-b border-[#C2DDB4]/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F7FFF5] rounded-full border border-[#C2DDB4]/50 mb-8">
                <Lightbulb className="w-4 h-4 text-[#4E9141]" />
                <span className="text-[#4E9141] font-medium text-sm">Client Success Stories</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                Real Results,
                <span className="text-[#4E9141]"> Real Impact</span>
              </h1>

              <p className="text-[#47635D] text-lg leading-relaxed mb-10 max-w-lg">
                From challenge to triumph — discover how we deliver measurable business impact through data-driven insights and strategic expertise.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#cases" className="group px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all flex items-center gap-2">
                  Explore Cases
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/contact" className="px-8 py-4 border-2 border-[#C2DDB4] text-[#1D342F] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all">
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="group bg-white border-2 border-[#C2DDB4]/40 rounded-2xl p-6 hover:border-[#4E9141] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#F7FFF5] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4E9141]/10 transition-colors">
                    <stat.icon className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#4E9141] mb-1">{stat.value}</div>
                  <div className="text-[#47635D] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Featured</span>
              <h2 className="text-3xl font-bold text-[#1D342F] mt-2">Highlighted Success Stories</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredStudies.map((study, i) => (
              <Link 
                key={study.id}
                href="#"
                className="group block bg-white rounded-2xl overflow-hidden border-2 border-[#C2DDB4]/40 hover:border-[#4E9141] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/70 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-4 py-1.5 bg-[#4E9141] text-white text-sm font-semibold rounded-full shadow-md">
                      Featured
                    </span>
                    <span className="px-4 py-1.5 bg-white text-[#4E9141] text-sm font-semibold rounded-full shadow-md capitalize">
                      {study.industry}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-[#4E9141]" />
                  </div>

                  {/* Bottom content on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[#C2DDB4] font-medium mb-1">{study.client}</p>
                    <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#47635D] mb-6">{study.challenge}</p>
                  
                  {/* Outcomes */}
                  <div className="flex flex-wrap gap-3">
                    {study.outcomes.map((outcome, j) => (
                      <div key={j} className="flex items-center gap-2 px-4 py-2 bg-[#F7FFF5] rounded-full border border-[#C2DDB4]/50">
                        <CheckCircle2 className="w-4 h-4 text-[#4E9141]" />
                        <span className="text-[#1D342F] text-sm font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & All Case Studies */}
      <section id="cases" className="py-8 bg-white border-y border-[#C2DDB4]/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeIndustry === ind.id
                    ? 'bg-[#4E9141] text-white shadow-md shadow-[#4E9141]/20'
                    : 'bg-[#F7FFF5] text-[#47635D] hover:bg-[#C2DDB4]/30 border border-[#C2DDB4]/50'
                }`}
                data-testid={`filter-${ind.id}`}
              >
                {ind.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeIndustry === ind.id ? 'bg-white/20' : 'bg-white'
                }`}>
                  {ind.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#1D342F]">All Case Studies</h2>
            <p className="text-[#47635D]">
              Showing <span className="font-semibold text-[#1D342F]">{filteredStudies.length}</span> case studies
            </p>
          </div>

          {/* Symmetrical Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, i) => (
              <Link 
                key={study.id}
                href="#"
                data-index={i}
                className="group block"
                data-testid={`case-study-${study.id}`}
              >
                <article 
                  className={`h-full bg-white rounded-2xl overflow-hidden border-2 border-[#C2DDB4]/40 hover:border-[#4E9141] shadow-sm hover:shadow-xl transition-all duration-500 ${
                    visibleCards[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white text-[#4E9141] text-xs font-semibold rounded-full shadow-md capitalize">
                        {study.industry.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Service Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1.5 bg-[#4E9141] text-white text-xs font-semibold rounded-full shadow-md">
                        {study.service}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Arrow on hover */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 text-[#4E9141]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Client */}
                    <p className="text-[#4E9141] font-semibold text-sm mb-2">{study.client}</p>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1D342F] leading-tight mb-3 group-hover:text-[#4E9141] transition-colors line-clamp-2">
                      {study.title}
                    </h3>

                    {/* Challenge */}
                    <p className="text-[#47635D] text-sm leading-relaxed mb-4 line-clamp-2">
                      {study.challenge}
                    </p>

                    {/* Key Outcome */}
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F7FFF5] rounded-xl border border-[#C2DDB4]/50">
                      <CheckCircle2 className="w-4 h-4 text-[#4E9141] flex-shrink-0" />
                      <span className="text-[#1D342F] text-sm font-medium">{study.outcomes[0]}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-[#C2DDB4]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Our Approach</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mt-4">
              How We Deliver <span className="text-[#4E9141]">Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-[#C2DDB4] rounded-2xl rotate-6 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-white border-2 border-[#4E9141] rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#4E9141]">{step.num}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">{step.title}</h3>
                <p className="text-[#47635D] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1D342F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">
            Partner with MARC to transform your business challenges into measurable achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#5ba84d] transition-all group"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/insights" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              View Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
