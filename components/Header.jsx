'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight, Search, FileCheck, Compass, FileText, TrendingUp, BarChart3, Calculator, Users, Shield, Scale, Handshake, Globe, BookOpen, FileBarChart, Download, Lightbulb } from 'lucide-react'
import { useLoading } from '@/components/loading-store'

const serviceCategories = [
  {
    label: 'Market Research',
    services: [
      { label: 'Market Research', href: '/services/market-research', icon: Search },
      { label: 'Feasibility Study', href: '/services/feasibility-study', icon: FileCheck },
    ]
  },
  {
    label: 'Growth Strategy',
    services: [
      { label: 'Strategy Consulting', href: '/services/strategy-consulting', icon: Compass },
      { label: 'Standard Operating Procedure', href: '/services/sop', icon: FileText },
      { label: 'Profit & Loss Analysis', href: '/services/profit-loss-analysis', icon: TrendingUp },
      { label: 'Management Information Systems', href: '/services/mis', icon: BarChart3 },
      { label: 'Financial Modelling', href: '/services/financial-modelling', icon: Calculator },
    ]
  },
  {
    label: 'Mergers & Acquisitions',
    services: [
      { label: 'Due Diligence', href: '/services/due-diligence', icon: Shield },
      { label: 'Valuation', href: '/services/valuation', icon: Scale },
      { label: 'Deal Advisory', href: '/services/deal-advisory', icon: Handshake },
    ]
  },
  {
    label: 'Global Expansion',
    services: [
      { label: 'Internationalization', href: '/services/internationalization', icon: Globe },
    ]
  },
]

