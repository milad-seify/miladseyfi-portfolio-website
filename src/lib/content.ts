import type { CollectionEntry } from 'astro:content';

export const byOrder = (a: CollectionEntry<'projects'>, b: CollectionEntry<'projects'>) =>
  a.data.order - b.data.order;

export const isPublished = <T extends { data: { draft: boolean } }>(entry: T) =>
  import.meta.env.DEV || !entry.data.draft;
