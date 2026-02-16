'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { Download, Search, ArrowRight, Clock, ArrowUpRight, BarChart3, ChevronRight } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Reports', count: 73 },
  { id: 'healthcare', label: 'Healthcare', count: 10 },
  { id: 'hospitality', label: 'Hospitality', count: 13 },
  { id: 'manufacturing', label: 'Manufacturing', count: 14 },
  { id: 'retail', label: 'Retail & FMCG', count: 12 },
  { id: 'energy', label: 'Energy', count: 5 },
  { id: 'other', label: 'Other', count: 19 },
]

const insights = [
  {
    title: "Indian Nutraceuticals and OTC Pharmaceutical Market Entry",
    category: "healthcare",
    image: "/images/insights/nutraci-500x286.png",
    date: "December 2025",
    downloads: "2.4k",
    readTime: "12 min read",
    new: true,
    featured: true,
    excerpt: "Comprehensive analysis of market entry strategies for nutraceutical and OTC pharmaceutical companies looking to expand in India."
  },
  {
    title: "Digital Healthcare Report",
    category: "healthcare",
    image: "/images/insights/digitalimg-1-500x286.png",
    date: "December 2025",
    downloads: "1.8k",
    readTime: "18 min read",
    featured: true,
    excerpt: "How technology is transforming healthcare delivery and patient outcomes across emerging markets."
  },
  {
    title: "GST 2.0: Key Reforms and Sectoral Impact",
    category: "retail",
    image: "/images/insights/newgst-500x286.png",
    date: "December 2025",
    downloads: "3.1k",
    readTime: "8 min read",
    new: true,
  },
  {
    title: "Contract Manufacturing in India",
    category: "manufacturing",
    image: "/images/insights/contractm-500x286.png",
    date: "December 2025",
    downloads: "1.5k",
    readTime: "15 min read",
  },
  {
    title: "Rise of Experiential Dining",
    category: "hospitality",
    image: "/images/insights/dining-500x286.png",
    date: "December 2025",
    downloads: "2.2k",
    readTime: "10 min read",
  },
  {
    title: "FMCG Industry Overview 2025",
    category: "retail",
    image: "/images/insights/qbs7kzx5imm37fau9lroszd24vnbivsj-500x286.jpg",
    date: "July 2025",
    downloads: "3.5k",
    readTime: "16 min read",
  },
  {
    title: "Manufacturing Industry Overview",
    category: "manufacturing",
    image: "/images/insights/manufacturing-500x286.jpg",
    date: "June 2025",
    downloads: "2.8k",
    readTime: "20 min read",
  },
  {
    title: "Hospitality Industry Overview 2025",
    category: "hospitality",
    image: "/images/insights/hospitality_2025-500x286.jpg",
    date: "February 2025",
    downloads: "2.7k",
    readTime: "18 min read",
  },
  {
    title: "India Life Sciences Landscape",
    category: "healthcare",
    image: "/images/insights/lifescience-marc-1.png",
    date: "February 2026",
    downloads: "1.8k",
    readTime: "18 min read",
    new: true,
  },
  {
    title: "Renewable Energy Industry Overview",
    category: "energy",
    image: "/images/insights/Renewables.jpg",
    date: "September 2023",
    downloads: "2.2k",
    readTime: "18 min read",
  },
  {
    title: "Retail Industry Overview 2024",
    category: "retail",
    image: "/images/insights/Retail-report.jpg",
    date: "April 2024",
    downloads: "2.9k",
    readTime: "19 min read",
  },
  {
    title: "China +1 Policy",
    category: "manufacturing",
    image: "/images/insights/dde637cc-500x286.jpg",
    date: "October 2024",
    downloads: "1.5k",
    readTime: "12 min read",
  },
]

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeCategory === 'all' || insight.category === activeCategory
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredInsight = insights.find(i => i.featured && i.new) || insights[0]
  const latestInsights = insights.filter(i => i.featured).slice(0, 4)

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] font-medium text-sm uppercase tracking-widest">
                Research & Insights
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] tracking-tight mb-6">
              Insights that inform better decisions
            </h1>
            
            <p className="text-xl text-[#47635D] leading-relaxed mb-8">
              Deep research, strategic analysis, and industry intelligence 
              from our team of experts across sectors and geographies.
            </p>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-3xl font-bold text-[#4E9141]">73+</div>
                <div className="text-sm text-[#47635D] mt-1">Research Reports</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4E9141]">50k+</div>
                <div className="text-sm text-[#47635D] mt-1">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4E9141]">11</div>
                <div className="text-sm text-[#47635D] mt-1">Industries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4E9141]">30+</div>
                <div className="text-sm text-[#47635D] mt-1">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-16 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-semibold text-[#47635D] uppercase tracking-widest">Featured</h2>
            <Link href="#all-reports" className="text-[#4E9141] text-sm font-medium hover:underline flex items-center gap-1">
              View All Reports <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main Featured */}
            <Link href="#" className="group block">
              <article className="bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image 
                    src={featuredInsight.image} 
                    alt={featuredInsight.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {featuredInsight.new && (
                      <span className="px-3 py-1 bg-[#4E9141] text-white text-xs font-semibold rounded-full">
                        NEW
                      </span>
                    )}
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#47635D] text-xs font-medium rounded-full capitalize">
                      {featuredInsight.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#47635D] mb-4">
                    <span>{featuredInsight.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredInsight.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D342F] mb-3 group-hover:text-[#4E9141] transition-colors">
                    {featuredInsight.title}
                  </h3>
                  <p className="text-[#47635D] leading-relaxed mb-6">
                    {featuredInsight.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-[#47635D]">{featuredInsight.downloads} downloads</span>
                    <span className="inline-flex items-center gap-2 text-[#4E9141] font-semibold">
                      Read Report <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Grid of 4 */}
            <div className="grid grid-cols-2 gap-4">
              {latestInsights.slice(1, 5).map((insight, i) => (
                <Link key={i} href="#" className="group block">
                  <article className="bg-white rounded-xl border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image 
                        src={insight.image} 
                        alt={insight.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                      {insight.new && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#4E9141] text-white text-xs font-bold rounded z-10">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-xs text-[#47635D] mb-2">
                        <span className="capitalize text-[#4E9141] font-medium">{insight.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <span>{insight.readTime}</span>
                      </div>
                      <h4 className="font-semibold text-[#1D342F] group-hover:text-[#4E9141] transition-colors line-clamp-2 leading-snug text-sm">
                        {insight.title}
                      </h4>
                      <div className="flex items-center gap-1 mt-3 pt-3 border-t border-gray-50 text-xs text-[#47635D]">
                        <Download className="w-3.5 h-3.5" />
                        {insight.downloads}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL REPORTS */}
      <section id="all-reports" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1D342F]">All Reports</h2>
              <p className="text-[#47635D] mt-1">Browse our complete library of research and analysis</p>
            </div>
            
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#47635D]" />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full pl-12 pr-4 py-3 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all text-[#1D342F] placeholder:text-[#47635D]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#4E9141] text-white'
                    : 'text-[#47635D] hover:bg-[#F7FFF5] hover:text-[#1D342F]'
                }`}
              >
                {cat.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id ? 'bg-white/20' : 'bg-[#F7FFF5]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, i) => (
              <Link key={i} href="#" className="group block">
                <article className="bg-white rounded-xl border border-gray-100 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image 
                      src={insight.image} 
                      alt={insight.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    {insight.new && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4E9141] text-white text-xs font-semibold rounded z-10">
                        NEW
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-[#47635D] mb-3">
                      <span className="text-[#4E9141] font-medium uppercase tracking-wide">{insight.category}</span>
                      <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                      <span>{insight.date}</span>
                    </div>
                    
                    <h3 className="font-semibold text-[#1D342F] group-hover:text-[#4E9141] transition-colors leading-snug mb-3 line-clamp-2">
                      {insight.title}
                    </h3>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                      <div className="flex items-center gap-3 text-xs text-[#47635D]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {insight.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3.5 h-3.5" />
                          {insight.downloads}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#47635D] group-hover:text-[#4E9141] transition-colors" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D342F] text-white rounded-xl font-semibold hover:bg-[#2a4a43] transition-colors">
              Load More Reports
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7FFF5] border-t border-[#C2DDB4]/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Need Custom Research?
          </h2>
          <p className="text-lg text-[#47635D] mb-8">
            Our team can prepare industry-specific insights tailored to your unique business needs and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all"
            >
              Request Custom Report
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1D342F] border border-[#C2DDB4] rounded-xl font-semibold hover:border-[#4E9141] hover:bg-[#F7FFF5] transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}