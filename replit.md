# CodeLab Academy

## Overview

CodeLab Academy is a React/Vite learning platform served by an Express backend. It includes course content, account registration/login, and the Kai AI teaching routes.

## Run and build

- Development workflow: `node index.js`
- Production build: `npm run build`
- Railway build command: `npm ci && npm run build`
- The server listens on `PORT` and defaults to `5000`.

## Environment

- `MONGODB_URI` enables persistent user accounts.
- `GROQ_API_KEY` enables the Kai AI teaching service.
- `SESSION_SECRET` is available for session-related configuration.

## User preferences

- Keep the existing React, Express, and MongoDB structure.
- Prefer the smallest focused change needed for deployment or feature work.