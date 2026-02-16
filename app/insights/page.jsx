'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { 
  Download, Search, ArrowRight, FileText, TrendingUp, ArrowUpRight,
  Building2, Heart, Plane, ShoppingBag, Factory, Zap, Filter,
  BookOpen, BarChart3, Clock, ChevronRight, X
} from 'lucide-react'

// Helper function to generate PDF filename from title
const getPdfFilename = (title) => {
  return title
    .replace(/[^a-zA-Z0-9-_\s]/g, '')
    .replace(/\s+/g, '-') + '.pdf'
}

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
    title: "Overview of the Condiments Market",
    category: "retail",
    image: "/images/insights/spices-1-500x286.png",
    date: "February 2026",
    downloads: "1.2k",
    readTime: "10 min read",
    new: true,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "MARC MSME Overview 2026",
    category: "manufacturing",
    image: "/images/insights/marc-msme-1.png",
    date: "February 2026",
    downloads: "2.1k",
    readTime: "15 min read",
    new: true,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "India Life Sciences Landscape",
    category: "healthcare",
    image: "/images/insights/lifescience-marc-1.png",
    date: "February 2026",
    downloads: "1.8k",
    readTime: "18 min read",
    new: true,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Indian Nutraceuticals and OTC Pharmaceutical Market Entry",
    category: "healthcare",
    image: "/images/insights/nutraci-500x286.png",
    date: "December 2025",
    downloads: "2.4k",
    readTime: "12 min read",
    new: true,
    featured: true,
    pdfAvailable: true,
    excerpt: "Comprehensive analysis of market entry strategies for nutraceutical and OTC pharmaceutical companies looking to expand in India."
  },
  {
    title: "Digital Healthcare Report",
    category: "healthcare",
    image: "/images/insights/digitalimg-1-500x286.png",
    date: "December 2025",
    downloads: "1.8k",
    readTime: "18 min read",
    new: false,
    featured: true,
    pdfAvailable: true,
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
    featured: true,
    pdfAvailable: true,
    excerpt: "Analysis of proposed GST reforms and their potential impact across key sectors of the Indian economy."
  },
  {
    title: "Contract Manufacturing in India",
    category: "manufacturing",
    image: "/images/insights/contractm-500x286.png",
    date: "December 2025",
    downloads: "1.5k",
    readTime: "15 min read",
    new: false,
    featured: true,
    pdfAvailable: true,
    excerpt: "Exploring opportunities and challenges in India's growing contract manufacturing sector."
  },
  {
    title: "Rise of Experiential Dining",
    category: "hospitality",
    image: "/images/insights/dining-500x286.png",
    date: "December 2025",
    downloads: "2.2k",
    readTime: "10 min read",
    new: false,
    featured: true,
    pdfAvailable: true,
    excerpt: "How restaurants are reimagining the dining experience to attract and retain customers."
  },
  {
    title: "Rise of Luxury Hospitality in Tier-2 Cities",
    category: "hospitality",
    image: "/images/insights/rise-of-luxury-hospitality-in-tier-2-cities-image-500x286.jpg",
    date: "October 2025",
    downloads: "1.9k",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "Analyzing the growth of premium hospitality offerings beyond metro cities."
  },
  {
    title: "Growth of Co-working Spaces in Tier-2 Cities in India",
    category: "retail",
    image: "/images/insights/growth-of-co-working-spaces-in-tier-2-cities-in-india-image-500x286.jpg",
    date: "October 2025",
    downloads: "1.2k",
    readTime: "9 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "The evolution of workspace solutions and future trends in flexible office spaces."
  },
  {
    title: "Indigo Case Study Report",
    category: "hospitality",
    image: "/images/insights/indigo-case-study-report-updated-image-500x286.jpg",
    date: "October 2025",
    downloads: "980",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Manufacturing Industry Overview",
    category: "manufacturing",
    image: "/images/insights/manufacturing-500x286.jpg",
    date: "June 2025",
    downloads: "2.8k",
    readTime: "20 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "Comprehensive overview of India's manufacturing sector performance and outlook."
  },
  {
    title: "FMCG Industry Overview 2025",
    category: "retail",
    image: "/images/insights/qbs7kzx5imm37fau9lroszd24vnbivsj-500x286.jpg",
    date: "July 2025",
    downloads: "3.5k",
    readTime: "16 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "State of the FMCG industry with consumer trends and market projections."
  },
  {
    title: "Impact of Q-commerce on FMCG Sales in India",
    category: "retail",
    image: "/images/insights/qcommerce.jpg",
    date: "July 2025",
    downloads: "2.1k",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "How quick commerce is disrupting traditional FMCG distribution channels."
  },
  {
    title: "Maha Kumbh 2025",
    category: "hospitality",
    image: "/images/insights/mahakumbh-500x286.jpg",
    date: "June 2025",
    downloads: "1.4k",
    readTime: "8 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "India's Logistics Market Analysis",
    category: "manufacturing",
    image: "/images/insights/logistics-500x286.webp",
    date: "July 2025",
    downloads: "1.7k",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "Deep dive into India's logistics infrastructure and growth opportunities."
  },
  {
    title: "FDI: Fuelling India's Growth and Development",
    category: "manufacturing",
    image: "/images/insights/fdi-500x286.jpg",
    date: "June 2025",
    downloads: "1.6k",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "M&A Tracker 2024",
    category: "other",
    image: "/images/insights/m_and_a.png",
    date: "February 2025",
    downloads: "2.3k",
    readTime: "25 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Ghost Kitchen Industry",
    category: "hospitality",
    image: "/images/insights/ghost-500x286.jpg",
    date: "June 2025",
    downloads: "1.1k",
    readTime: "10 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Hospitality Industry Overview 2025",
    category: "hospitality",
    image: "/images/insights/hospitality_2025-500x286.jpg",
    date: "February 2025",
    downloads: "2.7k",
    readTime: "18 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Telangana MSME Policy 2024: Life Sciences & Pharma",
    category: "healthcare",
    image: "/images/insights/telangana-500x286.jpg",
    date: "February 2025",
    downloads: "890",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Understanding USA Tariffs and their Impact on India",
    category: "manufacturing",
    image: "/images/insights/usa-1.png",
    date: "June 2025",
    downloads: "1.9k",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "The Rubber Industry in Kerala",
    category: "manufacturing",
    image: "/images/insights/kerala_report-1-500x286.png",
    date: "February 2025",
    downloads: "720",
    readTime: "9 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Enhancing Power Infrastructure",
    category: "energy",
    image: "/images/insights/elec-500x286.jpg",
    date: "October 2024",
    downloads: "890",
    readTime: "17 min read",
    new: false,
    featured: false,
    pdfAvailable: true,
    excerpt: "Strategies for modernizing India's power infrastructure for sustainable growth."
  },
  {
    title: "Hyderabad: A Rising Powerhouse in India's Growth Story",
    category: "other",
    image: "/images/insights/powerhouse-1.jpg",
    date: "June 2025",
    downloads: "1.3k",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "M&A Tracker Q2 2024",
    category: "other",
    image: "/images/insights/Picture1-1-500x286.png",
    date: "October 2024",
    downloads: "1.5k",
    readTime: "20 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Mergers and Acquisitions Tracker 2023",
    category: "other",
    image: "/images/insights/Mna-report.jpg",
    date: "April 2024",
    downloads: "2.1k",
    readTime: "22 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Healthcare Sector Competencies",
    category: "healthcare",
    image: "/images/insights/health2025-500x286.jpg",
    date: "March 2025",
    downloads: "1.2k",
    readTime: "15 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Shaping Goa's Future: Impact of Marina Development",
    category: "hospitality",
    image: "/images/insights/Picture1-500x286.jpg",
    date: "August 2024",
    downloads: "650",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Mopa Goa Airport",
    category: "hospitality",
    image: "/images/insights/bao-menglong-FhoJYnw-cg-unsplash-scaled-500x286.jpg",
    date: "June 2024",
    downloads: "780",
    readTime: "9 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Pharma Industry in Telangana",
    category: "healthcare",
    image: "/images/insights/pharma-500x286.jpg",
    date: "February 2025",
    downloads: "1.1k",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Rail Double Tracking in Goa",
    category: "hospitality",
    image: "/images/insights/peakpx-500x286.jpg",
    date: "August 2024",
    downloads: "540",
    readTime: "8 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Climate Change and its Effect on the Indian Economy",
    category: "energy",
    image: "/images/insights/MARC-Insight-cliate.jpg",
    date: "March 2024",
    downloads: "1.4k",
    readTime: "16 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Tamil Nadu's EV Policy",
    category: "energy",
    image: "/images/insights/ev_report-500x286.jpg",
    date: "February 2025",
    downloads: "920",
    readTime: "10 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Maharashtra: Pursuit of a $1 Trillion Economy by 2028",
    category: "other",
    image: "/images/insights/image-1-1-500x286.png",
    date: "August 2024",
    downloads: "1.6k",
    readTime: "15 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Restaurant Industry Overview 2024",
    category: "hospitality",
    image: "/images/insights/Restaurant-Industry-JPEG.jpg",
    date: "February 2024",
    downloads: "2.3k",
    readTime: "17 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "IT and Startup Ecosystem in Mysuru",
    category: "other",
    image: "/images/insights/mysore_it-500x286.jpg",
    date: "February 2025",
    downloads: "840",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Impact of IPL on the Indian Economy",
    category: "other",
    image: "/images/insights/MARC-IPL.jpg",
    date: "April 2024",
    downloads: "1.7k",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Gujarat Textiles",
    category: "manufacturing",
    image: "/images/insights/Gujarat-picture-1-500x286.png",
    date: "October 2024",
    downloads: "680",
    readTime: "10 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Retail Industry Overview 2024",
    category: "retail",
    image: "/images/insights/Retail-report.jpg",
    date: "April 2024",
    downloads: "2.9k",
    readTime: "19 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Hospitality Industry Overview 2024",
    category: "hospitality",
    image: "/images/insights/Hospitality-Industry-report-picture.png",
    date: "March 2024",
    downloads: "2.6k",
    readTime: "18 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Healthcare in Dakshin Kannada",
    category: "healthcare",
    image: "/images/insights/healthcare-500x286.jpg",
    date: "September 2024",
    downloads: "590",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Quick Commerce Industry Overview",
    category: "retail",
    image: "/images/insights/QC.jpg",
    date: "March 2024",
    downloads: "1.8k",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Odisha: A Land to Explore and Invest",
    category: "other",
    image: "/images/insights/Odisha-picture.jpg",
    date: "August 2023",
    downloads: "970",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "China +1 Policy",
    category: "manufacturing",
    image: "/images/insights/dde637cc-500x286.jpg",
    date: "October 2024",
    downloads: "1.5k",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Electronic Manufacturing Services",
    category: "manufacturing",
    image: "/images/insights/EMS-Industry.jpg",
    date: "March 2024",
    downloads: "1.3k",
    readTime: "15 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Indian Shipping and Logistics Industry",
    category: "manufacturing",
    image: "/images/insights/RS.jpg",
    date: "December 2023",
    downloads: "1.6k",
    readTime: "16 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Hubballi-Dharwad",
    category: "other",
    image: "/images/insights/DALL·E-2024-10-04-17.03.31-A-picturesque-aerial-view-of-Hubli-Dharwad-a-prominent-twin-city-in-Karnataka-India.-The-image-should-capture-both-the-urban-and-suburban-landscapes-500x286.webp",
    date: "October 2024",
    downloads: "720",
    readTime: "10 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Education Industry Overview 2023",
    category: "other",
    image: "/images/insights/Education-Industry-Overview.jpg",
    date: "August 2023",
    downloads: "1.9k",
    readTime: "17 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Online/Offline Gambling & Gaming",
    category: "other",
    image: "/images/insights/Gaming-and-gambling.jpg",
    date: "October 2023",
    downloads: "1.1k",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Education Sector in Dakshina Kannada",
    category: "other",
    image: "/images/insights/Picture11-500x286.png",
    date: "September 2024",
    downloads: "480",
    readTime: "9 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Rise of Family Offices in India",
    category: "other",
    image: "/images/insights/Rise-Of-Family-Offices-In-India.png",
    date: "April 2023",
    downloads: "1.4k",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Manufacturing Industry Overview 2023",
    category: "manufacturing",
    image: "/images/insights/Manufacturing-insight-report.jpg",
    date: "July 2023",
    downloads: "2.4k",
    readTime: "20 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "National Education Policy 2020",
    category: "other",
    image: "/images/insights/church-of-the-king-j9jZSqfH5YI-unsplash-scaled-500x286.jpg",
    date: "August 2024",
    downloads: "1.2k",
    readTime: "15 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Sustainability in Supply Chains",
    category: "manufacturing",
    image: "/images/insights/Supply-23.jpg",
    date: "August 2022",
    downloads: "890",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Indian Waste Management Industry 2023",
    category: "energy",
    image: "/images/insights/Waste-Management.jpg",
    date: "August 2023",
    downloads: "1.3k",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Healthcare Industry",
    category: "healthcare",
    image: "/images/insights/image-2-500x286.png",
    date: "July 2024",
    downloads: "2.1k",
    readTime: "16 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Top 5 Business Ideas for 2023",
    category: "other",
    image: "/images/insights/To-5-Business-Idea-Image.jpg",
    date: "January 2023",
    downloads: "2.5k",
    readTime: "10 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Union Budget 2023 for MSMEs",
    category: "other",
    image: "/images/insights/Union-budget-Jpeg.jpg",
    date: "February 2023",
    downloads: "1.7k",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "India's AYUSH Sector Overview",
    category: "healthcare",
    image: "/images/insights/AYUSH-sector.jpg",
    date: "May 2024",
    downloads: "980",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Indian Pharma Sector Report 2021",
    category: "healthcare",
    image: "/images/insights/pharma.jpg",
    date: "August 2021",
    downloads: "2.3k",
    readTime: "19 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "UK Fintech Industry Report",
    category: "other",
    image: "/images/insights/Insight-1.jpg",
    date: "June 2022",
    downloads: "1.1k",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "India's Online Travel Agencies (OTAs)",
    category: "hospitality",
    image: "/images/insights/Travel-agency-report.jpg",
    date: "April 2024",
    downloads: "1.5k",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "US Educational Sector Report 2022",
    category: "other",
    image: "/images/insights/insight-3.jpg",
    date: "June 2022",
    downloads: "870",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Indian Gaming Industry",
    category: "other",
    image: "/images/insights/gaming-23.jpg",
    date: "August 2022",
    downloads: "1.6k",
    readTime: "15 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "FMCG Industry Overview 2024",
    category: "retail",
    image: "/images/insights/MARC-Insights-FMCG-Industry-in-India.jpg",
    date: "April 2024",
    downloads: "3.2k",
    readTime: "18 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "US Hospitality Sector Report 2022",
    category: "hospitality",
    image: "/images/insights/insight-2.jpg",
    date: "June 2022",
    downloads: "950",
    readTime: "14 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Future of Home Delivery in India",
    category: "retail",
    image: "/images/insights/Insights_32.jpg",
    date: "July 2022",
    downloads: "1.4k",
    readTime: "11 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "India's Textile Industry Overview",
    category: "manufacturing",
    image: "/images/insights/Textile-industry.jpg",
    date: "March 2024",
    downloads: "1.8k",
    readTime: "16 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "The Organic Food Market Report 2021",
    category: "retail",
    image: "/images/insights/organic-food.jpg",
    date: "August 2021",
    downloads: "1.2k",
    readTime: "12 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Technologies Changing the Food Industry",
    category: "retail",
    image: "/images/insights/MARC-Food-Tech.jpg",
    date: "January 2023",
    downloads: "1.5k",
    readTime: "13 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Alcohol Industry in India",
    category: "retail",
    image: "/images/insights/MARC-Insight-Template.jpg",
    date: "November 2023",
    downloads: "1.9k",
    readTime: "15 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  },
  {
    title: "Renewable Energy Industry Overview",
    category: "energy",
    image: "/images/insights/Renewables.jpg",
    date: "September 2023",
    downloads: "2.2k",
    readTime: "18 min read",
    new: false,
    featured: false,
    pdfAvailable: true
  }
]

// Card stack data for hero animation - these will match actual insights
const getStackedCards = () => {
  return [
    insights[3], // Indian Nutraceuticals and OTC Pharmaceutical Market Entry
    insights[4], // Digital Healthcare Report
    insights[5], // GST 2.0: Key Reforms and Sectoral Impact
    insights[6], // Contract Manufacturing in India
  ]
}

const stackedCardsColors = ['#E8F5E3', '#FEF3C7', '#DBEAFE', '#FCE7F3']

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
  const [activeCard, setActiveCard] = useState(0)
  
  // Get stacked cards from insights
  const stackedCards = getStackedCards()

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % stackedCards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeCategory === 'all' || insight.category === activeCategory
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredInsight = insights.find(i => i.featured && i.new) || insights[0]
  const latestInsights = insights.filter(i => i !== featuredInsight).slice(0, 4)

  // Component for rendering report card with PDF download
  const ReportCard = ({ insight, featured = false }) => {
    const pdfUrl = `/pdfs/${getPdfFilename(insight.title)}`
    
    if (featured) {
      return (
        <a href={pdfUrl} download className="group block h-full">
          <article className="h-full bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-xl transition-all duration-500 flex flex-col">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image 
                src={insight.image} 
                alt={insight.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                {insight.new && (
                  <span className="px-3 py-1 bg-[#4E9141] text-white text-xs font-semibold rounded-full">
                    NEW
                  </span>
                )}
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#47635D] text-xs font-medium rounded-full capitalize">
                  {insight.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-sm text-[#47635D] mb-4">
                <span>{insight.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#C2DDB4]" />
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {insight.readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-3 group-hover:text-[#4E9141] transition-colors leading-tight">
                {insight.title}
              </h3>
              <p className="text-[#47635D] leading-relaxed mb-6 flex-1">
                {insight.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm text-[#47635D]">{insight.downloads} downloads</span>
                <span className="inline-flex items-center gap-2 text-[#4E9141] font-semibold group-hover:gap-3 transition-all">
                  Download PDF <Download className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>
        </a>
      )
    }

    return (
      <a href={pdfUrl} download className="group block">
        <article className="h-full bg-white rounded-xl border border-gray-100 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image 
              src={insight.image} 
              alt={insight.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {insight.new && (
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4E9141] text-white text-xs font-semibold rounded z-10">
                NEW
              </div>
            )}

            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all z-10">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Download className="w-5 h-5 text-[#4E9141]" />
              </div>
            </div>
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
      </a>
    )
  }

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
                        style={{ backgroundColor: stackedCardsColors[index] }}
                      >
                        {/* Card Header */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-[#4E9141] text-xs font-semibold rounded-full capitalize">
                            {card.category}
                          </span>
                          {card.new && (
                            <span className="px-2 py-1 bg-[#4E9141] text-white text-xs font-bold rounded">
                              NEW
                            </span>
                          )}
                        </div>
                        
                        {/* Card Image */}
                        <div className="w-full h-32 bg-white/60 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                          <Image 
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 288px"
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Card Title */}
                        <h3 className="font-bold text-[#1D342F] text-lg leading-tight mb-3 line-clamp-2">
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
        className="py-16 bg-[#F7FFF5]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm font-semibold text-[#47635D] uppercase tracking-widest">Featured</h2>
            <Link href="#all-reports" className="text-[#4E9141] text-sm font-medium hover:underline flex items-center gap-1">
              View All Reports <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Main Featured */}
            <ReportCard insight={featuredInsight} featured={true} />

            {/* Right Side - 4 Reports in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {latestInsights.map((insight, i) => (
                <ReportCard key={i} insight={insight} />
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
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          
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

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, i) => (
              <ReportCard key={i} insight={insight} />
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