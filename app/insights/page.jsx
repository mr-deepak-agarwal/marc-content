'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Download, Search, ArrowRight, FileText, TrendingUp, ArrowUpRight,
  Building2, Heart, Plane, ShoppingBag, Factory, Zap, Filter,
  BookOpen, BarChart3, Clock, ChevronRight, X
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Reports', count: 65 },
  { id: 'healthcare', label: 'Healthcare', count: 12 },
  { id: 'hospitality', label: 'Hospitality', count: 15 },
  { id: 'manufacturing', label: 'Manufacturing', count: 18 },
  { id: 'retail', label: 'Retail & FMCG', count: 14 },
  { id: 'energy', label: 'Energy', count: 6 },
]

const insights = [
  { 
    title: 'Indian Nutraceuticals and OTC Pharmaceutical Market Entry', 
    category: 'healthcare', 
    featured: true, 
    new: true, 
    downloads: '2.4k', 
    readTime: '12 min read',
    date: 'January 2026',
    excerpt: 'Comprehensive analysis of market entry strategies for nutraceutical and OTC pharmaceutical companies looking to expand in India.',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?w=800' 
  },
  { 
    title: 'Digital Healthcare Report 2025', 
    category: 'healthcare', 
    featured: true, 
    downloads: '1.8k', 
    readTime: '18 min read',
    date: 'December 2025',
    excerpt: 'How technology is transforming healthcare delivery and patient outcomes across emerging markets.',
    image: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?w=800' 
  },
  { 
    title: 'GST 2.0: Key Reforms and Sectoral Impact', 
    category: 'retail', 
    new: true, 
    downloads: '3.1k', 
    readTime: '8 min read',
    date: 'January 2026',
    excerpt: 'Analysis of proposed GST reforms and their potential impact across key sectors of the Indian economy.',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?w=800' 
  },
  { 
    title: 'Contract Manufacturing in India', 
    category: 'manufacturing', 
    downloads: '1.5k', 
    readTime: '15 min read',
    date: 'November 2025',
    excerpt: 'Exploring opportunities and challenges in India\'s growing contract manufacturing sector.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=800' 
  },
  { 
    title: 'Rise of Experiential Dining', 
    category: 'hospitality', 
    featured: true, 
    downloads: '2.2k', 
    readTime: '10 min read',
    date: 'October 2025',
    excerpt: 'How restaurants are reimagining the dining experience to attract and retain customers.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?w=800' 
  },
  { 
    title: 'Rise of Luxury Hospitality in Tier-2 Cities', 
    category: 'hospitality', 
    downloads: '1.9k', 
    readTime: '14 min read',
    date: 'September 2025',
    excerpt: 'Analyzing the growth of premium hospitality offerings beyond metro cities.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=800' 
  },
  { 
    title: 'Growth of Co-working Spaces', 
    category: 'retail', 
    downloads: '1.2k', 
    readTime: '9 min read',
    date: 'August 2025',
    excerpt: 'The evolution of workspace solutions and future trends in flexible office spaces.',
    image: 'https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?w=800' 
  },
  { 
    title: 'Manufacturing Industry Overview', 
    category: 'manufacturing', 
    downloads: '2.8k', 
    readTime: '20 min read',
    date: 'July 2025',
    excerpt: 'Comprehensive overview of India\'s manufacturing sector performance and outlook.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?w=800' 
  },
  { 
    title: 'FMCG Industry Overview 2025', 
    category: 'retail', 
    new: true, 
    downloads: '3.5k', 
    readTime: '16 min read',
    date: 'January 2026',
    excerpt: 'State of the FMCG industry with consumer trends and market projections.',
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?w=800' 
  },
  { 
    title: 'Impact of Q-commerce on FMCG', 
    category: 'retail', 
    downloads: '2.1k', 
    readTime: '11 min read',
    date: 'December 2025',
    excerpt: 'How quick commerce is disrupting traditional FMCG distribution channels.',
    image: 'https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?w=800' 
  },
  { 
    title: "India's Logistics Market Analysis", 
    category: 'manufacturing', 
    downloads: '1.7k', 
    readTime: '13 min read',
    date: 'November 2025',
    excerpt: 'Deep dive into India\'s logistics infrastructure and growth opportunities.',
    image: 'https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?w=800' 
  },
  { 
    title: 'Enhancing Power Infrastructure', 
    category: 'energy', 
    downloads: '890', 
    readTime: '17 min read',
    date: 'October 2025',
    excerpt: 'Strategies for modernizing India\'s power infrastructure for sustainable growth.',
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?w=800' 
  },
]

// Card stack data for hero animation
const stackedCards = [
  { title: 'Healthcare Market Analysis', category: 'Healthcare', downloads: '2.4k', color: '#E8F5E3' },
  { title: 'Digital Transformation Report', category: 'Technology', downloads: '1.8k', color: '#FEF3C7' },
  { title: 'Retail Industry Outlook 2026', category: 'Retail', downloads: '3.1k', color: '#DBEAFE' },
  { title: 'Manufacturing Trends India', category: 'Manufacturing', downloads: '1.5k', color: '#FCE7F3' },
]

const trendingTopics = [
  'Artificial Intelligence',
  'Market Entry Strategy',
  'Digital Transformation',
  'Sustainability',
  'M&A Advisory'
]

