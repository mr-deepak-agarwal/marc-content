'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Search, Calendar, Clock, ArrowRight, ArrowUpRight, User, ChevronRight,
  BookOpen, Bookmark, Sparkles, X, ChevronDown
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All', count: 15 },
  { id: 'finance', label: 'Finance', count: 5 },
  { id: 'market-research', label: 'Market Research', count: 4 },
  { id: 'strategy', label: 'Strategy', count: 2 },
  { id: 'due-diligence', label: 'Due Diligence', count: 2 },
  { id: 'industry', label: 'Industry', count: 4 },
]

// Blog posts from original MARC website
const blogs = [
  {
    id: 1,
    title: 'Why Financial Model Validation Is Non-Negotiable in 2025',
    excerpt: 'The Theranos breakdown remains a defining example of what happens when unchecked assumptions prevail. Learn why financial model validation is critical for business success.',
    category: 'finance',
    author: 'MARC Research Team',
    date: 'December 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?w=800',
    featured: true,
  },
  {
    id: 2,
    title: 'SME IPO Readiness: A Complete 3-Year Preparation Roadmap',
    excerpt: 'Planning an SME IPO? Our expert 3-year roadmap guides you from foundational readiness to a successful listing with actionable milestones.',
    category: 'finance',
    author: 'MARC Advisory',
    date: 'December 2025',
    readTime: '12 min',
    image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?w=800',
    featured: true,
  },
  {
    id: 3,
    title: 'Unlocking Sustainable Growth: Why a Robust MIS Is Essential',
    excerpt: 'In 2025, Management Information Systems will no longer be limited to back-office reporting. Discover how MIS drives profitability.',
    category: 'strategy',
    author: 'MARC Team',
    date: 'December 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=800',
  },
  {
    id: 4,
    title: 'Competitive Benchmarking: Unleashing Growth Strategy',
    excerpt: "What if your competitors aren't ahead, but they've spotted something you haven't? Learn how competitive benchmarking transforms growth.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'December 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?w=800',
  },
  {
    id: 5,
    title: 'The Year-End Crunch: Why Internal Audit Is Your Best Defence',
    excerpt: 'As the financial year draws to a close, now is the time to ensure your internal audit function is robust and effective.',
    category: 'finance',
    author: 'MARC Advisory',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?w=800',
  },
  {
    id: 6,
    title: 'The Future of Due Diligence: Trends to Watch in 2025',
    excerpt: 'Due Diligence in 2025: Faster, Smarter, and More Strategic. Discover the emerging trends reshaping opportunity evaluation.',
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'November 2025',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=800',
  },
  {
    id: 7,
    title: 'Mastering Peak Season: A Hospitality Strategy Guide',
    excerpt: 'Every hospitality leader knows that peak season can test even the most efficient operation. Here\'s how to master the challenge.',
    category: 'industry',
    author: 'MARC Hospitality',
    date: 'November 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=800',
  },
  {
    id: 8,
    title: '5 Reasons Why Your Business Needs A Process Audit',
    excerpt: 'Studies show that businesses lose an average of 9% of annual revenue due to process inefficiencies. Is your business at risk?',
    category: 'strategy',
    author: 'MARC Team',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=800',
  },
  {
    id: 9,
    title: 'Why Market Research Is the Heart of Every Successful Project',
    excerpt: "In today's fast-changing world, market research and consulting have become the foundation of every successful business venture.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'October 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=800',
  },
  {
    id: 10,
    title: 'How a Strong CIM Drives Faster Deals in M&A',
    excerpt: "In today's competitive capital-raising landscape, a well-crafted Confidential Information Memorandum makes all the difference.",
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'October 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?w=800',
  },
  {
    id: 11,
    title: 'Impact of 2025 U.S. Tariffs on India\'s Textile Industry',
    excerpt: 'The global textile industry, valued at over $2 trillion, faces new challenges with the 2025 U.S. tariff changes.',
    category: 'industry',
    author: 'MARC Industry',
    date: 'October 2025',
    readTime: '10 min',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?w=800',
  },
  {
    id: 12,
    title: 'How AI Is Transforming Consulting in India',
    excerpt: 'Artificial Intelligence is not replacing consultants; it\'s reshaping how they work. Discover the AI revolution in consulting.',
    category: 'industry',
    author: 'MARC Team',
    date: 'September 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=800',
  },
  {
    id: 13,
    title: 'Global Expansion: The Role of Market Research',
    excerpt: 'Every business aims to expand globally. Learn how market research and predictive analytics drive successful expansion.',
    category: 'market-research',
    author: 'MARC Global',
    date: 'September 2025',
    readTime: '9 min',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?w=800',
  },
  {
    id: 14,
    title: 'Financial Modelling in Risk Assessment',
    excerpt: 'In businesses, every decision comes with certain risks. What if you could predict and mitigate them effectively?',
    category: 'finance',
    author: 'MARC Finance',
    date: 'August 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800',
  },
  {
    id: 15,
    title: 'Decoding Market Entry in India: Feasibility Insights',
    excerpt: "India's economy is growing with new opportunities. Our feasibility study insights help you decode market entry.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'August 2025',
    readTime: '11 min',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=800',
  },
]

