'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Eye, Github } from 'lucide-react'
import { Card } from './ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import AboutProject from './about-project'
import projectPosts, { ProjectPostProps } from '@/lib/projects'
import Headings from './headings'

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectPostProps | null>(null)

  const handleProjectClick = (project: ProjectPostProps) => {
    setSelectedProject(project)
  }

  return (
    <section className='bg-gray-100 py-20'>
      <div className='container max-w-6xl'>
        <div className='mb-16'>
          <Headings title='Projects' />
        </div>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
          {projectPosts.map(project => (
            <Card className='overflow-hidden' key={project.id}>
              <div className='relative aspect-video'>
                <Image
                  src={project.image}
                  alt='projectImg'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='space-y-2 p-3'>
                <h2 className='text-xl font-bold'>{project.title}</h2>
                <p>
                  {project.description}...
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => handleProjectClick(project)}
                        variant='ghost'
                        size='sm'
                        className='underline'
                      >
                        more
                      </Button>
                    </DialogTrigger>
                    <DialogContent className='max-h-[80vh] overflow-auto'>
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                        <DialogDescription>
                          <AboutProject selectedProject={selectedProject!} />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </p>
                <div className='flex items-center gap-3'>
                  <Link href={selectedProject?.githubUrl || ''} target='_blank'>
                    <Button variant='outline' className='flex gap-2'>
                      {' '}
                      <Github className='size-4' /> Code
                    </Button>
                  </Link>

                  <Link href={project.siteUrl || ''}>
                    <Button variant='theme' className='flex gap-2'>
                      {' '}
                      <Eye className='size-4' /> Live page
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
