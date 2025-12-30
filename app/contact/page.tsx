import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us - M & M HomeSolutions | Get Free Consultation in Hyderabad & Secunderabad',
  description: 'Contact M & M HomeSolutions for free consultation and quotes. Phone, WhatsApp, Email support available 24/7. Serving all areas of Hyderabad & Secunderabad.',
  keywords: 'contact home improvement Hyderabad, home solutions contact Secunderabad, free consultation Hyderabad',
  openGraph: {
    title: 'Contact Us - M & M HomeSolutions',
    description: 'Get in touch for free consultation and quotes. 24/7 support available.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  )
}