const popularTags = [
  'Financial Modelling', 'Due Diligence', 'Market Entry', 'IPO', 'MIS', 
  'Consulting', 'Strategy', 'M&A', 'Growth'
]

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

    document.querySelectorAll('[data-index]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [activeCategory, searchQuery, showAllPosts])

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get featured posts for hero (first 2)
  const featuredPosts = blogs.filter(b => b.featured).slice(0, 2)
  
  // Get non-featured posts for the grid
  const gridPosts = filteredBlogs.filter(b => !b.featured)
  const displayedPosts = showAllPosts ? gridPosts : gridPosts.slice(0, 9)

  return (
    <div className="bg-[#F0F4F0] min-h-screen" data-testid="blog-page">
      
      {/* Hero Section - Split Layout with Featured Posts on Right */}
      <section className="relative pt-32 pb-16 bg-white border-b border-[#C2DDB4]/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left - Title & Description (Sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F7FFF5] rounded-full border border-[#C2DDB4]/50 mb-8">
                <BookOpen className="w-4 h-4 text-[#4E9141]" />
                <span className="text-[#4E9141] font-medium text-sm">MARC Blogs</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                Insights & Trends for
                <span className="text-[#4E9141]"> Modern Businesses</span>
              </h1>
              
              <p className="text-[#47635D] text-lg leading-relaxed mb-8">
                Stay up-to-date with knowledgeable insights and the latest trends transforming industries and businesses across the world.
              </p>

              {/* Quick Stats */}
              <div className="flex gap-8 py-6 border-t border-b border-[#C2DDB4]/30">
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">80+</div>
                  <div className="text-[#47635D] text-sm">Articles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">15+</div>
                  <div className="text-[#47635D] text-sm">Authors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">50k+</div>
                  <div className="text-[#47635D] text-sm">Readers</div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mt-8">
                <p className="text-sm font-medium text-[#47635D] mb-4">Popular Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.slice(0, 6).map((tag, i) => (
                    <button 
                      key={i}
                      className="px-4 py-2 bg-[#F7FFF5] text-[#47635D] text-sm rounded-full border border-[#C2DDB4]/50 hover:border-[#4E9141] hover:text-[#4E9141] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Two Latest Featured Posts */}
            <div className="lg:col-span-7 space-y-6">
              {featuredPosts.map((post, i) => (
                <Link 
                  key={post.id} 
                  href="#"
                  className="group block bg-white rounded-2xl overflow-hidden border-2 border-[#C2DDB4]/40 hover:border-[#4E9141] hover:shadow-xl transition-all duration-500"
                  data-testid={`featured-post-${i}`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-[#4E9141] text-white text-xs font-semibold rounded-full shadow-md">
                          Latest
                        </span>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 text-sm text-[#47635D] mb-4">
                        <span className="text-[#4E9141] font-medium capitalize">{post.category.replace('-', ' ')}</span>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <span>{post.readTime} read</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-[#1D342F] leading-tight mb-4 group-hover:text-[#4E9141] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#47635D] mb-6 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#4E9141]/10 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-[#4E9141]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[#1D342F]">{post.author}</p>
                            <p className="text-xs text-[#47635D]">{post.date}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-[#C2DDB4] group-hover:text-[#4E9141] transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-[#C2DDB4]/30 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filters - Single Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#4E9141] text-white shadow-md shadow-[#4E9141]/20'
                    : 'bg-[#F7FFF5] text-[#47635D] hover:bg-[#C2DDB4]/30 border border-[#C2DDB4]/50'
                }`}
                data-testid={`category-${cat.id}`}
              >
                {cat.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id ? 'bg-white/20' : 'bg-white'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Bar - Centered Below */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#47635D]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-14 pr-12 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-2xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all text-[#1D342F]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-[#C2DDB4]/30 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-[#47635D]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid - Symmetrical Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#1D342F]">All Articles</h2>
            <p className="text-[#47635D]">
              Showing <span className="font-semibold text-[#1D342F]">{filteredBlogs.length}</span> articles
            </p>
          </div>

          {/* Symmetrical Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((post, i) => (
              <Link 
                key={post.id}
                href="#"
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
                  {/* Image - Fixed Aspect Ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white text-[#4E9141] text-xs font-semibold rounded-full shadow-md capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Arrow on hover */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowRight className="w-5 h-5 text-[#4E9141]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-[#47635D] mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1D342F] leading-tight mb-3 group-hover:text-[#4E9141] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#47635D] text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author */}
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

          {/* Load More Button */}
          {gridPosts.length > 9 && !showAllPosts && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowAllPosts(true)}
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#1D342F] text-white rounded-full font-semibold hover:bg-[#2a4a43] transition-all group"
                data-testid="load-more-button"
              >
                Load More Articles
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}

          {/* No Results */}
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

      {/* Newsletter Section */}
      <section className="py-20 bg-white border-t border-[#C2DDB4]/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F7FFF5] rounded-3xl p-10 lg:p-14 border-2 border-[#C2DDB4]/40 text-center">
            <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-[#47635D] text-lg mb-10 max-w-xl mx-auto">
              Get exclusive insights, industry trends, and expert analysis delivered to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white border-2 border-[#C2DDB4]/50 rounded-xl text-[#1D342F] placeholder-[#47635D] focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                data-testid="newsletter-email"
              />
              <button 
                className="px-8 py-4 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all flex items-center justify-center gap-2 group"
                data-testid="newsletter-submit"
              >
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-[#47635D] text-sm mt-6">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1D342F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Expert Consultation?
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">
            Our team of experts can help you navigate complex business challenges with data-driven insights and strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#5ba84d] transition-all group"
              data-testid="cta-contact"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services/market-research" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
