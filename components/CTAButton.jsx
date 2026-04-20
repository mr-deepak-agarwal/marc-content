'use client'

// ─────────────────────────────────────────────────────────────────────────────
// components/CTAButton.jsx
//
// USAGE  drop anywhere in any page with ONE line:
//
//   import CTAButton from '@/components/CTAButton'
//   <CTAButton source="Due Diligence Page" />
//
// PROPS:
//   source       page name saved to Supabase (e.g. "Homepage", "Blog: AI Article")
//   label        button text (default: "Get a Free Consultation")
//   variant      "primary" | "secondary" | "ghost"  (default: "primary")
//   className    extra tailwind classes on the button
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  ArrowRight, X, Send, User, AtSign, Smartphone,
  MessageSquare, CheckCircle2, Loader2,
} from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// ── Popup Modal ───────────────────────────────────────────────────────────────
function CTAPopup({ isOpen, onClose, source }) {
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
          source_page: source,           // ← tracks which page the form was submitted from
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
      <div
        className="absolute inset-0 bg-[#1D342F]/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]" />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7FFF5] flex items-center justify-center text-[#47635D] hover:bg-[#C2DDB4] hover:text-[#1D342F] transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {submitted ? (
            // ── Success ─────────────────────────────────────────────────────
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
                <p className="text-[#47635D] text-sm">
                  Fill in your details and we&apos;ll reach out within 24 hours.
                </p>
                {/* Hidden source indicator  visible only in dev if you want */}
                {process.env.NODE_ENV === 'development' && (
                  <p className="mt-1 text-[10px] text-[#47635D]/40 font-mono">source: {source}</p>
                )}
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

// ── CTA Button (the only thing you import in pages) ───────────────────────────
export default function CTAButton({
  source = 'Unknown Page',
  label = 'Get a Free Consultation',
  variant = 'primary',
  className = '',
}) {
  const [open, setOpen] = useState(false)

  const base = 'inline-flex items-center gap-2 font-semibold rounded-full px-7 py-3.5 transition-all duration-300 group'

  const variants = {
    primary:   'bg-[#4E9141] text-white hover:bg-[#3d7334]',
    secondary: 'bg-white text-[#1D342F] hover:bg-[#C2DDB4]',
    ghost:     'border-2 border-[#4E9141] text-[#4E9141] hover:bg-[#4E9141] hover:text-white',
  }

  return (
    <>
      <CTAPopup isOpen={open} onClose={() => setOpen(false)} source={source} />

      <button
        onClick={() => setOpen(true)}
        className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      >
        {label}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </>
  )
}
