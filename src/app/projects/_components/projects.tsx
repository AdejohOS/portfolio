import { ProjectMetadata } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'

const Projects = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (
    <div className='flex flex-col gap-20'>
      {projects.map(project => (
        <Card
          key={project.slug}
          className='flex flex-col items-center gap-5 rounded-md bg-white p-2 drop-shadow-sm transition-shadow duration-300 hover:shadow-md dark:bg-gray-800 md:flex-row'
        >
          {project.image && (
            <div className='group relative aspect-[3/2] overflow-hidden rounded-lg md:w-2/5'>
              <Image
                src={project.image}
                alt={project.title || ''}
                width={600}
                height={400}
                className='rounded-lg object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          )}
          <div className='space-y-3 md:w-3/5'>
            <h2 className='title line-clamp-1 text-xl no-underline'>
              {project.title}
            </h2>
            <p className='line-clamp-3 text-sm text-muted-foreground'>
              {project.summary}
            </p>

            {project.technologies && (
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map(tech => (
                  <Badge
                    key={tech}
                    className='rounded-l-full rounded-r-full dark:bg-gray-700 dark:text-white'
                    variant='outline'
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            <p className='text-xs font-light text-muted-foreground'>
              {formatDate(project.createdAt ?? '')}
            </p>

            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <Link
                href={project.projectUrl!}
                rel='noopener noreferrer'
                target='_blank'
                aria-label={`View ${project.title} on live site`}
              >
                <Button variant='theme' className='w-full md:w-fit'>
                  View Live <SquareArrowOutUpRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>

              <Link
                href={project.githubUrl!}
                rel='noopener noreferrer'
                target='_blank'
                aria-label={`View ${project.title} on GitHub`}
              >
                <Button
                  variant='outline'
                  className='w-full dark:bg-gray-400 dark:text-gray-900 md:w-fit'
                >
                  Github <GitHubLogoIcon className='ml-2 h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Projects
