'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, Search, Target, TrendingUp, PieChart, Users, 
  BarChart3, Globe, CheckCircle2, ChevronDown, ArrowUpRight,
  Lightbulb, FileText, Building2
} from 'lucide-react'

// Service offerings based on original content
const services = [
  {
    title: 'Land Feasibility Study',
    desc: 'Identify the most viable and profitable use of land by assessing market demand, demand–supply gaps, competition, regulatory constraints, and financial feasibility.',
    icon: PieChart,
    features: ['Market Demand Assessment', 'Demand–Supply Gap Analysis', 'Financial Feasibility']
  },
  {
    title: 'Product Feasibility Study',
    desc: 'Assess demand potential, pricing, competitor benchmarks, distribution fit, and scalability across regions before launching products.',
    icon: BarChart3,
    features: ['Demand Validation', 'Pricing Benchmarks', 'Scalability Analysis']
  },
  {
    title: 'Demand–Supply Gap Analysis',
    desc: 'Identify genuine, underserved market gaps using bottom-up and top-down demand modelling validated through primary research.',
    icon: Users,
    features: ['Bottom-up Modelling', 'Top-down Modelling', 'Primary Research Validation']
  },
  {
    title: 'Market Expansion Research',
    desc: 'Help businesses identify where to expand in India, at what scale, and with what strategy using precision research and location scoring.',
    icon: Target,
    features: ['Location Scoring', 'Scale Assessment', 'Expansion Strategy']
  },
  {
    title: 'Market Entry Research',
    desc: 'Competitive and pricing landscape analysis, regulatory environment review, and market entry feasibility for new markets.',
    icon: Building2,
    features: ['Competitor Benchmarking', 'Regulatory Review', 'Entry Feasibility']
  },
  {
    title: 'International Market Research',
    desc: 'Support Indian companies expanding globally and act as a research backend for global consulting firms across multiple countries.',
    icon: Globe,
    features: ['Global Market Sizing', 'Country Prioritisation', 'Go-to-Market Strategy']
  },
]

// Methodology steps
const methodology = [
  { num: '01', title: 'Market Sizing', desc: 'Market sizing and growth assessment for Indian markets using bottom-up and top-down methodologies' },
  { num: '02', title: 'Regulatory Analysis', desc: 'Regulatory and policy landscape analysis to map compliance requirements and constraints' },
  { num: '03', title: 'Primary Research', desc: 'On-ground interviews with customers, distributors, manufacturers, and industry experts' },
  { num: '04', title: 'Competitive Benchmarking', desc: 'Competitive and pricing benchmarking to identify market positioning opportunities' },
  { num: '05', title: 'Financial Feasibility', desc: 'Financial feasibility analysis including ROI, IRR, and NPV modelling' },
  { num: '06', title: 'Go / No-Go Recommendation', desc: 'Clear go / no-go and market entry recommendations with measurable impact' },
]

// Case study from original content
const caseStudy = {
  title: 'Aviation Route Feasibility — Fly91',
  client: 'Regional Airline, India',
  challenge: 'MARC evaluated demand–supply dynamics for four proposed flight routes, including UDAN-supported virgin routes. The study assessed travel behaviour, alternative transport modes, pricing, and passenger demand.',
  approach: [
    'Assessed demand–supply dynamics for four proposed flight routes',
    'Evaluated UDAN-supported virgin routes for commercial viability',
    'Analysed travel behaviour and alternative transport modes',
    'Modelled pricing and passenger demand scenarios'
  ],
  outcome: 'Clear go / no-go decisions and optimized route recommendations, enabling the airline to prioritize routes with the strongest demand–supply opportunity.'
}

