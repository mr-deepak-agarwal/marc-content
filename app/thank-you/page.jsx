'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Footer from '@/components/Footer'
import {
  CheckCircle2, ArrowRight, Phone, Mail, Calendar,
  Globe, Clock, MessageCircle,
} from 'lucide-react'

const nextSteps = [
  {
    icon: Clock,
    title: 'We'll review your message',
    desc: 'Our team reads every submission and routes it to the right expert.',
  },
  {
    icon: MessageCircle,
    title: 'Expect a reply within 24 hours',
    desc: 'A consultant will reach out via email or phone — whichever suits you.',
  },
  {
    icon: Calendar,
    title: 'Free initial consultation',
    desc: 'Your first call is on us. Come with questions; we'll come with answers.',
  },
]

const quickLinks = [
  { label: 'Our Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About MARC', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

function ThankYouContent() {
  const params = useSearchParams()
  const source = params.get('source') || 'our team'

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Hero */}
      <section className="relative flex-1 flex items-center justify-center py-32 bg-[#F7FFF5] overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[3px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-bold text-lg uppercase tracking-[0.1em]">
              Message Received
            </span>
            <span className="w-12 h-[3px] bg-[#4E9141]" />
          </div>

          {/* Checkmark icon */}
          <div className="relative inline-flex mb-8">
            <div className="w-28 h-28 bg-[#4E9141]/10 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 bg-[#4E9141]/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-[#4E9141]" />
              </div>
            </div>
            {/* Ping animation ring */}
            <span className="absolute inset-0 rounded-full bg-[#4E9141]/20 animate-ping" style={{ animationDuration: '2s' }} />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#1D342F] leading-[1.1] mb-5">
            Thank You for{' '}
            <span className="text-[#4E9141]">Reaching Out!</span>
          </h1>

          <p className="text-xl text-[#47635D] leading-relaxed mb-10 max-w-xl mx-auto">
            We've received your message and will get back to you within{' '}
            <span className="font-semibold text-[#1D342F]">24 hours</span>.
            {source !== 'our team' && (
              <> Your inquiry from <span className="font-semibold text-[#1D342F]">{source}</span> is in good hands.</>
            )}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all shadow-lg shadow-[#4E9141]/20 group"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://calendly.com/deepakagarwalsrc/marc-road-to-success"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#4E9141] text-[#4E9141] font-semibold rounded-full hover:bg-[#4E9141] hover:text-white transition-all group"
            >
              <Calendar className="w-4 h-4" />
              Book a Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1D342F] text-center mb-10">
            What Happens Next?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-[#F7FFF5] rounded-2xl p-7 border border-[#C2DDB4]/30 hover:border-[#4E9141]/40 hover:shadow-lg transition-all duration-300"
              >
                {/* Step number */}
                <span className="absolute top-5 right-5 w-7 h-7 bg-[#4E9141]/10 rounded-full flex items-center justify-center text-xs font-bold text-[#4E9141]">
                  {i + 1}
                </span>
                <div className="w-12 h-12 bg-[#4E9141]/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#4E9141]" />
                </div>
                <h3 className="font-bold text-[#1D342F] mb-2">{step.title}</h3>
                <p className="text-[#47635D] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-10 bg-[#4E9141]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white font-semibold text-lg">Can't wait? Reach us directly.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919359628675"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4E9141] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all"
              >
                <Phone className="w-4 h-4" />
                +91 93596 28675
              </a>
              <a
                href="mailto:contact@marcglocal.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
                contact@marcglocal.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#47635D] mb-6">While you wait, explore what we do:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 bg-[#F7FFF5] border border-[#C2DDB4]/50 text-[#1D342F] font-medium rounded-full hover:border-[#4E9141] hover:text-[#4E9141] transition-all text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F7FFF5]" />}>
      <ThankYouContent />
    </Suspense>
  )
}