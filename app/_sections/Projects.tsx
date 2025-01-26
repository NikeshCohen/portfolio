import React from "react";

import Image from "next/image";
import Link from "next/link";

import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";

function Project({ project }: { project: Project }) {
  return (
    <div className="">
      <h1 className="inline-block font-bold text-2xl">{project.name}</h1>

      <div className="relative mx-auto mt-3 w-full max-w-2xl aspect-video">
        <Image
          src={project.imageUrl}
          alt={`${project.name}`}
          layout="fill"
          className="rounded-md transition-opacity duration-300"
        />
      </div>

      <p className="mt-3">{project.description}</p>

      <div className="flex md:flex-row flex-col gap-3 mt-6">
        <Link href={project.url} target="_blank">
          <Button
            effect="expandIcon"
            icon={ArrowRightIcon}
            iconPlacement="right"
            className="w-full md:w-auto"
          >
            Visit Site
          </Button>
        </Link>
        {project.github && (
          <Link href={project.github} target="_blank">
            <Button
              className="border-primary bg-transparent hover:bg-transparent w-full md:w-auto text-primary hover:text-primary"
              variant="outline"
              effect="ringHover"
            >
              View Source
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="min-h-dvh layout" id="projects">
      <h1 className="inline-block font-bold text-4xl lg:text-5xl">Projects</h1>
      <div className="mt-6">
        <p className="mb-8 max-w-4xl">
          Talk is cheap—I believe in putting my money where my code is. Here’s a
          collection of projects that showcase my skills, creativity, and
          dedication to building things that work beautifully. Dive in and see
          what I’ve been up to!
        </p>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-8 mr-auto ml-auto pt-4 border-t-4 max-w-4xl">
        <h2 className="font-semibold text-2xl text-center">Want More?</h2>
        <p className="mt-4 mr-auto mb-2 ml-auto max-w-2xl text-center">
          Five projects barely scratch the surface. My GitHub is like an
          all-you-can-code buffet. Check it out for the full lineup of what I’ve
          been building!
        </p>

        <div className="flex justify-center">
          <Link href="https://github.com/NikeshCohen" target="_blank">
            <Button variant="default" effect="shineHover">
              <span>Github</span>

              <Github className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
