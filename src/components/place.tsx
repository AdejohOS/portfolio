import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Eye, Github } from "lucide-react";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AboutProject from "./about-project";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2023-10-01",
    description:
      "A guide to getting started with Next.js for building powerful web applications.",
    content: `
      # Getting Started with Next.js
      Next.js is a React framework for production. It enables functionalities like server-side rendering and static site generation, making React apps more scalable.
      
      ## Key Features
      - **File-based routing**
      - **Server-side rendering**
      - **API routes**
      
      ## Getting Started
      To create a new Next.js project, you can use the following command:
      
      \`\`\`bash
      npx create-next-app my-app
      \`\`\`
      
      Next, open the app in your code editor and start building!
    `,
    slug: "getting-started-with-next-js",
    image: "/images/nextjs-guide.jpg", // Path to the image
  },
  {
    id: 2,
    title: "Introduction to React Query",
    date: "2023-10-05",
    description:
      "Learn how to manage server-state with ease using React Query.",
    content: `
      # Introduction to React Query
      React Query simplifies data fetching in your React applications by providing hooks for managing server-state.
      
      ## Why Use React Query?
      - Caching: Avoid unnecessary network requests.
      - Synchronization: Keep data up-to-date automatically.
      - Powerful hooks like \`useQuery\` and \`useMutation\`.
      
      ## Example
      Here's how to use React Query's \`useQuery\` to fetch data:
      
      \`\`\`typescript
      import { useQuery } from 'react-query';

      function fetchData() {
        return fetch('/api/data').then(res => res.json());
      }

      function MyComponent() {
        const { data, error, isLoading } = useQuery('data', fetchData);

        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error loading data</p>;

        return <div>{data}</div>;
      }
      \`\`\`
    `,
    slug: "introduction-to-react-query",
    image: "/images/react-query.jpg", // Path to the image
  },
  {
    id: 3,
    title: "Mastering CSS Grid",
    date: "2023-10-10",
    description: "A comprehensive guide to understanding and using CSS Grid.",
    content: `
      # Mastering CSS Grid
      CSS Grid is a powerful layout system in CSS. It allows you to create complex layouts with simple code.
      
      ## Basic Syntax
      To start using CSS Grid, you need to define a grid container:
      
      \`\`\`css
      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      \`\`\`
      
      ## Example Layout
      Here's a basic example of a two-column grid layout:
      
      \`\`\`html
      <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
      </div>
      \`\`\`
    `,
    slug: "mastering-css-grid",
    image: "/images/css-grid.jpg", // Path to the image
  },
  {
    id: 4,
    title: "TypeScript for Beginners",
    date: "2023-10-15",
    description:
      "Learn the basics of TypeScript and how it enhances JavaScript development.",
    content: `
      # TypeScript for Beginners
      TypeScript is a superset of JavaScript that adds static types. This helps catch errors during development and improves code readability.
      
      ## Basic Types
      TypeScript provides various basic types:
      - \`string\`
      - \`number\`
      - \`boolean\`
      
      ## Example
      Here's how to define a function with types:
      
      \`\`\`typescript
      function greet(name: string): string {
        return 'Hello, ' + name;
      }
      \`\`\`
      
      ## Conclusion
      Using TypeScript can lead to more robust and maintainable code.
    `,
    slug: "typescript-for-beginners",
    image: "/images/typescript-beginners.jpg", // Path to the image
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold border-b-2 inline pb-2">
            Projects{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image src="/images/Challenge.png" alt="projectImg" fill />
            </div>
            <div className="p-3 space-y-2">
              <h2 className="font-bold text-xl">Future jobs</h2>
              <p>
                Future jobs is an Online Job Search and Apply Platform that
                connects Employers to potential Talents (Job Seekers)...
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="underline">
                      more
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>About FutureJobs</DialogTitle>
                      <DialogDescription>
                        <AboutProject />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com/AdejohOS/futurejobs"
                  target="_blank"
                >
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
