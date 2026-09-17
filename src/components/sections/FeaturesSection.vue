<script setup lang="ts">
import SectionIntro from '../shared/SectionIntro.vue'
import IconGlyph from '../shared/IconGlyph.vue'
import { useLocale } from '@/composables/useLocale'

const { site } = useLocale()
</script>

<template>
  <section id="features" class="section features">
    <div class="shell">
      <SectionIntro
        v-reveal
        :eyebrow="site.features.eyebrow"
        :title="site.features.title"
        :description="site.features.description"
      />

      <div class="features__grid">
        <article
          v-for="(item, index) in site.features.items"
          :key="item.title"
          v-reveal="(index % 4) * 70"
          class="features__item"
        >
          <span class="features__icon">
            <IconGlyph :name="item.icon" :size="18" />
          </span>
          <div class="features__text">
            <h3 class="features__title">{{ item.title }}</h3>
            <p class="features__body">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.features__grid {
  display: grid;
  gap: var(--space-xs);
  margin-top: var(--space-xl);
  grid-template-columns: 1fr;

  @include bp.from(bp.$bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: repeat(3, 1fr);
  }

  @include bp.from(bp.$bp-xl) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.features__item {
  display: flex;
  gap: var(--space-xs);
  padding: var(--space-s) var(--space-m);
  border-radius: var(--radius-m);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out);

  &:hover {
    border-color: var(--color-border-strong);
    background: var(--color-card-hover);
  }
}

.features__icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-accent);
  padding-top: 0.2rem;
}

.features__text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.features__title {
  font-size: var(--text-small);
  font-weight: 600;
}

.features__body {
  color: var(--color-ink-soft);
  font-size: var(--text-small);
  line-height: 1.55;
}
</style>
