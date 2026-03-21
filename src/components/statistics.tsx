'use client'

import { CodeXml, Medal, Rocket, UsersRound } from 'lucide-react'
import Headings from './headings'
import { motion } from 'framer-motion'
import CountUp from './ui/count-up'

const stats = [
  { icon: CodeXml, value: 30, label: 'Projects Delivered' },
  { icon: UsersRound, value: 12, label: 'Clients Served' },
  { icon: Medal, value: 3, label: 'Years Experience' },
  { icon: Rocket, value: 100, label: 'Fast & Optimized Builds' }
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }

export const Statistics = () => {
  return (
    <section className='bg-[#3A6D8C] py-24 text-white dark:bg-muted/40'>
      <div className='container max-w-6xl'>
        <div className='mb-16 text-center'>
          <Headings title='Proven Results' className='text-white' />

          <p className='mt-3 text-center text-gray-200'>
            Delivering measurable results through modern web development.
          </p>
        </div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-2 gap-6 md:grid-cols-4'
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.05 }}
                className='flex flex-col items-center space-y-4 rounded-lg border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur-sm transition hover:shadow-lg hover:shadow-[#FFF799]/10'
              >
                <Icon className='size-8 text-[#FFF799]' />

                <p className='text-4xl font-bold sm:text-5xl'>
                  <CountUp value={stat.value} suffix='+' />
                </p>

                <h3 className='text-sm uppercase tracking-wide text-white/80'>
                  {stat.label}
                </h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
