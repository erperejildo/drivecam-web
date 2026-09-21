<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useLocale } from '@/composables/useLocale'
import { CONTACT_EMAIL } from '@/lib/mailto'

const { locale, site } = useLocale()
const route = useRoute()

const isPrivacyOnly = computed(() => route.name === 'privacy')
const isTermsOnly = computed(() => route.name === 'terms')
const isCombined = computed(() => !isPrivacyOnly.value && !isTermsOnly.value)

const heroTitle = computed(() => {
  if (isPrivacyOnly.value) return site.value.legal.privacyTitle
  if (isTermsOnly.value) return site.value.legal.termsTitle
  return site.value.legal.title
})

const tabs = computed(() => [
  {
    key: 'privacy',
    label: site.value.legal.privacyTitle,
    to: `/${locale.value}/privacy/`,
    active: isPrivacyOnly.value,
  },
  {
    key: 'terms',
    label: site.value.legal.termsTitle,
    to: `/${locale.value}/terms/`,
    active: isTermsOnly.value,
  },
])
</script>

<template>
  <main class="legal-view">
    <section class="legal-hero">
      <div class="shell legal-hero__shell">
        <span class="eyebrow" v-reveal>{{ site.legal.eyebrow }}</span>
        <h1 class="legal-hero__title" v-reveal="60">{{ heroTitle }}</h1>
        <p class="legal-hero__updated mono" v-reveal="120">{{ site.legal.updated }}</p>

        <nav class="legal-tabs" aria-label="Legal documents" v-reveal="180">
          <RouterLink
            v-for="tab in tabs"
            :key="tab.key"
            :to="tab.to"
            class="legal-tab"
            :class="{ 'legal-tab--active': tab.active }"
          >
            {{ tab.label }}
          </RouterLink>
        </nav>
      </div>
    </section>

    <section class="section legal-body">
      <div class="shell legal-body__shell">
        <!-- Privacy Document (shown on /privacy and /legal) -->
        <article v-if="isPrivacyOnly || isCombined" id="privacy" class="legal-doc">
          <h2 v-if="isCombined" class="legal-doc__title">{{ site.legal.privacyTitle }}</h2>
          <section
            v-for="block in site.legal.privacy"
            :id="block.id"
            :key="block.id"
            class="legal-block"
            v-reveal
          >
            <component :is="isCombined ? 'h3' : 'h2'" class="legal-block__title">
              {{ block.title }}
            </component>
            <p
              v-for="paragraph in block.paragraphs"
              :key="paragraph"
              class="legal-block__paragraph"
            >
              {{ paragraph }}
            </p>
          </section>
        </article>

        <!-- Terms Document (shown on /terms and /legal) -->
        <article v-if="isTermsOnly || isCombined" id="terms" class="legal-doc">
          <h2 v-if="isCombined" class="legal-doc__title">{{ site.legal.termsTitle }}</h2>
          <section
            v-for="block in site.legal.terms"
            :id="block.id"
            :key="block.id"
            class="legal-block"
            v-reveal
          >
            <component :is="isCombined ? 'h3' : 'h2'" class="legal-block__title">
              {{ block.title }}
            </component>
            <p
              v-for="paragraph in block.paragraphs"
              :key="paragraph"
              class="legal-block__paragraph"
            >
              {{ paragraph }}
            </p>
          </section>
        </article>

        <p class="legal-note" v-reveal>{{ site.legal.contactNote }}</p>
        <p class="legal-contact">
          <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.legal-hero {
  position: relative;
  padding-top: calc(var(--header-height) + var(--space-2xl));
  padding-bottom: var(--space-l);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--gradient-hero);
    pointer-events: none;
  }
}

.legal-hero__shell {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  max-width: var(--container-narrow);
}

.legal-hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  text-wrap: balance;
}

.legal-hero__updated {
  color: var(--color-ink-faint);
  font-size: var(--text-small);
}

.legal-tabs {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem;
  margin-top: var(--space-s);
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border-strong);
  background: var(--color-card);
  width: fit-content;
}

.legal-tab {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-pill);
  font-size: var(--text-small);
  font-weight: 600;
  color: var(--color-ink-soft);
  text-decoration: none;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out);

  &:hover {
    color: var(--color-ink);
  }

  &--active {
    background: var(--color-accent);
    color: var(--color-ink);
  }
}

.legal-body__shell {
  display: grid;
  gap: var(--space-xl);
  max-width: var(--container-narrow);
}

.legal-doc {
  scroll-margin-top: calc(var(--header-height) + var(--space-m));
}

.legal-doc__title {
  padding-bottom: var(--space-2xs);
  margin-bottom: var(--space-m);
  border-bottom: 1px solid var(--color-border-strong);
  font-size: var(--text-h2);
}

.legal-block {
  margin-bottom: var(--space-m);
  scroll-margin-top: calc(var(--header-height) + var(--space-m));
}

.legal-block__title {
  margin-bottom: var(--space-2xs);
  color: var(--color-ink);
  font-size: var(--text-card-title);
}

.legal-block__paragraph {
  margin-bottom: var(--space-2xs);
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.legal-note {
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.legal-contact a {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-accent-strong);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

@media print {
  .legal-hero::before {
    display: none;
  }

  .legal-tabs {
    display: none;
  }
}
</style>
