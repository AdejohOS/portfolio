import Blog from '@/components/blog'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Message from '@/components/message'
import Projects from '@/components/projects'
import Services from '@/components/services'
import { Statistics } from '@/components/statistics'

export default function Home() {
  return (
    <section className='pt-24'>
      <Hero />
      <Statistics />
      <Projects />
      <Services />
      <Experience />

      <Blog />
      <Message />
    </section>
  )
}
