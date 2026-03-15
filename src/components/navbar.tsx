'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import MobileMenu from './mobile-menu'
import ThemeToggle from './theme-toggle'
import MakeRequest from './make-a-request'
import NavLinks from './nav-links'

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='fixed inset-x-0 z-50 border-b border-border/40 bg-background/80 py-6 backdrop-blur-md'
    >
      <div className='container flex max-w-6xl items-center justify-between'>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href='/'
            className='font-serif text-2xl font-bold transition-colors hover:text-[#3A6D8C]'
          >
            AOS
          </Link>
        </motion.div>

        <nav className='flex items-center gap-4'>
          <NavLinks />
          <ThemeToggle />
          <MakeRequest />

          <div className='md:hidden'>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
