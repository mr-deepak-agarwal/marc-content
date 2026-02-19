'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    eyebrow: '01 — Insights that sharpen growth bets.',
    heading: 'Market, customer\n& category intelligence',
    description: 'to reduce risk and guide compounding growth.',
    // Clean modern office with data on screens — consulting feel
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/market-research' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 2,
    eyebrow: '02 — Numbers that guide growth.',
    heading: 'Financial models &\nprofitability analyses',
    description: 'Focused financial diagnostics that translate data into clear growth priorities.',
    // Boardroom / strategy meeting environment — no charts
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/financial-analytics' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 3,
    eyebrow: '03 — M&A, designed for growth.',
    heading: 'Strategic target\nidentification & diligence',
    description: 'Integration support focused on value creation, not just deal completion.',
    // Two glass corporate towers — M&A, partnerships
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/ma' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 600)
  }

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length)
  const goNext = () => goTo((current + 1) % slides.length)

  useEffect(() => {
    const id = setInterval(goNext, 6000)
    return () => clearInterval(id)
  }, [current])

  const slide = slides[current]

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* ── Background images — crossfade ─────────────────── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Gradient: strong bottom-left, lighter top-right so image shows */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D342F]/85 via-[#1D342F]/50 to-[#1D342F]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 via-transparent to-[#1D342F]/30" />
        </div>
      ))}

      {/* ── Arrows ────────────────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* ── All content ───────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between px-8 lg:px-20 max-w-7xl mx-auto left-0 right-0 py-0">

        {/* TOP — main blurb, always visible */}
        <div className="pt-32">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-8 h-[2px] bg-[#4E9141]" />
            <p className="text-[#4E9141] text-xs font-bold uppercase tracking-[0.2em]">
              No. 1 Advisor for Compounding Growth
            </p>
          </div>
          <p className="text-white/70 text-sm pl-11 max-w-lg leading-relaxed">
            Strategy and execution for Indian and global businesses that want to reimagine growth —year on year.
          </p>
        </div>

        {/* BOTTOM — slide content */}
        <div key={current} className="animate-slide-up pb-24 max-w-2xl">

          {/* Eyebrow */}
          <p className="text-[#C2DDB4] font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            {slide.eyebrow}
          </p>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 whitespace-pre-line">
            {slide.heading}
          </h1>

          {/* Description */}
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
            {slide.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.ctaPrimary.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-md hover:bg-[#3e7433] transition-all duration-300 shadow-lg shadow-[#4E9141]/30 group"
            >
              {slide.ctaPrimary.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white/40 rounded-md hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Dots + scroll indicator ───────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-10 h-2.5 bg-[#4E9141]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection