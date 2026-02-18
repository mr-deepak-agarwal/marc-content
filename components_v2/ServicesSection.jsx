'use client'

import React, { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '@/data/mock'

/* ── Vivid MARC palette ──────────────────────────────────────────────
   #2E7D32  logo green      #43A047  mid green
   #81C784  light green     #A5D6A7  pale green (text on dark)
   #1B5E20  deep bg green   #E65100  vivid orange
   #FF6D00  bright orange   #FF8A50  light orange accent
   ─────────────────────────────────────────────────────────────────── */

const SVG_ILLUSTRATIONS = [
  /* 0 – Growth Strategy: compounding bar chart */
  <svg key={0} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s0bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <linearGradient id="s0bar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#43A047" /><stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
      <linearGradient id="s0line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF6D00" stopOpacity="0" />
        <stop offset="25%" stopColor="#FF6D00" /><stop offset="100%" stopColor="#FF8A50" />
      </linearGradient>
      <filter id="s0glow">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <filter id="s0bg2"><feGaussianBlur stdDeviation="10" /></filter>
    </defs>
    <rect width="480" height="350" fill="url(#s0bg)" />
    <pattern id="p0" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.18" />
    </pattern>
    <rect width="480" height="350" fill="url(#p0)" />
    <ellipse cx="240" cy="330" rx="220" ry="80" fill="#43A047" fillOpacity="0.06" filter="url(#s0bg2)" />
    <line x1="58" y1="40" x2="58" y2="288" stroke="#43A047" strokeWidth="1" strokeOpacity="0.35" />
    <line x1="58" y1="288" x2="442" y2="288" stroke="#43A047" strokeWidth="1" strokeOpacity="0.35" />
    <g stroke="#2E7D32" strokeWidth="0.5" strokeDasharray="3,4" strokeOpacity="0.5">
      <line x1="58" y1="244" x2="442" y2="244" /><line x1="58" y1="198" x2="442" y2="198" />
      <line x1="58" y1="150" x2="442" y2="150" /><line x1="58" y1="100" x2="442" y2="100" />
    </g>
    <rect x="78" y="238" width="34" height="50" rx="2" fill="url(#s0bar)" fillOpacity="0.38" />
    <rect x="130" y="220" width="34" height="68" rx="2" fill="url(#s0bar)" fillOpacity="0.5" />
    <rect x="182" y="197" width="34" height="91" rx="2" fill="url(#s0bar)" fillOpacity="0.63" />
    <rect x="234" y="167" width="34" height="121" rx="2" fill="url(#s0bar)" fillOpacity="0.76" />
    <rect x="286" y="130" width="34" height="158" rx="2" fill="url(#s0bar)" fillOpacity="0.88" />
    <rect x="338" y="88" width="34" height="200" rx="2" fill="url(#s0bar)" fillOpacity="0.96" />
    <rect x="390" y="57" width="34" height="231" rx="2" fill="#43A047" />
    <polyline points="95,234 147,216 199,193 251,163 303,125 355,83 407,52" fill="none" stroke="url(#s0line)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="407" cy="52" r="6" fill="#FF6D00" filter="url(#s0glow)" />
    <circle cx="407" cy="52" r="13" fill="#FF6D00" fillOpacity="0.2" />
    <rect x="356" y="26" width="104" height="20" rx="2" fill="#FF6D00" fillOpacity="0.12" stroke="#FF6D00" strokeWidth="0.75" strokeOpacity="0.45" />
    <text x="408" y="39" fontFamily="sans-serif" fontSize="9.5" fill="#FF8A50" textAnchor="middle" fontWeight="700">↑ 318% Growth</text>
    <g fontFamily="sans-serif" fontSize="8.5" fill="#81C784" textAnchor="middle">
      {['Y1','Y2','Y3','Y4','Y5','Y6','Y7'].map((y,i) => <text key={y} x={95+i*52} y="304">{y}</text>)}
    </g>
    <text x="58" y="22" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7" fontWeight="300">Compounding Growth</text>
  </svg>,

  /* 1 – India Entry: gateway arch */
  <svg key={1} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="s1bg" cx="50%" cy="60%" r="65%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </radialGradient>
      <radialGradient id="s1door" cx="50%" cy="35%" r="55%">
        <stop offset="0%" stopColor="#FF6D00" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#FF6D00" stopOpacity="0" />
      </radialGradient>
      <filter id="s1gf"><feGaussianBlur stdDeviation="16" /></filter>
      <filter id="s1ag">
        <feGaussianBlur stdDeviation="5" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="480" height="350" fill="url(#s1bg)" />
    <pattern id="p1" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p1)" />
    <ellipse cx="240" cy="185" rx="165" ry="145" fill="url(#s1door)" filter="url(#s1gf)" />
    <rect x="78" y="48" width="28" height="272" rx="0" fill="#1B5E20" />
    <rect x="374" y="48" width="28" height="272" rx="0" fill="#1B5E20" />
    <rect x="78" y="48" width="28" height="7" fill="#E65100" fillOpacity="0.55" />
    <rect x="78" y="61" width="28" height="3" fill="#E65100" fillOpacity="0.25" />
    <rect x="78" y="313" width="28" height="7" fill="#E65100" fillOpacity="0.4" />
    <rect x="374" y="48" width="28" height="7" fill="#E65100" fillOpacity="0.55" />
    <rect x="374" y="61" width="28" height="3" fill="#E65100" fillOpacity="0.25" />
    <rect x="374" y="313" width="28" height="7" fill="#E65100" fillOpacity="0.4" />
    <path d="M 78 138 Q 240 30 402 138" fill="none" stroke="#E65100" strokeWidth="2" strokeOpacity="0.6" filter="url(#s1ag)" />
    <path d="M 90 138 Q 240 42 390 138" fill="none" stroke="#A5D6A7" strokeWidth="0.6" strokeOpacity="0.25" />
    <path d="M 106 138 Q 240 50 374 138 L 374 320 L 106 320 Z" fill="#1B5E20" fillOpacity="0.85" />
    <rect x="194" y="162" width="92" height="158" rx="2" fill="#FF6D00" fillOpacity="0.07" />
    <rect x="194" y="162" width="92" height="158" rx="2" fill="none" stroke="#FF6D00" strokeWidth="1.2" strokeOpacity="0.5" />
    <polygon points="240,162 158,320 322,320" fill="#FF6D00" fillOpacity="0.05" filter="url(#s1gf)" />
    <circle cx="270" cy="245" r="4" fill="#E65100" fillOpacity="0.7" />
    <g transform="translate(204,75) scale(0.5)" fillOpacity="0.12" fill="#A5D6A7">
      <polygon points="120,0 150,10 160,40 180,50 175,90 160,120 140,160 120,200 100,210 85,180 70,150 65,110 75,70 90,40" />
    </g>
    <line x1="106" y1="320" x2="374" y2="320" stroke="#E65100" strokeWidth="0.6" strokeOpacity="0.25" />
    <text x="30" y="22" fontFamily="Georgia,serif" fontSize="16" fill="#A5D6A7" letterSpacing="0.3">India Entry &amp; Expansion</text>
    <text x="240" y="342" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1.5">MARKET ENTRY · LOCALISATION · LAUNCH</text>
  </svg>,

  /* 2 – Expansion for Indian Firms: globe with orange arrows */
  <svg key={2} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s2bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <radialGradient id="s2globe" cx="42%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#43A047" /><stop offset="65%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </radialGradient>
      <filter id="s2gf"><feGaussianBlur stdDeviation="10" /></filter>
      <filter id="s2n">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="480" height="350" fill="url(#s2bg)" />
    <pattern id="p2" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p2)" />
    <circle cx="240" cy="185" r="132" fill="url(#s2globe)" stroke="#81C784" strokeWidth="1" strokeOpacity="0.3" />
    <clipPath id="s2clip"><circle cx="240" cy="185" r="132" /></clipPath>
    <g clipPath="url(#s2clip)" stroke="#4CAF50" strokeWidth="0.7" strokeOpacity="0.22" fill="none">
      <ellipse cx="240" cy="185" rx="132" ry="32" />
      <ellipse cx="240" cy="185" rx="132" ry="72" />
      <ellipse cx="240" cy="185" rx="132" ry="114" />
      <ellipse cx="240" cy="185" rx="42" ry="132" />
      <ellipse cx="240" cy="185" rx="92" ry="132" />
      <line x1="108" y1="185" x2="372" y2="185" />
      <line x1="240" y1="53" x2="240" y2="317" />
    </g>
    <g clipPath="url(#s2clip)" fill="#81C784" fillOpacity="0.32">
      <polygon points="252,118 276,110 294,124 298,152 290,178 276,196 256,208 236,196 228,172 236,142 246,122" />
      <ellipse cx="318" cy="148" rx="22" ry="32" transform="rotate(15,318,148)" />
      <polygon points="214,104 238,96 244,118 234,136 212,128" />
      <polygon points="183,146 203,138 213,158 210,186 194,198 180,186 174,164" />
    </g>
    <circle cx="240" cy="185" r="150" fill="#E65100" fillOpacity="0.04" filter="url(#s2gf)" />
    {/* India origin */}
    <circle cx="256" cy="162" r="7" fill="#E65100" filter="url(#s2n)" />
    <circle cx="256" cy="162" r="15" fill="#E65100" fillOpacity="0.2" />
    {/* arrows to 4 regions */}
    <line x1="256" y1="162" x2="168" y2="112" stroke="#FF6D00" strokeWidth="1.5" strokeDasharray="4,3" strokeOpacity="0.65" />
    <line x1="256" y1="162" x2="338" y2="118" stroke="#FF6D00" strokeWidth="1.5" strokeDasharray="4,3" strokeOpacity="0.65" />
    <line x1="256" y1="162" x2="340" y2="244" stroke="#FF6D00" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.5" />
    <line x1="256" y1="162" x2="156" y2="238" stroke="#FF6D00" strokeWidth="1.2" strokeDasharray="4,3" strokeOpacity="0.5" />
    {[[168,112],[338,118],[340,244],[156,238]].map(([x,y],i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="5" fill="#A5D6A7" filter="url(#s2n)" />
        <circle cx={x} cy={y} r="11" fill="#A5D6A7" fillOpacity="0.18" />
      </g>
    ))}
    <g fontFamily="sans-serif" fontSize="8.5" fill="#A5D6A7">
      <text x="146" y="107" textAnchor="end">Europe</text>
      <text x="350" y="114">SE Asia</text>
      <text x="350" y="248">Africa</text>
      <text x="144" y="242" textAnchor="end">Americas</text>
    </g>
    <text x="240" y="22" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7" textAnchor="middle">Expansion for Indian Firms</text>
    <text x="240" y="342" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1.5">MARKET SELECTION · ENTRY STRATEGY · EXECUTION</text>
  </svg>,

  /* 3 – Market Intelligence: radar with orange data fill */
  <svg key={3} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s3bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
    </defs>
    <rect width="480" height="350" fill="url(#s3bg)" />
    <pattern id="p3" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p3)" />
    <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7">Market Intelligence</text>
    <text x="30" y="40" fontFamily="sans-serif" fontSize="7.5" fill="#81C784" letterSpacing="1.5">MULTI-DIMENSIONAL CATEGORY ANALYSIS</text>
    <g transform="translate(240,198)">
      <polygon points="0,-122 106,-61 106,61 0,122 -106,61 -106,-61" fill="none" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45" fill="none" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="0,-58 50,-29 50,29 0,58 -50,29 -50,-29" fill="none" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="0,-28 24,-14 24,14 0,28 -24,14 -24,-14" fill="none" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="0" y1="0" x2="0" y2="-122" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="0" y1="0" x2="106" y2="-61" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="0" y1="0" x2="106" y2="61" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="0" y1="0" x2="0" y2="122" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="0" y1="0" x2="-106" y2="61" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <line x1="0" y1="0" x2="-106" y2="-61" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.35" />
      <polygon points="0,-104 90,-40 86,54 0,78 -72,46 -92,-49" fill="#E65100" fillOpacity="0.12" stroke="#FF6D00" strokeWidth="1.8" strokeOpacity="0.75" />
      {[[0,-104],[90,-40],[86,54],[0,78],[-72,46],[-92,-49]].map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="#FF6D00" />
          <circle cx={x} cy={y} r="10" fill="#FF6D00" fillOpacity="0.18" />
        </g>
      ))}
      <circle cx="0" cy="0" r="6" fill="#43A047" />
      <circle cx="0" cy="0" r="13" fill="#43A047" fillOpacity="0.15" />
    </g>
    <g fontFamily="sans-serif" fontSize="9" fill="#81C784" textAnchor="middle">
      <text x="240" y="60">Market Size</text>
      <text x="372" y="137">Competitive</text>
      <text x="370" y="278">Consumer</text>
      <text x="240" y="340">Regulatory</text>
      <text x="108" y="278">Pricing</text>
      <text x="110" y="137">Channel</text>
    </g>
    <g fontFamily="Georgia,serif" fontSize="12" fill="#FF8A50" textAnchor="middle">
      <text x="240" y="80">85%</text>
      <text x="346" y="155">73%</text>
      <text x="342" y="264">69%</text>
      <text x="240" y="292">61%</text>
      <text x="134" y="258">58%</text>
      <text x="138" y="148">72%</text>
    </g>
  </svg>,

  /* 4 – Feasibility: Venn circles */
  <svg key={4} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="s4bg" cx="40%" cy="55%" r="65%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </radialGradient>
      <filter id="s4gf"><feGaussianBlur stdDeviation="12" /></filter>
    </defs>
    <rect width="480" height="350" fill="url(#s4bg)" />
    <pattern id="p4" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p4)" />
    <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7">Feasibility Studies</text>
    <circle cx="196" cy="196" r="100" fill="#43A047" fillOpacity="0.12" stroke="#43A047" strokeWidth="1.5" strokeOpacity="0.55" />
    <circle cx="290" cy="196" r="100" fill="#E65100" fillOpacity="0.1" stroke="#E65100" strokeWidth="1.5" strokeOpacity="0.5" />
    <circle cx="243" cy="120" r="90" fill="#81C784" fillOpacity="0.08" stroke="#81C784" strokeWidth="1.2" strokeOpacity="0.4" />
    <ellipse cx="243" cy="172" rx="42" ry="36" fill="#A5D6A7" fillOpacity="0.07" filter="url(#s4gf)" />
    <text x="243" y="165" fontFamily="Georgia,serif" fontSize="13" fill="#A5D6A7" textAnchor="middle" fontStyle="italic">Product–</text>
    <text x="243" y="180" fontFamily="Georgia,serif" fontSize="13" fill="#A5D6A7" textAnchor="middle" fontStyle="italic">Market Fit</text>
    <text x="152" y="218" fontFamily="sans-serif" fontSize="9" fill="#81C784" textAnchor="middle">Product</text>
    <text x="152" y="230" fontFamily="sans-serif" fontSize="9" fill="#81C784" textAnchor="middle">Viability</text>
    <text x="336" y="218" fontFamily="sans-serif" fontSize="9" fill="#FF8A50" textAnchor="middle">Market</text>
    <text x="336" y="230" fontFamily="sans-serif" fontSize="9" fill="#FF8A50" textAnchor="middle">Demand</text>
    <text x="243" y="88" fontFamily="sans-serif" fontSize="9" fill="#A5D6A7" textAnchor="middle">Competitive</text>
    <text x="243" y="100" fontFamily="sans-serif" fontSize="9" fill="#A5D6A7" textAnchor="middle">Landscape</text>
    <text x="240" y="340" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1.5">VIABILITY · FIT · FEASIBILITY ASSESSMENT</text>
  </svg>,

  /* 5 – Financial Assessment: P&L waterfall */
  <svg key={5} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s5bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
    </defs>
    <rect width="480" height="350" fill="url(#s5bg)" />
    <pattern id="p5" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p5)" />
    <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7">Financial Assessment</text>
    <text x="30" y="40" fontFamily="sans-serif" fontSize="7.5" fill="#81C784" letterSpacing="1.5">PROFITABILITY · BENCHMARKING · ANALYTICS</text>
    <line x1="40" y1="262" x2="445" y2="262" stroke="#43A047" strokeWidth="0.8" strokeOpacity="0.4" />
    <rect x="50" y="100" width="46" height="162" rx="2" fill="#43A047" fillOpacity="0.7" />
    <rect x="110" y="100" width="46" height="74" rx="2" fill="#E65100" fillOpacity="0.65" />
    <rect x="170" y="174" width="46" height="88" rx="2" fill="#43A047" fillOpacity="0.6" />
    <rect x="230" y="174" width="46" height="46" rx="2" fill="#E65100" fillOpacity="0.6" />
    <rect x="290" y="220" width="46" height="42" rx="2" fill="#43A047" fillOpacity="0.65" />
    <rect x="350" y="228" width="46" height="34" rx="2" fill="#43A047" />
    <g fontFamily="sans-serif" fontSize="7.5" fill="#A5D6A7" textAnchor="middle">
      <text x="73"  y="94">Revenue</text><text x="133" y="94">COGS</text>
      <text x="193" y="94">Gross</text><text x="253" y="94">OpEx</text>
      <text x="313" y="94">EBITDA</text><text x="373" y="94">Net</text>
    </g>
    <g fontFamily="Georgia,serif" fontSize="11" fill="white" textAnchor="middle">
      <text x="73"  y="188">100%</text><text x="133" y="143">−45%</text>
      <text x="193" y="226">55%</text> <text x="253" y="202">−22%</text>
      <text x="313" y="246">33%</text> <text x="373" y="250">21%</text>
    </g>
    <text x="240" y="340" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1.5">P&amp;L · BENCHMARKING · STRATEGIC DECISIONS</text>
  </svg>,

  /* 6 – Process Optimization: flowchart */
  <svg key={6} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="s6bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </linearGradient>
      <marker id="s6arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0,0 6,3 0,6" fill="#43A047" fillOpacity="0.7" />
      </marker>
      <marker id="s6arrO" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0,0 6,3 0,6" fill="#E65100" fillOpacity="0.7" />
      </marker>
      <filter id="s6n">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="480" height="350" fill="url(#s6bg)" />
    <pattern id="p6" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p6)" />
    <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7">Process Optimization</text>
    {[
      { x:80,  y:105, l1:'Process', l2:'Audit',    col:'#E65100' },
      { x:220, y:105, l1:'SOP',     l2:'Review',   col:'#43A047' },
      { x:360, y:105, l1:'System',  l2:'Mapping',  col:'#81C784' },
      { x:80,  y:222, l1:'Gap',     l2:'Analysis', col:'#43A047' },
      { x:220, y:222, l1:'Redesign',l2:'& Optimise',col:'#E65100'},
      { x:360, y:222, l1:'Implement',l2:'& Track', col:'#43A047' },
    ].map((n,i) => (
      <g key={i}>
        <rect x={n.x-52} y={n.y-32} width="104" height="64" rx="10" fill="#1B5E20" stroke={n.col} strokeWidth="1.5" strokeOpacity="0.6" />
        <rect x={n.x-52} y={n.y-32} width="104" height="64" rx="10" fill={n.col} fillOpacity="0.06" />
        <circle cx={n.x-40} cy={n.y-20} r="4.5" fill={n.col} fillOpacity="0.75" filter="url(#s6n)" />
        <text x={n.x} y={n.y-4}  fontFamily="sans-serif" fontSize="9.5" fill="#A5D6A7" textAnchor="middle">{n.l1}</text>
        <text x={n.x} y={n.y+10} fontFamily="sans-serif" fontSize="9.5" fill="#A5D6A7" textAnchor="middle">{n.l2}</text>
      </g>
    ))}
    <line x1="132" y1="105" x2="168" y2="105" stroke="#43A047" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arr)" />
    <line x1="272" y1="105" x2="308" y2="105" stroke="#43A047" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arr)" />
    <line x1="132" y1="222" x2="168" y2="222" stroke="#43A047" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arr)" />
    <line x1="272" y1="222" x2="308" y2="222" stroke="#43A047" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arr)" />
    <line x1="80"  y1="137" x2="80"  y2="190" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arrO)" />
    <line x1="220" y1="137" x2="220" y2="190" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arrO)" />
    <line x1="360" y1="137" x2="360" y2="190" stroke="#E65100" strokeWidth="1.2" strokeOpacity="0.55" markerEnd="url(#s6arrO)" />
    <text x="240" y="340" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1.5">AUDIT · SOP REVIEW · SYSTEM OPTIMISATION</text>
  </svg>,

  /* 7 – M&A: Venn deal */
  <svg key={7} viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="s7bg" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stopColor="#2E7D32" /><stop offset="100%" stopColor="#1B5E20" />
      </radialGradient>
      <filter id="s7gf"><feGaussianBlur stdDeviation="12" /></filter>
      <filter id="s7n">
        <feGaussianBlur stdDeviation="5" result="b" />
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="480" height="350" fill="url(#s7bg)" />
    <pattern id="p7" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="0.9" fill="#4CAF50" opacity="0.16" />
    </pattern>
    <rect width="480" height="350" fill="url(#p7)" />
    <text x="30" y="26" fontFamily="Georgia,serif" fontSize="17" fill="#A5D6A7">M&amp;A Advisory</text>
    <circle cx="175" cy="192" r="100" fill="#1B5E20" stroke="#43A047" strokeWidth="1.5" strokeOpacity="0.55" />
    <circle cx="175" cy="192" r="100" fill="#43A047" fillOpacity="0.06" />
    <circle cx="305" cy="192" r="100" fill="#1B5E20" stroke="#E65100" strokeWidth="1.5" strokeOpacity="0.55" />
    <circle cx="305" cy="192" r="100" fill="#E65100" fillOpacity="0.06" />
    <circle cx="175" cy="192" r="115" fill="#43A047" fillOpacity="0.04" filter="url(#s7gf)" />
    <circle cx="305" cy="192" r="115" fill="#E65100" fillOpacity="0.04" filter="url(#s7gf)" />
    <path d="M 224 122 Q 240 110 256 122 Q 278 150 278 192 Q 278 234 256 262 Q 240 274 224 262 Q 202 234 202 192 Q 202 150 224 122 Z"
      fill="#A5D6A7" fillOpacity="0.07" stroke="#A5D6A7" strokeWidth="1" strokeOpacity="0.28" />
    <text x="240" y="185" fontFamily="Georgia,serif" fontSize="12" fill="#A5D6A7" textAnchor="middle" fontStyle="italic">Synergy</text>
    <text x="240" y="200" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1">MARC</text>
    <text x="136" y="185" fontFamily="Georgia,serif" fontSize="24" fill="#43A047" textAnchor="middle" fontWeight="300">A</text>
    <text x="136" y="202" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1">ACQUIRER</text>
    <text x="346" y="185" fontFamily="Georgia,serif" fontSize="24" fill="#E65100" textAnchor="middle" fontWeight="300">B</text>
    <text x="346" y="202" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1">TARGET</text>
    <line x1="220" y1="192" x2="262" y2="192" stroke="#A5D6A7" strokeWidth="1" strokeOpacity="0.45" strokeDasharray="4,3" />
    <polygon points="262,188 270,192 262,196" fill="#A5D6A7" fillOpacity="0.55" />
    <polygon points="220,188 212,192 220,196" fill="#A5D6A7" fillOpacity="0.55" />
    <g fontFamily="sans-serif" fontSize="7.5" fill="#81C784" textAnchor="middle">
      <text x="100" y="242">Due Diligence</text><text x="100" y="254">Valuation</text>
      <text x="382" y="242">Growth Thesis</text><text x="382" y="254">Synergy Model</text>
    </g>
    <text x="240" y="340" fontFamily="sans-serif" fontSize="7" fill="#81C784" textAnchor="middle" letterSpacing="1.5">DEAL SCREENING · DILIGENCE · VALUE CREATION</text>
  </svg>,
]

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section id="services" data-testid="services-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h2
            data-testid="services-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
            style={{ color: '#1B5E20' }}
          >
            Our Core Advisory Areas
          </h2>
          <p className="text-lg mb-4 leading-relaxed" style={{ color: '#33691E' }}>
            We advise organisations at critical growth moments—market entry, expansion, transformation, and scale.
          </p>
          <p className="font-semibold text-lg" style={{ color: '#2E7D32' }}>
            Our role: clarify direction, unlock growth levers, and support execution.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-testid={`service-card-${index}`}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative h-[350px]" style={{ backgroundColor: '#1B5E20' }}>
                <div className="absolute inset-0">
                  {SVG_ILLUSTRATIONS[index % SVG_ILLUSTRATIONS.length]}
                </div>

                {/* Hover overlay — vivid orange tint */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredService === index
                      ? 'bg-[#E65100]/80'
                      : 'bg-gradient-to-t from-[#1B5E20]/88 via-[#1B5E20]/38 to-transparent'
                  }`}
                />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div
                  className={`transform transition-all duration-500 ${hoveredService === index ? '-translate-y-4' : 'translate-y-0'}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold tracking-tight" style={{ color: '#A5D6A7' }}>
                      0{index + 1}
                    </span>
                    <span className="w-8 h-px" style={{ backgroundColor: '#A5D6A7' }} />
                  </div>
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

                {/* Arrow — orange on hover */}
                <div
                  className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredService === index ? 'scale-110' : ''
                  }`}
                  style={{
                    backgroundColor: hoveredService === index ? 'white' : 'rgba(255,255,255,0.2)',
                  }}
                >
                  <ArrowUpRight
                    className="w-5 h-5 transition-all duration-300"
                    style={{ color: hoveredService === index ? '#E65100' : 'white' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            data-testid="services-view-all"
            className="inline-flex items-center gap-2 font-semibold text-lg transition-colors group"
            style={{ color: '#2E7D32' }}
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
