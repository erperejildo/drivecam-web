<script setup lang="ts">
import { useLocale } from '@/composables/useLocale'
import { CONTACT_EMAIL } from '@/lib/mailto'

const { site } = useLocale()
</script>

<template>
  <main class="legal-view">
    <section class="legal-hero">
      <div class="shell legal-hero__shell">
        <span class="eyebrow" v-reveal>{{ site.legal.eyebrow }}</span>
        <h1 class="legal-hero__title" v-reveal="60">{{ site.legal.title }}</h1>
        <p class="legal-hero__updated mono" v-reveal="120">{{ site.legal.updated }}</p>
      </div>
    </section>

    <section class="section legal-body">
      <div class="shell legal-body__shell">
        <article class="legal-doc">
          <h2 class="legal-doc__title">{{ site.legal.privacyTitle }}</h2>
          <section
            v-for="block in site.legal.privacy"
            :id="block.id"
            :key="block.id"
            class="legal-block"
            v-reveal
          >
            <h3 class="legal-block__title">{{ block.title }}</h3>
            <p
              v-for="paragraph in block.paragraphs"
              :key="paragraph"
              class="legal-block__paragraph"
            >
              {{ paragraph }}
            </p>
          </section>
        </article>

        <article id="terms" class="legal-doc">
          <h2 class="legal-doc__title">{{ site.legal.termsTitle }}</h2>
          <section
            v-for="block in site.legal.terms"
            :id="block.id"
            :key="block.id"
            class="legal-block"
            v-reveal
          >
            <h3 class="legal-block__title">{{ block.title }}</h3>
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
}
</style>
