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

  // ===== BUỔI 2 =====
  console.log('→ Buổi 2 — slide 1 (cover)');
  await page.goto(`${HOST}/buoi-02`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '11-buoi02-s01-cover');

  console.log('→ slide 2 (hook stats)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '12-buoi02-s02-hook');

  console.log('→ slide 5 (skill matrix)');
  for (let i = 0; i < 3; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '13-buoi02-s05-matrix');

  console.log('→ slide 7 (hard skills)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '14-buoi02-s07-hard');

  console.log('→ slide 8 (tools)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '15-buoi02-s08-tools');

  console.log('→ slide 10 (soft skills)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '16-buoi02-s10-soft');

  console.log('→ slide 12 (knowledge areas)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '17-buoi02-s12-babok');

  console.log('→ slide 13 (AI prompts)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '18-buoi02-s13-ai-prompts');

  console.log('→ slide 14 (roadmap)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '19-buoi02-s14-roadmap');

  // ===== BUỔI 3 =====
  console.log('→ Buổi 3 — slide 1 (cover)');
  await page.goto(`${HOST}/buoi-03`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '20-buoi03-s01-cover');

  console.log('→ slide 5 (6 bước BA)');
  for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '21-buoi03-s05-process');

  console.log('→ slide 6 (vòng đời yêu cầu)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '22-buoi03-s06-lifecycle');

  console.log('→ slide 8 (waterfall vs agile)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '23-buoi03-s08-waterfall-agile');

  console.log('→ slide 9 (sprint cycle)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '24-buoi03-s09-sprint');

  console.log('→ slide 11 (planning)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '25-buoi03-s11-planning');

  console.log('→ slide 12 (stakeholder map)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '26-buoi03-s12-stakeholder');

  console.log('→ slide 14 (AI prompts)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '27-buoi03-s14-ai-prompts');

  console.log('→ slide 15 (demo timeline)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '28-buoi03-s15-timeline');

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
