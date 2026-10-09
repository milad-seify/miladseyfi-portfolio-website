import type { ImageMetadata } from 'astro';
import miladPortrait from '@/assets/images/profile/milad-seyfi-portrait.png';

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
  primaryPortrait: {
    src: miladPortrait,
    alt: {
      fa: 'پرتره حرفه‌ای میلاد سیفی، معمار کلاد و مشاور DevOps',
      en: 'Professional portrait of Milad Seyfi, Cloud Architect and DevOps Consultant',
    },
    position: '50% 38%',
  },
  secondaryPhoto: null,
};
