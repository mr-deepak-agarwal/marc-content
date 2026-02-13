'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, ChevronRight, Building2, Car, Shirt, Construction, ShoppingBag, ShoppingCart, GraduationCap, Utensils, Stethoscope, Hotel, Factory, Cpu } from 'lucide-react'

const industries = [
  {
    id: 'automobile',
    icon: Car,
    title: 'Automobile & Mobility',
    shortDesc: 'Supply chain, R&D, and consumer studies for automotive excellence.',
    fullDesc: 'Seamless mobility connects the dots and paves the way for swift and long-lasting development. As the automotive industry advances in EV and AV technology, navigating through rapid shifts is crucial. Our experts assist firms to pick the right supply chains and develop strategic frameworks.',
    stat: '$82.6B',
    statLabel: 'US Auto Market'
  },
  {
    id: 'textile',
    icon: Shirt,
    title: 'Clothing & Textile',
    shortDesc: 'Latest trends, market size, and customer buying patterns.',
    fullDesc: 'The textile industry spans beyond fashion apparel. Medical textiles and protective apparel are examples of niche products finding origin in this industry. MARC offers services from market research to financial modelling and strategic advisory.',
    stat: '$70B',
    statLabel: 'US Textile Industry'
  },
  {
    id: 'construction',
    icon: Construction,
    title: 'Construction & Infrastructure',
    shortDesc: 'Feasibility studies and strategic building blocks for projects.',
    fullDesc: 'The progress of a society rests on the shoulders of its infrastructure. Our proficiency at M&A, due diligence, formulation of SOPs, and deal advisory can give optimum results in viability studies.',
    stat: '$1.36T',
    statLabel: 'US Construction Sector'
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer Products',
    shortDesc: 'Accurate market feasibility reports and research data.',
    fullDesc: 'From FMCG products to perishable fresh foods, the consumer-oriented sector encompasses a diverse variety. Succeeding requires deep consumer understanding, streamlined supply chains and robust finances.',
    stat: 'B2C',
    statLabel: 'Focus Area'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    shortDesc: 'Inventory management and successful sales channels.',
    fullDesc: 'The E-commerce industry revolutionized the business world. Its impact has transformed consumer behaviour patterns and supply chain functions on a large scale. MARC provides market research, deal advisory, and financial analysis.',
    stat: '4.1%',
    statLabel: 'FMCG via E-Commerce'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    shortDesc: 'Market feasibility studies for educational institutions.',
    fullDesc: 'With less reliance on traditional schooling and rise of online platforms, education systems are undergoing transition. Our experience in assisting institutions with governance, systems, finance enables actionable roadmaps.',
    stat: '4.68M',
    statLabel: 'US Doctorate Holders'
  },
  {
    id: 'food',
    icon: Utensils,
    title: 'Food & Beverage',
    shortDesc: 'Strategic growth through feasibility studies and market research.',
    fullDesc: 'The industry includes restaurants, fast-food joints, manufacturing operations, and catering businesses. Quality, packaging, pricing, hygiene, storage and delivery channels all make huge impact.',
    stat: '7.8%',
    statLabel: 'US Grocery Growth 2020'
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare',
    shortDesc: 'Research analysis for pharma companies and healthcare systems.',
    fullDesc: 'The advent of COVID-19, better understanding of mental health and rapid digitization are transforming healthcare. Our professionals assist with strategic advisory, expansion, and customer trend analysis.',
    stat: '5%',
    statLabel: 'Annual Profit Growth'
  },
  {
    id: 'hospitality',
    icon: Hotel,
    title: 'Hospitality',
    shortDesc: 'Tourist profile analysis and regional market research.',
    fullDesc: 'MARC is headquartered in Goa, India\'s most sought-after tourist destination. Our services help clientele understand tourist profiles, tourism trends, and type of hotel clusters to grab opportunities.',
    stat: '$5.5T',
    statLabel: 'Global Tourism by 2029'
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing & Services',
    shortDesc: 'Quality control, procurement, inventory, and ERP systems.',
    fullDesc: 'In the rapidly changing industrial landscape, products that once were essential often get outdated. Our extensive feasibility studies, research data, and operational guidelines enable success.',
    stat: '54.5',
    statLabel: 'US Manufacturing Index'
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Technology',
    shortDesc: 'Streamlined workflows through blockchain and automation.',
    fullDesc: 'Technology devices are becoming smarter and more connected thanks to 5G and AI in IoT. We develop resilient tech and review systems to streamline workflows and pivot businesses towards better performance.',
    stat: 'AI/5G',
    statLabel: 'Emerging Tech'
  }
]

