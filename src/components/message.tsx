'use client'

import React from 'react'
import { motion } from 'framer-motion'

import ContactForm from './contact-form'
import Headings from './headings'
import BackgroundPattern from './ui/bg-pattern'
import { Mail, MapPin, Phone } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 }
}

const Message = () => {
  return (
    <section
      id="contact"
      className="relative isolate bg-muted/40 py-24"
    >
      <BackgroundPattern />

      <div className="container max-w-6xl space-y-12">

        <div>
          <Headings title="Get in Touch" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2"
        >

          {/* LEFT SIDE */}
          <motion.div variants={item} className="space-y-6">

            <h2 className="text-2xl font-bold">
              Let&apos;s work together
            </h2>

            <p className="text-muted-foreground max-w-md">
              I&apos;m always interested in new opportunities and exciting
              projects. Whether you have a question or just want to
              say hello, feel free to reach out.
            </p>

            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[#3A6D8C]" />
                elusivebrown@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <Phone className="size-4 text-[#3A6D8C]" />
                +234-706-3494-394
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-[#3A6D8C]" />
                Abuja, Nigeria
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div variants={item}>
            <ContactForm />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Message