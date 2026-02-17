'use client'

import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

/*
  MARC Vivid Palette:
  --green-logo:   #2E7D32   rich logo green
  --green-mid:    #43A047   bright mid green
  --green-light:  #81C784   light green tint
  --green-pale:   #A5D6A7   very light green (text on dark)
  --green-deep:   #1B5E20   dark section bg
  --orange:       #E65100   vivid orange (WHY CHOOSE US style)
  --orange-bright:#FF6D00   even brighter orange accent
  --white:        #FFFFFF
*/

const HeroSection = () => {
  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1B5E20' }}
    >
      {/* ══════════ CUSTOM SVG BACKGROUND ══════════ */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="hGlobe" cx="42%" cy="40%" r="58%">
              <stop offset="0%" stopColor="#43A047" />
              <stop offset="55%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </radialGradient>
            <radialGradient id="hBg" cx="68%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#1B5E20" />
            </radialGradient>
            <radialGradient id="hOGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF6D00" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#FF6D00" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hGGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#66BB6A" stopOpacity="0" />
            </radialGradient>
            <clipPath id="hClip"><circle cx="1060" cy="450" r="320" /></clipPath>
            <filter id="hBlur"><feGaussianBlur stdDeviation="20" /></filter>
            <filter id="hSm"><feGaussianBlur stdDeviation="5" /></filter>
            <filter id="hNode">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <rect width="1440" height="900" fill="url(#hBg)" />

          {/* dot grid */}
          <pattern id="hDots" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.1" fill="#4CAF50" opacity="0.2" />
          </pattern>
          <rect width="1440" height="900" fill="url(#hDots)" />

          {/* diagonal accent lines */}
          <line x1="0" y1="150" x2="480" y2="600" stroke="#E65100" strokeWidth="0.7" strokeOpacity="0.12" />
          <line x1="0" y1="350" x2="360" y2="750" stroke="#E65100" strokeWidth="0.5" strokeOpacity="0.08" />
          <line x1="120" y1="0" x2="620" y2="520" stroke="#4CAF50" strokeWidth="0.5" strokeOpacity="0.1" />

          {/* globe glows */}
          <circle cx="1060" cy="450" r="420" fill="url(#hOGlow)" filter="url(#hBlur)" />
          <circle cx="1060" cy="450" r="290" fill="url(#hGGlow)" filter="url(#hSm)" />

          {/* globe body */}
          <circle cx="1060" cy="450" r="320" fill="url(#hGlobe)" />
          <circle cx="1060" cy="450" r="320" fill="none" stroke="#81C784" strokeWidth="1" strokeOpacity="0.35" />
          <circle cx="1060" cy="450" r="318" fill="none" stroke="#E65100" strokeWidth="0.5" strokeOpacity="0.2" />

          {/* lat lines */}
          <g clipPath="url(#hClip)" fill="none" stroke="#4CAF50" strokeWidth="0.8" strokeOpacity="0.28">
            <ellipse cx="1060" cy="450" rx="320" ry="78" />
            <ellipse cx="1060" cy="450" rx="320" ry="162" />
            <ellipse cx="1060" cy="450" rx="320" ry="244" />
            <ellipse cx="1060" cy="450" rx="320" ry="308" />
            <line x1="740" y1="450" x2="1380" y2="450" />
          </g>

          {/* long lines */}
          <g clipPath="url(#hClip)" fill="none" stroke="#4CAF50" strokeWidth="0.8" strokeOpacity="0.28">
            <ellipse cx="1060" cy="450" rx="58" ry="320" />
            <ellipse cx="1060" cy="450" rx="135" ry="320" />
            <ellipse cx="1060" cy="450" rx="215" ry="320" />
            <ellipse cx="1060" cy="450" rx="290" ry="320" />
            <line x1="1060" y1="130" x2="1060" y2="770" />
          </g>

          {/* landmasses — bright fill */}
          <g clipPath="url(#hClip)" fill="#66BB6A" fillOpacity="0.42">
            <polygon points="1074,332 1100,324 1122,340 1128,368 1120,400 1106,422 1082,440 1062,428 1054,402 1062,372 1072,344" />
            <ellipse cx="1166" cy="390" rx="30" ry="44" transform="rotate(18,1166,390)" />
            <polygon points="1032,318 1057,310 1062,334 1050,352 1026,344" />
            <polygon points="997,376 1017,368 1027,390 1023,418 1007,430 991,418 985,395" />
            <ellipse cx="1096" cy="450" rx="9" ry="13" />
          </g>

          {/* specular */}
          <ellipse cx="966" cy="320" rx="76" ry="52" fill="white" fillOpacity="0.06" filter="url(#hSm)" />

          {/* connection lines */}
          <line x1="1074" y1="393" x2="602" y2="252" stroke="#FF6D00" strokeWidth="1.8" strokeDasharray="5,4" strokeOpacity="0.65" />
          <line x1="1032" y1="334" x2="482" y2="418" stroke="#FF6D00" strokeWidth="1.3" strokeDasharray="5,4" strokeOpacity="0.5" />
          <line x1="1060" y1="132" x2="742" y2="172" stroke="#A5D6A7" strokeWidth="1" strokeDasharray="4,5" strokeOpacity="0.4" />

          {/* globe nodes */}
          <circle cx="1074" cy="393" r="8" fill="#FF6D00" filter="url(#hNode)" />
          <circle cx="1074" cy="393" r="18" fill="#FF6D00" fillOpacity="0.22" />
          <circle cx="1074" cy="393" r="28" fill="#FF6D00" fillOpacity="0.08" />
          <circle cx="1032" cy="334" r="6" fill="#FF6D00" filter="url(#hNode)" />
          <circle cx="1032" cy="334" r="13" fill="#FF6D00" fillOpacity="0.18" />
          <circle cx="1060" cy="133" r="5" fill="#A5D6A7" filter="url(#hNode)" />

          {/* left panel nodes */}
          <circle cx="602" cy="252" r="7" fill="#FF6D00" filter="url(#hNode)" />
          <circle cx="602" cy="252" r="16" fill="#FF6D00" fillOpacity="0.18" />
          <text x="622" y="246" fontFamily="sans-serif" fontSize="13" fill="#FF8A50" letterSpacing="2.5" fontWeight="700">INDIA</text>
          <text x="622" y="263" fontFamily="sans-serif" fontSize="10" fill="#A5D6A7">500+ Projects</text>

          <circle cx="482" cy="418" r="6" fill="#FF6D00" filter="url(#hNode)" />
          <circle cx="482" cy="418" r="13" fill="#FF6D00" fillOpacity="0.14" />
          <text x="500" y="413" fontFamily="sans-serif" fontSize="13" fill="#FF8A50" letterSpacing="2.5" fontWeight="700">UAE</text>
          <text x="500" y="429" fontFamily="sans-serif" fontSize="10" fill="#A5D6A7">Active Markets</text>

          <circle cx="742" cy="172" r="5" fill="#A5D6A7" filter="url(#hNode)" />
          <text x="758" y="167" fontFamily="sans-serif" fontSize="12" fill="#A5D6A7" letterSpacing="2">GLOBAL</text>
          <text x="758" y="182" fontFamily="sans-serif" fontSize="9.5" fill="#A5D6A7" fillOpacity="0.7">30+ Countries</text>

          {/* orange corner accent */}
          <path d="M 0 0 Q 220 120 200 340" fill="none" stroke="#E65100" strokeWidth="2" strokeOpacity="0.18" />
          <path d="M 0 90 Q 170 200 150 420" fill="none" stroke="#E65100" strokeWidth="1" strokeOpacity="0.1" />
        </svg>
      </div>

      {/* fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(27,94,32,0.72) 0%, rgba(27,94,32,0.28) 55%, transparent 100%)' }}
      />

      {/* ══════════ CONTENT ══════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <div
          data-testid="hero-badge"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium mb-8"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(165,214,167,0.4)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FF6D00' }} />
          Advisors for Compounding Growth
        </div>

        {/* Heading */}
        <h1
          data-testid="hero-heading"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Growth Advisory for{' '}
          <span style={{ color: '#A5D6A7' }}>Ambitious Indian</span>{' '}
          &amp; Global Businesses
        </h1>

        {/* Subheading */}
        <p
          data-testid="hero-subheading"
          className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          Strategy and execution for Indian and global businesses that want growth to build—year after year.
        </p>

        {/* 3 value blurbs */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {[
            { num: '01', title: 'Insights that sharpen growth bets.', body: 'Market, customer, and category intelligence to reduce risk and guide compounding growth.' },
            { num: '02', title: 'Numbers that guide growth.', body: 'Financial models, profitability analyses and focused diagnostics that translate data into clear priorities.' },
            { num: '03', title: 'M&A, designed for growth.', body: 'Strategic target identification, commercial diligence, and integration support—focused on value creation.' },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-2xl p-5 text-left transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255,255,255,0.09)', border: '1px solid rgba(165,214,167,0.25)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: '#E65100' }}>
                <span className="text-white font-bold text-sm">{item.num}</span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            data-testid="hero-cta-services"
            onClick={() => scrollToSection('#services')}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-900/30"
            style={{ backgroundColor: '#E65100' }}
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            data-testid="hero-cta-about"
            onClick={() => scrollToSection('#about')}
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full text-white transition-all duration-300 hover:bg-white/15"
            style={{ border: '2px solid rgba(165,214,167,0.5)' }}
          >
            Learn About Us
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        data-testid="hero-scroll-btn"
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'rgba(165,214,167,0.7)' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection
