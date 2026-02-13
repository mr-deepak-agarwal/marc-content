'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, FileCheck, MapPin, Building2, TrendingUp, Calculator, 
  Target, CheckCircle2, ArrowUpRight, ChevronDown, Lightbulb,
  Shield, BarChart3, Users, Globe, PieChart
} from 'lucide-react'

// Value propositions from original content
const valueProps = [
  {
    icon: PieChart,
    title: 'Market Feasibility',
    desc: 'We analyse the target market by evaluating competitors, estimated sales, market constraints, and market potential.'
  },
  {
    icon: Shield,
    title: 'Technical Feasibility',
    desc: 'We analyse technical factors such as labour laws, legal compliance, and relevant regulations.'
  },
  {
    icon: Calculator,
    title: 'Financial Feasibility',
    desc: 'Capital requirements, and potential financial returns for the project with detailed projections.'
  },
]

// Services offered
const services = [
  {
    icon: Target,
    title: 'Market Demand Assessment',
    desc: 'Evaluate market demand, customer profiling, and growth potential before committing capital.'
  },
  {
    icon: Building2,
    title: 'Location Feasibility',
    desc: 'Business location & feasibility advisory services to identify optimal geographies and operating models.'
  },
  {
    icon: TrendingUp,
    title: 'Financial Viability',
    desc: 'Comprehensive analysis of capital requirements, ROI projections, and financial sustainability.'
  },
  {
    icon: Shield,
    title: 'Risk Analysis',
    desc: 'Identify potential risks, regulatory factors, and execution challenges before investment.'
  },
  {
    icon: BarChart3,
    title: 'Competitive Benchmarking',
    desc: 'Market sizing, entry barriers, pricing analysis, and competitive landscape mapping.'
  },
  {
    icon: FileCheck,
    title: 'Business Planning',
    desc: 'Integrated feasibility study and business planning services for structured execution roadmaps.'
  },
]

// Case study from original
const caseStudy = {
  title: 'K12 Residential School Feasibility Study',
  client: 'Accomplished Group - Pune, India',
  challenge: 'An accomplished group wanted to launch a world-class educational institution in Pune, India. We were tasked with conducting a location-based feasibility study of setting up a K12 residential school.',
  approach: [
    'Common size and variance analysis',
    'Analyzing key cost centers',
    'Comparison of budget and actuals',
    'Vertical/Segment wise analysis',
    'Primary and secondary market research',
    'Stakeholder interviews with distinguished individuals'
  ],
  outcome: 'Based on our study, we provided a comprehensive way forward to the client including a roadmap on execution of the project. The project is underway.'
}

// FAQs from original
const faqs = [
  {
    q: 'What is a feasibility study for business?',
    a: 'A feasibility study for a business evaluates market demand, financial viability, technical requirements, and operational risks before launching or expanding a venture.'
  },
  {
    q: 'Why are feasibility study services important in India?',
    a: 'With diverse markets and regulatory complexity, feasibility study services in India help businesses minimize risk and align investments with real market potential.'
  },
  {
    q: 'What does a feasibility company typically analyze?',
    a: 'A feasibility company assesses market feasibility, financial returns, location suitability, regulatory factors, and execution challenges.'
  },
  {
    q: 'Who should opt for business feasibility services?',
    a: 'Startups, MSMEs, investors, and large enterprises planning new ventures, expansions, or capital investments benefit from Business Feasibility Services.'
  },
  {
    q: 'When should I engage a feasibility study consultant?',
    a: 'A feasibility study consultant should be engaged before launching a new business, entering a new market, expanding operations, raising capital, or selecting a business location.'
  },
]

