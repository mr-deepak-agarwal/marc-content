'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    eyebrow: 'About Us',
    heading: 'We Shape Decisions\nfor the Better',
    description:
      "MARC's experience, global reach, and state-of-the-art analytics mean that we are better able to deliver insights and advice that help today's companies grow their businesses.",
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&q=85',
    ctaPrimary: { label: 'Schedule Free Consulting', href: '/contact' },
    ctaSecondary: { label: 'Learn More', href: '/about' },
  },
  {
    id: 2,
    eyebrow: 'Market Research',
    heading: 'In-Depth Market\nIntelligence',
    description:
      'In-depth market analysis and consumer insights to drive informed business decisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=85',
    ctaPrimary: { label: 'Explore Services', href: '/services/market-research' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 3,
    eyebrow: 'Growth Strategy',
    heading: 'Strategic Growth\nConsulting',
    description:
      'Strategic planning to overcome challenges and achieve sustainable expansion goals.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop&q=85',
    ctaPrimary: { label: 'Explore Services', href: '/services/strategy' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 4,
    eyebrow: 'M&A Advisory',
    heading: 'Expert M&A\nAdvisory',
    description:
      'Expert guidance through mergers, acquisitions, and strategic partnerships.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=85',
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
            alt={s.eyebrow}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#1D342F]/60" />
        </div>
      ))}

      {/* ── Left arrow ────────────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* ── Right arrow ───────────────────────────────────── */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* ── Main content layer ────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 px-8 lg:px-20 max-w-7xl mx-auto left-0 right-0">
        
        {/* Bottom row: text left + blurb card right */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8">

          {/* LEFT — eyebrow, heading, description, CTAs */}
          <div
            key={current}
            className="animate-slide-up max-w-2xl"
          >
            <p className="text-[#4E9141] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              {slide.eyebrow}
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-5 whitespace-pre-line">
              {slide.heading}
            </h1>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              {slide.description}
            </p>

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
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white/50 rounded-md hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* RIGHT — white blurb card */}
          <div className="hidden lg:block flex-shrink-0 w-80 bg-white rounded-2xl p-7 shadow-2xl">
            <p className="text-[#1D342F] text-base leading-relaxed text-center">
              MARC is committed to{' '}
              <span className="text-[#4E9141] font-semibold">Delivering Excellence</span>
              {' '}&amp;{' '}
              <span className="text-[#4E9141] font-semibold">Partnering Success</span>
              {' '}by driving Economic Growth.
            </p>
          </div>
        </div>
      </div>

      {/* ── Dots + scroll indicator ───────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        {/* Scroll down arrow */}
        <ChevronDown className="w-5 h-5 text-white/60 animate-bounce" />

        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-10 h-2.5 bg-[#4E9141]'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection