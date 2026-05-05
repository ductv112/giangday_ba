/**
 * PDF export — landscape 16:9, 1 file/buổi.
 *
 * Strategy: render each slide as a 1-page PDF (1920×1080 viewport),
 * then merge with pdf-lib → 1 PDF per buổi với đúng số slide.
 *
 * Usage:
 *   pnpm export:pdf buoi-01            # 1 buổi
 *   pnpm export:all                    # tất cả buổi
 *
 * Yêu cầu: dev server chạy ở port 5173 (pnpm dev).
 */
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
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

  // Load deck once to read total slide count
  await page.goto(`${HOST}/${slug}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));

  // Navigate slide 2 to get pageNumber footer (cover slide không có footer)
  await page.keyboard.press('ArrowRight');
  await new Promise((r) => setTimeout(r, 600));
  // Find footer "N / TOTAL" where N <= TOTAL and TOTAL ∈ [5, 30] (reasonable slide count).
  // Tránh match content như "80/20", "30/60/90" trong nội dung slide.
  const total = await page.evaluate(() => {
    const matches = [...document.body.innerText.matchAll(/(\d+)\s*\/\s*(\d+)/g)];
    const valid = matches
      .map((m) => ({ n: Number(m[1]), t: Number(m[2]) }))
      .filter((x) => x.n <= x.t && x.t >= 5 && x.t <= 30);
    if (!valid.length) return 0;
    // Lấy giá trị TOTAL phổ biến nhất (footer xuất hiện ≥ 1 lần)
    const counts = new Map<number, number>();
    valid.forEach((x) => counts.set(x.t, (counts.get(x.t) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
  });

  if (!total) {
    console.error(`[${slug}] Không đọc được số slide.`);
    await browser.close();
    return;
  }
  console.log(`[${slug}] Tổng ${total} slide. Bắt đầu render từng trang...`);

  // Generate 1 PDF per slide
  const pdfBuffers: Uint8Array[] = [];
  for (let i = 1; i <= total; i++) {
    // Reload + nav to slide i
    await page.goto(`${HOST}/${slug}`, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));
    for (let k = 1; k < i; k++) {
      await page.keyboard.press('ArrowRight');
      await new Promise((r) => setTimeout(r, 80));
    }
    await new Promise((r) => setTimeout(r, 1500)); // wait for animation

    // Hide presenter chrome before printing
    await page.addStyleTag({
      content: `
        .print\\:hidden, .fixed.bottom-5, .fixed.bottom-0.h-1, .fixed.top-4.left-4 {
          display: none !important;
        }
        .slide-stage {
          transform: none !important;
          position: relative !important;
          left: 0 !important;
          top: 0 !important;
        }
        .slide-viewport {
          width: 1920px !important;
          height: 1080px !important;
          background: white !important;
          overflow: hidden !important;
        }
        html, body {
          width: 1920px !important;
          height: 1080px !important;
          overflow: hidden !important;
          background: white !important;
          margin: 0 !important;
        }
        @page { size: 1920px 1080px; margin: 0; }
        /* Disable transform animations that may cause height overflow */
        * { animation-duration: 0s !important; transition-duration: 0s !important; }
      `,
    });

    const pdfBytes = await page.pdf({
      width: '1920px',
      height: '1080px',
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    pdfBuffers.push(pdfBytes);
    process.stdout.write(`  · slide ${i}/${total}\r`);
  }

  await browser.close();
  console.log(`\n[${slug}] Merge ${pdfBuffers.length} trang...`);

  // Merge
  const merged = await PDFDocument.create();
  for (const buf of pdfBuffers) {
    const src = await PDFDocument.load(buf);
    const pages = await merged.copyPages(src, src.getPageIndices());
    pages.forEach((p) => merged.addPage(p));
  }
  const finalBytes = await merged.save();

  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });
  const outFile = path.join(OUT_DIR, `${slug}.pdf`);
  await writeFile(outFile, finalBytes);

  const sizeKB = Math.round(finalBytes.byteLength / 1024);
  console.log(`[${slug}] ✓ Xuất: ${outFile} (${sizeKB} KB · ${pdfBuffers.length} trang)`);
}

async function main() {
  const args = process.argv.slice(2);
  let slugs: string[] = [];
  if (args.includes('--all')) {
    const dir = path.resolve(process.cwd(), 'src/decks');
    const entries = await readdir(dir, { withFileTypes: true });
    slugs = entries
      .filter((e) => e.isDirectory() && e.name.startsWith('buoi-'))
      .map((e) => e.name)
      .sort();
  } else if (args.length) {
    slugs = args.filter((a) => !a.startsWith('--'));
  } else {
    console.error('Cú pháp: pnpm export:pdf buoi-01 [buoi-02 ...]   |   pnpm export:all');
    process.exit(1);
  }

  console.log(`\n=== Export ${slugs.length} deck${slugs.length > 1 ? 's' : ''} ===`);
  for (const s of slugs) {
    try {
      await exportDeck(s);
    } catch (e) {
      console.error(`[${s}] LỖI:`, (e as Error).message);
    }
  }
  console.log('\n=== HOÀN THÀNH ===');
}

main();
