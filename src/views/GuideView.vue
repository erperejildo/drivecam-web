<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import { localizeTo } from '@/lib/links'
import AppButton from '@/components/shared/AppButton.vue'
import IconGlyph from '@/components/shared/IconGlyph.vue'

const { locale, site } = useLocale()
</script>

<template>
  <main class="guide-view">
    <section class="guide-hero">
      <div class="shell guide-hero__shell">
        <span class="eyebrow" v-reveal>{{ site.guide.eyebrow }}</span>
        <h1 class="guide-hero__title" v-reveal="60">{{ site.guide.title }}</h1>
        <p class="guide-hero__description" v-reveal="120">{{ site.guide.description }}</p>
        <p class="guide-hero__updated mono" v-reveal="180">{{ site.guide.updated }}</p>
      </div>
    </section>

    <section class="section guide-body">
      <div class="shell guide-body__shell">
        <div class="guide-body__intro" v-reveal>
          <p v-for="paragraph in site.guide.intro" :key="paragraph">{{ paragraph }}</p>
        </div>

        <ol class="guide-body__sections">
          <li
            v-for="(section, index) in site.guide.sections"
            :id="section.id"
            :key="section.id"
            class="guide-chapter"
            v-reveal="index * 60"
          >
            <div class="guide-chapter__aside">
              <span class="guide-chapter__number">{{ section.number }}</span>
            </div>
            <div class="guide-chapter__content">
              <h2 class="guide-chapter__title">{{ section.title }}</h2>
              <p
                v-for="paragraph in section.paragraphs"
                :key="paragraph"
                class="guide-chapter__paragraph"
              >
                {{ paragraph }}
              </p>
              <ul v-if="section.bullets.length" class="guide-chapter__bullets">
                <li v-for="bullet in section.bullets" :key="bullet">
                  <IconGlyph name="check" :size="16" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </div>
          </li>
        </ol>

        <div class="guide-cta" v-reveal>
          <h2 class="guide-cta__title">{{ site.guide.ctaTitle }}</h2>
          <p class="guide-cta__body">{{ site.guide.ctaBody }}</p>
          <AppButton size="l" icon="arrow" :to="localizeTo('/#download', locale)">
            {{ site.hero.primaryCta }}
          </AppButton>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.guide-hero {
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

.guide-hero__shell {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  max-width: var(--container-narrow);
}

.guide-hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  text-wrap: balance;
}

.guide-hero__description {
  color: var(--color-ink-muted);
  font-size: var(--text-lead);
  line-height: var(--line-body);
}

.guide-hero__updated {
  color: var(--color-ink-faint);
  font-size: var(--text-small);
}

.guide-body__shell {
  max-width: var(--container);
}

.guide-body__intro {
  display: grid;
  gap: var(--space-s);
  max-width: var(--container-narrow);
  margin-bottom: var(--space-xl);

  p {
    color: var(--color-ink-muted);
    font-size: var(--text-lead);
    line-height: var(--line-body);
  }
}

.guide-body__sections {
  display: grid;
  gap: var(--space-xl);
  margin: 0;
  padding: 0;
  list-style: none;
}

.guide-chapter {
  display: grid;
  gap: var(--space-s);
  scroll-margin-top: calc(var(--header-height) + var(--space-m));

  @include bp.from(bp.$bp-md) {
    grid-template-columns: 4.5rem 1fr;
    gap: var(--space-m);
  }
}

.guide-chapter__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-pill);
  background: var(--color-accent-soft);
  color: var(--color-accent-strong);
  font-family: var(--font-mono);
  font-size: var(--text-small);
}

.guide-chapter__content {
  display: grid;
  gap: var(--space-s);
  max-width: 46rem;
}

.guide-chapter__title {
  font-size: var(--text-h2);
  line-height: var(--line-tight);
}

.guide-chapter__paragraph {
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.guide-chapter__bullets {
  display: grid;
  gap: var(--space-2xs);
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: var(--space-2xs);
    color: var(--color-ink-muted);
    line-height: 1.6;

    svg {
      flex-shrink: 0;
      margin-top: 0.2rem;
      color: var(--color-accent-strong);
    }
  }
}

.guide-cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-s);
  margin-top: var(--space-2xl);
  padding: var(--card-padding);
  border: 1px solid var(--color-accent-border);
  border-radius: var(--radius-xl);
  background:
    radial-gradient(120% 100% at 0% 0%, var(--color-accent-soft), transparent 60%),
    var(--color-surface);
}

.guide-cta__title {
  font-size: var(--text-h2);
}

.guide-cta__body {
  color: var(--color-ink-muted);
  line-height: var(--line-body);
  max-width: 40rem;
}
</style>
