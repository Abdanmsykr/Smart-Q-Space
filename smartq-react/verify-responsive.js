import puppeteer from 'puppeteer-core';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function createServer(rootDir, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/') reqPath = '/index.html';
      const filePath = path.join(rootDir, reqPath);

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });

    server.listen(port, () => {
      resolve(server);
    });
  });
}

const viewports = [
  { name: 'Small Mobile (iPhone SE 1st)', width: 320, height: 568 },
  { name: 'Mobile Standard (iPhone SE)', width: 375, height: 667 },
  { name: 'Modern Phone (iPhone 14/15)', width: 393, height: 852 },
  { name: 'Android Standard (Pixel/Galaxy)', width: 412, height: 915 },
  { name: 'Tablet Portrait (iPad Mini/Air)', width: 768, height: 1024 },
  { name: 'Tablet Landscape (iPad 820px)', width: 820, height: 1180 },
  { name: 'Small Laptop / Desktop (1024px)', width: 1024, height: 768 },
  { name: 'Standard Desktop (1280px)', width: 1280, height: 800 },
  { name: 'Large Screen (1440px)', width: 1440, height: 900 }
];

async function runVerification() {
  const server = await createServer(path.join(__dirname, 'dist'), 5432);
  console.log('Static server started at http://localhost:5432');

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let allPassed = true;

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:5432', { waitUntil: 'networkidle0' });

    // Measure horizontal scroll
    const metrics = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
      const clientWidth = doc.clientWidth;
      const hasHorizontalOverflow = scrollWidth > clientWidth;

      // Find any element wider than clientWidth
      const overflowingElements = [];
      document.querySelectorAll('*').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > clientWidth + 1) { // 1px threshold for rounding
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: typeof el.className === 'string' ? el.className.slice(0, 40) : '',
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          });
        }
      });

      // Check tap targets for buttons & links
      const undersizedTargets = [];
      const interactiveSelector = 'button, a.btn, .mobile-toggle, .floating-whatsapp, .faq-question';
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.display !== 'none' && style.visibility !== 'hidden') {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            if (rect.width < 40 || rect.height < 40) {
              undersizedTargets.push({
                text: el.innerText ? el.innerText.trim().slice(0, 20) : '',
                tag: el.tagName,
                className: typeof el.className === 'string' ? el.className.slice(0, 30) : '',
                width: Math.round(rect.width),
                height: Math.round(rect.height)
              });
            }
          }
        }
      });

      return {
        clientWidth,
        scrollWidth,
        hasHorizontalOverflow,
        overflowingCount: overflowingElements.length,
        firstFewOverflow: overflowingElements.slice(0, 3),
        undersizedCount: undersizedTargets.length,
        undersizedTargets: undersizedTargets.slice(0, 3)
      };
    });

    const status = !metrics.hasHorizontalOverflow && metrics.undersizedCount === 0 ? '✅ PASS' : '❌ FAIL';
    if (metrics.hasHorizontalOverflow || metrics.undersizedCount > 0) allPassed = false;

    console.log(`\n[${status}] ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`   ClientWidth: ${metrics.clientWidth}px | ScrollWidth: ${metrics.scrollWidth}px`);
    if (metrics.hasHorizontalOverflow) {
      console.log(`   ⚠️ HORIZONTAL OVERFLOW DETECTED: ${metrics.overflowingCount} elements exceed screen!`);
      console.log('   Sample:', JSON.stringify(metrics.firstFewOverflow));
    }
    if (metrics.undersizedCount > 0) {
      console.log(`   ⚠️ UNDERSIZED TARGETS: ${metrics.undersizedCount} elements < 40px hit area`);
      console.log('   Sample:', JSON.stringify(metrics.undersizedTargets));
    }
  }

  // Also test Mobile Menu Toggle interaction on 375px
  await page.setViewport({ width: 375, height: 667 });
  await page.goto('http://localhost:5432', { waitUntil: 'networkidle0' });
  await page.waitForSelector('.mobile-toggle', { visible: true });
  await page.click('.mobile-toggle');
  await new Promise(r => setTimeout(r, 300));
  
  const menuTest = await page.evaluate(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!mobileMenu) return { error: 'Menu not found' };

    const openedAfterClick = mobileMenu.classList.contains('active');
    const menuLinks = Array.from(mobileMenu.querySelectorAll('a')).map(a => {
      const rect = a.getBoundingClientRect();
      return { text: a.innerText.trim(), height: Math.round(rect.height), width: Math.round(rect.width) };
    });

    return { openedAfterClick, menuLinks };
  });

  console.log(`\n========================================`);
  console.log(`MOBILE MENU INTERACTION TEST:`);
  console.log(`Toggle opened menu: ${menuTest.openedAfterClick ? '✅ YES' : '❌ NO'}`);
  console.log(`Menu links:`, menuTest.menuLinks?.map(l => `${l.text} (${l.height}px high)`).join(', '));
  console.log(`========================================`);

  await browser.close();
  server.close();

  if (allPassed) {
    console.log('\n🎉 ALL VIEWPORT AND RESPONSIVE TESTS PASSED FLAWLESSLY!\n');
  } else {
    console.log('\n❌ SOME RESPONSIVE ISSUES NEED REFINEMENT.\n');
  }
}

runVerification().catch(err => {
  console.error(err);
  process.exit(1);
});
