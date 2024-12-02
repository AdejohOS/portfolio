import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { Mail } from 'lucide-react'

const SocialLinks = () => {
  return (
    <ul className='flex items-center justify-center gap-3 md:justify-start'>
      <Link href='https://github.com/AdejohOS' target='_blank' title='github'>
        <Button
          variant='outline'
          className='rounded-full drop-shadow'
          size='icon'
        >
          <FaGithub className='size-4 text-gray-500' />
        </Button>
      </Link>
      <Link href='https://x.com/b_skilz' target='_blank' title='x'>
        <Button
          variant='outline'
          className='rounded-full drop-shadow'
          size='icon'
        >
          <FiTwitter className='size-4 text-gray-500' />
        </Button>
      </Link>
      <Link
        href='https://instagram.com/adejoh'
        target='_blank'
        title='instagram'
      >
        <Button
          variant='outline'
          className='rounded-full drop-shadow'
          size='icon'
        >
          <FaInstagram className='size-4 text-gray-500' />
        </Button>
      </Link>
      <Link href='mailto: info@adejohos.dev' title='mail'>
        <Button
          variant='outline'
          className='rounded-full drop-shadow'
          size='icon'
        >
          <Mail className='size-4 text-gray-500' />
        </Button>
      </Link>
    </ul>
  )
}

export default SocialLinks
