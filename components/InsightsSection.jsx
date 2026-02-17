'use client'

import React from 'react'
import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'
import { insights } from '@/data/mock'

const InsightsSection = () => {
  return (
    <section id="insights" data-testid="insights-section" className="py-24 bg-[#F0F8F6]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            {/* Large Heading - Insights Style */}
            <h2 
              data-testid="insights-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1D342F] mb-4 leading-[1.1] tracking-tight"
            >
              Opinions, Analytics & Thoughts
            </h2>

            <p className="text-lg text-[#47635D] max-w-xl leading-relaxed">
              Our team of professionals share insights from industry
              opinions, economic updates to strategic perspectives.
            </p>
          </div>

          <button 
            data-testid="insights-view-all-desktop"
            className="hidden lg:inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:text-[#4E9141] transition-colors group mt-6 lg:mt-0"
          >
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* ================= INSIGHTS GRID - SYMMETRICAL ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={insight.id}
              data-testid={`insight-card-${index}`}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden h-[320px] bg-white shadow-md border border-[#C2DDB4]/20 hover:shadow-xl hover:border-[#4E9141]/30 transition-all duration-500">
                {/* Image */}
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/90 via-[#1D342F]/40 to-transparent group-hover:from-[#1D342F]/95 transition-all duration-500" />

                {/* ================= CONTENT ================= */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#4E9141] text-white text-xs font-semibold">
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1 text-white/80 text-sm">
                      <Calendar className="w-4 h-4" />
                      {insight.date}
                    </span>
                  </div>

                  {/* Insight title */}
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors group-hover:text-[#C2DDB4] tracking-tight leading-snug">
                    {insight.title}
                  </h3>

                  <div className="flex items-center gap-2 text-[#C2DDB4] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#4E9141]">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= MOBILE CTA ================= */}
        <div className="lg:hidden mt-8 text-center">
          <button 
            data-testid="insights-view-all-mobile"
            className="inline-flex items-center gap-2 text-[#4E9141] font-semibold text-lg hover:text-[#4E9141] transition-colors group"
          >
            View All Insights
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
