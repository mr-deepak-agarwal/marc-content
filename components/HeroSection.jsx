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
      style={{ backgroundColor: '#1D342F' }}
    >
      {/* ===== CUSTOM SVG BACKGROUND: GLOBE + CONNECTION NODES ===== */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Globe gradient */}
            <radialGradient id="globeBody" cx="45%" cy="42%" r="55%">
              <stop offset="0%" stopColor="#2A5A3A" />
              <stop offset="60%" stopColor="#1A3828" />
              <stop offset="100%" stopColor="#0D1F16" />
            </radialGradient>
            {/* Gold glow */}
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B45309" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
            </radialGradient>
            {/* Green pulse rings */}
            <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4E9141" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4E9141" stopOpacity="0" />
            </radialGradient>
            {/* Subtle background gradient */}
            <radialGradient id="bgGrad" cx="65%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#243D2C" />
              <stop offset="100%" stopColor="#0D1A10" />
            </radialGradient>
            {/* Clip globe circle */}
            <clipPath id="globeClip">
              <circle cx="1080" cy="450" r="340" />
            </clipPath>
            {/* Soft shadow filter */}
            <filter id="softBlur">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id="smBlur">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Fade mask for left edge of globe */}
            <mask id="globeFade">
              <radialGradient id="fadeRad" cx="60%" cy="50%" r="55%">
                <stop offset="40%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <rect width="1440" height="900" fill="url(#fadeRad)" />
            </mask>
          </defs>

          {/* Base background */}
          <rect width="1440" height="900" fill="url(#bgGrad)" />

          {/* Subtle grid dots */}
          <pattern id="dots" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#4E9141" opacity="0.12" />
          </pattern>
          <rect width="1440" height="900" fill="url(#dots)" />

          {/* Globe soft outer glow */}
          <circle cx="1080" cy="450" r="380" fill="url(#goldGlow)" filter="url(#softBlur)" />
          <circle cx="1080" cy="450" r="300" fill="url(#greenGlow)" filter="url(#smBlur)" />

          {/* Globe body */}
          <circle cx="1080" cy="450" r="340" fill="url(#globeBody)" />

          {/* Globe rim */}
          <circle cx="1080" cy="450" r="340" fill="none" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.35" />
          <circle cx="1080" cy="450" r="338" fill="none" stroke="#C2DDB4" strokeWidth="0.4" strokeOpacity="0.15" />

          {/* ---- Latitude lines ---- */}
          <g clipPath="url(#globeClip)" fill="none" stroke="#4E9141" strokeWidth="0.6" strokeOpacity="0.2">
            <ellipse cx="1080" cy="450" rx="340" ry="80" />
            <ellipse cx="1080" cy="450" rx="340" ry="170" />
            <ellipse cx="1080" cy="450" rx="340" ry="250" />
            <ellipse cx="1080" cy="450" rx="340" ry="320" />
            <line x1="740" y1="450" x2="1420" y2="450" />
          </g>

          {/* ---- Longitude lines ---- */}
          <g clipPath="url(#globeClip)" fill="none" stroke="#4E9141" strokeWidth="0.6" strokeOpacity="0.2">
            <ellipse cx="1080" cy="450" rx="60" ry="340" />
            <ellipse cx="1080" cy="450" rx="140" ry="340" />
            <ellipse cx="1080" cy="450" rx="220" ry="340" />
            <ellipse cx="1080" cy="450" rx="295" ry="340" />
            <line x1="1080" y1="110" x2="1080" y2="790" />
          </g>

          {/* ---- Landmasses (India-centric, stylized) ---- */}
          <g clipPath="url(#globeClip)" fill="#4E9141" fillOpacity="0.28">
            {/* India */}
            <polygon points="1095,350 1125,342 1148,358 1155,390 1148,425 1135,455 1112,478 1092,490 1070,472 1060,442 1068,405 1078,370" />
            {/* SE Asia */}
            <ellipse cx="1190" cy="410" rx="35" ry="50" transform="rotate(20,1190,410)" />
            {/* Arabian Peninsula */}
            <polygon points="1042,338 1068,330 1075,352 1062,372 1038,362" />
            {/* East Africa stub */}
            <polygon points="1008,390 1028,382 1040,400 1038,430 1022,448 1005,435 998,410" />
            {/* Sri Lanka */}
            <ellipse cx="1115" cy="498" rx="10" ry="14" />
          </g>

          {/* Globe specular highlight */}
          <ellipse cx="990" cy="335" rx="80" ry="55" fill="white" fillOpacity="0.04" filter="url(#smBlur)" />

          {/* ====== CONNECTION LINES from globe to left side ====== */}
          {/* India → left panel node */}
          <line x1="1095" y1="430" x2="640" y2="280" stroke="#B45309" strokeWidth="1.2" strokeDasharray="5,4" strokeOpacity="0.55" />
          {/* Arabia → left panel node */}
          <line x1="1055" y1="348" x2="520" y2="420" stroke="#B45309" strokeWidth="1" strokeDasharray="5,4" strokeOpacity="0.4" />
          {/* SE Asia → right-down */}
          <line x1="1190" y1="420" x2="1340" y2="600" stroke="#4E9141" strokeWidth="0.8" strokeDasharray="4,5" strokeOpacity="0.3" />
          {/* Top node */}
          <line x1="1080" y1="112" x2="780" y2="170" stroke="#C2DDB4" strokeWidth="0.8" strokeDasharray="4,5" strokeOpacity="0.3" />

          {/* ====== GLOBE NODES ====== */}
          {/* India node */}
          <circle cx="1095" cy="430" r="7" fill="#B45309" filter="url(#nodeGlow)" />
          <circle cx="1095" cy="430" r="14" fill="#B45309" fillOpacity="0.2" />
          <circle cx="1095" cy="430" r="22" fill="#B45309" fillOpacity="0.08" />

          {/* SE Asia node */}
          <circle cx="1190" cy="420" r="5" fill="#4E9141" filter="url(#nodeGlow)" />
          <circle cx="1190" cy="420" r="11" fill="#4E9141" fillOpacity="0.2" />

          {/* Arabia node */}
          <circle cx="1055" cy="348" r="4.5" fill="#B45309" filter="url(#nodeGlow)" />
          <circle cx="1055" cy="348" r="10" fill="#B45309" fillOpacity="0.18" />

          {/* Top node */}
          <circle cx="1080" cy="115" r="4" fill="#C2DDB4" fillOpacity="0.8" />
          <circle cx="1080" cy="115" r="9" fill="#C2DDB4" fillOpacity="0.15" />

          {/* ====== LEFT PANEL NODES (connection endpoints) ====== */}
          {/* India label node */}
          <circle cx="640" cy="280" r="5" fill="#B45309" filter="url(#nodeGlow)" />
          <circle cx="640" cy="280" r="12" fill="#B45309" fillOpacity="0.15" />
          <text x="656" y="275" fontFamily="sans-serif" fontSize="11" fill="#B45309" letterSpacing="1.5" fontWeight="600">INDIA</text>
          <text x="656" y="289" fontFamily="sans-serif" fontSize="9" fill="#C2DDB4" fillOpacity="0.7">500+ Projects</text>

          {/* UAE/Gulf label node */}
          <circle cx="520" cy="420" r="4.5" fill="#B45309" filter="url(#nodeGlow)" />
          <circle cx="520" cy="420" r="11" fill="#B45309" fillOpacity="0.12" />
          <text x="534" y="416" fontFamily="sans-serif" fontSize="11" fill="#B45309" letterSpacing="1.5" fontWeight="600">UAE</text>
          <text x="534" y="429" fontFamily="sans-serif" fontSize="9" fill="#C2DDB4" fillOpacity="0.7">Active Markets</text>

          {/* Europe label node */}
          <circle cx="780" cy="170" r="4" fill="#C2DDB4" fillOpacity="0.8" />
          <circle cx="780" cy="170" r="10" fill="#C2DDB4" fillOpacity="0.12" />
          <text x="795" y="166" fontFamily="sans-serif" fontSize="11" fill="#C2DDB4" fillOpacity="0.8" letterSpacing="1.5">GLOBAL</text>
          <text x="795" y="179" fontFamily="sans-serif" fontSize="9" fill="#C2DDB4" fillOpacity="0.55">30+ Countries</text>

          {/* ====== DECORATIVE HORIZONTAL LINES (left panel breathing room) ====== */}
          <line x1="0" y1="580" x2="460" y2="580" stroke="#4E9141" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="0" y1="300" x2="320" y2="300" stroke="#4E9141" strokeWidth="0.5" strokeOpacity="0.15" />

          {/* Bottom stat strip */}
          <rect x="60" y="728" width="100" height="42" rx="3" fill="#4E9141" fillOpacity="0.12" stroke="#4E9141" strokeWidth="0.75" strokeOpacity="0.3" />
          <rect x="174" y="728" width="100" height="42" rx="3" fill="#4E9141" fillOpacity="0.12" stroke="#4E9141" strokeWidth="0.75" strokeOpacity="0.3" />
          <rect x="288" y="728" width="100" height="42" rx="3" fill="#4E9141" fillOpacity="0.12" stroke="#4E9141" strokeWidth="0.75" strokeOpacity="0.3" />
          <rect x="402" y="728" width="100" height="42" rx="3" fill="#4E9141" fillOpacity="0.12" stroke="#4E9141" strokeWidth="0.75" strokeOpacity="0.3" />
        </svg>
      </div>

      {/* ===== DEPTH OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D342F]/80 via-[#1D342F]/40 to-transparent pointer-events-none" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div
          data-testid="hero-badge"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C2DDB4]/30 text-white text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-[#B45309] rounded-full animate-pulse" />
          Advisors for Compounding Growth
        </div>

        {/* Main Heading */}
        <h1
          data-testid="hero-heading"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Growth Advisory for{' '}
          <span className="text-[#C2DDB4]">Ambitious Indian</span>{' '}
          &amp; Global Businesses
        </h1>

        {/* Subheading */}
        <p
          data-testid="hero-subheading"
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Strategy and execution for Indian and global businesses that want growth to build—year after year.
        </p>

        {/* ===== 3 VALUE BLURBS ===== */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {[
            {
              num: '01',
              title: 'Insights that sharpen growth bets.',
              body: 'Market, customer, and category intelligence to reduce risk and guide compounding growth.',
            },
            {
              num: '02',
              title: 'Numbers that guide growth.',
              body: 'Financial models, profitability analyses and focused financial diagnostics that translate data into clear growth priorities.',
            },
            {
              num: '03',
              title: 'M&A, designed for growth.',
              body: 'Strategic target identification, commercial diligence, and integration support—focused on value creation, not just deal completion.',
            },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-white/8 backdrop-blur-sm border border-[#C2DDB4]/20 rounded-2xl p-5 text-left hover:bg-white/12 hover:border-[#4E9141]/50 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-[#4E9141]/40 border border-[#4E9141]/50 flex items-center justify-center mb-3">
                <span className="text-[#C2DDB4] font-bold text-sm">{item.num}</span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            data-testid="hero-cta-services"
            onClick={() => scrollToSection('#services')}
            size="lg"
            className="bg-[#4E9141] hover:bg-[#3d7333] text-white px-8 py-6 text-lg font-semibold shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            data-testid="hero-cta-about"
            onClick={() => scrollToSection('#about')}
            variant="outline"
            size="lg"
            className="border-2 border-[#C2DDB4]/40 text-white hover:bg-white/10 hover:border-[#C2DDB4]/70 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
          >
            Learn About Us
          </Button>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <button
        data-testid="hero-scroll-btn"
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C2DDB4]/60 hover:text-[#C2DDB4] animate-bounce transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
