import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getSeoForPath } from '@/content/seo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertCanonical(href: string): void {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function upsertAlternates(alternates: { hreflang: string; href: string }[]): void {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove())
  for (const alt of alternates) {
    const tag = document.createElement('link')
    tag.setAttribute('rel', 'alternate')
    tag.setAttribute('hreflang', alt.hreflang)
    tag.setAttribute('href', alt.href)
    document.head.appendChild(tag)
  }
}

export function useSeo(): void {
  const route = useRoute()

  watchEffect(() => {
    if (typeof document === 'undefined') return
    const seo = getSeoForPath(route.path)
    if (!seo) {
      document.title = 'DriveCam'
      return
    }
    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', seo.canonical)
    upsertMeta('property', 'og:image', seo.image)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', seo.image)
    upsertCanonical(seo.canonical)
    upsertAlternates(seo.alternates)
  })
}
