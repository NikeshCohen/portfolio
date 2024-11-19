import React from "react";

import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <header className="fixed inset-0 top-10 z-50 ml-auto mr-auto w-full max-w-7xl">
      <div className="flex justify-between rounded-lg border border-border/40 p-4 shadow-sm backdrop-blur-md">
        <span>Nikesh Cohen</span>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
