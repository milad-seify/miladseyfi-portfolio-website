import type { CollectionEntry } from 'astro:content';

export const byOrder = (a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) =>
  a.data.order - b.data.order;

export const byNewest = (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
  b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();

export const isPublished = <T extends { data: { draft: boolean } }>(entry: T) =>
  import.meta.env.DEV || !entry.data.draft;

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
