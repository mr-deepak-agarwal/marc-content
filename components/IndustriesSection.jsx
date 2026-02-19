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
      style={{ backgroundColor: '#1D342F' }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ backgroundColor: 'rgba(78,145,65,0.08)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(249,115,22,0.06)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px]" style={{ backgroundColor: '#F97316' }} />
              <span className="font-medium tracking-wide uppercase text-sm" style={{ color: '#FDBA74' }}>
                Industries
              </span>
            </div>

            <h2
              data-testid="industries-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6"
              style={{ color: '#F0F5F2' }}
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
                  className="group relative text-left overflow-hidden rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? '#4E9141' : '#2E5E4E',
                    border: isHovered
                      ? '1.5px solid #F97316'
                      : '1.5px solid rgba(255,255,255,0.12)',
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    boxShadow: isHovered
                      ? '0 20px 50px rgba(249,115,22,0.2)'
                      : '0 4px 16px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Orange top strip */}
                  <div
                    className="h-[4px] w-full"
                    style={{
                      background: 'linear-gradient(to right, #F97316, #FDBA74)',
                      opacity: isHovered ? 1 : 0.5,
                    }}
                  />

                  <div className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: isHovered ? '#ffffff' : '#C2DDB4' }}
                      />
                    </div>

                    <h3
                      className="text-lg font-semibold mb-3 transition-colors duration-300"
                      style={{ color: isHovered ? '#ffffff' : '#E8F5E3' }}
                    >
                      {industry}
                    </h3>

                    <div
                      className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
                        color: '#FDBA74',
                      }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
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