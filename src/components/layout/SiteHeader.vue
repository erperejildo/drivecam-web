<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppButton from '../shared/AppButton.vue'
import IconGlyph from '../shared/IconGlyph.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { useLocale } from '@/composables/useLocale'
import { images } from '@/lib/images'
import { localizeTo } from '@/lib/links'

const route = useRoute()
const { locale, site } = useLocale()

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.classList.remove('is-locked')
})

watch(menuOpen, (open) => {
  document.body.classList.toggle('is-locked', open)
})

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

const navLabel = computed(() =>
  locale.value === 'es' ? 'Navegación principal' : 'Main navigation',
)
const menuLabel = computed(() => (locale.value === 'es' ? 'Abrir menú' : 'Open menu'))

const homeTo = computed(() => `/${locale.value}`)
const downloadTo = computed(() => ({ path: `/${locale.value}`, hash: '#download' }))

const navLinks = computed(() =>
  site.value.header.links.map((link) => ({
    label: link.label,
    to: localizeTo(link.to, locale.value),
  })),
)
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <div class="shell site-header__shell">
      <RouterLink class="site-header__brand" :to="homeTo" @click="menuOpen = false">
        <img
          class="site-header__logo"
          :src="images.appIcon"
          alt=""
          width="36"
          height="36"
          loading="eager"
        />
        <span class="site-header__wordmark">DriveCam</span>
      </RouterLink>

      <nav class="site-header__nav" :aria-label="navLabel">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          class="site-header__link"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="site-header__actions">
        <LanguageSwitcher />
        <AppButton class="site-header__cta" :to="downloadTo" icon="arrow">
          {{ site.header.cta }}
        </AppButton>
        <button
          class="site-header__toggle"
          type="button"
          :aria-expanded="menuOpen"
          :aria-label="menuLabel"
          @click="menuOpen = !menuOpen"
        >
          <IconGlyph :name="menuOpen ? 'close' : 'menu'" :size="22" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="site-header__panel">
      <nav class="site-header__panel-nav" :aria-label="navLabel">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          class="site-header__panel-link"
          :to="link.to"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
      <AppButton :to="downloadTo" size="l" block icon="arrow">{{ site.header.cta }}</AppButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/breakpoints' as bp;

.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 40;
  border-bottom: 1px solid transparent;
  transition:
    background-color var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}

.site-header--scrolled {
  background: var(--header-glass);
  backdrop-filter: var(--blur-glass);
  border-bottom-color: var(--color-border);
}

.site-header__shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-m);
  min-height: var(--header-height);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  text-decoration: none;
}

.site-header__logo {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: var(--radius-s);
}

.site-header__wordmark {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-ink);
}

.site-header__nav {
  display: none;
  align-items: center;
  gap: var(--space-m);

  @include bp.from(bp.$bp-lg) {
    display: flex;
  }
}

.site-header__link {
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-ink-muted);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);

  &:hover,
  &.router-link-active {
    color: var(--color-ink);
  }
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.site-header__cta {
  display: none;

  @include bp.from(bp.$bp-md) {
    display: inline-flex;
  }
}

.site-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-s);
  border: 1px solid var(--color-border-strong);
  background: transparent;
  color: var(--color-ink);
  cursor: pointer;

  @include bp.from(bp.$bp-lg) {
    display: none;
  }
}

.site-header__panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  padding: var(--space-m) var(--gutter) var(--space-l);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  animation: header-panel-in var(--duration-normal) var(--ease-out);
}

.site-header__panel-nav {
  display: flex;
  flex-direction: column;
}

.site-header__panel-link {
  padding-block: var(--space-xs);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--color-ink);
  text-decoration: none;

  & + & {
    border-top: 1px solid var(--color-border);
  }
}

@keyframes header-panel-in {
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
