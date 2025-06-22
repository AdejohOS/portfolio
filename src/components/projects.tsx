import React from 'react'

import Headings from './headings'
import RecentProjects from './recent-projects'

const Projects = () => {
  return (
    <section id='projects' className='bg-gray-50 py-24 dark:bg-background'>
      <div className='container max-w-6xl'>
        <div className='mb-16'>
          <Headings title='Recent projects' />
        </div>
        <RecentProjects />
      </div>
    </section>
  )
}

export default Projects
