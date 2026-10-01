# MARC Glocal — Week 4, 6 & 8 completion patch

What's in this drop, against the "not done / partly done" list from the last review:

## 1. Case study rebuild (Week 6)
- `data/caseStudies.js` — 8 new case studies, built from the client's deck + reference note.
  Coastal Chicken and Partagal Math are named (client confirmed consent); the other 6 stay
  anonymous per the reference note.
- `app/case-studies/[slug]/page.jsx` — new detail page: Before / Challenge / Approach / Result,
  a mid-page CTA, a service-matched CTA at the bottom, and related-case links. Full SEO metadata
  + Article/BreadcrumbList JSON-LD.
- `app/case-studies/CaseStudiesClient.jsx` + `page.jsx` — index page now lists the new pages
  alongside the 4 existing PDF case studies, with an added **service** filter next to the
  existing industry filter.
- `app/sitemap.js` — the 8 new case study URLs are in the sitemap.

No invented numbers: where the source material describes a recommendation rather than a
measured result, the copy says so rather than making up a percentage.

## 2. Insight report CTAs (Week 8)
- `app/insights/InsightsClient.jsx` — after any report download, the popup now shows a
  sector-matched CTA to the right service page (instead of just closing). The bottom-of-page
  CTA is now sector-matched to whichever category filter is active. Added a **report type**
  filter (Industry Overview / Market Entry Guide / Regional Outlook / Policy & Regulation /
  M&A Tracker / Thematic Analysis), inferred from each report's title — check `getReportType()`
  if anything looks mis-tagged.

## 3. Global hub trust layer (Week 4)
- `components/GlobalTrustLayer.jsx` (new) — added to `/global` between "Who We Work With" and
  the scorecard CTA. Uses only proof from your two documents: the verbatim Pivot Capital
  quote (already in `data/mock.js`), 5 summarised public testimonials/recommendations, and
  3 independent press mentions with real figures (250+ / 300+ clients, ET Now award).
  **Deliberately left out:** the "₹500Cr+ deals / 500+ projects / 5 continents" stat block from
  the original plan — nothing in the source documents supports those numbers. Add them once
  confirmed.

## 4. Blog clusters + CTAs for the remaining posts (Week 5)
- `lib/blogClusters.js` — added 8 supporting clusters (M&A, Financial Modelling, Profitability/MIS,
  Internal Audit, SOP, Strategy, HR, Sector Outlook) on top of the original 5, each pointing at an
  existing service page. `CLUSTER_OVERRIDES` now covers the posts keyword-matching missed or
  mis-scored. Only 2 posts are left unclustered on purpose (pure AI/sustainability news, no
  service to point to) — `node scripts/cluster-report.mjs` lists them.
- Added `getPostCta(post)` — every post now gets a CTA: its own cluster's CTA if it has one,
  otherwise one matched by its category. `app/blog/[slug]/BlogDetailClient.jsx` uses this so the
  generic contact box is gone; the CTA button opens the tracked lead form and there's now a link
  straight to the matching service page underneath it.

## Fixed along the way
`components/ScorecardBanner.jsx` was missing `'use client'` (it has an onClick handler and reads
`window.gtag`). It happened to work in the pages it was already used on, but broke the build the
moment it was used inside a page with `generateStaticParams` (the new case study pages). Fixed by
adding the directive — no visible behaviour change.

## Verified
- `npm ci` + `next build` — clean, all 164 routes (including the 8 new case study pages) build
  successfully in this sandbox, using placeholder env vars for Supabase/Resend/cron (the sandbox
  has no network access to Google Fonts or your real Supabase project, so those two failures are
  environment-only, not code issues — confirm both work in your normal deploy pipeline).
- No ESLint config ships with this repo, so no lint step to run; the build's own type/lint pass
  came back clean.

## Not done here (needs a decision or content from you)
- Confirming the ₹500Cr+/500+/5-continents stats, or approving the 250+/300+ press figures
  as the public-facing numbers.
- Any of the offline Week 4/7 items (media audit, PR outreach, directory submissions, guest
  article) — those aren't in the codebase.

---

# Batch 2 — Contact form anti-spam fix (2026-09-30)

You were getting bot-submitted leads through the Contact Us form (gibberish names, numeric
"messages", dotted Gmail addresses) despite having Turnstile, a honeypot, and a timing check.

**Root cause:** Turnstile was wired on the frontend (`ContactSection.jsx` and
`ContactUsClient.jsx` both render the widget and generate a token) but the token was never
checked server-side. `app/api/contact/route.js` received `turnstileToken` in the request body
and simply never looked at it. The widget only disabled the submit *button* in the browser —
a bot posting straight to the API endpoint skipped it entirely, which is also how it got past
the 3-second timing check (it was a real headless browser, not a naive script).

**What changed, all in `app/api/contact/route.js` unless noted:**

1. **Server-side Turnstile verification** — a new `verifyTurnstile()` call posts the token to
   Cloudflare's `siteverify` endpoint and rejects the submission if it doesn't check out.
   Required only for `source_page` values `'Contact Us Page'` and `'Contact Popup'` (the two
   forms that actually render the widget); the Chatbot Widget and Lead Capture Popup are
   unchanged since they don't have the widget in their UI.
   **You need to add one env var:** `TURNSTILE_SECRET_KEY` (the secret key from the same
   Cloudflare Turnstile dashboard where you got the site key).
2. **Auto-reply now only fires after every check passes** — this closes the form-relay risk
   where a bot could make `contact@marcglocal.com` send mail to an arbitrary third-party address.
3. **Tightened name/message validation** — a name now needs at least two words (catches
   `dshStTfLISCMNGcwvGK`-style gibberish); a message that's purely digits or under 10
   characters is rejected (catches the `4673663851`-style fake messages). Verified against the
   exact strings from your screenshots — see the test below.
4. **Persistent rate limiting** — replaced the in-memory `Map` (which reset on every serverless
   cold start) with a Supabase-backed check against a new `contact_rate_limits` table.
5. **Blocked-submission logging** — every rejection (honeypot, timing, rate limit, failed
   Turnstile, failed pattern check) now writes a row to a new `contact_spam_log` table, so you
   can see bot volume over time. Deliberately a **separate** table from `contact_requests` —
   your admin dashboard reads every row there with no status filter, so spam rows would
   otherwise show up in your real leads list.

**Before you deploy:** run `supabase/2026-09-30_contact_antispam_tables.sql` once in your
Supabase SQL editor — it creates the two new tables above. If inserts into them silently fail
after deploy, that's almost certainly a missing Row Level Security policy (match whatever
policy already lets `contact_requests` accept anon-key inserts).

**Verified:**
- Full `npm ci` + `next build` — clean, all 164 routes build.
- `node --check` on the route file — valid syntax.
- Unit-tested the new name/message regex directly against your two screenshots' exact payloads
  (`dshStTfLISCMNGcwvGK` / `4673663851` and `LXAAHefyiwSihrvbkDujF` / `2062786498`) — all four
  now correctly fail, while real-looking names/messages (`John Smith`, `Mary-Jane O'Brien`,
  a real enquiry sentence) still pass.
- Turnstile verification and the Supabase-backed rate limit/log calls need your real
  `TURNSTILE_SECRET_KEY` and Supabase project to test end-to-end — I used placeholder values
  for the build check only, since this sandbox has no network access to your real services.

**Separate issue, not fixed here (flagging for awareness):** `components/CTAButton.jsx` submits
leads by inserting directly into Supabase from the browser, bypassing all of the above —
no honeypot, no timing check, no rate limit, no Turnstile. It's used on nearly every page
(service pages, case studies, blog posts, insights). It hasn't shown up in your spam yet, but
it's a wider-open door than the Contact Us form was. Worth a follow-up pass if you want it
routed through `/api/contact` (or a similarly protected endpoint) instead.

---

# Batch 3 — Real Turnstile site key + hardened verification (2026-10-01)

You provided the real site key from your Cloudflare dashboard (`0x4AAAAAABlQJazeiHbIHwa_`) and
pointed me at Cloudflare's own "Turnstile Spin" integration prompt.

**What that prompt actually is:** it's an agentic workflow meant for a CLI-based coding agent
(e.g. Claude Code running on your own machine) with a real Cloudflare API token, Wrangler
installed, and direct access to your deployed backend — it walks that kind of agent through
requesting account access, creating/retrieving widgets via the Cloudflare API, and writing the
secret into your platform's secret store. I'm running in a sandboxed chat environment with no
access to your Cloudflare account, no network path to `api.cloudflare.com`, and no connection to
your live deployment — so I can't (and, per that prompt's own rules, shouldn't) run that part of
the flow, and I won't ask you to paste an API token into chat either.

**What I could do, and did — the actual substance of the integration:**

1. **Wired the real site key.** Both Turnstile widgets already read from
   `process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY` (unchanged) — just set that env var to
   `0x4AAAAAABlQJazeiHbIHwa_` in your deployment platform. Site keys aren't secret, so this one
   is safe to have in plain sight.
2. **Added a distinct `action` to each widget** — `contact_page` on the Contact Us page,
   `contact_popup` on the Contact Popup — so a solved token can't be replayed from one form to
   the other.
3. **Hardened `verifyTurnstile()` in `app/api/contact/route.js`** to match Cloudflare's own
   canonical pattern, which goes further than a bare `success === true` check:
   - validates the token's `action` matches the surface it was meant for,
   - validates the response's `hostname` is one of yours (`marcglocal.com` by default —
     override with a comma-separated `TURNSTILE_HOSTNAMES` env var if you also serve
     `www.marcglocal.com` or similar),
   - rejects a missing/oversized token outright before even calling Cloudflare,
   - times the Cloudflare request out at 10s instead of hanging indefinitely.

**Your dashboard screenshot, explained:**
- *"Siteverify isn't being called for marcglocal.com"* — this was Cloudflare confirming exactly
  what we found in Batch 2: the token was being generated but never checked server-side. It
  should clear once this code is deployed with `TURNSTILE_SECRET_KEY` set in production —
  Cloudflare will start seeing real siteverify calls from your server.
- *"Likely human: 22.22%"* — of everyone who's loaded the widget so far, Cloudflare's own
  scoring thinks only about 1 in 5 looked human. That lines up with the bot volume you saw in
  Batch 2 — most of the traffic hitting that form isn't a person.

**Verified:** full `npm ci` + `next build` with the real site key and the hardened route — clean,
all 164 routes build. `node --check` on the route file. Can't verify an actual live siteverify
round-trip or the real "Likely human" number moving from this sandbox — that needs your
`TURNSTILE_SECRET_KEY` and a production deploy.


