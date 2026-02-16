'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  Search, Calendar, Clock, ArrowRight, ArrowUpRight, User, 
  BookOpen, Sparkles, X, ChevronDown
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'All', count: 75 },
  { id: 'finance', label: 'Finance', count: 15 },
  { id: 'market-research', label: 'Market Research', count: 18 },
  { id: 'strategy', label: 'Strategy', count: 12 },
  { id: 'due-diligence', label: 'Due Diligence', count: 8 },
  { id: 'industry', label: 'Industry', count: 12 },
  { id: 'entrepreneurship', label: 'Entrepreneurship', count: 10 },
]

// All 75 posts scraped from marcglocal.com/blog pages 1–4
// Images are real WordPress featured images from marcglocal.com CDN
// Thumbnails use the -300x* cropped versions for fast loading
const blogs = [
  // ── PAGE 1 ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Why Financial Model Validation Is Non-Negotiable in 2025',
    excerpt: 'The Theranos breakdown remains a defining example of what happens when unchecked assumptions prevail. Valued at USD 9–10 billion, the company collapsed once its financial projections were found to lack evidence.',
    category: 'finance',
    author: 'MARC Research Team',
    date: 'December 2025',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/12/financial-model-validation-1170x684.png',
    href: 'https://www.marcglocal.com/financial-model-validation-2025/',
    featured: true,
  },
  {
    id: 2,
    title: 'SME IPO Readiness: A Complete 3-Year Preparation Roadmap for Successful Listing',
    excerpt: 'Planning an SME IPO? Our expert 3-year roadmap guides you from foundational readiness to a Merchant Banker appointment. Unlock growth, strengthen governance, and access capital.',
    category: 'finance',
    author: 'MARC Advisory',
    date: 'December 2025',
    readTime: '12 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/12/ipo-preparation-guide.jpg',
    href: 'https://www.marcglocal.com/sme-ipo-preparation-guide-3-year-roadmap/',
    featured: true,
  },
  {
    id: 3,
    title: 'Unlocking Sustainable Growth: Why a Robust MIS Is Essential for Profitability and Monthly Oversight in Businesses of All Sizes',
    excerpt: 'In 2025, Management Information Systems (MIS) will no longer be limited to back-office reporting. A robust MIS acts as the nerve centre of a business, enabling real-time visibility into financial health.',
    category: 'strategy',
    author: 'MARC Team',
    date: 'December 2025',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/12/mis-companies-300x176.jpg',
    href: 'https://www.marcglocal.com/strong-mis-for-profitability-and-sustainable-growth/',
  },
  {
    id: 4,
    title: 'Competitive Benchmarking: Unleashing Growth Strategy For Your Business',
    excerpt: "What if your competitors aren't ahead, but they've spotted something you haven't? In today's fast-moving markets, competitive benchmarking transforms raw market data into actionable growth strategy.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'December 2025',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/12/growth-strategy-consulting-services-300x221.jpg',
    href: 'https://www.marcglocal.com/competitive-benchmarking-with-market-research/',
  },
  {
    id: 5,
    title: 'The Year-End Crunch: Why a Strong Internal Audit Function Is Your Best Defence',
    excerpt: 'As the financial year draws to a close, now is the time to ensure your internal audit function is robust and effective. A strong internal audit is your profit and loss safety net.',
    category: 'finance',
    author: 'MARC Advisory',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/11/profit-and-loss-analysis-300x215.jpg',
    href: 'https://www.marcglocal.com/year-end-internal-audit-profit-and-loss-analysis/',
  },
  {
    id: 6,
    title: 'The Future of Due Diligence: Trends to Watch in 2025',
    excerpt: 'Due Diligence in 2025 is Faster, Smarter, and More Strategic. In 2025, due diligence is no longer a rear-view mirror exercise. Discover the emerging trends reshaping how businesses evaluate opportunities.',
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'November 2025',
    readTime: '9 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/11/due-diligence-services-300x207.jpg',
    href: 'https://www.marcglocal.com/future-of-due-diligence-services-2025/',
  },
  {
    id: 7,
    title: 'Mastering Peak Season: A Hospitality Strategy to Manage High Guest Footfall',
    excerpt: "Every hospitality leader knows that peak season can test even the most efficient operation. Here's a practical hospitality strategy to manage high guest footfall and protect your margins.",
    category: 'industry',
    author: 'MARC Hospitality',
    date: 'November 2025',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/11/business-consulting-services-300x204.jpg',
    href: 'https://www.marcglocal.com/peak-season-management-hospitality-consulting/',
  },
  {
    id: 8,
    title: '5 Reasons Why Your Business Needs A Process Audit',
    excerpt: 'Studies show that businesses lose an average of 9% of annual revenue due to process inefficiencies. A process audit uncovers hidden costs, bottlenecks, and compliance gaps before they become crises.',
    category: 'strategy',
    author: 'MARC Team',
    date: 'November 2025',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/11/5-reasons-why-your-business-needs-a-process-audit-300x200.jpg',
    href: 'https://www.marcglocal.com/5-reasons-why-your-business-needs-a-process-audit/',
  },
  {
    id: 9,
    title: 'Why Market Research & Consulting Are the Beating Heart of Every Successful Project',
    excerpt: "In today's fast-changing world, market research and consulting have become the foundation of every successful business venture. Without it, even the best ideas risk launching into the wrong market.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'October 2025',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/10/top-market-research-companies-300x198.jpg',
    href: 'https://www.marcglocal.com/why-market-research-drives-success/',
  },
  {
    id: 10,
    title: "How a Strong CIM Drives Faster Deals and Higher Valuations in Today's M&A Market",
    excerpt: "In today's competitive capital-raising landscape, a well-crafted Confidential Information Memorandum (CIM) is the difference between a deal that closes and one that stalls.",
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'October 2025',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/10/cim-preparation-services-300x169.jpg',
    href: 'https://www.marcglocal.com/what-makes-a-great-cim/',
  },
  {
    id: 11,
    title: "Navigating the Storm: The Impact of 2025 U.S. Tariffs on India's Textile Industry",
    excerpt: "The global textile industry, a powerhouse valued at over $2 trillion, is facing a complex new reality. The 2025 U.S. tariff shifts are reshaping trade flows and competitive dynamics for India's exporters.",
    category: 'industry',
    author: 'MARC Industry',
    date: 'October 2025',
    readTime: '10 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/10/market-research-and-consulting-300x200.jpg',
    href: 'https://www.marcglocal.com/impact-2025-us-tariffs-india-textile-industry/',
  },
  {
    id: 12,
    title: 'Red Flags in Financial Statements: What a Quality of Earnings (QoE) Analysis Reveals That Financial Reviews Miss',
    excerpt: 'In the high-stakes world of mergers and acquisitions, even seasoned investors can be blindsided by red flags hidden in financial statements that standard reviews routinely miss.',
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'July 2025',
    readTime: '9 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/07/Presentation-What-a-Quality-of-1-300x197.png',
    href: 'https://www.marcglocal.com/red-flags-in-financial-statements-what-a-quality-of-earnings-qoe-analysis-reveals-that-financial-reviews-miss/',
  },
  {
    id: 13,
    title: 'How AI Is Quietly Transforming the Business of Consulting in India',
    excerpt: "Artificial Intelligence is not replacing consultants; it's reshaping how they work. At research-focused firms like MARC, AI is already accelerating data synthesis, competitive analysis, and financial modelling.",
    category: 'industry',
    author: 'MARC Team',
    date: 'June 2025',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/06/best-ai-consulting-firms-1-300x157.webp',
    href: 'https://www.marcglocal.com/how-ai-is-quietly-transforming-the-business-of-consulting-in-india/',
  },
  {
    id: 14,
    title: 'Blueprint for Growth: How Financial Models & Information Memorandums Drive Success at Every Stage',
    excerpt: 'In the competitive world of business, growth is never accidental; it is the result of deliberate planning. Financial models and information memorandums are the twin blueprints that make growth repeatable.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'June 2025',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2025/06/financial-model-1.jpg',
    href: 'https://www.marcglocal.com/blueprint-for-growth/',
  },
  {
    id: 15,
    title: 'Global Expansion Strategies: The Critical Role of Market Research and Predictive Analytics',
    excerpt: 'Every business has a primary aim to expand globally. Market research and predictive analytics are the twin engines that separate successful global expansions from expensive failures.',
    category: 'market-research',
    author: 'MARC Global',
    date: 'December 2024',
    readTime: '9 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/12/Global-Expansion-Strategies-banner-300x157.webp',
    href: 'https://www.marcglocal.com/market-research-and-predictive-analytics-for-global-expansion/',
  },
  {
    id: 16,
    title: 'Decoding Market Entry in India: 2024 Feasibility Study Insights',
    excerpt: "India's economy is growing and buzzing with new growth opportunities. Our 2024 feasibility study insights break down what businesses need to know before entering one of the world's most dynamic markets.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'December 2024',
    readTime: '11 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/12/Indias-Market-Entry-banner-4-300x157.webp',
    href: 'https://www.marcglocal.com/decoding-market-entry-in-india-2024-feasibility-study-insights/',
  },
  {
    id: 17,
    title: 'The Role of Financial Modelling in Risk Assessment and Decision-Making',
    excerpt: 'In businesses, every decision comes with certain risks. Financial modelling gives leaders the tools to predict outcomes, stress test assumptions, and make decisions with confidence in uncertain environments.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'December 2024',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/12/Financial-Modelling-banner-4-300x157.webp',
    href: 'https://www.marcglocal.com/the-role-of-financial-modelling-in-risk-assessment-and-decision-making/',
  },
  {
    id: 18,
    title: "Valuation Consulting in India's Healthcare Sector: Strategies for Accurate Assessments",
    excerpt: "India's healthcare sector valuation is experiencing remarkable growth and is expected to reach a new peak. Accurate valuation is now critical for deals, fundraising, and strategic decisions.",
    category: 'industry',
    author: 'MARC Advisory',
    date: 'December 2024',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/12/Healthcare-Sector-banner-4-300x157.webp',
    href: 'https://www.marcglocal.com/valuation-consulting-indian-healthcare-sector-strategies-and-tips/',
  },
  {
    id: 19,
    title: 'The Power of Management Information Systems (MIS) for Data-Driven Decisions',
    excerpt: 'Despite a loyal customer base and owning multiple outlets, many businesses watch a continued decline in profitability. MIS is the missing link that connects operational data to strategic action.',
    category: 'strategy',
    author: 'MARC Team',
    date: 'December 2024',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/12/Data-Driven-Decision-banner-300x157.webp',
    href: 'https://www.marcglocal.com/the-power-of-management-information-systems-mis-for-data-driven-decisions/',
  },
  {
    id: 20,
    title: 'Feasibility Studies and Financial Modelling: A Comprehensive Guide for Project Financing',
    excerpt: 'Imagine you have a groundbreaking project in mind — maybe a solar power plant or a new retail chain. A feasibility study combined with rigorous financial modelling is the foundation for securing project financing.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'December 2024',
    readTime: '10 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/12/Financial-Modelling-banner-300x157.webp',
    href: 'https://www.marcglocal.com/feasibility-studies-and-financial-modelling-a-comprehensive-guide-for-project-financing/',
  },

  // ── PAGE 2 ──────────────────────────────────────────────────────────────
  {
    id: 21,
    title: 'The Role of Financial Modelling in Securing Investment for Indian Startups',
    excerpt: 'Recent studies indicate that companies using advanced financial modelling are significantly more likely to secure investment. For Indian startups, a rigorous financial model is no longer optional.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'November 2024',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/11/Securing-Investment-banner-300x157.webp',
    href: 'https://www.marcglocal.com/role-of-financial-modelling-in-securing-investment-in-indian-startups/',
  },
  {
    id: 22,
    title: 'How Due Diligence Can Make or Break Mergers and Acquisition in India',
    excerpt: 'According to a report by Bain & Company, Indian due diligence companies executed over hundreds of deals in recent years. Thorough due diligence is what separates successful M&A from costly mistakes.',
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'November 2024',
    readTime: '9 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/11/MARC-OCT-banner-1-300x157.webp',
    href: 'https://www.marcglocal.com/how-due-diligence-can-make-or-break-mergers-and-acquisition-in-india/',
  },
  {
    id: 23,
    title: 'From Startup to Scale-Up: The Journey of Indian Entrepreneurs',
    excerpt: "I have always been intrigued by the story of two salesmen selling shoes in an underdeveloped country. The journey from startup to scale-up mirrors that story — it's all about perspective and persistence.",
    category: 'entrepreneurship',
    author: 'MARC Team',
    date: 'October 2024',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/10/078a61f6-153a-4ccd-8945-b06608ea7b94-1-300x157.jpg',
    href: 'https://www.marcglocal.com/from-startup-to-scale-up-the-journey-of-indian-entrepreneur/',
  },
  {
    id: 24,
    title: 'Managing Cash Flow – Insights for Entrepreneurs in Maintaining Financial Health',
    excerpt: '"I have made lots of profits, but where is the money?" — a question that haunts countless entrepreneurs. Cash flow management is the invisible discipline separating thriving businesses from failing ones.',
    category: 'entrepreneurship',
    author: 'MARC Finance',
    date: 'October 2024',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/10/1685104903094-300x165.png',
    href: 'https://www.marcglocal.com/managing-cash-flow-insights-for-entrepreneurs-in-maintaining-financial-health/',
  },
  {
    id: 25,
    title: 'Data-Driven Market Research: Key to Successful Retail Mergers in India',
    excerpt: 'A study highlighted that only about 20% of Indian companies incorporate data analytics into their M&A process. Data-driven market research is what bridges the gap between a promising merger and a successful one.',
    category: 'market-research',
    author: 'MARC Research',
    date: 'October 2024',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/10/MARC-September-Blog-4-Banner-300x157.jpg',
    href: 'https://www.marcglocal.com/data-driven-market-research-key-to-successful-retail-mergers-in-india/',
  },
  {
    id: 26,
    title: 'Planning for Global Expansion: Expert International Business Consulting with MARC',
    excerpt: 'Airbnb has seen incredible growth since its founding in 2008. As of 2024, it operates in 220+ countries. Expert international business consulting is what transforms a local success into a global brand.',
    category: 'market-research',
    author: 'MARC Global',
    date: 'October 2024',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/10/MARC-September-Blog-3-Banner-300x157.webp',
    href: 'https://www.marcglocal.com/planning-for-global-expansion-expert-international-business-consulting-with-marc/',
  },
  {
    id: 27,
    title: "MARC's Guide to Feasibility Study for Business: Your First Step Towards Business Growth",
    excerpt: 'Are you thinking of growing your business but unsure whether it is actually going to work? A professional feasibility study is the first and most critical step towards validated business growth.',
    category: 'strategy',
    author: 'MARC Advisory',
    date: 'October 2024',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/10/MARC-September-Blog-2-Banner-300x157.webp',
    href: 'https://www.marcglocal.com/feasibility-study-the-first-step-towards-business-growth-strategy/',
  },
  {
    id: 28,
    title: 'Mergers and Acquisition Consulting: Your Golden Ticket to a Successful Merger',
    excerpt: 'Ever wondered what happens when two corporate giants join forces or when a startup gets acquired by an industry leader? The difference between a smooth deal and a disaster is expert M&A consulting.',
    category: 'due-diligence',
    author: 'MARC M&A Team',
    date: 'October 2024',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/10/MARC-September-Blog-1-Banner-300x157.webp',
    href: 'https://www.marcglocal.com/mergers-and-acquisition-consulting-your-golden-ticket-to-a-successful-merger/',
  },
  {
    id: 29,
    title: 'New Product Launch: A Professional Market Research Guide for Emerging Businesses',
    excerpt: 'Did you know that up to 95% of new products fail, often due to inadequate market research? This professional guide gives emerging businesses the research framework to beat the odds.',
    category: 'market-research',
    author: 'MARC Research',
    date: 'September 2024',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/09/Blog-4-banner-300x157.jpg',
    href: 'https://www.marcglocal.com/new-product-launch-a-professional-market-research-guide-for-emerging-businesses/',
  },
  {
    id: 30,
    title: 'Your go-to guide for business-to-business (B2B) market research for SMEs',
    excerpt: 'Market research is the secret weapon for B2B SMEs. This comprehensive guide breaks down how small and medium enterprises can leverage B2B market research to win bigger clients and larger contracts.',
    category: 'market-research',
    author: 'MARC Research',
    date: 'September 2024',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/09/Blog-3-Banner-300x157.jpg',
    href: 'https://www.marcglocal.com/your-go-to-guide-for-business-to-business-b2b-market-research-for-smes/',
  },
  {
    id: 31,
    title: 'Step-by-step guide to starting your own business – A 2024 guide',
    excerpt: 'In the words of Zig Ziglar, "You don\'t have to be great to start, but you have to start to be great." This 2024 step-by-step guide gives aspiring entrepreneurs a clear and actionable launch roadmap.',
    category: 'entrepreneurship',
    author: 'MARC Team',
    date: 'September 2024',
    readTime: '10 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/09/MArc-Banner-1-300x157.webp',
    href: 'https://www.marcglocal.com/step-by-step-guide-on-how-to-start-up-your-own-business-a-2024-guide/',
  },
  {
    id: 32,
    title: '5 stages of internationalization of business: From Domestic to Global Operations',
    excerpt: 'Expanding a company into international markets is not something that can be done overnight. Understanding the 5 stages of business internationalization is essential before making the leap.',
    category: 'market-research',
    author: 'MARC Global',
    date: 'September 2024',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/09/Marc-Banner-2-300x157.jpg',
    href: 'https://www.marcglocal.com/5-stages-of-internationalization-of-business-from-domestic-to-global-operations/',
  },
  {
    id: 33,
    title: 'Innovation and Entrepreneurship: Key Drivers of Economic Growth',
    excerpt: 'This topic immediately takes my mind back to the curious case of Kodak. Innovation and entrepreneurship are not buzzwords — they are the twin engines of sustainable economic growth.',
    category: 'entrepreneurship',
    author: 'MARC Team',
    date: 'September 2024',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-03-at-14.31.01-300x188.jpeg',
    href: 'https://www.marcglocal.com/innovation-and-entrepreneurship-key-drivers-of-economic-growth/',
  },
  {
    id: 34,
    title: 'Entrepreneurship in the Digital Age',
    excerpt: 'Entrepreneurship is not for the weak-hearted. In the digital age, the barriers to entry have lowered dramatically, but the speed of competition has accelerated just as fast.',
    category: 'entrepreneurship',
    author: 'MARC Team',
    date: 'August 2024',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/08/entrepreneur-593371-300x200.jpg',
    href: 'https://www.marcglocal.com/entrepreneurship-in-the-digital-age/',
  },
  {
    id: 35,
    title: 'How can Business Consultants play a crucial role for the Gaming Industry',
    excerpt: 'In the constantly evolving gaming sector, business consultants play an important role in guiding companies through growth, monetisation strategy, market entry, and regulatory compliance.',
    category: 'industry',
    author: 'MARC Industry',
    date: 'February 2024',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/02/SEO-gaming-blog-300x157.jpg',
    href: 'https://www.marcglocal.com/how-can-business-consultants-play-a-crucial-role-for-the-gaming-industry/',
  },
  {
    id: 36,
    title: 'The Best Business Valuation Services in India',
    excerpt: 'Understanding an enterprise\'s true worth is an essential first step toward strategic decision-making and growth. Discover what separates the best business valuation services in India.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'February 2024',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/02/SEO-blog-picture-300x157.jpg',
    href: 'https://www.marcglocal.com/the-best-business-valuation-services-in-india/',
  },
  {
    id: 37,
    title: 'Top 8 Goals and Objectives of Employee Performance Management System',
    excerpt: 'In the complex scene of business operations, maximising employee performance is an essential step toward sustained competitive advantage and organisational health.',
    category: 'strategy',
    author: 'MARC Advisory',
    date: 'May 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Hospitality-consultants-300x157.jpg',
    href: 'https://www.marcglocal.com/top-8-goals-and-objectives-of-employee-performance-management-system/',
  },
  {
    id: 38,
    title: 'The Role of Feasibility Study Consulting in India',
    excerpt: "In India's ever-evolving business landscape, the strategic value of a feasibility study cannot be overstated. It is the bridge between an idea and a bankable, actionable business plan.",
    category: 'strategy',
    author: 'MARC Advisory',
    date: 'September 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/09/Market-research-300x157.jpg',
    href: 'https://www.marcglocal.com/the-role-of-feasibility-study-consulting-in-india/',
  },
  {
    id: 39,
    title: '5 New Markets To Keep An Eye On While We Go Into 2024',
    excerpt: 'The business sector of India is quickly changing, with digital, IT, finance and other sectors creating new opportunities. Here are 5 emerging markets worth watching as we move through 2024.',
    category: 'industry',
    author: 'MARC Research',
    date: 'January 2024',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2024/01/Top-markets-300x157.jpg',
    href: 'https://www.marcglocal.com/5-new-markets-to-keep-an-eye-on-while-we-go-into-2024/',
  },
  {
    id: 40,
    title: '5 New Business Resolutions That You Should Actually Follow in 2024',
    excerpt: 'As a small business owner, navigating a dynamic and competitive landscape can be challenging. These 5 business resolutions for 2024 are practical, measurable, and designed to drive real results.',
    category: 'entrepreneurship',
    author: 'MARC Team',
    date: 'December 2023',
    readTime: '4 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/12/New-year-resolution-300x157.jpg',
    href: 'https://www.marcglocal.com/5-new-business-resolutions-that-you-should-actually-follow-in-2024/',
  },

  // ── PAGE 3 ──────────────────────────────────────────────────────────────
  {
    id: 41,
    title: 'Top 10 Industry Trends of 2023 and What to Expect in 2024',
    excerpt: "We're approaching the mid-point of a decade in which we've already seen significant global disruption. These top 10 industry trends of 2023 provide a forward-looking lens into 2024.",
    category: 'industry',
    author: 'MARC Research',
    date: 'December 2023',
    readTime: '9 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/12/Article-trends-300x157.jpg',
    href: 'https://www.marcglocal.com/top-10-industry-trends-of-2023-and-what-to-expect-in-2024/',
  },
  {
    id: 42,
    title: "Transforming Hospitality Businesses: Discover the Power of India's Top Hospitality Consultants",
    excerpt: "In the ever-evolving and competitive hospitality industry, standing out from the crowd requires more than great service. India's top hospitality consultants provide the edge that drives transformation.",
    category: 'industry',
    author: 'MARC Hospitality',
    date: 'December 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/12/D4-300x157.jpg',
    href: 'https://www.marcglocal.com/transforming-hospitality-businesses-discover-the-power-of-indias-top-hospitality-consultants/',
  },
  {
    id: 43,
    title: 'Unlock Financial Security and Growth with Our Comprehensive Financial Management Solutions',
    excerpt: "In today's dynamic and complex business world, financial stability and growth are key drivers of long-term success. Comprehensive financial management solutions are no longer a luxury — they're a necessity.",
    category: 'finance',
    author: 'MARC Finance',
    date: 'December 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/12/D3-300x157.jpg',
    href: 'https://www.marcglocal.com/unlock-financial-security-and-growth-with-our-comprehensive-financial-management-solutions/',
  },
  {
    id: 44,
    title: 'Empower Your Business with Data-Driven Strategies Through Our Market Research and Analytics Solution',
    excerpt: "In today's dynamic and competitive business landscape, relying solely on intuition and gut feeling is no longer sufficient. Data-driven market research is what separates market leaders from laggards.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'December 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/12/D1-300x157.jpg',
    href: 'https://www.marcglocal.com/empower-your-business-with-data-driven-strategies-through-our-market-research-and-analytics-solution/',
  },
  {
    id: 45,
    title: 'Elevate Your Business Performance with Our Expert Business Management Consultancy in India.',
    excerpt: "In India's ever-evolving business landscape, navigating the complexities of market competition, operational efficiency, and financial health requires expert business management consultancy.",
    category: 'strategy',
    author: 'MARC Advisory',
    date: 'December 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/12/D2-300x157.jpg',
    href: 'https://www.marcglocal.com/elevate-your-business-performance-with-our-expert-business-management-consultancy-in-india/',
  },
  {
    id: 46,
    title: 'How Management Accounting Services Can Help You Take Your Business to the Next Level',
    excerpt: 'Author: Abhismith Pattanayak. In the dynamic business environment, staying competitive demands strategic decision-making informed by rigorous management accounting services.',
    category: 'finance',
    author: 'Abhismith Pattanayak',
    date: 'April 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/04/Feasibility-study-blog-300x157.jpg',
    href: 'https://www.marcglocal.com/how-management-accounting-services-can-help-you-take-your-business-to-the-next-level/',
  },
  {
    id: 47,
    title: 'Unlocking Market Potential: Top-Notch Market Research Companies in India',
    excerpt: 'Author: Abhismith Pattanayak. Marketing Research is the systematic gathering and analysis of information about your market. Discover what makes the top market research companies in India stand out.',
    category: 'market-research',
    author: 'Abhismith Pattanayak',
    date: 'May 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Customer-Profitability-Analysis-300x157.jpg',
    href: 'https://www.marcglocal.com/unlocking-market-potential-top-notch-market-research-companies-in-india/',
  },
  {
    id: 48,
    title: 'Financial Modeling and Valuation: The Key to Making Smart Financial Decisions',
    excerpt: 'Financial modelling and valuation are essential tools for businesses of all sizes. When combined, they provide a comprehensive picture that supports smarter, faster, and more defensible financial decisions.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'November 2023',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/11/fm-300x157.jpg',
    href: 'https://www.marcglocal.com/financial-modeling-and-valuation-the-key-to-making-smart-financial-decisions/',
  },
  {
    id: 49,
    title: 'A complete guide to Business Valuation Services in India',
    excerpt: 'Author: Amreeta Shanbag. In the ever-changing world of business, knowing your company\'s true value is not just important for selling — it\'s essential for strategic planning, fundraising, and growth.',
    category: 'finance',
    author: 'Amreeta Shanbag',
    date: 'October 2023',
    readTime: '8 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/10/Valuation-guide-300x157.jpg',
    href: 'https://www.marcglocal.com/a-complete-guide-to-business-valuation-services-in-india/',
  },
  {
    id: 50,
    title: 'Boost Efficiency and Productivity: Best SOP services in India for your business needs',
    excerpt: "Author: Joshua D'souza. Standard Operating Procedures are the backbone of any efficient business. The best SOP services in India help organisations codify best practices and drive consistent performance.",
    category: 'strategy',
    author: "Joshua D'souza",
    date: 'October 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/10/SOP-boost-300x157.jpg',
    href: 'https://www.marcglocal.com/boost-efficiency-and-productivity-best-sop-services-in-india-for-your-business-needs/',
  },
  {
    id: 51,
    title: 'Market research company in India you can trust to make the right decisions',
    excerpt: "Author: Priyanka Rawat. In today's rapidly evolving business landscape, the importance of market research cannot be overstated. Find a market research company in India you can truly trust.",
    category: 'market-research',
    author: 'Priyanka Rawat',
    date: 'October 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/10/MR-right-decisions-300x157.jpg',
    href: 'https://www.marcglocal.com/market-research-company-in-india-you-can-trust-to-make-the-right-decisions/',
  },
  {
    id: 52,
    title: 'MARC: one of the best global market research companies in India',
    excerpt: "In the ever-changing landscape of Indian business, the importance of market research services cannot be overstated. Here's why MARC is recognised as one of the best global market research companies in India.",
    category: 'market-research',
    author: 'MARC Team',
    date: 'September 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/09/Global-market-research-300x157.jpg',
    href: 'https://www.marcglocal.com/marc-one-of-the-best-global-market-research-companies-in-india/',
  },
  {
    id: 53,
    title: 'Best Market research companies in India you can trust to make the right decisions',
    excerpt: "In today's dynamic business landscape, making informed decisions is crucial for success. With the right market research partner, you gain the intelligence needed to act with confidence.",
    category: 'market-research',
    author: 'MARC Research',
    date: 'September 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/09/Market-research-300x157.jpg',
    href: 'https://www.marcglocal.com/best-market-research-companies-in-india-you-can-trust-to-make-the-right-decisions/',
  },
  {
    id: 54,
    title: 'Are you looking for the best Financial Modeling Services in India',
    excerpt: 'Are you in search of the best Financial Modeling and Valuation Services in India? This guide helps you identify what to look for and why MARC stands out in the competitive landscape.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'September 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/09/Financial-modelling-300x157.jpg',
    href: 'https://www.marcglocal.com/are-you-looking-for-the-best-financial-modeling-services-in-india/',
  },
  {
    id: 55,
    title: 'Hire the best Business Valuation Services company in India',
    excerpt: 'When it comes to navigating the complexities of business valuation, you need a partner with both deep expertise and credibility. Here is how to hire the best business valuation services company in India.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'September 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/09/Business-valuation-300x157.jpg',
    href: 'https://www.marcglocal.com/hire-the-best-business-valuation-services-company-in-india/',
  },
  {
    id: 56,
    title: 'How to identify a top management consulting firm in India?',
    excerpt: 'Management consultancy plays a vital role in aiding businesses to tackle challenges and achieve strategic objectives. Here is how to identify and evaluate a top management consulting firm in India.',
    category: 'strategy',
    author: 'MARC Advisory',
    date: 'August 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/08/Consulting-company-in-india-300x157.jpg',
    href: 'https://www.marcglocal.com/how-to-identify-a-top-management-consulting-firm-in-india/',
  },
  {
    id: 57,
    title: 'How do I choose best healthcare market research firm?',
    excerpt: 'While the healthcare industry relies on services and products to keep patients healthy, it also needs sharp market intelligence to stay competitive. Here is how to choose the best healthcare market research firm.',
    category: 'market-research',
    author: 'MARC Research',
    date: 'August 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/08/Healthcare-research-firm-300x157.jpg',
    href: 'https://www.marcglocal.com/how-do-i-choose-best-healthcare-market-research-firm/',
  },
  {
    id: 58,
    title: 'How to choose a market research firm that will provide high-quality insights?',
    excerpt: 'Market research provides critical information about your market and business landscape. It can help your company define its competitive positioning, identify opportunities, and guide product development.',
    category: 'market-research',
    author: 'MARC Research',
    date: 'August 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/08/Market-research-insights-300x157.jpg',
    href: 'https://www.marcglocal.com/how-to-choose-a-market-research-firm-that-will-provide-high-quality-insights/',
  },
  {
    id: 59,
    title: 'The Impact of Industry Trends on Business Valuation',
    excerpt: 'As the world continues to advance at a rapid pace, one undeniable truth emerges: industry trends have a profound and measurable impact on how businesses are valued by investors and acquirers alike.',
    category: 'finance',
    author: 'MARC Finance',
    date: 'July 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/07/industry-trends-300x157.jpg',
    href: 'https://www.marcglocal.com/the-impact-of-industry-trends-on-business-valuation/',
  },
  {
    id: 60,
    title: 'The Role of Business Management Consultancy in Driving Organizational Success',
    excerpt: 'In the world of business growth, chance encounters are scarce. Instead, a profound dedication to strategy, process, and execution — guided by expert business management consultancy — drives success.',
    category: 'strategy',
    author: 'MARC Advisory',
    date: 'July 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/07/Business-managenet-consultancy-300x157.jpg',
    href: 'https://www.marcglocal.com/the-role-of-business-management-consultancy-in-driving-organizational-success/',
  },

  // ── PAGE 4 ──────────────────────────────────────────────────────────────
  {
    id: 61,
    title: 'How can you improve your business with deal advisory services?',
    excerpt: "Author: Joshua Myron D'souza. In today's day and age, a deal advisory service is no longer reserved for large corporations. SMEs and startups increasingly rely on expert deal advisory to structure winning transactions.",
    category: 'due-diligence',
    author: "Joshua D'souza",
    date: 'June 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/06/Deal-Advisory-Services-300x157.jpg',
    href: 'https://www.marcglocal.com/how-can-you-improve-your-business-with-deal-advisory-services/',
  },
  {
    id: 62,
    title: '5 advantages of having financial management services in India',
    excerpt: 'Author: Priyanka Rawat. Financial management is a critical part of today\'s rapidly changing business landscape. These 5 advantages show why professional financial management services are a strategic investment.',
    category: 'finance',
    author: 'Priyanka Rawat',
    date: 'June 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/06/Financial-Advantahges-300x157.jpg',
    href: 'https://www.marcglocal.com/5-advantages-of-having-financial-management-services-in-india/',
  },
  {
    id: 63,
    title: 'Why is market research analysis the core of every project?',
    excerpt: "Author: Pawan Kotharkar. In today's competitive business landscape, understanding the market and its dynamics is not optional — it is the foundation of every successful project or product launch.",
    category: 'market-research',
    author: 'Pawan Kotharkar',
    date: 'June 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/06/Market-Research-analysis-300x157.jpg',
    href: 'https://www.marcglocal.com/why-is-market-research-analysis-the-core-of-every-project/',
  },
  {
    id: 64,
    title: 'How do Hospitality consultants help business growth?',
    excerpt: 'Author: Aishna Nasnodkar. The hospitality industry is highly competitive, and businesses in this sector need more than operational excellence to thrive — they need expert hospitality consulting.',
    category: 'industry',
    author: 'Aishna Nasnodkar',
    date: 'May 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Hospitality-consultants-300x157.jpg',
    href: 'https://www.marcglocal.com/how-do-hospitality-consultants-help-business-growth/',
  },
  {
    id: 65,
    title: 'What are the 3 main benefits of customer profitability analysis?',
    excerpt: 'Author: Devasree Karapurkar. Customer profitability analysis is a crucial process that involves evaluating the revenue and costs associated with each customer to identify your most and least profitable relationships.',
    category: 'strategy',
    author: 'Devasree Karapurkar',
    date: 'May 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Customer-Profitability-Analysis-300x157.jpg',
    href: 'https://www.marcglocal.com/what-are-the-3-main-benefits-of-customer-profitability-analysis/',
  },
  {
    id: 66,
    title: 'Why financial due diligence is important and how it is performed?',
    excerpt: 'Author: Devasree Karapurkar. Financial due diligence is a crucial process undertaken before any major transaction. Understanding its importance — and how it is properly performed — is essential for every dealmaker.',
    category: 'due-diligence',
    author: 'Devasree Karapurkar',
    date: 'May 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Due-Diligence-Importance-300x157.jpg',
    href: 'https://www.marcglocal.com/why-financial-due-diligence-is-important-and-how-it-is-performed/',
  },
  {
    id: 67,
    title: "Why India's Manufacturing Industry is an Attractive Opportunity for Investors?",
    excerpt: "Author: Suprita Mallya. India is at a critical juncture in its economic history, having launched several initiatives to position itself as a global manufacturing destination.",
    category: 'industry',
    author: 'Suprita Mallya',
    date: 'May 2023',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Investors-for-manufacturing-in-india-300x157.jpg',
    href: 'https://www.marcglocal.com/why-indias-manufacturing-industry-is-an-attractive-opportunity-for-investors/',
  },
  {
    id: 68,
    title: 'ESG and Sustainable Development in Indian Manufacturing: A Roadmap for the Future',
    excerpt: 'Author: Suprita Mallya. Environmental, Social and Governance (ESG) Practices might not be a new concept, but their application in Indian manufacturing is reaching a tipping point in 2023 and beyond.',
    category: 'industry',
    author: 'Suprita Mallya',
    date: 'May 2023',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/05/Sustaibility-driving-manufacturing-300x157.jpg',
    href: 'https://www.marcglocal.com/esg-and-sustainable-development-in-indian-manufacturing-a-roadmap-for-the-future/',
  },
  {
    id: 69,
    title: 'What is the primary purpose of an standard operating procedure(SOP)?',
    excerpt: 'Author: Pawan Kotharkar. Standard Operating Procedures (SOPs) are essential documents that outline the step-by-step process for completing recurring tasks consistently, safely, and efficiently.',
    category: 'strategy',
    author: 'Pawan Kotharkar',
    date: 'April 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/04/SOP-Blog-300x157.jpg',
    href: 'https://www.marcglocal.com/what-is-the-main-purpose-of-standard-operating-procedures/',
  },
  {
    id: 70,
    title: 'How feasibility study consultation can help your business grow?',
    excerpt: 'Author: Divya Gouda. "I was once conducting a seminar on the topic of \'need for feasibility study\'" — and the answers in the room revealed just how many businesses skip this critical first step.',
    category: 'strategy',
    author: 'Divya Gouda',
    date: 'April 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/04/Feasibility-study-blog-300x157.jpg',
    href: 'https://www.marcglocal.com/how-feasibility-study-consultation-can-help-your-business-grow/',
  },
  {
    id: 71,
    title: 'Why is market research necessary for new business ideas?',
    excerpt: "Author: Divya Gouda. As a business owner, it's important to avoid making assumptions about your market. Market research turns guesswork into certainty before you invest capital in a new idea.",
    category: 'market-research',
    author: 'Divya Gouda',
    date: 'April 2023',
    readTime: '5 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/04/Market-Research-Blog-300x157.jpg',
    href: 'https://www.marcglocal.com/why-is-market-research-necessary-for-new-business-ideas/',
  },
  {
    id: 72,
    title: "Sustainable Manufacturing: A Key Driver in India's Rise as a Manufacturing Leader",
    excerpt: "Author: Habbisha Sivabalan. India's rise as a manufacturing leader is increasingly being driven by sustainable practices. Sustainability is no longer a CSR add-on — it is a core business strategy.",
    category: 'industry',
    author: 'Habbisha Sivabalan',
    date: 'March 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/03/Sustainability-Manufacturing-In-India-300x157.jpg',
    href: 'https://www.marcglocal.com/sustainable-manufacturing-a-key-driver-in-indias-rise-as-a-manufacturing-leader/',
  },
  {
    id: 73,
    title: 'Where are Family Offices Investing and Why?',
    excerpt: 'Author: Suprita Mallya. When it comes to managing wealth, family offices have become an increasingly prominent force in private markets. Understanding where they invest reveals key trends in global capital allocation.',
    category: 'finance',
    author: 'Suprita Mallya',
    date: 'March 2023',
    readTime: '6 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/03/Family-Office-Article-300x157.jpg',
    href: 'https://www.marcglocal.com/topic-where-are-family-offices-investing-and-why/',
  },
  {
    id: 74,
    title: 'Driving Factors Propelling India as a Leading Global Manufacturing Destination',
    excerpt: 'Author: Pawan Kotharkar. The Indian Manufacturing Industry has seen a tremendous amount of positive momentum. These are the key structural factors propelling India to the top of global manufacturing destinations.',
    category: 'industry',
    author: 'Pawan Kotharkar',
    date: 'March 2023',
    readTime: '7 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/03/Driving-Factors-Propelling-India-as-a-Leading-Global-Manufacturing-Destination-300x157.png',
    href: 'https://www.marcglocal.com/driving-factors-propelling-india-as-a-leading-global-manufacturing-destination/',
  },
  {
    id: 75,
    title: '3 ways Sustainability can help Businesses in 2023',
    excerpt: 'Author: Pawan Kotharkar. Sustainability has not just become a hot topic for 2023 — it has become a business imperative. Here are 3 concrete ways sustainability helps businesses grow and build resilience.',
    category: 'industry',
    author: 'Pawan Kotharkar',
    date: 'March 2023',
    readTime: '4 min',
    image: 'https://www.marcglocal.com/wp-content/uploads/2023/03/Sustainability-Blog-Picture-300x157.png',
    href: 'https://www.marcglocal.com/3-ways-sustainability-can-help-businesses-in-2023/',
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
      <section className="relative pt-32 pb-16 bg-white border-b border-[#C2DDB4]/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left */}
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
              <div className="flex gap-8 py-6 border-t border-b border-[#C2DDB4]/30">
                <div>
                  <div className="text-3xl font-bold text-[#4E9141]">75+</div>
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

            {/* Right – Featured posts */}
            <div className="lg:col-span-7 space-y-6">
              {featuredPosts.map((post, i) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                      <div className="flex items-center gap-3 text-sm text-[#47635D] mb-3">
                        <span className="text-[#4E9141] font-medium capitalize">{post.category.replace('-', ' ')}</span>
                        <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                        <span>{post.readTime} read</span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-[#1D342F] leading-tight mb-3 group-hover:text-[#4E9141] transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                      <p className="text-[#47635D] mb-6 line-clamp-3 text-sm">{post.excerpt}</p>
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
                </a>
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
              <button
                key={cat.id}
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
              <input
                type="text"
                placeholder="Search articles, topics or authors..."
                className="w-full pl-14 pr-12 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-2xl focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 focus:outline-none transition-all text-[#1D342F]"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowAllPosts(false) }}
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
              <a
                key={post.id}
                
                target="_blank"
                rel="noopener noreferrer"
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
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
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

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-[#47635D] mb-3">
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
                    <h3 className="text-lg font-bold text-[#1D342F] leading-tight mb-3 group-hover:text-[#4E9141] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#47635D] text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
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
              </a>
            ))}
          </div>

          {/* Load More */}
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

      {/* ── Newsletter ────────────────────────────────────────────────── */}
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