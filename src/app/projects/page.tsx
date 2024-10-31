import { getProjects } from '@/lib/projects'
import Projects from './_components/projects'

const ProjectPage = async () => {
  const projects = await getProjects()
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-6xl'>
        <h1 className='title mb-12 text-2xl font-bold'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectPage
