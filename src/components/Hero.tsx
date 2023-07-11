import { FileBarChart } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/Button'

const Hero = () => {
  return (
    <div className='grid col-2'>
        <div className='space-y-4'>
          <h1 className='font-bold text-5xl'>Sunday Adejoh</h1>
          <p className='text-3xl'>Fullstack Developer 👋</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, eaque fuga distinctio soluta 
            minima mollitia sapiente optio dolores quidem voluptatum!</p>
          <Button>
            Download Resume
            <FileBarChart className='pl-2' />
          </Button>
        </div>

        <div className='max-w-[899px] max-h-[899px] block'>
          <Image
            height={200}
            width={200}
            src={'/images/propic.jpg'}
            alt='Profile pic'
            className='object-cover'
          />
        </div>
    </div>
  )
}

export default Hero