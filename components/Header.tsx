'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { getAllCategories } from '@/lib/categories'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappNumber = '916309484800'
  const whatsappMessage = encodeURIComponent('Hello! I am interested in your home improvement services.')

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'text-[#1877F2] hover:opacity-90 hover:scale-110',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'text-[#E4405F] hover:opacity-90 hover:scale-110',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'text-[#1DA1F2] hover:opacity-90 hover:scale-110',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'text-[#0077B5] hover:opacity-90 hover:scale-110',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'text-[#FF0000] hover:opacity-90 hover:scale-110',
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      color: 'text-[#25D366] hover:opacity-90 hover:scale-110',
    },
  ]

  const categories = getAllCategories()
  
  // Map category slugs to service image paths
  const getServiceImage = (slug: string) => {
    const imageMap: Record<string, string> = {
      'ceiling-cloth-drying-hangers': '/images/services/ceiling-cloth-drying-hangers.jpg',
      'wall-mounted-cloth-hangers': '/images/services/wall-mounted-cloth-hangers.jpg',
      'invisible-grills': '/images/services/invisible-grills.jpg',
      'pigeon-safety-nets': '/images/services/pigeon-safety-nets.jpg',
      'bamboo-roller-blinds': '/images/services/bamboo-roller-blinds.jpg',
      'shoe-racks': '/images/services/shoe-racks.jpg',
      'anti-bird-spikes': '/images/services/anti-bird-spikes.jpg',
      'mosquito-nets': '/images/services/mosquito-nets.jpg',
      'outdoor-indoor-gaming-nets': '/images/services/outdoor-indoor-gaming-nets.jpg',
    }
    return imageMap[slug] || '/images/services/ceiling-cloth-drying-hangers.jpg'
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar - Inspired by Tones Fashion */}
      <div className="bg-[#113735] text-white text-sm py-2 border-b border-[#0a2a28]">
        <div className="container-custom flex items-center justify-between">
          <span className="font-medium">Free Installation In Hyderabad & Secunderabad</span>
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-all duration-200`}
                aria-label={`Follow us on ${social.name}`}
              >
                <div className="h-7 w-7 flex items-center justify-center">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#113735] w-full">
        <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Minimalist style */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col">
              <div className="text-2xl md:text-3xl font-bold text-[#D1B483]">
                M & M
              </div>
              <div className="text-xs md:text-sm font-semibold text-[#D1B483] uppercase tracking-wide">
                HOME SOLUTIONS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-green-200 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-green-200 font-medium transition-colors flex items-center">
                Products and Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                        className="group/item flex flex-col items-center p-3 rounded-lg hover:bg-primary-50 transition-all duration-200 border border-transparent hover:border-primary-200"
                      >
                        <div className="relative w-full h-24 mb-2 rounded-md overflow-hidden bg-gray-100">
                          <Image
                            src={getServiceImage(category.slug)}
                            alt={category.name}
                            fill
                            className="object-cover group-hover/item:scale-105 transition-transform duration-300"
                            sizes="(max-width: 200px) 100vw, 200px"
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover/item:text-primary-600 text-center leading-tight transition-colors">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-white hover:text-green-200 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-green-200 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Call Button - Minimalist style */}
          <a
            href="tel:+916309484800"
            className="hidden md:flex items-center space-x-2 bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors uppercase tracking-wide text-sm font-semibold border-2 border-[#D1B483]"
          >
            <FiPhone className="h-4 w-4" />
            <span>Call Now</span>
          </a>

          {/* Mobile Call, WhatsApp Buttons and Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+916309484800"
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors border-2 border-[#D1B483]"
              aria-label="Call Now"
            >
              <FiPhone className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              className="p-2 bg-[#25D366] text-white rounded-full hover:bg-[#20BA5A] transition-colors"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-green-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-green-700">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-2 text-white hover:bg-green-800 hover:text-green-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-4 py-2">
                <div className="font-semibold text-white mb-2">Products and Services</div>
                <div className="pl-4 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="block py-2 text-sm text-green-100 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/about"
                className="px-4 py-2 text-white hover:bg-green-800 hover:text-green-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-white hover:bg-green-800 hover:text-green-100 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+916309484800"
                className="mx-4 mt-2 flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-colors uppercase tracking-wide text-sm font-semibold border-2 border-[#D1B483]"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiPhone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              
              {/* Social Media Icons - Mobile */}
              <div className="mx-4 mt-4 flex items-center justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition-opacity duration-200`}
                    aria-label={`Follow us on ${social.name}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
        </div>
      </div>
    </header>
  )
}

