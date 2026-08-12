# CodeLab Academy on Replit

## Run

The app uses the existing Express server as its Replit entrypoint:

```bash
npm run build
npm start
```

The server listens on port `5000` and serves the Vite build from `dist/`. The
development Vite server is available with `npx vite --host 0.0.0.0 --port 5173`
when frontend hot reload is needed.

## Environment variables

- `MONGODB_URI` — required for registration, login, and persisted user data.
- `GROQ_API_KEY` — required when using Kai's AI teaching endpoint.

The server can serve the frontend and health endpoint without these optional
runtime integrations configured, but the related features remain unavailable.