import { ReactElement } from "react";

export type SkillIconName =
  | "AWS"
  | "Bun"
  | "Cloudflare"
  | "Deno"
  | "Electron"
  | "ExpressJS"
  | "Git"
  | "GoLang"
  | "JavaScript"
  | "Linux"
  | "MongoDB"
  | "MySQL"
  | "Netlify"
  | "Next.js"
  | "NodeJS"
  | "PostgreSQL"
  | "Prisma"
  | "Python"
  | "React"
  | "Redux"
  | "Remix"
  | "TailwindCSS"
  | "TypeScript"
  | "Vercel";

export type IconVariants = {
  light?: ReactElement;
  dark?: ReactElement;
  single?: ReactElement;
};

export type SkillIcon = {
  name: SkillIconName;
  lightIcon?: ReactElement;
  darkIcon?: ReactElement;
  singleIcon?: ReactElement;
};

export type SkillIcons = {
  [Key in SkillIconName]: IconVariants;
};

export type Project = {
  name: string;
  imageUrl: string;
  description: string;
  url: string;
  github?: string;
};

export type ContactEmailProps = {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  date: Date;
};
