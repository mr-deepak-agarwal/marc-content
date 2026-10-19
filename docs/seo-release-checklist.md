# Consulting SEO release checks

This change prepares clearer feasibility, market-research and international-expansion pages, fixes a legacy blog excerpt, and aligns public search metadata with the www host that currently serves the website.

## Before release

- Confirm www.marcglocal.com is the intended permanent host. The live apex currently returns a 307 redirect to www, while old metadata points to the apex.
- Inspect Google's selected canonical for the home page and three changed services. Keep the old Search Console property for continuity and verify access to the www or domain property.
- Have the Vercel project owner change the apex-to-www redirect to a permanent 301/308 if www is the confirmed host. Preserve paths and query strings. A Vercel domain redirect can run before application routing, so this PR does not pretend to change that setting.
- Have the service owner review the new scope, cost and timing language. Existing case studies and quantified claims have been retained, not independently verified by this change.
- Confirm preview deployments are access-protected or noindexed through the hosting environment. Production metadata intentionally remains indexable.

## After release

1. Verify the apex redirects to the matching www URL without loops and that the destination returns 200.
2. Read back title, description, H1, canonical and Open Graph URL on home, the three changed services and the internationalisation article.
3. Check robots.txt and all sitemap locations use the intended host; ensure the sitemap can be fetched.
4. Check desktop and phone layouts, the cost/timing accordions, related-service links and Pulse links.
5. Submit a designated test enquiry with the owner, verify recipient delivery and deduplication, then reconcile the analytics event with the enquiry record. Local preview checks must not submit production enquiries.
6. Submit the sitemap and inspect priority URLs in Search Console. Record the release date before comparing complete periods.

## Scope boundaries

No route paths, forms, API behavior, consent settings, authentication, budgets, ads or email workflows are changed. The original internationalisation article body and title remain. Pulse's own source is a separate project; this PR only adds relevant links to its existing homepage.

Rollback the source revision for content/metadata regressions. Vercel domain settings require their own saved configuration and rollback by the hosting owner. No indexing, ranking, conversion or revenue result is guaranteed by a successful build or deploy.
