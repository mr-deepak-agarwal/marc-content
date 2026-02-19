'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const Highlight = ({ children }) => (
  <span className="text-[#4E9141] font-semibold">{children}</span>
)

const slides = [
  {
    id: 1,
    eyebrow: 'Insights that sharpen growth bets.',
    heading: 'Market, customer, and\ncategory intelligence',
    description:
      'to reduce risk and guide compounding growth.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=85',
    ctaPrimary: { label: 'Explore Services', href: '/services/market-research' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
    cardContent: (
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#4E9141] mb-3">01</p>
        <p className="text-[#1D342F] text-sm leading-relaxed">
          <Highlight>Insights</Highlight> that sharpen{' '}
          <Highlight>growth bets.</Highlight>
          <br /><br />
          Market, customer, and category intelligence to reduce risk and guide compounding growth.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    eyebrow: 'Numbers that guide growth.',
    heading: 'Financial models &\nprofitability analyses',
    description:
      'Focused financial diagnostics that translate data into clear growth priorities.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop&q=85',
    ctaPrimary: { label: 'Explore Services', href: '/services/financial-analytics' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
    cardContent: (
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#4E9141] mb-3">02</p>
        <p className="text-[#1D342F] text-sm leading-relaxed">
          <Highlight>Numbers</Highlight> that guide{' '}
          <Highlight>growth.</Highlight>
          <br /><br />
          Financial models, Profitability analyses and focused financial diagnostics that translate data into clear growth priorities.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    eyebrow: 'M&A, designed for growth.',
    heading: 'Strategic target identification\n& commercial diligence',
    description:
      'Integration support focused on value creation, not just deal completion.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=85',
    ctaPrimary: { label: 'Explore Services', href: '/services/ma' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
    cardContent: (
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#4E9141] mb-3">03</p>
        <p className="text-[#1D342F] text-sm leading-relaxed">
          <Highlight>M&A,</Highlight> designed for{' '}
          <Highlight>growth.</Highlight>
          <br /><br />
          Strategic target identification, commercial diligence, and integration support—focused on value creation, not just deal completion.
        </p>
      </div>
    ),
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
          <div className="absolute inset-0 bg-[#1D342F]/60" />
        </div>
      ))}

      {/* ── Top strip — main blurb ─────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-28 px-8 lg:px-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[2px] bg-[#4E9141]" />
          <p className="text-white/80 text-sm font-medium tracking-wide">
            No. 1 Advisor for{' '}
            <span className="text-[#4E9141] font-semibold">Compounding Growth</span>
          </p>
        </div>
        <p className="text-white/60 text-sm max-w-xl mt-1 pl-[52px]">
          Strategy and execution for Indian and global businesses that want to{' '}
          <span className="text-white/90 italic">reimagine growth</span>
          {' '}—year on year.
        </p>
      </div>

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

      {/* ── Main content — bottom ─────────────────────────── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-end justify-between gap-8">

          {/* LEFT — slide text */}
          <div key={current} className="animate-slide-up max-w-2xl">
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
            {slide.cardContent}
          </div>

        </div>
      </div>

      {/* ── Dots + scroll chevron ─────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <ChevronDown className="w-5 h-5 text-white/60 animate-bounce" />
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