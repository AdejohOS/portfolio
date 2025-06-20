import React from 'react'
import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import BackgroundPattern from './ui/bg-pattern'
import SocialLinks from './social-links'

const Hero = () => {
  return (
    <section className='relative isolate pb-20 pt-10'>
      <BackgroundPattern />
      <div className='container max-w-6xl'>
        <div className='items-center justify-center gap-5 md:flex'>
          <div className='mb-8 space-y-4 text-center md:text-left'>
            <h1 className='title text-5xl'>Adejoh Sunday</h1>
            <p className='text-3xl'>Fullstack Developer 👋</p>
            <p className='max-w-[500px] font-light text-muted-foreground'>
              Hello!, I am a developer with a passion for building highly
              scalable and efficient applications, with industry best practice
              and tools.
            </p>
            <SocialLinks />

            <Button variant='theme'>
              <Link
                href='/images/sunday-adejoh-resume.pdf'
                target='_blank'
                download
                className='flex items-center'
              >
                Download Resume
                <ArrowDown className='size-5 shrink-0 pl-2' />
              </Link>
            </Button>
          </div>
          <div className='relative aspect-video justify-end'>
            <Image
              src='/images/hero.png'
              alt='profile'
              height={600}
              width={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
