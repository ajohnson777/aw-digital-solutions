// Renders public/og.png (the social-share preview) from an HTML card.
// Run after changing the mission or name: node scripts/og.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { site } from '../src/data/site.js';
const puppeteer = createRequire(import.meta.url)('puppeteer-core');
const exe = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find(fs.existsSync);
const font = 'data:font/woff2;base64,' + fs.readFileSync('public/fonts/archivo-var.woff2').toString('base64');
const html = `<!doctype html><html><head><style>
@font-face{font-family:A;src:url('${font}');font-weight:100 900;font-stretch:62% 125%}
body{margin:0;width:1200px;height:630px;background:#e4e5e1;font-family:A;color:#1c1e21;position:relative;overflow:hidden}
.g{position:absolute;inset:0;opacity:.5;background:linear-gradient(#8fb3d9 1px,transparent 1px) 0 0/100% 60px,linear-gradient(90deg,#8fb3d9 1px,transparent 1px) 0 0/60px 100%}
.f{position:absolute;inset:18px;border:1.5px solid #1c1e21}
h1{position:absolute;left:72px;top:150px;width:900px;margin:0;font-size:72px;line-height:1;font-stretch:116%;font-weight:650;letter-spacing:-.035em}
.m{position:absolute;left:72px;top:62px;display:flex;gap:16px;align-items:center;font-size:28px;font-weight:680;font-stretch:108%}
.tb{position:absolute;right:18px;bottom:18px;background:#2335c8;color:#fff;padding:22px 30px;font-size:22px;font-weight:650;font-stretch:108%}
</style></head><body><div class="g"></div><div class="f"></div>
<div class="m"><svg viewBox="0 0 36 32" width="54" fill="none" stroke="#1c1e21" stroke-width="2.6" stroke-linecap="square"><path d="M3 27L11 5L17 27L22 13L27 27L33 5"/><path d="M6.2 19.2H14.6" stroke="#2335c8"/></svg>${site.name}</div>
<h1>${site.mission}</h1><div class="tb">Alex + Will</div></body></html>`;
const b = await puppeteer.launch({ executablePath: exe, headless: true, args: ['--allow-file-access-from-files'] });
const p = await b.newPage();
await p.setViewport({ width: 1200, height: 630 });
await p.setContent(html, { waitUntil: 'load' });
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: 'public/og.png' });
await b.close();
console.log('public/og.png written');
