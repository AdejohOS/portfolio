'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import {
  DiAws,
  DiDjango,
  DiDocker,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiReact
} from 'react-icons/di'

import { RiNextjsFill } from 'react-icons/ri'
import { SiJest } from 'react-icons/si'

import Headings from './headings'
import { Card } from './ui/card'
import BackgroundPattern from './ui/bg-pattern'

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

const Experience = () => {
  return (
    <section
      id="technologies"
      className="relative isolate bg-muted/40 py-24"
    >
      <BackgroundPattern />

      <div className="container max-w-6xl">

        <div className="mb-16">
          <Headings title="Skills & Technologies" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >

          {/* Languages */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h4 className="text-center text-xl font-semibold">
                Language Proficiency
              </h4>

              <div className="space-y-3">

                <p className="flex items-center gap-2">
                  <DiJavascript className="size-6 text-[#3A6D8C]" />
                  Javascript
                  <code className="rounded-md bg-muted px-2 py-1 text-xs">
                    console.log(&apos;Hello world&apos;)
                  </code>
                </p>

                <p className="flex items-center gap-2">
                  <DiPython className="size-6 text-[#3A6D8C]" />
                  Python
                  <code className="rounded-md bg-muted px-2 py-1 text-xs">
                    print(&apos;Hello world&apos;)
                  </code>
                </p>

              </div>
            </Card>
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h4 className="text-center text-xl font-semibold">
                Frameworks
              </h4>

              <div className="space-y-3">

                <p className="flex items-center gap-2">
                  <DiReact className="size-6 text-[#3A6D8C]" />
                  React
                  <ArrowRight size={16} />
                  <RiNextjsFill className="size-5 text-[#3A6D8C]" />
                  Next.js
                </p>

                <p className="flex items-center gap-2">
                  <DiDjango className="size-6 text-[#3A6D8C]" />
                  Django
                </p>

              </div>
            </Card>
          </motion.div>

          {/* Databases */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h4 className="text-center text-xl font-semibold">
                Databases
              </h4>

              <div className="space-y-3">

                <p className="flex items-center gap-2">
                  <DiMongodb className="size-6 text-[#3A6D8C]" />
                  MongoDB
                </p>

                <p className="flex items-center gap-2">
                  <DiMysql className="size-6 text-[#3A6D8C]" />
                  MySQL
                </p>

                <p className="flex items-center gap-2">
                  <DiPostgresql className="size-6 text-[#3A6D8C]" />
                  PostgreSQL
                </p>

              </div>
            </Card>
          </motion.div>

          {/* Tools */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
              <h4 className="text-center text-xl font-semibold">
                Tools
              </h4>

              <div className="space-y-3">

                <p className="flex items-center gap-2">
                  <SiJest className="text-[#3A6D8C]" />
                  Jest
                </p>

                <p className="flex items-center gap-2">
                  <DiDocker className="size-6 text-[#3A6D8C]" />
                  Docker
                </p>

                <p className="flex items-center gap-2">
                  <DiAws className="size-6 text-[#3A6D8C]" />
                  AWS
                </p>

              </div>
            </Card>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Experience