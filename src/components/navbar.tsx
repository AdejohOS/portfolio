import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <header className="bg-gray-50 h-16 flex items-center justify-center z-10">
      <div className="max-w-7xl m-auto flex items-center justify-between w-full px-4">
        <Link href="/">Logo</Link>
        <nav className="flex items-center gap-4 ">
          <ul className="hidden md:flex items-center gap-3">
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/contact">Contact</Link>
          </ul>

          <Button variant="theme">Make a Request</Button>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
