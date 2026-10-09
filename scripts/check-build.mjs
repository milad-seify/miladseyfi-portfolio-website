import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const [owner, repositoryName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const configuredSite = process.env.SITE_URL?.trim() || undefined;
const configuredBase = process.env.BASE_PATH?.trim() || undefined;
const inferredBase =
  repositoryName && repositoryName !== `${owner}.github.io` ? repositoryName : '';
const baseSegment = (configuredBase ?? (configuredSite ? '' : inferredBase)).replace(
  /^\/+|\/+$/g,
  '',
);
const basePath = baseSegment ? `/${baseSegment}/` : '/';

const walk = async (directory) => {
  const entries = await readdir(directory);
  return (
    await Promise.all(
      entries.map(async (entry) => {
        const path = join(directory, entry);
        return (await stat(path)).isDirectory() ? walk(path) : [path];
      }),
    )
  ).flat();
};

const files = await walk(dist);
const htmlFiles = files.filter((file) => extname(file) === '.html');
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue;

    const pathname = url.split(/[?#]/)[0];
    if (!pathname) continue;
    if (basePath !== '/' && !pathname.startsWith(basePath)) {
      failures.push(`${file}: path escapes configured base (${url})`);
      continue;
    }

    const relative = (basePath === '/' ? pathname : pathname.slice(basePath.length)).replace(
      /^\/+/,
      '',
    );
    const target = pathname.endsWith('/')
      ? join(dist, relative, 'index.html')
      : join(dist, relative);
    if (!existsSync(target)) failures.push(`${file}: missing target (${url})`);
  }
}

const requiredFiles = [
  '404.html',
  'favicon.svg',
  'og-image.png',
  'robots.txt',
  'site.webmanifest',
  'sitemap-index.xml',
  join('resume', 'milad-seyfi-resume.pdf'),
  join('resume', 'milad-seyfi-resume-fa.pdf'),
  join('resume', 'milad-seyfi-resume-en.pdf'),
];
for (const file of requiredFiles) {
  if (!existsSync(join(dist, file))) failures.push(`Missing required output: ${file}`);
}

JSON.parse(await readFile(join(dist, 'site.webmanifest'), 'utf8'));
const pdfPaths = [
  join(dist, 'resume', 'milad-seyfi-resume.pdf'),
  join(dist, 'resume', 'milad-seyfi-resume-fa.pdf'),
  join(dist, 'resume', 'milad-seyfi-resume-en.pdf'),
];
const socialImage = await readFile(join(dist, 'og-image.png'));
const notFound = await readFile(join(dist, '404.html'), 'utf8');
for (const pdfPath of pdfPaths) {
  const pdf = await readFile(pdfPath);
  if (pdf.subarray(0, 5).toString() !== '%PDF-' || pdf.length < 10_000) {
    failures.push(`The committed resume PDF is invalid or unexpectedly small: ${pdfPath}`);
  }
}
if (socialImage.subarray(1, 4).toString() !== 'PNG') {
  failures.push('The social preview is not a valid PNG.');
}
if (!notFound.includes('name="robots" content="noindex, nofollow"')) {
  failures.push('The 404 page must be excluded from indexing.');
}
if (files.some((file) => extname(file) === '.js')) {
  failures.push('Unexpected client-side JavaScript was emitted.');
}

if (failures.length > 0) throw new Error(`Build validation failed:\n${failures.join('\n')}`);
console.log(`Build validation passed (${htmlFiles.length} HTML files, base ${basePath}, zero JS).`);
