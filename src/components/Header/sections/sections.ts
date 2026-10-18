
export const sections = {
  about: "about",
  experience: "experience",
  skills: "skills",
  projects: "projects",
} as const;

export type SectionId = (typeof sections)[keyof typeof sections];

export const navigation = [
  { id: sections.about, label: "About" },
  { id: sections.experience, label: "Experience" },
  { id: sections.skills, label: "Skills" },
  { id: sections.projects, label: "Projects" },
] as const;

export const MAIN_CONTENT_ID = "main-content";
