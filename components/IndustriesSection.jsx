'use client'

import React, { useState } from 'react'
import {
  Building2,
  ShoppingBag,
  Car,
  HeartPulse,
  ShoppingCart,
  Building,
  Cpu,
  Factory,
  ArrowRight,
} from 'lucide-react'
import { industries } from '@/data/mock'

const industryIcons = {
  Hospitality: Building2,
  Consumer: ShoppingBag,
  'Automobile & Mobility': Car,
  Healthcare: HeartPulse,
  'E-Commerce & Retail': ShoppingCart,
  'Construction & Infrastructure': Building,
  Technology: Cpu,
  Manufacturing: Factory,
}

const IndustriesSection = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null)

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#2C2F2E' }} // dark charcoal grey
    >
      {/* Subtle green glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4E9141]/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4E9141]/6 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <h2
              data-testid="industries-heading"
              className="text-4xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontWeight: '400',
                color: '#F0F5F2', // off-white for contrast on dark bg
              }}
            >
              Shaping Better<br />
              Business Decisions
            </h2>

            <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: '#A8BFB8' }}>
              MARC combines strategy management consulting and market research
              to help businesses act with clarity and confidence across diverse sectors.
            </p>

            <a
              href="/industries"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full transition-all duration-300 group"
              style={{ backgroundColor: '#4E9141', color: '#ffffff' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3e7433')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4E9141')}
            >
              Explore All Industries
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right - Industries Grid */}
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry] || Building2
              const isHovered = hoveredIndustry === index

              return (
                <button
                  key={index}
                  data-testid={`industry-card-${index}`}
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  className="group relative p-6 rounded-2xl text-left transition-all duration-300 overflow-hidden"
                  style={{
                    backgroundColor: isHovered ? '#4E9141' : '#C8E6BB', // light sage green default, brand green on hover
                    border: isHovered ? '1.5px solid #4E9141' : '1.5px solid #B0D4A4',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isHovered ? '0 16px 40px rgba(78,145,65,0.25)' : '0 2px 8px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(78,145,65,0.18)' }}
                  >
                    <Icon
                      className="w-6 h-6 transition-colors"
                      style={{ color: isHovered ? '#ffffff' : '#2E6B25' }}
                    />
                  </div>

                  {/* Industry title */}
                  <h3
                    className="relative text-lg font-semibold mb-2 transition-colors"
                    style={{ color: isHovered ? '#ffffff' : '#1D342F' }}
                  >
                    {industry}
                  </h3>

                  {/* Learn more - visible on hover */}
                  <div
                    className="relative flex items-center gap-2 text-sm font-medium transition-all duration-300"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                      color: 'rgba(255,255,255,0.85)',
                    }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection