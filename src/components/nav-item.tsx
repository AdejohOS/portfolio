'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface NavItemProps {
  href: string
  name: string
}
const NavItem = ({ href, name }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href || pathname.startsWith(`${href}/`)
  return (
    <Link
      href={href}
      className={cn(
        `transition-colors`,
        isActive &&
          'border-b-2 font-semibold transition-colors dark:border-b-white'
      )}
    >
      {name}
    </Link>
  )
}

export default NavItem
