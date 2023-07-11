import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="container max-w-7xl mx-auto">
     <Hero />
     <TechStack />
    </main>
  )
}
