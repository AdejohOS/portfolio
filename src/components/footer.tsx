import React from 'react'
import Link from 'next/link'

import NewsletterForm from './newsletter-form'
import SocialLinks from './social-links'

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-8 dark:bg-background'>
      <div className='container max-w-6xl'>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
          <div className='order-1 space-y-2 text-center md:order-first md:text-left'>
            <Link href='/'>
              <code className='font-serif text-2xl font-bold'>AOS</code>
            </Link>
            <SocialLinks />
            <p className='text-center text-sm md:text-left'>
              Adejoh Ojochenemi Sunday &copy; 2024
            </p>
          </div>
          <div>
            <h2 className='text-center text-xl font-bold'>Quick links</h2>
            <ul className='flex flex-col items-center justify-center gap-1'>
              <Link href='/projects' className='underline'>
                Projects
              </Link>
              <Link href='/blog' className='underline'>
                Blog
              </Link>
              <Link href='/experience' className='underline'>
                Experience
              </Link>
            </ul>
          </div>
          <div className='space-y-2'>
            <h2 className='text-center text-xl font-bold md:text-right'>
              Newsletter
            </h2>
            <p className='text-center text-sm md:text-right'>
              Subscribe to my newsletter!
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
