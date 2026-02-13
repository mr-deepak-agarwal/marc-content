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
    title: 'Market Sizing & Segmentation',
    desc: 'Determine total addressable market, serviceable market, and growth potential with accurate forecasting.',
    icon: PieChart,
    features: ['TAM/SAM/SOM Analysis', 'Growth Projections', 'Segment Identification']
  },
  {
    title: 'Quantitative Research',
    desc: 'We use segmentation, forecasting, and demand planning techniques to bring broad, actionable insights.',
    icon: BarChart3,
    features: ['Survey Design', 'Statistical Analysis', 'Demand Planning']
  },
  {
    title: 'Qualitative Research',
    desc: 'Understand your customers deeply and fill the gaps with nuanced insights from key opinion leaders.',
    icon: Users,
    features: ['In-depth Interviews', 'Focus Groups', 'Expert Consultations']
  },
  {
    title: 'Competitive Intelligence',
    desc: 'Generate the perfect strategy based on competitor profiling and market positioning analysis.',
    icon: Target,
    features: ['Competitor Profiling', 'SWOT Analysis', 'Market Share Mapping']
  },
  {
    title: 'B2B Market Research',
    desc: 'Detailed reports on competitor analysis, consumer analysis, and thorough knowledge of distribution channels.',
    icon: Building2,
    features: ['Decision Maker Research', 'Channel Analysis', 'B2B Buyer Journey']
  },
  {
    title: 'Industry Analysis',
    desc: 'Deep-dive into market trends, value chains, regulatory landscape, and future outlook.',
    icon: Globe,
    features: ['Trend Analysis', 'Value Chain Mapping', 'Regulatory Review']
  },
]

// Methodology steps
const methodology = [
  { num: '01', title: 'Discovery', desc: 'Understanding your business objectives and research questions' },
  { num: '02', title: 'Design', desc: 'Crafting the research methodology and data collection approach' },
  { num: '03', title: 'Collection', desc: 'Gathering primary and secondary data from multiple sources' },
  { num: '04', title: 'Analysis', desc: 'Applying analytical frameworks to extract meaningful insights' },
  { num: '05', title: 'Synthesis', desc: 'Translating findings into actionable recommendations' },
  { num: '06', title: 'Delivery', desc: 'Presenting insights with clear strategic implications' },
]

// Case study from original content
const caseStudy = {
  title: 'Staff Augmentation Company - US Market Expansion',
  client: 'Colombia-based Technology Company',
  challenge: 'A staff augmentation company based in Colombia wanted to expand their reach in the US. They focus on partnering with clients in digital solutions, unified customer experiences, and process automation.',
  approach: [
    'Researched staff augmentation industry and key technologies',
    'Analyzed market size of Big Data, AI, and RPA',
    'Identified competitors across the US by services and sectors',
    'Mapped geographical pockets and customer prospects'
  ],
  outcome: 'Through the study, the client was able to identify various geographical pockets, key industries and customer prospects to target with their offering.'
}

// FAQs
const faqs = [
  {
    q: 'Why is market research important for business decisions?',
    a: 'Almost all business decisions involve huge sums of money either directly or indirectly. Thorough market research provides a simplified yet analytical synopsis of the market, helping management take initiatives that not only yield profits but also maximize them.'
  },
  {
    q: 'What is the difference between B2B and B2C market research?',
    a: 'B2B decision makers are fewer, harder to reach and considered more rational. Successful B2B research requires an overtoned understanding of business environments, including detailed competitor analysis, consumer analysis, product feasibility studies, and thorough knowledge of distribution channels.'
  },
  {
    q: 'How much should companies invest in market research?',
    a: 'Top performing companies spend around 5-20% of their annual revenue on market research. This investment helps mitigate risks and maximize profits through informed decision-making.'
  },
  {
    q: 'What makes MARC different from other research firms?',
    a: 'Our research and analytics team generates customized reports compiled from data that is both accurate and relevant. Through in-depth analysis, we present viable options to management, resulting in more informed and better decision-making.'
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
                Delivering on the Vision of a
                <span className="text-[#4E9141]"> Data-Driven Enterprise</span>
              </h1>
              
              <p className="text-[#47635D] text-lg leading-relaxed mb-10 max-w-xl">
                We take a comprehensive approach to your data challenges, helping you conquer obstacles and become an analytics leader. Our customized research enables more informed and better decision-making.
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
              Quantitative & Qualitative Market Research Solutions
            </h2>
            <p className="text-[#47635D] text-lg">
              Thorough market research provides a simplified yet analytical synopsis of the market, customized based on the domain and nature of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Revenue Assessment',
                desc: 'With our analysis, we assess revenues, make projections, and analyze costs and profitability to develop robust financial models.'
              },
              {
                icon: Target,
                title: 'Risk Mitigation',
                desc: 'We use financial models as tools to enable businesses to maximize profits by mitigating risks and reducing losses.'
              },
              {
                icon: Lightbulb,
                title: 'Actionable Insights',
                desc: 'Our in-depth analysis presents viable options to management, resulting in more informed and better decision-making.'
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
              Market Research Solutions & Data Analytics
            </h2>
            <p className="text-[#47635D] text-lg">
              Comprehensive research capabilities spanning India and 30+ international markets.
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
                Importance of B2B Market Research
              </h2>
              <p className="text-[#47635D] text-lg mb-6">
                The fundamental differences between B2B and B2C transactions are that B2B decision makers are fewer, harder to reach, and considered to be more rational. Successful presence in B2B markets requires an overtoned understanding of business environments.
              </p>
              <p className="text-[#47635D] mb-8">
                Our experts obtain sufficient information required to make a mark in the B2B market and work with clients till their business objectives are met. The research methods we use are tailor-made to suit the requirements of our clients.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Detailed competitor analysis and market mapping',
                  'Consumer analysis and buyer journey research',
                  'Product feasibility studies',
                  'Distribution channel assessment',
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
                <h3 className="text-2xl font-bold text-[#1D342F] mb-6">Market & Competitive Intelligence</h3>
                <p className="text-[#47635D] mb-8">
                  Formulating accurate competitive insights quickly can be critical for business growth. Our decade of experience enables us to provide insights that make a subtle yet impactful difference.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Competitor Profiling', 'Industry Analysis', 'Market Sizing', 'Strategic Partner Selection'].map((item, i) => (
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
              Rigorous, Insight-Led Methodology
            </h2>
            <p className="text-[#47635D] text-lg">
              We approach our research with a view to establishing a sustainable and successful business environment — "Delivering Excellence, Partnering Success."
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
                  US Market Expansion
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
            Ready to Make Data-Driven Decisions?
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">
            We're ready to answer your questions and take your brand to the next level with comprehensive market research and analytics.
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
