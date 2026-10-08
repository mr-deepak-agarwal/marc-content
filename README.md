# MARC Glocal – Website

Next.js (App Router) site with Supabase for lead storage, Resend for email, and Cloudflare Turnstile for spam protection.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000
```

Copy `.env.example` to `.env.local` first.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase project (public, used by the admin login) |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only key used by API routes and cron. Never expose to the browser |
| `RESEND_API_KEY` | Transactional email |
| `CRON_SECRET` | Protects `/api/cron/nurture` (required; the endpoint rejects all calls without it) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` / `TURNSTILE_HOSTNAMES` | Cloudflare Turnstile |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `GEMINI_API_KEY` | MSME checkup assistant (server-only, called via `/api/checkup-ai`) |

## Database

SQL migrations live in `supabase/`. Run them in the Supabase SQL editor, in date order. `2026-10-08_enable_rls.sql` has setup steps in its header; read them before running it.

## Scheduled jobs

`vercel.json` runs `/api/cron/nurture` daily (lead nurture emails).

## Blog clusters

`lib/blogClusters.js` groups posts into topic clusters. `node scripts/cluster-report.mjs` lists the assignments and any unmatched posts.
