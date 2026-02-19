'use client'

import React, { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, ArrowRight, Check } from 'lucide-react'

// ── CONFIG — update these ─────────────────────────────────────
const WHATSAPP_NUMBER = '919359628675' // country code + number, no + or spaces
const COMPANY_NAME = 'MARC'
// ─────────────────────────────────────────────────────────────

const steps = [
  { id: 'name',    question: "Hi there! 👋 I'm the MARC assistant.\n\nWhat's your name?",          field: 'name',    placeholder: 'Your full name',        type: 'text'  },
  { id: 'email',   question: "Great to meet you, {name}! 😊\n\nWhat's your email address?",         field: 'email',   placeholder: 'you@company.com',       type: 'email' },
  { id: 'phone',   question: "Perfect. What's the best phone number to reach you?",                  field: 'phone',   placeholder: '+91 98765 43210',       type: 'tel'   },
  { id: 'company', question: "Almost done! Which company are you from?",                             field: 'company', placeholder: 'Your company name',      type: 'text'  },
]

const WHATSAPP_STEP = 'whatsapp'
const DONE_STEP     = 'done'

export default function ChatbotWidget() {
  const [open, setOpen]       = useState(false)
  const [stepIdx, setStepIdx] = useState(0)
  const [phase, setPhase]     = useState('collecting') // 'collecting' | 'whatsapp' | 'done'
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [inputVal, setInputVal] = useState('')
  const [messages, setMessages] = useState([])
  const [typing, setTyping]   = useState(false)
  const [inputError, setInputError] = useState('')
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // Focus input when open
  useEffect(() => {
    if (open && phase === 'collecting') {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open, phase])

  // On first open, push the first bot message
  useEffect(() => {
    if (open && messages.length === 0) {
      pushBot(steps[0].question)
    }
  }, [open])

  function pushBot(text, delay = 600) {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text }])
    }, delay)
  }

  function pushUser(text) {
    setMessages(prev => [...prev, { from: 'user', text }])
  }

  function interpolate(str, data) {
    return str.replace('{name}', data.name || '')
  }

  function validate(value, step) {
    if (!value.trim()) return 'This field is required.'
    if (step.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return 'Please enter a valid email address.'
    if (step.type === 'tel' && value.replace(/\D/g, '').length < 7)
      return 'Please enter a valid phone number.'
    return ''
  }

  function handleSend() {
    if (phase !== 'collecting') return
    const step = steps[stepIdx]
    const error = validate(inputVal, step)
    if (error) { setInputError(error); return }
    setInputError('')

    const val = inputVal.trim()
    const newData = { ...formData, [step.field]: val }
    setFormData(newData)
    setInputVal('')
    pushUser(val)

    const nextIdx = stepIdx + 1

    if (nextIdx < steps.length) {
      setStepIdx(nextIdx)
      pushBot(interpolate(steps[nextIdx].question, newData))
    } else {
      // All collected — ask WhatsApp
      setPhase('whatsapp')
      pushBot(
        `Thanks ${newData.name}! 🎉 We've got your details and someone from ${COMPANY_NAME} will be in touch.\n\nWould you also like to connect with us directly on WhatsApp for a faster response?`,
        800
      )
    }
  }

  function handleWhatsApp(yes) {
    if (yes) {
      pushUser('Yes, connect me on WhatsApp!')
      const msg = encodeURIComponent(
        `Hi MARC! I'm ${formData.name} from ${formData.company}. I'd like to explore how MARC can help us grow.`
      )
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
        pushBot("Opening WhatsApp now... 📲 We look forward to speaking with you!", 400)
        setPhase('done')
      }, 400)
    } else {
      pushUser('No thanks, email is fine.')
      pushBot(`No problem at all! We'll reach out to you at ${formData.email} shortly. Have a great day! 😊`, 600)
      setPhase('done')
    }
  }

  function handleReset() {
    setStepIdx(0)
    setPhase('collecting')
    setFormData({ name: '', email: '', phone: '', company: '' })
    setInputVal('')
    setMessages([])
    setInputError('')
    setTimeout(() => pushBot(steps[0].question), 300)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      {/* ── Floating toggle button ─────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-[#1D342F] rotate-90 scale-95'
            : 'bg-[#4E9141] hover:bg-[#3e7433] hover:scale-110'
        }`}
      >
        {open
          ? <X className="w-6 h-6 text-white" />
          : <MessageCircle className="w-6 h-6 text-white" />
        }
        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#4E9141] animate-ping opacity-30" />
        )}
      </button>

      {/* ── Chat window ───────────────────────────────────── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
        style={{ height: '520px' }}
      >
        {/* Header */}
        <div className="bg-[#4E9141] px-5 py-4 flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg">
            M
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">MARC Assistant</p>
            <p className="text-white/70 text-xs">Growth Advisory · Typically replies fast</p>
          </div>
          <div className="ml-auto w-2 h-2 rounded-full bg-[#C2DDB4] animate-pulse" />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#F7FFF5]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.from === 'bot' && (
                <div className="w-7 h-7 rounded-full bg-[#4E9141] flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 mt-1">
                  M
                </div>
              )}
              <div
                className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'bg-[#4E9141] text-white rounded-br-sm'
                    : 'bg-white text-[#1D342F] shadow-sm rounded-bl-sm border border-[#C2DDB4]/30'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-full bg-[#4E9141] flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0">
                M
              </div>
              <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-[#C2DDB4]/30 flex items-center gap-1">
                <span className="w-2 h-2 bg-[#4E9141]/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#4E9141]/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-[#4E9141]/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {/* WhatsApp choice buttons */}
          {phase === 'whatsapp' && !typing && (
            <div className="flex gap-2 pl-9 mt-1">
              <button
                onClick={() => handleWhatsApp(true)}
                className="flex-1 py-2.5 px-3 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1ebe5a] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.845L0 24l6.335-1.499A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.844 0-3.576-.476-5.083-1.31l-.364-.217-3.764.89.946-3.668-.237-.38A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Yes, WhatsApp me!
              </button>
              <button
                onClick={() => handleWhatsApp(false)}
                className="flex-1 py-2.5 px-3 bg-white text-[#47635D] text-sm font-semibold rounded-xl border-2 border-[#C2DDB4] hover:border-[#4E9141] transition-colors"
              >
                Email is fine
              </button>
            </div>
          )}

          {/* Done — restart option */}
          {phase === 'done' && !typing && (
            <div className="pl-9">
              <button
                onClick={handleReset}
                className="text-xs text-[#4E9141] underline underline-offset-2 hover:text-[#3e7433] transition-colors"
              >
                Start a new conversation
              </button>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        {phase === 'collecting' && (
          <div className="px-4 py-3 bg-white border-t border-[#C2DDB4]/30 flex-shrink-0">
            {inputError && (
              <p className="text-red-500 text-xs mb-1.5 pl-1">{inputError}</p>
            )}
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type={steps[stepIdx]?.type || 'text'}
                value={inputVal}
                onChange={e => { setInputVal(e.target.value); setInputError('') }}
                onKeyDown={handleKeyDown}
                placeholder={steps[stepIdx]?.placeholder || ''}
                className="flex-1 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl px-4 py-2.5 text-sm text-[#1D342F] placeholder:text-[#47635D]/50 focus:outline-none focus:border-[#4E9141] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!inputVal.trim()}
                className="w-10 h-10 bg-[#4E9141] rounded-xl flex items-center justify-center text-white hover:bg-[#3e7433] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {/* Progress dots */}
            <div className="flex justify-center gap-1.5 mt-3">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i < stepIdx
                      ? 'w-4 h-1.5 bg-[#4E9141]'
                      : i === stepIdx
                      ? 'w-4 h-1.5 bg-[#4E9141]'
                      : 'w-1.5 h-1.5 bg-[#C2DDB4]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Done footer */}
        {phase === 'done' && (
          <div className="px-4 py-3 bg-white border-t border-[#C2DDB4]/30 flex-shrink-0 flex items-center justify-center gap-2 text-[#4E9141]">
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">We'll be in touch soon!</span>
          </div>
        )}
      </div>
    </>
  )
}
