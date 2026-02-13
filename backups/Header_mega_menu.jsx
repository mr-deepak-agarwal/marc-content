'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { useLoading } from '@/components/loading-store'

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { 
        label: 'Market Research', 
        href: '/services/market-research',
        children: [
          { label: 'Market Research', href: '/services/market-research' },
          { label: 'Feasibility Study', href: '/services/feasibility-study' },
        ]
      },
      { 
        label: 'Growth Strategy', 
        href: '/services/strategy-consulting',
        children: [
          { label: 'Strategy Consulting', href: '/services/strategy-consulting' },
          { label: 'Standard Operating Procedure', href: '/services/sop' },
          { label: 'Profit and Loss Analysis', href: '/services/profit-loss-analysis' },
          { label: 'Management Information Systems', href: '/services/mis' },
          { label: 'Financial Modelling', href: '/services/financial-modelling' },
          { label: 'HR Advisory', href: '/services/hr-advisory' },
        ]
      },
      { 
        label: 'Mergers & Acquisitions', 
        href: '/services/mergers-acquisitions',
        children: [
          { label: 'Due Diligence', href: '/services/due-diligence' },
          { label: 'Valuation', href: '/services/valuation' },
          { label: 'Deal Advisory', href: '/services/deal-advisory' },
        ]
      },
      { label: 'Internationalization', href: '/services/internationalization' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Media', href: '/media' },
  { label: 'Careers', href: '/career' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)
  const { setLoading } = useLoading()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    if (href.startsWith('/#')) return
    setLoading(true)
    setIsMobileMenuOpen(false)
  }

  // Handle hover indicator positioning
  const handleMouseEnter = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const navRect = navRef.current?.getBoundingClientRect()
    if (navRect) {
      setIndicatorStyle({
        left: rect.left - navRect.left,
        width: rect.width,
        opacity: 1,
      })
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'py-2'
            : 'py-0'
        }`}
      >
        {/* Glassmorphism background layer */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            isScrolled
              ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20'
              : 'bg-white backdrop-blur-none'
          }`}
        />
        
        {/* Animated accent line at bottom */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden transition-all duration-700 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="h-full bg-gradient-to-r from-transparent via-[#4E9141] to-transparent"
            style={{
              animation: isScrolled ? 'shimmerLine 3s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with zoom + glow effect on scroll */}
            <Link 
              href="/" 
              onClick={() => handleClick('/')} 
              data-testid="header-logo"
              className="relative group z-10"
            >
              <div className={`absolute -inset-4 rounded-2xl transition-all duration-500 ${
                isScrolled ? 'bg-[#4E9141]/10 blur-xl scale-100' : 'bg-transparent blur-none scale-0'
              }`} />
              <img 
                src="/marc_logo.png" 
                alt="MARC - Business Consulting Services" 
                className={`relative transition-all duration-500 origin-left ${
                  isScrolled 
                    ? 'h-12 drop-shadow-lg scale-105' 
                    : 'h-10 scale-100'
                } group-hover:scale-110`}
              />
            </Link>

            {/* Desktop Navigation with floating indicator */}
            <nav 
              ref={navRef}
              className="hidden lg:flex items-center gap-1 relative"
              onMouseLeave={handleMouseLeave}
            >
              {/* Floating background indicator */}
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
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={(e) => {
                      handleMouseEnter(e, index)
                      setActiveDropdown(link.label)
                    }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleClick(link.href)}
                      className={`relative px-4 py-2 flex items-center gap-1 text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                      </span>
                      <ChevronDown 
                        size={14} 
                        className={`transition-all duration-300 ${
                          activeDropdown === link.label ? 'rotate-180 text-[#4E9141]' : ''
                        }`}
                      />
                    </Link>

                    {/* Enhanced Dropdown Menu - Mega Menu for Services */}
                    <div 
                      className={`absolute left-0 top-full pt-3 transition-all duration-400 ${
                        activeDropdown === link.label 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-3'
                      }`}
                    >
                      {link.label === 'Services' ? (
                        /* Mega Menu for Services */
                        <div className="w-[600px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-[#4E9141]/10 overflow-hidden p-6">
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#4E9141] to-transparent rounded-full" />
                          
                          <div className="grid grid-cols-2 gap-6">
                            {link.children.map((category, idx) => (
                              <div key={idx}>
                                {category.children ? (
                                  <>
                                    <Link
                                      href={category.href}
                                      onClick={() => handleClick(category.href)}
                                      className="text-[#4E9141] font-semibold text-sm uppercase tracking-wider mb-3 block hover:text-[#3d7334] transition-colors"
                                    >
                                      {category.label}
                                    </Link>
                                    <div className="space-y-1">
                                      {category.children.map((subItem, subIdx) => (
                                        <Link
                                          key={subIdx}
                                          href={subItem.href}
                                          onClick={() => handleClick(subItem.href)}
                                          className="group flex items-center gap-2 py-2 text-sm text-[#47635D] hover:text-[#4E9141] transition-colors"
                                        >
                                          <span className="w-1 h-1 rounded-full bg-[#C2DDB4] group-hover:bg-[#4E9141] transition-colors" />
                                          {subItem.label}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  <Link
                                    href={category.href}
                                    onClick={() => handleClick(category.href)}
                                    className="flex items-center gap-2 py-2 text-[#4E9141] font-semibold text-sm uppercase tracking-wider hover:text-[#3d7334] transition-colors"
                                  >
                                    {category.label}
                                    <ArrowRight size={14} />
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Standard Dropdown for other menus */
                        <div className="w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-[#4E9141]/10 overflow-hidden">
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#4E9141] to-transparent rounded-full" />
                          
                          {link.children.map((child, idx) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => handleClick(child.href)}
                              className="group flex items-center justify-between px-5 py-4 text-sm text-[#1D342F] hover:bg-[#4E9141]/5 transition-all duration-300 relative overflow-hidden"
                              style={{ animationDelay: `${idx * 50}ms` }}
                            >
                              <span className="relative z-10 group-hover:text-[#4E9141] transition-colors">{child.label}</span>
                              <ArrowRight 
                                size={14} 
                                className="text-[#4E9141] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                              />
                              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-[#4E9141]/10 to-transparent" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    onMouseEnter={(e) => handleMouseEnter(e, index)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      hoveredIndex === index ? 'text-[#4E9141]' : 'text-[#1D342F]'
                    }`}
                  >
                    <span className="relative">
                      {link.label}
                    </span>
                  </Link>
                )
              )}

              {/* Enhanced CTA Button */}
              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <button
                  data-testid="header-cta"
                  className={`relative ml-6 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-500 overflow-hidden group ${
                    isScrolled 
                      ? 'bg-[#4E9141] text-white shadow-lg shadow-[#4E9141]/30' 
                      : 'bg-[#4E9141] text-white'
                  }`}
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4E9141] via-[#5fa84f] to-[#4E9141] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ backgroundSize: '200% 100%', animation: 'gradientShift 2s linear infinite' }}
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Contact</span>
                </button>
              </Link>
            </nav>

            {/* Mobile Menu Button with enhanced animation */}
            <button
              data-testid="mobile-menu-toggle"
              className={`lg:hidden relative p-2 rounded-xl transition-all duration-300 z-10 ${
                isMobileMenuOpen ? 'bg-[#4E9141]/10' : 'hover:bg-[#F7FFF5]'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 bg-[#1D342F] transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 top-3 bg-[#4E9141]' : 'top-1'
                }`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-[#1D342F] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`} />
                <span className={`absolute left-0 w-6 h-0.5 bg-[#1D342F] transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 top-3 bg-[#4E9141]' : 'top-5'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay with glassmorphism */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div 
          className={`absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-[#4E9141]/10 shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6 space-y-2">
            {navLinks.map((link, index) =>
              link.children ? (
                <div 
                  key={link.label}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="w-full flex justify-between items-center px-4 py-3.5 text-[#1D342F] font-medium hover:bg-[#4E9141]/5 rounded-xl transition-all duration-300"
                  >
                    {link.label}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.label ? 'rotate-180 text-[#4E9141]' : ''
                      }`}
                      size={16}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-400 ${
                    activeDropdown === link.label ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 py-2 space-y-1 border-l-2 border-[#4E9141]/20">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => handleClick(child.href)}
                          className="block px-4 py-2.5 text-sm text-[#47635D] hover:text-[#4E9141] hover:bg-[#4E9141]/5 rounded-lg transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`block px-4 py-3.5 text-[#1D342F] font-medium hover:bg-[#4E9141]/5 rounded-xl transition-all duration-300 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            <div className="pt-4">
              <Link href="/contact" onClick={() => handleClick('/contact')}>
                <button className="w-full py-3.5 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-all duration-300 shadow-lg shadow-[#4E9141]/20">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for header animations */}
      <style jsx global>{`
        @keyframes shimmerLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </>
  )
}
