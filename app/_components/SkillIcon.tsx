"use client";

import type { SkillIcon as SkillIconType } from "@/types";
import { useTheme } from "next-themes";

function SkillIcon({ skill }: { skill: SkillIconType }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const icon = skill.singleIcon || (isDark ? skill.darkIcon : skill.lightIcon);

  if (!icon) return null;

  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="mt-2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {skill.name}
      </span>
    </div>
  );
}

export default SkillIcon;
