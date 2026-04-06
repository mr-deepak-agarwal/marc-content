'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  Linkedin,
  FileText,
  ChevronDown,
  Loader2
} from 'lucide-react'

const ALL_ROLES = [
  { value: 'manager-market-research', label: 'Manager – Market Research & Financial Analysis' },
  { value: 'asst-manager-market-research', label: 'Assistant Manager – Market Research & Financial Analysis' },
  { value: 'senior-analyst-market-research', label: 'Senior Analyst – Market Research & Financial Analysis' },
  { value: 'intern-market-research', label: 'Intern – Market Research & Financial Analysis' },
  { value: 'manager-bd', label: 'Manager – Business Development' },
  { value: 'asst-manager-bd', label: 'Assistant Manager – Business Development' },
  { value: 'executive-bd', label: 'Executive – Business Development' },
  { value: 'intern-bd', label: 'Intern – Business Development' },
  { value: 'associate-hr-admin', label: 'Associate – Human Resources & Administration' },
  { value: 'intern-hr-admin', label: 'Intern – Human Resources & Administration' },
]

function ApplyForm() {
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role') || ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    role: roleParam,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.role) e.role = 'Please select a role'
    if (!form.coverLetter.trim()) e.coverLetter = 'Cover letter is required'
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setErrors({})
    setLoading(true)

    try {
      const submission = {
        id: Date.now().toString(),
        ...form,
        submittedAt: new Date().toISOString(),
        status: 'New',
      }

      // Save to localStorage for dashboard
      const existing = JSON.parse(localStorage.getItem('marc_applications') || '[]')
      existing.unshift(submission)
      localStorage.setItem('marc_applications', JSON.stringify(existing))

      // Simulate a brief delay for UX
      await new Promise(r => setTimeout(r, 800))
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const field = (key, label, icon, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#1D342F]">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4E9141]/60">{icon}</div>
        <input
          type={type}
          value={form[key]}
          onChange={e => setForm(p => ({ ...p, [key]: e.target.value }))}
          placeholder={placeholder}
          className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${errors[key] ? 'border-red-400 bg-red-50' : 'border-[#C2DDB4]/50 bg-white'} text-[#1D342F] placeholder-[#47635D]/40 focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all text-sm`}
        />
      </div>
      {errors[key] && <p className="text-xs text-red-500">{errors[key]}</p>}
    </div>
  )

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F7FFF5] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#4E9141]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#4E9141]" />
          </div>
          <h1 className="text-3xl font-bold text-[#1D342F] mb-3">Application Submitted!</h1>
          <p className="text-[#47635D] mb-8">
            Thank you for applying to MARC. Our team will review your application and get back to you within 3–5 business days.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F7FFF5]">
      {/* Header */}
      <div className="bg-white border-b border-[#C2DDB4]/30 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <Link href="/careers" className="flex items-center gap-2 text-[#47635D] hover:text-[#4E9141] transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Careers
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-sm uppercase tracking-[0.1em]">Apply Now</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1D342F] mb-2">
            Join the MARC Team
          </h1>
          <p className="text-[#47635D]">Fill in your details below and we'll be in touch soon.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-[#C2DDB4]/30 p-8 shadow-sm space-y-6">

          {/* Role selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1D342F]">Role Applying For <span className="text-red-400">*</span></label>
            <div className="relative">
              <select
                value={form.role}
                onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
                className={`w-full appearance-none pl-4 pr-10 py-3.5 rounded-xl border ${errors.role ? 'border-red-400 bg-red-50' : 'border-[#C2DDB4]/50 bg-white'} text-[#1D342F] focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all text-sm`}
              >
                <option value="">Select a role...</option>
                {ALL_ROLES.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#47635D] pointer-events-none" />
            </div>
            {errors.role && <p className="text-xs text-red-500">{errors.role}</p>}
          </div>

          {/* Fields */}
          {field('name', 'Full Name *', <User className="w-4 h-4" />, 'text', 'Your full name')}
          {field('email', 'Email Address *', <Mail className="w-4 h-4" />, 'email', 'you@example.com')}
          {field('phone', 'Phone Number *', <Phone className="w-4 h-4" />, 'tel', '+91 XXXXX XXXXX')}
          {field('linkedin', 'LinkedIn Profile URL', <Linkedin className="w-4 h-4" />, 'url', 'https://linkedin.com/in/yourprofile')}

          {/* Cover Letter */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-[#1D342F]">Cover Letter <span className="text-red-400">*</span></label>
            <div className="relative">
              <FileText className="absolute left-4 top-4 w-4 h-4 text-[#4E9141]/60" />
              <textarea
                value={form.coverLetter}
                onChange={e => setForm(p => ({ ...p, coverLetter: e.target.value }))}
                rows={6}
                placeholder="Tell us why you'd be a great fit for MARC and this role..."
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border ${errors.coverLetter ? 'border-red-400 bg-red-50' : 'border-[#C2DDB4]/50 bg-white'} text-[#1D342F] placeholder-[#47635D]/40 focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all text-sm resize-none`}
              />
            </div>
            {errors.coverLetter && <p className="text-xs text-red-500">{errors.coverLetter}</p>}
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#4E9141] hover:bg-[#3d7334] disabled:opacity-60 text-white font-semibold rounded-full transition-all duration-300"
          >
            {loading ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
            ) : (
              <><Send className="w-5 h-5" /> Submit Application</>
            )}
          </button>

          <p className="text-xs text-center text-[#47635D]/60">
            By submitting, you agree to MARC using your details for recruitment purposes.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7FFF5] flex items-center justify-center"><Loader2 className="w-8 h-8 text-[#4E9141] animate-spin" /></div>}>
      <ApplyForm />
    </Suspense>
  )
}