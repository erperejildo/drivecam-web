<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AccordionItem from '@/components/shared/AccordionItem.vue'
import IconGlyph from '@/components/shared/IconGlyph.vue'
import StoreButton from '@/components/shared/StoreButton.vue'
import { useLocale } from '@/composables/useLocale'
import { useLifetimePrice } from '@/composables/useLifetimePrice'

const route = useRoute()
const { locale, site } = useLocale()
const { price: lifetimePrice } = useLifetimePrice()

function renderCell(cell: string) {
  return cell.replace('{price}', lifetimePrice.value)
}

const slug = computed(() => String(route.params.slug || ''))

const article = computed(() => {
  const found = site.value.blog.articles.find((a) => a.slug === slug.value)
  return found ?? site.value.blog.articles[0]
})

const otherArticles = computed(() => {
  const current = article.value
  if (!current) return []
  return site.value.blog.articles.filter((a) => a.slug !== current.slug)
})
</script>

<template>
  <main class="article-view" v-if="article">
    <article class="article-content">
      <header class="article-hero">
        <div class="shell article-hero__shell">
          <nav class="article-breadcrumbs" aria-label="Breadcrumb" v-reveal>
            <RouterLink :to="`/${locale}`" class="article-breadcrumbs__link">DriveCam</RouterLink>
            <span class="article-breadcrumbs__sep" aria-hidden="true">/</span>
            <RouterLink :to="`/${locale}/blog/`" class="article-breadcrumbs__link">
              {{ site.blog.title }}
            </RouterLink>
            <span class="article-breadcrumbs__sep" aria-hidden="true">/</span>
            <span class="article-breadcrumbs__current" aria-current="page">{{
              article.category
            }}</span>
          </nav>

          <div class="article-hero__meta" v-reveal="60">
            <span class="article-hero__category">{{ article.category }}</span>
            <span class="article-hero__sep" aria-hidden="true">·</span>
            <time class="article-hero__date mono" :datetime="article.date">
              {{ article.dateFormatted }}
            </time>
            <span class="article-hero__sep" aria-hidden="true">·</span>
            <span class="article-hero__read mono">{{ article.readTime }}</span>
          </div>

          <h1 class="article-hero__title" v-reveal="120">{{ article.title }}</h1>
          <p class="article-hero__lead" v-reveal="180">{{ article.description }}</p>
        </div>
      </header>

      <div class="section article-body">
        <div class="shell article-body__shell">
          <!-- Main Content Sections -->
          <div class="article-sections">
            <section
              v-for="section in article.sections"
              :id="section.id"
              :key="section.id"
              class="article-section"
              v-reveal
            >
              <h2 class="article-section__title">{{ section.title }}</h2>

              <p
                v-for="paragraph in section.paragraphs"
                :key="paragraph"
                class="article-section__paragraph"
              >
                {{ paragraph }}
              </p>

              <ul v-if="section.bullets" class="article-bullets">
                <li v-for="bullet in section.bullets" :key="bullet" class="article-bullet">
                  <IconGlyph name="check" :size="16" class="article-bullet__icon" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>

              <!-- Comparison Table -->
              <div v-if="section.table" class="article-table-wrap">
                <table class="article-table">
                  <thead>
                    <tr>
                      <th
                        v-for="header in section.table.headers"
                        :key="header"
                        class="article-table__th"
                      >
                        {{ header }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(row, rIdx) in section.table.rows"
                      :key="rIdx"
                      class="article-table__tr"
                    >
                      <td
                        v-for="(cell, cIdx) in row"
                        :key="cIdx"
                        class="article-table__td"
                        :class="{ 'article-table__td--highlight': cIdx === row.length - 1 }"
                      >
                        {{ renderCell(cell) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Callout Box -->
              <aside
                v-if="section.callout"
                class="article-callout"
                :class="`article-callout--${section.callout.type}`"
              >
                <div class="article-callout__header">
                  <IconGlyph
                    :name="section.callout.type === 'warning' ? 'thermo' : 'shield'"
                    :size="18"
                    class="article-callout__icon"
                  />
                  <strong class="article-callout__title">{{ section.callout.title }}</strong>
                </div>
                <p class="article-callout__text">{{ section.callout.text }}</p>
              </aside>
            </section>
          </div>

          <!-- In-Article FAQ Section -->
          <section v-if="article.faqs && article.faqs.length > 0" class="article-faq" v-reveal>
            <h2 class="article-faq__title">{{ site.blog.faqTitle }}</h2>
            <div class="article-faq__list">
              <AccordionItem
                v-for="faq in article.faqs"
                :key="faq.question"
                :question="faq.question"
                :answer="faq.answer"
              />
            </div>
          </section>

          <!-- Conversion CTA Box -->
          <aside class="article-cta" v-reveal>
            <div class="article-cta__content">
              <span class="eyebrow">{{
                site.locale === 'es' ? 'Descarga gratuita' : 'Free download'
              }}</span>
              <h2 class="article-cta__title">{{ article.cta.title }}</h2>
              <p class="article-cta__body">{{ article.cta.body }}</p>
            </div>
            <div class="article-cta__actions">
              <StoreButton store="apple" />
              <StoreButton store="google" />
            </div>
          </aside>

          <!-- Related / Other Articles -->
          <nav
            v-if="otherArticles.length > 0"
            class="article-related"
            v-reveal
            aria-label="More articles"
          >
            <h3 class="article-related__heading">
              {{ site.locale === 'es' ? 'Más artículos del blog' : 'More articles from our blog' }}
            </h3>
            <div class="article-related__grid">
              <article v-for="rel in otherArticles" :key="rel.slug" class="article-related__card">
                <span class="article-related__category">{{ rel.category }}</span>
                <h4 class="article-related__title">
                  <RouterLink :to="`/${locale}/blog/${rel.slug}/`" class="article-related__link">
                    {{ rel.title }}
                  </RouterLink>
                </h4>
                <p class="article-related__meta mono">{{ rel.readTime }}</p>
              </article>
            </div>
          </nav>

          <div class="article-back-wrap" v-reveal>
            <RouterLink :to="`/${locale}/blog/`" class="article-back-link">
              ← {{ site.blog.backToBlog }}
            </RouterLink>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.article-hero {
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

.article-hero__shell {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  max-width: var(--container-narrow);
}

.article-breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2xs);
  font-size: var(--text-small);
  color: var(--color-ink-faint);
}

.article-breadcrumbs__link {
  color: var(--color-ink-muted);
  text-decoration: none;

  &:hover {
    color: var(--color-accent-strong);
    text-decoration: underline;
  }
}

.article-breadcrumbs__sep {
  color: var(--color-border-strong);
}

.article-breadcrumbs__current {
  color: var(--color-ink-soft);
}

.article-hero__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2xs);
  font-size: var(--text-small);
  color: var(--color-ink-faint);
}

