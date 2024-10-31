import { getPosts } from '@/lib/posts'
import React from 'react'

import PostsWithSearch from './_components/posts-with-search'

const PostPage = async () => {
  const posts = await getPosts()
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-6xl'>
        <h1 className='title mb-12 text-2xl font-bold'>Blog posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}

export default PostPage
