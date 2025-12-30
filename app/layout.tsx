import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Improvement Services in Hyderabad & Secunderabad | Premium Installation Solutions',
  description: 'Professional home improvement services across Hyderabad & Secunderabad. Ceiling cloth drying hangers, invisible grills, safety nets, blinds, shoe racks, and more. Free installation, same-day delivery, 3-5 years warranty.',
  keywords: 'home improvement Hyderabad, installation services Secunderabad, cloth drying hangers, invisible grills, safety nets, balcony solutions',
  openGraph: {
    title: 'Home Improvement Services in Hyderabad & Secunderabad',
    description: 'Professional home improvement services with free installation and warranty',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}