const caseHighlights = [
  { industry: 'Hospitality', client: 'Planet Hollywood', work: 'Market Research for new resort in Mumbai' },
  { industry: 'Healthcare', client: 'Madaus Pharma', work: 'Introduced Derma and Gynaec products to India' },
  { industry: 'E-commerce', client: 'Magsons', work: 'Profitability analysis and MIS report' },
  { industry: 'Technology', client: 'Optel Vision Inc', work: 'End to end advisory for India operations' },
  { industry: 'Food & Beverage', client: 'Monginis', work: 'Identified new outlet locations through research' },
  { industry: 'Healthcare', client: "Dr. Batra's", work: 'Profitability Analysis to improve efficiency' }
]

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(null)
  const [isVisible, setIsVisible] = useState({})
  const observerRefs = useRef([])

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

  const handleIndustryClick = (industryId) => {
    setActiveIndustry(activeIndustry === industryId ? null : industryId)
    setTimeout(() => {
      const element = document.getElementById(`industry-detail-${industryId}`)
      if (element) {
        const headerOffset = 100 // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-white" data-testid="industries-page">

      {/* Hero Section - Reduced whitespace */}
      <section className="relative pt-28 pb-16 bg-[#F7FFF5] overflow-hidden">
        {/* Background decorations */}
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
              {industries.slice(0, 9).map((ind, i) => (
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

      {/* Industries We Serve - Left aligned with line */}
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
            in business environments, hence we turn that challenge into a study—then into a solution 
            for every client.
          </p>
        </div>
      </section>

      {/* Industries Grid - Fixed card hover colors */}
      <section 
        id="industries"
        ref={el => observerRefs.current[1] = el}
        className="py-12 px-6 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                className={`group relative bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:border-[#4E9141] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${activeIndustry === industry.id ? 'ring-2 ring-[#4E9141]' : ''}`}
                onClick={() => handleIndustryClick(industry.id)}
                data-testid={`industry-card-${industry.id}`}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-[#4E9141] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#F7FFF5] group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                    <industry.icon className="w-7 h-7 text-[#4E9141] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1D342F] group-hover:text-white transition-colors duration-300 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-[#47635D] group-hover:text-white/90 transition-colors duration-300 text-sm leading-relaxed mb-4">
                    {industry.shortDesc}
                  </p>

                  {/* Stat */}
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

      {/* Industry Detail Section - Image Background */}
      {activeIndustry && (
        <section 
          id={`industry-detail-${activeIndustry}`}
          className="relative py-24 lg:py-32 px-6 overflow-hidden"
        >
          {industries.filter(ind => ind.id === activeIndustry).map((industry) => (
            <div key={industry.id} className="relative">
              {/* Background Image - More transparent */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={`https://images.unsplash.com/photo-${
                    industry.id === 'automobile' ? '1492144534655-ae79c964c9d7' :
                    industry.id === 'textile' ? '1558171813-4c2e0d6e3d08' :
                    industry.id === 'construction' ? '1504307651254-35680f356dfd' :
                    industry.id === 'consumer' ? '1556742049-0cfed4f6a45d' :
                    industry.id === 'ecommerce' ? '1556742111-a301076d9d18' :
                    industry.id === 'education' ? '1523050854058-8df90110c9f1' :
                    industry.id === 'food' ? '1414235077428-338989a2e8c0' :
                    industry.id === 'healthcare' ? '1576091160399-112ba8d25d1d' :
                    industry.id === 'hospitality' ? '1566073771259-6a8506099945' :
                    industry.id === 'manufacturing' ? '1581091226825-a6a2a5aee158' :
                    '1518770660439-4636190af475'
                  }?w=1920&q=80`}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
                {/* Darker overlay for better content visibility */}
                <div className="absolute inset-0 bg-[#1D342F]/90" />
              </div>

              {/* Content - More padding */}
              <div className="relative z-10 max-w-7xl mx-auto">
                <div className="max-w-2xl py-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[3px] bg-[#4E9141]" />
                    <span className="text-[#4E9141] font-bold uppercase tracking-[0.1em]">
                      Industry
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-[#4E9141] flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white">{industry.title}</h2>
                  </div>
                  
                  <p className="text-xl text-white/90 leading-relaxed mb-10">
                    {industry.fullDesc}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
                      <div className="text-5xl font-bold text-[#4E9141]">{industry.stat}</div>
                      <div className="text-sm text-white/80 mt-1">{industry.statLabel}</div>
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
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Success Stories - Left aligned with green line */}
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

      {/* CTA Section - Green background like other pages */}
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
