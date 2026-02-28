'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  MapPin, Phone, Mail, Clock, Send, ArrowRight, Globe, ArrowUpRight,
  Building2, Users, Sparkles, MessageCircle, Calendar, CheckCircle,
  TrendingUp, Award, Target
} from 'lucide-react'

const offices = [
  { 
    type: 'Headquarters', 
    city: 'Panaji', 
    state: 'Goa',
    country: 'India', 
    address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourém, Panaji, Goa 403001', 
    phone: '+91-93596 28675', 
    email: 'contact@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://www.google.com/maps/place/MARC+(Mangal+Analytics+and+Research+Consulting)'
  },
  { 
    type: 'USA Office', 
    city: 'Delaware', 
    state: 'USA',
    country: 'USA', 
    address: '16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex, USA', 
    phone: '+91-93596 28675', 
    email: 'contact@marcglocal.com', 
    /*flag: '🇺🇸',*/
    mapLink: 'https://goo.gl/maps/g3A7FCm2JwucYNwMA'
  },
  { 
    type: 'Branch', 
    city: 'Mumbai', 
    state: 'Maharashtra',
    country: 'India', 
    address: 'B/509, Satyam Apartments, Link Road, Near Don Bosco School, Borivali West, Mumbai, Maharashtra 400091', 
    phone: '+91-90295 03690', 
    email: 'mumbai@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://goo.gl/maps/jmu1AvPqTXbxGTpd9'
  },
  { 
    type: 'Branch', 
    city: 'Pune', 
    state: 'Maharashtra',
    country: 'India', 
    address: '2nd Floor, Flat No. 5, Godawari Apartment, Karve Road, Pune, Maharashtra 411004', 
    phone: '+91-91194 59098', 
    phone2: '+91-96500 68123',
    email: 'pune@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://goo.gl/maps/k58iKNPJ99NcEzh89'
  },
  { 
    type: 'Branch', 
    city: 'Kolkata', 
    state: 'West Bengal',
    country: 'India', 
    address: 'Ramakrishna Palli, VIP Road, Kaikhali, 2nd Floor, Office No. 10, Kolkata, West Bengal 700052', 
    phone: '+91-83368 25469', 
    email: 'kolkata@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://g.page/Income-tax-service-North-Kolkata'
  },
  { 
    type: 'Branch', 
    city: 'Ahmedabad', 
    state: 'Gujarat',
    country: 'India', 
    address: 'B-403, Samudra Complex, C G Road, Mithakhali, Navrangpura, Ahmedabad 380009', 
    phone: '+91-90295 03690', 
    email: 'ahmedabad@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://goo.gl/maps/pWr7yC277upKPF9E6'
  },
  { 
    type: 'Branch', 
    city: 'Kochi', 
    state: 'Kerala',
    country: 'India', 
    address: '1st Floor, Chanraprabha, Near Coopmart, Bypass Jn, AM Road, Perumbavoor 683542', 
    phone: '+91-98461 67761', 
    email: 'kochi@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://maps.app.goo.gl/UuSeFbAY5kCFDS5n6'
  },
  { 
    type: 'Branch', 
    city: 'Indore', 
    state: 'Madhya Pradesh',
    country: 'India', 
    address: '201, Saubhagyashree Building, 16 Janki Nagar Ave., Indore, Madhya Pradesh 452001', 
    phone: '+91-98605 29838', 
    email: 'indore@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://g.page/ruchi-jindal-associates'
  },
  { 
    type: 'Branch', 
    city: 'Agartala', 
    state: 'Tripura',
    country: 'India', 
    address: 'Opposite Modern Club, Shibnagar, Dhaleswar, Agartala, Tripura 799007', 
    phone: '+91-72008 21023', 
    email: 'agartala@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'https://www.google.co.in/maps/place/Varsha+Chopra+%26+Co.'
  },
  { 
    type: 'Branch', 
    city: 'Mangaluru', 
    state: 'Karnataka',
    country: 'India', 
    address: 'Vertex One Workspace, Gateway Building, M G Road, Ballalbagh, Mangalore, Karnataka 575003', 
    phone: '+91-82963 47983', 
    email: 'mangaluru@marcglocal.com', 
    /*flag: '🇮🇳',*/
    mapLink: 'http://rb.gy/xazkk9'
  },
]

