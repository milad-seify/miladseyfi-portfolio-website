import projectsFaData from '@/content-data/projects-fa.json';

export interface ProjectSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}

export interface ProjectTranslation {
  title: string;
  summary: string;
  challenge: string;
  highlight: string;
  role: string;
  context: string;
  sections: readonly ProjectSection[];
}

export const projectsFa: Readonly<Record<string, ProjectTranslation>> = Object.fromEntries(
  projectsFaData.projects.map(({ id, ...project }) => [id, project]),
);
