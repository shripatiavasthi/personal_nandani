// Writes a static HTML file per route so crawlers get real content, titles and canonicals without running JS.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const ssrDir = resolve('dist-ssr')
const { render, renderSeoHead, prerenderPaths } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

// Per-page tags replace these defaults from index.html.
const pageSpecificTag = /^\s*<(title>.*<\/title|meta (name|property)="(description|robots|og:url|og:title|og:description|og:image|twitter:title|twitter:description|twitter:image)"[^>]*|link rel="canonical"[^>]*)>\s*$\n/gm
const template = (await readFile(resolve(dist, 'index.html'), 'utf8')).replace(pageSpecificTag, '')

const page = (path) => template
  .replace('</head>', `    ${renderSeoHead(path)}\n  </head>`)
  .replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`)

for (const path of prerenderPaths) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  await mkdir(dirname(resolve(dist, file)), { recursive: true })
  await writeFile(resolve(dist, file), page(path))
}
await writeFile(resolve(dist, '404.html'), page('/404'))
await rm(ssrDir, { recursive: true, force: true })

console.log(`Prerendered ${prerenderPaths.length} pages + 404.html`)
