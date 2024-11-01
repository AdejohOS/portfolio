import { ArrowRight } from 'lucide-react'
import React from 'react'

import {
  DiDjango,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiReact
} from 'react-icons/di'
import { RiNextjsFill } from 'react-icons/ri'
import { SiJest } from 'react-icons/si'
import Headings from './headings'

const Experience = () => {
  return (
    <section className='bg-gray-200/30 py-20 dark:bg-background'>
      <div className='container max-w-6xl'>
        <div className='mb-16'>
          <Headings title='Experience' />
          <div className=''></div>
        </div>
        <div className='mt-4 flex flex-wrap justify-between gap-5'>
          <div>
            <h4 className='text-xl font-semibold'>Language Proficiency</h4>
            <p className='flex items-center gap-2'>
              <DiJavascript className='h-5 w-5' />
              <span>Javascript</span>
            </p>
            <p className='flex items-center gap-2'>
              {' '}
              <DiPython className='h-5 w-5' /> Python
            </p>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>Frameworks</h4>
            <p className='flex items-center gap-2'>
              <DiReact className='h-5 w-5' />
              <span className='flex items-center gap-3'>
                React <ArrowRight /> <RiNextjsFill />
                Next Js
              </span>
            </p>
            <p className='flex items-center gap-2'>
              {' '}
              <DiDjango className='size-7' /> Django
            </p>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>Databases</h4>
            <p className='flex items-center gap-2'>
              <span className='flex items-center gap-3'>
                <DiMongodb />
                MongoDb
              </span>
            </p>
            <p className='flex items-center gap-2'>
              {' '}
              <DiMysql className='size-7' /> MySql
            </p>
            <p className='flex items-center gap-2'>
              {' '}
              <DiPostgresql className='size-7' /> Postgresql
            </p>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>Unit Test</h4>
            <p className='flex items-center gap-2'>
              <span className='flex items-center gap-3'>
                <SiJest />
                Jest
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
