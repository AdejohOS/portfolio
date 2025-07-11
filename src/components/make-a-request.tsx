'use client'
import Link from 'next/link'
import { Button } from './ui/button'

const MakeRequest = () => {
  return (
    <Link href='#contact'>
      <Button variant='theme'>Make a Request</Button>
    </Link>
  )
}

export default MakeRequest
