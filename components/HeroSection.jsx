'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    eyebrow: 'Market Research & Advisory',
    heading: 'Insights that sharpen growth bets.',
    description: 'Market, customer, and category intelligence to reduce risk and guide compounding growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/market-research' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 2,
    eyebrow: 'Financial Analytics',
    heading: 'Numbers that guide growth.',
    description: 'Financial models, profitability analyses and focused financial diagnostics that translate data into clear growth priorities.',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/financial-analytics' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 3,
    eyebrow: 'Mergers & Acquisitions',
    heading: 'M&A, designed for growth.',
    description: 'Strategic target identification, commercial diligence, and integration support focused on value creation, not just deal completion.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop&q=90',
    ctaPrimary: { label: 'Explore Services', href: '/services/mergers-and-acquisitions-india' },
    ctaSecondary: { label: 'Learn More', href: '/services' },
  },
  {
    id: 4,
    eyebrow: 'Global Outsourcing',
    heading: 'Your outsourcing partner for global mandates.',
    description: 'International consultants trust MARC for on-ground research, due diligence, and advisory execution across India and emerging markets.',
    image: '/about/IMG_0395.JPG',
    ctaPrimary: { label: 'Partner With Us', href: '/contact-us' },
    ctaSecondary: { label: 'Our Capabilities', href: '/services' },
  },
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const currentRef = useRef(0)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    currentRef.current = index
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const goPrev = useCallback(() => {
    goTo((currentRef.current - 1 + slides.length) % slides.length)
  }, [goTo])

  const goNext = useCallback(() => {
    goTo((currentRef.current + 1) % slides.length)
  }, [goTo])

  useEffect(() => {
    const id = setInterval(() => {
      goTo((currentRef.current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [goTo])

  const slide = slides[current]
  const slideNum = String(current + 1).padStart(2, '0')
  const totalNum = String(slides.length).padStart(2, '0')

  return (
    <>
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content-anim {
          animation: hero-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .hero-progress {
          animation: progress-bar 5s linear both;
        }
      `}</style>

      <section
        id="hero"
        data-testid="hero-section"
        className="relative w-full h-screen min-h-[600px] overflow-hidden"
      >

        {/* ── Background images ── */}
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
              style={{ filter: 'grayscale(100%)' }}
            />
            {/* Stronger left-side gradient so text is always legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>
        ))}

        {/* ── TOP-RIGHT floating tagline badge ── */}
        <div className="absolute top-28 right-8 lg:right-16 z-30 hidden lg:flex flex-col items-end gap-2">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-black/65 backdrop-blur-md border border-white/10">
            <span className="w-5 h-[2px] bg-[#4E9141] flex-shrink-0" />
            <p className="text-[#4E9141] text-[10px] font-bold uppercase tracking-[0.2em]">
              No. 1 Advisor for Compounding Growth
            </p>
          </div>
          <p className="text-white/45 text-[11px] text-right max-w-[260px] leading-relaxed pr-1">
            Strategy & execution for Indian and global businesses reimagining growth year on year.
          </p>
        </div>

        {/* ── Arrow buttons ── */}
        <button
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/15 flex items-center justify-center transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/15 flex items-center justify-center transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* ── Main slide content — bottom-anchored ── */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 lg:px-20 pb-28 max-w-7xl mx-auto left-0 right-0">

          {/* Per-slide eyebrow — service category */}
          <div
            key={`eyebrow-${current}`}
            className="hero-content-anim flex items-center gap-3 mb-4"
          >
            <span className="w-7 h-[2px] bg-[#4E9141]" />
            <span
              className="text-[#4E9141] text-xs lg:text-sm font-bold uppercase tracking-[0.2em]"
              style={{ textShadow: '0 0 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,1)' }}
            >
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1
            key={`heading-${current}`}
            className="hero-content-anim text-4xl lg:text-5xl xl:text-[3.6rem] font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-2xl"
            style={{ animationDelay: '60ms' }}
          >
            {slide.heading}
          </h1>

          {/* Description */}
          <p
            key={`desc-${current}`}
            className="hero-content-anim text-white/65 text-base lg:text-lg font-light leading-relaxed mb-9 max-w-lg"
            style={{ animationDelay: '120ms' }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            key={`ctas-${current}`}
            className="hero-content-anim flex flex-wrap gap-4"
            style={{ animationDelay: '180ms' }}
          >
            <Link
              href={slide.ctaPrimary.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4E9141] text-white text-sm font-semibold rounded-md hover:bg-[#3e7433] transition-all duration-300 shadow-lg shadow-[#4E9141]/25 group"
            >
              {slide.ctaPrimary.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-sm font-semibold border border-white/30 rounded-md hover:border-white/70 hover:bg-white/10 transition-all duration-300"
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* ── Bottom bar: dots + progress bar + counter ── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 px-8 lg:px-20 pb-7 max-w-7xl mx-auto left-0 right-0">
          <div className="flex items-center gap-5">

            {/* Dot indicators */}
            <div className="flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-400 rounded-full ${
                    i === current
                      ? 'w-8 h-[5px] bg-[#4E9141]'
                      : 'w-[5px] h-[5px] bg-white/30 hover:bg-white/55'
                  }`}
                />
              ))}
            </div>

            {/* Auto-progress bar */}
            <div className="flex-1 max-w-[160px] h-[2px] bg-white/15 rounded-full overflow-hidden">
              <div
                key={`progress-${current}`}
                className="hero-progress h-full bg-[#4E9141] rounded-full"
              />
            </div>

            {/* Slide counter  e.g.  01 / 04 */}
            <div className="ml-auto flex items-baseline gap-1">
              <span className="text-white font-bold text-sm tabular-nums">{slideNum}</span>
              <span className="text-white/30 text-xs mx-0.5">/</span>
              <span className="text-white/40 text-sm tabular-nums">{totalNum}</span>
            </div>
          </div>

          {/* Subtle scroll cue */}
          <div className="flex justify-center mt-3">
            <ChevronDown className="w-4 h-4 text-white/25 animate-bounce" />
          </div>
        </div>

      </section>
    </>
  )
}

export default HeroSection