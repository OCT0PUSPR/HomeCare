const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  const pages = [
    { name: 'home', url: 'http://localhost:3000/' },
    { name: 'about', url: 'http://localhost:3000/about' },
    { name: 'services', url: 'http://localhost:3000/services' },
    { name: 'our-team', url: 'http://localhost:3000/our-team' },
    { name: 'contact', url: 'http://localhost:3000/contact' },
    { name: 'book-appointment', url: 'http://localhost:3000/book-appointment' },
    { name: 'blog', url: 'http://localhost:3000/blog' },
    { name: 'become-partner', url: 'http://localhost:3000/become-partner' },
  ];

  for (const p of pages) {
    console.log(`Screenshotting ${p.name}...`);
    await page.goto(p.url, { waitUntil: 'networkidle' });

    // Scroll through the entire page to trigger whileInView animations
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
      await page.waitForTimeout(150);
    }
    // Scroll back to top and wait for all animations
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    await page.screenshot({ path: `screenshots/${p.name}.png`, fullPage: true });
  }

  await browser.close();
  console.log('Done!');
})();
