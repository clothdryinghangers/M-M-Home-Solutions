import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'
import ContentProtection from '@/components/ContentProtection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Balcony Ceiling Cloth Hangers in Hyderabad & Secunderabad | Premium Cloth Drying Hangers Installation',
  description:
    'Professional home improvement services across Hyderabad & Secunderabad. Ceiling cloth drying hangers, invisible grills, safety nets, blinds, shoe racks, and more. Free installation, same-day delivery, 3-5 years warranty.',
  keywords:
    'Ceiling Cloth Hangers Hyderabad & Secunderabad, Same Day & Free Installation, Cloth drying hangers, Invisible grills, safety nets, balcony solutions',
  openGraph: {
    title: 'Ceiling Mounted Cloth Hangers in Hyderabad & Secunderabad',
    description:
      'Professional home improvement services with free installation and warranty',
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
      <head>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MPRHHHG9');
            `,
          }}
        />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MPRHHHG9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ContentProtection />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
