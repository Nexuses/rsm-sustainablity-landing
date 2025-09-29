import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/components/LanguageProvider'
import TranslateToggle from '@/components/TranslateToggle'
import GoogleAnalyticsWrapper from './components/GoogleAnalyticsWrapper'

export const metadata: Metadata = {
  title: 'RSM Sustainability Landing',
  description: 'Upskill Your Entire Organization With Our Comprehensive Program',
  generator: 'Nexuses',
  icons: {
    icon: [
      {
        url: 'https://cdn-nexlink.s3.us-east-2.amazonaws.com/logo_76df713f-10c2-4778-9265-477ee0d1b41c.png',
        rel: 'icon',
        type: 'image/png',
      },
      {
        url: 'https://cdn-nexlink.s3.us-east-2.amazonaws.com/logo_76df713f-10c2-4778-9265-477ee0d1b41c.png',
        rel: 'shortcut icon',
        type: 'image/png',
      },
    ],
    apple: {
      url: 'https://cdn-nexlink.s3.us-east-2.amazonaws.com/logo_76df713f-10c2-4778-9265-477ee0d1b41c.png',
      sizes: '180x180',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <GoogleAnalyticsWrapper />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <TranslateToggle />
        </LanguageProvider>
      </body>
    </html>
  )
}
