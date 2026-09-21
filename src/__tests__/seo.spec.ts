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
    expect(pages).toHaveLength(22)
    const paths = pages.map((page) => page.path)
    expect(paths).toContain('/en')
    expect(paths).toContain('/en/features')
    expect(paths).toContain('/en/pricing')
    expect(paths).toContain('/en/blog')
    expect(paths).toContain('/en/blog/dashcam-accident-court-evidence')
    expect(paths).toContain('/en/privacy')
    expect(paths).toContain('/en/terms')
    expect(paths).toContain('/es')
    expect(paths).toContain('/es/guide')
    expect(paths).toContain('/es/blog')
    expect(paths).toContain('/es/blog/best-dashcams-comparison-save-money')
    expect(paths).toContain('/es/privacy')
    expect(paths).toContain('/es/terms')
  })

  it('uses unique titles and descriptions', () => {
    for (const locale of ['en', 'es'] as const) {
      const titles = pages.filter((page) => page.locale === locale).map((page) => page.title)
      expect(new Set(titles).size).toBe(titles.length)
    }
    const descriptions = pages.map((page) => page.description)
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
      const expectedCanonical = page.path === '/en' ? canonicalUrl('') : canonicalUrl(page.path)
      expect(page.canonical).toBe(expectedCanonical)
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

describe('root seo', () => {
  it('provides self-referencing canonical on root', () => {
    const root = getSeoForPath('/')
    expect(root).toBeDefined()
    expect(root?.canonical).toBe(`${SITE_URL}/`)
    expect(root?.locale).toBe('en')
    expect(root?.title).toBeTruthy()
    expect(root?.description).toBeTruthy()
  })
})

describe('structured data', () => {
  it('adds Organization, WebSite, SoftwareApplication and FAQPage on the home page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/'))
    expect(jsonLd).toContain('Organization')
    expect(jsonLd).toContain('WebSite')
    expect(jsonLd).toContain('SoftwareApplication')
    expect(jsonLd).toContain('FAQPage')
  })

  it('adds HowTo and BreadcrumbList on the guide page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/en/guide'))
    expect(jsonLd).toContain('HowTo')
    expect(jsonLd).toContain('BreadcrumbList')
  })

  it('adds FAQPage on the pricing page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/es/pricing'))
    expect(jsonLd).toContain('FAQPage')
    expect(jsonLd).toContain('BreadcrumbList')
  })

  it('adds Blog and BreadcrumbList on the blog hub page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/en/blog'))
    expect(jsonLd).toContain('Blog')
    expect(jsonLd).toContain('BreadcrumbList')
  })

  it('adds BlogPosting, BreadcrumbList, and FAQPage on single article page', () => {
    const jsonLd = JSON.stringify(getJsonLd('/en/blog/dashcam-accident-court-evidence'))
    expect(jsonLd).toContain('BlogPosting')
    expect(jsonLd).toContain('BreadcrumbList')
    expect(jsonLd).toContain('FAQPage')
  })

  it('escapes closing script tags in rendered head tags', () => {
    const page = getSeoForPath('/en')!
    const head = renderSeoHead(page)
    expect(head).toContain('<title>')
    expect(head).toContain('rel="canonical"')
    expect(head).toContain('hreflang="es"')
    expect(head).toContain('og:title')
    expect(head).toContain('og:image:width')
  })
})
