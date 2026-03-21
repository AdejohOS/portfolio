import React from "react"
import Link from "next/link"
import SocialLinks from "./social-links"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="bg-[#325e79] py-16 text-white dark:bg-background">
      <div className="container max-w-6xl space-y-10 text-center md:text-left">

        {/* CTA */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Let&apos;s build something great together!
          </h2>

          <p className="text-white/80 max-w-md">
            Need a modern website or web app? I&apos;m available for freelance and full-time opportunities.
          </p>

          <div>
            <Button className="bg-[#FFF799] text-black hover:bg-[#f5ef85]">
              <Link href="#contact">
                Start a Project
              </Link>
            </Button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">

          {/* BRAND */}
          <div className="space-y-2 text-center md:text-left">
            <Link href="/">
              <span className="font-serif text-xl font-bold">
                AOS
              </span>
            </Link>

            <p className="text-sm text-white/70">
              Adejoh Ojochenemi Sunday © {new Date().getFullYear()}
            </p>
          </div>

          {/* SOCIALS */}
          <SocialLinks />

        </div>

      </div>
    </footer>
  )
}

export default Footer