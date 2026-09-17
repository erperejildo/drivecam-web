import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToString } from '@vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import {
  BASE_PATH,
  SITE_URL,
  createDriveCamApp,
  getSeoPages,
  getSeoForPath,
  renderSeoHead,
} from '../dist-ssr/entry-server.js'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(rootDir, 'dist')
const template = await readFile(join(distDir, 'index.html'), 'utf8')

async function renderPage(path) {
  const { app, router } = createDriveCamApp(createMemoryHistory())
  await router.push(path)
  await router.isReady()
  const html = await renderToString(app)
  return template.replace('<div id="app"></div>', `<div id="app">${html}</div>`)
}

function write(dir, name, content) {
  return mkdir(dir, { recursive: true }).then(() => writeFile(join(dir, name), content))
}

const pages = getSeoPages()

for (const page of pages) {
  let html = await renderPage(page.path)
  html = html.replace('<!--seo-head-->', renderSeoHead(page))
  html = html.replace('<html lang="en">', `<html lang="${page.locale}">`)
  const targetDir = join(distDir, ...page.path.split('/').filter(Boolean))
  await write(targetDir, 'index.html', html)
  console.log(`prerendered ${page.path}`)
}

let notFound = await renderPage('/404')
notFound = notFound.replace(
  '<!--seo-head-->',
  '<title>Page Not Found — DriveCam</title>\n    <meta name="robots" content="noindex, follow" />',
)
await write(distDir, '404.html', notFound)
console.log('prerendered 404')

const redirect = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DriveCam — Dash Cam App</title>
    <meta name="robots" content="noindex" />
    <script>
      ;(function () {
        var base = '${BASE_PATH}'
        var locale = null
        try {
          locale = window.localStorage.getItem('drivecam.locale')
        } catch (error) {
          locale = null
        }
        if (locale !== 'en' && locale !== 'es') {
          var lang = (navigator.language || 'en').toLowerCase()
          locale = lang.indexOf('es') === 0 ? 'es' : 'en'
        }
        window.location.replace(base + locale + '/')
      })()
    </script>
    <noscript><meta http-equiv="refresh" content="0;url=${BASE_PATH}en/" /></noscript>
  </head>
  <body></body>
</html>
`
await write(distDir, 'index.html', redirect)
console.log('wrote root redirect')

const entries = pages
  .map((page) => {
    const alternates = page.alternates
      .map(
        (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`,
      )
      .join('\n')
    return `  <url>\n    <loc>${page.canonical}</loc>\n${alternates}\n  </url>`
  })
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`
await write(distDir, 'sitemap.xml', sitemap)
await write(distDir, 'robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
await write(distDir, '.nojekyll', '')
console.log('wrote sitemap.xml, robots.txt and .nojekyll')

const missing = pages.filter((page) => !page.title || !page.description)
if (missing.length > 0) {
  throw new Error(`Some pages are missing SEO metadata: ${missing.map((p) => p.path).join(', ')}`)
}
if (!getSeoForPath('/en/pricing')) {
  throw new Error('SEO lookup for /en/pricing failed')
}
