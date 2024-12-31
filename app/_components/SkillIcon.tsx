"use client";

import Image from "next/image";

import type { SkillIcon } from "@/types";
import { useTheme } from "next-themes";

function SkillIcon({ icon }: { icon: SkillIcon }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iconSrc =
    icon.singleIcon || (isDark && icon.darkIcon) || icon.lightIcon;

  if (!iconSrc) return null;

  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={iconSrc}
          alt={`${icon.name} icon`}
          layout="fill"
          objectFit="contain"
          className="transition-opacity duration-300 group-hover:opacity-80"
        />
      </div>
      <span className="mt-2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {icon.name}
      </span>
    </div>
  );
}

export default SkillIcon;
