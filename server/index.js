/* eslint-env node */
import { createReadStream, existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const port = Number(process.env.PORT) || 8080;
const isProduction = process.env.NODE_ENV === 'production';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

const sendJson = (res, status, payload) => {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(JSON.stringify(payload));
};

const sendStaticFile = async (reqPath, res) => {
  const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, '');
  const fullPath = path.join(distPath, safePath);

  if (!fullPath.startsWith(distPath) || !existsSync(fullPath)) {
    return false;
  }

  const ext = path.extname(fullPath);
  res.writeHead(200, {
    'Content-Type': mimeTypes[ext] || 'application/octet-stream',
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
  });

  createReadStream(fullPath).pipe(res);
  return true;
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host}`);

  if (url.pathname === '/api/health') {
    sendJson(res, 200, {
      status: 'ok',
      service: 'moneyfront-api',
      timestamp: new Date().toISOString(),
    });
    return;
  }

  if (!isProduction) {
    sendJson(res, 404, {
      message: 'Not found. Run `npm run dev:frontend` for the Vite UI in development.',
    });
    return;
  }

  const requestedPath = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
  const served = await sendStaticFile(requestedPath, res);

  if (served) {
    return;
  }

  try {
    const indexFile = await readFile(path.join(distPath, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
    res.end(indexFile);
  } catch {
    sendJson(res, 500, {
      message: 'Frontend build not found. Run `npm run build` first.',
    });
  }
});

server.listen(port, () => {
  console.log(`MoneyFront backend listening on http://localhost:${port}`);
});
