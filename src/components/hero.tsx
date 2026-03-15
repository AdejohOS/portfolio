"use client"

import React from "react"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import BackgroundPattern from "./ui/bg-pattern"
import SocialLinks from "./social-links"

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

const Hero = () => {
  return (
    <section className="relative isolate pb-28 pt-10">
      <BackgroundPattern />

      <div className="container max-w-6xl">
        <div className="items-center gap-10 md:flex">

          {/* LEFT CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-8 space-y-5 text-center md:text-left"
          >

            <motion.h1
              variants={item}
              className="title text-5xl"
            >
              Adejoh Sunday
            </motion.h1>

            <motion.p
              variants={item}
              className="text-3xl font-medium"
            >
              <span className="bg-[#FFF799] px-2 rounded-md">
                Fullstack Developer
              </span>{" "}
              👋
            </motion.p>

            <motion.p
              variants={item}
              className="max-w-[520px] text-muted-foreground"
            >
              Hello! I am a developer passionate about building highly
              scalable and efficient applications using modern tools
              and industry best practices.
            </motion.p>

            <motion.div variants={item}>
              <SocialLinks />
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button
                variant="theme"
                className="shadow-md hover:shadow-lg hover:shadow-[#3A6D8C]/20 transition-all"
              >
                <Link
                  href="/images/sunday-adejoh-resume.pdf"
                  target="_blank"
                  download
                  className="flex items-center"
                >
                  Download Resume
                  <ArrowDown className="size-5 pl-2" />
                </Link>
              </Button>
            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative flex justify-center md:justify-end"
          >
            <Image
              src="/images/port-hero.png"
              alt="profile"
              height={600}
              width={600}
              priority
              className="rounded-xl shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero