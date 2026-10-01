-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query)
-- before deploying the updated app/api/contact/route.js.
--
-- Two new tables, both separate from `contact_requests` on purpose: spam and
-- rate-limit bookkeeping should never show up in the admin dashboard's leads
-- list, which reads every row in `contact_requests` with no status filter.

-- 1. Persistent rate limiting (replaces the in-memory Map, which resets on
--    every serverless cold start and so barely limits anything in production).
create table if not exists contact_rate_limits (
  ip text primary key,
  count int not null default 1,
  window_start timestamptz not null default now()
);

-- 2. A log of every blocked/rejected submission, so you can see bot volume
--    over time instead of it disappearing silently. Nothing in here should
--    ever need a reply — it's purely for visibility.
create table if not exists contact_spam_log (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  reason text not null,          -- 'honeypot' | 'timing' | 'rate_limit' | 'turnstile' | 'pattern_name' | 'pattern_email' | 'pattern_message'
  ip text,
  source_page text,
  name text,
  email text,
  mobile text,
  message text,
  raw jsonb                      -- full request body, for anything a reason string doesn't capture
);

create index if not exists contact_spam_log_created_at_idx on contact_spam_log (created_at desc);
create index if not exists contact_spam_log_reason_idx on contact_spam_log (reason);

-- Row Level Security: these tables are only ever written to from the server
-- (using the anon key that's already used for contact_requests elsewhere in
-- this codebase), so match the same access pattern already in place there.
-- If contact_requests has RLS policies allowing inserts from the anon key,
-- mirror them here. If you're not sure, run this and test a submission —
-- if inserts silently fail, that's an RLS policy to add, not a code bug.
