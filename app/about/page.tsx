import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'

export const metadata: Metadata = {
  title: 'About Us - M & M HomeSolutions | Home Improvement Services in Hyderabad & Secunderabad',
  description: 'Learn about M & M HomeSolutions - Your trusted partner for premium home improvement solutions. 8+ years of experience, 9000+ happy clients, 10,000+ projects completed across Hyderabad & Secunderabad.',
  keywords: 'about home improvement Hyderabad, home solutions company Secunderabad, M & M HomeSolutions',
  openGraph: {
    title: 'About Us - M & M HomeSolutions',
    description: 'Your trusted partner for premium home improvement solutions in Hyderabad & Secunderabad',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  )
}

