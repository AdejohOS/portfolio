import React from "react"
import Link from "next/link"

import NewsletterForm from "./newsletter-form"
import SocialLinks from "./social-links"

const Footer = () => {
  return (
    <footer className="bg-[#325e79] py-12 text-white">
      <div className="container max-w-6xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="space-y-3 text-center md:text-left">

            <Link href="/">
              <code className="font-serif text-2xl font-bold">
                AOS
              </code>
            </Link>

            <SocialLinks />

            <p className="text-sm text-white/80">
              Adejoh Ojochenemi Sunday © {new Date().getFullYear()}
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center">

            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-1 text-sm">

              <li>
                <Link
                  href="/#projects"
                  className="transition-colors hover:text-[#FFF799]"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/#blog"
                  className="transition-colors hover:text-[#FFF799]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/#technologies"
                  className="transition-colors hover:text-[#FFF799]"
                >
                  Technologies
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-[#FFF799]"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div className="space-y-3 text-center md:text-right">

            <h3 className="text-lg font-semibold">
              Newsletter
            </h3>

            <p className="text-sm text-white/80">
              Subscribe for updates and new posts.
            </p>

            <NewsletterForm />

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer