'use client'

import React from 'react'
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Globe,
} from 'lucide-react'
import { aboutSection, stats } from '@/data/mock'
import { Button } from './ui/button'

const AboutSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" data-testid="about-section" className="py-24 bg-[#F7FFF5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= STATS BAR ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-testid={`stat-card-${index}`}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#C2DDB4]/40 text-center group hover:shadow-xl hover:border-[#4E9141]/50 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Premium numeric tone */}
              <div className="text-4xl lg:text-5xl font-bold text-[#4E9141] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>

              <div className="text-[#1D342F] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={aboutSection.image}
                alt={aboutSection.imageAlt || "MARC Team Collaboration"}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/50 to-transparent" />
            </div>

            {/* Floating Mission Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs hidden lg:block border border-[#4E9141]/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#4E9141] rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-base font-semibold text-[#1D342F] tracking-tight">
                    Our Mission
                  </div>
                  <div className="text-sm text-[#4E9141]">
                    Enabling better decisions
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#4E9141]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-[#5D9F94]/20 rounded-full blur-2xl" />
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div>
            {/* Large Heading - Insights Style */}
            <h2 
              data-testid="about-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-6 leading-[1.1] tracking-tight"
            >
              {aboutSection.title}
            </h2>

            <p className="text-lg text-[#47635D] mb-6 leading-relaxed">
              {aboutSection.description}
            </p>

            {/* Strategic emphasis line */}
            <p className="text-[#4E9141] font-semibold mb-8 text-lg tracking-tight">
              {aboutSection.commitment}
            </p>

            {/* ================= FEATURE ICONS ================= */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: TrendingUp, label: 'Strategic Growth' },
                { icon: Users, label: 'Expert Team' },
                { icon: Globe, label: 'Global Reach' },
                { icon: Target, label: 'Precise Insights' },
              ].map((item, index) => (
                <div
                  key={index}
                  data-testid={`feature-${index}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#C2DDB4]/40 hover:bg-[#F7FFF5] hover:border-[#4E9141]/40 transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 bg-[#4E9141] rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-[#1D342F]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Button
              data-testid="about-cta"
              onClick={() => scrollToSection('#contact')}
              className="bg-[#4E9141] hover:bg-[#4E9141] text-white px-8 py-6 text-lg shadow-lg shadow-[#4E9141]/25 transition-all duration-300 hover:shadow-[#4E9141]/40 hover:-translate-y-0.5 group"
            >
              Work With Us
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
