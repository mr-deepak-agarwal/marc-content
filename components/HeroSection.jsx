'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    // This is the BIG headline
    heading: 'Insights that sharpen growth bets.',
    // This is the smaller supporting line
    description: 'Market, customer, and category intelligence to reduce risk and guide compounding growth.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/market-research' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 2,
    heading: 'Numbers that guide growth.',
    description: 'Financial models, profitability analyses and focused financial diagnostics that translate data into clear growth priorities.',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/financial-analytics' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 3,
    heading: 'M&A, designed for growth.',
    description: 'Strategic target identification, commercial diligence, and integration support — focused on value creation, not just deal completion.',
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
      {/* ── Background images ─────────────────────────────── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D342F]/85 via-[#1D342F]/50 to-[#1D342F]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 via-transparent to-[#1D342F]/30" />
        </div>
      ))}

      {/* ── Arrows ────────────────────────────────────────── */}
      <button onClick={goPrev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center transition-all duration-200">
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button onClick={goNext} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/15 hover:bg-white/35 backdrop-blur-sm flex items-center justify-center transition-all duration-200">
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* ── Content ───────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between px-8 lg:px-20 max-w-7xl mx-auto left-0 right-0">

        {/* TOP — main tagline, always visible */}
        <div className="pt-32">
          <div className="flex items-center gap-3 mb-1">
            <span className="w-8 h-[2px] bg-[#4E9141]" />
            <p className="text-[#4E9141] text-xs font-bold uppercase tracking-[0.2em]">
              No. 1 Advisor for Compounding Growth
            </p>
          </div>
          <p className="text-white/65 text-sm pl-11 max-w-lg leading-relaxed">
            Strategy and execution for Indian and global businesses that want to reimagine growth —year on year.
          </p>
        </div>

        {/* BOTTOM — slide content */}
        <div key={current} className="animate-slide-up pb-24 max-w-3xl">

          {/* BIG title — the blurb headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
            {slide.heading}
          </h1>

          {/* Smaller supporting description */}
          <p className="text-white/70 text-lg lg:text-xl font-light leading-relaxed mb-10 max-w-xl">
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

      {/* ── Dots + scroll ─────────────────────────────────── */}
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