'use client'

import React from 'react'
import { ArrowRight, Target, TrendingUp, Users, Globe } from 'lucide-react'
import { aboutSection, stats } from '@/data/mock'
import { Button } from './ui/button'

const AboutSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" data-testid="about-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ══ STATS BAR ══ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-testid={`stat-card-${index}`}
              className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{ border: '1.5px solid #C8E6C9' }}
            >
              <div
                className="text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: '#2E7D32' }}
              >
                {stat.value}
              </div>
              <div className="font-medium" style={{ color: '#1B5E20' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ══ MAIN CONTENT ══ */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── CUSTOM SVG: advisory constellation ── */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#1B5E20' }}>
              <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <defs>
                  <radialGradient id="aBg" cx="50%" cy="50%" r="62%">
                    <stop offset="0%" stopColor="#2E7D32" />
                    <stop offset="100%" stopColor="#1B5E20" />
                  </radialGradient>
                  <radialGradient id="aCtr" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#43A047" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#43A047" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="aOrg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E65100" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#E65100" stopOpacity="0" />
                  </radialGradient>
                  <filter id="aBlur"><feGaussianBlur stdDeviation="14" /></filter>
                  <filter id="aNode">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                <rect width="600" height="500" fill="url(#aBg)" />

                {/* dot grid */}
                <pattern id="aDots" x="0" y="0" width="38" height="38" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#4CAF50" opacity="0.18" />
                </pattern>
                <rect width="600" height="500" fill="url(#aDots)" />

                {/* center glow */}
                <circle cx="300" cy="250" r="160" fill="url(#aCtr)" filter="url(#aBlur)" />
                <circle cx="300" cy="250" r="90" fill="url(#aOrg)" filter="url(#aBlur)" />

                {/* orbit rings */}
                <circle cx="300" cy="250" r="178" fill="none" stroke="#4CAF50" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3,6" />
                <circle cx="300" cy="250" r="118" fill="none" stroke="#81C784" strokeWidth="0.4" strokeOpacity="0.15" />

                {/* spokes */}
                <g stroke="#4CAF50" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4,4">
                  <line x1="300" y1="250" x2="148" y2="108" />
                  <line x1="300" y1="250" x2="452" y2="108" />
                  <line x1="300" y1="250" x2="96" y2="262" />
                  <line x1="300" y1="250" x2="504" y2="262" />
                  <line x1="300" y1="250" x2="152" y2="402" />
                  <line x1="300" y1="250" x2="448" y2="402" />
                  <line x1="300" y1="250" x2="300" y2="72" />
                </g>

                {/* satellite nodes */}
                {[
                  { cx: 148, cy: 108, l1: 'Growth', l2: 'Strategy', col: '#E65100' },
                  { cx: 452, cy: 108, l1: 'M&A', l2: 'Advisory', col: '#E65100' },
                  { cx: 96,  cy: 262, l1: 'Market', l2: 'Research', col: '#43A047' },
                  { cx: 504, cy: 262, l1: 'Financial', l2: 'Analytics', col: '#43A047' },
                  { cx: 152, cy: 402, l1: 'India', l2: 'Entry', col: '#E65100' },
                  { cx: 448, cy: 402, l1: 'Global', l2: 'Expansion', col: '#E65100' },
                  { cx: 300, cy: 72,  l1: 'Feasibility', l2: 'Studies', col: '#43A047' },
                ].map((n, i) => (
                  <g key={i}>
                    <circle cx={n.cx} cy={n.cy} r={34} fill="#1B5E20" stroke={n.col} strokeWidth="1.5" strokeOpacity="0.55" />
                    <circle cx={n.cx} cy={n.cy} r={34} fill={n.col} fillOpacity="0.06" />
                    <text x={n.cx} y={n.cy - 3} fontFamily="sans-serif" fontSize="9" fill="#A5D6A7" textAnchor="middle">{n.l1}</text>
                    <text x={n.cx} y={n.cy + 10} fontFamily="sans-serif" fontSize="9" fill="#A5D6A7" textAnchor="middle">{n.l2}</text>
                    <circle cx={n.cx} cy={n.cy} r="5.5" fill={n.col} filter="url(#aNode)" />
                  </g>
                ))}

                {/* center MARC node */}
                <circle cx="300" cy="250" r="66" fill="#1B5E20" stroke="#E65100" strokeWidth="2" strokeOpacity="0.75" />
                <circle cx="300" cy="250" r="58" fill="#2E7D32" />
                <text x="300" y="243" fontFamily="Georgia,serif" fontSize="28" fill="#E65100" textAnchor="middle" fontStyle="italic">MARC</text>
                <text x="300" y="261" fontFamily="sans-serif" fontSize="8" fill="#A5D6A7" textAnchor="middle" letterSpacing="2.5">YOUR PARTNER</text>

                {/* footer */}
                <text x="300" y="487" fontFamily="sans-serif" fontSize="8" fill="#43A047" textAnchor="middle" letterSpacing="2" fillOpacity="0.55">MARC GLOCAL · INTEGRATED ADVISORY NETWORK</text>
              </svg>
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block"
              style={{ border: '1.5px solid rgba(46,125,50,0.2)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#2E7D32' }}>
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-base font-semibold" style={{ color: '#1B5E20' }}>Our Mission</div>
                  <div className="text-sm" style={{ color: '#2E7D32' }}>Driving compounding growth</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(46,125,50,0.2)' }} />
            <div className="absolute -bottom-4 -left-8 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(93,175,148,0.15)' }} />
          </div>

          {/* ── Content side ── */}
          <div>
            <h2
              data-testid="about-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
              style={{ color: '#1B5E20' }}
            >
              Driving Compounding Growth
            </h2>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#33691E' }}>
              MARC is a growth advisory firm partnering with founders, leadership teams, and investors to build scalable, resilient businesses with a focus on compounding growth. With deep local expertise and global perspective, we empower Indian entrepreneurs to strengthen their businesses while guiding international firms with market entry and internationalization strategies. We also collaborate with international consultants, serving as a trusted outsourcing partner.
            </p>

            <p className="font-semibold mb-8 text-lg tracking-tight" style={{ color: '#2E7D32' }}>
              We don't offer templates. We design custom growth journeys grounded in data, context, and on ground realities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: TrendingUp, label: 'Strategic Growth' },
                { icon: Users,      label: 'Expert Team' },
                { icon: Globe,      label: 'Global Reach' },
                { icon: Target,     label: 'Precise Insights' },
              ].map((item, index) => (
                <div
                  key={index}
                  data-testid={`feature-${index}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-colors"
                  style={{ border: '1.5px solid #C8E6C9' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2E7D32' }}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium" style={{ color: '#1B5E20' }}>{item.label}</span>
                </div>
              ))}
            </div>

            <button
              data-testid="about-cta"
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              style={{ backgroundColor: '#E65100' }}
            >
              Work With Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection