'use client'

import React, { useState } from 'react'
import { Send, MapPin, Phone, Mail, ArrowRight, X, User, AtSign, Smartphone, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react'
import { companyInfo } from '@/data/mock'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// ── Popup Form Modal ─────────────────────────────────────────────────────────
const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const { error: sbError } = await supabase
        .from('contact_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          created_at: new Date().toISOString(),
          status: 'new',
        }])

      if (sbError) throw sbError

      setSubmitted(true)
      setFormData({ name: '', email: '', mobile: '', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSubmitted(false), 400)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1D342F]/80 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7FFF5] flex items-center justify-center text-[#47635D] hover:bg-[#C2DDB4] hover:text-[#1D342F] transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {submitted ? (
            // ── Success State ───────────────────────────────────────────────
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-[#F7FFF5] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#4E9141]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1D342F] mb-3">Message Received!</h3>
              <p className="text-[#47635D] mb-8 leading-relaxed">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            // ── Form ────────────────────────────────────────────────────────
            <>
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-[#1D342F] mb-1">Start a Conversation</h3>
                <p className="text-[#47635D] text-sm">Fill in your details and we'll reach out within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4E9141]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 text-sm focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4E9141]">
                    <AtSign className="w-4 h-4" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 text-sm focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all"
                  />
                </div>

                {/* Mobile */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4E9141]">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number *"
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 text-sm focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute left-4 top-4 text-[#4E9141]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you? *"
                    required
                    rows={4}
                    className="w-full pl-11 pr-4 py-3.5 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl text-[#1D342F] placeholder-[#47635D]/50 text-sm focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main Contact Section ─────────────────────────────────────────────────────
const ContactSection = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <>
      <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />

      <section
        id="contact"
        data-testid="contact-section"
        className="mt-0 pb-14 lg:pb-20 pt-6 relative overflow-hidden"
        style={{ backgroundColor: '#4E9141' }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C2DDB4]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left Content */}
            <div>
              <h2
                data-testid="contact-heading"
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
              >
                Let's Talk Growth
              </h2>

              <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-md">
                If you are evaluating a new market, rethinking your growth strategy, or preparing for scale, we'd be glad to explore how we can help.
              </p>

              <div className="flex flex-wrap gap-4">
                {/* ← Triggers popup */}
                <button
                  onClick={() => setPopupOpen(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D342F] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all duration-300 group"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
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

              <a href={`tel:${companyInfo.phone}`} data-testid="contact-phone" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-lg text-white font-medium group-hover:text-[#C2DDB4] transition-colors">{companyInfo.phone}</div>
                </div>
              </a>

              <a href={`mailto:${companyInfo.email}`} data-testid="contact-email" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</div>
                  <div className="text-lg text-white font-medium group-hover:text-[#C2DDB4] transition-colors">{companyInfo.email}</div>
                </div>
              </a>

              <div data-testid="contact-address" className="flex items-start gap-4">
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

              <p className="text-white/60 text-sm leading-relaxed pt-4 border-t border-white/10">
                Advisors for compounding growth. We partner with ambitious businesses to build scalable, resilient strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection