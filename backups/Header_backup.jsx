'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { useLoading } from '@/components/loading-store'

const navLinks = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Market Research', href: '/s1' },
      { label: 'Growth Strategy', href: '/s2' },
      { label: 'Mergers & Acquisitions', href: '/s1' },
      { label: 'Internationalization', href: '/s2' },
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

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => handleClick('/')} 
            data-testid="header-logo"
            className="relative group"
          >
            <img 
              src="/marc_logo.png" 
              alt="MARC - Business Consulting Services" 
              className="h-10 transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => handleClick(link.href)}
                    className="relative px-4 py-2 flex items-center gap-1 text-sm font-medium text-[#1D342F] group"
                  >
                    <span className="relative">
                      {link.label}
                      {/* Underline animation */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4E9141] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute left-0 top-full pt-2 transition-all duration-300 ${
                      activeDropdown === link.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="w-64 bg-white rounded-xl shadow-xl shadow-black/10 border border-gray-100 overflow-hidden">
                      {link.children.map((child, idx) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => handleClick(child.href)}
                          className="group flex items-center justify-between px-5 py-3.5 text-sm text-[#1D342F] hover:bg-[#F7FFF5] transition-colors"
                        >
                          <span>{child.label}</span>
                          <ArrowRight 
                            size={14} 
                            className="text-[#4E9141] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                          />
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
                  className="relative px-4 py-2 text-sm font-medium text-[#1D342F] group"
                >
                  <span className="relative">
                    {link.label}
                    {/* Underline animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4E9141] transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              )
            )}

            {/* CTA Button */}
            <Link href="/contact" onClick={() => handleClick('/contact')}>
              <button
                data-testid="header-cta"
                className="ml-6 px-6 py-2.5 bg-[#4E9141] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#3d7334] hover:shadow-lg hover:shadow-[#4E9141]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#1D342F] hover:bg-[#F7FFF5] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : ''}`} />
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  className="w-full flex justify-between items-center px-4 py-3 text-[#1D342F] font-medium hover:bg-[#F7FFF5] rounded-lg transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeDropdown === link.label ? 'rotate-180' : ''
                    }`}
                    size={16}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === link.label ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-4 py-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => handleClick(child.href)}
                        className="block px-4 py-2.5 text-sm text-[#47635D] hover:text-[#4E9141] hover:bg-[#F7FFF5] rounded-lg transition-colors"
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
                className="block px-4 py-3 text-[#1D342F] font-medium hover:bg-[#F7FFF5] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <div className="pt-3">
            <Link href="/contact" onClick={() => handleClick('/contact')}>
              <button className="w-full py-3 bg-[#4E9141] text-white font-semibold rounded-full hover:bg-[#3d7334] transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
