import { computed, onMounted, ref } from 'vue'
import { useLocale } from './useLocale'
import { FALLBACK_PRICE, LIFETIME_PRICES, formatPrice } from '@/lib/prices'

interface GeoEndpoint {
  url: string
  extract: (data: Record<string, unknown>) => string | null
}

const GEO_ENDPOINTS: GeoEndpoint[] = [
  {
    url: 'https://api.country.is/',
    extract: (data) => (typeof data.country === 'string' ? data.country : null),
  },
  {
    url: 'https://get.geojs.io/v1/ip/country.json',
    extract: (data) => (typeof data.country === 'string' ? data.country : null),
  },
  {
    url: 'https://ipwho.is/',
    extract: (data) =>
      data.success !== false && typeof data.country_code === 'string' ? data.country_code : null,
  },
]

const GEO_TIMEOUT_MS = 3500

async function detectCountryCode(): Promise<string | null> {
  for (const endpoint of GEO_ENDPOINTS) {
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), GEO_TIMEOUT_MS)
      const response = await fetch(endpoint.url, { signal: controller.signal })
      clearTimeout(timer)
      if (!response.ok) continue
      const data = (await response.json()) as Record<string, unknown>
      const code = endpoint.extract(data)
      if (code) return code.toUpperCase()
    } catch {
      // Country lookup is best-effort — fall through to the next endpoint.
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

  // Depends only on the visitor's country, never on the site language.
  const price = computed(() => {
    const value = (countryCode.value && LIFETIME_PRICES[countryCode.value]) || FALLBACK_PRICE
    return formatPrice(value, locale.value)
  })

  return { price }
}
