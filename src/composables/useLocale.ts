import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { content } from '@/content'
import { DEFAULT_LOCALE } from '@/content/seo'
import type { SiteLocale } from '@/content/types'

const STORAGE_KEY = 'drivecam.locale'

export function isSiteLocale(value: unknown): value is SiteLocale {
  return value === 'en' || value === 'es'
}

export function useLocale() {
  const route = useRoute()

  const locale = computed<SiteLocale>(() => {
    const param = route.params.locale
    return isSiteLocale(param) ? param : DEFAULT_LOCALE
  })

  const site = computed(() => content[locale.value])

  return { locale, site }
}

export function persistLocale(locale: SiteLocale): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // storage can be unavailable (private mode); the redirect falls back to browser language
  }
}
