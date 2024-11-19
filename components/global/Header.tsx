"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const headerPadding = useTransform(scrollY, [0, 300], [16, 8]);
  const headerMaxWidth = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["99%", "90%"] : ["85%", "70%"],
  );
  const innerPadding = useTransform(scrollY, [0, 300], [16, 8]);

  return (
    <motion.header
      ref={headerRef}
      className="fixed inset-0 top-5 z-50 mx-auto w-full"
      initial={{ maxWidth: "85%", padding: "16px" }}
      style={{ maxWidth: headerMaxWidth, padding: headerPadding }}
    >
      <motion.div
        className="flex items-center justify-between rounded-lg border shadow-sm backdrop-blur-md"
        initial={{ padding: "16px" }}
        style={{ padding: innerPadding }}
      >
        <p className="text-lg font-extrabold">NikeshCohen</p>
        <div>
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.header>
  );
}
