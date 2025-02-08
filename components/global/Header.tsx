"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/#home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/contact" && pathname !== "/blog") {
        const sections = document.querySelectorAll<HTMLElement>("section[id]");
        let currentActiveSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (
            window.scrollY >= sectionTop - 100 &&
            window.scrollY < sectionTop + sectionHeight - 100
          ) {
            currentActiveSection = `/#${section.id}`;
          }
        });

        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check active section on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const headerPadding = useTransform(scrollY, [0, 300], [16, 8]);
  const headerMaxWidth = useTransform(
    scrollY,
    [0, 300],
    isMobile ? ["99%", "90%"] : ["85%", "70%"],
  );
  const innerPadding = useTransform(scrollY, [0, 300], [16, 8]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    if (
      (pathname === "/contact" || pathname === "/blog") &&
      href.startsWith("/#")
    ) {
      // If on contact or blog page and clicking an internal link, navigate to home page first
      router.push("/");
      setTimeout(() => {
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (href.startsWith("/#")) {
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      ref={headerRef}
      className="top-5 right-0 left-0 z-50 fixed mx-auto w-full"
      initial={{ maxWidth: "85%", padding: "16px" }}
      style={{ maxWidth: headerMaxWidth, padding: headerPadding }}
    >
      <motion.div
        className="flex justify-between items-center shadow-sm backdrop-blur-md border border-border/40 rounded-lg"
        initial={{ padding: "16px" }}
        style={{ padding: innerPadding }}
      >
        <Link
          href="/"
          className="font-extrabold text-lg hover:text-primary transition-colors"
          onClick={(e) => handleLinkClick(e, "/")}
        >
          NikeshCohen
        </Link>

        <nav className="md:block hidden">
          <ul className="flex space-x-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-3 py-2 hover:text-primary transition-colors"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                  {((activeSection === link.href &&
                    pathname !== "/contact" &&
                    pathname !== "/blog") ||
                    (pathname === "/contact" && link.href === "/contact") ||
                    (pathname === "/blog" && link.href === "/blog")) && (
                    <motion.div
                      className="z-[-1] absolute inset-0 bg-primary/30 rounded-md"
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
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.div>

      {isMenuOpen && (
        <motion.nav
          className="md:hidden shadow-sm backdrop-blur-md mt-2 border border-border/40 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <ul className="py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block hover:bg-primary/10 px-4 py-2 transition-colors"
                  onClick={(e) => handleLinkClick(e, link.href)}
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
