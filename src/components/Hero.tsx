import { FileBarChart } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/Button'

const Hero = () => {
  return (
    <div className='w-full h-full mt-8'>
        <div className='md:grid md:grid-cols-2 md:items-center
                        gap-2 '> 
          <div className='text-center md:text-left  space-y-4 mb-8'> 
            <h1 className='font-bold text-5xl'>Sunday Adejoh</h1>
            <p className='text-3xl'>Fullstack Developer 👋</p>
            <p>With a passion for building highly scalable and efficient applications,
              with industry best practice and tools.</p>
            <Button>
              Download Resume
              <FileBarChart className='pl-2' />
            </Button>
          </div>

          <div className='relative'>
            

            <img src="/images/about.jpg" alt="" />
            
         
          </div>
      </div> 
    </div> 
    
  )
}

export default Hero