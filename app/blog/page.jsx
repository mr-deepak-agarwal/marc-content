'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { blogs, categories, popularTags } from '@/data/blogData'
import {
  Search, Calendar, Clock, ArrowRight, ArrowUpRight, User,
  BookOpen, Sparkles, X, ChevronDown
} from 'lucide-react'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCards, setVisibleCards] = useState({})
  const [showAllPosts, setShowAllPosts] = useState(false)

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
    document.querySelectorAll('[data-index]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeCategory, searchQuery, showAllPosts])

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogs.filter(b => b.featured).slice(0, 2)
  const gridPosts = filteredBlogs.filter(b => !b.featured)
  const displayedPosts = showAllPosts ? gridPosts : gridPosts.slice(0, 9)

  return (
    <div className="bg-[#F0F4F0] min-h-screen" data-testid="blog-page">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 bg-white border-b border-[#C2DDB4]/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left — Insights-style header (line + label, no pill) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">

              {/* Label row — matches insights page exactly */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-medium text-sm uppercase tracking-widest">
                  Insights & Trends
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-[#1D342F] leading-[1.15] mb-6">
                Insights & Trends for <span className="text-[#4E9141]">Modern Businesses</span>
              </h1>
              <p className="text-xl text-[#47635D] leading-relaxed mb-8">
                Stay up-to-date with knowledgeable insights and the latest trends transforming industries and businesses across the world.
              </p>

              {/* Stats — matches insights page style exactly */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">75+</div>
                  <div className="text-sm text-[#47635D] mt-1">Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">15+</div>
                  <div className="text-sm text-[#47635D] mt-1">Authors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">50k+</div>
                  <div className="text-sm text-[#47635D] mt-1">Readers</div>
                </div>
              </div>
            </div>

            {/* Right – Featured posts — compact so both cards fit in viewport */}
            <div className="lg:col-span-7 space-y-4">
              {featuredPosts.map((post, i) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/40 hover:border-[#4E9141] hover:shadow-xl transition-all duration-500"
                  data-testid={`featured-post-${i}`}
                >
                  <div className="flex gap-0">
                    {/* Compact image — fixed height so two cards stack neatly */}
                    <div className="relative w-52 shrink-0 overflow-hidden">
                      <img src={post.image} alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-[#4E9141] text-white text-xs font-semibold rounded-full shadow-md">Latest</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-5 flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-2 text-xs text-[#47635D] mb-2">
                        <span className="text-[#4E9141] font-medium capitalize">{post.category.replace('-', ' ')}</span>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-base lg:text-lg font-bold text-[#1D342F] leading-snug mb-2 group-hover:text-[#4E9141] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-[#47635D] text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-[#4E9141]/10 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-[#4E9141]" />
                          </div>
                          <div>
                            <p className="text-xs font-medium text-[#1D342F]">{post.author}</p>
                            <p className="text-xs text-[#47635D]">{post.date}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#C2DDB4] group-hover:text-[#4E9141] transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Search & Filter ───────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-[#C2DDB4]/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {categories.map((cat) => (
              <button key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setShowAllPosts(false) }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#4E9141] text-white shadow-md shadow-[#4E9141]/20'
                    : 'bg-[#F7FFF5] text-[#47635D] hover:bg-[#C2DDB4]/30 border border-[#C2DDB4]/50'
                }`}
                data-testid={`category-${cat.id}`}
              >
                {cat.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeCategory === cat.id ? 'bg-white/20' : 'bg-white'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#47635D]" />
              <input type="text" placeholder="Search articles, topics or authors..."
                className="w-full pl-14 pr-12 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-2xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all text-[#1D342F]"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowAllPosts(false) }}
                data-testid="search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-[#C2DDB4]/30 rounded-full transition-colors">
                  <X className="w-4 h-4 text-[#47635D]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#1D342F]">All Articles</h2>
            <p className="text-[#47635D]">
              Showing <span className="font-semibold text-[#1D342F]">{filteredBlogs.length}</span> articles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, i) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                data-index={i}
                className="group block"
                data-testid={`blog-post-${post.id}`}
              >
                <article
                  className={`h-full bg-white rounded-2xl overflow-hidden border-2 border-[#C2DDB4]/40 hover:border-[#4E9141] shadow-sm hover:shadow-xl transition-all duration-500 ${
                    visibleCards[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white text-[#4E9141] text-xs font-semibold rounded-full shadow-md capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 text-[#4E9141]" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-[#47635D] mb-3">
                      <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</div>
                      <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                      <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</div>
                    </div>
                    <h3 className="text-lg font-bold text-[#1D342F] leading-tight mb-3 group-hover:text-[#4E9141] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#47635D] text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#C2DDB4]/30">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#4E9141]/10 rounded-full flex items-center justify-center">
                          <span className="text-[#4E9141] font-bold text-sm">{post.author.charAt(0)}</span>
                        </div>
                        <span className="text-sm text-[#47635D] font-medium">{post.author}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#C2DDB4] group-hover:text-[#4E9141] transition-colors" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {gridPosts.length > 9 && !showAllPosts && (
            <div className="text-center mt-12">
              <button onClick={() => setShowAllPosts(true)}
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#1D342F] text-white rounded-full font-semibold hover:bg-[#2a4a43] transition-all group"
                data-testid="load-more-button">
                Load More Articles
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-[#F7FFF5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-[#C2DDB4]" />
              </div>
              <h3 className="text-xl font-bold text-[#1D342F] mb-2">No articles found</h3>
              <p className="text-[#47635D]">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#C2DDB4]/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F7FFF5] rounded-3xl p-10 lg:p-14 border-2 border-[#C2DDB4]/40 text-center">
            <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">Stay Ahead of the Curve</h2>
            <p className="text-[#47635D] text-lg mb-10 max-w-xl mx-auto">
              Get exclusive insights, industry trends, and expert analysis delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border-2 border-[#C2DDB4]/50 rounded-xl text-[#1D342F] placeholder-[#47635D] focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                data-testid="newsletter-email" />
              <button className="px-8 py-4 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all flex items-center justify-center gap-2 group"
                data-testid="newsletter-submit">
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-[#47635D] text-sm mt-6">Join 10,000+ professionals. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1D342F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Expert Consultation?</h2>
          <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">
            Our team of experts can help you navigate complex business challenges with data-driven insights and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#5ba84d] transition-all group"
              data-testid="cta-contact">
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/market-research"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}