/**
 * career.html → 박다인_경력기술서.pdf (A4)
 *
 * 실행: npm run pdf
 * 로컬 정적 서버로 HTML을 띄운 뒤 puppeteer로 인쇄한다(폰트 CDN 로딩 대기 포함).
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = 'career.html';
const OUTPUT = path.join(root, '박다인_경력기술서.pdf');
const PORT = 4187;

const server = createServer(async (req, res) => {
  try {
    const file = path.join(root, decodeURIComponent((req.url ?? '/').split('?')[0]));
    if (!file.startsWith(root)) {
      res.writeHead(403).end();
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end();
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/${SOURCE}`, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await page.pdf({
    path: OUTPUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', right: '14mm', bottom: '14mm', left: '14mm' },
  });
  console.log(`생성 완료: ${path.relative(root, OUTPUT)}`);
} finally {
  await browser.close();
  server.close();
}
