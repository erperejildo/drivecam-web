import { content } from './index'
import type { RouteKey, SiteLocale } from './types'
import { STORE_LINKS } from '@/lib/mailto'

// Keep in sync with the `base` option in vite.config.ts
export const BASE_PATH = '/'

export const SITE_URL = 'https://drivecam.store'

export const DEFAULT_LOCALE: SiteLocale = 'en'

// TODO: replace with a branded 1200x630 image (currently a placeholder copy of an app screenshot)
export const OG_IMAGE = `${SITE_URL}/img/og-image.png`

export type SeoRouteKey = Exclude<RouteKey, 'notFound'>

export const SEO_ROUTES: SeoRouteKey[] = ['home', 'features', 'pricing', 'guide', 'legal']

const SEGMENTS: Record<SeoRouteKey, string> = {
  home: '',
  features: 'features',
  pricing: 'pricing',
  guide: 'guide',
  legal: 'legal',
}

export function pagePath(locale: SiteLocale, routeKey: SeoRouteKey): string {
  const segment = SEGMENTS[routeKey]
  return segment ? `/${locale}/${segment}` : `/${locale}`
}

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}/`
}

export interface AlternateLink {
  hreflang: string
  href: string
}

export interface PageSeo {
  path: string
  locale: SiteLocale
  routeKey: SeoRouteKey
  title: string
  description: string
  canonical: string
  alternates: AlternateLink[]
  image: string
}

export function hreflangAlternates(routeKey: SeoRouteKey): AlternateLink[] {
  return [
    { hreflang: 'en', href: canonicalUrl(pagePath('en', routeKey)) },
    { hreflang: 'es', href: canonicalUrl(pagePath('es', routeKey)) },
    { hreflang: 'x-default', href: canonicalUrl(pagePath('en', routeKey)) },
  ]
}

export function getSeoPages(): PageSeo[] {
  const pages: PageSeo[] = []
  for (const locale of Object.keys(content) as SiteLocale[]) {
    for (const routeKey of SEO_ROUTES) {
      const path = pagePath(locale, routeKey)
      const meta = content[locale].meta[routeKey]
      pages.push({
        path,
        locale,
        routeKey,
        title: meta.title,
        description: meta.description,
        canonical: canonicalUrl(path),
        alternates: hreflangAlternates(routeKey),
        image: OG_IMAGE,
      })
    }
  }
  return pages
}

export function getSeoForPath(path: string): PageSeo | undefined {
  const normalized = path.replace(/\/+$/, '') || '/'
  return getSeoPages().find((page) => page.path === normalized)
}

function breadcrumb(seo: PageSeo): Record<string, unknown> {
  const items = [
    { name: 'DriveCam', url: canonicalUrl(pagePath(seo.locale, 'home')) },
    { name: content[seo.locale].meta[seo.routeKey].title, url: seo.canonical },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

function faqPage(items: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

function softwareApplication(seo: PageSeo): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DriveCam',
    alternateName: 'DriveCam: Car Camera Recorder',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS, Android',
    description: seo.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    downloadUrl: [STORE_LINKS.android, STORE_LINKS.ios],
  }
}

export function getJsonLd(path: string): Record<string, unknown>[] {
  const seo = getSeoForPath(path)
  if (!seo) return []
  const site = content[seo.locale]
  const items: Record<string, unknown>[] = []
  if (seo.routeKey !== 'home') items.push(breadcrumb(seo))
  if (seo.routeKey === 'home') {
    items.push(softwareApplication(seo), faqPage(site.faq.items))
  }
  if (seo.routeKey === 'pricing') {
    items.push(faqPage(site.pricing.faq))
  }
  return items
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function renderSeoHead(seo: PageSeo): string {
  const tags: string[] = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    `<link rel="canonical" href="${seo.canonical}" />`,
    ...seo.alternates.map(
      (alt) => `<link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`,
    ),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="DriveCam" />`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta property="og:url" content="${seo.canonical}" />`,
    `<meta property="og:image" content="${seo.image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta name="twitter:image" content="${seo.image}" />`,
  ]
  for (const json of getJsonLd(seo.path)) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(json).replace(/</g, '\\u003c')}</script>`,
    )
  }
  return tags.join('\n    ')
}
