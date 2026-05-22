'use client'

import { useState } from 'react'
import { MessageSquare, FileDown, ChevronRight } from 'lucide-react'

const NAV = [
  { key: 'contacts', label: 'Contact Submissions', icon: MessageSquare },
  { key: 'reports',  label: 'Reports Download',    icon: FileDown },
]

export default function AdminLayout({ children }) {
  const [active, setActive] = useState('contacts')

  return (
    <>
      {/* Hide the main site header/nav that wraps the rest of the app */}
      <style>{`
        body > header,
        body > nav,
        #__next > header,
        #__next > nav,
        main > header,
        [data-site-header],
        [data-site-nav] {
          display: none !important;
        }
      `}</style>

      <div className="min-h-screen flex bg-[#F7FFF5]">

        {/* ── Sidebar ─────────────────────────────────── */}
        <aside className="w-60 shrink-0 bg-[#1D342F] flex flex-col sticky top-0 h-screen">
          {/* Brand */}
          <div className="px-6 py-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#4E9141] flex items-center justify-center">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-white font-bold tracking-tight">MARC Admin</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {NAV.map(({ key, label, icon: Icon }) => {
              const isActive = active === key
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                    isActive
                      ? 'bg-[#4E9141] text-white shadow-lg shadow-[#4E9141]/30'
                      : 'text-[#C2DDB4] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left">{label}</span>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-70" />}
                </button>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10">
            <p className="text-[#47635D] text-xs">MARC Dashboard</p>
          </div>
        </aside>

        {/* ── Main content (page.jsx controls what's shown) ── */}
        <main className="flex-1 min-w-0">
          {/* Pass active section down via a custom event / context.
              We use a data attribute on a hidden element that page.jsx can read,
              OR we clone children with the prop. Since layout wraps a Server
              Component page in Next.js we use a lightweight DOM-based bridge: */}
          <input type="hidden" id="__admin_section" value={active} />
          {children}
        </main>

      </div>
    </>
  )
}