import type { ImageMetadata } from 'astro';

export interface ProfilePhoto {
  src: ImageMetadata;
  alt: { fa: string; en: string };
  caption?: { fa: string; en: string };
  position?: string;
}

interface ProfileMedia {
  primaryPortrait: ProfilePhoto | null;
  secondaryPhoto: ProfilePhoto | null;
}

// Import verified photographs from src/assets/images/profile and register them here.
// Null values render a branded, non-photographic fallback rather than a fake portrait.
export const profileMedia: ProfileMedia = {
  primaryPortrait: null,
  secondaryPhoto: null,
};
