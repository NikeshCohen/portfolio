import React from "react";

function page() {
  return (
    <section className="layout">
      <section
        id="home"
        className="flex min-h-screen items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </section>
      <section
        id="about"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        {/* Add your about content here */}
      </section>
      <section
        id="skills"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-3xl font-bold">My Skills</h2>
        {/* Add your skills content here */}
      </section>
      <section
        id="projects"
        className="flex min-h-screen items-center justify-center"
      >
        <h2 className="text-3xl font-bold">My Projects</h2>
        {/* Add your projects content here */}
      </section>
    </section>
  );
}

export default page;
