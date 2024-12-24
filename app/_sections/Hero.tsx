"use client";

import React, { useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import HeroImg from "../_components/HeroImg";

function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[70vh] grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center"
    >
      <div className="lg:col-span-2">
        <h1 className="inline-block text-4xl font-bold lg:text-5xl">
          Hey There! I&apos;m Nikesh Cohen, <br /> a Full Stack Developer
        </h1>

        <div className="mt-6">
          <p className="mb-3">
            Building the next wave of web apps that aren&apos;t just nice to
            look at but built to drive real innovation in whatever field they
            touch.
          </p>

          <p className="mb-3">
            I&apos;ve worked on everything from automated testing platforms to
            multi-tenant applications and AI powered learning platforms. My
            favorite projects are the ones that start as big, messy ideas and
            turn into something that actually makes a difference for people.
          </p>

          <p>
            If you&apos;re into building cool stuff, breaking the mold or
            looking to partner with someone on your next app idea, let&apos;s
            connect!
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <Link href="https://www.linkedin.com/in/nikesh-cohen">
            <Button className="w-full md:w-auto">View LinkedIn</Button>
          </Link>
          <Link href="https://github.com/NikeshCohen">
            <Button
              className="w-full border-primary bg-transparent text-primary md:w-auto"
              variant="outline"
            >
              View Github
            </Button>
          </Link>
        </div>
      </div>
      <HeroImg />
    </section>
  );
}

export default Hero;
