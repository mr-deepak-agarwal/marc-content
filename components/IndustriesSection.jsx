'use client'

import React, { useState } from 'react'
import {
  Building2, ShoppingBag, Car, HeartPulse, ShoppingCart,
  Building, Cpu, Factory, ArrowRight, X, CheckCircle2,
  Shirt, GraduationCap, Pill, Home, Utensils, Package
} from 'lucide-react'
import { industries, industryDetails } from '@/data/mock'

const industryIcons = {
  'Construction & Infrastructure': Building,
  'Consumer Goods': Package,
  'Automobile': Car,
  'Clothing & Textiles': Shirt,
  'E-Commerce': ShoppingCart,
  'Education': GraduationCap,
  'F&B (Food & Beverage)': Utensils,
  'Healthcare': HeartPulse,
  'Hospitality': Building2,
  'Manufacturing & FMCG': Factory,
  'Pharma': Pill,
  'Real Estate': Home,
  'Retail': ShoppingBag,
  'Technology': Cpu,
}

const IndustriesSection = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null)
  const [modalIndustry, setModalIndustry] = useState(null)

  const detail = modalIndustry ? industryDetails[modalIndustry] : null

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="pb-14 lg:pb-20 pt-6 relative overflow-hidden"
      style={{ backgroundColor: '#1D342F' }}
    >
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ backgroundColor: 'rgba(78,145,65,0.08)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(249,115,22,0.06)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px]" style={{ backgroundColor: '#F97316' }} />
              <span className="font-medium tracking-wide uppercase text-sm" style={{ color: '#FDBA74' }}>Industries</span>
            </div>

            <h2
              data-testid="industries-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6"
              style={{ color: '#F0F5F2' }}
            >
              Shaping Better<br />Business Decisions
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              const Icon = industryIcons[industry] || Building2
              const isHovered = hoveredIndustry === index

              return (
                <button
                  key={index}
                  data-testid={`industry-card-${index}`}
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  onClick={() => setModalIndustry(industry)}
                  className="group relative text-left overflow-hidden rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? '#4E9141' : '#C8E6BB',
                    border: isHovered ? '1.5px solid #F97316' : '1.5px solid #B0D4A4',
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    boxShadow: isHovered ? '0 20px 50px rgba(249,115,22,0.2)' : '0 4px 16px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Orange top strip — absolutely pinned to top */}
                  <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: 'linear-gradient(to right, #F97316, #FDBA74)', opacity: isHovered ? 1 : 0.6 }} />
                  <div className="p-6 pt-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(78,145,65,0.18)' }}
                    >
                      <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: isHovered ? '#ffffff' : '#2E6B25' }} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 transition-colors duration-300" style={{ color: isHovered ? '#ffffff' : '#1D342F' }}>
                      {industry}
                    </h3>
                    <div
                      className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
                      style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(6px)', color: '#FDBA74' }}
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

      {/* MODAL */}
      {modalIndustry && detail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModalIndustry(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#162b23', border: '1px solid rgba(255,255,255,0.08)', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className="relative h-48 overflow-hidden">
              <img src={detail.image} alt={modalIndustry} className="w-full h-full object-cover" style={{ filter: 'grayscale(40%)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(22,43,35,0.3), rgba(22,43,35,0.85))' }} />
              <div className="absolute bottom-4 left-6 right-14">
                <h3 className="text-2xl font-bold text-white">{modalIndustry}</h3>
              </div>
              <button
                onClick={() => setModalIndustry(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 lg:p-8">
              <p className="text-base leading-relaxed mb-6" style={{ color: '#A8BFB8' }}>{detail.description}</p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F97316' }}>What We Do Here</h4>
                <div className="grid grid-cols-2 gap-2">
                  {detail.services.map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#4E9141' }} />
                      <span className="text-sm" style={{ color: '#C2DDB4' }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {detail.clients.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#F97316' }}>Clients We've Worked With</h4>
                  <div className="flex flex-wrap gap-2">
                    {detail.clients.map((c, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(78,145,65,0.15)', color: '#C2DDB4', border: '1px solid rgba(194,221,180,0.2)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
                style={{ backgroundColor: '#4E9141', color: '#ffffff' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3e7433'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4E9141'}
              >
                Talk to Us About {modalIndustry}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default IndustriesSection