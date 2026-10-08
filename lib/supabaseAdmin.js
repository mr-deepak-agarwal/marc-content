import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client for API routes and cron jobs ONLY.
// Never import this from a client component or anything under `'use client'`.
//
// Uses the service-role key, which bypasses Row Level Security. That key must
// only ever live in server env vars (SUPABASE_SERVICE_ROLE_KEY) — never prefix
// it with NEXT_PUBLIC_.
//
// Transition fallback: if SUPABASE_SERVICE_ROLE_KEY isn't set yet, fall back to
// the anon key so the site keeps working while you deploy. Once RLS is enabled
// (supabase/2026-10-08_enable_rls.sql) the fallback stops working on purpose —
// set the service-role key BEFORE running that migration.

let client = null

export function getSupabaseAdmin() {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const key = serviceKey || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!serviceKey) {
    console.warn(
      '[supabaseAdmin] SUPABASE_SERVICE_ROLE_KEY is not set — falling back to the anon key. ' +
        'Set it before enabling RLS.'
    )
  }

  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return client
}