export default function FeasibilityStudyPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [visibleSections, setVisibleSections] = useState({})
  const sectionRefs = useRef({})

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
    <div className="bg-[#FAFAF8] min-h-screen">
      
      {/* Subtle grain texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015] z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />

      {/* Hero Section - Warm Professional */}
      <section id="hero" className="relative pt-32 pb-28 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#4E9141]/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#C2DDB4]/15 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div 
              className={`transition-all duration-700 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-[#C2DDB4]/40 mb-10">
                <FileCheck className="w-4 h-4 text-[#4E9141]" />
                <span className="text-[#4E9141] font-medium text-sm">Feasibility Study Services</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#1D342F] leading-[1.08] mb-8">
                Taking The Right Step
                <span className="block text-[#4E9141]">Towards Your Business Future</span>
              </h1>
              
              <p className="text-[#47635D] text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl">
                Assess risks and rewards with MARC's feasibility study for business. We help you understand the risks, rewards, and everything in between before taking a business decision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] hover:shadow-xl hover:shadow-[#4E9141]/20 transition-all duration-300 group"
                  data-testid="hero-cta-button"
                >
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-[#C2DDB4] text-[#1D342F] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all duration-300"
                  data-testid="hero-secondary-button"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-300 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: '360°', label: 'Research Coverage' },
              { value: '100+', label: 'Feasibility Studies' },
              { value: '30+', label: 'Countries' },
              { value: '14+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#C2DDB4]/20 hover:shadow-md hover:border-[#4E9141]/20 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#4E9141]">{stat.value}</div>
                <div className="text-[#47635D] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions - Editorial Style */}
      <section id="value" className="py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={`transition-all duration-700 ${visibleSections.value ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Our Value Propositions</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4 mb-6 leading-tight">
                We Have the Experience and Expertise
              </h2>
              <p className="text-[#47635D] text-lg mb-8">
                Conducting project feasibility studies can help assess whether a business venture will be successful or not. Effective feasibility studies require attention to detail and critical insight.
              </p>
              <p className="text-[#47635D] mb-10">
                MARC provides feasibility studies to decision-makers by evaluating all relevant parameters. We provide you with 360-degree research services that cover global, national, and local markets.
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-[#4E9141] font-semibold hover:text-[#3d7334] transition-colors group"
                data-testid="value-section-cta"
              >
                Discuss Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className={`space-y-6 transition-all duration-700 delay-200 ${visibleSections.value ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {valueProps.map((prop, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg hover:border-[#4E9141]/30 transition-all duration-500 group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-[#F7FFF5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4E9141]/10 transition-colors">
                      <prop.icon className="w-7 h-7 text-[#4E9141]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1D342F] mb-2">{prop.title}</h3>
                      <p className="text-[#47635D]">{prop.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Staggered Cards */}
      <section id="services" className="py-28 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Comprehensive Services</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4 mb-6">
              Business Feasibility Services
            </h2>
            <p className="text-[#47635D] text-lg">
              Our comprehensive Business Feasibility Services ensure that ideas are tested before capital is committed. Each service is designed to reduce uncertainty and strengthen decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className={`bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-xl hover:border-[#4E9141]/20 hover:-translate-y-2 transition-all duration-500 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
                data-testid={`service-card-${i}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4E9141] to-[#3d7334] flex items-center justify-center mb-6 shadow-lg shadow-[#4E9141]/20">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-3">{service.title}</h3>
                <p className="text-[#47635D] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use - Magazine Layout */}
      <section id="audience" className="py-28 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className={`lg:col-span-2 transition-all duration-700 ${visibleSections.audience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Who Benefits</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mt-4 mb-6">
                Our Offerings Cover Businesses of All Sizes
              </h2>
              <p className="text-[#47635D] text-lg">
                You may be a start-up or a well-aged conglomerate that wants a deeper look into your business viability. We provide unbiased feasibility studies that form a solid basis for your decision-making process.
              </p>
            </div>

            <div className={`lg:col-span-3 grid sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${visibleSections.audience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { icon: Lightbulb, title: 'Startups', desc: 'Validate your business idea before committing resources' },
                { icon: Building2, title: 'MSMEs', desc: 'Assess expansion opportunities and new market entry' },
                { icon: TrendingUp, title: 'Investors', desc: 'Due diligence support for investment decisions' },
                { icon: Globe, title: 'Enterprises', desc: 'Strategic feasibility for large-scale projects' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-6 border border-[#C2DDB4]/30 hover:shadow-md hover:border-[#4E9141]/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F7FFF5] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <h3 className="font-bold text-[#1D342F] mb-2">{item.title}</h3>
                  <p className="text-[#47635D] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Asymmetric Layout */}
      <section id="case" className="py-28 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${visibleSections.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Case Study</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4">
              Real Results in Action
            </h2>
          </div>

          <div className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-[#C2DDB4]/20 transition-all duration-700 ${visibleSections.case ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid lg:grid-cols-5">
              {/* Left side - Details */}
              <div className="lg:col-span-3 p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7FFF5] rounded-full text-[#4E9141] text-sm font-medium mb-8 border border-[#C2DDB4]/30">
                  <MapPin className="w-4 h-4" />
                  Location-Based Feasibility Study
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mb-4">{caseStudy.title}</h3>
                <p className="text-[#4E9141] font-medium mb-4">{caseStudy.client}</p>
                <p className="text-[#47635D] mb-10 text-lg">{caseStudy.challenge}</p>
                
                <h4 className="font-bold text-[#1D342F] mb-6 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#4E9141]" />
                  What MARC Did
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {caseStudy.approach.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4E9141] mt-0.5 flex-shrink-0" />
                      <span className="text-[#47635D] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side - Outcome */}
              <div className="lg:col-span-2 bg-gradient-to-br from-[#1D342F] to-[#2a4a42] p-10 lg:p-14 flex flex-col justify-center">
                <h4 className="text-[#C2DDB4] font-medium uppercase tracking-wider text-sm mb-6">Outcome</h4>
                <p className="text-white text-xl lg:text-2xl leading-relaxed mb-10 font-light">
                  "{caseStudy.outcome}"
                </p>
                <div className="pt-8 border-t border-white/10">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all group"
                    data-testid="case-study-cta"
                  >
                    Start Your Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Clean Accordion */}
      <section id="faq" className="py-28 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">FAQs</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mt-4">
              Feasibility Study FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className={`bg-white rounded-2xl border border-[#C2DDB4]/30 overflow-hidden transition-all duration-500 hover:shadow-md ${visibleSections.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F7FFF5]/50 transition-colors"
                  data-testid={`faq-button-${i}`}
                >
                  <span className="font-semibold text-[#1D342F] pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#F7FFF5] flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? 'bg-[#4E9141]' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-all ${openFaq === i ? 'rotate-180 text-white' : 'text-[#4E9141]'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-8 pb-6">
                    <p className="text-[#47635D] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Warm */}
      <section className="py-28 bg-gradient-to-br from-[#1D342F] to-[#2a4a42] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Planning a Feasibility Study for Business in India?
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-12 max-w-2xl mx-auto">
            Make informed decisions with MARC's expert-led Feasibility Study for Business, backed by market insight, financial analysis, and execution clarity.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#5ba84d] hover:shadow-xl hover:shadow-[#4E9141]/30 transition-all duration-300 group"
            data-testid="final-cta-button"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
