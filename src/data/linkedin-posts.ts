import linkedInData from '@/content-data/linkedin.json';
import type { Locale } from '@/i18n/config';

export type LinkedInEmbedUrl =
  `https://www.linkedin.com/embed/feed/update/urn:li:${'ugcPost' | 'share'}:${string}`;

export interface LinkedInPost {
  id: string;
  embedUrl: LinkedInEmbedUrl;
  embedHeight: number;
  title?: string;
  publishedAt?: `${number}-${number}-${number}`;
  summary?: string;
  canonicalUrl?: `https://www.linkedin.com/${string}`;
  locale?: Locale;
  category?: string;
}

// Verified official embeds, ordered newest first.
const linkedInPosts = linkedInData.posts as readonly LinkedInPost[];

export const getLinkedInPosts = (): readonly LinkedInPost[] => linkedInPosts;
