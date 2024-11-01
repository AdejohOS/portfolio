import { getPostBySlug, getPosts } from '@/lib/posts'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

import MDXContent from '@/components/mdx-content'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, createdAt, author } = metadata
  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-6xl'>
        <Button variant='ghost' className='mb-8'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm font-light'
          >
            <ArrowLeftIcon className='size-4' />
            <span>Back to posts</span>
          </Link>
        </Button>

        {image && (
          <div className='relative mb-6 aspect-video h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}
        <header>
          <h1 className='title text-3xl font-bold'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(createdAt ?? '')}
          </p>
        </header>

        <main className='prose dark:prose-invert mt-16'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
