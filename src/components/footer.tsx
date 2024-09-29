import React from "react";
import { Button } from "./ui/button";
import { Mail, Send } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="space-y-2 order-1 md:order-first">
            <h1 className="text-center md:text-left">Logo</h1>
            <p className="text-center md:text-left">https://www.adejohos.dev</p>
            <ul className=" flex items-center gap-3 justify-center md:justify-start">
              <Link href="/">
                <Button variant="outline" className="rounded-full" size="icon">
                  <FaGithub className="size-4 text-gray-500" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="rounded-full" size="icon">
                  <FiTwitter className="size-4 text-gray-500" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="rounded-full" size="icon">
                  <FaInstagram className="size-4 text-gray-500" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="rounded-full" size="icon">
                  <Mail className="size-4 text-gray-500" />
                </Button>
              </Link>
            </ul>
            <p className="text-sm text-center md:text-left">
              Sunday Adejoh &copy; 2024
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-center">Quick links</h2>
            <ul className="flex flex-col gap-1 justify-center items-center">
              <Link href="/projects" className="underline">
                Projects
              </Link>
              <Link href="/blog" className="underline">
                Blog
              </Link>
              <Link href="/experience" className="underline">
                Experience
              </Link>
              <Link href="/contact" className="underline">
                Contact
              </Link>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-center md:text-right">
              Newsletter
            </h2>
            <p className="text-sm text-center md:text-right">
              Subscribe to my newsletter!
            </p>
            <form action="">
              <div className="flex justify-center md:justify-end">
                <Input
                  placeholder="email@domain.com"
                  type="email"
                  className="bg-slate-50 w-[200px] rounded-r-none"
                />
                <Button
                  type="submit"
                  variant="theme"
                  className="rounded-l-none"
                >
                  <Send className="size-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
