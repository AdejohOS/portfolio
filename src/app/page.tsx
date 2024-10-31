import Blog from '@/components/blog'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Message from '@/components/message'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <section className='pt-24'>
      <Hero />
      <Projects />
      <Experience />
      <Blog />
      <Message />
    </section>
  )
}
