import { ProjectMetadata } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Eye, SquareArrowOutUpRight } from 'lucide-react'

const Projects = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (
    <div className='space-y-8'>
      {projects.map(project => (
        <div
          key={project.slug}
          className='flex h-72 flex-col items-center gap-5 rounded bg-white drop-shadow-sm md:flex-row'
        >
          {project.image && (
            <div className='group relative aspect-video h-full overflow-hidden rounded-lg'>
              <Image
                src={project.image}
                alt={project.title || ''}
                fill
                className='rounded-lg object-fill transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          )}
          <div className='space-y-3'>
            <h2 className='title line-clamp-1 text-xl no-underline'>
              {project.title}
            </h2>
            <p className='line-clamp-1 text-sm text-muted-foreground'>
              {project.summary}
            </p>
            <p className='text-xs font-light text-muted-foreground'>
              {formatDate(project.createdAt ?? '')}
            </p>

            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <Button variant='theme' className='w-full md:w-fit'>
                <Link
                  href={project.projectUrl!}
                  className='flex items-center gap-2'
                >
                  View Live <Eye className='h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' className='w-full md:w-fit'>
                <Link
                  href={project.githubUrl!}
                  className='flex items-center gap-2'
                >
                  Github <SquareArrowOutUpRight className='h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
