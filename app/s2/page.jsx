'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, CheckCircle2, TrendingUp, Users, Target, BarChart3,
  Globe, Building2, Lightbulb, ChevronDown, ChevronRight, ExternalLink,
  Search, PieChart, MapPin, Layers, FileText, Zap, Shield, Award,
  ArrowUpRight, Play
} from 'lucide-react'

// Service Data
const valueProps = [
  { icon: Shield, title: 'Minimize Risk', desc: 'Validate market demand, feasibility, regulatory considerations, and competitive intensity' },
  { icon: TrendingUp, title: 'Unlock Growth', desc: 'Identify underserved segments, emerging demand pockets, and region-specific potential' },
  { icon: Target, title: 'Strategic Clarity', desc: 'Reliable insights on market sizing, consumer behavior, and supply-demand realities' },
  { icon: Zap, title: 'Faster Entry', desc: 'Location-driven strategy, competitor intelligence, and actionable go-to-market roadmaps' },
]

const methodology = [
  { num: '01', title: 'Industry Assessment', desc: 'In-depth analysis of market size, growth potential, key segments, demand drivers, and regulatory frameworks.' },
  { num: '02', title: 'Primary Research', desc: 'Granular on-ground research with distributors, customers, manufacturers, and industry experts for real-time validation.' },
  { num: '03', title: 'Competitive Intelligence', desc: 'Comprehensive competitor analysis covering offerings, pricing, positioning, customer reach, and supply chain.' },
  { num: '04', title: 'Customer Segmentation', desc: 'Integrate primary and secondary research to segment customers and identify attractive target segments.' },
  { num: '05', title: 'Financial Projections', desc: 'Data-backed feasibility and financial projections including IRR, ROI, and NPV calculations.' },
  { num: '06', title: 'Strategic Roadmap', desc: 'Translate insights into actionable market entry and growth roadmaps with clear next steps.' },
]

const services = [
  {
    title: 'Land Feasibility',
    desc: 'Determine the most viable and profitable use of a land parcel by assessing market potential, development suitability, and regulatory landscape.',
    features: ['Market demand analysis', 'Demand-supply gap', 'Competitive scenario', 'Financial modeling'],
    icon: MapPin,
  },
  {
    title: 'Product Feasibility',
    desc: 'Identify the right target customer, evaluate potential demand, optimum pricing, competitor benchmarks, and distribution fit.',
    features: ['Target customer ID', 'Demand evaluation', 'Pricing strategy', 'Distribution analysis'],
    icon: Layers,
  },
  {
    title: 'Demand-Supply Gap',
    desc: 'Measure real market gaps using proprietary methods for accurate scale, capacity decisions, and sustainable growth.',
    features: ['Bottom-up analysis', 'Top-down validation', 'Supply pipeline', 'Saturation risks'],
    icon: PieChart,
  },
  {
    title: 'Market Expansion',
    desc: 'Evaluate and benchmark locations to determine the most attractive markets, segments, and expansion strategy.',
    features: ['Location scoring', 'Segment analysis', 'Entry strategy', 'Go-to-market plan'],
    icon: TrendingUp,
  },
]

const caseStudies = [
  {
    title: 'Real Estate Diversification',
    client: 'Models Construction',
    desc: 'Identified viable industrial/commercial alternatives for land near an industrial estate, enabling client diversification with superior ROI.',
    tags: ['Real Estate', 'Land Feasibility'],
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?w=800',
  },
  {
    title: 'Aviation Route Viability',
    client: 'Fly91',
    desc: 'Assessed viability of launching flights on four routes under UDAN scheme with demand-supply dynamics analysis.',
    tags: ['Aviation', 'Demand-Supply'],
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?w=800',
  },
  {
    title: 'Building Materials Entry',
    client: 'ACC Alcon',
    desc: 'Strategic market entry and location selection for gypsum plaster segment expansion in India.',
    tags: ['Manufacturing', 'Market Entry'],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=800',
  },
]

const stats = [
  { value: '500+', label: 'Research Projects Delivered' },
  { value: '30+', label: 'Countries Covered' },
  { value: '14+', label: 'Years of Excellence' },
  { value: '98%', label: 'Client Satisfaction' },
]

const faqs = [
  { q: 'What industries does MARC cover for market research?', a: 'We cover diverse sectors including real estate, manufacturing, aviation, FMCG, healthcare, technology, hospitality, and more. Our sector-agnostic approach ensures deep insights regardless of industry.' },
  { q: 'How long does a typical market research project take?', a: 'Project timelines vary based on scope and complexity. A focused feasibility study may take 4-6 weeks, while comprehensive market entry research can span 8-12 weeks.' },
  { q: 'Do you provide both primary and secondary research?', a: 'Yes, we combine robust secondary research with extensive primary research including stakeholder interviews, surveys, and on-ground intelligence for validated insights.' },
  { q: 'Can MARC support international market research?', a: 'Absolutely. We have conducted research across 30+ countries, supporting Indian companies in global expansion and international investors entering India.' },
  { q: 'What makes MARC different from other research firms?', a: 'Our strength lies in combining deep sector expertise with strong on-ground intelligence. We go beyond data to deliver actionable insights that directly support strategic decisions.' },
]

