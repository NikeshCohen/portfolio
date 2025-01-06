import React from "react";

import { SKILLS } from "@/constants/skills";

import SkillIcon from "../_components/SkillIcon";

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
              <SkillIcon key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
