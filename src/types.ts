export type LinkItem = {
  label: string;
  href?: string;
  value?: string;
};

export type SkillCategory = {
  id: string;
  code: string;
  title: string;
  description: string;
  items: Array<{
    name: string;
    description: string;
  }>;
};

export type ProjectCaseStudy = {
  problem: string;
  solution: string;
  role: string;
  technology: string;
  designProcess: string;
  keyFeatures: string;
  challenges: string;
  outcome: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: ProjectCaseStudy;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export type Achievement = {
  title: string;
  description: string;
};

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
  certificateUrl?: string;
};

export type EducationItem = {
  period: string;
  institution: string;
  program: string;
  metric?: string;
};