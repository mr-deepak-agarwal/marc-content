'use client'

import React from 'react'
import { Award, Zap, UserCheck, Briefcase, TrendingUp } from 'lucide-react'
import { whyWorkWithUs } from '@/data/mock'

const icons = [Award, Zap, UserCheck, Briefcase, TrendingUp]

const WhyUsSection = () => {
  return (
    <section id="why-us" data-testid="why-us-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            {/* Large Heading - Insights Style */}
            <h2 
              data-testid="why-us-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
            >
              Why MARC
            </h2>

            <p className="text-lg text-[#47635D] mb-8 leading-relaxed">
              We are advisors who stay close until growth is not just achieved, but compounded. Our hands-on, senior-led approach ensures your business gets the strategic attention and execution support needed for sustainable success.
            </p>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?w=800&auto=format&fit=crop"
                alt="MARC Consultants Team collaborating on business strategy"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/40 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT FEATURES GRID ================= */}
          <div className="grid gap-6">
            {whyWorkWithUs.map((item, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={item.id}
                  data-testid={`why-us-card-${index}`}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-[#C2DDB4]/40 hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#4E9141] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      {/* Feature title */}
                      <h3 className="text-xl font-semibold text-[#1D342F] mb-2 tracking-tight group-hover:text-[#4E9141] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-[#47635D] leading-relaxed">
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
