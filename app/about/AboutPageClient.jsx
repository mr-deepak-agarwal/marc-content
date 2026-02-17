'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { 
  ArrowRight, Eye, Compass, Award, Users,
  MapPin, Linkedin, Briefcase, Globe, Target,
  Building2, Phone, Mail, ExternalLink, Handshake
} from 'lucide-react'

const teamImages = [
  {
    url: '/about/IMG_0359.JPG',
    title: 'Our Team at Work',
  },
  {
    url: '/about/IMG_0372.JPG',
    title: 'Strategy Sessions',
  },
  {
    url: '/about/IMG_0378.JPG',
    title: 'Client Meetings',
  },
  {
    url: '/about/IMG_0395.JPG',
    title: 'Team Collaboration',
  },
  {
    url: '/about/IMG_0435.JPG',
    title: 'Advisory Consulting',
  },
  {
    url: '/about/IMG_0460.JPG',
    title: 'Business Planning',
  },
  {
    url: '/about/IMG_0475.JPG',
    title: 'Team Brainstorming',
  },
  {
    url: '/about/IMG_0490.JPG',
    title: 'Expert Analysis',
  },
  {
    url: '/about/IMG_0504.JPG',
    title: 'Leadership Team',
  },
  {
    url: '/about/IMG_0515.JPG',
    title: 'Global Operations',
  },
]

const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '30+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const directors = [
  {
    name: 'Ashutosh Kharangate',
    role: 'Founder & Managing Director',
    image: '/images/about/ashutosh-kharangate.jpg',
    linkedin: 'https://www.linkedin.com/in/ashutoshkharangate/',
    bio: 'Part of PWC Financial Advisory Division for 4 years. Expert in Due Diligence and Valuations in M&A across sectors. Member of the Institute of Chartered Accounts of India (ICAI).',
    credentials: ['Chartered Accountant', 'PWC Alumni', 'M&A Expert'],
  },
  {
    name: 'Satish Shinde',
    role: 'Co-Founder & Director',
    image: '/images/about/satish-shinde.png',
    linkedin: 'https://www.linkedin.com/in/satish-shinde-06962047/',
    bio: 'MD of Astra Metals Group. Leading the Marketing and Finance Division of Astra Metals Group. Over 30 years of experience in the manufacturing arena.',
    credentials: ['30+ Years Experience', 'Manufacturing Expert', 'Finance Leader'],
  },
  {
    name: 'Anita Ganti',
    role: 'Director',
    image: '/images/about/anita-ganti.png',
    linkedin: 'https://www.linkedin.com/in/anita-ganti/',
    bio: 'Former Senior Vice President at Wipro for over 4 years. Ex Texas Instruments and Flex Executive. Finance Major, MBA at The Wharton School of the University of Pennsylvania.',
    credentials: ['Wharton MBA', 'Wipro SVP', 'Global Operations'],
  },
]

const keyTeam = [
  {
    name: 'Vaikunth Nadkarni',
    role: 'Manager - Market Research and Financial Analysis',
    image: '/images/about/vaikunth-nadkarni.jpg',
    linkedin: null,
  },
  {
    name: 'Avdhut Padwalkar',
    role: 'Assistant Manager - Market Research and Financial Analysis',
    image: '/images/about/avdhut-padwalkar.jpg',
    linkedin: null,
  },
  {
    name: 'Smriti Bhattacharya',
    role: 'Assistant Manager - Market Research and Financial Analysis',
    image: '/images/about/smriti-bhattacharya.png',
    linkedin: null,
  },
  {
    name: 'Roopa Bhat Jacob',
    role: 'Head - Business Development',
    image: '/images/about/roopa-bhat-jacob.png',
    linkedin: null,
  },
]

const associates = [
  {
    name: 'Priyanka Kamat',
    role: 'Consultant - Human Capital',
    image: '/images/about/priyanka-kamat.jpeg',
    linkedin: null,
  },
  {
    name: 'Karan Shah',
    role: 'Associate Partner',
    image: '/images/about/karan-shah.jpg',
    linkedin: null,
  },
  {
    name: 'Manu Kurian',
    role: 'Associate Partner',
    image: '/images/about/manu-kurian.jpg',
    linkedin: null,
  },
  {
    name: 'Manas Joshi',
    role: 'Associate Partner',
    image: '/images/about/manas-joshi.jpg',
    linkedin: null,
  },
  {
    name: 'Varsha Chopra',
    role: 'Associate Partner',
    image: '/images/about/varsha-chopra.jpg',
    linkedin: null,
  },
  {
    name: 'Ruchi Jindal',
    role: 'Associate Partner',
    image: '/images/about/ruchi-jindal.jpg',
    linkedin: null,
  },
  {
    name: 'Atanu Sengupta',
    role: 'Associate Partner',
    image: '/images/about/atanu-sengupta.jpg',
    linkedin: null,
  },
  {
    name: 'Ayush Soni',
    role: 'Associate Partner',
    image: '/images/about/ayush-soni.jpg',
    linkedin: null,
  },
  {
    name: 'CA Shrinidhi Rao',
    role: 'Associate Partner',
    image: '/images/about/shrinidhi-rao.jpg',
    linkedin: null,
  },
]

