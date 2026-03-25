'use client'

import { ProjectMetadata } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Code, SquareArrowOutUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }

const Projects = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='flex flex-col gap-20'
    >
      {projects.map(project => (
        <motion.div key={project.slug} variants={item}>
          <Card className='flex flex-col items-center gap-6 rounded-xl border border-l-4 border-border/40 border-l-[#FFF799] bg-background p-4 shadow-sm transition-all hover:-translate-y-1 hover:scale-[1.01] hover:border-[#3A6D8C]/40 hover:shadow-xl md:flex-row'>
            {project.image && (
              <div className='group relative aspect-[3/2] overflow-hidden rounded-lg md:w-2/5'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  sizes='(max-width: 768px) 100vw, 40vw'
                  width={600}
                  height={400}
                  className='rounded-lg object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
            )}

            <div className='space-y-4 md:w-3/5'>
              <h2 className='title text-xl'>{project.title}</h2>

              <div className='space-y-2 text-sm text-muted-foreground'>
                <p className='font-medium text-foreground'>What I built:</p>
                <p className='line-clamp-2'>{project.summary}</p>

                <p className='font-medium text-foreground'>Impact:</p>
                <p className='line-clamp-2'>{project.impact}</p>
              </div>

              {project.technologies && (
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map(tech => (
                    <Badge
                      key={tech}
                      className='rounded-full border-[#3A6D8C]/20 bg-[#FFF799]/40 text-black'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              <p className='text-xs text-muted-foreground'>
                {formatDate(project.createdAt ?? '')}
              </p>

              <div className='flex flex-col gap-3 md:flex-row'>
                <Link
                  href={project.projectUrl!}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant='theme' className='w-full md:w-fit'>
                    View Project
                    <SquareArrowOutUpRight className='ml-2 h-4 w-4' />
                  </Button>
                </Link>

                {project.githubUrl ? (
                  <Link
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button
                      variant='outline'
                      className='w-full hover:border-[#3A6D8C] md:w-fit'
                    >
                      Code
                      <Code className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Projects
