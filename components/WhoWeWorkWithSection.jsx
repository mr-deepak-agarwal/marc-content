'use client'

import React from 'react'
import { Building2, Globe, TrendingUp, Users } from 'lucide-react'

const WhoWeWorkWithSection = () => {
  const clientTypes = [
    {
      id: 1,
      icon: Building2,
      title: "Indian Companies",
      description: "Looking to scale nationally or expand globally with strategic market entry and growth planning."
    },
    {
      id: 2,
      icon: Globe,
      title: "Global & Multinational Firms",
      description: "Entering or growing in India with localised strategies, partner networks, and regulatory expertise."
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "PE / VC-Backed Businesses",
      description: "At inflection points requiring growth acceleration, due diligence, and value creation strategies."
    },
    {
      id: 4,
      icon: Users,
      title: "Family-Owned & Founder-Led Organizations",
      description: "Preparing for the next phase of growth with succession planning and operational excellence."
    }
  ]

  return (
    <section id="who-we-work-with" data-testid="who-we-work-with-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            data-testid="who-we-work-with-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
          >
            Who We Work With
          </h2>

          <p className="text-lg text-[#47635D] leading-relaxed">
            We partner with ambitious businesses and leadership teams at critical growth moments across diverse sectors and markets.
          </p>
        </div>

        {/* ================= CLIENT TYPES GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6">
          {clientTypes.map((client, index) => {
            const Icon = client.icon

            return (
              <div
                key={client.id}
                data-testid={`client-type-card-${index}`}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-[#C2DDB4]/40 hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#1D342F] mb-3 tracking-tight group-hover:text-[#4E9141] transition-colors">
                      {client.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#47635D] leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ================= ADDITIONAL INFO ================= */}
        <div className="mt-12 text-center">
          <p className="text-lg text-[#4E9141] font-semibold">
            We provide complete, end-to-end solutions to businesses — guiding them through every stage of growth and expansion.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoWeWorkWithSection
