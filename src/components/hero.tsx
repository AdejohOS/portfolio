'use client'

import React from 'react'
import { Button } from './ui/button'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BackgroundPattern from './ui/bg-pattern'
import SocialLinks from './social-links'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 }
}

const Hero = () => {
  return (
    <section className='relative isolate pb-28 pt-10'>
      <BackgroundPattern />

      <div className='container max-w-6xl'>
        <div className='items-center gap-10 md:flex'>
          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='mb-8 space-y-6 text-center md:text-left'
          >
            {/* NAME */}
            <motion.h1 variants={item} className='title text-5xl'>
              Adejoh O. Sunday
            </motion.h1>

            {/* POSITION */}
            <motion.p variants={item} className='text-2xl font-semibold'>
              <span className='rounded-md bg-[#FFF799] px-2 dark:text-background'>
                Fullstack Developer (React • Node.js • Django)
              </span>
            </motion.p>

            <motion.h2
              variants={item}
              className='text-3xl font-bold leading-tight'
            >
              I build modern web applications that help businesses grow
            </motion.h2>

            <motion.p
              variants={item}
              className='max-w-[500px] text-muted-foreground'
            >
              I build fast, scalable, and user-focused web applications with
              React, Next.js, Node.js, and Django.
            </motion.p>

            {/* SOCIALS */}
            <motion.div variants={item}>
              <SocialLinks />
            </motion.div>

            {/* CTA BUTTONS */}
            <motion.div
              variants={item}
              className='flex flex-col gap-3 sm:flex-row sm:items-center'
            >
              <Button
                variant='theme'
                className='shadow-md transition-all hover:shadow-lg hover:shadow-[#3A6D8C]/20'
              >
                <Link href='#projects'>View My Work</Link>
              </Button>

              <Button variant='outline'>
                <Link href='#contact'>Hire Me</Link>
              </Button>

              <Button variant='ghost'>
                <Link
                  href='/images/sunday-adejoh-resume.pdf'
                  target='_blank'
                  download
                  className='flex items-center'
                >
                  Resume
                  <ArrowDown className='ml-1 size-4' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
            className='relative flex justify-center md:justify-end'
          >
            <Image
              src='/images/port-hero-blue.png'
              alt='profile'
              height={600}
              width={600}
              priority
              className='rounded-xl shadow-lg'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
