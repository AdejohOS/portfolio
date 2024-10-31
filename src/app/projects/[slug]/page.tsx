import { Button } from '@/components/ui/button'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

const Project = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return <h1>Not found!</h1>
  }
  const { metadata, content } = project
  const { title, image, author, createdAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-6xl'>
        <Button variant='ghost' className='mb-8'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-sm font-light'
          >
            <ArrowLeftIcon className='size-4' />
            <span>Back to projects</span>
          </Link>
        </Button>
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}
        <header>
          <h1 className='title'>{title}</h1>
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

export default Project
