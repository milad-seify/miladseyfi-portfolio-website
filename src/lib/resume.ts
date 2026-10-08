import type { ResumeMonth } from '@/data/resume';

const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;

export const isResumeMonth = (value: string): value is ResumeMonth => monthPattern.test(value);

export const formatResumeMonth = (value: ResumeMonth) => {
  if (!isResumeMonth(value)) return value;
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year!, month! - 1, 1)));
};

export const formatResumeDateRange = (startDate: ResumeMonth, endDate?: ResumeMonth) =>
  `${formatResumeMonth(startDate)} — ${endDate ? formatResumeMonth(endDate) : 'Present'}`;
