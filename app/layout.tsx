import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.metricprinters.com'),
  title: {
    default: 'Metric Printers | All-in-One Printing Solutions for Your Business',
    template: '%s | Metric Printers',
  },
  description:
    "Metric Printers - Karachi's trusted printing partner for businesses. Visiting cards, flex banners, sign boards, packaging boxes, stickers, uniforms, promotional items & more. One call — we handle everything.",
  keywords: [
    'Metric Printers',
    'Metric Printers Karachi',
    'printing services Karachi',
    'visiting cards Karachi',
    'panaflex printing Karachi',
    'signboard printing Karachi',
    'sticker printing Karachi',
    'screen printing Karachi',
    'packaging boxes Karachi',
    'promotional items Karachi',
    'bill books printing',
    'business printing Karachi',
    'T-shirt printing Karachi',
    'keychain printing Karachi',
  ],
  authors: [{ name: 'Metric Printers' }],
  creator: 'Metric Printers',
  publisher: 'Metric Printers',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.metricprinters.com',
    siteName: 'Metric Printers',
    title: 'Metric Printers | All-in-One Printing Solutions',
    description:
      'Metric Printers - Your one-stop printing partner in Karachi. We manage every print job for your business — from cards to banners to branded merchandise. Fast. Reliable. Professional.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metric Printers | All-in-One Printing Solutions',
    description: 'Your one-stop printing partner in Karachi. Fast, reliable, professional.',
  },
  alternates: {
    canonical: 'https://www.metricprinters.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Metric Printers',
              description:
                'All-in-one printing solutions for businesses in Karachi. Visiting cards, banners, signboards, packaging, promotional merchandise and more.',
              url: 'https://www.metricprinters.com',
              telephone: '+92-300-0000000',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Karachi',
                addressRegion: 'Sindh',
                addressCountry: 'PK',
              },
              areaServed: 'Karachi',
              serviceType: [
                'Visiting Card Printing',
                'Panaflex Printing',
                'Signboard Printing',
                'Packaging Boxes',
                'Sticker Printing',
                'Screen Printing',
                'Promotional Items',
                'Bill Books',
                'Keychain Printing',
              ],
              openingHours: 'Mo-Sa 09:00-20:00',
              priceRange: '$$',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Printing Services',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Metric Printers',
              },
              areaServed: {
                '@type': 'City',
                name: 'Karachi',
              },
              description:
                'Complete printing management for businesses. We handle your entire print workflow from order to delivery.',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}