export default function MarketResearchOptionB() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white min-h-screen">
   

      {/* Hero Section - Clean & Editorial */}
      <section className="relative min-h-[85vh] flex items-center bg-#F7FFF5">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-#F7FFF5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-#4E9141" />
                <span className="text-#4E9141 font-medium tracking-wide uppercase text-sm">Market Research</span>
              </div>
              
              <h1 className="font-serif text-4xl lg:text-6xl font-medium text-#1D342F leading-[1.1] mb-8">
                Navigate the Indian Market with
                <span className="text-#4E9141"> Data-Driven Clarity</span>
              </h1>
              
              <p className="text-#5D9F94 text-lg leading-relaxed mb-10 max-w-xl">
                Deep insights into customer behavior, market trends, competitive landscape, and commercial feasibility. We empower confident decisions for market entry, expansion, and sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-#4E9141 text-white rounded-lg font-semibold hover:bg-#3d7334 transition-all group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#methodology" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-#B4DAD3 text-#47635D rounded-lg font-semibold hover:border-#4E9141 hover:text-#4E9141 transition-all">
                  Our Methodology
                </Link>
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-10 border border-#F0F8F6">
                <h3 className="font-serif text-2xl text-#1D342F mb-8">Research Excellence</h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif text-4xl font-bold text-#4E9141">{stat.value}</div>
                      <div className="text-#5D9F94 text-sm mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-#F0F8F6">
                  <p className="text-#5D9F94 text-sm">
                    Trusted by leading Indian and global companies for strategic market intelligence.
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-#C2DDB4 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-#C2DDB4 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((item, i) => (
              <div key={i} className="group">
                <div className="w-14 h-14 bg-#F7FFF5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-#C2DDB4 transition-colors">
                  <item.icon className="w-7 h-7 text-#4E9141" />
                </div>
                <h3 className="font-serif text-xl text-#1D342F mb-2">{item.title}</h3>
                <p className="text-#5D9F94 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Vertical Timeline */}
      <section id="methodology" className="py-24 bg-#F7FFF5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-#4E9141" />
              <span className="text-#4E9141 font-medium tracking-wide uppercase text-sm">Our Approach</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-#1D342F mb-6">
              Rigorous, Insight-Led Methodology
            </h2>
            <p className="text-#5D9F94 text-lg">
              We combine deep sector expertise with strong on-ground intelligence. Our work is defined by precision, analytical rigor, and a commitment to partnering with clients for confident decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            {methodology.map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-#4E9141 flex items-center justify-center">
                    <span className="font-serif text-xl font-bold text-white">{step.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-#1D342F mb-2">{step.title}</h3>
                  <p className="text-#5D9F94">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-#4E9141" />
              <span className="text-#4E9141 font-medium tracking-wide uppercase text-sm">Services</span>
              <div className="w-12 h-[2px] bg-#4E9141" />
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl font-medium text-#1D342F">
              Key Research Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-#F7FFF5 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-#C2DDB4">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <service.icon className="w-7 h-7 text-#4E9141" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-#47635D group-hover:text-#4E9141 transition-colors" />
                </div>
                <h3 className="font-serif text-2xl text-#1D342F mb-3">{service.title}</h3>
                <p className="text-#5D9F94 mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 bg-white text-#5D9F94 rounded-full text-sm border border-#C2DDB4">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-#1D342F">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-#5FBB46" />
                <span className="text-#5FBB46 font-medium tracking-wide uppercase text-sm">Case Studies</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white">
                Success Stories
              </h2>
            </div>
            <Link href="/case-studies" className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-#5FBB46 hover:text-#8CC978 font-medium transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-#1D342F/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 mb-2">
                      {study.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-1 bg-#4E9141/80 text-white rounded text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-#5FBB46 text-sm font-medium mb-2">{study.client}</p>
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-#5FBB46 transition-colors">{study.title}</h3>
                <p className="text-#47635D text-sm">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Clean Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-#1D342F">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-#C2DDB4">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between text-left"
                >
                  <span className="font-medium text-#1D342F pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-#4E9141 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="mt-4 text-#5D9F94 pr-12">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean */}
      <section className="py-24 bg-#4E9141">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-medium text-white mb-6">
            Ready to Make Informed Decisions?
          </h2>
          <p className="text-#C2DDB4 text-lg mb-10 max-w-2xl mx-auto">
            Partner with MARC for market research that delivers clarity, confidence, and actionable strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-#3d7334 rounded-lg font-semibold hover:bg-#F0F8F6 transition-all group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/insights" className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
              Download Sample Report
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
