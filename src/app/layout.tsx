import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'ONG BOLAMU - Pour un Congo Durable',
    template: '%s | ONG BOLAMU'
  },
  description: 'ONG BOLAMU œuvre pour le développement durable du Congo-Brazzaville à travers l\'éducation, la santé, l\'environnement et l\'autonomisation des communautés.',
  keywords: ['ONG', 'Congo', 'Brazzaville', 'développement durable', 'éducation', 'santé', 'environnement', 'BOLAMU'],
  authors: [{ name: 'ONG BOLAMU' }],
  creator: 'ONG BOLAMU',
  publisher: 'ONG BOLAMU',
  metadataBase: new URL('https://ongbolamu.org'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'fr-CG': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ongbolamu.org',
    title: 'ONG BOLAMU - Pour un Congo Durable',
    description: 'ONG BOLAMU œuvre pour le développement durable du Congo-Brazzaville à travers l\'éducation, la santé, l\'environnement et l\'autonomisation des communautés.',
    siteName: 'ONG BOLAMU',
    images: [
      {
        url: '/images/logo Bolamu.png',
        width: 1200,
        height: 630,
        alt: 'Logo ONG BOLAMU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONG BOLAMU - Pour un Congo Durable',
    description: 'ONG BOLAMU œuvre pour le développement durable du Congo-Brazzaville.',
    images: ['/images/logo Bolamu.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff6219' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} smooth-scroll`}>
      <head>
        {/* Préchargement des ressources critiques */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* DNS prefetch pour performance */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Preload des images critiques */}
        <link rel="preload" href="/images/logo Bolamu.png" as="image" type="image/png" />
        
        {/* Service Worker pour mise en cache */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple touch icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo Bolamu.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo Bolamu.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo Bolamu.png" />
        
        {/* Schema.org pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ONG BOLAMU",
              "description": "ONG œuvrant pour le développement durable du Congo-Brazzaville",
              "url": "https://ongbolamu.org",
              "logo": "https://ongbolamu.org/images/logo Bolamu.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CG",
                "addressLocality": "Brazzaville"
              },
              "sameAs": [
                "https://facebook.com/ongbolamu",
                "https://twitter.com/ongbolamu"
              ]
            })
          }}
        />
      </head>
      <body 
        className={`${inter.className} antialiased webkit-optimized`}
        suppressHydrationWarning={true}
      >
        <div className="isolate-layout min-h-screen">
          {children}
        </div>
        
        {/* Analytics et performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring simple
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData.loadEventEnd - perfData.loadEventStart > 3000) {
                    console.warn('Page load time exceeded 3s');
                  }
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
} 