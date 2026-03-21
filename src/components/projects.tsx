import React from 'react'

import Headings from './headings'
import RecentProjects from './recent-projects'
import BackgroundPattern from './ui/bg-pattern'

const Projects = () => {
  return (
    <section
      id='projects'
      className='relative isolate bg-background py-24 dark:bg-background'
    >
      <BackgroundPattern />
      <div className='container max-w-6xl'>
        <div className='mb-16 text-center md:text-left'>
          <Headings title='Featured Work' />

          <p className='mt-3 max-w-xl text-muted-foreground'>
            A selection of projects where I solved real problems using modern
            technologies.
          </p>
        </div>

        <RecentProjects />
      </div>
    </section>
  )
}

export default Projects
