'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    eyebrow: 'Market Research',
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
  const currentRef = useRef(0)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    currentRef.current = index
    setCurrent(index)
  }, [])

  const goPrev = useCallback(() => {
    goTo((currentRef.current - 1 + slides.length) % slides.length)
  }, [goTo])

  const goNext = useCallback(() => {
    goTo((currentRef.current + 1) % slides.length)
  }, [goTo])

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((currentRef.current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [goTo])

  const slide = slides[current]

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .fade-up-1 { animation-delay: 0ms; }
        .fade-up-2 { animation-delay: 80ms; }
        .fade-up-3 { animation-delay: 160ms; }
        .fade-up-4 { animation-delay: 240ms; }

        @keyframes ticker {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .ticker {
          animation: ticker 5s linear both;
        }
      `}</style>

      <section
        id="hero"
        data-testid="hero-section"
        className="relative w-full h-screen min-h-[640px] overflow-hidden flex"
      >

        {/* ── LEFT PANEL — solid dark, always readable ── */}
        <div className="relative z-20 flex flex-col justify-between w-full lg:w-[48%] h-full bg-[#0f1a14] px-10 lg:px-16 py-10 flex-shrink-0">

          {/* Top: MARC tagline */}
          <div className="pt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] text-xs font-bold uppercase tracking-[0.22em]">
                No. 1 Advisor for Compounding Growth
              </span>
            </div>
            <p className="text-white/40 text-xs pl-11 max-w-xs leading-relaxed">
              Strategy and execution for Indian and global businesses that want to reimagine growth year on year.
            </p>
          </div>

          {/* Middle: Slide content */}
          <div className="flex-1 flex flex-col justify-center py-10">

            {/* Eyebrow */}
            <div
              key={`eyebrow-${current}`}
              className="fade-up fade-up-1 flex items-center gap-3 mb-6"
            >
              <span className="w-5 h-[2px] bg-[#4E9141] flex-shrink-0" />
              <span className="text-[#4E9141] text-xs font-bold uppercase tracking-[0.2em]">
                {slide.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`heading-${current}`}
              className="fade-up fade-up-2 text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight mb-6"
            >
              {slide.heading}
            </h1>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className="fade-up fade-up-3 text-white/55 text-base lg:text-lg font-light leading-relaxed mb-10 max-w-sm"
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div
              key={`ctas-${current}`}
              className="fade-up fade-up-4 flex flex-wrap gap-4"
            >
              <Link
                href={slide.ctaPrimary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4E9141] text-white text-sm font-semibold rounded-sm hover:bg-[#3e7433] transition-all duration-300 group"
              >
                {slide.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-sm font-semibold border border-white/20 rounded-sm hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* Bottom: dots + counter + progress */}
          <div className="flex items-center gap-4 pb-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-7 h-[3px] bg-[#4E9141]'
                      : 'w-[3px] h-[3px] bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="flex-1 h-[1px] bg-white/10 overflow-hidden">
              <div
                key={`ticker-${current}`}
                className="ticker h-full bg-[#4E9141]"
              />
            </div>

            {/* Counter */}
            <span className="text-white/30 text-xs tabular-nums font-medium">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── RIGHT PANEL — full bleed photo ── */}
        <div className="hidden lg:block relative flex-1 h-full overflow-hidden">

          {/* Photos */}
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
              {/* Subtle left fade so it blends into the dark panel */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a14]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}

          {/* Arrow buttons sit on the photo side */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/55 backdrop-blur-sm border border-white/15 flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 hover:bg-black/55 backdrop-blur-sm border border-white/15 flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile: full bleed photo behind left panel */}
        <div className="lg:hidden absolute inset-0 z-0">
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
              <div className="absolute inset-0 bg-black/70" />
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default HeroSection