import { describe, expect, it } from 'vitest'
import {
  SITE_URL,
  canonicalUrl,
  getJsonLd,
  getSeoForPath,
  getSeoPages,
  pagePath,
  renderSeoHead,
} from '@/content/seo'

describe('seo pages', () => {
  const pages = getSeoPages()

  it('generates one page per locale and route', () => {
    expect(pages).toHaveLength(8)
    const paths = pages.map((page) => page.path)
    expect(paths).toContain('/en')
    expect(paths).toContain('/en/pricing')
    expect(paths).toContain('/es')
    expect(paths).toContain('/es/guide')
  })

  it('uses unique titles and descriptions', () => {
    const titles = pages.map((page) => page.title)
    const descriptions = pages.map((page) => page.description)
    expect(new Set(titles).size).toBe(titles.length)
    expect(new Set(descriptions).size).toBe(descriptions.length)
  })

  it('keeps titles and descriptions within search-friendly lengths', () => {
    for (const page of pages) {
      expect(page.title.length).toBeLessThanOrEqual(70)
      expect(page.description.length).toBeGreaterThanOrEqual(70)
      expect(page.description.length).toBeLessThanOrEqual(180)
    }
  })

  it('builds canonical urls on the site url', () => {
    for (const page of pages) {
      expect(page.canonical).toBe(canonicalUrl(page.path))
      expect(page.canonical.startsWith(SITE_URL)).toBe(true)
      expect(page.canonical.endsWith('/')).toBe(true)
    }
  })

  it('includes en, es and x-default alternates', () => {
    const page = getSeoForPath('/en/pricing')
    expect(page).toBeTruthy()
    const hreflangs = page!.alternates.map((alternate) => alternate.hreflang).sort()
    expect(hreflangs).toEqual(['en', 'es', 'x-default'])
    for (const alternate of page!.alternates) {
      expect(alternate.href).toContain('/pricing/')
    }
  })

  it('normalizes paths with and without trailing slashes', () => {
    expect(getSeoForPath('/en/pricing/')?.path).toBe(pagePath('en', 'pricing'))
    expect(getSeoForPath('/es')?.path).toBe(pagePath('es', 'home'))
  })
})

describe('structured data', () => {
  it('adds SoftwareApplication and FAQPage on the home page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/en'))
    expect(jsonLd).toContain('SoftwareApplication')
    expect(jsonLd).toContain('FAQPage')
  })

  it('adds FAQPage on the pricing page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/es/pricing'))
    expect(jsonLd).toContain('FAQPage')
    expect(jsonLd).toContain('BreadcrumbList')
  })

  it('escapes closing script tags in rendered head tags', () => {
    const page = getSeoForPath('/en')!
    const head = renderSeoHead(page)
    expect(head).toContain('<title>')
    expect(head).toContain('rel="canonical"')
    expect(head).toContain('hreflang="es"')
    expect(head).toContain('og:title')
  })
})
