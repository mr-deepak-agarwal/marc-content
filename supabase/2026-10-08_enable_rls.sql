-- Row Level Security for the MARC site.
--
-- ORDER OF OPERATIONS (important):
--   1. Add SUPABASE_SERVICE_ROLE_KEY to your server env (Vercel → Settings → Environment Variables)
--      and deploy this version of the code. The API routes and cron job now use that key.
--   2. Run this file in the Supabase SQL editor.
--   3. Replace REPLACE_WITH_ADMIN_EMAIL below with the email you use to sign in to /admin/dashboard.
--   4. Supabase → Authentication → Providers/Settings: turn OFF "Allow new users to sign up",
--      so nobody can self-register an account.
--   5. Sign out and back in to /admin/dashboard (the admin role is read from your login token).
--
-- If you run this BEFORE step 1, form submissions will fail until the key is set.
--
-- Result: the public anon key (visible in the browser) can no longer read or write any lead data.
-- Only the server (service-role key, bypasses RLS) and the one admin user can.

-- 0. Remove any older policies on these tables (e.g. permissive "allow anon insert/select" ones).
do $$
declare r record;
begin
  for r in
    select policyname, tablename
    from pg_policies
    where schemaname = 'public'
      and tablename in (
        'contact_requests', 'report_downloads', 'checkup_responses', 'scorecard_responses',
        'checklist_leads', 'contact_rate_limits', 'contact_spam_log'
      )
  loop
    execute format('drop policy %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

-- 1. Turn RLS on. With no policy, a table is invisible to anon/authenticated users.
alter table public.contact_requests    enable row level security;
alter table public.report_downloads    enable row level security;
alter table public.checkup_responses   enable row level security;
alter table public.scorecard_responses enable row level security;
alter table public.checklist_leads     enable row level security;
alter table public.contact_rate_limits enable row level security;
alter table public.contact_spam_log    enable row level security;

-- 2. "Admin" = a user whose app_metadata.role is 'admin'. app_metadata can only be changed
--    server-side (SQL editor / service role), never by the user themselves.
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
$$;

-- 3. What the admin dashboard (browser, signed-in admin) needs:
--    read contact requests + change their status, read report downloads and checkup responses.
create policy "admin read contact_requests"   on public.contact_requests
  for select to authenticated using (public.is_admin());
create policy "admin update contact_requests" on public.contact_requests
  for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin read report_downloads"   on public.report_downloads
  for select to authenticated using (public.is_admin());
create policy "admin read checkup_responses"  on public.checkup_responses
  for select to authenticated using (public.is_admin());

-- scorecard_responses, checklist_leads, contact_rate_limits, contact_spam_log:
-- intentionally no policies → server-only.

-- 4. Make your admin login an admin. Replace the email first.
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
where email in ('REPLACE_WITH_ADMIN_EMAIL');

-- Check: this should list exactly your admin account(s).
select email, raw_app_meta_data ->> 'role' as role
from auth.users
where raw_app_meta_data ->> 'role' = 'admin';
