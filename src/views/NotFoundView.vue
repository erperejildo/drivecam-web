<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import AppButton from '@/components/shared/AppButton.vue'

const { locale, site } = useLocale()
</script>

<template>
  <main class="not-found">
    <div class="shell not-found__shell">
      <p class="not-found__code mono" aria-hidden="true">404</p>
      <h1 class="not-found__title">{{ site.notFound.title }}</h1>
      <p class="not-found__description">{{ site.notFound.description }}</p>
      <AppButton size="l" icon="arrow" :to="`/${locale}`">{{ site.notFound.cta }}</AppButton>
    </div>
  </main>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding-top: calc(var(--header-height) + var(--space-2xl));
  padding-bottom: var(--space-2xl);
}

.not-found__shell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  max-width: var(--container-tight);
  text-align: center;
}

.not-found__code {
  font-size: clamp(4rem, 3rem + 6vw, 7rem);
  line-height: 1;
  color: var(--color-accent);
  text-shadow: var(--shadow-glow);
}

.not-found__title {
  font-size: var(--text-h2);
}

.not-found__description {
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}
</style>
