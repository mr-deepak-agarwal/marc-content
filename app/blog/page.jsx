'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Footer from '@/components/Footer'
import { blogs } from '@/data/blogData'
import {
  Calendar, Clock, Share2, Bookmark, ArrowLeft,
  Twitter, Linkedin, Facebook, Link2, Check, ChevronRight,
  FileText, Download, Mail, ArrowUpRight
} from 'lucide-react'

// ─── Helper: generate a fallback content block from excerpt ─────────────────
function buildFallbackContent(post) {
  return {
    introduction: post.excerpt,
    sections: [
      {
        heading: 'Overview',
        content: `This article explores ${post.title}. Our experts at MARC provide in-depth analysis and actionable insights on this topic to help businesses make better decisions.`,
      },
      {
        heading: 'Key Insights',
        content: `For the complete article with detailed insights, case studies, and expert recommendations, visit the full version on our website.`,
      },
    ],
    conclusion: `Stay ahead of the curve with MARC's research and advisory services. Our team of experts is ready to help you apply these insights to your specific business context.`,
  }
}

// ─── Related articles: same category, different post ────────────────────────
function getRelatedPosts(currentPost, allPosts, count = 3) {
  return allPosts
    .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
    .slice(0, count)
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function BlogDetailPage() {
  const { slug } = useParams()
  const [bookmarked, setBookmarked] = useState(false)
  const [copied, setCopied] = useState(false)

  // Find post from shared data by slug
  const post = blogs.find(b => b.slug === slug)

  // 404 state
  if (!post) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-[#1D342F] mb-4">Article Not Found</h1>
        <p className="text-[#47635D] mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all">
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
      </div>
    )
  }

  const content = post.content ?? buildFallbackContent(post)
  const tags = post.tags ?? []
  const relatedPosts = getRelatedPosts(post, blogs)
  const cta = post.cta ?? {
    title: 'Need Expert Consultation?',
    description: 'Our team of financial experts and consultants is ready to help your business grow.',
    primaryButton: 'Schedule Consultation',
    secondaryButton: 'Learn More',
  }

  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const shareUrls = {
      twitter:  `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    }
    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Back Navigation */}
      <div className="bg-[#F7FFF5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#47635D] hover:text-[#4E9141] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to all articles</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">

          {/* Category & badges */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#4E9141] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
              {post.categoryLabel ?? post.category}
            </span>
            {post.featured && (
              <span className="px-4 py-1.5 bg-[#F7FFF5] text-[#4E9141] text-xs font-semibold rounded-full border border-[#4E9141]/20">
                Featured Article
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1D342F] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Subtitle / excerpt */}
          <p className="text-xl text-[#47635D] leading-relaxed mb-8">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#4E9141] rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#1D342F]">{post.author}</div>
                <div className="text-sm text-[#47635D]">{post.authorRole ?? 'MARC Advisory'}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-[#47635D]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-3">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 rounded-lg border transition-all ${bookmarked
                  ? 'bg-[#4E9141] text-white border-[#4E9141]'
                  : 'bg-white text-[#47635D] border-gray-200 hover:border-[#4E9141] hover:text-[#4E9141]'}`}
                aria-label="Bookmark"
              >
                <Bookmark className="w-5 h-5" fill={bookmarked ? 'currentColor' : 'none'} />
              </button>

              <div className="relative group">
                <button className="p-2 rounded-lg border border-gray-200 bg-white text-[#47635D] hover:border-[#4E9141] hover:text-[#4E9141] transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="p-2">
                    {[
                      { platform: 'twitter',  Icon: Twitter,  label: 'Share on Twitter' },
                      { platform: 'linkedin', Icon: Linkedin, label: 'Share on LinkedIn' },
                      { platform: 'facebook', Icon: Facebook, label: 'Share on Facebook' },
                    ].map(({ platform, Icon, label }) => (
                      <button key={platform} onClick={() => handleShare(platform)}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors">
                        <Icon className="w-4 h-4" />{label}
                      </button>
                    ))}
                    <button onClick={() => handleShare('copy')}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors">
                      {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy link'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="relative w-full aspect-[21/9] bg-gray-100">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-6 py-16">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-[#47635D] leading-relaxed whitespace-pre-line">
              {content.introduction}
            </p>
          </div>

          {/* Sections */}
          {content.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D342F] mb-6 pb-3 border-b-2 border-[#4E9141]/20">
                {section.heading}
              </h2>
              <p className="text-[#47635D] leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          {/* Conclusion */}
          <div className="mb-12 p-8 bg-[#F7FFF5] rounded-2xl border-l-4 border-[#4E9141]">
            <h2 className="text-2xl font-bold text-[#1D342F] mb-4">Key Takeaway</h2>
            <p className="text-[#47635D] leading-relaxed whitespace-pre-line">{content.conclusion}</p>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-100">
              <span className="text-sm font-medium text-[#47635D]">Tags:</span>
              {tags.map((tag, i) => (
                <Link key={i} href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 bg-white border border-gray-200 text-[#47635D] text-sm rounded-full hover:border-[#4E9141] hover:text-[#4E9141] transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          )}

          {/* Author bio */}
          <div className="mb-16 p-8 bg-gradient-to-br from-[#F7FFF5] to-white rounded-2xl border border-[#C2DDB4]/30">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-[#4E9141] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1D342F] mb-2">About {post.author}</h3>
                <p className="text-[#47635D] mb-4">
                  {post.authorBio ?? 'Our research team comprises experienced financial analysts and consultants with extensive industry experience.'}
                </p>
                <Link href="/blog" className="text-sm text-[#4E9141] hover:underline font-medium">
                  View all articles →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-16 p-8 bg-gradient-to-br from-[#4E9141] to-[#3d7334] rounded-2xl text-white">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">{cta.title}</h3>
                <p className="text-white/90">{cta.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4E9141] rounded-xl font-semibold hover:bg-gray-50 transition-all">
                {cta.primaryButton}
                <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all">
                <Download className="w-5 h-5" />
                {cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F7FFF5] py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#1D342F]">Related Articles</h2>
              <Link href="/blog" className="text-[#4E9141] font-medium hover:underline flex items-center gap-2">
                View all articles <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(article => (
                <Link key={article.id} href={`/blog/${article.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#4E9141]/40 hover:shadow-lg transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={article.image} alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[#47635D] mb-3">
                      <span className="px-2 py-1 bg-[#F7FFF5] text-[#4E9141] rounded uppercase font-medium">
                        {article.category.replace('-', ' ')}
                      </span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-[#1D342F] group-hover:text-[#4E9141] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#1D342F] mb-4">Never Miss an Insight</h2>
          <p className="text-lg text-[#47635D] mb-8">
            Get expert analysis, industry trends, and exclusive insights delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none" />
            <button className="px-6 py-3 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-[#47635D] mt-4">Join 10,000+ professionals. Unsubscribe anytime.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}