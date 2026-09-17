import { computed, onMounted, ref } from 'vue'
import { useLocale } from './useLocale'
import {
  DEFAULT_PRICE_BY_LOCALE,
  LIFETIME_PRICES,
  REST_PRICE_BY_LOCALE,
  formatPrice,
} from '@/lib/prices'
import type { PriceValue } from '@/lib/prices'

const GEO_ENDPOINTS = ['https://ipwho.is/', 'https://ipapi.co/json/']
const GEO_TIMEOUT_MS = 4000

interface GeoResponse {
  success?: boolean
  country_code?: string
}

async function detectCountryCode(): Promise<string | null> {
  for (const endpoint of GEO_ENDPOINTS) {
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), GEO_TIMEOUT_MS)
      const response = await fetch(endpoint, { signal: controller.signal })
      clearTimeout(timer)
      if (!response.ok) continue
      const data = (await response.json()) as GeoResponse
      if (data.success !== false && data.country_code) return data.country_code.toUpperCase()
    } catch {
      // Country lookup is best-effort — fall back to locale defaults.
    }
  }
  return null
}

export function useLifetimePrice() {
  const { locale } = useLocale()
  const countryCode = ref<string | null>(null)

  onMounted(async () => {
    if (typeof fetch !== 'function') return
    countryCode.value = await detectCountryCode()
  })

  const price = computed(() => {
    const code = countryCode.value
    const value: PriceValue = code
      ? (LIFETIME_PRICES[code] ?? REST_PRICE_BY_LOCALE[locale.value])
      : DEFAULT_PRICE_BY_LOCALE[locale.value]
    return formatPrice(value, locale.value)
  })

  return { price }
}
