"use client";

import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
        className="flex items-center justify-between rounded-lg border border-border/40 shadow-sm backdrop-blur-md"
        initial={{ padding: "16px" }}
        style={{ padding: innerPadding }}
      >
        <Link
          href="/"
          className="text-lg font-extrabold transition-colors hover:text-primary"
        >
          NikeshCohen
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-3 py-2 transition-colors hover:text-primary"
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute inset-0 z-[-1] rounded-md bg-primary/30"
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-foreground transition-colors hover:text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      {isMenuOpen && (
        <motion.nav
          className="mt-2 rounded-lg border border-border/40 shadow-sm backdrop-blur-md md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 transition-colors hover:bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
}
