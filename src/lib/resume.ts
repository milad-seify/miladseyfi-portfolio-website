import type { ResumeMonth } from '@/data/resume';
import type { Locale } from '@/i18n/config';

const monthPattern = /^\d{4}-(0[1-9]|1[0-2])$/;

export const isResumeMonth = (value: string): value is ResumeMonth => monthPattern.test(value);

export const formatResumeMonth = (value: ResumeMonth, locale: Locale = 'en') => {
  if (!isResumeMonth(value)) return value;
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(locale === 'fa' ? 'fa-IR-u-ca-gregory' : 'en', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year!, month! - 1, 1)));
};

export const formatResumeDateRange = (
  startDate: ResumeMonth,
  endDate?: ResumeMonth,
  locale: Locale = 'en',
) =>
  `${formatResumeMonth(startDate, locale)} — ${endDate ? formatResumeMonth(endDate, locale) : locale === 'fa' ? 'اکنون' : 'Present'}`;
