'use client'


import { motion } from 'framer-motion'

import {
  DiAws,
  DiDjango,
  DiDocker,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPostgresql,
  
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
      className="relative isolate bg-background py-24"
    >
      <BackgroundPattern />

      <div className="container max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 text-center md:text-left">
        

          <Headings title="What I Can Do For You" />

          <p className="text-muted-foreground max-w-xl mt-3">
            I use modern technologies to build fast, scalable, and user-focused web applications that help businesses grow.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >

          {/* FRONTEND */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
              <h4 className="text-xl font-semibold">
                Frontend Development
              </h4>

              <p className="text-sm text-muted-foreground">
                Building fast, responsive, and visually engaging interfaces that improve user experience and drive conversions.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="flex items-center gap-2">
                  <DiReact className="text-[#3A6D8C]" /> React
                </span>
                <span className="flex items-center gap-2">
                  <RiNextjsFill className="text-[#3A6D8C]" /> Next.js
                </span>
                <span className="flex items-center gap-2">
                  <DiJavascript className="text-[#3A6D8C]" /> JavaScript
                </span>
              </div>
            </Card>
          </motion.div>

          {/* FULLSTACK */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
              <h4 className="text-xl font-semibold">
                Full-Stack Development
              </h4>

              <p className="text-sm text-muted-foreground">
                Developing complete web applications using the MERN stack, from frontend interfaces to backend APIs.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="flex items-center gap-2">
                  <DiMongodb className="text-[#3A6D8C]" /> MongoDB
                </span>
                <span className="flex items-center gap-2">
                  <DiReact className="text-[#3A6D8C]" /> React
                </span>
                <span className="flex items-center gap-2">
                  <DiNodejs className="text-[#3A6D8C]" /> Node.js
                </span>
              </div>
            </Card>
          </motion.div>

          {/* BACKEND */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
              <h4 className="text-xl font-semibold">
                Database & Backend
              </h4>

              <p className="text-sm text-muted-foreground">
                Designing secure, scalable backend systems and managing databases for reliable application performance.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="flex items-center gap-2">
                  <DiPostgresql className="text-[#3A6D8C]" /> PostgreSQL
                </span>
                <span className="flex items-center gap-2">
                  <DiMysql className="text-[#3A6D8C]" /> MySQL
                </span>
                <span className="flex items-center gap-2">
                  <DiDjango className="text-[#3A6D8C]" /> Django
                </span>
              </div>
            </Card>
          </motion.div>

          {/* DEVOPS */}
          <motion.div variants={item}>
            <Card className="space-y-4 p-6 transition-all hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
              <h4 className="text-xl font-semibold">
                Deployment & Tools
              </h4>

              <p className="text-sm text-muted-foreground">
                Deploying and maintaining applications with modern tools to ensure speed, reliability, and scalability.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="flex items-center gap-2">
                  <DiDocker className="text-[#3A6D8C]" /> Docker
                </span>
                <span className="flex items-center gap-2">
                  <DiAws className="text-[#3A6D8C]" /> AWS
                </span>
                <span className="flex items-center gap-2">
                  <SiJest className="text-[#3A6D8C]" /> Jest
                </span>
              </div>
            </Card>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Experience