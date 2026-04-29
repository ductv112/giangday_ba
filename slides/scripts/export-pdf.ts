/**
 * PDF export script — landscape 16:9, 1 file/buổi
 *
 * Usage:
 *   pnpm export:pdf buoi-01            # 1 buổi
 *   pnpm export:all                    # tất cả buổi đã có
 *
 * Yêu cầu: dev server phải đang chạy ở cổng 5173 (pnpm dev).
 */
import puppeteer from 'puppeteer';
import { mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const HOST = process.env.SLIDE_HOST ?? 'http://localhost:5173';
const OUT_DIR = path.resolve(process.cwd(), 'pdf');
const ASPECT = { width: 1920, height: 1080 };

async function exportDeck(slug: string) {
  console.log(`\n[${slug}] Mở browser...`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: ASPECT.width, height: ASPECT.height, deviceScaleFactor: 1 });

  // Load home to get slide count from deck registry
  await page.goto(`${HOST}/${slug}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 800));

  const total = await page.evaluate(() => {
    const m = document.body.innerText.match(/\d+\s*\/\s*(\d+)/);
    return m ? Number(m[1]) : 0;
  });

  if (!total) {
    console.error(`[${slug}] Không đọc được số slide từ trang.`);
    await browser.close();
    return;
  }

  console.log(`[${slug}] Tổng ${total} slide. Bắt đầu chụp...`);

  // Build a single HTML page that includes all slides for proper PDF pagination
  const slidesHtml: string[] = [];
  for (let i = 1; i <= total; i++) {
    await page.goto(`${HOST}/${slug}`, { waitUntil: 'networkidle0' });
    // Navigate to slide i (i-1 right-arrows from slide 0)
    for (let k = 1; k < i; k++) {
      await page.keyboard.press('ArrowRight');
      await new Promise((r) => setTimeout(r, 80));
    }
    await new Promise((r) => setTimeout(r, 350));

    // Hide controls
    await page.addStyleTag({
      content: `
        .print\\:hidden, .fixed.bottom-5, .fixed.bottom-0.h-1, .fixed.top-4.left-4 { display: none !important; }
        .slide-stage { transform: none !important; }
        .slide-viewport { width: 1920px !important; height: 1080px !important; background: white !important; overflow: visible !important; }
        body { background: white !important; }
      `,
    });

    const html = await page.evaluate(() => {
      const stage = document.querySelector('.slide-stage');
      return stage ? (stage as HTMLElement).outerHTML : '';
    });
    slidesHtml.push(html);
    console.log(`  · slide ${i}/${total}`);
  }

  // Get all CSS from the page
  const styles = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map((el) => el.outerHTML)
      .join('\n');
  });

  // Build combined doc
  const combined = `<!doctype html>
<html lang="vi">
<head>
<meta charset="UTF-8" />
${styles}
<style>
  @page { size: 1920px 1080px; margin: 0; }
  html, body { margin: 0; padding: 0; background: white; }
  .pdf-slide { width: 1920px; height: 1080px; page-break-after: always; overflow: hidden; position: relative; }
  .pdf-slide:last-child { page-break-after: auto; }
</style>
</head>
<body>
${slidesHtml.map((h) => `<div class="pdf-slide">${h}</div>`).join('\n')}
</body>
</html>`;

  await page.setContent(combined, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 500));

  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
  const outFile = path.join(OUT_DIR, `${slug}.pdf`);
  await page.pdf({
    path: outFile,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    pageRanges: '',
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log(`[${slug}] ✓ Xuất: ${outFile}`);
}

async function main() {
  const args = process.argv.slice(2);
  let slugs: string[] = [];
  if (args.includes('--all')) {
    const dir = path.resolve(process.cwd(), 'src/decks');
    const entries = await readdir(dir, { withFileTypes: true });
    slugs = entries
      .filter((e) => e.isDirectory() && e.name.startsWith('buoi-'))
      .map((e) => e.name);
  } else if (args.length) {
    slugs = args.filter((a) => !a.startsWith('--'));
  } else {
    console.error('Cú pháp: pnpm export:pdf buoi-01 [buoi-02 ...]   |   pnpm export:all');
    process.exit(1);
  }

  for (const s of slugs) {
    try {
      await exportDeck(s);
    } catch (e) {
      console.error(`[${s}] LỖI:`, e);
    }
  }
}

main();
