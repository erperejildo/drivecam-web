<script setup lang="ts">
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import DownloadSection from '@/components/sections/DownloadSection.vue'
import { useLocale } from '@/composables/useLocale'

const { site } = useLocale()
</script>

<template>
  <main class="features-view">
    <section class="features-hero">
      <div class="shell features-hero__shell">
        <span class="eyebrow" v-reveal>{{ site.features.eyebrow }}</span>
        <h1 class="features-hero__title" v-reveal="60">{{ site.features.title }}</h1>
        <p class="features-hero__description" v-reveal="120">{{ site.features.description }}</p>
      </div>
    </section>

    <FeaturesSection />

    <DownloadSection />
  </main>
</template>

<style scoped lang="scss">
.features-hero {
  position: relative;
  padding-top: calc(var(--header-height) + var(--space-2xl));
  padding-bottom: var(--space-xl);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-hero);
    pointer-events: none;
  }
}

.features-hero__shell {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  max-width: var(--container-narrow);
}

.features-hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  text-wrap: balance;
}

.features-hero__description {
  color: var(--color-ink-muted);
  font-size: var(--text-lead);
  line-height: var(--line-body);
}
</style>
