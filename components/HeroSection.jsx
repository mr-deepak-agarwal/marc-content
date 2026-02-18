'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const heroCards = [
  {
    id: 1,
    title: 'Market Research',
    description:
      'In-depth market analysis and consumer insights to drive informed business decisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop&q=80',
    href: '/services/market-research',
  },
  {
    id: 2,
    title: 'Growth Strategy',
    description:
      'Strategic planning to overcome challenges and achieve sustainable expansion goals.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop&q=80',
    href: '/services/strategy',
  },
  {
    id: 3,
    title: 'M&A Advisory',
    description:
      'Expert guidance through mergers, acquisitions, and strategic partnerships.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=700&fit=crop&q=80',
    href: '/services/ma',
  },
]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index) => {
    if (animating || index === current) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 500)
  }

  const prev = () => goTo((current - 1 + heroCards.length) % heroCards.length)
  const next = () => goTo((current + 1) % heroCards.length)

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroCards.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const card = heroCards[current]

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Background Image ───────────────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=1080&fit=crop&q=85')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ── Grey Overlay ───────────────────────────────────── */}
      <div className="absolute inset-0 z-10 bg-[#1D342F]/60" />

      {/* ── Main Hero Text ─────────────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 text-center px-6 pt-40 pb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C2DDB4] mb-5">
          About Us
        </p>

        <h1
          data-testid="hero-heading"
          className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-4xl"
        >
          We Shape Decisions <br className="hidden sm:block" />
          for the Better
        </h1>

        <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mb-10">
          MARC's experience, global reach, and state-of-the-art analytics mean
          that we are better able to deliver insights and advice that help
          today's companies grow their businesses.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
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
      </div>

      {/* ── Single Card Carousel ───────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 lg:h-72">

          {/* Card background image */}
          <img
            key={card.id}
            src={card.image}
            alt={card.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              animating ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Card overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D342F]/90 via-[#1D342F]/60 to-transparent" />

          {/* Card text */}
          <div
            className={`absolute inset-0 flex flex-col justify-center px-10 max-w-xl transition-all duration-500 ${
              animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
              {card.title}
            </h3>
            <p className="text-white/80 text-base leading-relaxed mb-5">
              {card.description}
            </p>
            <Link
              href={card.href}
              className="inline-flex items-center gap-2 text-[#C2DDB4] font-semibold text-sm group w-fit"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 right-6 flex items-center gap-2">
            {heroCards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2 bg-[#4E9141]'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}

export default HeroSection