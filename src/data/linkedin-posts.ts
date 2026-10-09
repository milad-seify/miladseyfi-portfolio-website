import type { Locale } from '@/i18n/config';

export interface LinkedInPost {
  locale: Locale;
  title: string;
  publishedAt: `${number}-${number}-${number}`;
  summary: string;
  url: `https://www.linkedin.com/${string}`;
  category?: string;
}

// Add only published posts with their canonical LinkedIn URL.
const linkedInPosts: readonly LinkedInPost[] = [];

export const getLinkedInPosts = (locale: Locale) =>
  linkedInPosts
    .filter((post) => post.locale === locale)
    .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));
