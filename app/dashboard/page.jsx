'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Users,
  Search,
  Filter,
  Eye,
  X,
  ArrowLeft,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Briefcase,
  CheckCircle,
  Clock,
  XCircle,
  Lock,
  LogOut,
  TrendingUp,
  FileText
} from 'lucide-react'

const DASHBOARD_PASSWORD = 'marc2025' // Change this to your preferred password

const STATUS_STYLES = {
  New:       { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200',   icon: Clock },
  Reviewing: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: Eye },
  Shortlisted: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200',  icon: CheckCircle },
  Rejected:  { bg: 'bg-red-50',    text: 'text-red-700',    border: 'border-red-200',    icon: XCircle },
}

const ROLE_LABELS = {
  'manager-market-research':       'Manager - MR & FA',
  'asst-manager-market-research':  'Asst. Manager - MR & FA',
  'senior-analyst-market-research':'Senior Analyst - MR & FA',
  'intern-market-research':        'Intern - MR & FA',
  'manager-bd':                    'Manager - BD',
  'asst-manager-bd':               'Asst. Manager - BD',
  'executive-bd':                  'Executive - BD',
  'intern-bd':                     'Intern - BD',
  'associate-hr-admin':            'Associate - HR & Admin',
  'intern-hr-admin':               'Intern - HR & Admin',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}

