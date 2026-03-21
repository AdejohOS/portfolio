'use client'

import { motion } from 'framer-motion'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Headings from './headings'
import Link from 'next/link'
import { Check } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const services = [
  {
    title: 'Landing Page Development',
    description:
      'Modern, high-converting landing pages designed to turn visitors into customers.',
    points: [
      'Fast & responsive design',
      'Conversion-focused layout',
      'SEO-friendly structure'
    ]
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern, clean, and user-friendly experiences.',
    points: [
      'Improved UI/UX',
      'Better performance',
      'Mobile optimization'
    ]
  },
  {
    title: 'Frontend Development',
    description:
      'Building scalable and interactive web applications using React and Next.js.',
    points: [
      'Reusable components',
      'Clean architecture',
      'Performance optimization'
    ]
  },
  {
    title: 'Full-Stack Web Apps (MERN)',
    description:
      'End-to-end web applications with frontend, backend, and database integration.',
    points: [
      'API development',
      'Authentication systems',
      'Database design'
    ]
  }
]

const Services = () => {
  return (
    <section id="services" className="bg-muted/40 py-24">
      <div className="container max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 text-center md:text-left">
       

          <Headings title="How I Can Help You" />

          <p className="text-muted-foreground max-w-xl mt-3">
            I help businesses build modern, high-performing websites and applications that attract users and drive growth.
          </p>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="space-y-4 p-6 transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#3A6D8C]"><Check className='size-4'/></span>
                      {point}
                    </li>
                  ))}
                </ul>

              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Button
            variant="theme"
            className="shadow-md hover:shadow-lg hover:shadow-[#3A6D8C]/20 transition-all"
          >
            <Link href="#contact">
              Start a Project
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default Services