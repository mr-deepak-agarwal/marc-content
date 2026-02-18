'use client'

import React from 'react'
import { Award, Zap, UserCheck, Briefcase, TrendingUp } from 'lucide-react'
import { whyWorkWithUs } from '@/data/mock'

const icons = [Award, Zap, UserCheck, Briefcase, TrendingUp]

const WhyUsSection = () => {
  const whyMarcPoints = [
    {
      id: 1,
      title: "Glocal Perspective",
      description: "Deep India expertise with a global outlook."
    },
    {
      id: 2,
      title: "Custom-Built Solutions",
      description: "No off-the-shelf answers."
    },
    {
      id: 3,
      title: "Senior Involvement",
      description: "Partner-led engagements."
    },
    {
      id: 4,
      title: "Insight to Impact",
      description: "Strategy backed by execution support."
    },
    {
      id: 5,
      title: "15 Years of Cross-Industry Experience",
      description: "In all sectors including Manufacturing, F&B, Hospitality, Retail, Pharma, Real estate, Education."
    }
  ]

  return (
    <section id="why-us" data-testid="why-us-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center">
            {/* Reduced from text-6xl → text-5xl, matching AboutSection */}
            <h2
              data-testid="why-us-heading"
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1D342F] mb-6 leading-[1.15] tracking-tight"
            >
              Why MARC
            </h2>

            <p className="text-base lg:text-lg text-[#47635D] mb-8 leading-relaxed">
              We are advisors who stay close until growth is not just achieved, but compounded.
            </p>

            {/* Image fills remaining space to match right column height */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl flex-1">
              <img
                src="https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?w=800&auto=format&fit=crop"
                alt="MARC Consultants Team collaborating on business strategy"
                className="w-full h-[360px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/40 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT FEATURES GRID ================= */}
          <div className="grid gap-4">
            {whyMarcPoints.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.id}
                  data-testid={`why-us-card-${index}`}
                  className="group bg-white rounded-2xl p-5 shadow-lg border border-[#C2DDB4]/40 hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4E9141] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#1D342F] mb-1 tracking-tight group-hover:text-[#4E9141] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#47635D] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection