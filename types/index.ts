export type SkillIcon = {
  name: string;
  lightIcon?: string;
  darkIcon?: string;
  singleIcon?: string;
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
