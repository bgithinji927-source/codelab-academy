- [CineVault architecture](cinevault-arch.md) — MongoDB (not Postgres), M-Pesa STK push, Telegram Bot delivery; callback idempotency is critical.
  - [CineVault AI stack](cinevault-ai.md) — AI routes use Grok 3 via openai SDK (xAI base URL); XAI_API_KEY secret required.
- [Workflow startup detection](workflow-startup.md) — verify direct HTTP readiness before changing ports when workflow monitoring reports a timeout.
  