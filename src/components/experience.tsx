import { ArrowRight } from 'lucide-react'
import React from 'react'

import {
  DiAws,
  DiDjango,
  DiDocker,
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
import { Card } from './ui/card'
import BackgroundPattern from './ui/bg-pattern'

const Experience = () => {
  return (
    <section className='relative isolate bg-gray-100 py-20 dark:bg-background'>
      <BackgroundPattern />
      <div className='container max-w-6xl'>
        <div className='mb-16'>
          <Headings title='Experience' />
          <div className=''></div>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <Card className='p-4'>
            <h4 className='mb-3 text-center text-xl font-semibold'>
              Language Proficiency
            </h4>
            <div className='space-y-3'>
              <p className='flex items-center gap-2'>
                <DiJavascript className='h-5 w-5' />
                <span>Javascript</span>{' '}
                <code className='rounded-md bg-gray-50 px-2 py-1 text-xs'>
                  console.log(&#34;I know javascript&#34;)
                </code>
              </p>

              <p className='flex items-center gap-2'>
                {' '}
                <DiPython className='h-5 w-5' /> <span>Python</span>
                <code className='rounded-md bg-gray-50 px-2 py-1 text-xs'>
                  print(&#34;I also know python&#34;)
                </code>
              </p>
            </div>
          </Card>

          <Card className='p-4'>
            <h4 className='mb-3 text-center text-xl font-semibold'>
              Frameworks
            </h4>

            <div className='space-y-3'>
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
          </Card>
          <Card className='p-4'>
            <h4 className='mb-3 text-center text-xl font-semibold'>
              Databases
            </h4>
            <div className='space-y-3'>
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
          </Card>
          <Card className='p-4'>
            <h4 className='mb-3 text-center text-xl font-semibold'>Others</h4>
            <div className='space-y-3'>
              <p className='flex items-center gap-2'>
                <span className='flex items-center gap-3'>
                  <SiJest />
                  Jest
                </span>
              </p>
              <p className='flex items-center gap-2'>
                <span className='flex items-center gap-3'>
                  <DiDocker />
                  Docker
                </span>
              </p>
              <p className='flex items-center gap-2'>
                <span className='flex items-center gap-3'>
                  <DiAws />
                  AWS
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Experience
