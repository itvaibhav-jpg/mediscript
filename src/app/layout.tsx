import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediScript - Prescribe with Intelligence',
  description: 'AI-Powered Healthcare Management Platform by EdgesOf Solutions',
  keywords: ['healthcare', 'EMR', 'EHR', 'prescription', 'clinic management', 'AI'],
  authors: [{ name: 'EdgesOf Solutions Pvt. Ltd.' }],
  creator: 'EdgesOf Solutions Pvt. Ltd.',
  publisher: 'EdgesOf Solutions Pvt. Ltd.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mediscript.io',
    title: 'MediScript - Prescribe with Intelligence',
    description: 'AI-Powered Healthcare Management Platform',
    siteName: 'MediScript',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
