import { existsSync } from 'node:fs';
import { readFile, readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const dist = join(process.cwd(), 'dist');
const configuredBase = process.env.BASE_PATH?.trim() || undefined;
const baseSegment = (configuredBase ?? '').replace(/^\/+|\/+$/g, '');
const basePath = baseSegment ? `/${baseSegment}/` : '/';
const requireResumePdfs = process.env.REQUIRE_RESUME_PDFS === '1';

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
const vendoredSveltiaAsset = join(dist, 'admin', 'vendor', 'sveltia-cms-0.234.0.js');
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
  'og-image.svg',
  'robots.txt',
  'site.webmanifest',
  join('admin', 'index.html'),
  join('admin', 'config.yml'),
  join('admin', 'vendor', 'sveltia-cms-0.234.0.js'),
  join('admin', 'vendor', 'SHA256SUMS'),
  join('admin', 'vendor', 'LICENSE-Sveltia-CMS-0.234.0.txt'),
  'sitemap-index.xml',
];
const pdfPaths = [
  join(dist, 'resume', 'resume.pdf'),
  join(dist, 'resume', 'resume-fa.pdf'),
  join(dist, 'resume', 'resume-en.pdf'),
];
if (requireResumePdfs) requiredFiles.push(...pdfPaths.map((file) => file.replace(`${dist}/`, '')));

for (const file of requiredFiles) {
  if (!existsSync(join(dist, file))) failures.push(`Missing required output: ${file}`);
}

JSON.parse(await readFile(join(dist, 'site.webmanifest'), 'utf8'));
const socialImage = await readFile(join(dist, 'og-image.svg'), 'utf8');
const notFound = await readFile(join(dist, '404.html'), 'utf8');
const admin = await readFile(join(dist, 'admin', 'index.html'), 'utf8');
const robots = await readFile(join(dist, 'robots.txt'), 'utf8');

if (requireResumePdfs) {
  for (const pdfPath of pdfPaths) {
    const pdf = await readFile(pdfPath);
    if (pdf.subarray(0, 5).toString() !== '%PDF-' || pdf.length < 10_000)
      failures.push(`Generated resume PDF is invalid or unexpectedly small: ${pdfPath}`);
  }
}
if (!socialImage.includes('<svg'))
  failures.push('The social preview must be a valid SVG until replaced by the final brand asset.');
if (!notFound.includes('name="robots" content="noindex, nofollow"'))
  failures.push('The 404 page must be excluded from indexing.');
if (!admin.includes('name="robots" content="noindex, nofollow"'))
  failures.push('The CMS interface must be excluded from indexing.');
if (!robots.includes('Disallow: /admin/'))
  failures.push('robots.txt must exclude the CMS interface.');
if (files.some((file) => extname(file) === '.js' && file !== vendoredSveltiaAsset))
  failures.push('Unexpected emitted JavaScript bundle.');

if (failures.length > 0) throw new Error(`Build validation failed:\n${failures.join('\n')}`);
console.log(
  `Build validation passed (${htmlFiles.length} public HTML files, base ${basePath}, no emitted application JavaScript bundles).`,
);
