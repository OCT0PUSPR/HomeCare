const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  const pages = [
    { name: 'target-home', url: 'https://emirateshomenursing.ae/' },
    { name: 'target-about', url: 'https://emirateshomenursing.ae/about-us/' },
    { name: 'target-services', url: 'https://emirateshomenursing.ae/services/' },
    { name: 'target-team', url: 'https://emirateshomenursing.ae/our-team/' },
    { name: 'target-contact', url: 'https://emirateshomenursing.ae/contact-us/' },
    { name: 'target-book', url: 'https://emirateshomenursing.ae/book-now/' },
    { name: 'target-blog', url: 'https://emirateshomenursing.ae/blog/' },
    { name: 'target-partner', url: 'https://emirateshomenursing.ae/become-a-partner/' },
  ];

  for (const p of pages) {
    console.log(`Screenshotting ${p.name}...`);
    try {
      await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });

      // Scroll through entire page to load lazy images
      const height = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < height; y += 400) {
        await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
        await page.waitForTimeout(200);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      await page.screenshot({ path: `screenshots/${p.name}.png`, fullPage: true });
    } catch (e) {
      console.log(`  Error: ${e.message}`);
    }
  }

  await browser.close();
  console.log('Done!');
})();
