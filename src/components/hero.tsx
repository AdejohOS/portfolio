import React from 'react'
import { Button } from './ui/button'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { FileBarChart, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className=''>
      <div className='container max-w-6xl py-20'>
        <div className='items-center justify-center gap-5 md:flex'>
          <div className='mb-8 space-y-4 text-center md:text-left'>
            <h1 className='title text-5xl'>Sunday Adejoh</h1>
            <p className='text-3xl'>Fullstack Developer 👋</p>
            <p className='max-w-[500px] font-light text-muted-foreground'>
              With a passion for building highly scalable and efficient
              applications, with industry best practice and tools.
            </p>
            <ul className='flex items-center justify-center gap-3 md:justify-start'>
              <Link href='https://github.com/AdejohOS'>
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

            <Button variant='theme'>
              <Link
                href='/images/resume.pdf'
                download
                className='flex items-center'
              >
                Download Resume
                <FileBarChart className='pl-2' />
              </Link>
            </Button>
          </div>
          <div className='relative aspect-video justify-end'>
            <Image
              src='/images/pro.svg'
              alt='profile'
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
