<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import AppButton from '@/components/shared/AppButton.vue'
import IconGlyph from '@/components/shared/IconGlyph.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import DownloadSection from '@/components/sections/DownloadSection.vue'

const { site } = useLocale()
</script>

<template>
  <main class="pricing-view">
    <section class="pricing-hero">
      <div class="shell pricing-hero__shell">
        <span class="eyebrow" v-reveal>{{ site.pricing.eyebrow }}</span>
        <h1 class="pricing-hero__title" v-reveal="60">{{ site.pricing.title }}</h1>
        <p class="pricing-hero__description" v-reveal="120">{{ site.pricing.description }}</p>
        <p class="pricing-hero__trust" v-reveal="180">
          <IconGlyph name="lock" :size="15" />
          <span>{{ site.pricing.trust }}</span>
        </p>
      </div>
    </section>

    <section class="section pricing-plans" aria-label="Pricing plans">
      <div class="shell">
        <div class="pricing-plans__grid">
          <article
            v-for="(plan, index) in site.pricing.plans"
            :key="plan.key"
            class="pricing-card"
            :class="{ 'pricing-card--popular': plan.popular }"
            v-reveal="index * 90"
          >
            <header class="pricing-card__header">
              <h2 class="pricing-card__name">{{ plan.name }}</h2>
              <span v-if="plan.badge" class="pricing-card__badge">
                <IconGlyph name="spark" :size="13" />
                {{ plan.badge }}
              </span>
            </header>

            <p class="pricing-card__price">
              <strong>{{ plan.price }}</strong>
              <span class="pricing-card__period">{{ plan.period }}</span>
            </p>

            <p class="pricing-card__summary">{{ plan.summary }}</p>

            <ul class="pricing-card__features">
              <li v-for="feature in plan.features" :key="feature">
                <IconGlyph name="check" :size="16" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <AppButton
              :variant="plan.popular ? 'primary' : 'secondary'"
              size="l"
              block
              :to="{ hash: '#download' }"
            >
              {{ plan.ctaLabel }}
            </AppButton>
          </article>
        </div>
      </div>
    </section>

    <section class="section pricing-trial">
      <div class="shell">
        <div class="pricing-trial__panel" v-reveal>
          <span class="pricing-trial__icon">
            <IconGlyph name="spark" :size="22" />
          </span>
          <div>
            <span class="eyebrow">{{ site.pricing.trial.eyebrow }}</span>
            <h2 class="pricing-trial__title">{{ site.pricing.trial.title }}</h2>
            <p class="pricing-trial__description">{{ site.pricing.trial.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <FaqSection
      :eyebrow="site.pricing.eyebrow"
      :title="site.pricing.faqTitle"
      :description="''"
      :items="site.pricing.faq"
    />

    <DownloadSection />
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.pricing-hero {
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

.pricing-hero__shell {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  max-width: var(--container-narrow);
  text-align: center;
}

.pricing-hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  text-wrap: balance;
}

.pricing-hero__description {
  color: var(--color-ink-muted);
  font-size: var(--text-lead);
  line-height: var(--line-body);
}

.pricing-hero__trust {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  margin-top: var(--space-2xs);
  color: var(--color-ink-soft);
  font-family: var(--font-mono);
  font-size: var(--text-small);

  svg {
    color: var(--color-success);
  }
}

.pricing-plans {
  padding-top: var(--space-xl);
}

.pricing-plans__grid {
  display: grid;
  gap: var(--space-m);
  align-items: stretch;

  @include bp.from(bp.$bp-md) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pricing-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  padding: var(--card-padding);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  transition:
    border-color var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);

  &:hover {
    border-color: var(--color-border-strong);
    transform: translateY(-0.25rem);
  }
}

.pricing-card--popular {
  border-color: var(--color-accent-border);
  background:
    radial-gradient(120% 80% at 50% 0%, var(--color-accent-soft), transparent 60%),
    var(--color-surface);
  box-shadow: var(--shadow-card);
}

.pricing-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2xs);
}

.pricing-card__name {
  font-size: var(--text-card-title);
}

.pricing-card__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-pill);
  background: var(--color-accent-soft);
  color: var(--color-accent-strong);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pricing-card__price {
  display: flex;
  align-items: baseline;
  gap: var(--space-2xs);

  strong {
    font-family: var(--font-display);
    font-size: var(--text-price);
    letter-spacing: -0.02em;
  }
}

.pricing-card__period {
  color: var(--color-ink-soft);
  font-family: var(--font-mono);
  font-size: var(--text-small);
}

.pricing-card__summary {
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.pricing-card__features {
  display: grid;
  gap: var(--space-2xs);
  margin: 0;
  padding: var(--space-s) 0;
  border-top: 1px solid var(--color-border);
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-2xs);
    font-size: var(--text-small);
    color: var(--color-ink-muted);

    svg {
      flex-shrink: 0;
      margin-top: 0.15rem;
      color: var(--color-accent-strong);
    }
  }
}

.pricing-card .app-button {
  margin-top: auto;
}

.pricing-trial__panel {
  display: flex;
  gap: var(--space-m);
  align-items: flex-start;
  padding: var(--card-padding);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-xl);
  background: linear-gradient(180deg, var(--color-card-hover), var(--color-card));
}

.pricing-trial__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-pill);
  background: var(--color-accent-soft);
  color: var(--color-accent-strong);
}

.pricing-trial__title {
  margin-top: var(--space-3xs);
  font-size: var(--text-h3);
}

.pricing-trial__description {
  margin-top: var(--space-2xs);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
  max-width: 48rem;
}
</style>
