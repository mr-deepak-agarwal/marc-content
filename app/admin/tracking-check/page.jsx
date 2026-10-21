'use client'

// Admin-only page for checking that ad conversions are wired up BEFORE any ad
// spend goes out. Lives at /admin/tracking-check (already noindex via next.config.js).
//
// It shows, for every conversion event the site fires, whether a Google Ads
// conversion label is configured, and lets an admin fire a test of each one.
// A test fired here is a real conversion event: it reaches GA4 and, if a label
// is set, Google Ads, where it will count as one conversion.

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { GOOGLE_ADS_ID, GOOGLE_ADS_CONVERSION_LABELS, trackConversion } from '@/lib/analytics'

const EVENTS = [
  { key: 'form_submit', what: 'Contact form, pop-up and service-page form submitted' },
  { key: 'whatsapp_click', what: 'WhatsApp button or chatbot WhatsApp link clicked' },
  { key: 'scorecard_complete', what: 'Business scorecard finished' },
  { key: 'chatbot_high_intent', what: 'Chatbot lead, high intent' },
  { key: 'chatbot_low_intent', what: 'Chatbot lead, early stage' },
  { key: 'checklist_download', what: 'Checklist downloaded' },
]

export default function TrackingCheckPage() {
  const [state, setState] = useState('checking') // checking | denied | ok
  const [gtagReady, setGtagReady] = useState(false)
  const [fired, setFired] = useState({})

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setState(session?.user?.app_metadata?.role === 'admin' ? 'ok' : 'denied')
    })
    setGtagReady(typeof window !== 'undefined' && typeof window.gtag === 'function')
  }, [])

  const fire = (key) => {
    trackConversion(key, { source: 'tracking-check', test: true })
    setFired((f) => ({ ...f, [key]: new Date().toLocaleTimeString('en-IN') }))
  }

  if (state === 'checking') return <p className="p-8 text-[#47635D]">Checking sign-in…</p>
  if (state === 'denied') {
    return (
      <p className="p-8 text-[#47635D]">
        Admins only. Sign in at <a className="underline" href="/admin/dashboard">/admin/dashboard</a> first, then return here.
      </p>
    )
  }

  const configured = EVENTS.filter((e) => GOOGLE_ADS_CONVERSION_LABELS[e.key]).length

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-2xl font-bold text-[#1D342F] mb-1">Ad tracking check</h1>
      <p className="text-sm text-[#47635D] mb-6">
        Google Ads account <b>{GOOGLE_ADS_ID}</b> · Google tag on this page:{' '}
        <b className={gtagReady ? 'text-[#2F6B2A]' : 'text-red-600'}>{gtagReady ? 'loaded' : 'not loaded'}</b> ·
        Labels set: <b>{configured} of {EVENTS.length}</b>
      </p>

      <div className="bg-white border border-[#C2DDB4]/40 rounded-2xl overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#1D342F] text-white text-left">
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">When it fires</th>
              <th className="px-4 py-3">Ads label</th>
              <th className="px-4 py-3">Test</th>
            </tr>
          </thead>
          <tbody>
            {EVENTS.map((e) => {
              const set = !!GOOGLE_ADS_CONVERSION_LABELS[e.key]
              return (
                <tr key={e.key} className="border-t border-[#C2DDB4]/30">
                  <td className="px-4 py-3 font-mono text-xs">{e.key}</td>
                  <td className="px-4 py-3 text-[#47635D]">{e.what}</td>
                  <td className={`px-4 py-3 font-semibold ${set ? 'text-[#2F6B2A]' : 'text-red-600'}`}>{set ? 'Set' : 'Missing'}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => fire(e.key)}
                      className="px-3 py-1.5 text-xs font-semibold text-[#4E9141] bg-[#F7FFF5] rounded-lg hover:bg-[#C2DDB4]/30">
                      Fire test
                    </button>
                    {fired[e.key] && <span className="ml-2 text-xs text-[#47635D]">sent {fired[e.key]}</span>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-[#F7FFF5] border border-[#C2DDB4] rounded-2xl p-5 text-sm text-[#1D342F] space-y-2">
        <p><b>To make an event "live" in Google Ads:</b></p>
        <ol className="list-decimal pl-5 space-y-1 text-[#47635D]">
          <li>Google Ads → Goals → Conversions → New conversion action → Website → add it manually using the tag. Create one for each event above, with the category "Submit lead form" (or "Contact").</li>
          <li>Copy the part after the slash in <code>AW-928957158/…</code> into a Vercel environment variable named <code>NEXT_PUBLIC_GADS_LABEL_&lt;EVENT_NAME&gt;</code> (see <code>lib/analytics.js</code>), then redeploy.</li>
          <li>Reload this page: the row should say "Set". Click "Fire test".</li>
          <li>Confirm it arrived: Tag Assistant (tagassistant.google.com) shows the conversion tag firing straight away. In Google Ads the status changes to "Recording conversions" after the first conversion is processed, which can take several hours.</li>
        </ol>
        <p className="text-xs text-[#5A6F68]">A test counts as one real conversion in Google Ads. Fire each test once, then remove or ignore it in reporting.</p>
      </div>
    </div>
  )
}
