import React from 'react'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import NewsletterForm from './newsletter-form'

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-8 dark:bg-background'>
      <div className='container max-w-6xl'>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
          <div className='order-1 space-y-2 md:order-first'>
            <Link href='/'>
              <code className='font-serif text-2xl font-bold'>AOS</code>
            </Link>
            <ul className='flex items-center justify-center gap-3 md:justify-start'>
              <Link href='/'>
                <Button variant='outline' className='rounded-full' size='icon'>
                  <FaGithub className='size-4 text-gray-500' />
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='outline' className='rounded-full' size='icon'>
                  <FiTwitter className='size-4 text-gray-500' />
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='outline' className='rounded-full' size='icon'>
                  <FaInstagram className='size-4 text-gray-500' />
                </Button>
              </Link>
              <Link href='/'>
                <Button variant='outline' className='rounded-full' size='icon'>
                  <Mail className='size-4 text-gray-500' />
                </Button>
              </Link>
            </ul>
            <p className='text-center text-sm md:text-left'>
              Sunday Ojochenemi Adejoh &copy; 2024
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
