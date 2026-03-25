import type { Metadata } from 'next'
import './globals.css'

import { Figtree, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'
import Providers from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adejoh.dev'),
  title: {
    template: '%s | Sunday Ojochenemi Adejoh',
    default: 'Sunday Ojochenemi Adejoh | Frontend Engineer'
  },
  description:
    'Sunday Ojochenemi Adejoh is a frontend engineer specializing in React and Next.js, building fast, modern, and user-focused web applications. He also develops full-stack applications with the MERN stack.',
  keywords: [
    'Sunday Adejoh',
    'Adejoh',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack Developer',
    'Web Developer Nigeria',
    'Frontend Developer Abuja'
  ],
  openGraph: {
    title: 'Sunday Ojochenemi Adejoh | Frontend Engineer',
    description:
      'Frontend engineer building fast, modern, and user-focused web applications with React, Next.js, and the MERN stack.',
    url: 'https://adejoh.dev',
    siteName: 'Adejoh',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunday Ojochenemi Adejoh | Frontend Engineer',
    description:
      'Frontend engineer building fast, modern, and user-focused web applications with React, Next.js, and the MERN stack.'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          figtree.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className='grow'>{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
