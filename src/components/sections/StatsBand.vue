<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'

const { site } = useLocale()
</script>

<template>
  <section class="stats-band">
    <div class="shell">
      <span v-reveal class="eyebrow stats-band__eyebrow">{{ site.stats.eyebrow }}</span>
      <dl class="stats-band__grid">
        <div
          v-for="(stat, index) in site.stats.items"
          :key="stat.label"
          v-reveal="index * 80"
          class="stats-band__item"
        >
          <dt class="stats-band__value">{{ stat.value }}</dt>
          <dd class="stats-band__label">{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.stats-band {
  position: relative;
  padding-block: var(--space-xl);
  border-block: 1px solid var(--color-border);
  background: var(--color-surface);
}

.stats-band__eyebrow {
  display: block;
  text-align: center;
  margin-bottom: var(--space-m);
}

.stats-band__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-m) var(--space-s);
  margin: 0;

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.stats-band__item {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: center;
  text-align: center;
}

.stats-band__value {
  font-family: var(--font-mono);
  font-size: var(--text-stat);
  font-weight: 600;
  line-height: 1;
  color: var(--color-ink);
}

.stats-band__label {
  margin: 0;
  max-width: 16rem;
  font-size: var(--text-small);
  color: var(--color-ink-soft);
  line-height: 1.5;
}
</style>