.article-hero__category {
  display: inline-flex;
  padding: 0.15rem 0.6rem;
  border-radius: var(--radius-pill);
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent-strong);
  background: var(--color-accent-subtle);
  border: 1px solid var(--color-accent-border);
}

.article-hero__sep {
  color: var(--color-ink-faint);
}

.article-hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  text-wrap: balance;
}

.article-hero__lead {
  font-size: var(--text-body-lead);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.article-body__shell {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  max-width: var(--container-narrow);
}

.article-sections {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.article-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  scroll-margin-top: calc(var(--header-height) + var(--space-m));
}

.article-section__title {
  font-size: var(--text-h2);
  line-height: var(--line-tight);
  padding-bottom: var(--space-2xs);
  border-bottom: 1px solid var(--color-border);
}

.article-section__paragraph {
  font-size: var(--text-body);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.article-bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  list-style: none;
  padding: 0;
  margin: var(--space-2xs) 0;
}

.article-bullet {
  display: flex;
  align-items: flex-start;
  gap: var(--space-xs);
  font-size: var(--text-body);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.article-bullet__icon {
  flex-shrink: 0;
  margin-top: 0.25rem;
  color: var(--color-accent-strong);
}

.article-table-wrap {
  overflow-x: auto;
  border-radius: var(--radius-m);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  margin-block: var(--space-s);
}

.article-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: var(--text-small);
}

.article-table__th {
  padding: var(--space-s) var(--space-m);
  background: var(--color-bg-deep);
  color: var(--color-ink);
  font-family: var(--font-display);
  font-weight: 600;
  border-bottom: 1px solid var(--color-border);
  white-space: nowrap;
}

.article-table__td {
  padding: var(--space-s) var(--space-m);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-ink-muted);

  &--highlight {
    color: var(--color-accent-strong);
    font-weight: 600;
    background: var(--color-accent-subtle);
  }
}

.article-callout {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding: var(--space-m) var(--space-l);
  border-radius: var(--radius-s);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  margin-block: var(--space-xs);

  &--stat {
    border-color: var(--color-accent-border);
    background: var(--color-accent-subtle);
  }

  &--warning {
    border-color: #f59e0b44;
    background: rgba(245, 158, 11, 0.08);
  }
}

.article-callout__header {
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
}

.article-callout__icon {
  color: var(--color-accent-strong);
}

.article-callout__title {
  font-size: var(--text-small);
  color: var(--color-ink);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.article-callout__text {
  font-size: var(--text-small);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.article-faq {
  margin-top: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}

.article-faq__title {
  font-size: var(--text-h2);
}

.article-cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-xl);
  border-radius: var(--radius-m);
  border: 1px solid var(--color-border-strong);
  background: var(--gradient-card-highlight);
  margin-top: var(--space-xl);

  @include bp.from(bp.$bp-md) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.article-cta__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  max-width: 32rem;
}

.article-cta__title {
  font-size: var(--text-h2);
  line-height: var(--line-tight);
}

.article-cta__body {
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.article-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  align-items: center;
}

.article-related {
  margin-top: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
}

.article-related__heading {
  font-size: var(--text-card-title);
  color: var(--color-ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.article-related__grid {
  display: grid;
  gap: var(--space-m);
  grid-template-columns: 1fr;

  @include bp.from(bp.$bp-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.article-related__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding: var(--space-m);
  border-radius: var(--radius-s);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    background var(--duration-fast) var(--ease-out);

  &:hover {
    border-color: var(--color-border-strong);
    background: var(--color-card-hover);
  }
}

.article-related__category {
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-accent-strong);
}

.article-related__title {
  font-size: var(--text-body);
  line-height: var(--line-tight);
}

.article-related__link {
  color: var(--color-ink);
  text-decoration: none;

  &:hover {
    color: var(--color-accent-strong);
  }
}

.article-related__meta {
  font-size: var(--text-small);
  color: var(--color-ink-faint);
}

.article-back-wrap {
  margin-top: var(--space-m);
  padding-top: var(--space-m);
  border-top: 1px solid var(--color-border);
}

.article-back-link {
  display: inline-flex;
  align-items: center;
  color: var(--color-accent-strong);
  font-size: var(--text-small);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

@media print {
  .article-hero::before {
    display: none;
  }

  .article-cta,
  .article-related,
  .article-back-wrap {
    display: none;
  }
}
</style>
