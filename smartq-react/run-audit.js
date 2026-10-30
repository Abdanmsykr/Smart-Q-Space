import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Helper to determine mime type
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

// Simple static server for any directory
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

async function audit(url, label) {
  console.log(`\n========================================`);
  console.log(`AUDIT: ${label}`);
  console.log(`URL: ${url}`);
  console.log(`========================================`);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // Emulate mobile device (Moto G Power / Pixel 5 - typical Lighthouse mobile)
  await page.setViewport({
    width: 393,
    height: 851,
    isMobile: true,
    hasTouch: true,
    deviceScaleFactor: 2.75,
  });

  // Track network requests and transfer sizes
  let totalBytes = 0;
  const requests = [];

  page.on('response', async (response) => {
    try {
      const buffer = await response.buffer();
      const bytes = buffer.length;
      totalBytes += bytes;
      requests.push({
        url: response.url(),
        status: response.status(),
        sizeKB: (bytes / 1024).toFixed(1),
        type: response.headers()['content-type'] || 'unknown',
      });
    } catch (e) {}
  });

  // Inject Web Vitals observer before page loads
  await page.evaluateOnNewDocument(() => {
    window.__webVitals = {
      fcp: 0,
      lcp: 0,
      cls: 0,
      tbt: 0,
      navigation: {},
    };

    // FCP
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          window.__webVitals.fcp = entry.startTime;
        }
      }
    }).observe({ type: 'paint', buffered: true });

    // LCP
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        window.__webVitals.lcp = entries[entries.length - 1].startTime;
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // CLS
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          window.__webVitals.cls += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
  });

  // Emulate Lighthouse Slow 4G Network Throttling (same as Google Lighthouse mobile)
  const client = await page.createCDPSession();
  await client.send('Network.enable');
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 150, // 150ms RTT
    downloadThroughput: (1.6 * 1024 * 1024) / 8, // 1.6 Mbps download (Lighthouse standard)
    uploadThroughput: (750 * 1024) / 8,
  });

  // CPU Throttling: 4x slowdown (Lighthouse standard mobile)
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  const startNav = Date.now();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  const navTime = Date.now() - startNav;

  // Wait a bit for observer callbacks to settle
  await new Promise((r) => setTimeout(r, 1000));

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] || {};
    return {
      fcp: Math.round(window.__webVitals.fcp),
      lcp: Math.round(window.__webVitals.lcp),
      cls: Number(window.__webVitals.cls.toFixed(4)),
      domContentLoaded: Math.round(nav.domContentLoadedEventEnd - nav.startTime),
      loadComplete: Math.round(nav.loadEventEnd - nav.startTime),
    };
  });

  await browser.close();

  console.log(`\n--- METRICS (Mobile with Lighthouse 4G Throttling & 4x CPU slowdown) ---`);
  console.log(`First Contentful Paint (FCP) : ${(metrics.fcp / 1000).toFixed(2)}s  (Target < 1.8s)`);
  console.log(`Largest Contentful Paint (LCP): ${(metrics.lcp / 1000).toFixed(2)}s  (Target < 2.5s)`);
  console.log(`Cumulative Layout Shift (CLS) : ${metrics.cls}         (Target < 0.1)`);
  console.log(`DOM Content Loaded            : ${(metrics.domContentLoaded / 1000).toFixed(2)}s`);
  console.log(`Total Page Load               : ${(metrics.loadComplete / 1000).toFixed(2)}s`);
  console.log(`Total Download Size           : ${(totalBytes / 1024).toFixed(1)} KB`);
  console.log(`Total Requests                : ${requests.length}`);

  console.log(`\n--- TOP TRANSFERRED ASSETS ---`);
  requests
    .sort((a, b) => parseFloat(b.sizeKB) - parseFloat(a.sizeKB))
    .slice(0, 7)
    .forEach((r) => {
      const name = r.url.split('/').pop().split('?')[0] || r.url;
      console.log(`  - ${name.padEnd(30)} : ${r.sizeKB.padStart(6)} KB (${r.type})`);
    });

  return { metrics, totalBytes, requests };
}

async function main() {
  // 1. Audit React Production Build (dist)
  const reactServer = await createServer('d:/SMART Q SPACE/smartq-react/dist', 8081);
  await audit('http://localhost:8081', 'React Production Build (Optimized)');
  reactServer.close();

  // 2. Audit Static HTML Landing Page
  // Copy smartq_space_landing_page.html as index.html in root for clean serving
  fs.copyFileSync(
    'd:/SMART Q SPACE/smartq_space_landing_page.html',
    'd:/SMART Q SPACE/index.html'
  );
  const htmlServer = await createServer('d:/SMART Q SPACE', 8082);
  await audit('http://localhost:8082', 'Static HTML (Optimized)');
  htmlServer.close();
}

main().catch(console.error);

