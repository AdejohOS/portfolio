import { CheckCircle, Eye, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
const AboutProject = () => {
  return (
    <div className="h-full w-full overflow-y-auto space-y-3">
      A fully functional Job search application, built with Next 14, Typescript,
      Auth.js, Prisma, Shadcn Ui, Uploadthing, Ky, Sql database, and Tanstack
      Query.
      <div className="relative aspect-video overflow-hidden">
        <Image
          src="/images/futurejobsHome.png"
          alt="projectImage"
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div>
        <h2 className="2xl font-semibold">Key Features</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <CheckCircle className="size-4" />
            User creation, authentication and management with{" "}
            <Link
              href="https://authjs.dev/"
              className="text-blue-400 underline"
            >
              Auth.js
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="size-4" />
            <Link
              href="https://uploadthing.com/"
              className="text-blue-400 underline"
            >
              Uploadthing
            </Link>{" "}
            for storing our images & files
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="size-4" />
            <Link
              href="https://www.npmjs.com/package/ky"
              className="text-blue-400 underline"
            >
              Ky
            </Link>{" "}
            http request
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Link href="https://github.com/AdejohOS/futurejobs" target="_blank">
          <Button variant="outline" className="flex gap-2">
            {" "}
            <Github className="size-4" /> Code
          </Button>
        </Link>

        <Link href="/">
          <Button variant="theme" className="flex gap-2">
            {" "}
            <Eye className="size-4" /> Live page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutProject;
