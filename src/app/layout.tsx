import '../styles/globals.css'
import { Figtree } from 'next/font/google'

import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Sunday Ojochenemi Adejoh | Fullstack Developer',
  description: 'Sunday Adejoh is a Fullstack Developer with a passion for Excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(`bg-white text-slate-900 antialiased`, font.className)}>
      <body className='min-h-screen bg-slate-50 pt-16 antialiased'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
