<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import IconGlyph from '@/components/shared/IconGlyph.vue'
import StoreButton from '@/components/shared/StoreButton.vue'
import { useLocale } from '@/composables/useLocale'

const { locale, site } = useLocale()

const sortedArticles = computed(() =>
  [...site.value.blog.articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  ),
)
</script>

<template>
  <main class="blog-view">
    <section class="blog-hero">
      <div class="shell blog-hero__shell">
        <span class="eyebrow" v-reveal>{{ site.blog.eyebrow }}</span>
        <h1 class="blog-hero__title" v-reveal="60">{{ site.blog.title }}</h1>
        <p class="blog-hero__description" v-reveal="120">{{ site.blog.description }}</p>
      </div>
    </section>

    <section class="section blog-list">
      <div class="shell blog-list__shell">
        <div class="blog-grid">
          <article
            v-for="(article, index) in sortedArticles"
            :key="article.slug"
            class="blog-card"
            v-reveal="index * 80"
          >
            <div class="blog-card__meta">
              <span class="blog-card__category">{{ article.category }}</span>
              <span class="blog-card__sep" aria-hidden="true">·</span>
              <time class="blog-card__date mono" :datetime="article.date">
                {{ article.dateFormatted }}
              </time>
              <span class="blog-card__sep" aria-hidden="true">·</span>
              <span class="blog-card__read mono">{{ article.readTime }}</span>
            </div>

            <h2 class="blog-card__title">
              <RouterLink :to="`/${locale}/blog/${article.slug}/`" class="blog-card__title-link">
                {{ article.title }}
              </RouterLink>
            </h2>

            <p class="blog-card__excerpt">{{ article.description }}</p>

            <div class="blog-card__footer">
              <RouterLink :to="`/${locale}/blog/${article.slug}/`" class="blog-card__cta">
                <span>{{ site.blog.readArticle }}</span>
                <IconGlyph name="arrow" :size="16" class="blog-card__cta-icon" />
              </RouterLink>
            </div>
          </article>
        </div>

        <aside class="blog-cta-banner" v-reveal>
          <div class="blog-cta-banner__content">
            <span class="eyebrow">{{ site.locale === 'es' ? 'Descarga' : 'Get Started' }}</span>
            <h2 class="blog-cta-banner__title">{{ site.blog.ctaTitle }}</h2>
            <p class="blog-cta-banner__body">{{ site.blog.ctaBody }}</p>
          </div>
          <div class="blog-cta-banner__actions">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.blog-hero {
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

.blog-hero__shell {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  max-width: var(--container-narrow);
}

.blog-hero__title {
  font-size: var(--text-h1);
  line-height: var(--line-tight);
  text-wrap: balance;
}

.blog-hero__description {
  font-size: var(--text-body-lead);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
  max-width: 42rem;
}

.blog-list__shell {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
  max-width: var(--container-narrow);
}

.blog-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  padding: var(--space-l);
  border-radius: var(--radius-m);
  border: 1px solid var(--color-border);
  background: var(--color-card);
  transition:
    border-color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out),
    background var(--duration-fast) var(--ease-out);

  &:hover {
    border-color: var(--color-border-strong);
    background: var(--color-card-hover);
    transform: translateY(-2px);
  }
}

.blog-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2xs);
  font-size: var(--text-small);
  color: var(--color-ink-faint);
}

.blog-card__category {
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

.blog-card__sep {
  color: var(--color-ink-faint);
}

.blog-card__title {
  font-size: var(--text-h2);
  line-height: var(--line-tight);
}

.blog-card__title-link {
  color: var(--color-ink);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);

  &:hover {
    color: var(--color-accent-strong);
  }
}

.blog-card__excerpt {
  color: var(--color-ink-muted);
  font-size: var(--text-body);
  line-height: var(--line-body);
}

.blog-card__footer {
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
}

.blog-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-accent-strong);
  text-decoration: none;
  font-size: var(--text-small);
  font-weight: 600;
  transition: gap var(--duration-fast) var(--ease-out);

  &:hover {
    gap: 0.65rem;
    text-decoration: underline;
  }
}

.blog-cta-banner {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);
  padding: var(--space-xl);
  border-radius: var(--radius-m);
  border: 1px solid var(--color-border-strong);
  background: var(--gradient-card-highlight);

  @include bp.from(bp.$bp-md) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.blog-cta-banner__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  max-width: 32rem;
}

.blog-cta-banner__title {
  font-size: var(--text-h2);
  line-height: var(--line-tight);
}

.blog-cta-banner__body {
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.blog-cta-banner__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  align-items: center;
}

@media print {
  .blog-hero::before {
    display: none;
  }
}
</style>
