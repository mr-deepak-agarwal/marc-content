'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, ChevronRight, Car, Shirt, Construction, ShoppingBag, ShoppingCart, GraduationCap, Utensils, Stethoscope, Hotel, Factory, Cpu } from 'lucide-react'

// Merged from mock data — industryDetails descriptions, services, clients + India stats
const industries = [
  {
    id: 'automobile',
    icon: Car,
    title: 'Automobile & Mobility',
    shortDesc: 'Supply chain optimisation, market entry research, and strategic advisory for automotive excellence.',
    fullDesc: 'MARC assists automotive stakeholders in navigating the shift toward next-generation mobility by optimizing supply chains and identifying high-growth market segments. The firm\'s strategic interventions ensure that operations remain resilient while capturing value in an increasingly tech-driven global landscape.',
    services: ['Supply Chain Optimization', 'Market Entry Research', 'Feasibility Studies', 'Strategic Advisory'],
    clients: [],
    stat: '₹22L Cr',
    statLabel: 'India Auto Industry Size',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80'
  },
  {
    id: 'textile',
    icon: Shirt,
    title: 'Clothing & Textile',
    shortDesc: 'Supply chain integration, brand positioning, and market expansion for apparel firms.',
    fullDesc: 'From supply chain integration to strategic brand positioning, MARC guides apparel firms in scaling operations to capture broader market share. We focus on balancing trend agility with the structural efficiencies required to drive long-term, compounding profitability.',
    services: ['Supply Chain Integration', 'Brand Positioning', 'Market Expansion', 'Process Audit'],
    clients: [],
    stat: '2nd Largest',
    statLabel: 'Global Textile Exporter',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80'
  },
  {
    id: 'construction',
    icon: Construction,
    title: 'Construction & Infrastructure',
    shortDesc: 'Feasibility studies and strategic building blocks for large-scale infrastructure projects.',
    fullDesc: 'MARC partners with construction leaders to refine operational models and manage the complexities of large-scale project feasibility. The firm\'s advisory services help clients mitigate localized risks while capitalizing on emerging urban development and infrastructure trends.',
    services: ['Project Feasibility', 'Operational Model Design', 'Risk Assessment', 'Market Research'],
    clients: [],
    stat: '₹111L Cr',
    statLabel: 'NIP Investment by 2025',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80'
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer Products',
    shortDesc: 'Distribution strategy, market intelligence, and growth advisory for consumer brands.',
    fullDesc: 'In the fast-moving consumer goods sector, MARC translates deep market insights into scalable distribution networks and resilient product pipelines. The firm enables brands to turn shifting consumer behaviors into sustainable growth and increased market equity.',
    services: ['Distribution Strategy', 'Market Intelligence', 'Product Feasibility', 'Growth Strategy'],
    clients: [],
    stat: '4th Largest',
    statLabel: 'Consumer Market Globally',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'Retail',
    shortDesc: 'Unit economics, operational efficiency, and growth strategy for digital commerce ventures.',
    fullDesc: 'MARC equips e-commerce ventures with the strategic frameworks necessary to transition from rapid customer acquisition to profitable, compounding scale. By optimizing operational efficiency and unit economics, we focus on building digital platforms designed for long-term market leadership.',
    services: ['Unit Economics Analysis', 'Growth Strategy', 'Market Intelligence', 'Operational Efficiency'],
    clients: ['Magsons'],
    stat: '₹7L Cr+',
    statLabel: 'India E-Commerce by 2030',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    shortDesc: 'Digital transformation and market-entry strategies for institutions and ed-tech providers.',
    fullDesc: 'MARC advises educational institutions and ed-tech providers on scaling their impact through digital transformation and rigorous market-entry strategies. Our goal is to align your operational model with the evolving demands of the modern learner and professional landscape.',
    services: ['Market Entry Research', 'Digital Transformation', 'Expansion Strategy', 'Financial Modelling'],
    clients: [],
    stat: '29 Cr+',
    statLabel: 'Higher Ed Enrolments India',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80'
  },
  {
    id: 'food',
    icon: Utensils,
    title: 'Food & Beverage',
    shortDesc: 'Feasibility insights and operational rigor to scale culinary and F&B brands.',
    fullDesc: 'From farm-to-table logistics to the expansion of restaurant chains, MARC provides the feasibility insights and operational rigor needed to scale culinary brands. We help you maintain quality and consistency as you transition into new markets and demographics.',
    services: ['Feasibility Studies', 'Market Expansion', 'SOP Design', 'Financial Modelling'],
    clients: ['EP Kamat', 'Monginis'],
    stat: '₹75L Cr',
    statLabel: 'India F&B Industry Size',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1920&q=80'
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare',
    shortDesc: 'Regulatory analysis, market entry, and operational strategy for healthcare organisations.',
    fullDesc: 'We support healthcare organizations in streamlining service delivery and navigating the regulatory complexities of expansion. Our advisory helps you build scalable, patient-centric models that prioritize both clinical excellence and financial sustainability.',
    services: ['Regulatory Analysis', 'Market Entry Research', 'Financial Modelling', 'Operational Strategy'],
    clients: ['Tulip Diagnostics', "Dr. Batra's"],
    stat: '3rd Largest',
    statLabel: 'Pharma Producer Globally',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&q=80'
  },
  {
    id: 'hospitality',
    icon: Hotel,
    title: 'Hospitality',
    shortDesc: 'Revenue strategy, market assessment, and SOP design for hospitality leaders.',
    fullDesc: 'MARC partners with hospitality leaders to elevate guest experiences while driving significant improvements in operational efficiency and asset profitability. Whether managing boutique holdings or large-scale properties, our strategies ensure brands remain resilient and scalable at every inflection point.',
    services: ['Revenue Strategy', 'Market Assessment', 'Internal Audit', 'SOP Design'],
    clients: ['Marriott', 'Taj Hotels', 'The Park Hotels', 'Planet Hollywood Goa'],
    stat: '₹16.5L Cr',
    statLabel: 'India Tourism by 2029',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80'
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Services',
    shortDesc: 'Market research, process audits, and distribution strategy across the full value chain.',
    fullDesc: 'We support manufacturers and FMCG companies with market entry, distribution strategy, process audits, and financial assessments. From factory to shelf, MARC helps optimise the full value chain for compounding growth.',
    services: ['Market Research', 'Process Audit', 'Financial Assessment', 'Distribution Strategy'],
    clients: ['Kineco'],
    stat: '16% of GDP',
    statLabel: 'Manufacturing Contribution',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1920&q=80'
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Manufacturing Technology',
    shortDesc: 'Go-to-market strategy, investor readiness, and business valuation for tech companies.',
    fullDesc: 'MARC supports technology companies and SaaS businesses with go-to-market strategy, investor readiness, and business valuation for fundraising. We develop resilient tech strategies and review systems to streamline workflows and pivot businesses towards better performance.',
    services: ['Go-to-Market Strategy', 'Investor Readiness', 'Business Valuation', 'Due Diligence'],
    clients: ['Optel Vision Inc', 'Isha Yoga', 'Danlow'],
    stat: '1.2 Cr+',
    statLabel: 'IT Professionals in India',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80'
  }
]

