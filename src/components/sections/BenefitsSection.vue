<script setup lang="ts">
import SectionIntro from '../shared/SectionIntro.vue'
import IconGlyph from '../shared/IconGlyph.vue'
import { useLocale } from '@/composables/useLocale'

const { site } = useLocale()
</script>

<template>
  <section class="section benefits">
    <div class="shell">
      <SectionIntro
        v-reveal
        :eyebrow="site.benefits.eyebrow"
        :title="site.benefits.title"
        :description="site.benefits.description"
      />

      <div class="benefits__grid">
        <article
          v-for="(item, index) in site.benefits.items"
          :key="item.title"
          v-reveal="index * 90"
          class="benefits__card"
        >
          <span class="benefits__icon">
            <IconGlyph :name="item.icon" :size="22" />
          </span>
          <h3 class="benefits__title">{{ item.title }}</h3>
          <p class="benefits__body">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.benefits__grid {
  display: grid;
  gap: var(--space-s);
  margin-top: var(--space-xl);
  grid-template-columns: 1fr;

  @include bp.from(bp.$bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.benefits__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: var(--card-padding);
  border-radius: var(--radius-l);
  border: 1px solid var(--color-border);
  background: linear-gradient(180deg, var(--color-card-hover), var(--color-card));
  transition:
    border-color var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);

  &:hover {
    border-color: var(--color-accent-border);
    transform: translateY(-0.25rem);
  }
}

.benefits__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  margin-bottom: var(--space-2xs);
  border-radius: var(--radius-m);
  border: 1px solid var(--color-accent-border);
  background: var(--color-accent-soft);
  color: var(--color-accent-strong);
}

.benefits__title {
  font-size: var(--text-card-title);
}

.benefits__body {
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}
</style>
