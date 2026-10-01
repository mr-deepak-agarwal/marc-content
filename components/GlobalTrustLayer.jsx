import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import { testimonials } from '@/data/mock'
import { ShieldCheck, Quote, Newspaper, Award } from 'lucide-react'

/**
 * GlobalTrustLayer (Week 4: trust layer for US / international visitors)
 *
 * Only real, public proof is used here:
 *  - the Pivot Capital testimonial is quoted verbatim from data/mock.js
 *  - the other references are short summaries of public testimonials and
 *    recommendations (source: "Public Case Studies, Testimonials & Client
 *    References" note), clearly labelled as summaries, never as invented quotes
 *  - press figures are attributed to the publication and dated "at the time"
 *
 * The plan's "₹500Cr+ deals advised / 500+ projects / 5 continents" stat block is
 * deliberately NOT used: none of the supplied source documents supports those
 * numbers. Add them here once the client confirms them in writing.
 */

const references = [
  {
    name: 'Chris W. David, CPA/ABV, ASA',
    summary:
      'Worked with MARC across multiple transactions and due diligence engagements, and relies on the team for financial analysis, research and quality of earnings reports.',
    tag: 'US transaction advisory · QoE',
  },
  {
    name: 'Cesar Viana Teague, Director, NextLevel Consulting',
    summary:
      'Praised MARC’s market research for technical staff augmentation, covering trends, target industries and specific partners.',
    tag: 'International market research',
  },
  {
    name: 'Michael Conniff, Managing Director, The Accelerator',
    summary: 'Says MARC’s market research materially accelerated his business development plans.',
    tag: 'Research turnaround',
  },
  {
    name: 'Shaunak J. Dave, MD & CEO, Optel Group India',
    summary:
      'Credits MARC with a comprehensive report, guidance and support on permissions and licences for starting India operations.',
    tag: 'India setup',
  },
  {
    name: 'Philip Stoten, Founder of SCOOP and Forbes Contributor',
    summary:
      'Has used MARC on multiple research projects and cites the efficiency, experience and usefulness of the work for his own customers.',
    tag: 'Recurring research partner',
  },
]

export default function GlobalTrustLayer() {
  const pivot = testimonials.find((t) => /Pivot Capital/i.test(t.position))

  return (
    <section className="py-24 bg-white border-t border-[#C2DDB4]/30" data-testid="global-trust-layer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#4E9141]" />
            <span className="text-[#4E9141] font-semibold tracking-widest uppercase text-xs">
              Trusted across borders
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1D342F] leading-tight mb-4">
            What US and international advisory firms say about working with MARC
          </h2>
          <p className="text-[#47635D] text-lg">
            You are handing over a piece of your client work. Here is what firms who have done that say.
          </p>
        </div>

        {/* Verbatim testimonial */}
        {pivot && (
          <figure className="relative bg-[#1D342F] rounded-3xl p-8 lg:p-12 mb-10">
            <Quote className="w-10 h-10 text-[#4E9141] mb-4" />
            <blockquote className="text-xl lg:text-2xl text-white leading-relaxed font-medium mb-6">
              {pivot.content}
            </blockquote>
            <figcaption className="text-[#C2DDB4]">
              <span className="font-semibold text-white">{pivot.author}</span>, {pivot.position}
            </figcaption>
          </figure>
        )}

        {/* Summarised public references */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {references.map((r) => (
            <div key={r.name} className="bg-[#F7FFF5] border border-[#C2DDB4]/60 rounded-2xl p-6">
              <span className="inline-block px-3 py-1 bg-white text-[#4E9141] text-xs font-semibold rounded-full border border-[#C2DDB4]/60 mb-4">
                {r.tag}
              </span>
              <p className="text-[#1D342F] font-semibold mb-2 leading-snug">{r.name}</p>
              <p className="text-[#47635D] text-sm leading-relaxed">{r.summary}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#47635D] mb-14">
          References above are summarised from public testimonials and recommendations, and named with each
          person&apos;s title as published.
        </p>

        {/* Independent coverage */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="border border-[#C2DDB4]/60 rounded-2xl p-6">
            <Newspaper className="w-6 h-6 text-[#4E9141] mb-3" />
            <p className="font-semibold text-[#1D342F] mb-1">The Finance Story</p>
            <p className="text-sm text-[#47635D]">
              Reported a 30-member team and a client base of 250+ at the time of publication.
            </p>
          </div>
          <div className="border border-[#C2DDB4]/60 rounded-2xl p-6">
            <Newspaper className="w-6 h-6 text-[#4E9141] mb-3" />
            <p className="font-semibold text-[#1D342F] mb-1">YourStory / SMBStory</p>
            <p className="text-sm text-[#47635D]">
              Profiled MARC as an advisory firm with pan-India presence and over 300 clients at the time of the article.
            </p>
          </div>
          <div className="border border-[#C2DDB4]/60 rounded-2xl p-6">
            <Award className="w-6 h-6 text-[#4E9141] mb-3" />
            <p className="font-semibold text-[#1D342F] mb-1">ET Now Business Conclave &amp; Awards 2025</p>
            <p className="text-sm text-[#47635D]">Recognised for Excellence in Growth Advisory &amp; Consulting.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 bg-[#F7FFF5] border border-[#C2DDB4] rounded-2xl p-6 lg:p-8">
          <ShieldCheck className="w-10 h-10 text-[#4E9141] flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#1D342F] mb-1">Start with a confidential conversation</h3>
            <p className="text-[#47635D]">
              Discuss a pilot engagement under NDA. White-label by default, so your client only ever sees your brand.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <CTAButton source="Global Hub - Trust Layer" label="Book a Confidential Discussion" variant="primary" />
            <Link href="/media" className="text-sm text-[#4E9141] font-semibold hover:underline">
              See our media coverage →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
