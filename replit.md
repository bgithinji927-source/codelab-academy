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
- `GROQ_API_KEY` enables Groq for the Kai AI teaching service.
- `OPENROUTER_API_KEY` enables OpenRouter. Set `AI_PROVIDER=groq`, `AI_PROVIDER=openrouter`, or leave it as `auto` (default: Groq first, then OpenRouter).
- `GROQ_MODEL` and `OPENROUTER_MODEL` optionally select the model for each provider. `OPENROUTER_SITE_URL` and `OPENROUTER_APP_NAME` optionally provide OpenRouter attribution headers. Administrators can override the provider and model from Admin Control → Settings; those saved MongoDB settings apply live to Kai and admin AI tools.
- `SESSION_SECRET` is available for session-related configuration.

## User preferences

- Keep the existing React, Express, and MongoDB structure.
- Prefer the smallest focused change needed for deployment or feature work.

## Administrator control center

Set `ADMIN_EMAILS` in the deployment environment to a comma-separated list of administrator email addresses, or promote a user to the `admin` role from the database. Administrators must sign in again after the role or environment setting changes. The learner dashboard then shows the protected **Admin Control** entry point.

The control center provides server-authorized management for user activation, roles, XP, levels, progress resets, course metadata and visibility, lesson metadata and teaching content, daily challenge creation/activation/archiving, and platform settings. Course and lesson changes are stored as database overrides and are merged into the learner catalog without editing source files. The admin API is mounted under `/api/admin` and requires both a valid JWT and administrator authorization.
