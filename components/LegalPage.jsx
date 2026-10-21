import Footer from '@/components/Footer'

// Shared layout for the legal pages (privacy, terms, cookies).
// `sections` is an array of { title, body } where body is an array of
// paragraphs (strings) or { list: [...] } blocks.
export default function LegalPage({ title, updated, intro, sections, after }) {
  return (
    <>
      <main className="bg-white pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#1D342F] mb-3">{title}</h1>
          <p className="text-sm text-[#47635D] mb-8">Last updated: {updated}</p>
          {intro && <p className="text-[#47635D] leading-relaxed mb-10">{intro}</p>}
          {sections.map((s) => (
            <section key={s.title} className="mb-8">
              <h2 className="text-xl font-bold text-[#1D342F] mb-3">{s.title}</h2>
              {s.body.map((b, i) =>
                typeof b === 'string' ? (
                  <p key={i} className="text-[#47635D] leading-relaxed mb-3">{b}</p>
                ) : (
                  <ul key={i} className="list-disc pl-6 mb-3 space-y-1 text-[#47635D] leading-relaxed">
                    {b.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )
              )}
            </section>
          ))}
          {after}
        </div>
      </main>
      <Footer />
    </>
  )
}
