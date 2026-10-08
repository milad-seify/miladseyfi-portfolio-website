import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { copyFile, mkdir, mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, extname, join, resolve, sep } from 'node:path';

const root = process.cwd();
const distRoot = resolve(root, 'dist');
const publicPdf = resolve(root, 'public', 'resume', 'milad-seyfi-resume.pdf');
const distPdf = resolve(distRoot, 'resume', 'milad-seyfi-resume.pdf');
const [repositoryOwner, repositoryName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const inferredBase =
  repositoryName && repositoryName !== `${repositoryOwner}.github.io` ? `/${repositoryName}` : '';
const configuredBase = process.env.BASE_PATH?.trim() || undefined;
const configuredSite = process.env.SITE_URL?.trim() || undefined;
const base =
  `/${(configuredBase ?? (configuredSite ? '' : inferredBase)).replace(/^\/+|\/+$/g, '')}`.replace(
    /^\/$/,
    '',
  );

const candidates = [
  process.env.CHROME_PATH,
  process.platform === 'win32' &&
    join(process.env.PROGRAMFILES ?? '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
  process.platform === 'win32' &&
    join(process.env['PROGRAMFILES(X86)'] ?? '', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.platform === 'win32' &&
    join(process.env.PROGRAMFILES ?? '', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.platform === 'darwin' && '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  process.platform === 'darwin' && '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const browser = candidates.find((candidate) => existsSync(candidate));
if (!browser) {
  throw new Error('Chrome or Edge was not found. Install one or set CHROME_PATH.');
}
if (!existsSync(join(distRoot, 'resume', 'index.html'))) {
  throw new Error('dist/resume/index.html is missing. Run the build before PDF generation.');
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
};

const server = createServer(async (request, response) => {
  try {
    let pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://127.0.0.1').pathname);
    if (base && pathname.startsWith(`${base}/`)) pathname = pathname.slice(base.length);
    const relative = pathname.replace(/^\/+/, '');
    let filePath = resolve(distRoot, relative);
    if (pathname.endsWith('/')) filePath = join(filePath, 'index.html');
    if (!filePath.startsWith(`${distRoot}${sep}`) && filePath !== distRoot)
      throw new Error('Invalid path');
    const file = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(file);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

await new Promise((resolveListen, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolveListen);
});

const address = server.address();
if (!address || typeof address === 'string') throw new Error('Unable to start local PDF server.');

const browserProfile = await mkdtemp(join(tmpdir(), 'milad-resume-pdf-'));
await mkdir(dirname(publicPdf), { recursive: true });

try {
  const url = `http://127.0.0.1:${address.port}${base}/resume/`;
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--print-to-pdf-no-header',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=1000',
    `--user-data-dir=${browserProfile}`,
    `--print-to-pdf=${publicPdf}`,
    url,
  ];

  await new Promise((resolveBrowser, reject) => {
    const child = spawn(browser, args, { stdio: 'inherit' });
    child.once('error', reject);
    child.once('exit', (code) => {
      if (code === 0) resolveBrowser();
      else reject(new Error(`Headless browser exited with code ${code}.`));
    });
  });

  const pdf = await readFile(publicPdf);
  const pdfStats = await stat(publicPdf);
  if (pdf.subarray(0, 5).toString() !== '%PDF-' || pdfStats.size < 10_000) {
    throw new Error('Generated resume is not a valid readable PDF.');
  }

  await mkdir(dirname(distPdf), { recursive: true });
  await copyFile(publicPdf, distPdf);
  console.log(`Resume PDF generated: ${publicPdf} (${pdfStats.size} bytes)`);
} finally {
  await new Promise((resolveClose) => server.close(resolveClose));
  await rm(browserProfile, { recursive: true, force: true });
}
