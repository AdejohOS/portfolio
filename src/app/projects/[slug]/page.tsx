import { Button } from '@/components/ui/button'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import SocialShare from '@/components/social-share'

export async function generateStaticParams() {
  const projects = await getProjects()
  const slugs = projects.map(project => ({ slug: project.slug }))

  return slugs
}

// metadata for post
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  return {
    title: project?.metadata.title,
    description: project?.metadata.summary,
    openGraph: {
      images: [project?.metadata.image || ''] // Set the og:image meta tag for social sharing
    },
    twitter: {
      card: 'summary_large_image',
      images: project?.metadata.image
    }
  }
}

const Project = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
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
          <div className='relative mb-6 aspect-video w-full overflow-hidden rounded-lg'>
            <Image src={image} alt={title || ''} className='' fill />
          </div>
        )}
        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(createdAt ?? '')}
          </p>
          <SocialShare title={project.metadata.title} />
        </header>
        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}

export default Project
