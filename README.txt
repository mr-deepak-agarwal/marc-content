Drop these into the MARC repo at the same paths (BlogDetailClient.jsx replaces the existing file;
BlogDetailClient.diff shows exactly what changed in it).

1. npm run dev, open any /blog/<slug> on desktop: sticky sidebar on the right, cluster note under the intro,
   "Go deeper" box after the Key Takeaway, cluster-first Related Articles.
2. node scripts/cluster-report.mjs   -> shows which posts landed in which cluster + the unmatched list.
3. Fix any misses by adding slugs to CLUSTER_OVERRIDES in lib/blogClusters.js.

Note: BlogDetailClient.jsx was edited from the copy in marc.zip. If the live file has changed since,
apply BlogDetailClient.diff by hand instead of overwriting.
