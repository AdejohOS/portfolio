'use client'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }

const Posts = ({ posts }: { posts: PostMetadata[] }) => {
  return (
    <motion.ul
      variants={container}
      initial='hidden'
      animate='show'
      className='flex flex-col gap-6'
    >
      {posts.map(post => (
        <motion.li key={post.slug} variants={item}>
          <Link href={`/blog/${post.slug}`}>
            <Card className='flex flex-col justify-between gap-4 border border-border/40 p-6 transition-all hover:-translate-y-1 hover:border-[#3A6D8C]/40 hover:shadow-lg'>
              <div className='max-w-xl'>
                <p className='title text-lg'>{post.title}</p>

                <p className='mt-2 line-clamp-2 text-sm text-muted-foreground'>
                  {post.summary}
                </p>
              </div>

              {post.createdAt && (
                <p className='text-xs text-muted-foreground'>
                  {formatDate(post.createdAt)}
                </p>
              )}
            </Card>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default Posts
