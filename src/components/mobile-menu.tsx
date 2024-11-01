import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { Button } from './ui/button'
import { Briefcase, Code, Edit, Menu } from 'lucide-react'

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='secondary' className='rounded-full'>
          <Menu className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-white dark:bg-black/75'>
        <div className='space-y-3 pt-5'>
          <Link
            href='/projects'
            className='flex w-full items-center gap-2 rounded-md bg-slate-50 px-4 py-2 hover:bg-slate-100 dark:bg-gray-800'
          >
            <span>
              <Code className='size-4 text-gray-300' />
            </span>
            Projects
          </Link>
          <Link
            href='/blog'
            className='flex w-full items-center gap-2 rounded-md bg-slate-50 px-4 py-2 hover:bg-slate-100 dark:bg-gray-800'
          >
            <span>
              <Edit className='size-4 text-gray-300' />
            </span>
            Blog
          </Link>
          <Link
            href='/experience'
            className='flex w-full items-center gap-2 rounded-md bg-slate-50 px-4 py-2 hover:bg-slate-100 dark:bg-gray-800'
          >
            <span>
              <Briefcase className='size-4 text-gray-300' />
            </span>
            Experience
          </Link>
        </div>
        <div className='align-center mt-6 flex justify-center'>
          <Button variant='outline'>Make a Request</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