const services = ['Market Research', 'Due Diligence', 'Valuation Advisory', 'Strategy Consulting', 'Financial Modelling', 'Internationalization', 'Other']

const reasons = [
  { icon: CheckCircle, text: '24-hour response time' },
  { icon: CheckCircle, text: 'Free initial consultation' },
  { icon: CheckCircle, text: '100+ expert consultants' },
  { icon: CheckCircle, text: '14+ years experience' },
]

const quickInfo = [
  { icon: Clock, title: 'Business Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM IST' },
  { icon: MessageCircle, title: 'Response Time', value: 'Within 24 hours' },
  { icon: Globe, title: 'Global Presence', value: '10+ offices worldwide' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [isVisible, setIsVisible] = useState({})
  const [selectedOffice, setSelectedOffice] = useState(0) // Default to headquarters
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-white" data-testid="contact-page">

      {/* Hero Section - Matching About/Industries Style */}
      <section className="relative pt-32 pb-20 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Contact Us
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-6">
                Let's Start a
                <span className="text-[#4E9141]"> Conversation</span>
              </h1>
              
              <p className="text-xl text-[#47635D] leading-relaxed mb-8 max-w-xl">
                Whether you're exploring new markets, evaluating investments, or seeking 
                strategic clarity — our team is ready to help you make confident decisions.
              </p>

              {/* Quick contact buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919359628675" 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all group"
                  data-testid="call-btn"
                >
                  <div className="w-12 h-12 bg-[#4E9141] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#47635D] text-xs uppercase tracking-wider">Call us</p>
                    <p className="text-[#1D342F] font-semibold">+91 93596 28675</p>
                  </div>
                </a>
                <a 
                  href="mailto:contact@marcglocal.com" 
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-xl transition-all group"
                  data-testid="email-btn"
                >
                  <div className="w-12 h-12 bg-[#4E9141] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#47635D] text-xs uppercase tracking-wider">Email us</p>
                    <p className="text-[#1D342F] font-semibold">contact@marcglocal.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Info Cards Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { icon: Globe, num: '10+', label: 'Offices', sublabel: 'India & USA' },
                { icon: Users, num: '100+', label: 'Experts', sublabel: 'Ready to help' },
                { icon: Clock, num: '24hr', label: 'Response', sublabel: 'Guaranteed' },
                { icon: Award, num: '14+', label: 'Years', sublabel: 'Experience' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-2xl bg-white border border-[#C2DDB4]/30 p-6 flex flex-col items-center justify-center hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#4E9141]/10 rounded-xl flex items-center justify-center mb-3">
                    <item.icon className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <span className="text-3xl font-bold text-[#4E9141]">{item.num}</span>
                  <span className="text-sm font-medium text-[#1D342F]">{item.label}</span>
                  <span className="text-xs text-[#47635D]">{item.sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        ref={el => observerRefs.current[0] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-[3px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
                Send us a Message
              </h2>
              <p className="text-lg text-[#47635D] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1D342F] text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/30 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 focus:border-[#4E9141] focus:ring-4 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1D342F] text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/30 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 focus:border-[#4E9141] focus:ring-4 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1D342F] text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-5 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/30 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 focus:border-[#4E9141] focus:ring-4 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1D342F] text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/30 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 focus:border-[#4E9141] focus:ring-4 focus:ring-[#4E9141]/10 focus:outline-none transition-all"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1D342F] text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    className="w-full px-5 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/30 rounded-xl text-[#1D342F] focus:border-[#4E9141] focus:ring-4 focus:ring-[#4E9141]/10 focus:outline-none transition-all cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    data-testid="input-service"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#1D342F] text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-[#F7FFF5] border border-[#C2DDB4]/30 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 focus:border-[#4E9141] focus:ring-4 focus:ring-[#4E9141]/10 focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    data-testid="input-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-[#4E9141] text-white text-lg font-semibold rounded-full hover:bg-[#3d7334] transition-all shadow-lg shadow-[#4E9141]/20 hover:shadow-xl flex items-center justify-center gap-3 group"
                  data-testid="submit-btn"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Contact Us Card */}
              <div className="bg-[#4E9141] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <reason.icon className="w-5 h-5 text-[#C2DDB4] flex-shrink-0" />
                      <span className="text-white/90">{reason.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule a Call Card */}
              <div className="bg-[#F7FFF5] rounded-2xl p-8 border border-[#C2DDB4]/30">
                <div className="w-14 h-14 bg-[#4E9141] rounded-2xl flex items-center justify-center mb-5">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1D342F] mb-2">Schedule a Call</h3>
                <p className="text-[#47635D] mb-6">Book a 30-minute free consultation with our experts.</p>
                <button className="w-full px-6 py-4 bg-white border border-[#C2DDB4]/50 text-[#1D342F] rounded-xl font-semibold hover:border-[#4E9141] hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Book Appointment
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl p-8 border border-[#C2DDB4]/30">
                <h4 className="text-xl font-bold text-[#1D342F] mb-6">Quick Information</h4>
                <div className="space-y-5">
                  {quickInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-[#4E9141]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-[#4E9141]" />
                      </div>
                      <div>
                        <p className="text-[#47635D] text-sm">{info.title}</p>
                        <p className="text-[#1D342F] font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section - Two-Column Feature Cards */}
      <section 
        ref={el => observerRefs.current[1] = el}
        className="py-16 bg-[#F7FFF5]"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Our Locations
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-4">
            Find Us Across <span className="text-[#4E9141]">India & USA</span>
          </h2>
          <p className="text-lg text-[#47635D] mb-12 max-w-3xl">
            At MARC, we work seamlessly together as one firm to serve our clients wherever they need us.
          </p>

          {/* Featured Offices - Headquarters & USA */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {offices.filter(o => o.type === 'Headquarters' || o.type === 'USA Office').map((office, i) => (
              <div 
                key={i}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#C2DDB4]/30 hover:border-[#4E9141] hover:shadow-2xl transition-all duration-500"
                data-testid={`featured-office-${i}`}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  office.type === 'Headquarters' 
                    ? 'bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]' 
                    : 'bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500'
                }`} />
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{office.flag}</span>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                          office.type === 'Headquarters' 
                            ? 'bg-[#4E9141] text-white' 
                            : 'bg-blue-500 text-white'
                        }`}>
                          {office.type}
                        </span>
                        <h3 className="text-2xl font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors">
                          {office.city}
                        </h3>
                        <p className="text-[#4E9141] font-medium">{office.state}</p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-6 p-4 bg-[#F7FFF5] rounded-xl">
                    <MapPin className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                    <p className="text-[#47635D]">{office.address}</p>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FFF5] hover:bg-[#4E9141]/10 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#4E9141]" />
                      <div>
                        <p className="text-xs text-[#47635D]">Phone</p>
                        <p className="text-sm font-medium text-[#1D342F]">{office.phone}</p>
                      </div>
                    </a>
                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FFF5] hover:bg-[#4E9141]/10 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#4E9141]" />
                      <div>
                        <p className="text-xs text-[#47635D]">Email</p>
                        <p className="text-sm font-medium text-[#1D342F]">{office.email}</p>
                      </div>
                    </a>
                  </div>

                  {/* Map Button */}
                  <a 
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-xl transition-all ${
                      office.type === 'Headquarters'
                        ? 'bg-[#4E9141] text-white hover:bg-[#3d7334]'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                    View on Google Maps
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Branch Offices Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#47635D] font-semibold">Branch Offices</span>
            <span className="flex-1 h-[1px] bg-[#C2DDB4]/50" />
            <span className="text-sm text-[#47635D]">{offices.filter(o => o.type === 'Branch').length} locations</span>
          </div>

          {/* Branch Offices Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.filter(o => o.type === 'Branch').map((office, i) => (
              <div 
                key={i}
                className="group bg-white rounded-xl p-5 border border-[#C2DDB4]/30 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                data-testid={`branch-office-${i}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <h4 className="font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors">
                      {office.city}
                    </h4>
                    <p className="text-xs text-[#4E9141]">{office.state}</p>
                  </div>
                </div>
                
                <p className="text-xs text-[#47635D] mb-3 line-clamp-2">{office.address}</p>
                
                <div className="space-y-1.5 mb-3">
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-[#47635D] hover:text-[#4E9141] transition-colors">
                    <Phone className="w-3 h-3" />
                    {office.phone}
                  </a>
                  {office.phone2 && (
                    <a href={`tel:${office.phone2.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-[#47635D] hover:text-[#4E9141] transition-colors">
                      <Phone className="w-3 h-3" />
                      {office.phone2}
                    </a>
                  )}
                </div>
                
                <a 
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between pt-3 border-t border-[#C2DDB4]/30"
                >
                  <span className="text-xs font-semibold text-[#4E9141]">View Map</span>
                  <ArrowUpRight className="w-4 h-4 text-[#4E9141] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section 
        ref={el => observerRefs.current[2] = el}
        className="py-16 bg-white"
      >
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-2xl overflow-hidden border border-[#C2DDB4]/30">
            <div className="grid lg:grid-cols-3">
              {/* Map placeholder */}
              <div className="lg:col-span-2 aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-[#F7FFF5] to-[#C2DDB4]/20 flex items-center justify-center relative overflow-hidden min-h-[400px]">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #4E9141 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                
                {/* Animated location pins */}
                <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDuration: '2s' }}>
                  <div className="w-8 h-8 bg-[#4E9141] rounded-full flex items-center justify-center shadow-lg shadow-[#4E9141]/30">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  <div className="w-8 h-8 bg-[#4E9141] rounded-full flex items-center justify-center shadow-lg shadow-[#4E9141]/30">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-10 h-10 text-[#4E9141]" />
                  </div>
                  <p className="text-[#47635D] mb-3">View our headquarters on map</p>
                  <a 
                    href="https://www.google.com/maps/place/MARC+(Mangal+Analytics+and+Research+Consulting)" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-colors shadow-lg shadow-[#4E9141]/20"
                    data-testid="maps-link"
                  >
                    Open in Google Maps
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contact summary */}
              <div className="p-8 lg:p-10 bg-[#4E9141] text-white">
                <h3 className="text-2xl font-bold mb-6">Headquarters</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[#C2DDB4] text-sm mb-1">Address</p>
                    <p className="text-white">2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourem, Panaji, Goa 403001</p>
                  </div>
                  <div>
                    <p className="text-[#C2DDB4] text-sm mb-1">Phone</p>
                    <a href="tel:+919359628675" className="text-white hover:text-[#C2DDB4] transition-colors">+91 93596 28675</a>
                  </div>
                  <div>
                    <p className="text-[#C2DDB4] text-sm mb-1">Email</p>
                    <a href="mailto:contact@marcglocal.com" className="text-white hover:text-[#C2DDB4] transition-colors">contact@marcglocal.com</a>
                  </div>
                  <div>
                    <p className="text-[#C2DDB4] text-sm mb-1">Business Hours</p>
                    <p className="text-white">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4E9141]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let us help you navigate your business challenges with data-driven insights and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919359628675" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all group"
              data-testid="cta-call"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a 
              href="mailto:contact@marcglocal.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              data-testid="cta-email"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
