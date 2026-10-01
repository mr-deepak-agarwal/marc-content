import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import ScorecardBanner from '@/components/ScorecardBanner'
import {
  caseStudies,
  getCaseStudy,
  getServiceMeta,
  getRelatedCaseStudies,
  CASE_STUDY_INDUSTRIES,
} from '@/data/caseStudies'
import {
  ArrowRight, ChevronRight, CheckCircle2, Target, Compass, Lightbulb, Quote, Building2,
} from 'lucide-react'

const BASE_URL = 'https://marcglocal.com'

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }) {
  const study = getCaseStudy(params.slug)
  if (!study) {
    return { title: 'Case Study Not Found | MARC Glocal', robots: { index: false, follow: true } }
  }
  const title = `${study.shortTitle} | MARC Glocal Case Study`
  const url = `${BASE_URL}/case-studies/${study.slug}`
  return {
    title,
    description: study.metaDescription,
    keywords: study.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: study.metaDescription,
      url,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description: study.metaDescription },
  }
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudy(params.slug)
  if (!study) notFound()

  const service = getServiceMeta(study.service)
  const industryLabel = CASE_STUDY_INDUSTRIES[study.industry] || study.industry
  const related = getRelatedCaseStudies(study, 3)
  const url = `${BASE_URL}/case-studies/${study.slug}`
  const source = `Case Study: ${study.shortTitle}`
  const showScorecard = ['feasibility', 'market-research', 'internationalisation'].includes(study.service)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.metaDescription,
      keywords: study.keywords.join(', '),
      about: service.label,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'MARC Glocal', url: BASE_URL },
      publisher: { '@type': 'Organization', name: 'MARC Glocal', url: BASE_URL },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${BASE_URL}/case-studies` },
        { '@type': 'ListItem', position: 3, name: study.shortTitle, item: url },
      ],
    },
  ]

  return (
    <div className="bg-white min-h-screen" data-testid="case-study-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-[#F7FFF5] border-b border-[#C2DDB4]/40 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4E9141]/5 rounded-full blur-[140px]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#47635D] mb-8">
            <Link href="/" className="hover:text-[#4E9141]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/case-studies" className="hover:text-[#4E9141]">Case Studies</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1D342F] font-medium">{study.shortTitle}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-4 py-1.5 bg-white text-[#4E9141] text-sm font-semibold rounded-full border border-[#C2DDB4]">
              {industryLabel}
            </span>
            <Link
              href={service.href}
              className="px-4 py-1.5 bg-[#4E9141] text-white text-sm font-semibold rounded-full hover:bg-[#3d7334] transition-colors"
            >
              {service.label}
            </Link>
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-[#1D342F] leading-tight mb-6">{study.title}</h1>
          <p className="text-lg lg:text-xl text-[#47635D] leading-relaxed mb-4 max-w-3xl">{study.summary}</p>
          <p className="flex items-center gap-2 text-[#1D342F] font-semibold mb-10">
            <Building2 className="w-5 h-5 text-[#4E9141]" />
            {study.client}
          </p>

          <div className="flex flex-wrap gap-4">
            <CTAButton source={`${source} - Hero`} label={service.cta} variant="primary" />
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C2DDB4] text-[#1D342F] rounded-full font-semibold hover:border-[#4E9141] hover:text-[#4E9141] transition-all"
            >
              Our {service.label} service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key facts ────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-[#C2DDB4]/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {study.facts.map((f, i) => (
              <div key={i} className="bg-[#F7FFF5] border border-[#C2DDB4]/60 rounded-2xl p-5">
                <div className="text-2xl lg:text-3xl font-bold text-[#4E9141] leading-tight">{f.value}</div>
                <div className="text-[#47635D] text-sm mt-1 leading-snug">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {/* Before */}
          <section>
            <p className="text-[#4E9141] font-semibold uppercase tracking-wider text-sm mb-3">Before</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mb-6">The client&apos;s situation</h2>
            <ul className="space-y-4">
              {study.before.map((b, i) => (
                <li key={i} className="flex gap-3 text-[#47635D] leading-relaxed">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#4E9141] flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenge */}
          <section>
            <p className="text-[#4E9141] font-semibold uppercase tracking-wider text-sm mb-3">Challenge</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mb-6">The question that had to be answered</h2>
            <div className="flex gap-4 bg-[#1D342F] rounded-2xl p-6 lg:p-8">
              <Target className="w-7 h-7 text-[#C2DDB4] flex-shrink-0 mt-1" />
              <p className="text-xl lg:text-2xl text-white font-medium leading-snug">{study.question}</p>
            </div>
          </section>

          {/* Approach */}
          <section>
            <p className="text-[#4E9141] font-semibold uppercase tracking-wider text-sm mb-3">MARC&apos;s approach</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mb-6">What we did</h2>
            <ol className="space-y-4">
              {study.approach.map((a, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-9 h-9 rounded-xl bg-[#4E9141] text-white font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-[#47635D] leading-relaxed pt-1.5">{a}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Mid-page CTA, placed straight after the approach section */}
          <aside className="bg-[#F7FFF5] border border-[#C2DDB4] rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1D342F] mb-2">Working on something similar?</h3>
                <p className="text-[#47635D] leading-relaxed">{service.ctaBlurb}</p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <CTAButton source={`${source} - Mid Page`} label={service.cta} variant="primary" />
                <Link href={service.href} className="text-[#4E9141] font-semibold text-sm hover:underline">
                  See how our {service.label.toLowerCase()} service works →
                </Link>
              </div>
            </div>
          </aside>

          {/* Result */}
          <section>
            <p className="text-[#4E9141] font-semibold uppercase tracking-wider text-sm mb-3">Result</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mb-6">What the work delivered</h2>
            <ul className="space-y-4">
              {study.results.map((r, i) => (
                <li key={i} className="flex gap-3 bg-white border border-[#C2DDB4]/60 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1D342F] leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Takeaway */}
          <section className="bg-[#F7FFF5] border-l-4 border-[#4E9141] rounded-r-2xl p-6 lg:p-8">
            <div className="flex items-center gap-2 text-[#4E9141] font-semibold uppercase tracking-wider text-sm mb-3">
              <Lightbulb className="w-4 h-4" /> Consulting takeaway
            </div>
            <p className="flex gap-3 text-lg lg:text-xl text-[#1D342F] leading-relaxed">
              <Quote className="w-6 h-6 text-[#C2DDB4] flex-shrink-0 mt-1" />
              <span>{study.takeaway}</span>
            </p>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <span key={t} className="px-3 py-1 bg-[#F7FFF5] border border-[#C2DDB4]/60 text-[#47635D] text-xs rounded-full">
                {t}
              </span>
            ))}
          </div>

          {showScorecard && (
            <ScorecardBanner
              context="Before you commission a study like this, see where you stand with a free instant readiness score."
              source={`${source} - Scorecard`}
            />
          )}
        </div>
      </article>

      {/* ── Related case studies ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#F0F4F0] border-t border-[#C2DDB4]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[#4E9141] font-medium uppercase tracking-wider text-sm">Keep reading</span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1D342F] mt-2">Related case studies</h2>
            </div>
            <Link href="/case-studies" className="hidden sm:inline text-[#4E9141] font-semibold hover:underline">
              All case studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group bg-white rounded-2xl border-2 border-[#C2DDB4]/40 hover:border-[#4E9141] p-6 transition-all hover:shadow-lg"
              >
                <span className="inline-block px-3 py-1 bg-[#F7FFF5] text-[#4E9141] text-xs font-semibold rounded-full mb-4">
                  {getServiceMeta(c.service).label}
                </span>
                <h3 className="text-lg font-bold text-[#1D342F] group-hover:text-[#4E9141] transition-colors leading-snug mb-3">
                  {c.shortTitle}
                </h3>
                <p className="text-[#47635D] text-sm leading-relaxed line-clamp-3 mb-4">{c.summary}</p>
                <span className="inline-flex items-center gap-1 text-[#4E9141] font-semibold text-sm">
                  Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1D342F]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Compass className="w-10 h-10 text-[#C2DDB4] mx-auto mb-5" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Have a similar decision to make?</h2>
          <p className="text-[#C2DDB4] text-lg mb-10">{service.ctaBlurb}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton source={`${source} - Bottom`} label={service.cta} variant="secondary" />
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              More case studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
