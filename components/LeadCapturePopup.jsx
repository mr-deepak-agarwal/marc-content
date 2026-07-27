'use client'

import { useEffect, useState, useRef } from 'react'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'

// ── CONFIG ───────────────────────────────────────────────────
const DISMISS_COOKIE = 'marc_popup_dismissed'
// 400 days is the hard cap browsers (Chrome, Safari, etc.) enforce on cookie
// lifetime — there's no literal "forever" cookie, so this is as close as it gets.
// Once a visitor sees/dismisses/submits this, they won't see it again for ~13 months.
const DISMISS_DAYS = 400
const TIME_TRIGGER_MS = 30000  // fallback trigger after 30s (covers mobile, where exit-intent can't fire)
const SCROLL_TRIGGER_PCT = 55  // fallback trigger after scrolling 55% down the page
// ─────────────────────────────────────────────────────────────

function hasDismissed() {
  if (typeof document === 'undefined') return false
  return document.cookie.includes(`${DISMISS_COOKIE}=1`)
}

function setDismissed() {
  const maxAge = DISMISS_DAYS * 24 * 60 * 60
  document.cookie = `${DISMISS_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`
}

function track(eventName, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params)
    }
  } catch (err) {
    // no-op
  }
}

export default function LeadCapturePopup() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false) // drives the slide-in transition
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const firedRef = useRef(false)
  const loadedAtRef = useRef(Date.now())

  useEffect(() => {
    if (hasDismissed()) return

    function fireOnce(trigger) {
      if (firedRef.current) return
      firedRef.current = true
      track('popup_shown', { trigger })
      setVisible(true)
      // Next tick, so the transition actually animates in rather than snapping
      requestAnimationFrame(() => setTimeout(() => setMounted(true), 20))
    }

    // 1) Exit intent — cursor leaves toward the top of the viewport (desktop)
    function onMouseOut(e) {
      if (e.clientY <= 0) fireOnce('exit_intent')
    }
    document.addEventListener('mouseout', onMouseOut)

    // 2) Timed fallback — the only trigger that reliably works on mobile
    const timer = setTimeout(() => fireOnce('timed'), TIME_TRIGGER_MS)

    // 3) Scroll-depth fallback — catches engaged readers who scroll but never move to exit
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const pct = (scrolled / document.documentElement.scrollHeight) * 100
      if (pct >= SCROLL_TRIGGER_PCT) fireOnce('scroll')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  function handleClose() {
    track('popup_dismissed')
    setMounted(false)
    setDismissed()
    setTimeout(() => setVisible(false), 300) // let the slide-out finish first
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) {
      setError('Please fill in both fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: 'Not provided (popup)',
          message: `Lead capture popup submission from ${form.name}.`,
          source_page: 'Lead Capture Popup',
          formLoadedAt: loadedAtRef.current - 5000, // satisfies the API's 3s bot time-check
        }),
      })
      setSubmitted(true)
      setDismissed()
      track('popup_lead_captured')
      setTimeout(() => handleClose(), 2500)
    } catch (err) {
      setError('Something went wrong — please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!visible) return null

  return (
    <div
      className={`fixed bottom-6 left-6 z-[55] w-[300px] max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="relative bg-white rounded-2xl shadow-xl border border-[#C2DDB4]/50 p-5">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[#47635D]/60 hover:bg-[#F7FFF5] hover:text-[#47635D] transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {submitted ? (
          <div className="flex items-center gap-3 py-1">
            <CheckCircle2 className="w-8 h-8 text-[#4E9141] flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#1D342F]">
                Thanks, {form.name.split(' ')[0]}!
              </p>
              <p className="text-xs text-[#47635D]">We'll be in touch within 1–2 business days.</p>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-sm font-bold text-[#1D342F] pr-4 mb-1">
              Talk to a Growth Advisor
            </h3>
            <p className="text-xs text-[#47635D] mb-3 leading-relaxed">
              Leave your details and we'll follow up — no obligation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-lg px-3 py-2 text-xs text-[#1D342F] placeholder:text-[#47635D]/50 focus:outline-none focus:border-[#4E9141] transition-colors"
              />
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-lg px-3 py-2 text-xs text-[#1D342F] placeholder:text-[#47635D]/50 focus:outline-none focus:border-[#4E9141] transition-colors"
              />
              {error && <p className="text-red-500 text-[11px]">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-[#4E9141] text-white rounded-lg text-xs font-semibold hover:bg-[#3e7433] transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
              >
                {loading ? 'Sending...' : 'Get in Touch'}
                {!loading && <ArrowRight className="w-3 h-3" />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
