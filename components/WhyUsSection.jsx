'use client'

import React from 'react'
import { Award, Zap, UserCheck, Briefcase, TrendingUp } from 'lucide-react'

const icons = [Award, Zap, UserCheck, Briefcase, TrendingUp]

const WhyUsSection = () => {
  const whyMarcPoints = [
    {
      id: 1,
      title: 'Glocal Perspective',
      description: 'Deep India expertise with a global outlook.',
    },
    {
      id: 2,
      title: 'Custom-Built Solutions',
      description: 'No off-the-shelf answers.',
    },
    {
      id: 3,
      title: 'Senior Involvement',
      description: 'Partner-led engagements.',
    },
    {
      id: 4,
      title: 'Insight to Impact',
      description: 'Strategy backed by execution support.',
    },
    {
      id: 5,
      title: '15 Years of Cross-Industry Experience',
      description:
        'In all sectors including Manufacturing, F&B, Hospitality, Retail, Pharma, Real estate, Education.',
    },
  ]

  return (
    <section id="why-us" data-testid="why-us-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2
              data-testid="why-us-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
            >
              Why MARC
            </h2>

            <p className="text-lg text-[#47635D] mb-8 leading-relaxed">
              We are advisors who stay close until growth is not just achieved, but compounded.
            </p>

            {/* ── Custom SVG: Glocal Perspective globe ── */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#1D342F]">
              <svg
                viewBox="0 0 600 300"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <defs>
                  <radialGradient id="wyBg" cx="52%" cy="48%" r="60%">
                    <stop offset="0%" stopColor="#2A5040" />
                    <stop offset="100%" stopColor="#0D1F16" />
                  </radialGradient>
                  <radialGradient id="wyGlobe" cx="42%" cy="38%" r="55%">
                    <stop offset="0%" stopColor="#2A5040" />
                    <stop offset="70%" stopColor="#173320" />
                    <stop offset="100%" stopColor="#0A1A0E" />
                  </radialGradient>
                  <radialGradient id="wyGold" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B45309" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
                  </radialGradient>
                  <filter id="wyGlow"><feGaussianBlur stdDeviation="12" /></filter>
                  <filter id="wyNodeGlow">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <clipPath id="wyClip"><circle cx="420" cy="150" r="135" /></clipPath>
                </defs>

                <rect width="600" height="300" fill="url(#wyBg)" />
                {/* dot grid */}
                <pattern id="wyDots" x="0" y="0" width="38" height="38" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.9" fill="#4E9141" opacity="0.1" />
                </pattern>
                <rect width="600" height="300" fill="url(#wyDots)" />

                {/* globe glow */}
                <circle cx="420" cy="150" r="155" fill="url(#wyGold)" filter="url(#wyGlow)" />

                {/* globe body */}
                <circle cx="420" cy="150" r="135" fill="url(#wyGlobe)" stroke="#4E9141" strokeWidth="0.8" strokeOpacity="0.3" />

                {/* lat/long lines */}
                <g clipPath="url(#wyClip)" stroke="#4E9141" strokeWidth="0.5" strokeOpacity="0.18" fill="none">
                  <ellipse cx="420" cy="150" rx="135" ry="32" />
                  <ellipse cx="420" cy="150" rx="135" ry="72" />
                  <ellipse cx="420" cy="150" rx="135" ry="115" />
                  <ellipse cx="420" cy="150" rx="42" ry="135" />
                  <ellipse cx="420" cy="150" rx="95" ry="135" />
                  <line x1="285" y1="150" x2="555" y2="150" />
                  <line x1="420" y1="15" x2="420" y2="285" />
                </g>

                {/* landmasses */}
                <g clipPath="url(#wyClip)" fill="#4E9141" fillOpacity="0.25">
                  <polygon points="432,75 452,68 468,82 472,108 462,133 447,150 428,162 408,150 400,125 408,97 418,78" />
                  <ellipse cx="500" cy="107" rx="22" ry="32" transform="rotate(15,500,107)" />
                  <polygon points="396,68 418,62 424,82 414,98 394,90" />
                  <polygon points="375,100 394,93 404,113 402,142 386,155 372,143 366,118" />
                </g>

                {/* specular highlight */}
                <ellipse cx="375" cy="95" rx="45" ry="30" fill="white" fillOpacity="0.035" />

                {/* connection lines */}
                <line x1="432" y1="115" x2="195" y2="85" stroke="#B45309" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.5" />
                <line x1="397" y1="95" x2="135" y2="160" stroke="#B45309" strokeWidth="0.8" strokeDasharray="4,3" strokeOpacity="0.35" />
                <line x1="420" y1="17" x2="290" y2="50" stroke="#C2DDB4" strokeWidth="0.7" strokeDasharray="3,4" strokeOpacity="0.3" />

                {/* globe nodes */}
                <circle cx="432" cy="115" r="6" fill="#B45309" filter="url(#wyNodeGlow)" />
                <circle cx="432" cy="115" r="13" fill="#B45309" fillOpacity="0.18" />
                <circle cx="397" cy="95" r="4.5" fill="#B45309" filter="url(#wyNodeGlow)" />
                <circle cx="420" cy="18" r="3.5" fill="#C2DDB4" filter="url(#wyNodeGlow)" />

                {/* left panel nodes */}
                <circle cx="195" cy="85" r="5" fill="#B45309" filter="url(#wyNodeGlow)" />
                <text x="210" y="81" fontFamily="sans-serif" fontSize="10" fill="#B45309" letterSpacing="1" fontWeight="600">INDIA</text>
                <text x="210" y="94" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" fillOpacity="0.7">500+ Projects</text>

                <circle cx="135" cy="160" r="4.5" fill="#B45309" filter="url(#wyNodeGlow)" />
                <text x="148" y="156" fontFamily="sans-serif" fontSize="10" fill="#B45309" letterSpacing="1" fontWeight="600">GLOBAL</text>
                <text x="148" y="169" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" fillOpacity="0.7">30+ Countries</text>

                <circle cx="290" cy="50" r="3.5" fill="#C2DDB4" fillOpacity="0.8" />
                <text x="303" y="46" fontFamily="sans-serif" fontSize="9" fill="#C2DDB4" fillOpacity="0.75" letterSpacing="1">PARTNERS</text>

                {/* bottom label */}
                <text x="50" y="285" fontFamily="sans-serif" fontSize="8" fill="#4E9141" fillOpacity="0.5" letterSpacing="2">GLOCAL PERSPECTIVE · INDIA EXPERTISE · GLOBAL OUTLOOK</text>
              </svg>

              {/* overlay gradient bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1D342F]/60 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT FEATURES GRID ================= */}
          <div className="grid gap-6">
            {whyMarcPoints.map((item, index) => {
              const Icon = icons[index]
              return (
                <div
                  key={item.id}
                  data-testid={`why-us-card-${index}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-[#C2DDB4]/40 hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#4E9141] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1D342F] mb-2 tracking-tight group-hover:text-[#4E9141] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#47635D] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
