import { ArrowRight } from "lucide-react";
import React from "react";

import {
  DiDjango,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";

const Experience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl font-bold border-b-2 inline pb-2">
            Experience{" "}
          </h2>
          <div className=""></div>
          <div className="mt-4 flex justify-between gap-5 flex-wrap">
            <div>
              <h4 className="font-semibold text-xl">Language Proficiency</h4>
              <p className="flex items-center gap-2">
                <DiJavascript className="h-5 w-5" />
                <span>Javascript</span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <DiPython className="h-5 w-5" /> Python
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Frameworks</h4>
              <p className="flex items-center gap-2">
                <DiReact className="h-5 w-5" />
                <span className="flex gap-3 items-center">
                  React <ArrowRight /> <RiNextjsFill />
                  Next Js
                </span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <DiDjango className="size-7" /> Django
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Databases</h4>
              <p className="flex items-center gap-2">
                <span className="flex gap-3 items-center">
                  <DiMongodb />
                  MongoDb
                </span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <DiMysql className="size-7" /> MySql
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <DiPostgresql className="size-7" /> Postgresql
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Unit Test</h4>
              <p className="flex items-center gap-2">
                <span className="flex gap-3 items-center">
                  <SiJest />
                  Jest
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
