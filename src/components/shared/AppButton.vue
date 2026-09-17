<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'
import IconGlyph from './IconGlyph.vue'
import type { IconName } from '@/content'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'm' | 'l'
    icon?: IconName
    block?: boolean
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', size: 'm', block: false, type: 'button' },
)

const tag = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))

const linkAttrs = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return { type: props.type }
})
</script>

<template>
  <component
    :is="tag"
    v-bind="linkAttrs"
    class="app-button"
    :class="[`app-button--${variant}`, `app-button--${size}`, { 'app-button--block': block }]"
  >
    <IconGlyph v-if="icon" :name="icon" :size="18" class="app-button__icon" />
    <span class="app-button__label"><slot /></span>
  </component>
</template>

<style scoped lang="scss">
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2xs);
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    transform var(--duration-fast) var(--ease-out),
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.app-button--m {
  padding: 0.7rem 1.3rem;
  font-size: var(--text-small);
}

.app-button--l {
  padding: 0.95rem 1.75rem;
  font-size: var(--text-body);
}

.app-button--block {
  width: 100%;
}

.app-button--primary {
  background: var(--gradient-accent);
  color: var(--color-ink);
  box-shadow: var(--shadow-glow);

  &:hover {
    transform: translateY(-2px);
    background: var(--color-accent-strong);
  }
}

.app-button--secondary {
  background: var(--color-surface-raised);
  border-color: var(--color-border-strong);
  color: var(--color-ink);

  &:hover {
    background: var(--color-card-hover);
    border-color: var(--color-accent-border);
    transform: translateY(-2px);
  }
}

.app-button--ghost {
  background: transparent;
  border-color: var(--color-border);
  color: var(--color-ink-muted);

  &:hover {
    color: var(--color-ink);
    border-color: var(--color-border-strong);
  }
}

.app-button__icon {
  flex-shrink: 0;
}
</style>
