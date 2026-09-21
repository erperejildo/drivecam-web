import { describe, expect, it } from 'vitest'
import { content, locales } from '@/content'
import type { SiteContent, SiteLocale } from '@/content'

function collectShape(value: unknown, path: string, out: Map<string, string>) {
  if (Array.isArray(value)) {
    out.set(path, `array:${value.length}`)
    value.forEach((item, index) => collectShape(item, `${path}[${index}]`, out))
    return
  }
  if (value && typeof value === 'object') {
    out.set(path, 'object')
    for (const [key, child] of Object.entries(value)) {
      collectShape(child, path ? `${path}.${key}` : key, out)
    }
    return
  }
  out.set(path, typeof value)
}

describe('content parity', () => {
  const primary: SiteLocale = locales[0] ?? 'en'
  const rest = locales.slice(1)
  const primaryShape = new Map<string, string>()
  collectShape(content[primary], '', primaryShape)

  it('defines every locale', () => {
    expect(locales.length).toBeGreaterThanOrEqual(2)
    for (const locale of locales) {
      expect(content[locale]).toBeTruthy()
      expect(content[locale].locale).toBe(locale)
    }
  })

  for (const locale of rest) {
    it(`locale ${locale} mirrors the ${primary} structure`, () => {
      const shape = new Map<string, string>()
      collectShape(content[locale], '', shape)

      const missing = [...primaryShape.keys()].filter((key) => !shape.has(key))
      const extra = [...shape.keys()].filter((key) => !primaryShape.has(key))
      expect(missing).toEqual([])
      expect(extra).toEqual([])

      for (const [key, kind] of primaryShape) {
        expect(shape.get(key)).toBe(kind)
      }
    })
  }

  it('keeps navigation links non-empty in every locale', () => {
    for (const locale of locales) {
      const site = content[locale]
      const allLinks = [
        ...site.header.links.map((link) => ({ label: link.label, target: link.to })),
        ...site.footer.links.map((link) => ({ label: link.label, target: link.to })),
        ...site.footer.legalLinks.map((link) => ({ label: link.label, target: link.to })),
        ...site.footer.stores.map((store) => ({ label: store.label, target: store.href })),
      ]
      for (const link of allLinks) {
        expect(link.label.length).toBeGreaterThan(0)
        expect(link.target.length).toBeGreaterThan(0)
      }
    }
  })

  it('provides meta for every route key in every locale', () => {
    const routeKeys = [
      'home',
      'features',
      'pricing',
      'guide',
      'privacy',
      'terms',
      'legal',
      'notFound',
    ] as const
    for (const locale of locales) {
      const site: SiteContent = content[locale]
      for (const key of routeKeys) {
        expect(site.meta[key].title.length).toBeGreaterThan(0)
        expect(site.meta[key].description.length).toBeGreaterThan(0)
      }
    }
  })

  it('keeps pricing plan arrays aligned across locales', () => {
    const planSets = locales.map((locale) => content[locale].pricing.plans)
    const primaryPlans = planSets[0] ?? []
    for (const plans of planSets.slice(1)) {
      expect(plans.map((plan) => plan.key)).toEqual(primaryPlans.map((plan) => plan.key))
    }
  })
})
