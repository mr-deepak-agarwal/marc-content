'use client'

import React from 'react'
import { Lightbulb, Target, Rocket, Users } from 'lucide-react'

const HowWeWorkSection = () => {
  const workingPrinciples = [
    {
      id: 1,
      icon: Target,
      title: "Start with Your Ambition",
      description: "We start with your ambition and constraints, not generic frameworks."
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Research & Strategic Thinking",
      description: "We combine research, strategic thinking, and practical execution."
    },
    {
      id: 3,
      icon: Users,
      title: "Close Collaboration",
      description: "We work closely with leadership teams to ensure decisions translate into action."
    },
    {
      id: 4,
      icon: Rocket,
      title: "Deliver Clarity & Momentum",
      description: "Whether it's a 6-week strategic sprint or a multiphase growth mandate, our engagements are designed to deliver clarity, confidence, and momentum."
    }
  ]

  return (
    <section id="how-we-work" data-testid="how-we-work-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            data-testid="how-we-work-heading"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1D342F] mb-4 leading-[1.15] tracking-tight"
          >
            How We Work
          </h2>
          <p className="text-base lg:text-lg text-[#47635D] leading-relaxed">
            Our approach is hands-on, senior-led, and customised.
          </p>
        </div>

        {/* WORKING PRINCIPLES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingPrinciples.map((principle, index) => {
            const Icon = principle.icon
            return (
              <div
                key={principle.id}
                data-testid={`principle-card-${index}`}
                className="group relative"
              >
                <div className="bg-[#F7FFF5] rounded-2xl p-6 h-full border-2 border-[#C2DDB4]/40 hover:border-[#4E9141]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-9 h-9 bg-[#4E9141] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-base">{index + 1}</span>
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D342F] mb-2 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-[#47635D] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection