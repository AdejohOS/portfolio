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
      <Posts posts={posts} />

      <Separator className='my-10' />

      <Button variant='ghost'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 text-sm hover:text-[#3A6D8C]'
        >
          <span>View all articles</span>
          <ArrowRightIcon className='size-4' />
        </Link>
      </Button>
    </section>
  )
}

export default RecentPosts
