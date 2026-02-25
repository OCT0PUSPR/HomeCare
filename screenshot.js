const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  const pages = [
    { url: 'http://localhost:3000/', name: 'home' },
    { url: 'http://localhost:3000/about', name: 'about' },
    { url: 'http://localhost:3000/services', name: 'services' },
    { url: 'http://localhost:3000/contact', name: 'contact' },
    { url: 'http://localhost:3000/book-appointment', name: 'book-appointment' },
    { url: 'http://localhost:3000/services/newborn-mother-care', name: 'newborn-mother-care' },
    { url: 'http://localhost:3000/services/iv-drip', name: 'iv-drip' },
    { url: 'http://localhost:3000/faqs', name: 'faqs' },
    { url: 'http://localhost:3000/our-team', name: 'our-team' },
    { url: 'http://localhost:3000/blog', name: 'blog' },
  ];

  for (const p of pages) {
    await page.goto(p.url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `screenshots/${p.name}.png`, fullPage: true });
    console.log(`Screenshot: ${p.name}.png`);
  }

  await browser.close();
  console.log('Done!');
})();
