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

// Add only verified photographs from src/assets/images/profile and register them here.
// Null values render the built-in non-photographic fallback.
export const profileMedia: ProfileMedia = {
  primaryPortrait: null,
  secondaryPhoto: null,
};
