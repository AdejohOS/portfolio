import NavItem from './nav-item'

const navLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Experience', href: '/experience' }
]

const NavLinks = () => {
  return (
    <ul className='hidden items-center gap-3 md:flex'>
      {navLinks.map(link => (
        <NavItem key={link.name} href={link.href} name={link.name} />
      ))}
    </ul>
  )
}

export default NavLinks
