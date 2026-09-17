import type { RouteLocationRaw } from 'vue-router'
import type { SiteLocale } from '@/content'

export function localizeTo(to: string, locale: SiteLocale): RouteLocationRaw {
  const [pathPart, hash] = to.split('#')
  const clean = (pathPart ?? '').replace(/\/+$/g, '')
  const path = clean === '' || clean === '/' ? `/${locale}` : `/${locale}${clean}`
  return hash ? { path, hash: `#${hash}` } : path
}
