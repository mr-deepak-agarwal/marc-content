'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, CheckCircle2, TrendingUp, Users, Target, BarChart3,
  Globe, Building2, Lightbulb, ChevronDown, ChevronRight, ExternalLink,
  Search, PieChart, MapPin, Layers, FileText, Zap, Shield, Award
} from 'lucide-react'

// Service Data
const serviceHighlights = [
  { icon: Search, title: 'Deep Market Intelligence', desc: 'Comprehensive analysis of market size, growth potential, and demand drivers' },
  { icon: Users, title: 'Customer Insights', desc: 'Understand behaviors, preferences, and unmet needs of your target segments' },
  { icon: BarChart3, title: 'Competitive Analysis', desc: 'Benchmark competitors on offerings, pricing, positioning and market reach' },
  { icon: Globe, title: 'Global Coverage', desc: 'Research capabilities spanning domestic and international markets' },
]

const methodology = [
  { step: '01', title: 'Industry Assessment', desc: 'In-depth analysis of market size, growth potential, key segments, and regulatory frameworks' },
  { step: '02', title: 'Primary Research', desc: 'On-ground intelligence from distributors, customers, manufacturers, and industry experts' },
  { step: '03', title: 'Competitive Intelligence', desc: 'Comprehensive competitor analysis covering offerings, pricing, positioning, and supply chain' },
  { step: '04', title: 'Customer Segmentation', desc: 'Integrate research to segment customers accurately and identify attractive target segments' },
  { step: '05', title: 'Financial Projections', desc: 'Data-backed feasibility studies with IRR, ROI, and NPV calculations' },
  { step: '06', title: 'Strategic Roadmap', desc: 'Translate insights into actionable market entry and growth strategies' },
]

const services = [
  {
    id: 'land',
    title: 'Land Feasibility',
    icon: MapPin,
    desc: 'Determine the most viable and profitable use of a land parcel by assessing market potential and development suitability.',
    features: ['Market demand analysis', 'Demand-supply gap assessment', 'Competitive scenario mapping', 'Financial modeling with ROI projections'],
  },
  {
    id: 'product',
    title: 'Product Feasibility',
    icon: Layers,
    desc: 'Identify the right target customer, evaluate potential demand, optimum pricing, and distribution fit.',
    features: ['Target customer identification', 'Demand evaluation', 'Pricing optimization', 'Distribution channel analysis'],
  },
  {
    id: 'demand',
    title: 'Demand-Supply Gap',
    icon: PieChart,
    desc: 'Measure the real market gap using proprietary methods for accurate scale and capacity decisions.',
    features: ['Bottom-up & top-down analysis', 'Consumption trend evaluation', 'Supply pipeline assessment', 'Saturation risk identification'],
  },
  {
    id: 'expansion',
    title: 'Market Expansion',
    icon: TrendingUp,
    desc: 'Evaluate and benchmark locations to determine the most attractive markets and expansion strategy.',
    features: ['Location benchmarking', 'Customer segment analysis', 'Competitor intelligence', 'Go-to-market roadmaps'],
  },
]

const caseStudies = [
  {
    client: 'Models Construction',
    industry: 'Real Estate',
    challenge: 'Identify viable industrial/commercial alternatives for land near an industrial estate',
    solution: 'Conducted macro-level analysis, radius assessment, competitor mapping, and financial feasibility',
    result: 'Data-backed recommendation enabling client diversification with superior ROI',
    color: 'from-#4E9141 to-teal-600',
  },
  {
    client: 'Fly91 Aviation',
    industry: 'Aviation',
    challenge: 'Assess viability of launching flights on four routes under UDAN scheme',
    solution: 'Demand-supply dynamics analysis, traveller profiling, route-level assessment',
    result: 'Go/no-go recommendation with optimal flight frequency for operational efficiency',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    client: 'ACC Alcon',
    industry: 'Building Materials',
    challenge: 'Strategic market entry and location selection for gypsum plaster segment',
    solution: 'Primary interviews, competitor benchmarking, structured location scoring model',
    result: 'Identified viable location and optimal scale of operation',
    color: 'from-purple-500 to-pink-600',
  },
]

const stats = [
  { value: '500+', label: 'Research Projects', icon: FileText },
  { value: '30+', label: 'Countries Covered', icon: Globe },
  { value: '14+', label: 'Years Experience', icon: Award },
  { value: '98%', label: 'Client Satisfaction', icon: Shield },
]

const faqs = [
  { q: 'What industries does MARC cover for market research?', a: 'We cover diverse sectors including real estate, manufacturing, aviation, FMCG, healthcare, technology, and more. Our sector-agnostic approach ensures deep insights regardless of industry.' },
  { q: 'How long does a typical market research project take?', a: 'Project timelines vary based on scope and complexity. A focused feasibility study may take 4-6 weeks, while comprehensive market entry research can span 8-12 weeks.' },
  { q: 'Do you provide both primary and secondary research?', a: 'Yes, we combine robust secondary research with extensive primary research including stakeholder interviews, surveys, and on-ground intelligence for validated insights.' },
  { q: 'Can MARC support international market research?', a: 'Absolutely. We have conducted research across 30+ countries, supporting Indian companies in global expansion and international investors entering India.' },
]

