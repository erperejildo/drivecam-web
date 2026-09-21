import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToString } from '@vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import {
  BASE_PATH,
  SITE_URL,
  createDriveCamApp,
  getRootSeo,
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

const rootSeo = getRootSeo()
let rootHtml = await renderPage('/')
const spanishDetectScript = `
    <script>
      ;(function () {
        try {
          var locale = window.localStorage.getItem('drivecam.locale')
          if (!locale) {
            var lang = (navigator.language || '').toLowerCase()
            if (lang.indexOf('es') === 0) {
              window.location.replace('${BASE_PATH}es/')
            }
          } else if (locale === 'es') {
            window.location.replace('${BASE_PATH}es/')
          }
        } catch (error) {}
      })()
    </script>`

rootHtml = rootHtml.replace('<!--seo-head-->', renderSeoHead(rootSeo) + spanishDetectScript)
await write(distDir, 'index.html', rootHtml)
console.log('prerendered root /')

const sitemapPages = [rootSeo, ...pages.filter((p) => p.path !== '/en')]
const entries = sitemapPages
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

function redirectHtml(target) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8" /><meta http-equiv="refresh" content="0; url=${target}" /><link rel="canonical" href="${SITE_URL}${target}" /></head><body><a href="${target}">Redirecting...</a></body></html>`
}
await write(join(distDir, 'privacy'), 'index.html', redirectHtml('/en/privacy/'))
await write(join(distDir, 'terms'), 'index.html', redirectHtml('/en/terms/'))
await write(join(distDir, 'legal'), 'index.html', redirectHtml('/en/legal/'))
console.log('wrote sitemap.xml, robots.txt, .nojekyll, and redirect stubs')

const missing = [rootSeo, ...pages].filter((page) => !page.title || !page.description)
if (missing.length > 0) {
  throw new Error(`Some pages are missing SEO metadata: ${missing.map((p) => p.path).join(', ')}`)
}
if (!getSeoForPath('/')) {
  throw new Error('SEO lookup for / failed')
}
if (!getSeoForPath('/en/pricing')) {
  throw new Error('SEO lookup for /en/pricing failed')
}
