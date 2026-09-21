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

export const SEO_ROUTES: SeoRouteKey[] = [
  'home',
  'features',
  'pricing',
  'guide',
  'blog',
  'privacy',
  'terms',
  'legal',
]

const SEGMENTS: Record<SeoRouteKey, string> = {
  home: '',
  features: 'features',
  pricing: 'pricing',
  guide: 'guide',
  blog: 'blog',
  privacy: 'privacy',
  terms: 'terms',
  legal: 'legal',
}

export function pagePath(locale: SiteLocale, routeKey: SeoRouteKey): string {
  const segment = SEGMENTS[routeKey]
  return segment ? `/${locale}/${segment}` : `/${locale}`
}

export function canonicalUrl(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '')
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`
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
  blogSlug?: string
}

export function hreflangAlternates(routeKey: SeoRouteKey): AlternateLink[] {
  if (routeKey === 'home') {
    return [
      { hreflang: 'en', href: canonicalUrl('') },
      { hreflang: 'es', href: canonicalUrl(pagePath('es', 'home')) },
      { hreflang: 'x-default', href: canonicalUrl('') },
    ]
  }
  return [
    { hreflang: 'en', href: canonicalUrl(pagePath('en', routeKey)) },
    { hreflang: 'es', href: canonicalUrl(pagePath('es', routeKey)) },
    { hreflang: 'x-default', href: canonicalUrl(pagePath('en', routeKey)) },
  ]
}

export function getRootSeo(): PageSeo {
  return {
    path: '/',
    locale: 'en',
    routeKey: 'home',
    title: content.en.meta.home.title,
    description: content.en.meta.home.description,
    canonical: canonicalUrl(''),
    alternates: hreflangAlternates('home'),
    image: OG_IMAGE,
  }
}

export function getSeoPages(): PageSeo[] {
  const pages: PageSeo[] = []
  for (const locale of Object.keys(content) as SiteLocale[]) {
    for (const routeKey of SEO_ROUTES) {
      const path = pagePath(locale, routeKey)
      const meta = content[locale].meta[routeKey]
      const canonical =
        locale === 'en' && routeKey === 'home' ? canonicalUrl('') : canonicalUrl(path)
      pages.push({
        path,
        locale,
        routeKey,
        title: meta.title,
        description: meta.description,
        canonical,
        alternates: hreflangAlternates(routeKey),
        image: OG_IMAGE,
      })
    }

    for (const article of content[locale].blog.articles) {
      const path = `/${locale}/blog/${article.slug}`
      const canonical = canonicalUrl(path)
      pages.push({
        path,
        locale,
        routeKey: 'blog',
        title: `${article.title} — DriveCam`,
        description: article.description,
        canonical,
        alternates: [
          { hreflang: 'en', href: canonicalUrl(`/en/blog/${article.slug}`) },
          { hreflang: 'es', href: canonicalUrl(`/es/blog/${article.slug}`) },
          { hreflang: 'x-default', href: canonicalUrl(`/en/blog/${article.slug}`) },
        ],
        image: OG_IMAGE,
        blogSlug: article.slug,
      })
    }
  }
  return pages
}

export function getSeoForPath(path: string): PageSeo | undefined {
  const normalized = path.replace(/\/+$/, '') || '/'
  if (normalized === '/') {
    return getRootSeo()
  }
  return getSeoPages().find((page) => page.path === normalized)
}

function organization(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DriveCam',
    url: SITE_URL,
    logo: `${SITE_URL}/img/app-icon.png`,
    description:
      'DriveCam turns your smartphone into an offline, privacy-first dash cam and car camera recorder.',
    email: 'info@drivecam.store',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Axis Labs',
      url: 'https://axislabs.eu',
    },
    sameAs: ['https://github.com/erperejildo/drivecam-web', 'https://axislabs.eu'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@drivecam.store',
      contactType: 'customer support',
    },
  }
}

function webSite(seo: PageSeo): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DriveCam',
    url: SITE_URL,
    description: seo.description,
    inLanguage: ['en', 'es'],
    publisher: {
      '@type': 'Organization',
      name: 'Axis Labs',
      url: 'https://axislabs.eu',
    },
  }
}

function breadcrumb(seo: PageSeo): Record<string, unknown> {
  const site = content[seo.locale]
  const items: { name: string; url: string }[] = [{ name: 'DriveCam', url: canonicalUrl('') }]
  if (seo.blogSlug) {
    const article = site.blog.articles.find((a) => a.slug === seo.blogSlug)
    items.push(
      { name: site.blog.title, url: canonicalUrl(`/${seo.locale}/blog`) },
      { name: article ? article.title : seo.title, url: seo.canonical },
    )
  } else {
    items.push({ name: site.meta[seo.routeKey].title, url: seo.canonical })
  }
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

function blogCollection(seo: PageSeo, site: (typeof content)[SiteLocale]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: site.blog.title,
    description: site.blog.description,
    url: seo.canonical,
    publisher: {
      '@type': 'Organization',
      name: 'DriveCam',
      url: SITE_URL,
    },
    blogPost: site.blog.articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      url: canonicalUrl(`/${seo.locale}/blog/${article.slug}`),
    })),
  }
}

function blogPosting(
  seo: PageSeo,
  site: (typeof content)[SiteLocale],
  slug: string,
): Record<string, unknown> | undefined {
  const article = site.blog.articles.find((a) => a.slug === slug)
  if (!article) return undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': seo.canonical,
    },
    author: {
      '@type': 'Organization',
      name: 'DriveCam',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DriveCam',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/img/app-icon.png`,
      },
    },
    image: OG_IMAGE,
    keywords: article.keywords.join(', '),
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

function howTo(seo: PageSeo, site: (typeof content)[SiteLocale]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: site.guide.title,
    description: site.guide.description,
    image: OG_IMAGE,
    step: site.guide.sections.map((section, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: section.title,
      text: section.paragraphs.join(' '),
      itemListElement: section.bullets.map((b) => ({
        '@type': 'HowToDirection',
        text: b,
      })),
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
    items.push(organization(), webSite(seo), softwareApplication(seo), faqPage(site.faq.items))
  }
  if (seo.routeKey === 'guide') {
    items.push(howTo(seo, site))
  }
  if (seo.routeKey === 'pricing') {
    items.push(faqPage(site.pricing.faq))
  }
  if (seo.routeKey === 'blog') {
    if (seo.blogSlug) {
      const article = site.blog.articles.find((a) => a.slug === seo.blogSlug)
      const postSchema = blogPosting(seo, site, seo.blogSlug)
      if (postSchema) items.push(postSchema)
      if (article?.faqs && article.faqs.length > 0) {
        items.push(faqPage(article.faqs))
      }
    } else {
      items.push(blogCollection(seo, site))
    }
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
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:alt" content="${escapeHtml(seo.title)}" />`,
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