const insightsItems = [
  { label: 'Insight Reports', href: '/insights', icon: FileBarChart, description: 'Industry research & analysis' },
  { label: 'Blogs', href: '/blog', icon: BookOpen, description: 'Expert articles & trends' },
  { label: 'Case Studies', href: '/case-studies', icon: Lightbulb, description: 'Client success stories' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasServicesMenu: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights', hasInsightsMenu: true },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/career' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)
  const { setLoading } = useLoading()

  const handleClick = (href) => {
    if (href.startsWith('/#')) return
    setLoading(true)
    setIsMobileMenuOpen(false)
  }

  const handleMouseEnter = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const navRect = navRef.current?.getBoundingClientRect()
    if (navRect) {
      setIndicatorStyle({ left: rect.left - navRect.left, width: rect.width, opacity: 1 })
    }
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    setHoveredIndex(null)
  }

  return (
    <>
      <header
        data-testid="header"
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" onClick={() => handleClick('/')} data-testid="header-logo">
              <img
                src="/marc_logo.png"
                alt="MARC - Business Consulting Services"
                className="h-10 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center gap-1 relative"
              onMouseLeave={handleMouseLeave}
            >
              {/* Floating hover indicator */}
              <div
                className="absolute h-9 bg-[#4E9141]/10 rounded-full transition-all duration-300 ease-out pointer-events-none"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: indicatorStyle.opacity,
                  transform: 'translateY(-50%)',
                  top: '50%',
                }}
              />

              {navLinks.map((link, index) =>
                link.hasServicesMenu ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={(e) => { handleMouseEnter(e, index); setActiveDropdown(link.label) }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleClick(link.href)}
                      className={`relative px-4 py-2 flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'}`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-[#4E9141]' : ''}`} />
                    </Link>

                    <div className={`absolute -left-20 top-full pt-3 transition-all duration-300 ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'}`}>
                      <div className="w-[720px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-[#C2DDB4]/30 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]" />
                        <div className="p-6">
                          <div className="space-y-6">
                            {serviceCategories.map((category, catIdx) => (
                              <div key={catIdx}>
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="text-[#4E9141] font-semibold text-xs uppercase tracking-widest">{category.label}</span>
                                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C2DDB4] to-transparent" />
                                </div>
                                <div className={`grid ${category.services.length <= 2 ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
                                  {category.services.map((service, svcIdx) => (
                                    <Link
                                      key={svcIdx}
                                      href={service.href}
                                      onClick={() => handleClick(service.href)}
                                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#F7FFF5] transition-all duration-300 border border-transparent hover:border-[#C2DDB4]/50"
                                    >
                                      <div className="w-10 h-10 rounded-lg bg-[#F7FFF5] group-hover:bg-[#4E9141] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                        <service.icon className="w-5 h-5 text-[#4E9141] group-hover:text-white transition-colors" />
                                      </div>
                                      <span className="text-sm text-[#1D342F] group-hover:text-[#4E9141] font-medium transition-colors leading-tight">{service.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-4 border-t border-[#C2DDB4]/30 flex items-center justify-between">
                            <span className="text-sm text-[#47635D]">Need help choosing the right service?</span>
                            <Link href="/contact" onClick={() => handleClick('/contact')} className="inline-flex items-center gap-2 text-sm font-semibold text-[#4E9141] hover:text-[#3d7334] transition-colors">
                              Talk to an Expert <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : link.hasInsightsMenu ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={(e) => { handleMouseEnter(e, index); setActiveDropdown(link.label) }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleClick(link.href)}
                      className={`relative px-4 py-2 flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'}`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-[#4E9141]' : ''}`} />
                    </Link>

                    <div className={`absolute -left-4 top-full pt-3 transition-all duration-300 ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'}`}>
                      <div className="w-[320px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-[#C2DDB4]/30 overflow-hidden">
                        <div className="h-1 bg-gradient-to-r from-[#4E9141] via-[#C2DDB4] to-[#4E9141]" />
                        <div className="p-4 space-y-2">
                          {insightsItems.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              onClick={() => handleClick(item.href)}
                              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#F7FFF5] transition-all duration-300 border border-transparent hover:border-[#C2DDB4]/50"
                            >
                              <div className="w-12 h-12 rounded-xl bg-[#F7FFF5] group-hover:bg-[#4E9141] flex items-center justify-center transition-all duration-300 flex-shrink-0">
                                <item.icon className="w-6 h-6 text-[#4E9141] group-hover:text-white transition-colors" />
                              </div>
                              <div>
                                <span className="block text-sm text-[#1D342F] group-hover:text-[#4E9141] font-semibold transition-colors">{item.label}</span>
                                <span className="block text-xs text-[#47635D] mt-0.5">{item.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    onMouseEnter={(e) => handleMouseEnter(e, index)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'}`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <button
                  data-testid="header-cta"
                  className="ml-6 px-6 py-2.5 text-sm font-semibold rounded-full bg-[#4E9141] text-white hover:bg-[#3e7433] transition-colors duration-300"
                >
                  Contact
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden relative p-2 rounded-xl hover:bg-[#F7FFF5] transition-all duration-300 z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-[#1D342F] transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 top-3 bg-[#4E9141]' : 'top-1'}`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-[#1D342F] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-[#1D342F] transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 top-3 bg-[#4E9141]' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/20" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link, index) =>
              link.hasServicesMenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'Services' ? null : 'Services')}
                    className="w-full flex justify-between items-center px-4 py-3.5 text-[#1D342F] font-medium hover:bg-[#4E9141]/5 rounded-xl transition-all duration-300"
                  >
                    Services
                    <ChevronDown className={`transition-transform duration-300 ${activeDropdown === 'Services' ? 'rotate-180 text-[#4E9141]' : ''}`} size={16} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'Services' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-2 space-y-4">
                      {serviceCategories.map((category, catIdx) => (
                        <div key={catIdx}>
                          <div className="px-4 mb-2">
                            <span className="text-xs font-semibold text-[#4E9141] uppercase tracking-wider">{category.label}</span>
                          </div>
                          <div className="ml-4 space-y-1 border-l-2 border-[#4E9141]/20">
                            {category.services.map((service, svcIdx) => (
                              <Link key={svcIdx} href={service.href} onClick={() => handleClick(service.href)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#47635D] hover:text-[#4E9141] hover:bg-[#4E9141]/5 rounded-lg transition-all duration-300">
                                <service.icon className="w-4 h-4 text-[#4E9141]" />
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : link.hasInsightsMenu ? (
                <div key={link.label}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === 'Insights' ? null : 'Insights')}
                    className="w-full flex justify-between items-center px-4 py-3.5 text-[#1D342F] font-medium hover:bg-[#4E9141]/5 rounded-xl transition-all duration-300"
                  >
                    Insights
                    <ChevronDown className={`transition-transform duration-300 ${activeDropdown === 'Insights' ? 'rotate-180 text-[#4E9141]' : ''}`} size={16} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'Insights' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-2 ml-4 space-y-1 border-l-2 border-[#4E9141]/20">
                      {insightsItems.map((item, itemIdx) => (
                        <Link key={itemIdx} href={item.href} onClick={() => handleClick(item.href)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#47635D] hover:text-[#4E9141] hover:bg-[#4E9141]/5 rounded-lg transition-all duration-300">
                          <item.icon className="w-4 h-4 text-[#4E9141]" />
                          <div>
                            <span className="block font-medium">{item.label}</span>
                            <span className="block text-xs text-[#47635D]/70">{item.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} onClick={() => handleClick(link.href)} className="block px-4 py-3.5 text-[#1D342F] font-medium hover:bg-[#4E9141]/5 rounded-xl transition-all duration-300">
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <button className="w-full py-3.5 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}