export default function MarketResearchOptionA() {
  const [activeService, setActiveService] = useState('land')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-#1D342F min-h-screen">
    

      {/* Hero Section - Bento Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-#4E9141/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-#5D9F94/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-#4E9141/10 border border-#4E9141/20 text-#5FBB46 text-sm font-medium mb-6">
                <Search className="w-4 h-4" />
                Market Research Services
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight mb-6">
                Navigate Markets with
                <span className="text-#5FBB46 block">Data-Driven Clarity</span>
              </h1>
              <p className="text-#47635D text-lg mb-8 leading-relaxed">
                Deep insights into customer behavior, market trends, competitive landscape, and commercial feasibility. We empower confident decisions for market entry, expansion, and long-term growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 bg-#4E9141 text-white rounded-xl font-semibold hover:bg-#5FBB46 transition-all shadow-lg shadow-#4E9141/25 flex items-center justify-center gap-2 group">
                  Start Your Research
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#case-studies" className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right - Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              {serviceHighlights.map((item, i) => (
                <div key={i} className={`bg-#1D342F/80 backdrop-blur-sm border border-#2a4a43 rounded-2xl p-6 hover:border-#4E9141/30 transition-all duration-300 group ${i === 0 ? 'col-span-2' : ''}`}>
                  <div className="w-12 h-12 bg-#4E9141/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-#5FBB46" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-#47635D text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-#4E9141 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-#C2DDB4 mx-auto mb-2" />
                <div className="font-serif text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-#C2DDB4 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-#1D342F">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-#5FBB46 text-sm tracking-widest uppercase">Our Approach</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white mt-4">
              Rigorous, Insight-Led <span className="text-#5FBB46">Methodology</span>
            </h2>
            <p className="text-#47635D mt-4 max-w-2xl mx-auto">
              We combine deep sector expertise with strong on-ground intelligence, defined by precision and analytical rigor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((item, i) => (
              <div key={i} className="bg-#1D342F/50 border border-#2a4a43 rounded-2xl p-6 hover:border-#4E9141/30 transition-all group">
                <span className="text-5xl font-serif font-bold text-#4E9141/20 group-hover:text-#4E9141/40 transition-colors">{item.step}</span>
                <h3 className="font-serif text-xl text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-#47635D text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Tabs */}
      <section className="py-24 bg-gradient-to-b from-#1D342F to-#1D342F">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-#5FBB46 text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white mt-4">
              Key Research <span className="text-#5FBB46">Services</span>
            </h2>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeService === service.id
                    ? 'bg-#4E9141 text-white'
                    : 'bg-#2a4a43 text-#47635D hover:text-white hover:bg-#47635D'
                }`}
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          {services.filter(s => s.id === activeService).map((service) => (
            <div key={service.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-#4E9141/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-#5FBB46" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-4">{service.title}</h3>
                <p className="text-#47635D text-lg mb-8">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-#B4DAD3">
                      <CheckCircle2 className="w-5 h-5 text-#4E9141 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-#4E9141/10 to-#5D9F94/10 rounded-3xl p-8 border border-#4E9141/20">
                <div className="aspect-video bg-#1D342F/50 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-24 h-24 text-#4E9141/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies - Horizontal Scroll */}
      <section id="case-studies" className="py-24 bg-#1D342F">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-#5FBB46 text-sm tracking-widest uppercase">Success Stories</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-white mt-4">
                Case <span className="text-#5FBB46">Studies</span>
              </h2>
            </div>
            <Link href="/case-studies" className="hidden md:flex items-center gap-2 text-#5FBB46 hover:text-#8CC978 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-#1D342F rounded-2xl overflow-hidden border border-#2a4a43 hover:border-#4E9141/30 transition-all group">
                <div className={`h-2 bg-gradient-to-r ${study.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-#2a4a43 text-#47635D rounded-full text-xs">{study.industry}</span>
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">{study.client}</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-#5FBB46 font-medium mb-1">Challenge</p>
                      <p className="text-#47635D">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-#5FBB46 font-medium mb-1">Solution</p>
                      <p className="text-#47635D">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-#5FBB46 font-medium mb-1">Result</p>
                      <p className="text-#B4DAD3">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-#1D342F">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-#5FBB46 text-sm tracking-widest uppercase">Common Questions</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-white mt-4">
              Frequently Asked <span className="text-#5FBB46">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-#1D342F border border-#2a4a43 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-#5FBB46 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-#47635D">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-#4E9141 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white mb-6">
            Ready to Unlock Market Insights?
          </h2>
          <p className="text-#C2DDB4 text-lg mb-8 max-w-2xl mx-auto">
            Partner with MARC for data-driven clarity that powers confident business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-white text-#3d7334 rounded-xl font-semibold hover:bg-#F0F8F6 transition-all shadow-lg flex items-center justify-center gap-2 group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/case-studies" className="px-10 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Download Credentials
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
