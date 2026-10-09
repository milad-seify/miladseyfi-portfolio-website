import type { CollectionEntry } from 'astro:content';
import type { Locale } from './config';
import { projectsFa } from './projects-fa';

interface PersianSection {
  heading: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}

interface PersianProject {
  title: string;
  summary: string;
  challenge: string;
  highlight: string;
  role: string;
  context: string;
  sections: readonly PersianSection[];
}

export const getProjectPresentation = (locale: Locale, project: CollectionEntry<'projects'>) =>
  locale === 'fa' ? projectsFa[project.id as keyof typeof projectsFa] : project.data;

export const getPersianProject = (id: string): PersianProject | undefined =>
  projectsFa[id as keyof typeof projectsFa];