export default function DashboardPage() {
  const [authed, setAuthed] = useState(false)
  const [password, setPassword] = useState('')
  const [pwError, setPwError] = useState(false)

  const [applications, setApplications] = useState([])
  const [search, setSearch] = useState('')
  const [filterRole, setFilterRole] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (authed) {
      const data = JSON.parse(localStorage.getItem('marc_applications') || '[]')
      setApplications(data)
    }
  }, [authed])

  const save = (updated) => {
    setApplications(updated)
    localStorage.setItem('marc_applications', JSON.stringify(updated))
  }

  const updateStatus = (id, status) => {
    const updated = applications.map(a => a.id === id ? { ...a, status } : a)
    save(updated)
    if (selected?.id === id) setSelected(prev => ({ ...prev, status }))
  }

  const deleteApp = (id) => {
    if (!confirm('Delete this application?')) return
    const updated = applications.filter(a => a.id !== id)
    save(updated)
    setSelected(null)
  }

  const filtered = applications.filter(a => {
    const q = search.toLowerCase()
    const matchSearch = !q || a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q) || (ROLE_LABELS[a.role] || a.role).toLowerCase().includes(q)
    const matchRole = !filterRole || a.role === filterRole
    const matchStatus = !filterStatus || a.status === filterStatus
    return matchSearch && matchRole && matchStatus
  })

  // Stats
  const stats = {
    total: applications.length,
    new: applications.filter(a => a.status === 'New').length,
    shortlisted: applications.filter(a => a.status === 'Shortlisted').length,
    rejected: applications.filter(a => a.status === 'Rejected').length,
  }

  // ---- Login Screen ----
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#F7FFF5] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#4E9141] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#1D342F]">HR Dashboard</h1>
            <p className="text-sm text-[#47635D] mt-1">MARC Careers Internal Access</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#C2DDB4]/30 p-8 shadow-sm">
            <label className="text-sm font-semibold text-[#1D342F] block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setPwError(false) }}
              onKeyDown={e => e.key === 'Enter' && (password === DASHBOARD_PASSWORD ? setAuthed(true) : setPwError(true))}
              placeholder="Enter dashboard password"
              className={`w-full px-4 py-3 rounded-xl border ${pwError ? 'border-red-400' : 'border-[#C2DDB4]/50'} text-[#1D342F] focus:outline-none focus:border-[#4E9141] focus:ring-2 focus:ring-[#4E9141]/10 transition-all text-sm mb-1`}
            />
            {pwError && <p className="text-xs text-red-500 mb-3">Incorrect password</p>}
            <button
              onClick={() => password === DASHBOARD_PASSWORD ? setAuthed(true) : setPwError(true)}
              className="mt-4 w-full py-3 bg-[#4E9141] hover:bg-[#3d7334] text-white font-semibold rounded-full transition-all"
            >
              Login
            </button>
          </div>
          <p className="text-center text-xs text-[#47635D]/50 mt-4">
            Default password: <code className="font-mono">marc2025</code> change in dashboard/page.jsx
          </p>
        </div>
      </div>
    )
  }

  // ---- Dashboard ----
  return (
    <div className="min-h-screen bg-[#F7FFF5]">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#C2DDB4]/30 px-6 py-4 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4E9141] flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-[#1D342F]">HR Dashboard</h1>
              <p className="text-xs text-[#47635D]">MARC Careers</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/careers" className="text-sm text-[#47635D] hover:text-[#4E9141] transition-colors flex items-center gap-1.5">
              <ArrowLeft className="w-4 h-4" /> Careers Page
            </Link>
            <button
              onClick={() => setAuthed(false)}
              className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Applications', value: stats.total, color: 'text-[#1D342F]', bg: 'bg-white' },
            { label: 'New', value: stats.new, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Shortlisted', value: stats.shortlisted, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Rejected', value: stats.rejected, color: 'text-red-600', bg: 'bg-red-50' },
          ].map((s, i) => (
            <div key={i} className={`${s.bg} rounded-2xl border border-[#C2DDB4]/20 p-5`}>
              <p className="text-xs text-[#47635D] mb-1">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-[#C2DDB4]/30 p-4 mb-6 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#47635D]/50" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, email, or role..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#C2DDB4]/40 text-sm text-[#1D342F] focus:outline-none focus:border-[#4E9141] transition-all"
            />
          </div>
          <select
            value={filterRole}
            onChange={e => setFilterRole(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-[#C2DDB4]/40 text-sm text-[#1D342F] focus:outline-none focus:border-[#4E9141] transition-all"
          >
            <option value="">All Roles</option>
            {Object.entries(ROLE_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-[#C2DDB4]/40 text-sm text-[#1D342F] focus:outline-none focus:border-[#4E9141] transition-all"
          >
            <option value="">All Statuses</option>
            {Object.keys(STATUS_STYLES).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#C2DDB4]/30 p-16 text-center">
            <FileText className="w-12 h-12 text-[#C2DDB4] mx-auto mb-4" />
            <p className="text-[#47635D] font-medium">No applications yet</p>
            <p className="text-sm text-[#47635D]/60 mt-1">Applications submitted via the form will appear here.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#C2DDB4]/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#C2DDB4]/20 bg-[#F7FFF5]">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Applicant</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Role</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Applied</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Status</th>
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#47635D] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C2DDB4]/10">
                  {filtered.map(app => {
                    const style = STATUS_STYLES[app.status] || STATUS_STYLES.New
                    const StatusIcon = style.icon
                    return (
                      <tr key={app.id} className="hover:bg-[#F7FFF5] transition-colors">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-[#1D342F]">{app.name}</p>
                          <p className="text-xs text-[#47635D]">{app.email}</p>
                        </td>
                        <td className="px-5 py-4 text-[#47635D]">{ROLE_LABELS[app.role] || app.role}</td>
                        <td className="px-5 py-4 text-[#47635D] text-xs">{formatDate(app.submittedAt)}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${style.bg} ${style.text} ${style.border}`}>
                            <StatusIcon className="w-3 h-3" />
                            {app.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <button
                            onClick={() => setSelected(app)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#4E9141]/10 text-[#4E9141] text-xs font-semibold hover:bg-[#4E9141]/20 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" /> View
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4" onClick={() => setSelected(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-[#C2DDB4]/20">
              <h2 className="text-lg font-bold text-[#1D342F]">Application Details</h2>
              <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-full hover:bg-[#F7FFF5] flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-[#47635D]" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Applicant Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#4E9141]/10 flex items-center justify-center text-xl font-bold text-[#4E9141]">
                  {selected.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1D342F]">{selected.name}</p>
                  <p className="text-sm text-[#47635D]">{ROLE_LABELS[selected.role] || selected.role}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 gap-3">
                <a href={`mailto:${selected.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FFF5] hover:bg-[#eaf5e6] transition-colors">
                  <Mail className="w-4 h-4 text-[#4E9141]" />
                  <span className="text-sm text-[#1D342F]">{selected.email}</span>
                </a>
                <a href={`tel:${selected.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FFF5] hover:bg-[#eaf5e6] transition-colors">
                  <Phone className="w-4 h-4 text-[#4E9141]" />
                  <span className="text-sm text-[#1D342F]">{selected.phone}</span>
                </a>
                {selected.linkedin && (
                  <a href={selected.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FFF5] hover:bg-[#eaf5e6] transition-colors">
                    <Linkedin className="w-4 h-4 text-[#4E9141]" />
                    <span className="text-sm text-[#1D342F] truncate">{selected.linkedin}</span>
                  </a>
                )}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F7FFF5]">
                  <Calendar className="w-4 h-4 text-[#4E9141]" />
                  <span className="text-sm text-[#1D342F]">{formatDate(selected.submittedAt)}</span>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <p className="text-sm font-semibold text-[#1D342F] mb-2">Cover Letter</p>
                <div className="p-4 rounded-xl bg-[#F7FFF5] border border-[#C2DDB4]/30 text-sm text-[#47635D] leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
                  {selected.coverLetter}
                </div>
              </div>

              {/* Status Update */}
              <div>
                <p className="text-sm font-semibold text-[#1D342F] mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(STATUS_STYLES).map(s => {
                    const style = STATUS_STYLES[s]
                    const active = selected.status === s
                    return (
                      <button
                        key={s}
                        onClick={() => updateStatus(selected.id, s)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          active
                            ? `${style.bg} ${style.text} ${style.border} shadow-sm`
                            : 'bg-white border-[#C2DDB4]/40 text-[#47635D] hover:border-[#4E9141]/40'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Delete */}
              <button
                onClick={() => deleteApp(selected.id)}
                className="w-full py-2.5 rounded-xl border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 transition-colors"
              >
                Delete Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}