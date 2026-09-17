<script setup lang="ts">
import StoreButton from '../shared/StoreButton.vue'
import { useLocale } from '@/composables/useLocale'
import { images } from '@/lib/images'

const { site } = useLocale()
</script>

<template>
  <section id="download" class="section download">
    <div class="shell">
      <div v-reveal class="download__panel">
        <div class="download__grid-backdrop grid-backdrop" aria-hidden="true" />

        <img
          class="download__icon"
          :src="images.appIcon"
          alt="DriveCam app icon"
          width="88"
          height="88"
          loading="lazy"
        />

        <span class="eyebrow">{{ site.download.eyebrow }}</span>
        <h2 class="download__title">{{ site.download.title }}</h2>
        <p class="lead download__description">{{ site.download.description }}</p>

        <div class="download__stores">
          <StoreButton store="google" />
          <StoreButton store="apple" />
        </div>

        <p class="download__note mono">{{ site.download.note }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.download__panel {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  padding: var(--space-2xl) var(--gutter);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-accent-border);
  background:
    radial-gradient(ellipse 70% 90% at 50% 0%, rgba(244, 67, 54, 0.16), transparent 70%),
    var(--color-surface);
  text-align: center;
}

.download__grid-backdrop {
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, #000 10%, transparent 80%);
  pointer-events: none;
}

.download__icon {
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: var(--radius-l);
  box-shadow: var(--shadow-card);
}

.download__title {
  position: relative;
  font-size: var(--text-h2);
  line-height: var(--line-tight);
  max-width: 24ch;
}

.download__description {
  position: relative;
  max-width: 38rem;
}

.download__stores {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
  margin-top: var(--space-2xs);
}

.download__note {
  position: relative;
  font-size: var(--text-small);
  color: var(--color-ink-soft);
}
</style>
