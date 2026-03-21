import React from 'react'
import Headings from './headings'
import RecentPosts from './recent-posts'

const Blog = () => {
  return (
    <section id='blog' className='bg-muted/40 py-24'>
      <div className='container max-w-6xl'>
        <div className='mb-16 text-center md:text-left'>
          <Headings title='Insights & Articles' />

          <p className='mt-3 max-w-xl text-muted-foreground'>
            Sharing insights on web development, performance, and building
            modern applications.
          </p>
        </div>

        <RecentPosts />
      </div>
    </section>
  )
}

export default Blog
