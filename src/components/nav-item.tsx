'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

interface NavItemProps {
  href: string
  name: string
}

const NavItem = ({ href, name }: NavItemProps) => {
  const pathname = usePathname()

  const isActive =
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <motion.li whileHover={{ y: -2 }}>
      <Link
        href={href}
        className={cn(
          'relative text-sm font-medium transition-colors hover:text-[#3A6D8C]',
          isActive && 'text-[#3A6D8C] font-semibold'
        )}
      >
        {name}

        {/* animated underline */}
        <span
          className={cn(
            'absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FFF799] transition-all duration-300',
            isActive && 'w-full'
          )}
        />
      </Link>
    </motion.li>
  )
}

export default NavItem