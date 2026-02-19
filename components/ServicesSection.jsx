'use client'

import React, { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '@/data/mock'

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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-testid={`service-card-${index}`}
              className="card-grayscale group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Image */}
              <div className="relative h-[350px]">
                <img
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredService === index
                      ? 'bg-[#4E9141]/85'
                      : 'bg-gradient-to-t from-[#1D342F]/90 via-[#1D342F]/50 to-transparent'
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
                  {/* Service title — no number prefix */}
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
                    hoveredService === index ? 'bg-white scale-110' : ''
                  }`}
                >
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      hoveredService === index ? 'text-[#4E9141] rotate-45' : 'text-white'
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
            className="inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:text-[#4E9141] transition-colors group"
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