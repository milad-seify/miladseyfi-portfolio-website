import profileContent from '@/content-data/profile.json';
import type { Locale } from '@/i18n/config';

export interface ProfileContent {
  hero: { status: string; title: string; summary: string; summaryShort: string };
  about: {
    heading: string;
    paragraphs: string[];
    principles: { value: string; label: string }[];
  };
  services: {
    heading: string;
    description: string;
    items: { title: string; description: string; deliverables: string[] }[];
  };
  contact: { heading: string; summary: string; topics: string[] };
}

export const getProfileContent = (locale: Locale): ProfileContent => profileContent[locale];
