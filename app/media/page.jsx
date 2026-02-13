'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ArrowRight, ExternalLink, Newspaper, FileText, Mail, Download, Calendar, ChevronRight, Award } from 'lucide-react'

// Media images for animated carousel
const mediaImages = [
  {
    url: 'https://images.unsplash.com/photo-1768508950408-d59387d4dcd1?w=800&q=80',
    title: 'Corporate Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1713948412932-aad419b13f5e?w=800&q=80',
    title: 'Business News',
  },
  {
    url: 'https://images.unsplash.com/photo-1677640724372-adb865d29aa8?w=800&q=80',
    title: 'Awards & Recognition',
  },
  {
    url: 'https://images.unsplash.com/photo-1758691737538-220c1902b1ca?w=800&q=80',
    title: 'Team Celebrations',
  },
]

// Animated Media Carousel Component
function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[450px]" data-testid="media-carousel">
      {/* Stacked cards animation */}
      <div className="relative w-full h-full">
        {mediaImages.map((image, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + mediaImages.length) % mediaImages.length
          const isNext = index === (currentIndex + 1) % mediaImages.length
          
          let transform = 'translateX(100%) scale(0.8)'
          let opacity = 0
          let zIndex = 0
          
          if (isActive) {
            transform = 'translateX(0) scale(1)'
            opacity = 1
            zIndex = 30
          } else if (isPrev) {
            transform = 'translateX(-30%) scale(0.85) rotateY(15deg)'
            opacity = 0.5
            zIndex = 20
          } else if (isNext) {
            transform = 'translateX(30%) scale(0.85) rotateY(-15deg)'
            opacity = 0.5
            zIndex = 20
          }
          
          return (
            <div
              key={index}
              className="absolute inset-0 transition-all duration-700 ease-out"
              style={{ transform, opacity, zIndex }}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-4 py-2 bg-white/90 text-[#1D342F] text-sm font-semibold rounded-full">
                    {image.title}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Dots indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {mediaImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#4E9141]' : 'bg-[#C2DDB4]'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

const newsArticles = [
  {
    date: 'Sept 1, 2023',
    source: 'The Economic Times',
    title: 'The most admired Indian companies in 2023',
    excerpt: 'MARC gets featured for "Top 10 Most Admired Companies in India 2023" that features diverse range of companies achieving financial success while prioritizing innovation and social responsibility.',
    link: '#',
    featured: true
  },
  {
    date: 'Oct 21, 2022',
    source: 'EMS Now',
    title: 'The Indian Companies Helping The C-Suite Tackle Talent Shortages',
    excerpt: 'MARC Glocal provides very different services but with a similar level of flexibility and expertise, supporting companies in M&A activity.',
    link: '#'
  },
  {
    date: 'Feb 2, 2022',
    source: 'The SME India',
    title: 'MSMEs and the Union Budget 2022',
    excerpt: 'The MSME sector is hailed as the backbone of the country\'s economy, comprising 6.3 million units and employing over 11 crores of population.',
    link: '#'
  },
  {
    date: 'Jan 31, 2022',
    source: 'Deccan Herald',
    title: 'Internationalization is Crucial for MSMEs',
    excerpt: 'Over the last few years, working closely with clients, we have realized that several Indian companies have incredible quality products limited in local markets.',
    link: '#'
  },
  {
    date: 'Dec 2, 2021',
    source: 'Daily Pioneer',
    title: 'MARC aims at helping SMEs throughout life',
    excerpt: 'MARC\'s robust portfolio has led the company to receive rewards, recognition and acknowledgements across the country.',
    link: '#'
  },
  {
    date: 'Nov 18, 2021',
    source: 'Mid-Day',
    title: 'MARC is assisting SMEs & MSMEs in their growth journey',
    excerpt: 'MARC helps small and medium scale businesses to start well, prosper and grow, believing every business is unique.',
    link: '#'
  }
]

const pressReleases = [
  {
    date: 'Nov 29, 2022',
    source: 'Outlook India',
    title: 'MARC celebrates 12 years of business',
    excerpt: 'MARC celebrated its 12-year anniversary with its flagship event \'Celebrating Entrepreneurship in Goa\' honouring associates and industry leaders.',
    link: '#'
  },
  {
    date: 'Jan 12, 2022',
    source: 'PR.com',
    title: 'Anita Ganti joins the Board of Directors of MARC India',
    excerpt: 'MARC appoints Ex-Wipro, Flex, and Texas Instruments executive Anita Ganti to its Board of Directors.',
    link: '#'
  },
  {
    date: 'Aug 04, 2021',
    source: 'Business Standard',
    title: 'MARC Opens Its 8th Office in India',
    excerpt: 'MARC opens its latest office in Pune on the occasion of its 11th Anniversary, offering customized Analytical services to MSMEs.',
    link: '#'
  },
  {
    date: 'Jun 25, 2020',
    source: 'oHeraldo',
    title: 'EFL ties up with MARC to set up a branch in Goa',
    excerpt: 'Electronica Finance Limited has entered into an MOU with MARC to provide services of a satellite office in Goa.',
    link: '#'
  },
  {
    date: 'Jan 28, 2020',
    source: 'Navhind Times',
    title: 'Mangal Analytics branches into IT consultancy',
    excerpt: 'Branched into IT consultancy with the launch of TechPally, aimed at providing software consultation to local units.',
    link: '#'
  },
  {
    date: 'Sep 01, 2018',
    source: 'Business Goa',
    title: 'MARC moves into its new corporate address',
    excerpt: 'MARC inaugurated its new office premises at 2nd Floor, CMM Building, Rua de Ourem, Panjim.',
    link: '#'
  }
]

const milestones = [
  { year: '2023', title: 'Top 10 Most Admired Companies', desc: 'Featured in The Economic Times for business excellence' },
  { year: '2022', title: '12 Years Anniversary', desc: 'Celebrated with flagship event "Celebrating Entrepreneurship in Goa"' },
  { year: '2022', title: 'Board Expansion', desc: 'Anita Ganti joins as Board Director' },
  { year: '2021', title: '8th Office Opening', desc: 'Expanded to Pune on 11th Anniversary' },
  { year: '2020', title: 'TechPally Launch', desc: 'Branched into IT consultancy services' },
  { year: '2018', title: 'New Headquarters', desc: 'Moved to new corporate address in Panjim, Goa' },
  { year: '2010', title: 'MARC Founded', desc: 'Started journey of delivering excellence' }
]

const publications = [
  { name: 'The Economic Times' },
  { name: 'Your Story' },
  { name: 'Business Standard' },
  { name: 'Outlook India' },
  { name: 'Deccan Herald' },
  { name: 'Mid-Day' }
]

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('news')
  const [isVisible, setIsVisible] = useState({})
  const [visibleMilestones, setVisibleMilestones] = useState([])
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

  // Animate milestones on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleMilestones((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll('[data-milestone-item]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white" data-testid="media-page">

      {/* Hero Section - Light green like About page with animated carousel */}
      <section className="relative pt-32 pb-20 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Media & Press
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                In the news,
                <span className="text-[#4E9141]"> taking the spotlight</span>
              </h1>
              
              <p className="text-xl text-[#47635D] leading-relaxed mb-8">
                We are either brainstorming novel ways to execute strategies, or making headlines. 
                Stay abreast of our presence in the tabloids.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#coverage" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all group"
                  data-testid="view-coverage-btn"
                >
                  View Coverage
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#milestones" 
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#4E9141] text-[#4E9141] font-semibold rounded-full hover:bg-[#4E9141] hover:text-white transition-all"
                  data-testid="milestones-btn"
                >
                  Our Journey
                </a>
              </div>
            </div>

            {/* Animated Carousel */}
            <div className="relative hidden lg:block">
              <MediaCarousel />
            </div>
          </div>
        </div>

        {/* Featured Publications */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="flex items-center gap-8 flex-wrap">
            <span className="text-[#47635D] text-sm uppercase tracking-wider font-medium">Featured In</span>
            {publications.map((pub, i) => (
              <div key={i} className="text-[#1D342F]/60 font-semibold text-sm hover:text-[#4E9141] transition-colors cursor-pointer">
                {pub.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts & Press Kit */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Resources
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Media Contacts */}
            <div className="group p-8 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#4E9141] flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-3">Media Contacts</h3>
              <p className="text-[#47635D] mb-6 leading-relaxed">
                Journalists, media houses, dailies, and publishers may use the contact information 
                for inquiries and clarifications.
              </p>
              <a 
                href="mailto:contact@marcglocal.com" 
                className="inline-flex items-center gap-2 text-[#4E9141] font-semibold hover:gap-3 transition-all"
                data-testid="media-contact-link"
              >
                contact@marcglocal.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Press Kit */}
            <div className="group p-8 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#4E9141] flex items-center justify-center mb-6">
                <Download className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-3">Press Kit</h3>
              <p className="text-[#47635D] mb-6 leading-relaxed">
                Resources and material for media releases, company profiles, and relevant content. 
                Usage rights are reserved with MARC.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-colors"
                data-testid="download-press-kit-btn"
              >
                <Download className="w-4 h-4" />
                Download Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News & Press Releases */}
      <section 
        id="coverage"
        ref={el => observerRefs.current[1] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Media Coverage
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F]">
              {activeTab === 'news' ? 'MARC in the News' : 'Press Releases'}
            </h2>
            
            <div className="flex p-1 bg-white rounded-full border border-[#C2DDB4]/30">
              <button 
                onClick={() => setActiveTab('news')}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === 'news' ? 'bg-[#4E9141] text-white' : 'text-[#47635D] hover:text-[#1D342F]'}`}
                data-testid="news-tab"
              >
                <span className="flex items-center gap-2">
                  <Newspaper className="w-4 h-4" />
                  News
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('press')}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${activeTab === 'press' ? 'bg-[#4E9141] text-white' : 'text-[#47635D] hover:text-[#1D342F]'}`}
                data-testid="press-tab"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Press Releases
                </span>
              </button>
            </div>
          </div>

          {/* Featured Article */}
          {activeTab === 'news' && newsArticles[0] && (
            <a 
              href={newsArticles[0].link}
              className="group block mb-12 p-8 rounded-2xl bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300"
              data-testid="featured-article"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-5 h-5 text-[#4E9141]" />
                <span className="text-sm font-medium text-[#4E9141]">Featured</span>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 text-sm text-[#47635D] mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{newsArticles[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                    <span className="text-[#4E9141] font-medium">{newsArticles[0].source}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors mb-4">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-[#47635D] leading-relaxed">{newsArticles[0].excerpt}</p>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-[#4E9141] font-semibold group-hover:gap-3 transition-all">
                    Read Article
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'news' ? newsArticles.slice(1) : pressReleases).map((article, index) => (
              <a 
                key={index}
                href={article.link}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                data-testid={`article-${index}`}
              >
                <div className="flex items-center gap-2 text-xs text-[#47635D] mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <div className="text-xs font-semibold text-[#4E9141] uppercase tracking-wider mb-2">
                  {article.source}
                </div>
                <h3 className="text-lg font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#47635D] leading-relaxed line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-[#C2DDB4]/30 flex items-center justify-between">
                  <span className="text-sm text-[#47635D]">Read more</span>
                  <ChevronRight className="w-4 h-4 text-[#4E9141] group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Milestones Journey Section */}
      <section 
        id="milestones"
        ref={el => observerRefs.current[2] = el}
        className="py-20 bg-white overflow-hidden"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Journey
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-16">
            Milestones & Recognition
          </h2>

          <div className="relative">
            {/* Animated Path Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 overflow-hidden">
              <div 
                className="w-full h-full bg-gradient-to-b from-[#4E9141] via-[#C2DDB4] to-[#4E9141]"
                style={{
                  animation: 'pathFlow 3s linear infinite',
                }}
              />
              {/* Animated dots along the path */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#4E9141] shadow-lg shadow-[#4E9141]/50"
                style={{
                  animation: 'dotMove 4s ease-in-out infinite',
                }}
              />
            </div>

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div 
                  key={index} 
                  data-milestone-item
                  data-index={index}
                  className={`relative pl-20 transition-all duration-700 ${
                    visibleMilestones.includes(index)
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot with pulse animation */}
                  <div className={`absolute left-6 w-5 h-5 rounded-full border-4 border-white shadow-lg -translate-x-1/2 transition-all duration-500 ${
                    visibleMilestones.includes(index)
                      ? 'bg-[#4E9141] scale-110'
                      : 'bg-[#C2DDB4] scale-100'
                  }`}>
                    {visibleMilestones.includes(index) && (
                      <span className="absolute inset-0 rounded-full bg-[#4E9141] animate-ping opacity-30" />
                    )}
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-[#F7FFF5] border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-[#4E9141]">{item.year}</span>
                      <span className="w-8 h-[2px] bg-[#C2DDB4] group-hover:w-12 group-hover:bg-[#4E9141] transition-all" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D342F] mb-2">{item.title}</h3>
                    <p className="text-[#47635D]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CSS for path animation */}
            <style jsx>{`
              @keyframes pathFlow {
                0% { background-position: 0 0; }
                100% { background-position: 0 100px; }
              }
              @keyframes dotMove {
                0%, 100% { top: 0; opacity: 1; }
                50% { top: calc(100% - 12px); opacity: 0.5; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CTA Section - Green background */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let Us Help You Solve Your Toughest Challenges
          </h2>
          <p className="text-xl text-white/80 mb-8">
            And realize your greatest ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
              data-testid="cta-consultation-btn"
            >
              Schedule a Free Consulting
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
