import { getProjects } from '@/lib/projects'
import Projects from './_components/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'I have built quite a number of projects, these are some for your delight!'
}

const ProjectPage = async () => {
  const projects = await getProjects()
  return (
    <section className='bg-muted/30 pb-24 pt-36'>
      <div className='container max-w-6xl'>
        <h1 className='title mb-12 text-3xl font-bold'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectPage
