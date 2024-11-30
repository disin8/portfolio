import type { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/nav'
import Providers from '@/components/providers'
import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'Dmitry Sinkevich',
    template: '%s | Dmitry Sinkevich',
  },
  description: 'I craft & build interfaces that are fluid.',
  openGraph: {
    title: 'Dmitry Sinkevich',
    description: 'I craft & build interfaces that are fluid.',
    siteName: 'Dmitry Sinkevich',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Dmitry Sinkevich',
    card: 'summary_large_image',
  },
  manifest: `https://disin8.vercel.app/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfdfc' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
  ],
  maximumScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'overflow-x-hidden min-h-screen antialiased',
        'motion-reduce:transform-none motion-reduce:transition-none',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased relative flex min-h-screen w-screen flex-col">
        <Providers>
          <main className="mx-auto my-12 max-w-[692px] px-6 text-gray-1200 antialiased md:my-16 flex-1 w-full">
            {children}
            <Navbar />
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  )
}
