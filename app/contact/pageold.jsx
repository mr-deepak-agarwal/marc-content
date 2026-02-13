'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPin, Phone, Mail, Clock, Send, ArrowRight, Globe,
  Building2, Users, ChevronRight, ExternalLink
} from 'lucide-react'

const offices = [
  {
    type: 'Headquarters',
    city: 'Panaji, Goa',
    address: '2nd Floor, CMM Building, Above Sarvaa Restaurant Rua de Ourem, Panaji, Goa 403001',
    phone: '+91-93596 28675',
    email: 'contact@marcglocal.com',
    flag: '🇮🇳',
    featured: true,
  },
  {
    type: 'USA Office',
    city: 'Delaware, USA',
    address: '16192 Coastal Highway, Lewes, Delaware 19958, County of Sussex, USA',
    phone: '+91-93596 28675',
    email: 'contact@marcglocal.com',
    flag: '🇺🇸',
    featured: true,
  },
  {
    type: 'Branch',
    city: 'Mumbai',
    address: 'B/509, Satyam Apartments, Link Road, Near Don Bosco School, Borivali West, Mumbai 400091',
    phone: '+91-90295 03690',
    email: 'mumbai@marcglocal.com',
    flag: '🇮🇳',
  },
  {
    type: 'Branch',
    city: 'Pune',
    address: '2nd Floor, Flat No. 5, Godawari Apartment, Karve Road, Pune 411004',
    phone: '+91-91194 59098',
    email: 'pune@marcglocal.com',
    flag: '🇮🇳',
  },
  {
    type: 'Branch',
    city: 'Kolkata',
    address: 'Ramakrishna Palli, VIP Road, Kaikhali, 2nd Floor, Office No. 10, Kolkata 700052',
    phone: '+91-83368 25469',
    email: 'kolkata@marcglocal.com',
    flag: '🇮🇳',
  },
  {
    type: 'Branch',
    city: 'Ahmedabad',
    address: 'B-403, Samudra Complex, C G Road, Mithakhali, Navrangpura, Ahmedabad 380009',
    phone: '+91-90295 03690',
    email: 'ahmedabad@marcglocal.com',
    flag: '🇮🇳',
  },
  {
    type: 'Branch',
    city: 'Kochi',
    address: '1st Floor, Chanraprabha, Near Coopmart, Bypass Jn, AM Road, Perumbavoor 683542',
    phone: '+91-98461 67761',
    email: 'kochi@marcglocal.com',
    flag: '🇮🇳',
  },
  {
    type: 'Branch',
    city: 'Indore',
    address: '201, Saubhagyashree Building, 16 Janki Nagar Ave., Indore 452001',
    phone: '+91-98605 29838',
    email: 'indore@marcglocal.com',
    flag: '🇮🇳',
  },
]

const services = [
  'Market Research',
  'Due Diligence',
  'Valuation Advisory',
  'Strategy Consulting',
  'Financial Modelling',
  'Internationalization',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-gray-950 min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              Get In Touch
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-medium text-white leading-tight mb-6">
              Ready to Partner on a
              <span className="text-emerald-400 block">Successful Journey?</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Thank you for your interest in MARC. Our teams across India and USA are ready to help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-950 rounded-3xl p-8 lg:p-10 border border-gray-800">
                <h2 className="font-serif text-2xl text-white mb-2">Send us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Service Interested In</label>
                    <select
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white focus:border-emerald-500 focus:outline-none transition-colors"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8">
                <h3 className="font-serif text-2xl text-white mb-6">Quick Contact</h3>
                <div className="space-y-5">
                  <a href="tel:+919359628675" className="flex items-center gap-4 text-white hover:text-emerald-200 transition-colors group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Call us</p>
                      <p className="font-medium">+91 93596 28675</p>
                    </div>
                  </a>
                  <a href="mailto:contact@marcglocal.com" className="flex items-center gap-4 text-white hover:text-emerald-200 transition-colors group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Email us</p>
                      <p className="font-medium">contact@marcglocal.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Business Hours</p>
                      <p className="font-medium">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Offices */}
              {offices.filter(o => o.featured).map((office, i) => (
                <div key={i} className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{office.flag}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${office.type === 'Headquarters' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {office.type}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-white mb-2">{office.city}</h4>
                  <p className="text-gray-400 text-sm mb-4">{office.address}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <a href={`tel:${office.phone}`} className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Offices Grid */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-400 text-sm tracking-widest uppercase">Our Presence</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-white mt-4">
              Offices Across <span className="text-emerald-400">India & USA</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              At MARC, we work seamlessly together as one firm to serve our clients wherever they need us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offices.map((office, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{office.flag}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    office.type === 'Headquarters' ? 'bg-emerald-500 text-white' :
                    office.type === 'USA Office' ? 'bg-blue-500 text-white' :
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {office.type}
                  </span>
                </div>
                <h4 className="font-serif text-lg text-white mb-1 group-hover:text-emerald-400 transition-colors">{office.city}</h4>
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">{office.address}</p>
                <a href={`mailto:${office.email}`} className="text-emerald-400 text-xs hover:text-emerald-300 transition-colors">
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-950 rounded-3xl overflow-hidden border border-gray-800">
            <div className="aspect-[21/9] bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-emerald-500/30 mx-auto mb-4" />
                <p className="text-gray-500">Interactive Map</p>
                <a 
                  href="https://www.google.com/maps/place/MARC+(Mangal+Analytics+and+Research+Consulting)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mt-2 text-sm"
                >
                  Open in Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}