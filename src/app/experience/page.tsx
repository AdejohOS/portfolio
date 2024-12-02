import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'I have learnt and built applications with a wide range of Languages, Frameworks and Libraries plus undergoing some courses delivered by professionals!'
}

const Page = () => {
  return (
    <section className='pb-24 pt-40 text-2xl'>
      <div className='container max-w-6xl'>
        <h1 className='title mb-12 text-2xl font-bold'>
          Experience & Certification
        </h1>
        <div>
          <ul>
            <li className='flex items-center gap-2'>
              <p>- Meta Frontend Developer Course </p>

              <Link href='/' className=''>
                <ArrowUpRight className='size-4' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Page
