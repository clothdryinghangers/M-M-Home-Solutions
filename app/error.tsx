'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-4">500</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Something went wrong!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We encountered an unexpected error. Please try again or contact us if the problem persists.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary"
            >
              Try Again
            </button>
            <Link href="/" className="btn-secondary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

