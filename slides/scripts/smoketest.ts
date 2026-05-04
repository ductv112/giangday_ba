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

  // ===== BUỔI 4 =====
  console.log('→ Buổi 4 — slide 1 (cover)');
  await page.goto(`${HOST}/buoi-04`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '29-buoi04-s01-cover');

  console.log('→ slide 5 (5 bước)');
  for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '30-buoi04-s05-five-steps');

  console.log('→ slide 7 (8 kỹ thuật)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '31-buoi04-s07-techniques');

  console.log('→ slide 8 (interview)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '32-buoi04-s08-interview');

  console.log('→ slide 9 (workshop)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '33-buoi04-s09-workshop');

  console.log('→ slide 10 (other techniques)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '34-buoi04-s10-other');

  console.log('→ slide 12 (question art)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '35-buoi04-s12-questions');

  console.log('→ slide 14 (AI prompts)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '36-buoi04-s14-ai');

  console.log('→ slide 15 (role-play demo)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '37-buoi04-s15-roleplay');

  // ===== BUỔI 5 =====
  console.log('→ Buổi 5 — slide 1 (cover)');
  await page.goto(`${HOST}/buoi-05`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '38-buoi05-s01-cover');

  console.log('→ slide 5 (3 cấp yêu cầu)');
  for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '39-buoi05-s05-three-layers');

  console.log('→ slide 6 (functional vs nf)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '40-buoi05-s06-functional');

  console.log('→ slide 8 (AS-IS vs TO-BE)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '41-buoi05-s08-asis-tobe');

  console.log('→ slide 9 (BPMN)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '42-buoi05-s09-bpmn');

  console.log('→ slide 11 (ERD)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '43-buoi05-s11-erd');

  console.log('→ slide 12 (Use Case)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '44-buoi05-s12-use-case');

  console.log('→ slide 13 (Story Map)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '45-buoi05-s13-story-map');

  console.log('→ slide 15 (AI prompts)');
  for (let i = 0; i < 2; i++) await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '46-buoi05-s15-ai');

  console.log('→ slide 16 (Demo Kho IT)');
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 1500));
  await shot(page, '47-buoi05-s16-demo');

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
