'use client'

import React, { useState } from 'react'
import {
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react'
import { companyInfo } from '@/data/mock'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success("Message sent successfully! We'll get back to you soon.")
    setFormData({ name: '', email: '', company: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#4E9141' }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E9141] via-[#5a9e4a] to-[#4E9141]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C2DDB4]/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div>
            <h2 
              data-testid="contact-heading"
              className="text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '400' }}
            >
              Let's Talk Growth
            </h2>

            <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-md">
              If you are evaluating a new market, rethinking your growth strategy, or preparing for scale, we'd be glad to explore how we can help.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact-form"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D342F] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all duration-300 group"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white/30 rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            {/* Phone */}
            <a
              href={`tel:${companyInfo.phone}`}
              data-testid="contact-phone"
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Phone</div>
                <div className="text-lg text-white font-medium group-hover:text-[#C2DDB4] transition-colors">
                  {companyInfo.phone}
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${companyInfo.email}`}
              data-testid="contact-email"
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</div>
                <div className="text-lg text-white font-medium group-hover:text-[#C2DDB4] transition-colors">
                  {companyInfo.email}
                </div>
              </div>
            </a>

            {/* Address */}
            <div 
              data-testid="contact-address"
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Office</div>
                <div className="text-lg text-white font-medium leading-relaxed">
                  2nd Floor, CMM Building, Above Sarvaa Restaurant,<br />
                  Rua de Ourém, Panaji, Goa 403001
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-white/60 text-sm leading-relaxed pt-4 border-t border-white/10">
              Advisors for compounding growth. We partner with ambitious businesses to build scalable, resilient strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection