import React from 'react'

import Headings from './headings'
import RecentProjects from './recent-projects'

const Projects = () => {
  return (
    <section className='bg-gray-100 py-20'>
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
