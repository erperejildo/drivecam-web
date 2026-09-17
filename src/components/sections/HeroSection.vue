<script setup lang="ts">
import { computed } from 'vue'
import AppButton from '../shared/AppButton.vue'
import IconGlyph from '../shared/IconGlyph.vue'
import { useLocale } from '@/composables/useLocale'
import { images } from '@/lib/images'

const { locale, site } = useLocale()

const downloadTo = computed(() => ({ path: `/${locale.value}`, hash: '#download' }))
const pricingTo = computed(() => `/${locale.value}/pricing`)

const screenshotAlt = computed(() =>
  locale.value === 'es'
    ? 'Pantalla de grabación de DriveCam con velocímetro y GPS'
    : 'DriveCam recording screen with speed readout and GPS',
)
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

      <div v-reveal="160" class="hero__visual">
        <div class="hero__phone">
          <div class="hero__screen">
            <img
              class="hero__screenshot"
              :src="images.appLaunch"
              :alt="screenshotAlt"
              width="640"
              height="1387"
              fetchpriority="high"
            />

            <div class="hud" aria-hidden="true">
              <div class="hud__row hud__row--top">
                <span class="hud__rec">
                  <span class="hud__dot" />
                  <span class="hud__rec-label">{{ site.hero.hud.rec }}</span>
                  <span class="hud__timer mono">{{ site.hero.hud.timer }}</span>
                </span>
                <span class="hud__gps">
                  <span class="hud__gps-dot" />
                  <span class="mono">{{ site.hero.hud.status }}</span>
                </span>
              </div>

              <div class="hud__row hud__row--bottom">
                <div class="hud__speed">
                  <span class="hud__speed-value mono">{{ site.hero.hud.speed }}</span>
                  <span class="hud__speed-unit mono">{{ site.hero.hud.speedUnit }}</span>
                  <span class="hud__limit mono">{{ site.hero.hud.limit }}</span>
                </div>
                <div class="hud__meta">
                  <span class="mono">{{ site.hero.hud.coords }}</span>
                  <span class="mono">{{ site.hero.hud.stamp }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

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
  display: grid;
  gap: var(--space-2xl);
  align-items: center;

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: 1.05fr 0.95fr;
    gap: var(--space-xl);
  }
}

.hero__copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  align-items: flex-start;
}

.hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  max-width: 15ch;
}

.hero__accent {
  color: var(--color-accent);
}

.hero__description {
  max-width: 34rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.hero__badges {
  display: flex;
  flex-wrap: wrap;
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

.hero__visual {
  display: flex;
  justify-content: center;

  @include bp.from(bp.$bp-lg) {
    justify-content: flex-end;
  }
}

.hero__phone {
  position: relative;
  width: min(21rem, 100%);
}

.hero__phone::before {
  content: '';
  position: absolute;
  inset: 15% -20% -12%;
  background: var(--gradient-hero);
  filter: blur(2.5rem);
}

.hero__screen {
  position: relative;
  aspect-ratio: 9 / 19;
  border-radius: calc(var(--radius-xl) + 0.75rem);
  border: 1px solid var(--color-border-strong);
  background: var(--color-bg-deep);
  box-shadow: var(--shadow-phone);
  padding: 0.5rem;
  overflow: hidden;
}

.hero__screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-xl);
}

.hero__screen::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(0, 0, 0, 0.65) 100%);
  pointer-events: none;
}

.hud {
  position: absolute;
  inset: 1rem 1.1rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  text-shadow: 0 1px 0.5rem rgba(0, 0, 0, 0.8);
}

.hud__row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2xs);
}

.hud__rec {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-pill);
  background: var(--color-accent-soft);
  border: 1px solid var(--color-accent-border);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--color-ink);
}

.hud__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: var(--radius-pill);
  background: var(--color-accent);
  animation: hud-pulse 1.4s ease-in-out infinite;
}

.hud__timer {
  font-size: 0.6875rem;
  color: var(--color-ink-muted);
}

.hud__gps {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.625rem;
  letter-spacing: 0.12em;
  color: var(--color-ink-muted);
}

.hud__gps-dot {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: var(--radius-pill);
  background: var(--color-success);
}

.hud__speed {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
}

.hud__speed-value {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-ink);
}

.hud__speed-unit {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--color-ink-muted);
}

.hud__limit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  margin-left: 0.35rem;
  border-radius: var(--radius-pill);
  border: 2px solid var(--color-accent);
  background: rgba(255, 255, 255, 0.92);
  color: #111;
  font-size: 0.8125rem;
  font-weight: 600;
}

.hud__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 0.625rem;
  letter-spacing: 0.06em;
  color: var(--color-ink-soft);
}

@keyframes hud-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}
</style>
