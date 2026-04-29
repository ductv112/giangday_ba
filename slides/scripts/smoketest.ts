import puppeteer, { type Page } from 'puppeteer';
import { mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const HOST = 'http://localhost:5173';
const OUT = path.resolve(process.cwd(), 'screenshots');

async function shot(page: Page, name: string) {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true });
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: false } as any);
  console.log(`  ✓ ${name}.png`);
}

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();

  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`console.error: ${msg.text()}`);
  });

  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  console.log('→ Home');
  await page.goto(`${HOST}/`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '01-home');

  console.log('→ Buổi 1 — slide 1 (cover)');
  await page.goto(`${HOST}/buoi-01`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '02-buoi01-s01-cover');

  console.log('→ slide 2 (hook)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '03-buoi01-s02-hook');

  console.log('→ slide 3 (agenda)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '04-buoi01-s03-agenda');

  console.log('→ slide 5 (project lifecycle)');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '05-buoi01-s05-lifecycle');

  console.log('→ slide 7 (BA bridge)');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '06-buoi01-s07-bridge');

  console.log('→ slide 9 (case studies)');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '07-buoi01-s09-cases');

  console.log('→ slide 11 (career path)');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '08-buoi01-s11-career');

  console.log('→ slide 12 (outputs)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '09-buoi01-s12-outputs');

  console.log('→ slide 13 (AI stack)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '10-buoi01-s13-ai');

  await browser.close();

  console.log('\n=== ERRORS ===');
  if (errors.length) {
    errors.forEach((e) => console.log(' ', e));
    process.exit(1);
  } else {
    console.log('  (none)');
  }
}

main();
