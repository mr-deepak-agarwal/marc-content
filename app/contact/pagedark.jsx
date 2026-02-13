'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPin, Phone, Mail, Clock, Send, ArrowRight, Globe, ArrowUpRight,
  Building2, Users, Sparkles, MessageCircle, Calendar
} from 'lucide-react'

const offices = [
  { type: 'Headquarters', city: 'Panaji', country: 'India', address: '2nd Floor, CMM Building, Above Sarvaa Restaurant, Rua de Ourem, Goa 403001', phone: '+91-93596 28675', email: 'contact@marcglocal.com', flag: '🇮🇳', gradient: 'from-emerald-500 via-emerald-600 to-teal-600' },
  { type: 'USA Office', city: 'Delaware', country: 'USA', address: '16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex', phone: '+91-93596 28675', email: 'contact@marcglocal.com', flag: '🇺🇸', gradient: 'from-blue-500 via-blue-600 to-indigo-600' },
  { type: 'Branch', city: 'Mumbai', country: 'India', address: 'B/509, Satyam Apartments, Link Road, Borivali West, Mumbai 400091', phone: '+91-90295 03690', email: 'mumbai@marcglocal.com', flag: '🇮🇳', gradient: 'from-purple-500 via-purple-600 to-pink-600' },
  { type: 'Branch', city: 'Pune', country: 'India', address: '2nd Floor, Flat No. 5, Godawari Apartment, Karve Road, Pune 411004', phone: '+91-91194 59098', email: 'pune@marcglocal.com', flag: '🇮🇳', gradient: 'from-orange-500 via-orange-600 to-red-600' },
  { type: 'Branch', city: 'Kolkata', country: 'India', address: 'Ramakrishna Palli, VIP Road, Kaikhali, 2nd Floor, Kolkata 700052', phone: '+91-83368 25469', email: 'kolkata@marcglocal.com', flag: '🇮🇳', gradient: 'from-cyan-500 via-cyan-600 to-blue-600' },
  { type: 'Branch', city: 'Ahmedabad', country: 'India', address: 'B-403, Samudra Complex, C G Road, Navrangpura, Ahmedabad 380009', phone: '+91-90295 03690', email: 'ahmedabad@marcglocal.com', flag: '🇮🇳', gradient: 'from-rose-500 via-rose-600 to-pink-600' },
]

const services = ['Market Research', 'Due Diligence', 'Valuation Advisory', 'Strategy Consulting', 'Financial Modelling', 'Internationalization', 'Other']

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [activeOffice, setActiveOffice] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen overflow-hidden">
      <Header />

      {/* Hero Section - Immersive */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[120px] transition-all duration-1000 ease-out"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)',
              left: mousePosition.x * 0.02 + '%',
              top: mousePosition.y * 0.02 + '%',
            }}
          />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Typography */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-sm font-medium tracking-wide">Available for new projects</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-medium text-white leading-[0.95] tracking-tight">
                Let's Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient-x">
                  Something
                </span>
                <span className="block">Great</span>
              </h1>

              <p className="text-gray-400 text-xl leading-relaxed max-w-lg">
                Ready to transform your business with data-driven insights? Our teams across 
                <span className="text-white font-medium"> India & USA </span> 
                are here to help.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="tel:+919359628675" className="group flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-2xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Call us</p>
                    <p className="text-white font-medium">+91 93596 28675</p>
                  </div>
                </a>
                <a href="mailto:contact@marcglocal.com" className="group flex items-center gap-3 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 rounded-2xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Email us</p>
                    <p className="text-white font-medium">contact@marcglocal.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Interactive Globe/Map Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-[3rem] blur-3xl" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 lg:p-10">
                {/* Decorative corner elements */}
                <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-emerald-500/30 rounded-tl-2xl" />
                <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-emerald-500/30 rounded-br-2xl" />
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg shadow-emerald-500/30">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2">Global Presence</h3>
                  <p className="text-gray-400">10+ offices across 3 continents</p>
                </div>

                {/* Mini office cards */}
                <div className="grid grid-cols-2 gap-3">
                  {offices.slice(0, 4).map((office, i) => (
                    <div 
                      key={i}
                      onClick={() => setActiveOffice(i)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeOffice === i ? 'bg-emerald-500/20 border-emerald-500/50' : 'bg-white/5 border-white/10 hover:bg-white/10'} border`}
                    >
                      <span className="text-2xl mb-2 block">{office.flag}</span>
                      <p className="text-white font-medium text-sm">{office.city}</p>
                      <p className="text-gray-500 text-xs">{office.type}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${offices[activeOffice].gradient} rounded-lg flex items-center justify-center`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{offices[activeOffice].city}, {offices[activeOffice].country}</p>
                      <p className="text-gray-500 text-xs truncate">{offices[activeOffice].address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Contact Form Section - Premium Design */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Get in Touch</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-white mt-4 leading-tight">
                  Have a Project in Mind?
                  <span className="text-gray-500 block">Let's Talk.</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-3 group-focus-within:text-emerald-400 transition-colors">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 text-white text-lg placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-3 group-focus-within:text-emerald-400 transition-colors">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 text-white text-lg placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-3">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 text-white text-lg placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="group">
                    <label className="block text-gray-400 text-sm mb-3">Company</label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 text-white text-lg placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-gray-400 text-sm mb-3">Service Interested In</label>
                  <select
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 text-white text-lg focus:border-emerald-500 focus:outline-none transition-colors cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-900">{service}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-gray-400 text-sm mb-3">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-800 text-white text-lg placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </form>
            </div>

            {/* Right Side - Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Schedule Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <Calendar className="w-10 h-10 text-white/80 mb-4" />
                    <h3 className="font-serif text-2xl text-white mb-2">Schedule a Call</h3>
                    <p className="text-emerald-100/80 mb-6">Book a 30-minute consultation with our experts.</p>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                      Book Now <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h4 className="text-white font-medium mb-6">Quick Information</h4>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Business Hours</p>
                      <p className="text-white">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Response Time</p>
                      <p className="text-white">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Team Size</p>
                      <p className="text-white">100+ Professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section - Stunning Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Our Locations</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-white mt-4">
              Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Worldwide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <div 
                key={i}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${office.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                
                {/* Content */}
                <div className="relative bg-white/[0.03] group-hover:bg-transparent backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-3xl p-8 transition-all duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl">{office.flag}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-500 ${
                      office.type === 'Headquarters' 
                        ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-white/20 group-hover:text-white' 
                        : office.type === 'USA Office'
                        ? 'bg-blue-500/20 text-blue-400 group-hover:bg-white/20 group-hover:text-white'
                        : 'bg-gray-500/20 text-gray-400 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      {office.type}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl text-white mb-2">{office.city}</h3>
                  <p className="text-gray-400 group-hover:text-white/80 text-sm mb-6 transition-colors line-clamp-2">{office.address}</p>
                  
                  <div className="flex items-center justify-between">
                    <a href={`mailto:${office.email}`} className="text-emerald-400 group-hover:text-white text-sm transition-colors">
                      {office.email}
                    </a>
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
