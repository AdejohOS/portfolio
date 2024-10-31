'use client'

import { PostMetadata } from '@/lib/posts'
import React, { useState } from 'react'
import Posts from './posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

const PostsWithSearch = ({ posts }: { posts: PostMetadata[] }) => {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )
  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }
  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search posts...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className='h-9 w-full sm:w-1/2'
        />

        {isFiltered && (
          <Button
            className='rounded-l-full rounded-r-full'
            onClick={resetFilter}
            size='sm'
            variant='theme'
          >
            Reset <Cross2Icon className='ml-2 size-4' />
          </Button>
        )}
      </div>
      <Posts posts={filtered} />
    </div>
  )
}

export default PostsWithSearch
