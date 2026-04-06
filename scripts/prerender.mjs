#!/usr/bin/env node
/**
 * Post-build prerender script.
 *
 * After `vite build` produces a normal SPA in dist/, this script:
 *   1. Starts a local static server serving dist/
 *   2. Uses Puppeteer to visit every route
 *   3. Saves the fully-rendered HTML to dist/<route>/index.html
 *
 * Usage:  node scripts/prerender.mjs
 *
 * Requirements:
 *   npm i -D puppeteer   (or puppeteer-core + local Chrome)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "../dist");

// ---------- 1. Import the route list ----------
// We read prerender-routes.ts as plain text and extract the array
// (avoids needing ts-node at build time)
const routesSrc = readFileSync(
  resolve(__dirname, "../src/prerender-routes.ts"),
  "utf-8"
);
const routeMatches = [...routesSrc.matchAll(/"(\/[^"]*?)"/g)].map((m) => m[1]);
if (routeMatches.length === 0) {
  console.error("❌  No routes found in prerender-routes.ts");
  process.exit(1);
}
console.log(`📋  Found ${routeMatches.length} routes to prerender\n`);

// ---------- 2. Static file server ----------
function createStaticServer(root, port) {
  const mime = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".ttf": "font/ttf",
  };

  return new Promise((res) => {
    const srv = createServer((req, rawRes) => {
      let url = req.url.split("?")[0];
      let filePath = resolve(root, "." + url);

      // SPA fallback: if file doesn't exist, serve index.html
      if (!existsSync(filePath) || !filePath.includes(".")) {
        filePath = resolve(root, "index.html");
      }

      try {
        const data = readFileSync(filePath);
        const ext = "." + filePath.split(".").pop();
        rawRes.writeHead(200, {
          "Content-Type": mime[ext] || "application/octet-stream",
        });
        rawRes.end(data);
      } catch {
        rawRes.writeHead(404);
        rawRes.end("Not found");
      }
    });

    srv.listen(port, () => {
      console.log(`🌐  Static server on http://localhost:${port}`);
      res(srv);
    });
  });
}

// ---------- 3. Prerender ----------
async function prerender() {
  const PORT = 4173;

  // Check dist exists
  if (!existsSync(resolve(DIST, "index.html"))) {
    console.error("❌  dist/index.html not found. Run `npm run build` first.");
    process.exit(1);
  }

  const server = await createStaticServer(DIST, PORT);

  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch {
    console.error(
      "❌  puppeteer not installed. Run: npm i -D puppeteer"
    );
    server.close();
    process.exit(1);
  }

  const browser = await puppeteer.default.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let success = 0;
  let failed = 0;

  for (const route of routeMatches) {
    try {
      const page = await browser.newPage();
      // Block images/fonts/media to speed things up
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const type = req.resourceType();
        if (["image", "font", "media"].includes(type)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait a bit for any lazy-loaded content
      await page.evaluate(
        () => new Promise((resolve) => setTimeout(resolve, 1000))
      );

      let html = await page.content();

      // Remove scripts to create pure HTML for WPConvert
      // (optional — comment out if you want interactive HTML)
      // html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

      // Determine output path
      const outDir =
        route === "/"
          ? DIST
          : resolve(DIST, route.replace(/^\//, ""));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, "index.html"), html, "utf-8");

      success++;
      process.stdout.write(`  ✅  ${route}\n`);
      await page.close();
    } catch (err) {
      failed++;
      console.error(`  ❌  ${route} — ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(
    `\n🎉  Prerender complete: ${success} succeeded, ${failed} failed out of ${routeMatches.length} routes`
  );
  console.log(`📂  Output: ${DIST}/`);
}

prerender();
