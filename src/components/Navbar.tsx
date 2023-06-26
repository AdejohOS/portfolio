import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/Button'

const Navbar = () => {
  return (
    <div className='fixed top-0 inset-x-0 z-10 h-fit bg-zinc-100 w-full shadow'>
        <div className='container max-w-7xl mx-auto flex 
                        justify-between items-center py-2 '
        >
            <div className='flex-1'>

                <Logo />
            </div>

            

            <ul className='flex items-center justify-between gap-x-4 mr-4'>
                <Link
                    href={'/projects'}    
                >
                    Projects
                </Link>
                <Link
                    href={'/projects'}    
                >
                    Blog
                </Link>
                <Link
                    href={'/projects'}    
                >
                    Experience
                </Link>
                <Link
                    href={'/projects'}    
                >
                    Contact
                </Link>
            </ul>

            <div>
                <Button
                    className={cn(buttonVariants({variant: 'outline'}), 'bg-slate-100 text-slate-900 shadow-md')}
                >
                    Make a Request
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar