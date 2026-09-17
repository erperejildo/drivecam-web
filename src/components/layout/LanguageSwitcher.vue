<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import { pagePath } from '@/content/seo'
import type { SeoRouteKey } from '@/content/seo'
import type { SiteLocale } from '@/content'

const route = useRoute()
const { locale } = useLocale()

const routeKey = computed<SeoRouteKey>(() => {
  const name = route.name
  if (name === 'features' || name === 'pricing' || name === 'guide' || name === 'legal') return name
  return 'home'
})

const options = computed(() =>
  (['en', 'es'] as SiteLocale[]).map((code) => ({
    code,
    to: pagePath(code, routeKey.value),
    current: code === locale.value,
  })),
)
</script>

<template>
  <nav class="language-switcher" aria-label="Language">
    <RouterLink
      v-for="option in options"
      :key="option.code"
      class="language-switcher__pill"
      :class="{ 'language-switcher__pill--current': option.current }"
      :to="option.to"
      :aria-current="option.current ? 'true' : undefined"
    >
      {{ option.code.toUpperCase() }}
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.language-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  padding: 0.15rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border-strong);
  background: var(--color-card);
}

.language-switcher__pill {
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-pill);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--color-ink-soft);
  text-decoration: none;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);

  &:hover {
    color: var(--color-ink);
  }
}

.language-switcher__pill--current {
  background: var(--color-accent);
  color: var(--color-ink);
}
</style>
