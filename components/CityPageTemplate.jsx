'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import {
  MapPin, Phone, Mail, ArrowRight, ChevronDown, ExternalLink,
  Building2, Users, TrendingUp, Award, CheckCircle2,
} from 'lucide-react'

/**
 * CityPageTemplate
 * Week 8 deliverable — city location pages (Mumbai / Pune / Kolkata).
 * Built as a standalone template (not reusing ServicePageTemplate) because
 * the section set is different: local office/contact block + locally
 * relevant services instead of a single-service methodology/FAQ page.
 *
 * IMPORTANT — case studies: none of MARC's 4 published case studies are
 * from Mumbai/Pune/Kolkata specifically. Rather than fabricate a false
 * "local" result, this template links to the real case studies page and
 * frames proof by sector relevance, not false geography. Swap in genuine
 * city-specific proof here the moment you have it — it will outperform
 * this generic version.
 */
export default function CityPageTemplate({
  city,               // 'Mumbai'
  state,              // 'Maharashtra'
  tagline,            // 'Business Consulting in Mumbai'
  title,              // 'Growth Advisory for Businesses Headquartered in'
  titleHighlight,     // 'Mumbai'
  description,
  heroImage,
  stats,
  localContext,       // { heading, paragraphs: [] } — why this city / market color
  services,           // [{ title, desc, href }]
  whyMarc,            // [{ icon, title, desc }]
  office,             // { address, phone, email, mapLink }
  faqs,               // [{ q, a }]
  ctaLabel = 'Talk to Our Team',
  source,             // analytics source tag
}) {
  const [openFaq, setOpenFaq] = useState(null)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `MARC Glocal – ${city}`,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office?.address,
      addressLocality: city,
      addressRegion: state,
      addressCountry: 'IN',
    },
    telephone: office?.phone,
    email: office?.email,
    url: `https://marcglocal.com/locations/${city.toLowerCase()}`,
    parentOrganization: { '@type': 'Organization', name: 'MARC Glocal', url: 'https://marcglocal.com' },
  }

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-[#F7FFF5] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4E9141]/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#4E9141]" />
                <span className="text-[#4E9141] font-bold tracking-wide uppercase text-sm">{tagline}</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-[#1D342F] leading-[1.1] mb-8">
                {title}
                {titleHighlight && <span className="text-[#4E9141]"> {titleHighlight}</span>}
              </h1>

              <p className="text-[#47635D] text-lg font-medium leading-relaxed mb-10 max-w-xl">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <CTAButton source={source} label={ctaLabel} variant="primary" />
                <Link
                  href="#local-office"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C2DDB4] text-[#47635D] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all"
                >
                  <MapPin className="w-4 h-4" /> Visit Our {city} Office
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block sticky top-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt={`MARC Glocal in ${city}`} className="w-full h-[500px] object-cover grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D342F]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4E9141] rounded-2xl -z-10 opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#C2DDB4] rounded-xl -z-10" />
            </div>
          </div>

          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[#C2DDB4]">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#4E9141] leading-tight">{stat.value}</div>
                  <div className="text-[#47635D] text-sm mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Local market context (this is the part Google rewards — must not be templated copy-paste) ── */}
      {localContext && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1D342F] mb-6">{localContext.heading}</h2>
            <div className="space-y-4">
              {localContext.paragraphs.map((p, i) => (
                <p key={i} className="text-[#47635D] text-lg leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Why MARC in this city ───────────────────────────────────────── */}
      {whyMarc && (
        <section className="py-20 bg-[#F7FFF5]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1D342F] mb-12 text-center">Why {city} Businesses Work With MARC</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyMarc.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="bg-white rounded-xl p-6 group">
                    <div className="w-14 h-14 bg-[#F7FFF5] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#C2DDB4] transition-colors">
                      <Icon className="w-7 h-7 text-[#4E9141]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1D342F] mb-2">{item.title}</h3>
                    <p className="text-[#47635D] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Services relevant to this city ──────────────────────────────── */}
      {services && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1D342F] mb-4">Services We Deliver in {city}</h2>
            <p className="text-[#47635D] text-lg mb-12 max-w-2xl">
              The same senior-led team, engaged locally in {city} or remotely — whichever your project needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="block bg-[#F7FFF5] rounded-xl p-6 border border-transparent hover:border-[#4E9141] transition-all group"
                >
                  <h3 className="text-lg font-bold text-[#1D342F] mb-2 flex items-center justify-between">
                    {s.title}
                    <ArrowRight className="w-4 h-4 text-[#4E9141] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[#47635D] text-sm leading-relaxed">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Proof — honest framing, links to real case studies, no fabricated local claims ── */}
      <section className="py-20 bg-[#F7FFF5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-10 h-10 text-[#4E9141] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#1D342F] mb-4">Proven Across Retail, Hospitality &amp; Real Estate</h2>
          <p className="text-[#47635D] text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            MARC has delivered 500+ projects across sectors {city} businesses operate in — from retail
            profitability to market positioning. See how we approach engagements like these.
          </p>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4E9141] text-white rounded-full font-semibold hover:bg-[#3d7333] transition-all"
          >
            View Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Local office block ───────────────────────────────────────────── */}
      {office && (
        <section id="local-office" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1D342F] mb-12 text-center">Our {city} Office</h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-[#F7FFF5] rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#4E9141] uppercase tracking-wide mb-1">Address</div>
                    <p className="text-[#1D342F] font-medium">{office.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#4E9141] uppercase tracking-wide mb-1">Phone</div>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[#1D342F] font-medium hover:text-[#4E9141]">
                      {office.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#4E9141]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#4E9141] uppercase tracking-wide mb-1">Email</div>
                    <a href={`mailto:${office.email}`} className="text-[#1D342F] font-medium hover:text-[#4E9141]">
                      {office.email}
                    </a>
                  </div>
                </div>
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4E9141] font-semibold hover:gap-3 transition-all"
                >
                  Get Directions <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg min-h-[300px]">
                <iframe
                  title={`MARC Glocal ${city} office map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(office.address)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ─────────────────────────────────────────────────────────── */}
      {faqs && (
        <section className="py-20 bg-[#F7FFF5]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#1D342F] mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-[#1D342F] pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4E9141] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-[#47635D] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1D342F]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Talk to Our {city} Team</h2>
          <p className="text-[#C2DDB4] text-lg mb-10">
            Whether it's a quick scoping call or a full engagement, our {city} team is a message away.
          </p>
          <div className="flex justify-center">
            <CTAButton source={`${source} - Final CTA`} label={ctaLabel} variant="primary" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
