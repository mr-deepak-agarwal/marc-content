'use client'

import React from 'react'
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'
import { insights } from '@/data/mock'

const INSIGHT_SVGS = [
  /* 0 – FMCG Overview */
  <svg key={0} viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="i0bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <filter id="i0gf"><feGaussianBlur stdDeviation="10" /></filter>
    </defs>
    <rect width="480" height="320" fill="url(#i0bg)" />
    <pattern id="ip0" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="320" fill="url(#ip0)" />
    {/* shelf lines */}
    <line x1="28" y1="222" x2="452" y2="222" stroke="#43A047" strokeWidth="2" strokeOpacity="0.45" />
    <line x1="28" y1="272" x2="452" y2="272" stroke="#43A047" strokeWidth="2" strokeOpacity="0.35" />
    <line x1="38" y1="80" x2="38" y2="282" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.22" />
    <line x1="442" y1="80" x2="442" y2="282" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.22" />
    {/* shelf 1 products */}
    <rect x="62" y="162" width="22" height="60" rx="3" fill="#E65100" fillOpacity="0.65" />
    <ellipse cx="73" cy="162" rx="11" ry="5" fill="#E65100" fillOpacity="0.8" />
    <rect x="70" y="148" width="8" height="14" rx="2" fill="#E65100" fillOpacity="0.45" />
    <rect x="98" y="186" width="40" height="36" rx="2" fill="#43A047" fillOpacity="0.65" />
    <line x1="118" y1="186" x2="118" y2="222" stroke="#A5D6A7" strokeWidth="0.6" strokeOpacity="0.35" />
    <ellipse cx="168" cy="197" rx="16" ry="5" fill="#81C784" fillOpacity="0.7" />
    <rect x="152" y="197" width="32" height="25" fill="#81C784" fillOpacity="0.55" />
    <ellipse cx="168" cy="222" rx="16" ry="5" fill="#81C784" fillOpacity="0.5" />
    <rect x="204" y="170" width="18" height="52" rx="8" fill="#FF6D00" fillOpacity="0.55" />
    <rect x="237" y="183" width="46" height="39" rx="2" fill="#43A047" fillOpacity="0.6" />
    <rect x="255" y="191" width="11" height="14" rx="1" fill="#A5D6A7" fillOpacity="0.22" />
    <rect x="297" y="170" width="20" height="52" rx="3" fill="#E65100" fillOpacity="0.6" />
    <rect x="302" y="160" width="10" height="10" rx="2" fill="#E65100" fillOpacity="0.4" />
    <ellipse cx="352" cy="206" rx="28" ry="18" fill="#43A047" fillOpacity="0.55" />
    <rect x="398" y="164" width="16" height="58" rx="4" fill="#81C784" fillOpacity="0.6" />
    {/* shelf 2 */}
    <rect x="62" y="240" width="50" height="32" rx="2" fill="#43A047" fillOpacity="0.45" />
    <rect x="126" y="244" width="28" height="28" rx="2" fill="#E65100" fillOpacity="0.45" />
    <ellipse cx="188" cy="256" rx="20" ry="16" fill="#81C784" fillOpacity="0.45" />
    <rect x="218" y="241" width="40" height="31" rx="2" fill="#43A047" fillOpacity="0.45" />
    <rect x="272" y="246" width="22" height="26" rx="3" fill="#E65100" fillOpacity="0.45" />
    <rect x="314" y="240" width="36" height="32" rx="2" fill="#43A047" fillOpacity="0.45" />
    <rect x="364" y="244" width="25" height="28" rx="3" fill="#81C784" fillOpacity="0.45" />
    <rect x="404" y="242" width="28" height="30" rx="2" fill="#E65100" fillOpacity="0.45" />
    <ellipse cx="240" cy="300" rx="200" ry="55" fill="#43A047" fillOpacity="0.06" filter="url(#i0gf)" />
    {/* title overlay */}
    <rect x="0" y="0" width="480" height="122" fill="#1B5E20" fillOpacity="0.62" />
    <text x="30" y="50" fontFamily="Georgia,serif" fontSize="21" fill="#A5D6A7" fontWeight="300">FMCG Industry</text>
    <text x="30" y="75" fontFamily="Georgia,serif" fontSize="21" fill="#FF8A50" fontStyle="italic">Overview</text>
    <line x1="30" y1="90" x2="92" y2="90" stroke="#E65100" strokeWidth="1" strokeOpacity="0.6" />
    <text x="30" y="110" fontFamily="sans-serif" fontSize="8.5" fill="#81C784" letterSpacing="1.5">INDUSTRY REPORT · 2025</text>
  </svg>,

  /* 1 – Q-commerce */
  <svg key={1} viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="i1bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <linearGradient id="i1arc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#43A047" /><stop offset="70%" stopColor="#4CAF50" /><stop offset="100%" stopColor="#FF6D00" />
      </linearGradient>
      <filter id="i1gf"><feGaussianBlur stdDeviation="10" /></filter>
      <filter id="i1glow">
        <feGaussianBlur stdDeviation="5" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="480" height="320" fill="url(#i1bg)" />
    <pattern id="ip1" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="320" fill="url(#ip1)" />
    {/* speed arc */}
    <circle cx="338" cy="180" r="108" fill="none" stroke="#2E7D32" strokeWidth="16" strokeOpacity="0.7" />
    <circle cx="338" cy="180" r="108" fill="none" stroke="url(#i1arc)" strokeWidth="16"
      strokeDasharray="452" strokeDashoffset="100" strokeLinecap="round"
      transform="rotate(-210,338,180)" />
    <circle cx="338" cy="180" r="108" fill="none" stroke="#FF6D00" strokeWidth="3"
      strokeDasharray="12,358" strokeDashoffset="-340" strokeLinecap="round"
      transform="rotate(-210,338,180)" filter="url(#i1glow)" />
    {/* center */}
    <text x="338" y="170" fontFamily="Georgia,serif" fontSize="44" fill="#43A047" textAnchor="middle">10</text>
    <text x="338" y="192" fontFamily="sans-serif" fontSize="11.5" fill="#A5D6A7" textAnchor="middle">mins avg delivery</text>
    <text x="338" y="210" fontFamily="sans-serif" fontSize="8.5" fill="#81C784" textAnchor="middle">Q-COMMERCE</text>
    <ellipse cx="338" cy="278" rx="118" ry="38" fill="#43A047" fillOpacity="0.06" filter="url(#i1gf)" />
    {/* bars */}
    <text x="30" y="104" fontFamily="sans-serif" fontSize="8" fill="#81C784" letterSpacing="1">DELIVERY TIME COMPARISON</text>
    <rect x="30" y="113" width="128" height="13" rx="2" fill="#E65100" fillOpacity="0.55" />
    <text x="164" y="124" fontFamily="sans-serif" fontSize="8" fill="#FF8A50">Traditional: 2–3 days</text>
    <rect x="30" y="132" width="22" height="13" rx="2" fill="#43A047" fillOpacity="0.8" />
    <rect x="30" y="132" width="128" height="13" rx="2" fill="#43A047" fillOpacity="0.15" />
    <rect x="30" y="132" width="22" height="13" rx="2" fill="#43A047" />
    <text x="164" y="143" fontFamily="sans-serif" fontSize="8" fill="#81C784">Q-commerce: 10 min</text>
    <text x="30" y="178" fontFamily="Georgia,serif" fontSize="34" fill="#FF6D00">↑ 68%</text>
    <text x="30" y="198" fontFamily="sans-serif" fontSize="8.5" fill="#81C784" letterSpacing="1">FMCG Q-COMMERCE SHARE YoY</text>
    {/* title */}
    <text x="30" y="36" fontFamily="Georgia,serif" fontSize="18" fill="#A5D6A7">Q-commerce Impact</text>
    <text x="30" y="58" fontFamily="Georgia,serif" fontSize="18" fill="#FF8A50" fontStyle="italic">on FMCG Sales</text>
    <text x="30" y="77" fontFamily="sans-serif" fontSize="7.5" fill="#81C784" letterSpacing="1.5">MARKET ANALYSIS · 2025</text>
  </svg>,

  /* 2 – India Logistics */
  <svg key={2} viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="i2bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <filter id="i2gf"><feGaussianBlur stdDeviation="10" /></filter>
      <filter id="i2n">
        <feGaussianBlur stdDeviation="5" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <marker id="i2a"  markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
        <polygon points="0,0 5,2.5 0,5" fill="#43A047" fillOpacity="0.7" />
      </marker>
      <marker id="i2aO" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
        <polygon points="0,0 5,2.5 0,5" fill="#E65100" fillOpacity="0.7" />
      </marker>
    </defs>
    <rect width="480" height="320" fill="url(#i2bg)" />
    <pattern id="ip2" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="320" fill="url(#ip2)" />
    {/* nodes */}
    {[
      { x:78,  y:162, l:'Warehouse', s:'Origin',    col:'#43A047', r:32 },
      { x:198, y:106, l:'Rail/Air',  s:'Transit',   col:'#81C784', r:28 },
      { x:198, y:216, l:'Road',      s:'Last Mile', col:'#E65100', r:28 },
      { x:328, y:156, l:'Regional',  s:'DC',        col:'#43A047', r:28 },
      { x:428, y:106, l:'Retail',    s:'Outlet',    col:'#81C784', r:24 },
      { x:428, y:216, l:'Customer',  s:'Delivery',  col:'#E65100', r:24 },
    ].map((n,i) => (
      <g key={i}>
        <circle cx={n.x} cy={n.y} r={n.r+9} fill={n.col} fillOpacity="0.04" filter="url(#i2gf)" />
        <circle cx={n.x} cy={n.y} r={n.r} fill="#1B5E20" stroke={n.col} strokeWidth="1.5" strokeOpacity="0.55" />
        <text x={n.x} y={n.y-3} fontFamily="sans-serif" fontSize="8.5" fill="#A5D6A7" textAnchor="middle">{n.l}</text>
        <text x={n.x} y={n.y+10} fontFamily="sans-serif" fontSize="7.5" fill="#81C784" textAnchor="middle">{n.s}</text>
        <circle cx={n.x} cy={n.y} r="5.5" fill={n.col} filter="url(#i2n)" />
      </g>
    ))}
    <line x1="110" y1="148" x2="168" y2="115" stroke="#43A047" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.55" markerEnd="url(#i2a)" />
    <line x1="110" y1="174" x2="168" y2="208" stroke="#E65100" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.55" markerEnd="url(#i2aO)" />
    <line x1="226" y1="115" x2="298" y2="148" stroke="#43A047" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.45" markerEnd="url(#i2a)" />
    <line x1="226" y1="216" x2="298" y2="165" stroke="#E65100" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.45" markerEnd="url(#i2aO)" />
    <line x1="356" y1="146" x2="402" y2="115" stroke="#43A047" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.4" markerEnd="url(#i2a)" />
    <line x1="356" y1="167" x2="402" y2="208" stroke="#E65100" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.4" markerEnd="url(#i2aO)" />
    {/* stat callout */}
    <rect x="28" y="248" width="186" height="44" rx="4" fill="#E65100" fillOpacity="0.1" stroke="#E65100" strokeWidth="0.8" strokeOpacity="0.35" />
    <text x="40" y="267" fontFamily="Georgia,serif" fontSize="24" fill="#FF6D00">$360B</text>
    <text x="40" y="283" fontFamily="sans-serif" fontSize="8" fill="#81C784" letterSpacing="1">INDIA LOGISTICS MARKET 2025</text>
    {/* title */}
    <text x="30" y="34" fontFamily="Georgia,serif" fontSize="18" fill="#A5D6A7">India's Logistics</text>
    <text x="30" y="56" fontFamily="Georgia,serif" fontSize="18" fill="#FF8A50" fontStyle="italic">Market Report</text>
    <text x="30" y="75" fontFamily="sans-serif" fontSize="7.5" fill="#81C784" letterSpacing="1.5">RESEARCH · JUNE 2025</text>
  </svg>,
]

const InsightsSection = () => {
  return (
    <section id="insights" data-testid="insights-section" className="py-24 bg-[#F0F8F6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <h2
              data-testid="insights-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-[1.1] tracking-tight"
              style={{ color: '#1B5E20' }}
            >
              Opinions, Analytics &amp; Thoughts
            </h2>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#33691E' }}>
              Our team of professionals share insights from industry opinions, economic updates to strategic perspectives.
            </p>
          </div>
          <button
            data-testid="insights-view-all-desktop"
            className="hidden lg:inline-flex items-center gap-2 font-semibold text-lg transition-colors group mt-6 lg:mt-0"
            style={{ color: '#2E7D32' }}
          >
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.id}
              data-testid={`insight-card-${index}`}
              className="group cursor-pointer"
            >
              <div
                className="relative rounded-2xl overflow-hidden h-[320px] shadow-md transition-all duration-500 hover:shadow-xl"
                style={{ backgroundColor: '#1B5E20', border: '1.5px solid #C8E6C9' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#43A047'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#C8E6C9'}
              >
                {/* SVG */}
                <div className="absolute inset-0">
                  {INSIGHT_SVGS[index % INSIGHT_SVGS.length]}
                </div>

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(27,94,32,0.95) 0%, rgba(27,94,32,0.3) 50%, transparent 100%)',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-white text-xs font-semibold"
                      style={{ backgroundColor: '#2E7D32' }}
                    >
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm" style={{ color: 'rgba(165,214,167,0.8)' }}>
                      <Calendar className="w-4 h-4" />
                      {insight.date}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3 tracking-tight leading-snug transition-colors group-hover:text-[#A5D6A7]"
                  >
                    {insight.title}
                  </h3>

                  <div
                    className="flex items-center gap-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: '#A5D6A7' }}
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover arrow — orange */}
                <div
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: '#E65100' }}
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-8 text-center">
          <button
            data-testid="insights-view-all-mobile"
            className="inline-flex items-center gap-2 font-semibold text-lg transition-colors group"
            style={{ color: '#2E7D32' }}
          >
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
