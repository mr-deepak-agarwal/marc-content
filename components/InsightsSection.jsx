'use client'

import React from 'react'
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'
import { insights } from '@/data/mock'

/* ─── Per-insight bespoke SVG backgrounds ─────────────────────────── */
const InsightIllustrations = [
  /* 0: FMCG Industry Overview — shelf/consumer goods silhouettes */
  () => (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="i0bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07100A" />
        </linearGradient>
        <filter id="i0gf"><feGaussianBlur stdDeviation="10" /></filter>
      </defs>
      <rect width="480" height="320" fill="url(#i0bg)" />
      <pattern id="id0" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="320" fill="url(#id0)" />
      {/* shelf lines */}
      <line x1="30" y1="220" x2="450" y2="220" stroke="#4E9141" strokeWidth="1.5" strokeOpacity="0.35" />
      <line x1="30" y1="270" x2="450" y2="270" stroke="#4E9141" strokeWidth="1.5" strokeOpacity="0.35" />
      {/* shelf supports */}
      <line x1="40" y1="80" x2="40" y2="280" stroke="#4E9141" strokeWidth="0.8" strokeOpacity="0.2" />
      <line x1="440" y1="80" x2="440" y2="280" stroke="#4E9141" strokeWidth="0.8" strokeOpacity="0.2" />
      {/* FMCG product silhouettes on shelf */}
      {/* Tall bottle */}
      <rect x="65" y="160" width="22" height="60" rx="3" fill="#B45309" fillOpacity="0.55" />
      <ellipse cx="76" cy="160" rx="11" ry="5" fill="#B45309" fillOpacity="0.7" />
      <rect x="72" y="147" width="8" height="13" rx="2" fill="#B45309" fillOpacity="0.4" />
      {/* Short wide box */}
      <rect x="100" y="185" width="38" height="35" rx="2" fill="#4E9141" fillOpacity="0.6" />
      <line x1="119" y1="185" x2="119" y2="220" stroke="#C2DDB4" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Cylinder tin */}
      <ellipse cx="170" cy="195" rx="16" ry="5" fill="#5D9F94" fillOpacity="0.6" />
      <rect x="154" y="195" width="32" height="25" fill="#5D9F94" fillOpacity="0.5" />
      <ellipse cx="170" cy="220" rx="16" ry="5" fill="#5D9F94" fillOpacity="0.5" />
      {/* Slim tall */}
      <rect x="205" y="170" width="18" height="50" rx="8" fill="#B45309" fillOpacity="0.45" />
      {/* Box big */}
      <rect x="238" y="180" width="45" height="40" rx="2" fill="#4E9141" fillOpacity="0.55" />
      <rect x="255" y="188" width="11" height="14" rx="1" fill="#C2DDB4" fillOpacity="0.2" />
      {/* Bottle 2 */}
      <rect x="298" y="168" width="20" height="52" rx="3" fill="#B45309" fillOpacity="0.5" />
      <rect x="303" y="158" width="10" height="10" rx="2" fill="#B45309" fillOpacity="0.35" />
      {/* Bag shape */}
      <ellipse cx="354" cy="205" rx="28" ry="18" fill="#4E9141" fillOpacity="0.45" />
      <line x1="338" y1="195" x2="348" y2="220" stroke="#C2DDB4" strokeWidth="0.5" strokeOpacity="0.25" />
      {/* Tall slim bottle */}
      <rect x="398" y="162" width="16" height="58" rx="4" fill="#5D9F94" fillOpacity="0.55" />
      {/* Second shelf products */}
      <rect x="65" y="238" width="50" height="32" rx="2" fill="#4E9141" fillOpacity="0.4" />
      <rect x="128" y="242" width="28" height="28" rx="2" fill="#B45309" fillOpacity="0.4" />
      <ellipse cx="190" cy="255" rx="20" ry="15" fill="#5D9F94" fillOpacity="0.4" />
      <rect x="220" y="240" width="40" height="30" rx="2" fill="#4E9141" fillOpacity="0.4" />
      <rect x="275" y="245" width="22" height="25" rx="3" fill="#B45309" fillOpacity="0.4" />
      <rect x="315" y="238" width="35" height="32" rx="2" fill="#4E9141" fillOpacity="0.4" />
      <rect x="365" y="242" width="25" height="28" rx="3" fill="#5D9F94" fillOpacity="0.4" />
      <rect x="405" y="240" width="28" height="30" rx="2" fill="#B45309" fillOpacity="0.4" />
      {/* glow from bottom */}
      <ellipse cx="240" cy="300" rx="200" ry="60" fill="#4E9141" fillOpacity="0.06" filter="url(#i0gf)" />
      {/* title area */}
      <rect x="0" y="0" width="480" height="120" fill="#0D1F16" fillOpacity="0.6" />
      <text x="30" y="52" fontFamily="Georgia,serif" fontSize="20" fill="#C2DDB4" fontWeight="300">FMCG Industry</text>
      <text x="30" y="75" fontFamily="Georgia,serif" fontSize="20" fill="#B45309" fontStyle="italic">Overview</text>
      <line x1="30" y1="90" width="50" height="1" stroke="#B45309" strokeWidth="0.8" strokeOpacity="0.5" x2="90" y2="90" />
      <text x="30" y="108" fontFamily="sans-serif" fontSize="8" fill="#5D9F94" letterSpacing="1.5">INDUSTRY REPORT · 2025</text>
    </svg>
  ),

  /* 1: Q-commerce Impact — delivery speed visual */
  () => (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="i1bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A2E38" />
          <stop offset="100%" stopColor="#071018" />
        </linearGradient>
        <linearGradient id="speedLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4E9141" stopOpacity="0" />
          <stop offset="40%" stopColor="#4E9141" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <filter id="i1gf"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="i1glow">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="480" height="320" fill="url(#i1bg)" />
      <pattern id="id1" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.08" />
      </pattern>
      <rect width="480" height="320" fill="url(#id1)" />
      {/* Speed metric arc */}
      <circle cx="340" cy="180" r="110" fill="none" stroke="#1A3828" strokeWidth="14" />
      <circle cx="340" cy="180" r="110" fill="none" stroke="url(#speedLine)" strokeWidth="14"
        strokeDasharray="450" strokeDashoffset="100" strokeLinecap="round"
        transform="rotate(-210,340,180)" />
      <circle cx="340" cy="180" r="110" fill="none" stroke="#B45309" strokeWidth="3" fillOpacity="0"
        strokeDasharray="12,350" strokeDashoffset="-340" strokeLinecap="round"
        transform="rotate(-210,340,180)" filter="url(#i1glow)" />
      {/* Center speed label */}
      <text x="340" y="170" fontFamily="Georgia,serif" fontSize="42" fill="#4E9141" textAnchor="middle" fontWeight="400">10</text>
      <text x="340" y="190" fontFamily="sans-serif" fontSize="11" fill="#C2DDB4" textAnchor="middle" letterSpacing="0.5">mins avg delivery</text>
      <text x="340" y="208" fontFamily="sans-serif" fontSize="8.5" fill="#5D9F94" textAnchor="middle">Q-COMMERCE</text>
      {/* glow under arc */}
      <ellipse cx="340" cy="280" rx="120" ry="40" fill="#4E9141" fillOpacity="0.06" filter="url(#i1gf)" />
      {/* Bar chart comparison: Traditional vs Q-commerce */}
      <text x="30" y="105" fontFamily="sans-serif" fontSize="8" fill="#5D9F94" letterSpacing="1">DELIVERY TIME COMPARISON</text>
      <rect x="30" y="114" width="130" height="12" rx="2" fill="#1A3828" />
      <rect x="30" y="114" width="130" height="12" rx="2" fill="#B45309" fillOpacity="0.55" />
      <text x="166" y="124" fontFamily="sans-serif" fontSize="8" fill="#B45309">Traditional: 2–3 days</text>
      <rect x="30" y="132" width="22" height="12" rx="2" fill="#4E9141" fillOpacity="0.7" />
      <rect x="30" y="132" width="130" height="12" rx="2" fill="#1A3828" />
      <rect x="30" y="132" width="22" height="12" rx="2" fill="#4E9141" fillOpacity="0.7" />
      <text x="166" y="142" fontFamily="sans-serif" fontSize="8" fill="#4E9141">Q-commerce: 10 min</text>
      {/* Growth stats */}
      <text x="30" y="175" fontFamily="Georgia,serif" fontSize="32" fill="#B45309">↑ 68%</text>
      <text x="30" y="194" fontFamily="sans-serif" fontSize="8.5" fill="#5D9F94" letterSpacing="1">FMCG Q-COMMERCE SHARE YoY</text>
      {/* title */}
      <text x="30" y="38" fontFamily="Georgia,serif" fontSize="18" fill="#C2DDB4">Q-commerce Impact</text>
      <text x="30" y="58" fontFamily="Georgia,serif" fontSize="18" fill="#4E9141" fontStyle="italic">on FMCG Sales</text>
      <text x="30" y="78" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" letterSpacing="1.5">MARKET ANALYSIS · 2025</text>
    </svg>
  ),

  /* 2: India Logistics Market — supply chain network */
  () => (
    <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="i2bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07100A" />
        </linearGradient>
        <filter id="i2gf"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="i2node">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="i2arrow" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <polygon points="0,0 5,2.5 0,5" fill="#4E9141" fillOpacity="0.6" />
        </marker>
        <marker id="i2arrowB" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <polygon points="0,0 5,2.5 0,5" fill="#B45309" fillOpacity="0.6" />
        </marker>
      </defs>
      <rect width="480" height="320" fill="url(#i2bg)" />
      <pattern id="id2" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="320" fill="url(#id2)" />
      {/* logistics nodes */}
      {[
        { x: 80, y: 160, label: 'Warehouse', sub: 'Origin', col: '#4E9141', r: 32 },
        { x: 200, y: 105, label: 'Rail / Air', sub: 'Transit Hub', col: '#5D9F94', r: 28 },
        { x: 200, y: 215, label: 'Road', sub: 'Last Mile', col: '#B45309', r: 28 },
        { x: 330, y: 155, label: 'Regional', sub: 'DC', col: '#4E9141', r: 28 },
        { x: 430, y: 105, label: 'Retail', sub: 'Outlet', col: '#5D9F94', r: 24 },
        { x: 430, y: 215, label: 'Customer', sub: 'Delivery', col: '#B45309', r: 24 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 8} fill={n.col} fillOpacity="0.04" filter="url(#i2gf)" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#1A3828" stroke={n.col} strokeWidth="1.2" strokeOpacity="0.5" />
          <text x={n.x} y={n.y - 2} fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="middle">{n.label}</text>
          <text x={n.x} y={n.y + 10} fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle">{n.sub}</text>
          <circle cx={n.x} cy={n.y} r={5} fill={n.col} filter="url(#i2node)" />
        </g>
      ))}
      {/* flow lines */}
      <line x1="112" y1="148" x2="170" y2="115" stroke="#4E9141" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.5" markerEnd="url(#i2arrow)" />
      <line x1="112" y1="172" x2="170" y2="208" stroke="#B45309" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.5" markerEnd="url(#i2arrowB)" />
      <line x1="228" y1="115" x2="300" y2="148" stroke="#4E9141" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.45" markerEnd="url(#i2arrow)" />
      <line x1="228" y1="215" x2="300" y2="165" stroke="#B45309" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.45" markerEnd="url(#i2arrowB)" />
      <line x1="358" y1="145" x2="404" y2="115" stroke="#4E9141" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.4" markerEnd="url(#i2arrow)" />
      <line x1="358" y1="166" x2="404" y2="207" stroke="#B45309" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.4" markerEnd="url(#i2arrowB)" />
      {/* market size callout */}
      <rect x="30" y="245" width="180" height="42" rx="4" fill="#4E9141" fillOpacity="0.08" stroke="#4E9141" strokeWidth="0.75" strokeOpacity="0.3" />
      <text x="40" y="263" fontFamily="Georgia,serif" fontSize="22" fill="#B45309">$360B</text>
      <text x="40" y="279" fontFamily="sans-serif" fontSize="8" fill="#5D9F94" letterSpacing="1">INDIA LOGISTICS MARKET 2025</text>
      {/* title */}
      <text x="30" y="35" fontFamily="Georgia,serif" fontSize="18" fill="#C2DDB4">India's Logistics</text>
      <text x="30" y="56" fontFamily="Georgia,serif" fontSize="18" fill="#4E9141" fontStyle="italic">Market Report</text>
      <text x="30" y="75" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" letterSpacing="1.5">RESEARCH · JUNE 2025</text>
    </svg>
  ),
]

const InsightsSection = () => {
  return (
    <section id="insights" data-testid="insights-section" className="py-24 bg-[#F0F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <h2
              data-testid="insights-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-4 leading-[1.1] tracking-tight"
            >
              Opinions, Analytics &amp; Thoughts
            </h2>
            <p className="text-lg text-[#47635D] max-w-xl leading-relaxed">
              Our team of professionals share insights from industry opinions, economic updates to strategic perspectives.
            </p>
          </div>

          <button
            data-testid="insights-view-all-desktop"
            className="hidden lg:inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:text-[#3d7333] transition-colors group mt-6 lg:mt-0"
          >
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* ================= INSIGHTS GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.id}
              data-testid={`insight-card-${index}`}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden h-[320px] bg-[#1D342F] shadow-md border border-[#C2DDB4]/20 hover:shadow-xl hover:border-[#4E9141]/30 transition-all duration-500">
                {/* Custom SVG illustration */}
                <div className="absolute inset-0">
                  {InsightIllustrations[index % 3]?.()}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/95 via-[#1D342F]/30 to-transparent group-hover:from-[#1D342F]/98 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#4E9141] text-white text-xs font-semibold">
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1 text-white/70 text-sm">
                      <Calendar className="w-4 h-4" />
                      {insight.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-[#C2DDB4] tracking-tight leading-snug">
                    {insight.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[#C2DDB4] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#B45309]">
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
            className="inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:text-[#3d7333] transition-colors group"
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
