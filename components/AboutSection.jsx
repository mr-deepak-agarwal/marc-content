'use client'

import React from 'react'
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Globe,
} from 'lucide-react'
import { aboutSection, stats } from '@/data/mock'
import { Button } from './ui/button'

const AboutSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" data-testid="about-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= STATS BAR ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-testid={`stat-card-${index}`}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#C2DDB4]/40 text-center group hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#4E9141] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-[#1D342F] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= CUSTOM SVG: ADVISORY NETWORK ================= */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1D342F]">
              <svg
                viewBox="0 0 600 500"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <defs>
                  <radialGradient id="aboutBg" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#2A5040" />
                    <stop offset="100%" stopColor="#0D1F16" />
                  </radialGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4E9141" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#4E9141" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="goldGlowAbout" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B45309" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
                  </radialGradient>
                  <filter id="nGlow">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="lgGlow">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>
                </defs>

                <rect width="600" height="500" fill="url(#aboutBg)" />

                {/* Dot grid */}
                <pattern id="aboutDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#4E9141" opacity="0.1" />
                </pattern>
                <rect width="600" height="500" fill="url(#aboutDots)" />

                {/* Center glow */}
                <circle cx="300" cy="250" r="160" fill="url(#centerGlow)" filter="url(#lgGlow)" />

                {/* ---- Spokes outward from center ---- */}
                <g stroke="#4E9141" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="4,4">
                  <line x1="300" y1="250" x2="150" y2="110" />
                  <line x1="300" y1="250" x2="450" y2="110" />
                  <line x1="300" y1="250" x2="100" y2="265" />
                  <line x1="300" y1="250" x2="500" y2="265" />
                  <line x1="300" y1="250" x2="155" y2="400" />
                  <line x1="300" y1="250" x2="445" y2="400" />
                  <line x1="300" y1="250" x2="300" y2="75" />
                </g>

                {/* ---- Outer orbit ring ---- */}
                <circle cx="300" cy="250" r="175" fill="none" stroke="#4E9141" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3,6" />
                <circle cx="300" cy="250" r="120" fill="none" stroke="#C2DDB4" strokeWidth="0.4" strokeOpacity="0.12" />

                {/* ---- Satellite capability nodes ---- */}
                {/* Growth Strategy */}
                <circle cx="150" cy="110" r="36" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <circle cx="150" cy="110" r="36" fill="url(#goldGlowAbout)" filter="url(#lgGlow)" />
                <text x="150" y="106" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Growth</text>
                <text x="150" y="118" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Strategy</text>

                {/* M&A */}
                <circle cx="450" cy="110" r="36" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <text x="450" y="106" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">M&amp;A</text>
                <text x="450" y="118" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Advisory</text>

                {/* Research */}
                <circle cx="100" cy="265" r="36" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <text x="100" y="261" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Market</text>
                <text x="100" y="273" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Research</text>

                {/* Finance */}
                <circle cx="500" cy="265" r="36" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <text x="500" y="261" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Financial</text>
                <text x="500" y="273" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Analytics</text>

                {/* India Entry */}
                <circle cx="155" cy="400" r="36" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <text x="155" y="396" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">India</text>
                <text x="155" y="408" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Entry</text>

                {/* Global */}
                <circle cx="445" cy="400" r="36" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <text x="445" y="396" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Global</text>
                <text x="445" y="408" fontFamily="sans-serif" fontSize="8.5" fill="#C2DDB4" textAnchor="middle">Expansion</text>

                {/* Top: Feasibility */}
                <circle cx="300" cy="75" r="30" fill="#1A3828" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" />
                <text x="300" y="71" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="middle">Feasibility</text>
                <text x="300" y="82" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="middle">Studies</text>

                {/* ---- Center MARC node ---- */}
                <circle cx="300" cy="250" r="68" fill="#0D1F16" stroke="#B45309" strokeWidth="1.5" strokeOpacity="0.7" />
                <circle cx="300" cy="250" r="60" fill="#1A3828" stroke="#4E9141" strokeWidth="0.6" strokeOpacity="0.3" />
                <circle cx="300" cy="250" r="68" fill="url(#goldGlowAbout)" filter="url(#lgGlow)" />
                <text x="300" y="244" fontFamily="Georgia,serif" fontSize="26" fill="#B45309" textAnchor="middle" fontStyle="italic">MARC</text>
                <text x="300" y="262" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="middle" letterSpacing="2">YOUR PARTNER</text>

                {/* Node dots on spokes */}
                <circle cx="150" cy="110" r="5" fill="#B45309" filter="url(#nGlow)" />
                <circle cx="450" cy="110" r="5" fill="#B45309" filter="url(#nGlow)" />
                <circle cx="100" cy="265" r="5" fill="#4E9141" filter="url(#nGlow)" />
                <circle cx="500" cy="265" r="5" fill="#4E9141" filter="url(#nGlow)" />
                <circle cx="155" cy="400" r="5" fill="#B45309" filter="url(#nGlow)" />
                <circle cx="445" cy="400" r="5" fill="#B45309" filter="url(#nGlow)" />
                <circle cx="300" cy="75" r="4" fill="#C2DDB4" filter="url(#nGlow)" />

                {/* Footer label */}
                <text x="300" y="488" fontFamily="sans-serif" fontSize="8" fill="#4E9141" textAnchor="middle" letterSpacing="2" fillOpacity="0.5">MARC GLOCAL · INTEGRATED ADVISORY</text>
              </svg>
            </div>

            {/* Floating Mission Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block border border-[#4E9141]/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#4E9141] rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#1D342F] tracking-tight">Our Mission</div>
                  <div className="text-sm text-[#4E9141]">Driving compounding growth</div>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#4E9141]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-[#5D9F94]/20 rounded-full blur-2xl" />
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div>
            <h2
              data-testid="about-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
            >
              Driving Compounding Growth
            </h2>

            <p className="text-lg text-[#47635D] mb-6 leading-relaxed">
              MARC is a growth advisory firm partnering with founders, leadership teams, and investors to build scalable, resilient businesses with a focus on compounding growth. With deep local expertise and global perspective, we empower Indian entrepreneurs to strengthen their businesses while guiding international firms with market entry and internationalization strategies. We also collaborate with international consultants, serving as a trusted outsourcing partner.
            </p>

            <p className="text-[#4E9141] font-semibold mb-8 text-lg tracking-tight">
              We don't offer templates. We design custom growth journeys grounded in data, context, and on ground realities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: TrendingUp, label: 'Strategic Growth' },
                { icon: Users, label: 'Expert Team' },
                { icon: Globe, label: 'Global Reach' },
                { icon: Target, label: 'Precise Insights' },
              ].map((item, index) => (
                <div
                  key={index}
                  data-testid={`feature-${index}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C2DDB4]/40 hover:bg-[#F7FFF5] hover:border-[#4E9141]/40 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 bg-[#4E9141] rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-[#1D342F]">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              data-testid="about-cta"
              onClick={() => scrollToSection('#contact')}
              className="bg-[#4E9141] hover:bg-[#3d7333] text-white px-8 py-6 text-lg shadow-lg shadow-[#4E9141]/25 transition-all duration-300 hover:shadow-[#4E9141]/40 hover:-translate-y-0.5 group"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
