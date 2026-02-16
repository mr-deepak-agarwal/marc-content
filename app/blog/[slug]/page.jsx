'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Calendar, Clock, User, Share2, Bookmark, ArrowLeft, 
  Twitter, Linkedin, Facebook, Link2, Check, ChevronRight,
  FileText, Download, Mail, ArrowUpRight
} from 'lucide-react'

// This would come from your API/CMS based on the slug
// For now, using sample data structure matching your blog posts
const getBlogPost = (slug: string) => {
  // In production, fetch this from your CMS or database
  return {
    id: 1,
    slug: "financial-model-validation-2025",
    title: "Why Financial Model Validation Is Non-Negotiable in 2025",
    subtitle: "The Theranos breakdown remains a defining example of what happens when unchecked assumptions prevail. Learn why financial model validation is critical for business success.",
    category: "finance",
    categoryLabel: "Finance",
    author: {
      name: "MARC Research Team",
      avatar: "/images/team/marc-team.jpg",
      role: "Financial Advisory",
      bio: "Our research team comprises experienced financial analysts and consultants with over 50+ years of combined experience."
    },
    publishedAt: "December 2025",
    readTime: "8 min read",
    image: "https://www.marcglocal.com/wp-content/uploads/2025/12/financial-model-validation-1170x684.png",
    tags: ["Financial Modeling", "Validation", "Risk Management", "Due Diligence"],
    featured: true,
    
    // Content sections
    content: {
      introduction: `In the high-stakes world of business financing and mergers & acquisitions, a single flawed assumption can cascade into million-dollar losses. The spectacular collapse of Theranos serves as a stark reminder: when financial models aren't properly validated, even the most promising ventures can crumble.

As we navigate through 2025, financial model validation has evolved from a best practice to an absolute necessity. Here's why your business can't afford to skip it.`,
      
      sections: [
        {
          heading: "The Real Cost of Invalid Financial Models",
          content: `Financial models are the backbone of strategic decision-making. They guide everything from fundraising to M&A transactions, from market entry strategies to expansion plans. Yet, a 2024 study by McKinsey found that 67% of financial models contain at least one critical error that could materially impact business decisions.

Consider these sobering statistics:
- Companies lose an average of $15M annually due to flawed financial assumptions
- 43% of M&A deals fail to meet projected synergies due to modeling errors
- Over 60% of failed startups cite unrealistic financial projections as a contributing factor

The stakes have never been higher, and investors, boards, and stakeholders are demanding greater accountability.`
        },
        {
          heading: "The Theranos Case Study: A Cautionary Tale",
          content: `Elizabeth Holmes's Theranos promised revolutionary blood-testing technology, attracting over $700 million in funding. At its peak, the company was valued at $9 billion. The problem? The financial models were built on technology that didn't work as promised.

Key lessons from the Theranos collapse:
- Assumption validation is critical: Every model assumption must be stress-tested against reality
- Independent verification matters: External validation catches what internal teams miss
- Red flags can't be ignored: When projections seem too good to be true, they usually are

This wasn't just about fraud—it was about unchecked models that nobody dared to question. In 2025, that kind of oversight is unacceptable.`
        },
        {
          heading: "What Proper Financial Model Validation Entails",
          content: `Comprehensive financial model validation goes far beyond checking formulas in Excel. It requires a systematic approach that examines every layer of your model.

The MARC Validation Framework:

1. Structural Integrity Check
   - Formula accuracy and consistency
   - Circular reference detection
   - Error handling mechanisms
   - Version control and documentation

2. Assumption Testing
   - Market size validation against third-party data
   - Growth rate benchmarking
   - Cost structure verification
   - Revenue driver sensitivity analysis

3. Scenario Modeling
   - Best case, base case, worst case scenarios
   - Monte Carlo simulation for uncertainty
   - Stress testing against market shocks
   - Break-even analysis

4. Industry Benchmarking
   - Compare against sector norms
   - Validate multiples and ratios
   - Assess competitive positioning
   - Market share reality checks`
        },
        {
          heading: "Why 2025 Is Different",
          content: `The business landscape has fundamentally changed. Here's why financial model validation is more critical than ever:

Increased Regulatory Scrutiny: Post-pandemic regulations have tightened financial reporting requirements. The SEC and other regulatory bodies are paying closer attention to financial projections in fundraising and M&A transactions.

AI and Automation: While AI tools can build models faster, they can also propagate errors at scale. Validation ensures that automated models remain grounded in reality.

Volatile Markets: Economic uncertainty, geopolitical tensions, and rapid technological change mean that yesterday's assumptions may not hold today. Regular validation is essential.

Stakeholder Sophistication: Today's investors and board members are more financially literate. They ask harder questions and demand rigorous validation before committing capital.`
        },
        {
          heading: "Red Flags That Your Model Needs Validation",
          content: `Watch out for these warning signs:

- Hockey stick projections: Exponential growth without clear drivers
- Unchanged assumptions: Models that haven't been updated in 6+ months
- Missing sensitivity analysis: No understanding of which variables matter most
- Lack of documentation: Unclear assumptions or calculation methodologies
- Over-optimistic timelines: Aggressive milestone achievements without historical precedent
- Disconnected metrics: KPIs that don't align with financial projections
- Single-point forecasts: No scenario planning or contingency analysis

If any of these resonate with your current financial model, it's time for a comprehensive validation review.`
        },
        {
          heading: "The ROI of Validation",
          content: `Investing in financial model validation delivers measurable returns:

For Fundraising:
- 40% higher success rate in securing investment
- 25% faster due diligence process
- Better valuations through increased investor confidence

For M&A Transactions:
- Reduced risk of post-deal surprises
- Stronger negotiating position
- Faster deal closure

For Strategic Planning:
- More accurate resource allocation
- Better risk management
- Improved board and stakeholder confidence

One MARC client avoided a $50M acquisition that looked attractive on paper but revealed critical flaws during validation. The validation process cost $150K—a 333x return on investment.`
        },
        {
          heading: "How to Get Started with Validation",
          content: `Ready to validate your financial models? Here's a practical roadmap:

Phase 1: Internal Review (Week 1-2)
- Document all assumptions
- Check formula integrity
- Review historical accuracy
- Identify key risk areas

Phase 2: External Validation (Week 3-4)
- Engage independent experts
- Benchmark against industry data
- Stress test scenarios
- Review with stakeholders

Phase 3: Ongoing Monitoring (Continuous)
- Quarterly assumption reviews
- Monthly variance analysis
- Annual comprehensive validation
- Real-time tracking of key metrics

The best practice? Don't wait for a crisis. Make validation part of your regular financial discipline.`
        }
      ],
      
      conclusion: `Financial model validation isn't just about avoiding catastrophic failures like Theranos. It's about building trust, making better decisions, and positioning your business for sustainable growth.

In 2025's complex business environment, validation is your competitive advantage. It's the difference between hopeful projections and credible forecasts, between expensive surprises and calculated risks.

The question isn't whether you can afford to validate your financial models. The question is: can you afford not to?`
    },
    
    // Call to action
    cta: {
      title: "Need Expert Financial Model Validation?",
      description: "Our team of financial experts can help you validate your models, identify risks, and build investor confidence.",
      primaryButton: "Schedule Consultation",
      secondaryButton: "Download Validation Checklist"
    }
  }
}

// Related articles - these would come from your blog array
const relatedArticles = [
  {
    id: 2,
    slug: "sme-ipo-readiness-roadmap",
    title: "SME IPO Readiness: A Complete 3-Year Preparation Roadmap",
    category: "finance",
    image: "https://www.marcglocal.com/wp-content/uploads/2025/12/ipo-preparation-guide.jpg",
    readTime: "12 min",
    date: "December 2025",
    href: "https://www.marcglocal.com/sme-ipo-preparation-guide-3-year-roadmap/"
  },
  {
    id: 6,
    slug: "future-due-diligence-2025",
    title: "The Future of Due Diligence: Trends to Watch in 2025",
    category: "due-diligence",
    image: "https://www.marcglocal.com/wp-content/uploads/2025/11/due-diligence-services-300x207.jpg",
    readTime: "9 min",
    date: "November 2025",
    href: "https://www.marcglocal.com/future-of-due-diligence-services-2025/"
  },
  {
    id: 3,
    slug: "robust-mis-sustainable-growth",
    title: "Unlocking Sustainable Growth: Why a Robust MIS Is Essential",
    category: "strategy",
    image: "https://www.marcglocal.com/wp-content/uploads/2025/12/mis-companies-300x176.jpg",
    readTime: "7 min",
    date: "December 2025",
    href: "https://www.marcglocal.com/strong-mis-for-profitability-and-sustainable-growth/"
  }
]

