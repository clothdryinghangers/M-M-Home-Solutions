'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight, FiPhone } from 'react-icons/fi'

const slides = [
  {
    id: 1,
    title: 'Premium Cloth Drying Hangers',
    description: 'Maximize your balcony space with sturdy ceiling-mounted hangers. Free installation • 1-3 years warranty • Same-day delivery across Hyderabad & Secunderabad.',
    image: '/images/hero/ceiling-cloth-drying-hangers.jpg',
    link: '/category/ceiling-cloth-drying-hangers',
    areas: 'Kompally, ECIL, Kukatpally, Hitech City & All Areas',
    warranty: '1-3 Years Warranty',
  },
  {
    id: 2,
    title: 'Space-Saving Wall Mounted Hangers',
    description: 'Perfect for compact balconies! Wall-mounted design saves floor space while keeping your laundry organized. Free installation available.',
    image: '/images/hero/wall-mounted-cloth-hangers.jpg',
    link: '/category/wall-mounted-cloth-hangers',
    areas: 'Gachibowli, Madhapur, Miyapur, Ameerpet & All Areas',
    warranty: '1-3 Years Warranty',
  },
  {
    id: 3,
    title: 'Invisible Grills - Safety Meets Style',
    description: 'Protect your family without blocking the view! Premium invisible grills that blend seamlessly with your home. Professional installation included.',
    image: '/images/hero/invisible-grills.jpg',
    link: '/category/invisible-grills',
    areas: 'Manikonda, Uppal, LB Nagar, Tarnaka & All Areas',
    warranty: '5 Years Warranty',
  },
  {
    id: 4,
    title: 'Pigeon Safety Nets - Keep Birds Away',
    description: 'Durable, transparent nets that protect your balconies from pigeons. UV-resistant material with 3-5 years warranty. Free installation!',
    image: '/images/hero/pigeon-safety-nets.jpg',
    link: '/category/pigeon-safety-nets',
    areas: 'Alwal, Bowenpally, Trimulgherry & All Areas',
    warranty: undefined,
  },
  {
    id: 5,
    title: 'Elegant Bamboo & Roller Blinds',
    description: 'Transform your windows with stylish blinds that offer privacy and UV protection. Multiple designs available. Free installation across Hyderabad.',
    image: '/images/hero/bamboo-roller-blinds.jpg',
    link: '/category/bamboo-roller-blinds',
    areas: 'All Areas of Hyderabad & Secunderabad',
    warranty: undefined,
  },
  {
    id: 6,
    title: 'Premium Shoe Racks - Organize in Style',
    description: 'Keep your home clutter-free with our modern shoe rack solutions. Multiple sizes available. Free installation • Same-day delivery.',
    image: '/images/hero/shoe-racks.jpg',
    link: '/category/shoe-racks',
    areas: 'Kompally, ECIL, Kukatpally, Hitech City & All Areas',
    warranty: undefined,
  },
  {
    id: 7,
    title: 'Anti Bird Spikes - Humane Protection',
    description: 'Effective bird deterrent for balconies and terraces. Humane, weather-resistant, and long-lasting. Professional installation available.',
    image: '/images/hero/anti-bird-spikes.jpg',
    link: '/category/anti-bird-spikes',
    areas: 'Gachibowli, Madhapur, Miyapur, Ameerpet & All Areas',
    warranty: undefined,
  },
  {
    id: 8,
    title: 'Mosquito Net Doors and windows - Protect Your Family',
    description: 'Premium mosquito nets for windows and doors. Fine mesh design keeps mosquitoes out while maintaining airflow. Free installation!',
    image: '/images/hero/mosquito-nets.jpg',
    link: '/category/mosquito-nets',
    areas: 'All Areas of Hyderabad & Secunderabad',
    warranty: undefined,
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const phoneNumber = '+916309484800'
  const whatsappNumber = '916309484800'
  const whatsappMessage = encodeURIComponent('Hello! I am interested in your home improvement services.')

  // Prevent hydration mismatch by ensuring consistent initial render
  if (!mounted) {
    return (
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden border-b-4 border-[#D1B483]">
        <Link
          href={slides[0].link}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center brightness-110"
            style={{ backgroundImage: `url(${slides[0].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
          </div>
        </Link>
        
        {/* Hero Title - Above Call Buttons */}
        <div className="absolute bottom-32 left-6 md:bottom-40 md:left-12 z-20 text-white max-w-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight leading-tight">
            {slides[0].title}
          </h1>
          {slides[0].warranty && (
            <div className="mb-3">
              <span className="bg-accent-red text-white px-4 py-2 font-bold text-lg md:text-xl lg:text-2xl rounded shadow-lg inline-block">
                {slides[0].warranty}
              </span>
            </div>
          )}
          <p className="text-xs md:text-sm text-gray-900 mb-4 font-bold bg-[#D1B483] px-4 py-2 rounded inline-block shadow-lg">
            Service Available Any Area in Hyderabad & Secundrabad
          </p>
        </div>

        {/* Call and WhatsApp Buttons */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 flex flex-col space-y-3">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-accent-red hover:bg-accent-red-dark text-white px-6 py-3 font-semibold hover:shadow-lg transition-all duration-200 uppercase tracking-wide flex items-center gap-2 shadow-xl"
          >
            <FiPhone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all duration-200 uppercase tracking-wide flex items-center gap-2 shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden border-b-4 border-[#D1B483]">
      {slides.map((slide, index) => (
        <Link
          key={slide.id}
          href={slide.link}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center brightness-110"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />
          </div>
        </Link>
      ))}

      {/* Hero Title - Above Call Buttons */}
      <div className="absolute bottom-32 left-6 md:bottom-40 md:left-12 z-20 text-white max-w-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight leading-tight">
          {slides[currentSlide].title}
        </h1>
        {slides[currentSlide].warranty && (
          <div className="mb-3">
            <span className="bg-accent-red text-white px-4 py-2 font-bold text-lg md:text-xl lg:text-2xl rounded shadow-lg inline-block">
              {slides[currentSlide].warranty}
            </span>
          </div>
        )}
          <p className="text-xs md:text-sm text-gray-900 mb-4 font-bold bg-[#D1B483] px-4 py-2 rounded inline-block shadow-lg">
            Service Available Any Area in Hyderabad & Secundrabad
          </p>
      </div>

      {/* Call and WhatsApp Buttons */}
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-20 flex flex-col space-y-3">
        <a
          href={`tel:${phoneNumber}`}
          className="bg-accent-red hover:bg-accent-red-dark text-white px-6 py-3 font-semibold hover:shadow-lg transition-all duration-200 uppercase tracking-wide flex items-center gap-2 shadow-xl"
        >
          <FiPhone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-semibold hover:shadow-lg transition-all duration-200 uppercase tracking-wide flex items-center gap-2 shadow-xl"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.preventDefault()
          goToPrevious()
        }}
        className="absolute left-4 bottom-20 md:bottom-24 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          goToNext()
        }}
        className="absolute right-4 bottom-20 md:bottom-24 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all"
        aria-label="Next slide"
      >
        <FiChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator - Positioned at the bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              goToSlide(index)
            }}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

