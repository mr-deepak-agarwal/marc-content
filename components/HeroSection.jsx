'use client'

import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { companyInfo } from '@/data/mock'
import { Button } from './ui/button'

const HeroSection = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#4E9141' }}
    >
      {/* ===== GEOMETRIC SHAPES BACKGROUND ===== */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient definitions */}
          <linearGradient id="shapeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <linearGradient id="shapeGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(194,221,180,0.2)" />
            <stop offset="100%" stopColor="rgba(194,221,180,0.05)" />
          </linearGradient>
          <linearGradient id="shapeGradient3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Large Circle - Top Right */}
        <circle
          cx="1200"
          cy="150"
          r="200"
          fill="url(#shapeGradient1)"
          className="animate-geometric-float"
          style={{ animationDelay: '0s' }}
        />

        {/* Rectangle - Left Side */}
        <rect
          x="50"
          y="300"
          width="180"
          height="180"
          rx="20"
          fill="url(#shapeGradient2)"
          transform="rotate(15 140 390)"
          className="animate-geometric-float"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Triangle - Bottom Center */}
        <polygon
          points="720,750 820,600 620,600"
          fill="url(#shapeGradient1)"
          className="animate-geometric-pulse"
          style={{ animationDelay: '1s' }}
        />

        {/* Small Circle - Left */}
        <circle
          cx="100"
          cy="700"
          r="80"
          fill="rgba(255,255,255,0.08)"
          className="animate-geometric-float"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Hexagon - Right Side */}
        <polygon
          points="1300,500 1350,550 1350,630 1300,680 1250,630 1250,550"
          fill="url(#shapeGradient2)"
          className="animate-geometric-float"
          style={{ animationDelay: '2s' }}
        />

        {/* Diamond - Top Left */}
        <rect
          x="250"
          y="80"
          width="100"
          height="100"
          fill="rgba(194,221,180,0.15)"
          transform="rotate(45 300 130)"
          className="animate-geometric-pulse"
          style={{ animationDelay: '0.8s' }}
        />

        {/* Large Rectangle - Bottom Right */}
        <rect
          x="1100"
          y="650"
          width="250"
          height="150"
          rx="30"
          fill="url(#shapeGradient3)"
          transform="rotate(-10 1225 725)"
          className="animate-geometric-float"
          style={{ animationDelay: '1.2s' }}
        />

        {/* Circle Outline - Center */}
        <circle
          cx="700"
          cy="200"
          r="120"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          strokeDasharray="10 5"
          className="animate-geometric-pulse"
        />

        {/* Small Square - Multiple */}
        <rect
          x="500"
          y="600"
          width="50"
          height="50"
          rx="8"
          fill="rgba(255,255,255,0.1)"
          className="animate-geometric-float"
          style={{ animationDelay: '0.3s' }}
        />
        <rect
          x="950"
          y="350"
          width="40"
          height="40"
          rx="6"
          fill="rgba(194,221,180,0.12)"
          className="animate-geometric-float"
          style={{ animationDelay: '1.8s' }}
        />

        {/* Triangle Small - Top */}
        <polygon
          points="550,120 580,70 520,70"
          fill="rgba(255,255,255,0.08)"
          className="animate-geometric-pulse"
          style={{ animationDelay: '2.5s' }}
        />

        {/* Dotted Line Pattern */}
        <line
          x1="0"
          y1="450"
          x2="400"
          y2="450"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <line
          x1="1040"
          y1="300"
          x2="1440"
          y2="300"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* ===== FLOATING GEOMETRIC ELEMENTS ===== */}
      <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full border-2 border-white/20 animate-geometric-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-[15%] w-24 h-24 rounded-2xl bg-white/10 animate-geometric-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-[20%] w-12 h-12 bg-[#C2DDB4]/30 rotate-45 animate-geometric-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 left-[5%] w-20 h-20 border border-white/10 rounded-lg rotate-12 animate-geometric-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 right-[10%] w-32 h-8 bg-white/10 rounded-full animate-geometric-float" style={{ animationDelay: '2s' }} />

      {/* ===== SUBTLE GRID OVERLAY ===== */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} 
      />

      {/* ===== DEPTH OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div 
          data-testid="hero-badge"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          {companyInfo.tagline}
        </div>

        {/* Main Heading */}
        <h1 
          data-testid="hero-heading"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          {companyInfo.heroTitle}
        </h1>

        {/* Subheading */}
        <p 
          data-testid="hero-subheading"
          className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {companyInfo.heroSubtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            data-testid="hero-cta-services"
            onClick={() => scrollToSection('#services')}
            size="lg"
            className="bg-white text-[#4E9141] hover:bg-[#C2DDB4] px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            data-testid="hero-cta-about"
            onClick={() => scrollToSection('#about')}
            variant="outline"
            size="lg"
            className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
          >
            Learn About Us
          </Button>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <button
        data-testid="hero-scroll-btn"
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
