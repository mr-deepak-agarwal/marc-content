'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Users, Lightbulb, Target } from 'lucide-react'
import { Button } from './ui/button'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and ethical conduct in all our dealings.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality and exceeding expectations.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together as one team, fostering partnerships with our clients.',
  },
  {
    icon: Heart,
    title: 'Consumer Focus',
    description: 'Our clients are at the heart of everything we do, driving our decisions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creativity and new ideas to solve complex business challenges.',
  },
]

const CareersSection = () => {
  return (
    <section id="careers" data-testid="careers-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 
              data-testid="careers-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
            >
              Build Your Career <br />
              <span className="text-[#4E9141]">With MARC</span>
            </h2>

            <p className="text-lg text-[#47635D] mb-8 leading-relaxed">
              Join a team of passionate professionals who are dedicated to delivering 
              excellence and partnering success. At MARC, we believe in nurturing talent, 
              fostering growth, and creating an environment where innovation thrives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/career">
                <Button
                  data-testid="careers-cta-openings"
                  className="bg-[#4E9141] hover:bg-[#4E9141] text-white px-8 py-6 text-lg shadow-lg shadow-[#4E9141]/25 transition-all duration-300 hover:shadow-[#4E9141]/40 hover:-translate-y-0.5 group"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  data-testid="careers-cta-culture"
                  variant="outline"
                  className="border-2 border-[#5D9F94] text-[#5D9F94] hover:bg-[#5D9F94] hover:text-white px-8 py-6 text-lg transition-all duration-300"
                >
                  Learn About Our Culture
                </Button>
              </Link>
            </div>
          </div>

          {/* ================= RIGHT - VALUES GRID ================= */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#C2DDB4]/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#5D9F94]/20 rounded-full blur-3xl" />

            <div className="relative grid gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  data-testid={`value-card-${index}`}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#C2DDB4]/40 hover:border-[#4E9141]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#4E9141] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1D342F] mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[#47635D] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersSection
