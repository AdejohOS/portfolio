'use client'
import NavItem from './nav-item'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Projects', href: '/#projects' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Technologies', href: '/#technologies' }
]

const NavLinks = () => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className='hidden items-center gap-6 md:flex'
    >
      {navLinks.map(link => (
        <NavItem key={link.name} href={link.href} name={link.name} />
      ))}
    </motion.ul>
  )
}

export default NavLinks
