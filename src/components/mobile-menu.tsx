import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { Briefcase, Code, Edit, Menu, Phone } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary" className="rounded-full">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <div className="space-y-3 pt-5 ">
          <Link
            href="/projects"
            className="bg-slate-50 w-full py-2 px-4 flex gap-2 items-center hover:bg-slate-100 rounded-md"
          >
            <span>
              <Code className="size-4 text-gray-300" />
            </span>
            Projects
          </Link>
          <Link
            href="/blog"
            className="bg-slate-50 w-full py-2 px-4 flex gap-2 items-center hover:bg-slate-100 rounded-md"
          >
            <span>
              <Edit className="size-4 text-gray-300" />
            </span>
            Blog
          </Link>
          <Link
            href="/experience"
            className="bg-slate-50 w-full flex gap-2 items-center py-2 px-4  hover:bg-slate-100 rounded-md"
          >
            <span>
              <Briefcase className="size-4 text-gray-300" />
            </span>
            Experience
          </Link>
          <Link
            href="/contact"
            className="bg-slate-50 w-full py-2 px-4 flex gap-2 items-center hover:bg-slate-100 rounded-md"
          >
            <span>
              <Phone className="h-4 w-4 text-gray-300" />
            </span>
            Contact
          </Link>
        </div>
        <div className="flex align-center justify-center mt-6">
          <Button variant="outline">Make a Request</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
