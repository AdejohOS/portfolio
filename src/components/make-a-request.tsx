'use client'
import Link from 'next/link'
import { Button } from './ui/button'

const MakeRequest = () => {
  return (
    <Link href='#contact'>
      <Button variant='theme'>Hire Me</Button>
    </Link>
  )
}

export default MakeRequest
