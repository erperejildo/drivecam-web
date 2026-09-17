<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()
</script>

<template>
  <details class="accordion-item">
    <summary class="accordion-item__summary">
      <span class="accordion-item__question">{{ question }}</span>
      <span class="accordion-item__chevron" aria-hidden="true" />
    </summary>
    <p class="accordion-item__answer">{{ answer }}</p>
  </details>
</template>

<style scoped lang="scss">
.accordion-item {
  border-bottom: 1px solid var(--color-border);

  &:first-of-type {
    border-top: 1px solid var(--color-border);
  }
}

.accordion-item__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-m);
  padding-block: var(--space-m);
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
}

.accordion-item__question {
  font-family: var(--font-display);
  font-size: var(--text-card-title);
  font-weight: 600;
  color: var(--color-ink);
}

.accordion-item__chevron {
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  flex-shrink: 0;
  transition: transform var(--duration-normal) var(--ease-out);

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 50% 0 auto 0;
    height: 2px;
    background: var(--color-accent);
    transform: translateY(-50%);
  }

  &::after {
    transform: translateY(-50%) rotate(90deg);
    transition: transform var(--duration-normal) var(--ease-out);
  }
}

.accordion-item[open] .accordion-item__chevron::after {
  transform: translateY(-50%) rotate(0deg);
}

.accordion-item__answer {
  padding-bottom: var(--space-m);
  max-width: var(--container-narrow);
  color: var(--color-ink-muted);
  line-height: var(--line-body);
}
</style>
