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
      style={{ backgroundColor: '#4E9141' }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4E9141] via-[#5a9e4a] to-[#4E9141]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <h2 
              data-testid="industries-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '400' }}
            >
              Shaping Better<br />
              Business Decisions
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-md">
              MARC combines strategy management consulting and market research 
              to help businesses act with clarity and confidence across diverse sectors.
            </p>

            <a 
              href="/industries"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1D342F] font-semibold rounded-full hover:bg-[#C2DDB4] transition-all duration-300 group"
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
                  className={`group relative p-6 rounded-2xl text-left transition-all duration-500 overflow-hidden ${
                    isHovered
                      ? 'bg-white scale-[1.02] shadow-2xl shadow-black/30'
                      : 'bg-white/15 backdrop-blur-sm hover:bg-white/25'
                  }`}
                >
                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#4E9141]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-0' : ''}`} />
                  
                  {/* Icon */}
                  <div
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#4E9141]'
                        : 'bg-white/20'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${
                        isHovered ? 'text-white' : 'text-white'
                      }`}
                    />
                  </div>

                  {/* Industry title */}
                  <h3
                    className={`relative text-lg font-semibold mb-2 transition-colors ${
                      isHovered ? 'text-[#1D342F]' : 'text-white'
                    }`}
                  >
                    {industry}
                  </h3>

                  {/* Learn more - visible on hover */}
                  <div
                    className={`relative flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <span className="text-[#4E9141]">Learn more</span>
                    <ArrowRight className="w-4 h-4 text-[#4E9141]" />
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
