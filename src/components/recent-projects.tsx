import Link from 'next/link'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { getProjects } from '@/lib/projects'
import Projects from '@/app/projects/_components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)
  return (
    <section>
      <div>
        <Projects projects={projects} />
        <Separator className='my-6' />
        <Button variant='ghost' className='mb-8'>
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 text-sm font-light'
          >
            <span>All projects</span>
            <ArrowRightIcon className='size-4' />
          </Link>
        </Button>
      </div>
    </section>
  )
}
