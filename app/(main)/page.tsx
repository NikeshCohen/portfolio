import React from "react";

import Hero from "./_sections/Hero";
import Projects from "./_sections/Projects";
import Skills from "./_sections/Skills";

function page() {
  return (
    <section className="layout">
      <Hero />
      <Skills />
      <Projects />
    </section>
  );
}

export default page;
