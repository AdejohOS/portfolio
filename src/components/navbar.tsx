import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import MobileMenu from './mobile-menu'
import ThemeToggle from './theme-toggle'

const Navbar = () => {
  return (
    <header className='fixed inset-x-0 z-50 bg-gray-50 py-6 backdrop-blur-sm dark:bg-background'>
      <div className='container flex max-w-6xl items-center justify-between'>
        <Link href='/'>
          <code className='font-serif text-2xl font-bold'>AOS</code>
        </Link>
        <nav className='flex items-center gap-4'>
          <ul className='hidden items-center gap-3 md:flex'>
            <Link href='/projects'>Projects</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/experience'>Experience</Link>
          </ul>
          <ThemeToggle />

          <Button variant='theme'>Make a Request</Button>
          <div className='md:hidden'>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
