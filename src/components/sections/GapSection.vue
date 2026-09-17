<script setup lang="ts">
import SectionIntro from '../shared/SectionIntro.vue'
import { useLocale } from '@/composables/useLocale'

const { site } = useLocale()

function pad(index: number) {
  return String(index + 1).padStart(2, '0')
}
</script>

<template>
  <section id="why" class="section gap">
    <div class="shell">
      <SectionIntro
        v-reveal
        :eyebrow="site.gap.eyebrow"
        :title="site.gap.title"
        :description="site.gap.description"
      />

      <div class="gap__grid">
        <article
          v-for="(point, index) in site.gap.points"
          :key="point.title"
          v-reveal="index * 90"
          class="gap__card"
        >
          <span class="gap__index mono">{{ pad(index) }}</span>
          <h3 class="gap__card-title">{{ point.title }}</h3>
          <p class="gap__card-body">{{ point.description }}</p>
        </article>
      </div>

      <p v-reveal class="gap__closing">{{ site.gap.closing }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.gap__grid {
  display: grid;
  gap: var(--space-s);
  margin-top: var(--space-xl);
  grid-template-columns: 1fr;

  @include bp.from(bp.$bp-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gap__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: var(--card-padding);
  border-radius: var(--radius-l);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  transition:
    border-color var(--duration-normal) var(--ease-out),
    background-color var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);

  &:hover {
    border-color: var(--color-border-strong);
    background: var(--color-card-hover);
    transform: translateY(-0.25rem);
  }
}

.gap__index {
  font-size: var(--text-small);
  color: var(--color-accent);
}

.gap__card-title {
  font-size: var(--text-card-title);
}

.gap__card-body {
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.gap__closing {
  max-width: var(--container-narrow);
  margin: var(--space-xl) auto 0;
  padding-left: var(--space-m);
  border-left: 2px solid var(--color-accent);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 500;
  line-height: 1.45;
  color: var(--color-ink);
}
</style>
