'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: 'Market Research',
    description:
      'In-depth market analysis and consumer insights to drive informed business decisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=90',
    href: '/services/market-research',
  },
  {
    id: 2,
    title: 'Growth Strategy',
    description:
      'Strategic planning to overcome challenges and achieve sustainable expansion goals.',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop&q=90',
    href: '/services/strategy',
  },
  {
    id: 3,
    title: 'M&A Advisory',
    description:
      'Expert guidance through mergers, acquisitions, and strategic partnerships.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&q=90',
    href: '/services/ma',
  },
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (index) => {
      if (animating || index === current) return
      setAnimating(true)
      setPrev(current)
      setCurrent(index)
      setTimeout(() => {
        setPrev(null)
        setAnimating(false)
      }, 700)
    },
    [animating, current]
  )

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length)
  const goNext = () => goTo((current + 1) % slides.length)

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(() => {
      goNext()
    }, 6000)
    return () => clearInterval(id)
  }, [current, animating])

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* ── Slide backgrounds ──────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#1D342F]/65" />
        </div>
      ))}

      {/* ── Static hero heading (above all slides) ─────────── */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Top eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2DDB4] mb-5">
          About Us
        </p>

        {/* Main heading — always visible */}
        <h1
          data-testid="hero-heading"
          className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
        >
          We Shape Decisions <br className="hidden sm:block" />
          for the Better
        </h1>

        {/* Static sub-copy */}
        <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mb-10">
          MARC's experience, global reach, and state-of-the-art analytics mean
          that we are better able to deliver insights and advice that help
          today's companies grow their businesses.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3e7433] transition-all duration-300 shadow-lg shadow-[#4E9141]/30 group"
          >
            Schedule Free Consulting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white/30 rounded-full hover:border-white/70 hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* ── Slide blurb strip (bottom of hero) ─────────── */}
        <div className="w-full max-w-3xl">
          {/* Blurb text — animates on slide change */}
          <div
            key={current}
            className="animate-slide-up text-center mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2DDB4] mb-2">
              0{current + 1} / 0{slides.length}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">
              {slides[current].title}
            </h2>
            <p className="text-white/75 text-base leading-relaxed max-w-xl mx-auto mb-4">
              {slides[current].description}
            </p>
            <Link
              href={slides[current].href}
              className="inline-flex items-center gap-2 text-[#C2DDB4] font-semibold text-sm group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Dots + arrows row */}
          <div className="flex items-center justify-center gap-6">
            {/* Prev */}
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-400 rounded-full ${
                    i === current
                      ? 'w-10 h-2.5 bg-[#4E9141]'
                      : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={goNext}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection