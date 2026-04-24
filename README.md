# MoneyFront (Frontend + Backend)

This repository is now configured to run as a full-stack app:

- **Frontend:** React + Vite
- **Backend:** Node HTTP server (`server/index.js`)
- **Production mode:** backend serves the built frontend from `dist/`

## Run in development

Use two terminals:

```bash
npm run dev:frontend
```

```bash
npm run dev:backend
```

- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:8080/api/health`
- Frontend calls to `/api/*` are proxied to backend via Vite config.

## Production build + run

```bash
npm run build
npm run start
```

- Backend serves API and static frontend from `dist/`.
- Default port is `8080`.

## Environment variables

- `PORT` (optional): backend listen port (default `8080`)
- `NODE_ENV=production` required when running `npm run start`

## Deployment checklist

1. Install dependencies: `npm ci`
2. Build frontend: `npm run build`
3. Start backend: `npm run start`
4. Validate health endpoint: `GET /api/health`
5. Validate SPA routing by opening frontend routes directly

