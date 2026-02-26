'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import {
  ArrowRight,
  Scale,
  FileText,
  Shield,
  Globe,
  CheckCircle2,
  Eye,
  Lock,
  Layers,
  Zap,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react'

const globalServices = [
  {
    icon: Scale,
    title: 'Business Valuation',
    tagline: 'Robust, defensible valuations built to market expectations.',
    bullets: [
      'DCF, trading & transaction multiples',
      'Valuations for M&A, fundraising, tax & internal planning',
      'Clear models + clean assumptions + audit-ready documentation',
    ],
    outcome: 'Faster turnaround without compromising rigor.',
    href: '/global/valuation',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
  },
  {
    icon: FileText,
    title: 'CIM & Pitch Deck Development',
    tagline: 'Institutional-quality materials that tell a tight equity story.',
    bullets: [
      'Confidential Information Memorandums (CIMs)',
      'Investor & buyer pitch decks',
      'Financial modeling & value bridge narratives',
      'Market sizing & competitive landscaping',
      'Clean design + sharp messaging (white-labelled)',
    ],
    outcome: 'Better buyer engagement, fewer rewrites, happier clients.',
    href: '/global/cim-pitchdeck',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    icon: Shield,
    title: 'Due Diligence & QoE Support',
    tagline: 'Execution muscle for live deals—when timelines get brutal.',
    bullets: [
      'Commercial due diligence',
      'Financial Due Diligence (FDD) and Vendor Due Diligence (VDD) support',
      'Quality of Earnings (QoE) analysis',
      'Market, customer & industry diligence',
      'Red flag analysis & management question packs',
    ],
    outcome: 'You stay client-facing. We handle the grind.',
    href: '/global/due-diligence',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    icon: Globe,
    title: 'Internationalization',
    tagline: 'End-to-end support for cross-border expansion and India market entry.',
    bullets: [
      'Market assessment & entry strategy',
      'Partner identification & evaluation',
      'Regulatory navigation & entity setup',
      'Cross-border M&A advisory',
    ],
    outcome: 'Navigate new markets with confidence and local expertise.',
    href: '/services/internationalization',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80',
  },
]

const whoWeWorkWith = [
  'Boutique Investment Banks',
  'Independent M&A Advisors',
  'Valuation & Transaction Advisory Firms',
  'CPA Firms supporting M&A',
  'Search Funds & Independent Sponsors',
]

const whyUs = [
  {
    icon: Eye,
    title: 'Built for Advisors, Not End Clients',
    desc: 'We understand how US advisors work—deadlines, defensibility, and precision matter.',
  },
  {
    icon: Lock,
    title: 'White-Label & Confidential',
    desc: 'We operate entirely in the background. NDAs. Clean handovers. No brand leakage.',
  },
  {
    icon: Layers,
    title: 'Global-Aligned Thinking, India-Based Execution',
    desc: 'Senior analysts trained on international transactions, valuation norms, and diligence standards.',
  },
  {
    icon: Zap,
    title: 'Flexible, On-Demand Engagements',
    desc: 'Per-deal, retainer, or surge capacity—scale up or down without fixed costs.',
  },
]

const useCases = [
  'Overflow support during active deal cycles',
  'Building valuation depth without hiring full-time',
  'Faster CIM turnaround for multiple mandates',
  'Cost-effective diligence and report execution',
  'Expanding service offerings without expanding headcount',
]

