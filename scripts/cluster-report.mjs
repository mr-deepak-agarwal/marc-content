// Usage (from the repo root):  node scripts/cluster-report.mjs
//
// Prints which cluster each blog post was assigned to, and lists every post
// that was left unmatched so you can add entries to CLUSTER_OVERRIDES in
// lib/blogClusters.js. Reads data/blogData.js and lib/blogClusters.js as text
// so it works without any bundler or "type": "module" setup.

import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const root = process.cwd()

function load(file, exposeNames) {
  const src = fs
    .readFileSync(path.join(root, file), 'utf8')
    .replace(/^export\s+default\s+/gm, 'const __default = ')
    .replace(/^export\s+(const|let|function)\s+/gm, '$1 ')
  const ctx = {}
  vm.createContext(ctx)
  vm.runInContext(`${src}\n;globalThis.__out = { ${exposeNames.join(', ')} }`, ctx)
  return ctx.__out
}

const { blogs } = load('data/blogData.js', ['blogs'])
const { CLUSTERS, getCluster } = load('lib/blogClusters.js', ['CLUSTERS', 'getCluster'])

const byCluster = Object.fromEntries(CLUSTERS.map((c) => [c.id, []]))
const unmatched = []

for (const post of blogs) {
  const c = getCluster(post)
  if (c) byCluster[c.id].push(post)
  else unmatched.push(post)
}

console.log(`\n${blogs.length} posts total\n`)
for (const c of CLUSTERS) {
  console.log(`${c.label.padEnd(22)} ${String(byCluster[c.id].length).padStart(3)} posts  ->  ${c.pillar.href}`)
}
console.log(`${'Unmatched'.padEnd(22)} ${String(unmatched.length).padStart(3)} posts`)

for (const c of CLUSTERS) {
  console.log(`\n── ${c.label} ──`)
  byCluster[c.id].forEach((p) => console.log(`  ${p.slug}`))
}

console.log('\n── Unmatched (add to CLUSTER_OVERRIDES if they belong in a cluster) ──')
unmatched.forEach((p) => console.log(`  ${p.slug}   |   ${p.title}`))
console.log('')
