import { getPosts } from '@/lib/posts'
import React from 'react'

import PostsWithSearch from './_components/posts-with-search'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'With every hurdle come something new, this is a collection of my experience in words!'
}

const PostPage = async () => {
  const posts = await getPosts()
  return (
    <section className='bg-muted/30 pb-24 pt-36'>
      <div className='container max-w-6xl'>
        <div className='mb-12 space-y-2'>
          <h1 className='title text-3xl'>Blog posts</h1>
          <p className='text-sm text-muted-foreground'>
            Thoughts, lessons, and experiences from building software.
          </p>
        </div>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostPage
