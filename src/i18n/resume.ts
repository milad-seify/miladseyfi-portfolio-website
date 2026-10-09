import { resume } from '@/data/resume';
import type { Locale } from './config';
import { resumeFa } from './resume-fa';

export const getLocalizedResume = (locale: Locale) => {
  if (locale === 'en') return resume;

  return {
    ...resume,
    identity: { ...resume.identity, ...resumeFa.identity },
    careerHighlights: resume.careerHighlights.map((item) => ({
      ...item,
      ...resumeFa.careerHighlights[item.id as keyof typeof resumeFa.careerHighlights],
    })),
    experience: resume.experience.map((item) => {
      const translation = resumeFa.experience[item.id as keyof typeof resumeFa.experience];
      return { ...item, ...translation };
    }),
    education: resume.education.map((item) => ({
      ...item,
      ...resumeFa.education[item.id as keyof typeof resumeFa.education],
    })),
    skillGroups: resume.skillGroups.map((item) => ({
      ...item,
      ...resumeFa.skillGroups[item.id as keyof typeof resumeFa.skillGroups],
    })),
    selectedProjects: resume.selectedProjects.map((item) => ({
      ...item,
      ...resumeFa.selectedProjects[item.id as keyof typeof resumeFa.selectedProjects],
    })),
  };
};