const domainExperts = [
  {
    name: 'Anand Chatterjee',
    role: 'Hospitality Sector Expert',
    image: '/images/about/anand-chatterjee.jpg',
    linkedin: null,
  },
  {
    name: 'Dr. Tejas Kamat',
    role: 'Healthcare Sector Expert',
    image: '/images/about/tejas-kamat.jpg',
    linkedin: null,
  },
  {
    name: 'Sonali Vartak',
    role: 'Finance Expert',
    image: '/images/about/sonali-vartak.jpg',
    linkedin: null,
  },
]

const timeline = [
  { year: '2010', title: 'Founded', desc: 'Started as Mangal Advisory Services' },
  { year: '2014', title: 'Global Expansion', desc: 'Partnership with Mundi Consulting' },
  { year: '2015', title: 'Rebranded to MARC', desc: 'Expanded service offerings' },
  { year: '2020', title: 'Pan-India Presence', desc: '8+ cities across India' },
  { year: '2024', title: 'USA Operations', desc: 'MARC Glocal Inc, Delaware' },
]

const clientsRow1 = [
  { name: 'The Park', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
  { name: 'Taj Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'Marriott', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Marriott.png' },
]

const clientsRow2 = [
  { name: 'Magsons', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6.png' },
  { name: 'Kineco', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/logo5.png' },
  { name: 'The Park', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/07/The-park-hotels.png' },
  { name: 'Isha Yoga', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/05/logo6-6-223.png' },
  { name: 'Marriott', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/04/Marriott.png' },
  { name: 'Taj Hotels', logo: 'https://www.marcglocal.com/wp-content/uploads/2022/08/Taj-1.png' },
]

const affiliations = [
  {
    name: 'Mundi Consulting',
    description: 'International consulting company providing services for strategic and operational management, human resources, and international procurement.',
    website: 'https://www.mundiconsulting.net/en/',
  },
  {
    name: 'Research 8020 Limited',
    description: 'Full range of qualitative and quantitative research solutions across sub-Saharan Africa for Government and NGOs.',
    website: 'https://research8020.com/',
  },
  {
    name: 'Clearview Consulting Partners',
    description: 'Multi-locational management consulting with expertise in M&A advisory, strategy, and business advisory services.',
    website: 'https://www.clearviewpartners.in/',
  },
  {
    name: 'Electronica Finance Limited',
    description: 'Pioneer in Machine Finance with 50+ offices across India, serving 7500+ customers with AUM exceeding Rs.1250 crores.',
    website: 'https://www.efl.co.in/',
  },
]

const locations = [
  { city: 'Panaji, Goa', type: 'Headquarters', address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourém', phone: '+91-93596 28675' },
  { city: 'Delaware, USA', type: 'USA Office', address: '16192 Coastal Highway, Lewes, Delaware 19958', phone: '+91-93596 28675' },
  { city: 'Mumbai', type: 'Branch', address: 'B/509, Satyam Apartments, Link Road, Borivali West', phone: '+91-90295 03690' },
  { city: 'Pune', type: 'Branch', address: '2nd Floor, Flat No. 5, Godawari Apartment, Karve Road', phone: '+91-91194 59098' },
  { city: 'Kolkata', type: 'Branch', address: 'Ramakrishna Palli, VIP Road, Kaikhali, 2nd Floor', phone: '+91-83368 25469' },
  { city: 'Kochi', type: 'Branch', address: '1st Floor, Chanraprabha, Near Coopmart, Perumbavoor', phone: '+91-98461 67761' },
  { city: 'Indore', type: 'Branch', address: '201, Saubhagyashree Building, 16 Janki Nagar Ave.', phone: '+91-98605 29838' },
  { city: 'Ahmedabad', type: 'Branch', address: 'B-403, Samudra Complex, C G Road, Navrangpura', phone: '+91-90295 03690' },
  { city: 'Mangaluru', type: 'Branch', address: 'Vertex one Workspace, Gateway Building, M G Road', phone: '+91-82963 47983' },
  { city: 'Agartala', type: 'Branch', address: 'Opposite Modern Club, Shibnagar, Dhaleswar', phone: '+91-72008 21023' },
]

// Animated Team Carousel Component
function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[450px]">
      <div className="relative w-full h-full">
        {teamImages.map((image, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + teamImages.length) % teamImages.length
          const isNext = index === (currentIndex + 1) % teamImages.length
          
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
        {teamImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#4E9141]' : 'bg-[#C2DDB4]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Client Logo Marquee Component
function ClientMarquee() {
  return (
    <div className="space-y-6 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee-left">
          {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, i) => (
            <div 
              key={i}
              className="flex-shrink-0 mx-4 flex items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-[#4E9141]/30 hover:shadow-lg transition-all duration-300 w-[180px] h-[100px]"
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, i) => (
            <div 
              key={i}
              className="flex-shrink-0 mx-4 flex items-center justify-center p-6 bg-white rounded-xl border border-gray-100 hover:border-[#4E9141]/30 hover:shadow-lg transition-all duration-300 w-[180px] h-[100px]"
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

// Locations Carousel Component
function LocationsCarousel() {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isPaused) return

    let animationId
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
      animationId = requestAnimationFrame(scroll)
    }
    
    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  const doubledLocations = [...locations, ...locations]

  return (
    <div 
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {doubledLocations.map((loc, i) => (
          <div 
            key={i}
            className="flex-shrink-0 w-[320px] bg-white rounded-2xl p-6 border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-[#F7FFF5] rounded-xl flex items-center justify-center group-hover:bg-[#4E9141] transition-colors">
                <MapPin className="w-6 h-6 text-[#4E9141] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-bold text-[#1D342F] text-lg">{loc.city}</h4>
                <span className="inline-block px-3 py-1 bg-[#4E9141]/10 text-[#4E9141] text-xs font-medium rounded-full mt-1">
                  {loc.type}
                </span>
              </div>
            </div>
            <p className="text-sm text-[#47635D] leading-relaxed mb-3">{loc.address}</p>
            <div className="flex items-center gap-2 text-[#4E9141]">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{loc.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AboutPageClient() {
  const [visibleTimeline, setVisibleTimeline] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleTimeline((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    document.querySelectorAll('[data-timeline-item]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-white min-h-screen" data-testid="about-page">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 bg-[#F7FFF5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  About Us
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                We Shape Decisions
                <span className="text-[#4E9141]"> For the Better</span>
              </h1>
              
              <p className="text-xl text-[#47635D] leading-relaxed mb-8">
                MARC is a global strategy consultancy helping business leaders 
                seize competitive advantage through data-driven insights and 
                expert advisory services.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all group"
                >
                  Work With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/insights"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#4E9141] text-[#4E9141] font-semibold rounded-full hover:bg-[#4E9141] hover:text-white transition-all"
                >
                  View Our Insights
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <TeamCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY 500+ COMPANIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D342F] mb-8">
              Trusted by 500+ Companies
            </h2>
            
            <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mb-16">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-[#1D342F] mb-2">{stat.value}</div>
                  <div className="text-[#47635D] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <ClientMarquee />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Our Purpose
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-4">Our Vision</h3>
              <p className="text-lg text-[#47635D] leading-relaxed">
                Creating an ecosystem of financial awareness for an improved economy, 
                empowering businesses to make informed decisions that drive sustainable growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#C2DDB4]/30 hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-4">Our Mission</h3>
              <p className="text-lg text-[#47635D] leading-relaxed">
                To partner with clients at all stages of their journey, delivering excellence 
                through actionable insights and strategic advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Our Journey
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-16">
            From Local Roots to Global Reach
          </h2>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[20px] lg:left-1/2 w-[3px] bg-gradient-to-b from-[#4E9141] via-[#C2DDB4] to-[#4E9141]" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div 
                  key={i}
                  data-timeline-item
                  data-index={i}
                  className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div 
                    className={`absolute left-[12px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-700 ${
                      visibleTimeline.includes(i) 
                        ? 'bg-[#4E9141] scale-125' 
                        : 'bg-[#C2DDB4] scale-100'
                    }`}
                  />
                  
                  <div 
                    className={`ml-12 lg:ml-0 lg:w-[45%] ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} transition-all duration-700 ${
                      visibleTimeline.includes(i)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="bg-[#F7FFF5] rounded-xl p-6 border border-[#C2DDB4]/30 hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-300 group">
                      <span className="text-[#4E9141] font-bold text-3xl group-hover:scale-110 inline-block transition-transform">{item.year}</span>
                      <h4 className="text-xl font-bold text-[#1D342F] mt-2">{item.title}</h4>
                      <p className="text-[#47635D] mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM - DIRECTORS */}
      <section className="py-20 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Leadership
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Meet Our Directors
          </h2>
          <p className="text-lg text-[#47635D] mb-12 max-w-3xl">
            A family comprising of Chartered Accountants, Strategic Planners, Engineers, Company Secretaries, LLBs, and MBAs, 
            each a stalwart in their respective fields with prior experience of working for globally acclaimed consulting firms.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {directors.map((director, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all group">
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/90 via-[#1D342F]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{director.name}</h3>
                    <p className="text-[#C2DDB4] font-medium text-sm">{director.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#47635D] text-sm leading-relaxed mb-4">{director.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {director.credentials.map((cred, j) => (
                      <span key={j} className="px-3 py-1 bg-[#F7FFF5] text-[#4E9141] text-xs font-medium rounded-full border border-[#C2DDB4]/50">
                        {cred}
                      </span>
                    ))}
                  </div>
                  {director.linkedin && (
                    <a 
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#4E9141] hover:text-[#3d7334] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* KEY TEAM */}
          <div className="mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
              Key Team Members
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {keyTeam.map((member, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all group">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#1D342F] mb-1">{member.name}</h3>
                    <p className="text-[#47635D] text-sm mb-3">{member.role}</p>
                    <a 
                      href={member.linkedin || '#'}
                      target={member.linkedin ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-sm ${
                        member.linkedin 
                          ? 'text-[#4E9141] hover:text-[#3d7334] cursor-pointer' 
                          : 'text-gray-400 cursor-not-allowed'
                      } transition-colors`}
                      onClick={!member.linkedin ? (e) => e.preventDefault() : undefined}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>{member.linkedin ? 'LinkedIn' : 'LinkedIn'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ASSOCIATES */}
          <div className="mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
              Associates and Partners
            </h2>

            <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
              {associates.map((member, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all group">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/80 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-[#1D342F] mb-1">{member.name}</h3>
                    <p className="text-[#47635D] text-xs mb-2">{member.role}</p>
                    <a 
                      href={member.linkedin || '#'}
                      target={member.linkedin ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-xs ${
                        member.linkedin 
                          ? 'text-[#4E9141] hover:text-[#3d7334] cursor-pointer' 
                          : 'text-gray-400 cursor-not-allowed'
                      } transition-colors`}
                      onClick={!member.linkedin ? (e) => e.preventDefault() : undefined}
                    >
                      <Linkedin className="w-3 h-3" />
                      <span>{member.linkedin ? 'LinkedIn' : 'Coming Soon'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOMAIN EXPERTS */}
          <div className="mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-12">
              Domain Experts
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {domainExperts.map((expert, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all group">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/90 via-[#1D342F]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{expert.name}</h3>
                      <p className="text-[#C2DDB4] font-medium text-sm">{expert.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <a 
                      href={expert.linkedin || '#'}
                      target={expert.linkedin ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${
                        expert.linkedin 
                          ? 'text-[#4E9141] hover:text-[#3d7334] cursor-pointer' 
                          : 'text-gray-400 cursor-not-allowed'
                      } transition-colors`}
                      onClick={!expert.linkedin ? (e) => e.preventDefault() : undefined}
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        {expert.linkedin ? 'Connect on LinkedIn' : 'LinkedIn'}
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Global Presence
            </span>
          </div>

          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F]">
              Our Worldwide Offices
            </h2>
            <Link 
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 text-[#4E9141] font-semibold hover:gap-3 transition-all"
            >
              View All Locations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
        <LocationsCarousel />
        
        <div className="max-w-7xl mx-auto px-6 mt-8 md:hidden">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 text-[#4E9141] font-semibold"
          >
            View All Locations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section className="py-20 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#1D342F] font-bold text-lg uppercase tracking-[0.1em]">
              Our Affiliations
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
                Global Consulting Partnerships
              </h2>
              <p className="text-lg text-[#47635D] leading-relaxed">
                MARC carries out its vision of circumventing global markets by connecting those who need with those who want. 
                Our strong affiliations enable stakeholders to receive end-to-end solutions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {affiliations.map((affiliation, i) => (
              <a
                key={i}
                href={affiliation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 border border-[#C2DDB4]/30 hover:border-[#4E9141] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#F7FFF5] rounded-xl flex items-center justify-center border border-[#C2DDB4]/30 flex-shrink-0 group-hover:bg-[#4E9141] transition-colors">
                    <Handshake className="w-8 h-8 text-[#4E9141] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors">
                        {affiliation.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-[#4E9141] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[#47635D] text-sm leading-relaxed">
                      {affiliation.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how MARC can help you make better decisions and achieve your strategic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
            >
              Schedule a Consultation
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