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
    icon: 'https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Sustainibility%20Landing%20page/rsm%20logo.png',
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
