'use client'

import React from 'react'
import { motion } from 'framer-motion'

import ContactForm from './contact-form'
import Headings from './headings'
import BackgroundPattern from './ui/bg-pattern'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { FaWhatsapp } from 'react-icons/fa'

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
      className="relative isolate bg-background py-24"
    >
      <BackgroundPattern />

      <div className="container max-w-6xl space-y-12">

        {/* HEADER */}
        <div className="text-center md:text-left">
          

          <Headings title="Let’s Build Something Great" />

          <p className="text-muted-foreground max-w-xl mt-3">
            Have a project in mind? I help businesses build modern, high-performing websites that attract users and drive growth.
          </p>
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
              Start your project today 🚀
            </h2>

            <p className="text-muted-foreground max-w-md">
              Whether you need a landing page, a full website, or a web application, I&apos;m ready to help you bring your ideas to life.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[#3A6D8C]" />
                hello@adejoh.dev
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

            {/* QUICK ACTION BUTTON */}
            <div className="pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link
                  href="https://wa.me/2347063494394"
                  target="_blank"
                  className='flex items-center'
                >
                 <FaWhatsapp className='mr-2'/> Chat on WhatsApp
                </Link>
              </Button>
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