const caseHighlights = [
  { industry: 'Hospitality', client: 'Planet Hollywood', work: 'Market Research for new resort in Mumbai' },
  { industry: 'Healthcare', client: 'Madaus Pharma', work: 'Introduced Derma and Gynaec products to India' },
  { industry: 'Retail', client: 'Magsons', work: 'Profitability analysis and MIS report' },
  { industry: 'Manufacturing Technology', client: 'Optel Vision Inc', work: 'End to end advisory for India operations' },
  { industry: 'Food & Beverage', client: 'Monginis', work: 'Identified new outlet locations through research' },
  { industry: 'Healthcare', client: "Dr. Batra's", work: 'Profitability Analysis to improve efficiency' }
]

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(null)
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])
  const detailRef = useRef(null)

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }))
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      )
      observer.observe(ref)
      return observer
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  // Scroll to detail after it renders
  useEffect(() => {
    if (activeIndustry && detailRef.current) {
      const timer = setTimeout(() => {
        const el = detailRef.current
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 100
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [activeIndustry])

  const handleIndustryClick = (industryId) => {
    setActiveIndustry(activeIndustry === industryId ? null : industryId)
  }

  const activeIndustryData = industries.find(ind => ind.id === activeIndustry)

  return (
    <div className="min-h-screen bg-white" data-testid="industries-page">

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Industry Expertise
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                Deep expertise
                <span className="text-[#4E9141]"> across industries</span>
              </h1>
              <p className="text-xl text-[#47635D] leading-relaxed mb-8 max-w-xl">
                Working alongside clients on their most critical challenges often results
                in new industry perspectives and insights.
              </p>
              <a
                href="#industries"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all group"
                data-testid="explore-industries-btn"
              >
                Explore Industries
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Industry Icons Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {industries.slice(0, 9).map((ind) => (
                <div
                  key={ind.id}
                  className="aspect-square rounded-2xl bg-white border border-[#C2DDB4]/30 p-6 flex flex-col items-center justify-center gap-3 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setActiveIndustry(ind.id)
                    document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <ind.icon className="w-8 h-8 text-[#4E9141]" />
                  <span className="text-xs font-medium text-[#47635D] text-center leading-tight">{ind.title.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        ref={el => observerRefs.current[0] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Delivering Impact in Every Industry
          </h2>
          <p className="text-lg text-[#47635D] leading-relaxed max-w-3xl">
            MARC brings expertise spanning every possible industry. We know the challenges faced
            in business environments, hence we turn that challenge into a study, then into a solution
            for every client.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section
        id="industries"
        ref={el => observerRefs.current[1] = el}
        className="py-12 px-6 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`group relative bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:border-[#4E9141] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${activeIndustry === industry.id ? 'ring-2 ring-[#4E9141]' : ''}`}
                onClick={() => handleIndustryClick(industry.id)}
                data-testid={`industry-card-${industry.id}`}
              >
                <div className="absolute inset-0 bg-[#4E9141] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7FFF5] group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                    <industry.icon className="w-7 h-7 text-[#4E9141] group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1D342F] group-hover:text-white transition-colors duration-300 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-[#47635D] group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed mb-4">
                    {industry.shortDesc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#C2DDB4]/30 group-hover:border-white/30 transition-colors duration-300">
                    <div>
                      <div className="text-2xl font-bold text-[#4E9141] group-hover:text-white transition-colors duration-300">
                        {industry.stat}
                      </div>
                      <div className="text-xs text-[#47635D] group-hover:text-white/70 transition-colors duration-300">
                        {industry.statLabel}
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-[#4E9141] group-hover:text-white transition-all duration-300 ${activeIndustry === industry.id ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Detail Section */}
      {activeIndustryData && (
        <section
          ref={detailRef}
          className="relative overflow-hidden"
          style={{ minHeight: '480px' }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={activeIndustryData.image}
              alt={activeIndustryData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1D342F]/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — title + description + stat */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[3px] bg-[#4E9141]" />
                  <span className="text-[#4E9141] font-bold uppercase tracking-[0.1em]">Industry</span>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#4E9141] flex items-center justify-center flex-shrink-0">
                    <activeIndustryData.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">{activeIndustryData.title}</h2>
                </div>

                <p className="text-lg text-white/90 leading-relaxed mb-8">
                  {activeIndustryData.fullDesc}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/20">
                    <div className="text-4xl font-bold text-[#4E9141]">{activeIndustryData.stat}</div>
                    <div className="text-sm text-white/80 mt-1">{activeIndustryData.statLabel}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all text-lg"
                  >
                    Get Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Right — services + clients */}
              <div className="space-y-8">

                {/* Services */}
                <div>
                  <h3 className="text-sm font-bold text-[#4E9141] uppercase tracking-widest mb-4">
                    What We Do
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {activeIndustryData.services.map((service, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4E9141] flex-shrink-0" />
                        <span className="text-sm text-white/90">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clients — only shown when available */}
                {activeIndustryData.clients.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-[#4E9141] uppercase tracking-widest mb-4">
                      Clients We've Worked With
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {activeIndustryData.clients.map((client, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      <section
        ref={el => observerRefs.current[2] = el}
        className="py-16 px-6 bg-white"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
            Client Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseHighlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#F7FFF5] hover:bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-xs font-semibold text-[#4E9141] uppercase tracking-wider mb-2">
                  {item.industry}
                </div>
                <h3 className="text-lg font-bold text-[#1D342F] mb-2">{item.client}</h3>
                <p className="text-sm text-[#47635D]">{item.work}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let us help you navigate your industry's complexities with data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
              data-testid="contact-cta-btn"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Explore Our Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}