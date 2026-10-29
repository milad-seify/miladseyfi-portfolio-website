import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const issues = [];
const read = (path) => readFile(join(root, path), 'utf8');

const siteValue = process.env.SITE_URL?.trim();
let site;
if (!siteValue) {
  issues.push('SITE_URL must be configured for production.');
} else {
  try {
    site = new URL(siteValue);
    if (site.protocol !== 'https:') issues.push('SITE_URL must use HTTPS.');
    if (site.pathname !== '/' || site.search || site.hash)
      issues.push('SITE_URL must be an origin only; configure any hosting subpath with BASE_PATH.');
    if (site.hostname === 'example.com' || site.hostname.endsWith('.example'))
      issues.push('SITE_URL must not use an example domain.');
  } catch {
    issues.push('SITE_URL must be a valid absolute URL.');
  }
}

const repository = process.env.GITHUB_REPOSITORY?.trim();
if (!repository || !/^[^/]+\/[^/]+$/.test(repository)) {
  issues.push('GITHUB_REPOSITORY is required for the production preflight.');
}

const configuredBase = process.env.BASE_PATH?.trim() ?? '';
const baseSegment = configuredBase.replace(/^\/+|\/+$/g, '');
const normalizedBase = baseSegment ? `/${baseSegment}` : '';
if (configuredBase && configuredBase !== normalizedBase)
  issues.push(`BASE_PATH should use normalized form ${normalizedBase || '/'} (no trailing slash).`);

if (site && repository && site.hostname.endsWith('.github.io')) {
  const [owner, repoName] = repository.split('/');
  const isUserSite = repoName === `${owner}.github.io`;
  const expectedBase = isUserSite ? '' : `/${repoName}`;
  if (normalizedBase !== expectedBase)
    issues.push(
      `BASE_PATH must be ${expectedBase || '(empty)'} for this GitHub Pages repository URL.`,
    );
}

const resume = JSON.parse(await read('src/content-data/resume.json'));
if (!Object.values(resume.contact ?? {}).some((value) => typeof value === 'string' && value.trim()))
  issues.push('Configure at least one real contact or social channel before production deployment.');

const cmsConfig = await read('public/admin/config.yml');
const cmsRepo = cmsConfig.match(/^\s*repo:\s*(\S+)\s*$/m)?.[1];
if (!cmsRepo || cmsRepo === 'OWNER/REPOSITORY') {
  issues.push('Replace OWNER/REPOSITORY in public/admin/config.yml before deployment.');
} else if (repository && cmsRepo !== repository) {
  issues.push(`CMS backend repo (${cmsRepo}) must match GITHUB_REPOSITORY (${repository}).`);
}

const projectDirectory = join(root, 'src', 'content', 'projects');
const projectFiles = (await readdir(projectDirectory))
  .filter((name) => /\.mdx?$/.test(name))
  .map((name) => `src/content/projects/${name}`);
const markerFiles = [
  'src/content-data/resume.json',
  'src/content-data/profile.json',
  'src/content-data/projects-fa.json',
  'src/i18n/resume-fa.ts',
  'public/og-image.svg',
  ...projectFiles,
];
const starterMarkers = [
  /\bYour Name\b/,
  /\bProfessional Title\b/,
  /Example Organization/,
  /Example University/,
  /Replace (?:this|with|these)/i,
  /Sample (?:role|case-study|case study|project)/i,
  /sample offerings/i,
  /PORTFOLIO STARTER/,
  /نام شما/,
  /عنوان حرفه‌ای/,
  /ساختار نمونه/,
  /نمونه‌ای برای/,
  /این موارد نمونه هستند/,
];

for (const path of markerFiles) {
  const content = await read(path);
  if (starterMarkers.some((pattern) => pattern.test(content)))
    issues.push(`${path} still contains starter/sample content.`);
}

if (issues.length > 0) {
  console.error('Production preflight failed:\n');
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exitCode = 1;
} else {
  console.log('Production preflight passed.');
}
