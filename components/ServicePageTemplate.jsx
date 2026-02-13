'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { 
  ArrowRight, CheckCircle2, ChevronDown, ArrowUpRight, ExternalLink
} from 'lucide-react'

export default function ServicePageTemplate({
  // Hero Section
  tagline,
  title,
  titleHighlight,
  description,
  stats,
  
  // Value Propositions
  valueProps,
  
  // Methodology
  methodology,
  methodologyTitle = "Our Approach",
  methodologySubtitle = "Rigorous, Insight-Led Methodology",
  methodologyDescription,
  
  // Services/Offerings
  services,
  servicesTitle = "Key Services",
  
  // Case Studies
  caseStudies,
  
  // FAQs
  faqs,
  
  // CTA
  ctaTitle = "Ready to Get Started?",
  ctaDescription,
}) {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C2DDB4]/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-medium tracking-wide uppercase text-sm">{tagline}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-8">
                {title}
                {titleHighlight && <span className="text-[#4E9141]"> {titleHighlight}</span>}
              </h1>

              <p className="text-[#47635D] text-lg leading-relaxed mb-10 max-w-xl">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7334] transition-all group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#methodology" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C2DDB4] text-[#47635D] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all">
                  Our Approach
                </Link>
              </div>
            </div>

            {stats && (
              <div className="relative hidden lg:block">
                <div className="bg-white rounded-2xl shadow-2xl p-10 border border-[#C2DDB4]/30">
                  <h3 className="text-2xl font-bold text-[#1D342F] mb-8">Excellence in Numbers</h3>
                  <div className="grid grid-cols-2 gap-8">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-4xl font-bold text-[#4E9141]">{stat.value}</div>
                        <div className="text-[#47635D] text-sm mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#C2DDB4] rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-[#C2DDB4] rounded-xl -z-10" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Value Props ──────────────────────────────────────────────────── */}
      {valueProps && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valueProps.map((item, i) => (
                <div key={i} className="group">
                  <div className="w-14 h-14 bg-[#F7FFF5] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C2DDB4] transition-colors">
                    <item.icon className="w-7 h-7 text-[#4E9141]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D342F] mb-2">{item.title}</h3>
                  <p className="text-[#47635D] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Methodology ──────────────────────────────────────────────────── */}
      {methodology && (
        <section id="methodology" className="py-24 bg-[#F7FFF5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-medium tracking-wide uppercase text-sm">{methodologyTitle}</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F] mb-6">{methodologySubtitle}</h2>
              {methodologyDescription && (
                <p className="text-[#47635D] text-lg">{methodologyDescription}</p>
              )}
            </div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
              {methodology.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#4E9141] flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{step.num}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D342F] mb-2">{step.title}</h3>
                    <p className="text-[#47635D]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Services Grid ────────────────────────────────────────────────── */}
      {services && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-medium tracking-wide uppercase text-sm">{servicesTitle}</span>
                <div className="w-12 h-[2px] bg-[#4E9141]" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1D342F]">What We Deliver</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <div key={i} className="bg-[#F7FFF5] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#C2DDB4]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                      <service.icon className="w-7 h-7 text-[#4E9141]" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#47635D] group-hover:text-[#4E9141] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D342F] mb-3">{service.title}</h3>
                  <p className="text-[#47635D] mb-6">{service.desc}</p>
                  {service.features && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, j) => (
                        <span key={j} className="px-3 py-1 bg-white text-[#47635D] rounded-full text-sm border border-[#C2DDB4]">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Case Studies ─────────────────────────────────────────────────── */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-24 bg-[#1D342F]">
          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-[#4E9141]" />
                  <span className="text-[#4E9141] font-medium tracking-wide uppercase text-sm">Case Studies</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">Success Stories</h2>
              </div>
              <Link href="/case-studies" className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-[#4E9141] hover:text-[#C2DDB4] font-medium transition-colors">
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/*
            ═══════════════════════════════════════════════════════════════
            OLD — image-based case study cards (replaced by cards below)
            ═══════════════════════════════════════════════════════════════

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 mb-2">
                        {study.tags.map((tag, j) => (
                          <span key={j} className="px-2 py-1 bg-[#4E9141]/80 text-white rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#4E9141] text-sm font-medium mb-2">{study.client}</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#4E9141] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-[#C2DDB4] text-sm">{study.desc}</p>
                </div>
              ))}
            </div>

            ═══════════════════════════════════════════════════════════════ */}

            {/* NEW — Challenge / Solution / Result cards with colored top-border accent */}
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, i) => (
                <div
                  key={i}
                  className="bg-[#162b23] rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 group flex flex-col"
                >
                  {/* Colored top accent — driven by accentColor in data */}
                  <div className="h-[3px] w-full" style={{ backgroundColor: study.accentColor }} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${study.accentColor}20`, color: study.accentColor }}
                      >
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-[#C2DDB4]">
                        {study.service}
                      </span>
                    </div>

                    {/* Client */}
                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#C2DDB4] transition-colors leading-snug">
                      {study.client}
                    </h3>

                    {/* C / S / R */}
                    <div className="space-y-5 flex-1">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: study.accentColor }}>
                          Challenge
                        </p>
                        <p className="text-[#C2DDB4] text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: study.accentColor }}>
                          Solution
                        </p>
                        <p className="text-[#C2DDB4] text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: study.accentColor }}>
                          Result
                        </p>
                        <p className="text-sm font-semibold leading-relaxed" style={{ color: study.accentColor }}>
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F]">Frequently Asked Questions</h2>
            </div>

            <div className="divide-y divide-[#C2DDB4]">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between text-left"
                  >
                    <span className="font-medium text-[#1D342F] pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#4E9141] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <p className="mt-4 text-[#47635D] pr-12">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#4E9141]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{ctaTitle}</h2>
          {ctaDescription && (
            <p className="text-[#C2DDB4] text-lg mb-10 max-w-2xl mx-auto">{ctaDescription}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#3d7334] rounded-full font-semibold hover:bg-[#F7FFF5] transition-all group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/insights" className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              View Our Insights
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}