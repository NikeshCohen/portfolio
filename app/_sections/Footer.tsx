"use client";

import React from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/NikeshCohen" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nikesh-cohen",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/nikeshcohen",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container ml-auto mr-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            <a
              href="https://nikeshcohen.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Nikesh Cohen
            </a>
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-primary"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