export default function InsightsPageV2() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isVisible, setIsVisible] = useState({})
  const [activeCard, setActiveCard] = useState(0)
  const observerRefs = useRef([])

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % stackedCards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

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

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeCategory === 'all' || insight.category === activeCategory
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredInsight = insights.find(i => i.featured && i.new) || insights[0]
  const latestInsights = insights.filter(i => i !== featuredInsight).slice(0, 4) // Changed to 4

  return (
    <div className="bg-white min-h-screen" data-testid="insights-page-v2">
      
      {/* ==================== HERO with Animated Card Stack ==================== */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
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

              {/* Quick Stats Row */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">65+</div>
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

            {/* Right - Animated Card Stack */}
            <div className="relative h-[450px] hidden lg:block">
              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#4E9141]/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#5D9F94]/10 rounded-full blur-2xl" />
              
              {/* Card Stack */}
              <div className="relative w-full h-full flex items-center justify-center">
                {stackedCards.map((card, index) => {
                  const isActive = index === activeCard
                  const offset = (index - activeCard + stackedCards.length) % stackedCards.length
                  
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveCard(index)}
                      className="absolute w-72 cursor-pointer transition-all duration-700 ease-out"
                      style={{
                        transform: `
                          translateY(${offset * 12}px) 
                          translateX(${offset * 8}px) 
                          rotate(${offset * 2}deg)
                          scale(${1 - offset * 0.05})
                        `,
                        zIndex: stackedCards.length - offset,
                        opacity: offset > 2 ? 0 : 1,
                      }}
                    >
                      <div 
                        className={`rounded-2xl p-6 shadow-xl border-2 transition-all duration-500 ${
                          isActive 
                            ? 'border-[#4E9141] shadow-[#4E9141]/20' 
                            : 'border-transparent shadow-black/10'
                        }`}
                        style={{ backgroundColor: card.color }}
                      >
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[#4E9141] text-xs font-semibold rounded-full">
                            {card.category}
                          </span>
                          {index === 0 && (
                            <span className="px-2 py-1 bg-[#4E9141] text-white text-xs font-bold rounded">
                              NEW
                            </span>
                          )}
                        </div>
                        
                        {/* Card Image Placeholder */}
                        <div className="w-full h-32 bg-white/60 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                          <img 
                            src={insights[index]?.image || insights[0].image}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Card Title */}
                        <h3 className="font-bold text-[#1D342F] text-lg leading-tight mb-3">
                          {card.title}
                        </h3>
                        
                        {/* Card Footer */}
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#47635D] flex items-center gap-1">
                            <Download className="w-4 h-4" />
                            {card.downloads}
                          </span>
                          <span className="text-[#4E9141] font-medium flex items-center gap-1">
                            PDF Report
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Card Navigation Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                {stackedCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeCard 
                        ? 'w-6 bg-[#4E9141]' 
                        : 'bg-[#C2DDB4] hover:bg-[#4E9141]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED INSIGHT - 1 Big + 4 Small ==================== */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-semibold text-[#47635D] uppercase tracking-widest">Featured</h2>
            <Link href="#all-reports" className="text-[#4E9141] text-sm font-medium hover:underline flex items-center gap-1">
              View All Reports <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main Featured - Full Height */}
            <Link href="#" className="group block h-full">
              <article className="h-full bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={featuredInsight.image} 
                    alt={featuredInsight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
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
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-[#47635D] mb-4">
                    <span>{featuredInsight.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredInsight.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D342F] mb-3 group-hover:text-[#4E9141] transition-colors leading-tight">
                    {featuredInsight.title}
                  </h3>
                  <p className="text-[#47635D] leading-relaxed mb-6 flex-1">
                    {featuredInsight.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-[#47635D]">{featuredInsight.downloads} downloads</span>
                    <span className="inline-flex items-center gap-2 text-[#4E9141] font-semibold group-hover:gap-3 transition-all">
                      Read Report <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Right Side - 4 Reports in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {latestInsights.map((insight, i) => (
                <Link key={i} href="#" className="group block">
                  <article className="h-full bg-white rounded-xl border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={insight.image} 
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {insight.new && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#4E9141] text-white text-xs font-bold rounded">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-[#47635D] mb-2">
                        <span className="capitalize text-[#4E9141] font-medium">{insight.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <span>{insight.readTime}</span>
                      </div>
                      <h4 className="font-semibold text-[#1D342F] group-hover:text-[#4E9141] transition-colors line-clamp-2 leading-snug text-sm flex-1">
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

      {/* ==================== TRENDING TOPICS ==================== */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-[#47635D]">Trending:</span>
            {trendingTopics.map((topic, i) => (
              <button
                key={i}
                className="px-4 py-2 text-sm text-[#1D342F] bg-[#F7FFF5] hover:bg-[#C2DDB4]/50 rounded-full border border-[#C2DDB4]/50 hover:border-[#4E9141]/30 transition-all"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ALL REPORTS ==================== */}
      <section 
        id="all-reports"
        ref={el => observerRefs.current[1] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header with Search & Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1D342F]">All Reports</h2>
              <p className="text-[#47635D] mt-1">Browse our complete library of research and analysis</p>
            </div>
            
            {/* Search */}
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

          {/* Category Tabs - Horizontal */}
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

          {/* Reports Grid - Clean Symmetrical Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, i) => (
              <Link key={i} href="#" className="group block">
                <article className="h-full bg-white rounded-xl border border-gray-100 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {insight.new && (
                        <span className="px-2.5 py-1 bg-[#4E9141] text-white text-xs font-semibold rounded">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Download on hover */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Download className="w-5 h-5 text-[#4E9141]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
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

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1D342F] text-white rounded-xl font-semibold hover:bg-[#2a4a43] transition-colors">
              Load More Reports
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== NEWSLETTER / CTA ==================== */}
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all group"
            >
              Request Custom Report
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
