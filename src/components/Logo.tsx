'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()
  return (
    
       <Image
            height={40}
            width={40}
            src={'/images/mylogo.png'}
            alt='Logo'
            
        /> 
    
    
  )
}

export default Logo