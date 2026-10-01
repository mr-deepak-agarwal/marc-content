'use client'

import Link from 'next/link'
import { ClipboardCheck, ArrowRight, Layers, MessageSquare } from 'lucide-react'

// Week 5 deliverables:
//   - Sticky sidebar lead-magnet CTA on blog post pages (desktop only)
//   - Cluster -> pillar internal links

function track(event, params) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }
}

/**
 * Sticky sidebar. Desktop only (hidden below lg) — mobile gets the inline
 * ScorecardBanner rendered in BlogDetailClient instead.
 */
export default function BlogSidebar({ cluster, slug }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-5">
        {/* Lead magnet */}
        <div className="rounded-2xl border border-[#C2DDB4] bg-[#F7FFF5] p-6">
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4">
            <ClipboardCheck className="w-6 h-6 text-[#4E9141]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#4E9141] mb-1">Free Self-Assessment</p>
          <h3 className="text-lg font-bold text-[#1D342F] mb-2 leading-snug">
            India Market Entry &amp; Feasibility Scorecard
          </h3>
          <p className="text-sm text-[#47635D] mb-5">
            Get an instant readiness score across market, regulatory, financial and operational
            dimensions — 4 minutes, free.
          </p>
          <Link
            href="/scorecard"
            onClick={() => track('scorecard_banner_click', { source: 'Blog Post Sidebar', post: slug })}
            className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 bg-[#4E9141] text-white rounded-full text-sm font-semibold hover:bg-[#3d7333] transition-colors"
          >
            Take the Scorecard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Service-matched CTA + pillar link */}
        {cluster ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#4E9141]" />
              <p className="text-xs font-bold uppercase tracking-wide text-[#47635D]">{cluster.label}</p>
            </div>
            <p className="text-sm text-[#47635D] mb-4">{cluster.cta.blurb}</p>
            <Link
              href={cluster.pillar.href}
              onClick={() => track('blog_pillar_click', { source: 'Blog Post Sidebar', cluster: cluster.id, post: slug })}
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 border-2 border-[#4E9141] text-[#4E9141] rounded-full text-sm font-semibold hover:bg-[#4E9141] hover:text-white transition-colors"
            >
              {cluster.cta.label}
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-[#4E9141]" />
              <p className="text-xs font-bold uppercase tracking-wide text-[#47635D]">Talk to MARC</p>
            </div>
            <p className="text-sm text-[#47635D] mb-4">
              Have a question about your own situation? Speak to a senior adviser.
            </p>
            <Link
              href="/contact-us"
              onClick={() => track('blog_contact_click', { source: 'Blog Post Sidebar', post: slug })}
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 border-2 border-[#4E9141] text-[#4E9141] rounded-full text-sm font-semibold hover:bg-[#4E9141] hover:text-white transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        )}
      </div>
    </aside>
  )
}

/** Short "this article is part of…" note near the top of the article body. */
export function ClusterNotice({ cluster, slug }) {
  if (!cluster) return null
  return (
    <p className="mb-10 px-4 py-3 rounded-xl bg-[#F7FFF5] border border-[#C2DDB4] text-sm text-[#47635D]">
      Part of our <span className="font-semibold text-[#1D342F]">{cluster.label}</span> series. For the full
      picture, see our{' '}
      <Link
        href={cluster.pillar.href}
        onClick={() => track('blog_pillar_click', { source: 'Blog Post Intro', cluster: cluster.id, post: slug })}
        className="text-[#4E9141] font-semibold underline underline-offset-2 hover:text-[#3d7333]"
      >
        {cluster.pillar.anchor}
      </Link>
      .
    </p>
  )
}

/** "Go deeper" box after the Key Takeaway: pillar link + text links to sibling posts. */
export function ClusterGoDeeper({ cluster, posts, slug }) {
  if (!cluster) return null
  return (
    <div className="mb-12 p-8 rounded-2xl border border-[#C2DDB4] bg-white">
      <h2 className="text-xl font-bold text-[#1D342F] mb-2">Go deeper on {cluster.label}</h2>
      <p className="text-[#47635D] mb-5">
        This article is one of several on the topic. Start with our{' '}
        <Link
          href={cluster.pillar.href}
          onClick={() => track('blog_pillar_click', { source: 'Blog Post Go Deeper', cluster: cluster.id, post: slug })}
          className="text-[#4E9141] font-semibold underline underline-offset-2 hover:text-[#3d7333]"
        >
          {cluster.pillar.anchor}
        </Link>{' '}
        page{posts.length > 0 ? ', or keep reading:' : ' for the full guide.'}
      </p>
      {posts.length > 0 && (
        <ul className="space-y-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="text-[#1D342F] hover:text-[#4E9141] font-medium transition-colors"
              >
                {p.title} <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
