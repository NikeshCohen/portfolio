"use client";

import React from "react";

import Image from "next/image";

import { SKILLS } from "@/constants/skills";
import type { SkillIcon } from "@/types";
import { useTheme } from "next-themes";

function SkillIcon({ icon }: { icon: SkillIcon }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iconSrc =
    icon.singleIcon || (isDark && icon.darkIcon) || icon.lightIcon;

  if (!iconSrc) return null;

  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={iconSrc}
          alt={`${icon.name} icon`}
          layout="fill"
          objectFit="contain"
          className="transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>
      <span className="mt-2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {icon.name}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="layout">
      <div>
        <h1 className="inline-block text-4xl font-bold lg:text-5xl">Skills</h1>

        <div className="mt-6">
          <p className="mb-3 max-w-4xl">
            From crafting clean, maintainable code to debugging the quirkiest of
            bugs, I thrive on solving complex challenges with elegant solutions.
            My toolkit is packed with modern frameworks, libraries, and best
            practices to bring ideas to life, whether it&apos;s building
            responsive user interfaces or architecting scalable back-end
            systems.
          </p>

          <p className="mb-8 max-w-4xl">
            Below is a curated list of the tools and technologies that I use
            daily to craft robust, efficient, and visually appealing
            applications:
          </p>

          <div className="grid grid-cols-4 gap-8 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
            {SKILLS.map((skill) => (
              <SkillIcon key={skill.name} icon={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
