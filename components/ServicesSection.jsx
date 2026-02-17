'use client'

import React, { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '@/data/mock'

/* ─── Bespoke SVG illustrations for each service card ─────────────── */
const ServiceIllustrations = {
  0: () => (
    /* Growth Strategy & GTM — compounding bar chart */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="s0bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#0D1F16" />
        </linearGradient>
        <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4E9141" />
          <stop offset="100%" stopColor="#2d5426" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B45309" stopOpacity="0" />
          <stop offset="25%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="gf0"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="nGlow0">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="480" height="350" fill="url(#s0bg)" />
      {/* dot grid */}
      <pattern id="d0" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.9" fill="#4E9141" opacity="0.1" />
      </pattern>
      <rect width="480" height="350" fill="url(#d0)" />
      {/* glow */}
      <ellipse cx="240" cy="320" rx="220" ry="100" fill="#4E9141" fillOpacity="0.07" filter="url(#gf0)" />
      {/* axes */}
      <line x1="60" y1="40" x2="60" y2="285" stroke="#2A5040" strokeWidth="1" />
      <line x1="60" y1="285" x2="440" y2="285" stroke="#2A5040" strokeWidth="1" />
      {/* grid */}
      <g stroke="#1A3828" strokeWidth="0.5" strokeDasharray="3,4">
        <line x1="60" y1="240" x2="440" y2="240" />
        <line x1="60" y1="195" x2="440" y2="195" />
        <line x1="60" y1="148" x2="440" y2="148" />
        <line x1="60" y1="100" x2="440" y2="100" />
      </g>
      {/* bars — compounding growth */}
      <rect x="80" y="235" width="35" height="50" rx="2" fill="url(#barGrad)" fillOpacity="0.4" />
      <rect x="132" y="218" width="35" height="67" rx="2" fill="url(#barGrad)" fillOpacity="0.52" />
      <rect x="184" y="196" width="35" height="89" rx="2" fill="url(#barGrad)" fillOpacity="0.65" />
      <rect x="236" y="168" width="35" height="117" rx="2" fill="url(#barGrad)" fillOpacity="0.78" />
      <rect x="288" y="133" width="35" height="152" rx="2" fill="url(#barGrad)" fillOpacity="0.9" />
      <rect x="340" y="90" width="35" height="195" rx="2" fill="url(#barGrad)" />
      <rect x="392" y="58" width="35" height="227" rx="2" fill="#4E9141" />
      {/* trend line */}
      <polyline
        points="97,232 149,215 201,193 253,165 305,128 357,86 409,54"
        fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round"
      />
      {/* peak node */}
      <circle cx="409" cy="54" r="6" fill="#B45309" filter="url(#nGlow0)" />
      <circle cx="409" cy="54" r="12" fill="#B45309" fillOpacity="0.18" />
      {/* callout */}
      <rect x="360" y="28" width="100" height="20" rx="2" fill="#B45309" fillOpacity="0.12" stroke="#B45309" strokeWidth="0.75" strokeOpacity="0.4" />
      <text x="410" y="41" fontFamily="sans-serif" fontSize="9.5" fill="#f59e0b" textAnchor="middle" fontWeight="600">↑ 318% Growth</text>
      {/* x labels */}
      <g fontFamily="sans-serif" fontSize="8" fill="#5D9F94" textAnchor="middle">
        {['Y1','Y2','Y3','Y4','Y5','Y6','Y7'].map((y,i) =>
          <text key={y} x={97 + i*52} y="300">{y}</text>
        )}
      </g>
      {/* title */}
      <text x="60" y="22" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4" fontWeight="400" letterSpacing="0.3">Compounding Growth</text>
    </svg>
  ),

  1: () => (
    /* India Entry & Expansion — gateway arch */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="s1bg" cx="50%" cy="60%" r="65%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07120E" />
        </radialGradient>
        <radialGradient id="doorLight" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#B45309" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
        </radialGradient>
        <filter id="gf1s"><feGaussianBlur stdDeviation="14" /></filter>
        <filter id="archGlow">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="480" height="350" fill="url(#s1bg)" />
      <pattern id="d1" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.08" />
      </pattern>
      <rect width="480" height="350" fill="url(#d1)" />
      {/* door glow */}
      <ellipse cx="240" cy="180" rx="160" ry="140" fill="url(#doorLight)" filter="url(#gf1s)" />
      {/* pillars */}
      <rect x="80" y="50" width="28" height="270" rx="0" fill="#1A3828" />
      <rect x="372" y="50" width="28" height="270" rx="0" fill="#1A3828" />
      {/* pillar bands */}
      <rect x="80" y="50" width="28" height="6" fill="#B45309" fillOpacity="0.45" />
      <rect x="80" y="62" width="28" height="2.5" fill="#B45309" fillOpacity="0.2" />
      <rect x="80" y="314" width="28" height="6" fill="#B45309" fillOpacity="0.35" />
      <rect x="372" y="50" width="28" height="6" fill="#B45309" fillOpacity="0.45" />
      <rect x="372" y="62" width="28" height="2.5" fill="#B45309" fillOpacity="0.2" />
      <rect x="372" y="314" width="28" height="6" fill="#B45309" fillOpacity="0.35" />
      {/* arch */}
      <path d="M 80 135 Q 240 28 400 135" fill="none" stroke="#4E9141" strokeWidth="1.5" strokeOpacity="0.5" filter="url(#archGlow)" />
      <path d="M 90 135 Q 240 40 390 135" fill="none" stroke="#C2DDB4" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* arch fill */}
      <path d="M 108 135 Q 240 45 372 135 L 372 320 L 108 320 Z" fill="#071510" fillOpacity="0.85" />
      {/* light portal */}
      <rect x="196" y="160" width="88" height="160" rx="2" fill="#B45309" fillOpacity="0.06" />
      <rect x="196" y="160" width="88" height="160" rx="2" fill="none" stroke="#B45309" strokeWidth="1" strokeOpacity="0.45" />
      {/* golden light rays */}
      <polygon points="240,160 160,320 320,320" fill="#B45309" fillOpacity="0.05" filter="url(#gf1s)" />
      {/* door handle */}
      <circle cx="268" cy="244" r="3.5" fill="#B45309" fillOpacity="0.7" />
      {/* India map silhouette (faint) */}
      <g transform="translate(200,72) scale(0.48)" fillOpacity="0.1" fill="#4E9141">
        <polygon points="120,0 150,10 160,40 180,50 175,90 160,120 140,160 120,200 100,210 85,180 70,150 65,110 75,70 90,40" />
      </g>
      {/* floor line */}
      <line x1="108" y1="320" x2="372" y2="320" stroke="#B45309" strokeWidth="0.5" strokeOpacity="0.2" />
      {/* top label */}
      <text x="30" y="24" fontFamily="Georgia,serif" fontSize="16" fill="#C2DDB4" letterSpacing="0.3">India Entry &amp; Expansion</text>
      {/* bottom caption */}
      <text x="240" y="342" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1.5">MARKET ENTRY · LOCALISATION · LAUNCH</text>
    </svg>
  ),

  2: () => (
    /* Expansion for Indian Firms — world map with arrows */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="s2bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07100A" />
        </linearGradient>
        <filter id="gf2s"><feGaussianBlur stdDeviation="10" /></filter>
        <filter id="nGlow2">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="globeGrad2" cx="42%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#2A5040" />
          <stop offset="100%" stopColor="#0D1F16" />
        </radialGradient>
      </defs>
      <rect width="480" height="350" fill="url(#s2bg)" />
      <pattern id="d2" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="350" fill="url(#d2)" />
      {/* mini globe */}
      <circle cx="240" cy="185" r="130" fill="url(#globeGrad2)" />
      <circle cx="240" cy="185" r="130" fill="none" stroke="#4E9141" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* lat / long lines */}
      <g clipPath="url(#gc2)" stroke="#4E9141" strokeWidth="0.5" strokeOpacity="0.18" fill="none">
        <ellipse cx="240" cy="185" rx="130" ry="32" />
        <ellipse cx="240" cy="185" rx="130" ry="70" />
        <ellipse cx="240" cy="185" rx="130" ry="110" />
        <ellipse cx="240" cy="185" rx="42" ry="130" />
        <ellipse cx="240" cy="185" rx="90" ry="130" />
        <line x1="110" y1="185" x2="370" y2="185" />
        <line x1="240" y1="55" x2="240" y2="315" />
      </g>
      <clipPath id="gc2"><circle cx="240" cy="185" r="130" /></clipPath>
      {/* landmasses */}
      <g clipPath="url(#gc2)" fill="#4E9141" fillOpacity="0.22">
        <polygon points="255,120 278,115 295,128 300,155 292,180 278,198 258,210 240,198 232,174 238,144" />
        <ellipse cx="318" cy="150" rx="22" ry="32" transform="rotate(15,318,150)" />
        <polygon points="216,108 240,100 248,122 238,140 216,132" />
        <polygon points="185,148 205,140 215,160 212,188 196,200 182,188 176,165" />
      </g>
      {/* glow behind globe */}
      <circle cx="240" cy="185" r="150" fill="#4E9141" fillOpacity="0.04" filter="url(#gf2s)" />
      {/* India origin node */}
      <circle cx="258" cy="162" r="6" fill="#B45309" filter="url(#nGlow2)" />
      <circle cx="258" cy="162" r="13" fill="#B45309" fillOpacity="0.18" />
      {/* arrows out from India to world regions */}
      <line x1="258" y1="162" x2="170" y2="115" stroke="#B45309" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.6" />
      <line x1="258" y1="162" x2="340" y2="120" stroke="#B45309" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.6" />
      <line x1="258" y1="162" x2="340" y2="245" stroke="#B45309" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.45" />
      <line x1="258" y1="162" x2="158" y2="240" stroke="#B45309" strokeWidth="1" strokeDasharray="4,3" strokeOpacity="0.45" />
      {/* destination nodes */}
      <circle cx="170" cy="115" r="5" fill="#C2DDB4" filter="url(#nGlow2)" />
      <circle cx="340" cy="120" r="5" fill="#C2DDB4" filter="url(#nGlow2)" />
      <circle cx="340" cy="245" r="4.5" fill="#C2DDB4" filter="url(#nGlow2)" />
      <circle cx="158" cy="240" r="4.5" fill="#C2DDB4" filter="url(#nGlow2)" />
      {/* labels */}
      <text x="148" y="110" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="end">Europe</text>
      <text x="352" y="116" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4">SE Asia</text>
      <text x="352" y="248" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4">Africa</text>
      <text x="146" y="244" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="end">Americas</text>
      <text x="240" y="24" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4" textAnchor="middle">Expansion for Indian Firms</text>
      <text x="240" y="342" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1.5">MARKET SELECTION · ENTRY STRATEGY · EXECUTION</text>
    </svg>
  ),

  3: () => (
    /* Customer & Market Intelligence — radar chart */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="s3bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07100A" />
        </linearGradient>
        <filter id="gf3s"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <rect width="480" height="350" fill="url(#s3bg)" />
      <pattern id="d3" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="350" fill="url(#d3)" />
      <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4">Market Intelligence</text>
      <text x="30" y="40" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" letterSpacing="1.5">MULTI-DIMENSIONAL CATEGORY ANALYSIS</text>
      {/* Radar */}
      <g transform="translate(240,195)">
        {/* rings */}
        <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="#2A5040" strokeWidth="0.8" />
        <polygon points="0,-88 76,-44 76,44 0,88 -76,44 -76,-44" fill="none" stroke="#2A5040" strokeWidth="0.8" />
        <polygon points="0,-56 48,-28 48,28 0,56 -48,28 -48,-28" fill="none" stroke="#2A5040" strokeWidth="0.8" />
        <polygon points="0,-26 22,-13 22,13 0,26 -22,13 -22,-13" fill="none" stroke="#2A5040" strokeWidth="0.8" />
        {/* spokes */}
        <line x1="0" y1="0" x2="0" y2="-120" stroke="#2A5040" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="104" y2="-60" stroke="#2A5040" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="104" y2="60" stroke="#2A5040" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="0" y2="120" stroke="#2A5040" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="-104" y2="60" stroke="#2A5040" strokeWidth="0.8" />
        <line x1="0" y1="0" x2="-104" y2="-60" stroke="#2A5040" strokeWidth="0.8" />
        {/* data polygon */}
        <polygon
          points="0,-100 88,-38 84,52 0,76 -70,44 -90,-47"
          fill="#B45309" fillOpacity="0.1" stroke="#B45309" strokeWidth="1.5" strokeOpacity="0.7"
        />
        {/* data dots */}
        {[[0,-100],[88,-38],[84,52],[0,76],[-70,44],[-90,-47]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="4.5" fill="#B45309" />
        ))}
        <circle cx="0" cy="0" r="5" fill="#4E9141" fillOpacity="0.6" />
        <circle cx="0" cy="0" r="11" fill="#4E9141" fillOpacity="0.08" />
      </g>
      {/* axis labels */}
      <g fontFamily="sans-serif" fontSize="9" fill="#5D9F94" textAnchor="middle">
        <text x="240" y="60">Market Size</text>
        <text x="370" y="135">Competitive</text>
        <text x="368" y="280">Consumer</text>
        <text x="240" y="338">Regulatory</text>
        <text x="110" y="280">Pricing</text>
        <text x="112" y="135">Channel</text>
      </g>
      {/* % labels */}
      <g fontFamily="Georgia,serif" fontSize="11" fill="#B45309" textAnchor="middle">
        <text x="240" y="82">85%</text>
        <text x="344" y="152">73%</text>
        <text x="340" y="262">69%</text>
        <text x="240" y="286">61%</text>
        <text x="136" y="256">58%</text>
        <text x="140" y="148">72%</text>
      </g>
    </svg>
  ),

  4: () => (
    /* Feasibility Studies — product-market fit circles */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="s4bg" cx="40%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#1C3A28" />
          <stop offset="100%" stopColor="#07100A" />
        </radialGradient>
        <filter id="gf4s"><feGaussianBlur stdDeviation="12" /></filter>
        <filter id="nGlow4">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="480" height="350" fill="url(#s4bg)" />
      <pattern id="d4" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="350" fill="url(#d4)" />
      <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4">Feasibility Studies</text>
      {/* Three overlapping circles */}
      <circle cx="200" cy="195" r="100" fill="#4E9141" fillOpacity="0.1" stroke="#4E9141" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="290" cy="195" r="100" fill="#B45309" fillOpacity="0.08" stroke="#B45309" strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="245" cy="120" r="90" fill="#5D9F94" fillOpacity="0.08" stroke="#5D9F94" strokeWidth="1.2" strokeOpacity="0.35" />
      {/* center overlap glow */}
      <ellipse cx="245" cy="172" rx="40" ry="35" fill="#C2DDB4" fillOpacity="0.08" filter="url(#gf4s)" />
      {/* center label */}
      <text x="245" y="165" fontFamily="Georgia,serif" fontSize="13" fill="#C2DDB4" textAnchor="middle" fontStyle="italic">Product–</text>
      <text x="245" y="180" fontFamily="Georgia,serif" fontSize="13" fill="#C2DDB4" textAnchor="middle" fontStyle="italic">Market Fit</text>
      {/* circle labels */}
      <text x="155" y="215" fontFamily="sans-serif" fontSize="9" fill="#4E9141" textAnchor="middle">Product</text>
      <text x="155" y="227" fontFamily="sans-serif" fontSize="9" fill="#4E9141" textAnchor="middle">Viability</text>
      <text x="335" y="215" fontFamily="sans-serif" fontSize="9" fill="#B45309" textAnchor="middle">Market</text>
      <text x="335" y="227" fontFamily="sans-serif" fontSize="9" fill="#B45309" textAnchor="middle">Demand</text>
      <text x="245" y="88" fontFamily="sans-serif" fontSize="9" fill="#5D9F94" textAnchor="middle">Competitive</text>
      <text x="245" y="100" fontFamily="sans-serif" fontSize="9" fill="#5D9F94" textAnchor="middle">Landscape</text>
      <text x="240" y="338" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1.5">VIABILITY · FIT · FEASIBILITY ASSESSMENT</text>
    </svg>
  ),

  5: () => (
    /* Financial Assessment — P&L waterfall */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="s5bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07100A" />
        </linearGradient>
        <filter id="gf5s"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <rect width="480" height="350" fill="url(#s5bg)" />
      <pattern id="d5" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="350" fill="url(#d5)" />
      <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4">Financial Assessment</text>
      <text x="30" y="40" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" letterSpacing="1.5">PROFITABILITY · BENCHMARKING · ANALYTICS</text>
      {/* waterfall bars */}
      <g>
        {/* Revenue */}
        <rect x="52" y="100" width="44" height="160" rx="2" fill="#4E9141" fillOpacity="0.8" />
        <text x="74" y="95" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="middle">Revenue</text>
        <text x="74" y="275" fontFamily="sans-serif" fontSize="8" fill="#C2DDB4" textAnchor="middle">100%</text>
        {/* COGS (negative) */}
        <rect x="112" y="100" width="44" height="72" rx="2" fill="#B45309" fillOpacity="0.6" />
        <text x="134" y="95" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">COGS</text>
        {/* Gross Profit connector */}
        <rect x="172" y="172" width="44" height="88" rx="2" fill="#4E9141" fillOpacity="0.65" />
        <text x="194" y="95" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">Gross</text>
        <text x="194" y="105" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">Profit</text>
        {/* OpEx */}
        <rect x="232" y="172" width="44" height="44" rx="2" fill="#B45309" fillOpacity="0.55" />
        <text x="254" y="95" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">OpEx</text>
        {/* EBITDA */}
        <rect x="292" y="216" width="44" height="44" rx="2" fill="#4E9141" fillOpacity="0.6" />
        <text x="314" y="95" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">EBITDA</text>
        {/* Net */}
        <rect x="352" y="226" width="44" height="34" rx="2" fill="#4E9141" />
        <text x="374" y="95" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">Net</text>
        <text x="374" y="105" fontFamily="sans-serif" fontSize="7.5" fill="#C2DDB4" textAnchor="middle">Profit</text>
      </g>
      {/* baseline */}
      <line x1="40" y1="260" x2="440" y2="260" stroke="#2A5040" strokeWidth="0.8" />
      {/* % labels inside bars */}
      <text x="74" y="188" fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">100%</text>
      <text x="134" y="142" fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">−45%</text>
      <text x="194" y="222" fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">55%</text>
      <text x="254" y="200" fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">−22%</text>
      <text x="314" y="244" fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">33%</text>
      <text x="374" y="248" fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">21%</text>
      <text x="240" y="340" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1.5">P&amp;L · BENCHMARKING · STRATEGIC DECISIONS</text>
    </svg>
  ),

  6: () => (
    /* Process & System Optimization — flowchart */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="s6bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3828" />
          <stop offset="100%" stopColor="#07100A" />
        </linearGradient>
        <filter id="nGlow6">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <marker id="arrow6" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0,0 6,3 0,6" fill="#4E9141" fillOpacity="0.7" />
        </marker>
      </defs>
      <rect width="480" height="350" fill="url(#s6bg)" />
      <pattern id="d6" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="350" fill="url(#d6)" />
      <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4">Process Optimization</text>
      {/* flowchart nodes */}
      {[
        { x: 80, y: 100, label: 'Process\nAudit', col: '#B45309' },
        { x: 220, y: 100, label: 'SOP\nReview', col: '#4E9141' },
        { x: 360, y: 100, label: 'System\nMapping', col: '#5D9F94' },
        { x: 80, y: 220, label: 'Gap\nAnalysis', col: '#4E9141' },
        { x: 220, y: 220, label: 'Redesign\n& Optimise', col: '#B45309' },
        { x: 360, y: 220, label: 'Implement\n& Track', col: '#4E9141' },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x - 50} y={n.y - 30} width="100" height="60" rx="10" fill="#1A3828" stroke={n.col} strokeWidth="1.2" strokeOpacity="0.6" />
          <rect x={n.x - 50} y={n.y - 30} width="100" height="60" rx="10" fill={n.col} fillOpacity="0.05" />
          <circle cx={n.x - 38} cy={n.y - 18} r="4" fill={n.col} fillOpacity="0.7" filter="url(#nGlow6)" />
          {n.label.split('\n').map((line, li) => (
            <text key={li} x={n.x} y={n.y + li * 14 - 4} fontFamily="sans-serif" fontSize="9.5" fill="#C2DDB4" textAnchor="middle">{line}</text>
          ))}
        </g>
      ))}
      {/* arrows row 1 */}
      <line x1="130" y1="100" x2="170" y2="100" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      <line x1="270" y1="100" x2="310" y2="100" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      {/* arrows row 2 */}
      <line x1="130" y1="220" x2="170" y2="220" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      <line x1="270" y1="220" x2="310" y2="220" stroke="#4E9141" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      {/* arrows col down */}
      <line x1="80" y1="130" x2="80" y2="190" stroke="#B45309" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      <line x1="220" y1="130" x2="220" y2="190" stroke="#B45309" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      <line x1="360" y1="130" x2="360" y2="190" stroke="#B45309" strokeWidth="1" strokeOpacity="0.5" markerEnd="url(#arrow6)" />
      <text x="240" y="338" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1.5">AUDIT · SOP REVIEW · SYSTEM OPTIMISATION</text>
    </svg>
  ),

  7: () => (
    /* M&A & Strategic Partnerships — Venn deal diagram */
    <svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="s7bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#1C3A28" />
          <stop offset="100%" stopColor="#07100A" />
        </radialGradient>
        <filter id="gf7s"><feGaussianBlur stdDeviation="12" /></filter>
        <filter id="nGlow7">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="480" height="350" fill="url(#s7bg)" />
      <pattern id="d7" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#4E9141" opacity="0.09" />
      </pattern>
      <rect width="480" height="350" fill="url(#d7)" />
      <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#C2DDB4">M&amp;A Advisory</text>
      {/* Entity A */}
      <circle cx="175" cy="190" r="100" fill="#0D1F16" stroke="#4E9141" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="175" cy="190" r="100" fill="#4E9141" fillOpacity="0.05" />
      {/* Entity B */}
      <circle cx="305" cy="190" r="100" fill="#0D1F16" stroke="#B45309" strokeWidth="1.2" strokeOpacity="0.5" />
      <circle cx="305" cy="190" r="100" fill="#B45309" fillOpacity="0.05" />
      {/* outer glows */}
      <circle cx="175" cy="190" r="115" fill="#4E9141" fillOpacity="0.04" filter="url(#gf7s)" />
      <circle cx="305" cy="190" r="115" fill="#B45309" fillOpacity="0.04" filter="url(#gf7s)" />
      {/* overlap synergy zone */}
      <path d="M 224 120 Q 240 108 256 120 Q 278 148 278 190 Q 278 232 256 260 Q 240 272 224 260 Q 202 232 202 190 Q 202 148 224 120 Z"
        fill="#C2DDB4" fillOpacity="0.06" stroke="#C2DDB4" strokeWidth="0.8" strokeOpacity="0.25" />
      {/* synergy label */}
      <text x="240" y="183" fontFamily="Georgia,serif" fontSize="12" fill="#C2DDB4" textAnchor="middle" fontStyle="italic">Synergy</text>
      <text x="240" y="197" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1">MARC</text>
      {/* entity labels */}
      <text x="138" y="183" fontFamily="Georgia,serif" fontSize="22" fill="#4E9141" textAnchor="middle" fontWeight="300">A</text>
      <text x="138" y="200" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1">ACQUIRER</text>
      <text x="344" y="183" fontFamily="Georgia,serif" fontSize="22" fill="#B45309" textAnchor="middle" fontWeight="300">B</text>
      <text x="344" y="200" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1">TARGET</text>
      {/* connecting arrows */}
      <line x1="220" y1="190" x2="262" y2="190" stroke="#C2DDB4" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4,3" />
      <polygon points="262,186 270,190 262,194" fill="#C2DDB4" fillOpacity="0.5" />
      <polygon points="220,186 212,190 220,194" fill="#C2DDB4" fillOpacity="0.5" />
      {/* detail labels */}
      <text x="100" y="240" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" textAnchor="middle">Due Diligence</text>
      <text x="100" y="252" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" textAnchor="middle">Valuation</text>
      <text x="382" y="240" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" textAnchor="middle">Growth Thesis</text>
      <text x="382" y="252" fontFamily="sans-serif" fontSize="7.5" fill="#5D9F94" textAnchor="middle">Synergy Model</text>
      <text x="240" y="338" fontFamily="sans-serif" fontSize="7" fill="#5D9F94" textAnchor="middle" letterSpacing="1.5">DEAL SCREENING · DILIGENCE · VALUE CREATION</text>
    </svg>
  ),
}

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section id="services" data-testid="services-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-16">
          <h2
            data-testid="services-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
          >
            Our Core Advisory Areas
          </h2>
          <p className="text-lg text-[#47635D] leading-relaxed mb-4">
            We advise organisations at critical growth moments—market entry, expansion, transformation, and scale.
          </p>
          <p className="text-[#4E9141] font-semibold text-lg">
            Our role: clarify direction, unlock growth levers, and support execution.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-testid={`service-card-${index}`}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Custom SVG Illustration */}
              <div className="relative h-[350px] bg-[#1D342F]">
                {ServiceIllustrations[index % 8]?.() ?? ServiceIllustrations[0]()}

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredService === index
                      ? 'bg-[#4E9141]/80'
                      : 'bg-gradient-to-t from-[#1D342F]/90 via-[#1D342F]/40 to-transparent'
                  }`}
                />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div
                  className={`transform transition-all duration-500 ${
                    hoveredService === index ? '-translate-y-4' : 'translate-y-0'
                  }`}
                >
                  {/* Index */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C2DDB4] text-sm font-semibold tracking-tight">
                      0{index + 1}
                    </span>
                    <span className="w-8 h-px bg-[#C2DDB4]" />
                  </div>

                  {/* Service title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug tracking-tight">
                    {service.title}
                  </h3>

                  <p
                    className={`text-white/90 leading-relaxed transition-all duration-500 ${
                      hoveredService === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                    } overflow-hidden`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                    hoveredService === index ? 'bg-[#B45309] scale-110' : ''
                  }`}
                >
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      hoveredService === index ? 'text-white rotate-45' : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-12 text-center">
          <button
            data-testid="services-view-all"
            className="inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:text-[#3d7333] transition-colors group"
          >
            View All Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
