<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { persistLocale, useLocale } from '@/composables/useLocale'
import { useSeo } from '@/composables/useSeo'

const { locale } = useLocale()
const skipLabel = computed(() =>
  locale.value === 'es' ? 'Saltar al contenido' : 'Skip to content',
)

useSeo()

watchEffect(() => {
  persistLocale(locale.value)
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale.value
  }
})
</script>

<template>
  <a class="skip-link" href="#main">{{ skipLabel }}</a>
  <SiteHeader />
  <main id="main" tabindex="-1">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style scoped>
main:focus {
  outline: none;
}
</style>
