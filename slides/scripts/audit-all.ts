/**
 * Audit script: visit /buoi-01 ... /buoi-12, navigate ALL slides in each deck,
 * record any console.error / pageerror. Returns 0 issues = pass.
 */
import puppeteer from 'puppeteer';

const HOST = 'http://localhost:5173';

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  const allErrors: { slug: string; msg: string }[] = [];
  page.on('pageerror', (e) => allErrors.push({ slug: '?', msg: `pageerror: ${e.message}` }));
  page.on('console', (msg) => {
    if (msg.type() === 'error') allErrors.push({ slug: '?', msg: `console.error: ${msg.text()}` });
  });

  await page.setViewport({ width: 1920, height: 1080 });

  for (let n = 1; n <= 12; n++) {
    const slug = `buoi-${String(n).padStart(2, '0')}`;
    const before = allErrors.length;
    process.stdout.write(`→ ${slug} `);

    await page.goto(`${HOST}/${slug}`, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise((r) => setTimeout(r, 800));

    const total = await page.evaluate(() => {
      const m = document.body.innerText.match(/\d+\s*\/\s*(\d+)/);
      return m ? Number(m[1]) : 0;
    });

    if (!total) {
      console.log(`✗ Không đọc được slide count`);
      continue;
    }

    process.stdout.write(`(${total} slides) `);

    for (let i = 1; i < total; i++) {
      await page.keyboard.press('ArrowRight');
      await new Promise((r) => setTimeout(r, 250));
    }

    // Tag any new errors with current slug
    for (let i = before; i < allErrors.length; i++) allErrors[i].slug = slug;

    const newErr = allErrors.length - before;
    console.log(newErr === 0 ? '✓' : `✗ (${newErr} errors)`);
  }

  await browser.close();

  console.log('\n=== AUDIT SUMMARY ===');
  console.log(`Tổng errors: ${allErrors.length}`);
  if (allErrors.length) {
    allErrors.forEach((e) => console.log(`  [${e.slug}] ${e.msg}`));
    process.exit(1);
  } else {
    console.log('✅ Tất cả 12 buổi render sạch — 0 console error');
  }
}

main();
