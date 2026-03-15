'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { Button } from './ui/button'
import { Briefcase, Code, Edit, Menu } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='secondary' className='rounded-full'>
          <Menu className='size-4' />
        </Button>
      </SheetTrigger>

      <SheetContent className='bg-background'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='space-y-3 pt-5'
        >
          <motion.div variants={item}>
            <Link
              href='/projects'
              className='flex w-full items-center gap-2 rounded-md bg-muted px-4 py-2 transition-all hover:bg-[#FFF799]'
            >
              <Code className='size-4 text-muted-foreground' />
              Projects
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href='/blog'
              className='flex w-full items-center gap-2 rounded-md bg-muted px-4 py-2 transition-all hover:bg-[#FFF799]'
            >
              <Edit className='size-4 text-muted-foreground' />
              Blog
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link
              href='/experience'
              className='flex w-full items-center gap-2 rounded-md bg-muted px-4 py-2 transition-all hover:bg-[#FFF799]'
            >
              <Briefcase className='size-4 text-muted-foreground' />
              Experience
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='mt-6 flex justify-center'
        >
          <Button className='bg-[#3A6D8C] text-white hover:bg-[#325e79]'>
            Make a Request
          </Button>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
