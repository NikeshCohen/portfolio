"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // prevent ssr mismatch by checking if component is mounted on client side
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // render only once mounted to prevent hydration issues
  if (!mounted) {
    return null;
  }
  
  return (
    <div className="z-50">
      <Button
        variant="outline"
        size="icon"
        className="border-border/40 bg-transparent"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}