// FAQs
const faqs = [
  {
    q: 'Why is local market research in India so important?',
    a: 'India is highly diverse, with consumer behaviour, demand drivers, and regulations varying across states and regions. Local market research ensures businesses make decisions based on accurate, on-ground realities rather than assumptions.'
  },
  {
    q: 'What industries does MARC specialize in for market research?',
    a: 'We work across multiple sectors including real estate, aviation, agriculture, consumer goods, and retail—delivering sector-specific insights backed by primary research.'
  },
  {
    q: 'How does MARC conduct its market research?',
    a: 'Our approach combines primary research (interviews with customers, distributors, and industry experts) with secondary data analysis, competitive benchmarking, regulatory reviews, and financial feasibility studies to deliver decision-ready intelligence.'
  },
  {
    q: 'Can MARC support international companies entering India?',
    a: 'Yes. We specialize in market entry research and expansion strategies, helping global firms understand India\'s regulatory environment, consumer demand, and competitive landscape to successfully establish operations.'
  },
  {
    q: 'What makes MARC different from other market research firms?',
    a: 'Unlike generic reports, MARC delivers actionable insights with clear go/no-go recommendations, tailored strategies, and measurable impact. Our strength lies in combining deep local expertise with global standards of analysis.'
  },
]

export default function MarketResearchPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [visibleSections, setVisibleSections] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section - Clean Corporate */}
      <section id="hero" className="relative pt-32 pb-24 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-medium tracking-wide uppercase text-sm">Market Research</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-8">
                Market Research in
                <span className="text-[#4E9141]"> India</span>
              </h1>
              
              <p className="text-[#47635D] text-lg leading-relaxed mb-10 max-w-xl">
                India is one of the world's fastest-growing economies—but also one of its most complex. Consumer behaviour, demand drivers, and regulations vary sharply across regions, making local market research in India critical for success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all group" data-testid="hero-cta-button">
                  Start Your Research
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#methodology" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C2DDB4] text-[#47635D] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all" data-testid="hero-secondary-button">
                  Our Approach
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className={`relative hidden lg:block transition-all duration-700 delay-200 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-[#C2DDB4]/30">
                <h3 className="text-2xl font-bold text-[#1D342F] mb-8">Excellence in Numbers</h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '500+', label: 'Research Projects' },
                    { value: '30+', label: 'Countries Covered' },
                    { value: '14+', label: 'Years Experience' },
                    { value: '98%', label: 'Client Satisfaction' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl font-bold text-[#4E9141]">{stat.value}</div>
                      <div className="text-[#47635D] text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C2DDB4] rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-[#C2DDB4] rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visibleSections.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Why Choose MARC</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4 mb-6">
              India's Leading Market Research Partner
            </h2>
            <p className="text-[#47635D] text-lg">
              MARC is a leading market research firm in India, helping Indian and global businesses make confident decisions on market entry, expansion, and investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Decision-Ready Intelligence',
                desc: 'Our market research services combine deep on-ground primary research with rigorous analysis to identify high-potential opportunities.'
              },
              {
                icon: Target,
                title: 'Risk Reduction',
                desc: 'We reduce commercial, regulatory, and operational risk so you can enter and expand in Indian markets with confidence.'
              },
              {
                icon: Lightbulb,
                title: 'Local Expertise, Global Standards',
                desc: 'We work with investors, developers, manufacturers, and brands across sectors, delivering actionable market intelligence for India.'
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`bg-[#F7FFF5] rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg hover:border-[#4E9141]/30 transition-all duration-500 ${visibleSections.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#4E9141]/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#4E9141]" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">{item.title}</h3>
                <p className="text-[#47635D]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4 mb-6">
              Market Research Services in India
            </h2>
            <p className="text-[#47635D] text-lg">
              MARC provides market research services across land feasibility, product feasibility, demand–supply gap analysis, market entry research, market expansion strategy, and international market research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div 
                key={i}
                className={`bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-xl hover:border-[#4E9141]/30 transition-all duration-500 group ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
                data-testid={`service-card-${i}`}
              >
                <div className="w-14 h-14 rounded-xl bg-[#4E9141] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">{service.title}</h3>
                <p className="text-[#47635D] mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-[#F7FFF5] text-xs text-[#4E9141] border border-[#C2DDB4]/50">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Research Section */}
      <section id="b2b" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${visibleSections.b2b ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Specialized Research</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mt-4 mb-6">
                Our Market Research Approach
              </h2>
              <p className="text-[#47635D] text-lg mb-6">
                Our approach is designed to support real business decisions—not just reports. We combine primary research with rigorous analysis to deliver decision-ready market intelligence for India.
              </p>
              <p className="text-[#47635D] mb-8">
                Our market research services in India combine deep on-ground primary research with rigorous analysis to identify high-potential opportunities while reducing commercial, regulatory, and operational risk.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Market sizing and growth assessment for Indian markets',
                  'Primary research with customers, distributors, manufacturers, and industry experts',
                  'Competitive and pricing benchmarking',
                  'Financial feasibility analysis including ROI, IRR, and NPV',
                  'Clear go / no-go and market entry recommendations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4E9141] mt-0.5 flex-shrink-0" />
                    <span className="text-[#47635D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${visibleSections.b2b ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-[#F7FFF5] rounded-2xl p-10 border border-[#C2DDB4]/30">
                <h3 className="text-2xl font-bold text-[#1D342F] mb-6">Why Choose MARC as Your Research Partner</h3>
                <p className="text-[#47635D] mb-8">
                  One of India's leading market research firms with strong on-ground intelligence, sector expertise, and clear recommendations with measurable impact.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Leading Firm in India', 'Decision-Ready Insights', 'Sector Expertise', 'Measurable Impact'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[#1D342F]">
                      <div className="w-2 h-2 rounded-full bg-[#4E9141]" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C2DDB4] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-24 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visibleSections.methodology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Our Approach</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4 mb-6">
              Rigorous, Decision-Focused Methodology
            </h2>
            <p className="text-[#47635D] text-lg">
              Our approach is designed to support real business decisions—not just reports. We deliver decision-ready market intelligence for India and global markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((step, i) => (
              <div 
                key={i}
                className={`bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg transition-all duration-500 ${visibleSections.methodology ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl font-bold text-[#C2DDB4] mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-2">{step.title}</h3>
                <p className="text-[#47635D]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visibleSections.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Case Study</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4">
              Real Results, Real Impact
            </h2>
          </div>

          <div className={`bg-[#F7FFF5] rounded-3xl overflow-hidden border border-[#C2DDB4]/30 transition-all duration-700 ${visibleSections.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4E9141]/10 rounded-full text-[#4E9141] text-sm font-medium mb-6">
                  <Globe className="w-4 h-4" />
                  Demand–Supply Gap Analysis
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mb-4">{caseStudy.title}</h3>
                <p className="text-[#47635D] text-sm mb-2">{caseStudy.client}</p>
                <p className="text-[#47635D] mb-8">{caseStudy.challenge}</p>
                
                <h4 className="font-bold text-[#1D342F] mb-4">What MARC Did:</h4>
                <ul className="space-y-3 mb-8">
                  {caseStudy.approach.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4E9141] mt-0.5 flex-shrink-0" />
                      <span className="text-[#47635D]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#1D342F] p-10 lg:p-14 flex flex-col justify-center">
                <h4 className="text-[#C2DDB4] font-medium uppercase tracking-wider text-sm mb-4">Outcome</h4>
                <p className="text-white text-xl lg:text-2xl leading-relaxed mb-8">
                  {caseStudy.outcome}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#C2DDB4] font-semibold hover:text-white transition-colors group" data-testid="case-study-cta">
                  Discuss Your Project
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 bg-[#F7FFF5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">FAQs</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className={`bg-white rounded-xl border border-[#C2DDB4]/30 overflow-hidden transition-all duration-500 ${visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F7FFF5] transition-colors"
                  data-testid={`faq-button-${i}`}
                >
                  <span className="font-semibold text-[#1D342F] pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#4E9141] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6">
                    <p className="text-[#47635D] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1D342F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Make Confident Market Decisions?
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">
            We're ready to help you navigate India's complex markets with decision-ready intelligence, clear go/no-go recommendations, and strategies built for long-term growth.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all group" data-testid="final-cta-button">
            Contact Us Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}