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
const linkedInPosts = [
  {
    id: '7514782468080799745',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7514782468080799745',
    embedHeight: 965,
  },
  {
    id: '7513707310955880450',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7513707310955880450',
    embedHeight: 716,
  },
  {
    id: '7513603074125524992',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7513603074125524992',
    embedHeight: 1341,
  },
  {
    id: '7512891896688463872',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7512891896688463872',
    embedHeight: 1278,
  },
  {
    id: '7512200817483993088',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7512200817483993088',
    embedHeight: 1267,
  },
  {
    id: '7377435594995556352',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7377435594995556352',
    embedHeight: 1663,
  },
  {
    id: '7263992188215119873',
    embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7263992188215119873',
    embedHeight: 524,
  },
] as const satisfies readonly LinkedInPost[];

export const getLinkedInPosts = (): readonly LinkedInPost[] => linkedInPosts;