export default function GlobalPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#1D342F]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D342F]/95 via-[#1D342F]/80 to-[#1D342F]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">
                Offshore Advisory Support · US & Global Markets
              </span>
            </div>

            <h1 className="text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
              Scale faster.{' '}
              <span className="text-[#4E9141]">Deliver more.</span>{' '}
              Protect your margins.
            </h1>

            <p className="text-white/70 text-lg lg:text-xl font-light leading-relaxed mb-4 max-w-2xl">
              MARC Glocal partners with small and mid-size global consulting firms, boutique investment banks, and independent advisors to deliver high-quality valuation, CIM, pitch deck, and due diligence support—reliably, confidentially, and at scale.
            </p>
            <p className="text-[#C2DDB4] text-base font-medium mb-12">
              We work as your extended deal team, invisible to your client, accountable to your standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white font-semibold rounded-md hover:bg-[#3e7433] transition-all duration-300 shadow-lg shadow-[#4E9141]/30 group"
              >
                Discuss a Pilot Engagement
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold border-2 border-white/30 rounded-md hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                See What We Do
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <ChevronDown className="w-5 h-5 text-white/40 animate-bounce" />
        </div>
      </section>

      {/* ── Who We Work With ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F7FFF5] border-b border-[#C2DDB4]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">Who We Work With</span>
              </div>
              <p className="text-[#47635D] text-sm max-w-xs">
                If you're winning mandates but stretched on execution—we plug the gap.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {whoWeWorkWith.map((item, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 bg-white border border-[#C2DDB4] rounded-full text-[#1D342F] text-sm font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do (Services) ─────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">What We Do</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] leading-tight">
              Four practice areas. One seamless team.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {globalServices.map((service, i) => (
              <Link key={i} href={service.href} className="group block">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden mb-5 h-56">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ filter: 'grayscale(30%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/80 via-[#1D342F]/30 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <div className="w-12 h-12 bg-white/90 group-hover:bg-[#4E9141] rounded-xl flex items-center justify-center transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-[#4E9141] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-[#4E9141]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[#F7FFF5] rounded-2xl p-7 border border-[#C2DDB4]/40 group-hover:border-[#4E9141]/50 group-hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#1D342F] mb-2 group-hover:text-[#4E9141] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#47635D] text-sm mb-4">{service.tagline}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#47635D]">
                        <CheckCircle2 className="w-4 h-4 text-[#4E9141] flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-[#C2DDB4]/50">
                    <p className="text-sm font-semibold text-[#1D342F]">
                      <span className="text-[#4E9141]">Outcome:</span> {service.outcome}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why US Consultants Work With Us ──────────────────────────────── */}
      <section className="py-24 bg-[#1D342F]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">Why Work With Us</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Why US Consultants Work With MARC
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 hover:border-[#4E9141]/40 rounded-2xl p-7 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#4E9141]/20 group-hover:bg-[#4E9141] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#4E9141] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-[#C2DDB4] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Typical Use Cases */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#4E9141]" />
              <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">Typical Use Cases</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                  <span className="text-[#C2DDB4] text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About MARC Glocal ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F7FFF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">About MARC Glocal</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] leading-tight mb-6">
                A deal team that operates in your shadow.
              </h2>
              <p className="text-[#47635D] text-lg leading-relaxed mb-6">
                MARC Glocal is a growth and transaction advisory firm with deep experience across valuation, M&A, and diligence engagements globally. We support global and cross-border transactions, bringing together structured thinking, market insight, and execution discipline.
              </p>
              <p className="text-[#47635D] text-base leading-relaxed">
                Our analysts are trained on international transactions, US GAAP standards, and global valuation norms. We've supported advisors across the US, UK, Middle East, and Southeast Asia—always white-labelled, always accountable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5+', label: 'Years Supporting Global Advisors' },
                { value: '100%', label: 'White-Label Delivery' },
                { value: 'US/UK', label: 'Standards Aligned' },
                { value: 'NDA', label: 'Protected Engagements' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#C2DDB4]/50 p-7 text-center shadow-sm"
                >
                  <div className="text-4xl font-bold text-[#4E9141] mb-2">{stat.value}</div>
                  <div className="text-[#47635D] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#4E9141]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Let's Talk
          </h2>
          <p className="text-[#C2DDB4] text-lg mb-3 max-w-2xl mx-auto">
            Looking for a reliable offshore partner who thinks like your deal team?
          </p>
          <p className="text-white/80 text-base mb-12">
            Let's discuss a pilot engagement. (We're happy to start with one live deal.)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#3d7334] rounded-full font-semibold hover:bg-[#F7FFF5] transition-all group"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}