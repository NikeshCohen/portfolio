import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-[75vh]"
    >
      <h1 className="font-bold text-4xl text-center lg:text-5xl">
        Hey There! I&apos;m Nikesh Cohen, <br /> a Full Stack Developer
      </h1>

      <div className="w-3/4">
        <p className="my-3">
          Building the next wave of web apps that aren’t just nice to look at
          but built to drive real innovation in whatever field they touch.
        </p>

        <p className="mb-3">
          I’ve worked on everything from automated testing platforms to
          multi-tenant applications and AI powered learning platforms. My
          favorite projects are the ones that start as big, messy ideas and turn
          into something that actually makes a difference for people.
        </p>

        <p>
          If you’re into building cool stuff, breaking the mold or looking to
          partner with someone on your next app idea, let’s connect!
        </p>
      </div>
    </section>
  );
}

export default Hero;
