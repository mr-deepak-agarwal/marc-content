'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function InsightsPageSimple() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <div className="bg-white min-h-screen">
      
      {/* Simple Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] mb-6">
            Insights that inform better decisions
          </h1>
          <p className="text-xl text-[#47635D] leading-relaxed mb-8">
            Deep research, strategic analysis, and industry intelligence.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Reports</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
                <h3 className="font-bold text-lg mb-2">Report Title {i}</h3>
                <p className="text-gray-600 text-sm">Healthcare • 12 min read</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">All Reports</h2>
          
          {/* Category Tabs */}
          <div className="flex gap-2 mb-8">
            {['All', 'Healthcare', 'Hospitality', 'Manufacturing'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat.toLowerCase())}
                className="px-5 py-2.5 rounded-lg text-sm font-medium bg-gray-100 hover:bg-[#4E9141] hover:text-white transition-all"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-5">
                  <span className="text-xs text-[#4E9141] font-medium">HEALTHCARE</span>
                  <h3 className="font-semibold text-lg mt-2 mb-3">Report Title {i}</h3>
                  <p className="text-sm text-gray-600">12 min read • 1.2k downloads</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7FFF5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1D342F] mb-4">
            Need Custom Research?
          </h2>
          <p className="text-lg text-[#47635D] mb-8">
            Our team can prepare industry-specific insights tailored to your needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-[#4E9141] text-white rounded-xl font-semibold"
            >
              Request Custom Report
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-[#1D342F] border border-gray-300 rounded-xl font-semibold"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}