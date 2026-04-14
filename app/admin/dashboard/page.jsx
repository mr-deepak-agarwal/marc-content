'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import {
  LogOut, RefreshCw, Mail, Phone, MessageSquare, Clock,
  CheckCircle2, Circle, Search, Filter, Eye, X, Lock, User, Loader2
} from 'lucide-react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// ── Status badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const map = {
    new:        { label: 'New',         cls: 'bg-blue-50 text-blue-600 border-blue-200' },
    contacted:  { label: 'Contacted',   cls: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
    closed:     { label: 'Closed',      cls: 'bg-green-50 text-[#4E9141] border-green-200' },
  }
  const { label, cls } = map[status] ?? map.new
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${cls}`}>
      {label}
    </span>
  )
}

// ── Detail Modal ──────────────────────────────────────────────────────────────
const DetailModal = ({ entry, onClose, onStatusChange }) => {
  if (!entry) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="absolute inset-0 bg-[#1D342F]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-[#4E9141] to-[#C2DDB4]" />
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <X className="w-4 h-4 text-gray-500" />
        </button>
        <div className="p-7">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#1D342F]">{entry.name}</h3>
              <p className="text-[#47635D] text-sm mt-0.5">{new Date(entry.created_at).toLocaleString()}</p>
            </div>
            <StatusBadge status={entry.status} />
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-[#F7FFF5] rounded-xl">
              <Mail className="w-4 h-4 text-[#4E9141]" />
              <a href={`mailto:${entry.email}`} className="text-[#1D342F] hover:text-[#4E9141] text-sm font-medium transition-colors">{entry.email}</a>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#F7FFF5] rounded-xl">
              <Phone className="w-4 h-4 text-[#4E9141]" />
              <a href={`tel:${entry.mobile}`} className="text-[#1D342F] hover:text-[#4E9141] text-sm font-medium transition-colors">{entry.mobile}</a>
            </div>
            <div className="p-3 bg-[#F7FFF5] rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-[#4E9141]" />
                <span className="text-xs font-semibold text-[#47635D] uppercase tracking-wider">Message</span>
              </div>
              <p className="text-[#1D342F] text-sm leading-relaxed">{entry.message}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#47635D] uppercase tracking-wider mb-2">Update Status</p>
            <div className="flex gap-2">
              {['new', 'contacted', 'closed'].map((s) => (
                <button
                  key={s}
                  onClick={() => onStatusChange(entry.id, s)}
                  className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all capitalize ${
                    entry.status === s
                      ? 'bg-[#4E9141] text-white border-[#4E9141]'
                      : 'bg-white text-[#47635D] border-[#C2DDB4] hover:border-[#4E9141] hover:text-[#4E9141]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Login Screen ──────────────────────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) {
      setError(err.message)
      setLoading(false)
    } else {
      onLogin()
    }
  }

  return (
    <div className="min-h-screen bg-[#F7FFF5] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#4E9141] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#1D342F]">MARC Admin</h1>
          <p className="text-[#47635D] text-sm mt-1">Sign in to view contact submissions</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#C2DDB4]/30 p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4E9141]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl text-[#1D342F] text-sm focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4E9141]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full pl-10 pr-4 py-3 bg-[#F7FFF5] border border-[#C2DDB4]/50 rounded-xl text-[#1D342F] text-sm focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all"
              />
            </div>
            {error && <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#4E9141] text-white rounded-xl font-semibold hover:bg-[#3d7334] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing in...</> : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
const Dashboard = ({ onLogout }) => {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const fetchSubmissions = async () => {
    setLoading(true)
    const { data } = await supabase
      .from('contact_requests')
      .select('*')
      .order('created_at', { ascending: false })
    setSubmissions(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchSubmissions() }, [])

  const updateStatus = async (id, status) => {
    await supabase.from('contact_requests').update({ status }).eq('id', id)
    setSubmissions((prev) => prev.map((s) => s.id === id ? { ...s, status } : s))
    if (selected?.id === id) setSelected((prev) => ({ ...prev, status }))
  }

  const filtered = submissions.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || s.status === filter
    return matchSearch && matchFilter
  })

  const counts = {
    all: submissions.length,
    new: submissions.filter((s) => s.status === 'new').length,
    contacted: submissions.filter((s) => s.status === 'contacted').length,
    closed: submissions.filter((s) => s.status === 'closed').length,
  }

  return (
    <div className="min-h-screen bg-[#F7FFF5]">
      <DetailModal entry={selected} onClose={() => setSelected(null)} onStatusChange={updateStatus} />

      {/* Header */}
      <header className="bg-white border-b border-[#C2DDB4]/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#4E9141] rounded-lg flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[#1D342F]">Contact Dashboard</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={fetchSubmissions} className="w-9 h-9 rounded-full bg-[#F7FFF5] flex items-center justify-center text-[#47635D] hover:bg-[#C2DDB4] transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 text-sm text-[#47635D] hover:text-[#1D342F] transition-colors">
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', key: 'all', color: 'text-[#1D342F]' },
            { label: 'New', key: 'new', color: 'text-blue-600' },
            { label: 'Contacted', key: 'contacted', color: 'text-yellow-600' },
            { label: 'Closed', key: 'closed', color: 'text-[#4E9141]' },
          ].map(({ label, key, color }) => (
            <div key={key} className="bg-white rounded-2xl p-5 border border-[#C2DDB4]/20">
              <p className="text-[#47635D] text-xs uppercase tracking-wider mb-1">{label}</p>
              <p className={`text-3xl font-bold ${color}`}>{counts[key]}</p>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#47635D]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#C2DDB4]/40 rounded-xl text-sm text-[#1D342F] focus:outline-none focus:border-[#4E9141] transition-all"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'new', 'contacted', 'closed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold capitalize transition-all border ${
                  filter === f
                    ? 'bg-[#4E9141] text-white border-[#4E9141]'
                    : 'bg-white text-[#47635D] border-[#C2DDB4]/40 hover:border-[#4E9141]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-[#C2DDB4]/20 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-[#4E9141] animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-[#47635D]">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="font-medium">No submissions found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#C2DDB4]/20">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Email</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Mobile</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Date</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C2DDB4]/10">
                  {filtered.map((row) => (
                    <tr key={row.id} className="hover:bg-[#F7FFF5] transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1D342F] text-sm">{row.name}</td>
                      <td className="px-6 py-4 text-[#47635D] text-sm">{row.email}</td>
                      <td className="px-6 py-4 text-[#47635D] text-sm">{row.mobile}</td>
                      <td className="px-6 py-4 text-[#47635D] text-sm whitespace-nowrap">
                        {new Date(row.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4"><StatusBadge status={row.status} /></td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelected(row)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#4E9141] bg-[#F7FFF5] rounded-lg hover:bg-[#C2DDB4]/30 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Page entry point ──────────────────────────────────────────────────────────
export default function AdminPage() {
  const [session, setSession] = useState(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setChecking(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[#F7FFF5] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#4E9141] animate-spin" />
      </div>
    )
  }

  return session
    ? <Dashboard onLogout={handleLogout} />
    : <LoginScreen onLogin={() => supabase.auth.getSession().then(({ data: { session } }) => setSession(session))} />
}