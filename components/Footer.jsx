'use client'

import React from 'react'
import Link from 'next/link'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

// X (Twitter) icon component
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const companyLinks = [
  { label: 'Insights', href: '/insights' },
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Media', href: '/media' },
  { label: 'Our Clientele', href: '/about#clients' },
]

const resourceLinks = [
  { label: 'Locations', href: '/contact' },
  { label: 'Careers', href: '/career' },
  { label: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { icon: XIcon, href: 'https://twitter.com/Marcglocal', label: 'X' },
  { icon: Facebook, href: 'https://www.facebook.com/MARCGlocal/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/marc_glocal/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/marcglocal/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCMg4JaqL7zZ3pLfpfkhRnVQ', label: 'YouTube' },
]

const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#F7FFF5] border-t border-[#C2DDB4]/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/marc_logo.png" 
                alt="MARC Glocal - Business Consulting Services" 
                className="h-12"
              />
            </Link>
            <p className="text-[#47635D] text-sm leading-relaxed mb-6">
              Comprehensive business consulting across strategy, market research, M&A and global expansion
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  className="w-9 h-9 rounded-full bg-[#4E9141] flex items-center justify-center text-white hover:bg-[#3d7334] transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#1D342F] font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#47635D] hover:text-[#4E9141] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-[#1D342F] font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#47635D] hover:text-[#4E9141] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#1D342F] font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+919359628675" 
                  className="flex items-start gap-3 text-[#47635D] hover:text-[#4E9141] transition-colors group"
                >
                  <Phone className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">+91 93596 28675</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@marcglocal.com" 
                  className="flex items-start gap-3 text-[#47635D] hover:text-[#4E9141] transition-colors group"
                >
                  <Mail className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">contact@marcglocal.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/dir//2nd+Floor,+CMM+Building,+Above+CMM+Arena+Megastore,+Rua+de+Our%C3%A9m,+Panaji,+Goa+403001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#47635D] hover:text-[#4E9141] transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-[#4E9141] flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    2nd Floor, CMM Building,<br />
                    Above Sarvaa Restaurant,<br />
                    Rua de Ourém, Panaji,<br />
                    Goa 403001
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C2DDB4]/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#47635D] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Mangal Analytics and Research Consulting (MARC), All Rights Reserved.
          </p>
          <Link 
            href="/privacy-policy" 
            className="text-[#47635D] hover:text-[#4E9141] text-sm transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
