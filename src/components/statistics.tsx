import { CodeXml, Coffee, Medal, UsersRound } from 'lucide-react'
import Headings from './headings'

export const Statistics = () => {
  return (
    <section className='bg-gray-700 py-24 dark:bg-gray-800'>
      <div className='container max-w-6xl'>
        <div className='mb-16'>
          <Headings title='By the Numbers' className='text-white' />
        </div>
        <div className='space-y-8'>
          <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            <div className='flex flex-col items-center space-y-4 border-r border-gray-600 px-4 py-8 text-center text-white'>
              <CodeXml className='size-8' />
              <p className='text-6xl font-bold'>30+</p>
              <h3 className='text-lg font-bold'>Projects Completed</h3>
            </div>
            <div className='flex flex-col items-center space-y-4 border-r border-gray-600 px-4 py-8 text-center text-white'>
              <UsersRound className='size-8' />
              <p className='text-6xl font-bold'>12+</p>
              <h3 className='text-lg font-bold'>Happy Clients</h3>
            </div>
            <div className='flex flex-col items-center space-y-4 border-r border-gray-600 px-4 py-8 text-center text-white'>
              <Coffee className='size-8' />
              <p className='text-6xl font-bold'>1,000+</p>
              <h3 className='text-lg font-bold'>Cups of Coffee</h3>
            </div>
            <div className='flex flex-col items-center space-y-4 px-4 py-8 text-center text-white'>
              <Medal className='size-8' />
              <p className='text-6xl font-bold'>3+</p>
              <h3 className='text-lg font-bold'>Years of Experience</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
