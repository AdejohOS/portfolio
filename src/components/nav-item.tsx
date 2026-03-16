'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface NavItemProps {
  href: string
  name: string
}

const NavItem = ({ href, name }: NavItemProps) => {
  return (
    <motion.li whileHover={{ y: -2 }}>
      <Link
        href={href}
        className='group relative text-sm font-medium transition-colors hover:text-[#3A6D8C]'
      >
        {name}

        <span
          className={cn(
            'absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FFF799] transition-all duration-300 group-hover:w-full'
          )}
        />
      </Link>
    </motion.li>
  )
}

export default NavItem
