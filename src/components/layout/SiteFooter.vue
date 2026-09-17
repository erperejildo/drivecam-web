<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import StoreButton from '../shared/StoreButton.vue'
import { useLocale } from '@/composables/useLocale'
import { images } from '@/lib/images'
import { localizeTo } from '@/lib/links'
import { CONTACT_EMAIL } from '@/lib/mailto'

const { locale, site } = useLocale()

const homeTo = computed(() => `/${locale.value}`)

function localize(links: { label: string; to: string }[]) {
  return links.map((link) => ({
    label: link.label,
    to: localizeTo(link.to, locale.value),
  }))
}

const navLinks = computed(() => localize(site.value.footer.links))
const legalLinks = computed(() => localize(site.value.footer.legalLinks))
</script>

<template>
  <footer class="site-footer">
    <div class="shell site-footer__shell">
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <RouterLink class="site-footer__identity" :to="homeTo">
            <img
              class="site-footer__logo"
              :src="images.appIcon"
              alt=""
              width="32"
              height="32"
              loading="lazy"
            />
            <span class="site-footer__wordmark">DriveCam</span>
          </RouterLink>
          <p class="site-footer__tagline">{{ site.footer.tagline }}</p>
          <div class="site-footer__stores">
            <StoreButton store="google" />
            <StoreButton store="apple" />
          </div>
        </div>

        <nav class="site-footer__col" :aria-label="site.footer.navTitle">
          <h3 class="site-footer__heading">{{ site.footer.navTitle }}</h3>
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            class="site-footer__link"
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <nav class="site-footer__col" :aria-label="site.footer.legalTitle">
          <h3 class="site-footer__heading">{{ site.footer.legalTitle }}</h3>
          <RouterLink
            v-for="link in legalLinks"
            :key="link.label"
            class="site-footer__link"
            :to="link.to"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <div class="site-footer__col">
          <h3 class="site-footer__heading">{{ site.footer.contactTitle }}</h3>
          <p class="site-footer__contact-body">{{ site.footer.contactBody }}</p>
          <a class="site-footer__link" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p>
          {{ site.footer.madeByPrefix }}
          <a
            class="site-footer__made-by"
            :href="site.footer.madeByHref"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ site.footer.madeByBrand }}
          </a>
        </p>
        <p>{{ site.footer.rights }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.site-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-deep);
  padding-block: var(--space-2xl) var(--space-l);
}

.site-footer__grid {
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: 1fr;

  @include bp.from(bp.$bp-md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp.from(bp.$bp-lg) {
    grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  }
}

.site-footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  align-items: flex-start;
}

.site-footer__identity {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  text-decoration: none;
}

.site-footer__logo {
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-xs);
}

.site-footer__wordmark {
  font-family: var(--font-display);
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--color-ink);
}

.site-footer__tagline {
  max-width: 22rem;
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  line-height: var(--line-body);
}

.site-footer__stores {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xs);
}

.site-footer__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  align-items: flex-start;
}

.site-footer__heading {
  margin-bottom: var(--space-2xs);
  font-size: var(--text-small);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink-soft);
}

.site-footer__link {
  font-size: var(--text-small);
  color: var(--color-ink-muted);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);

  &:hover {
    color: var(--color-ink);
  }
}

.site-footer__contact-body {
  max-width: 20rem;
  font-size: var(--text-small);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}

.site-footer__bottom {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  margin-top: var(--space-xl);
  padding-top: var(--space-m);
  border-top: 1px solid var(--color-border);
  font-size: var(--text-small);
  color: var(--color-ink-soft);

  @include bp.from(bp.$bp-md) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.site-footer__made-by {
  color: var(--color-accent-strong);
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
}
</style>
