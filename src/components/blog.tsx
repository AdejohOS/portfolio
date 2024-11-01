import React from 'react'
import Headings from './headings'
import RecentPosts from './recent-posts'

const Blog = () => {
  return (
    <section className='bg-gray-50 py-20 dark:bg-background'>
      <div className='container max-w-6xl'>
        <div className='mb-16'>
          <Headings title='Recent posts' />
        </div>
        <RecentPosts />
      </div>
    </section>
  )
}

export default Blog
