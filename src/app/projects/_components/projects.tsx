import { ProjectMetadata } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

const Projects = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='aspect-video w-full overflow-hidden bg-muted sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='rounded-lg transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}
            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>
              <p className='text-xs font-light text-muted-foreground'>
                {formatDate(project.createdAt ?? '')}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Projects
