import { en } from './en';
import { fa } from './fa';
import { withBasePath } from '@/lib/urls';

export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fa';

const dictionaries = { fa, en } as const;

export const getDictionary = (locale: Locale) => dictionaries[locale];
export const getDirection = (locale: Locale) => (locale === 'fa' ? 'rtl' : 'ltr');
export const getLocalePath = (locale: Locale, path = '') =>
  withBasePath(`${locale === defaultLocale ? '' : `${locale}/`}${path.replace(/^\/+/, '')}`);

export const getLocaleFromPath = (pathname: string): Locale =>
  /(^|\/)en(\/|$)/.test(pathname) ? 'en' : defaultLocale;

export const formatDate = (date: Date, locale: Locale) =>
  new Intl.DateTimeFormat(locale === 'fa' ? 'fa-IR' : 'en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
