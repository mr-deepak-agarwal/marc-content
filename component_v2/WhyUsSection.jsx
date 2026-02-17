'use client'

import React from 'react'
import { Award, Zap, UserCheck, Briefcase, TrendingUp } from 'lucide-react'

const icons = [Award, Zap, UserCheck, Briefcase, TrendingUp]

const WhyUsSection = () => {
  const whyMarcPoints = [
    { id:1, title:'Glocal Perspective',      description:'Deep India expertise with a global outlook.' },
    { id:2, title:'Custom-Built Solutions',   description:'No off-the-shelf answers.' },
    { id:3, title:'Senior Involvement',       description:'Partner-led engagements.' },
    { id:4, title:'Insight to Impact',        description:'Strategy backed by execution support.' },
    { id:5, title:'15 Years of Cross-Industry Experience',
             description:'In all sectors including Manufacturing, F&B, Hospitality, Retail, Pharma, Real estate, Education.' },
  ]

  return (
    <section id="why-us" data-testid="why-us-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: heading + SVG globe ── */}
          <div>
            <h2
              data-testid="why-us-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
              style={{ color: '#1B5E20' }}
            >
              Why MARC
            </h2>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#33691E' }}>
              We are advisors who stay close until growth is not just achieved, but compounded.
            </p>

            {/* ── CUSTOM SVG: glocal globe ── */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#1B5E20' }}>
              <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" className="w-full">
                <defs>
                  <radialGradient id="wBg" cx="52%" cy="48%" r="62%">
                    <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
                  </radialGradient>
                  <radialGradient id="wGlobe" cx="42%" cy="38%" r="55%">
                    <stop offset="0%" stopColor="#43A047" /><stop offset="65%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
                  </radialGradient>
                  <radialGradient id="wOrange" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E65100" stopOpacity="0.3" /><stop offset="100%" stopColor="#E65100" stopOpacity="0" />
                  </radialGradient>
                  <filter id="wBlur"><feGaussianBlur stdDeviation="14" /></filter>
                  <filter id="wNode">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <clipPath id="wClip"><circle cx="420" cy="150" r="133" /></clipPath>
                </defs>

                <rect width="600" height="300" fill="url(#wBg)" />
                <pattern id="wDots" x="0" y="0" width="38" height="38" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#4CAF50" opacity="0.18" />
                </pattern>
                <rect width="600" height="300" fill="url(#wDots)" />

                {/* globe glows */}
                <circle cx="420" cy="150" r="158" fill="url(#wOrange)" filter="url(#wBlur)" />

                {/* globe body */}
                <circle cx="420" cy="150" r="133" fill="url(#wGlobe)" stroke="#81C784" strokeWidth="1" strokeOpacity="0.35" />

                {/* lat/long */}
                <g clipPath="url(#wClip)" stroke="#4CAF50" strokeWidth="0.6" strokeOpacity="0.25" fill="none">
                  <ellipse cx="420" cy="150" rx="133" ry="32" />
                  <ellipse cx="420" cy="150" rx="133" ry="72" />
                  <ellipse cx="420" cy="150" rx="133" ry="114" />
                  <ellipse cx="420" cy="150" rx="42" ry="133" />
                  <ellipse cx="420" cy="150" rx="94" ry="133" />
                  <line x1="287" y1="150" x2="553" y2="150" />
                  <line x1="420" y1="17" x2="420" y2="283" />
                </g>

                {/* landmasses */}
                <g clipPath="url(#wClip)" fill="#81C784" fillOpacity="0.35">
                  <polygon points="432,75 454,68 470,82 474,108 464,133 450,152 428,164 408,152 400,126 408,96 420,78" />
                  <ellipse cx="500" cy="108" rx="22" ry="32" transform="rotate(15,500,108)" />
                  <polygon points="396,70 418,62 424,84 414,100 394,92" />
                  <polygon points="374,102 394,94 404,116 402,144 386,158 370,144 366,120" />
                </g>

                {/* specular */}
                <ellipse cx="376" cy="94" rx="46" ry="30" fill="white" fillOpacity="0.045" />

                {/* connection lines */}
                <line x1="432" y1="114" x2="196" y2="84" stroke="#FF6D00" strokeWidth="1.5" strokeDasharray="4,3" strokeOpacity="0.6" />
                <line x1="397" y1="96" x2="136" y2="162" stroke="#FF6D00" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.45" />
                <line x1="420" y1="18" x2="290" y2="50" stroke="#A5D6A7" strokeWidth="0.9" strokeDasharray="3,4" strokeOpacity="0.35" />

                {/* globe nodes */}
                <circle cx="432" cy="114" r="7" fill="#FF6D00" filter="url(#wNode)" />
                <circle cx="432" cy="114" r="15" fill="#FF6D00" fillOpacity="0.2" />
                <circle cx="397" cy="96"  r="5.5" fill="#FF6D00" filter="url(#wNode)" />
                <circle cx="420" cy="18"  r="4.5" fill="#A5D6A7" filter="url(#wNode)" />

                {/* left panel nodes */}
                <circle cx="196" cy="84"  r="6"   fill="#FF6D00" filter="url(#wNode)" />
                <circle cx="196" cy="84"  r="14"  fill="#FF6D00" fillOpacity="0.16" />
                <text x="212" y="79"  fontFamily="sans-serif" fontSize="11" fill="#FF8A50" letterSpacing="2" fontWeight="700">INDIA</text>
                <text x="212" y="93"  fontFamily="sans-serif" fontSize="9" fill="#A5D6A7">500+ Projects</text>

                <circle cx="136" cy="162" r="5.5" fill="#FF6D00" filter="url(#wNode)" />
                <circle cx="136" cy="162" r="12"  fill="#FF6D00" fillOpacity="0.14" />
                <text x="152" y="157" fontFamily="sans-serif" fontSize="11" fill="#FF8A50" letterSpacing="2" fontWeight="700">GLOBAL</text>
                <text x="152" y="171" fontFamily="sans-serif" fontSize="9" fill="#A5D6A7">30+ Countries</text>

                <circle cx="290" cy="50"  r="4"   fill="#A5D6A7" />
                <text x="304" y="46"  fontFamily="sans-serif" fontSize="9.5" fill="#A5D6A7" fillOpacity="0.8" letterSpacing="1.5">PARTNERS</text>

                {/* bottom label */}
                <text x="50" y="288" fontFamily="sans-serif" fontSize="8" fill="#4CAF50" fillOpacity="0.6" letterSpacing="2">GLOCAL PERSPECTIVE · INDIA EXPERTISE · GLOBAL OUTLOOK</text>
              </svg>

              {/* gradient vignette bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-14" style={{ background: 'linear-gradient(to top, rgba(27,94,32,0.6), transparent)' }} />
            </div>
          </div>

          {/* ── RIGHT: feature cards ── */}
          <div className="grid gap-6">
            {whyMarcPoints.map((item, index) => {
              const Icon = icons[index]
              return (
                <div
                  key={item.id}
                  data-testid={`why-us-card-${index}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  style={{ border: '1.5px solid #C8E6C9' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#43A047'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#C8E6C9'}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: '#2E7D32' }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold mb-2 tracking-tight transition-colors"
                        style={{ color: '#1B5E20' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#E65100'}
                        onMouseLeave={e => e.currentTarget.style.color = '#1B5E20'}
                      >
                        {item.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: '#33691E' }}>{item.description}</p>
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
