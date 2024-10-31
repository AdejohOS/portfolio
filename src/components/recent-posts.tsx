import Posts from '@/app/blog/_components/posts'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'

const RecentPosts = async () => {
  const posts = await getPosts(4)
  return (
    <section>
      <div>
        <Posts posts={posts} />
        <Separator className='my-6' />
        <Button variant='ghost' className='mb-8'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm font-light'
          >
            <span>All posts</span>
            <ArrowRightIcon className='size-4' />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default RecentPosts
