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
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
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
