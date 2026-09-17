<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '../shared/AppButton.vue'
import IconGlyph from '../shared/IconGlyph.vue'
import { useLocale } from '@/composables/useLocale'

const { locale, site } = useLocale()

const downloadTo = computed(() => ({ path: `/${locale.value}`, hash: '#download' }))
const pricingTo = computed(() => `/${locale.value}/pricing`)
</script>

<template>
  <section class="hero">
    <div class="hero__backdrop" aria-hidden="true">
      <div class="grid-backdrop hero__grid" />
      <div class="hero__glow" />
    </div>

    <div class="shell hero__shell">
      <div v-reveal class="hero__copy">
        <span class="eyebrow">{{ site.hero.eyebrow }}</span>
        <h1 class="hero__title">
          {{ site.hero.title }}
          <span class="hero__accent">{{ site.hero.titleAccent }}</span>
        </h1>
        <p class="lead hero__description">{{ site.hero.description }}</p>

        <div class="hero__actions">
          <AppButton :to="downloadTo" size="l" icon="arrow">{{ site.hero.primaryCta }}</AppButton>
          <AppButton :to="pricingTo" variant="secondary" size="l">
            {{ site.hero.secondaryCta }}
          </AppButton>
        </div>

        <ul class="hero__badges">
          <li v-for="badge in site.hero.badges" :key="badge" class="hero__badge">
            <IconGlyph name="check" :size="14" />
            <span>{{ badge }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  overflow: hidden;
  padding-top: calc(var(--header-height) + var(--space-2xl));
  padding-bottom: var(--section-space);
}

.hero__backdrop {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__grid {
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, #000 20%, transparent 75%);
}

.hero__glow {
  position: absolute;
  inset: -30% -10% auto;
  height: 120%;
  background: var(--gradient-hero);
}

.hero__shell {
  position: relative;
  max-width: var(--container-narrow);
  margin-inline: auto;
  text-align: center;
}

.hero__copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  align-items: center;
}

.hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  max-width: 20ch;
  text-wrap: balance;
}

.hero__accent {
  color: var(--color-accent);
}

.hero__description {
  max-width: 42rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs) var(--space-m);
  padding: 0;
  margin: 0;
  list-style: none;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: var(--text-small);
  color: var(--color-ink-muted);

  :deep(svg) {
    color: var(--color-accent);
  }
}
</style>
