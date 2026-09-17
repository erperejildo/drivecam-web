<script setup lang="ts">
import SectionIntro from '../shared/SectionIntro.vue'
import { useLocale } from '@/composables/useLocale'
import { images } from '@/lib/images'

const { locale, site } = useLocale()

const imageAlt =
  locale.value === 'es'
    ? 'Vista nocturna de la carretera desde el asiento del conductor'
    : 'Night view of the road ahead from the driver seat'
</script>

<template>
  <section id="how" class="section solution">
    <div class="shell solution__shell">
      <div v-reveal class="solution__copy">
        <SectionIntro
          align="left"
          :eyebrow="site.solution.eyebrow"
          :title="site.solution.title"
          :description="site.solution.description"
        />

        <ol class="solution__steps">
          <li
            v-for="(step, index) in site.solution.steps"
            :key="step.title"
            class="solution__step"
            :class="{ 'solution__step--last': index === site.solution.steps.length - 1 }"
          >
            <span class="solution__number mono">{{ step.number }}</span>
            <div class="solution__step-body">
              <h3 class="solution__step-title">{{ step.title }}</h3>
              <p class="solution__step-text">{{ step.description }}</p>
            </div>
          </li>
        </ol>

        <p class="solution__note mono">{{ site.solution.note }}</p>
      </div>

      <div v-reveal="140" class="solution__visual">
        <div class="solution__frame">
          <!-- TODO: replace the placeholder below with a real landscape photo (16:10) of the phone mounted in a car -->
          <img
            class="solution__image"
            :src="images.solutionDrive"
            :alt="imageAlt"
            width="1280"
            height="800"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.solution__shell {
  display: grid;
  gap: var(--space-2xl);
  align-items: center;

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: var(--space-xl);
  }
}

.solution__copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  align-items: flex-start;
}

.solution__steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  padding: 0;
  margin: 0;
  list-style: none;
}

.solution__step {
  position: relative;
  display: flex;
  gap: var(--space-s);

  &:not(.solution__step--last)::before {
    content: '';
    position: absolute;
    left: 1.1rem;
    top: 2.5rem;
    bottom: calc(-1 * var(--space-m));
    width: 1px;
    background: var(--color-border-strong);
  }
}

.solution__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-accent-border);
  background: var(--color-accent-soft);
  color: var(--color-accent-strong);
  font-size: var(--text-small);
}

.solution__step-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.3rem;
}

.solution__step-title {
  font-size: var(--text-card-title);
}

.solution__step-text {
  max-width: 30rem;
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.solution__note {
  font-size: var(--text-small);
  color: var(--color-ink-soft);

  &::before {
    content: '// ';
    color: var(--color-accent);
  }
}

.solution__visual {
  display: flex;
  justify-content: center;
}

.solution__frame {
  position: relative;
  width: min(34rem, 100%);
  padding: var(--space-m);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.solution__frame::before {
  content: '';
  position: absolute;
  inset: 12% -12% -10%;
  background: var(--gradient-hero);
  filter: blur(2.5rem);
  z-index: -1;
}

.solution__image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: var(--radius-l);
}
</style>