export default function BlogDetailPage() {
  const [bookmarked, setBookmarked] = useState(false)
  const [copied, setCopied] = useState(false)

  // In production, get slug from params and fetch the post
  const blogPost = getBlogPost("financial-model-validation-2025")

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = blogPost.title
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    }
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Back Navigation */}
      <div className="bg-[#F7FFF5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#47635D] hover:text-[#4E9141] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to all articles</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-8">
          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#4E9141] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
              {blogPost.categoryLabel}
            </span>
            {blogPost.featured && (
              <span className="px-4 py-1.5 bg-[#F7FFF5] text-[#4E9141] text-xs font-semibold rounded-full border border-[#4E9141]/20">
                Featured Article
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1D342F] leading-tight mb-6">
            {blogPost.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-[#47635D] leading-relaxed mb-8">
            {blogPost.subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#4E9141] rounded-full flex items-center justify-center text-white font-bold">
                {blogPost.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#1D342F]">{blogPost.author.name}</div>
                <div className="text-sm text-[#47635D]">{blogPost.author.role}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[#47635D]">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {blogPost.publishedAt}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </span>
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-3">
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-2 rounded-lg border transition-all ${
                  bookmarked 
                    ? 'bg-[#4E9141] text-white border-[#4E9141]' 
                    : 'bg-white text-[#47635D] border-gray-200 hover:border-[#4E9141] hover:text-[#4E9141]'
                }`}
              >
                <Bookmark className="w-5 h-5" fill={bookmarked ? "currentColor" : "none"} />
              </button>
              
              <div className="relative group">
                <button className="p-2 rounded-lg border border-gray-200 bg-white text-[#47635D] hover:border-[#4E9141] hover:text-[#4E9141] transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                
                {/* Share Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="p-2">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Share on LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Share on Facebook
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy link'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[21/9] bg-gray-100">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-[#47635D] leading-relaxed whitespace-pre-line">
              {blogPost.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          {blogPost.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-[#1D342F] mb-6 pb-3 border-b-2 border-[#4E9141]/20">
                {section.heading}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#47635D] leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </div>
          ))}

          {/* Conclusion */}
          <div className="mb-12 p-8 bg-[#F7FFF5] rounded-2xl border-l-4 border-[#4E9141]">
            <h2 className="text-2xl font-bold text-[#1D342F] mb-4">Key Takeaway</h2>
            <p className="text-[#47635D] leading-relaxed whitespace-pre-line">
              {blogPost.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-gray-100">
            <span className="text-sm font-medium text-[#47635D]">Tags:</span>
            {blogPost.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 py-1 bg-white border border-gray-200 text-[#47635D] text-sm rounded-full hover:border-[#4E9141] hover:text-[#4E9141] transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mb-16 p-8 bg-gradient-to-br from-[#F7FFF5] to-white rounded-2xl border border-[#C2DDB4]/30">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-[#4E9141] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {blogPost.author.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1D342F] mb-2">
                  About {blogPost.author.name}
                </h3>
                <p className="text-[#47635D] mb-4">{blogPost.author.bio}</p>
                <div className="flex gap-3">
                  <button className="text-sm text-[#4E9141] hover:underline font-medium">
                    View all articles
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-16 p-8 bg-gradient-to-br from-[#4E9141] to-[#3d7334] rounded-2xl text-white">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-bold mb-2">{blogPost.cta.title}</h3>
                <p className="text-white/90">{blogPost.cta.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4E9141] rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                {blogPost.cta.primaryButton}
                <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all">
                <Download className="w-5 h-5" />
                {blogPost.cta.secondaryButton}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-[#F7FFF5] py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#1D342F]">Related Articles</h2>
            <Link 
              href="/blog" 
              className="text-[#4E9141] font-medium hover:underline flex items-center gap-2"
            >
              View all articles
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((article) => (
              <a
                key={article.id}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#4E9141]/40 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#47635D] mb-3">
                    <span className="px-2 py-1 bg-[#F7FFF5] text-[#4E9141] rounded uppercase font-medium">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-[#1D342F] group-hover:text-[#4E9141] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#1D342F] mb-4">
            Never Miss an Insight
          </h2>
          <p className="text-lg text-[#47635D] mb-8">
            Get expert analysis, industry trends, and exclusive insights delivered to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-[#47635D] mt-4">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}