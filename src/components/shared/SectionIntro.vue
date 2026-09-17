<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description?: string
    align?: 'center' | 'left'
  }>(),
  { align: 'center' },
)
</script>

<template>
  <div class="section-intro" :class="`section-intro--${align}`">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <h2 class="section-intro__title">{{ title }}</h2>
    <p v-if="description" class="lead section-intro__description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.section-intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  max-width: var(--container-narrow);
}

.section-intro--center {
  align-items: center;
  text-align: center;
  margin-inline: auto;
}

.section-intro--left {
  align-items: flex-start;
  text-align: left;
}

.section-intro__title {
  font-size: var(--text-h2);
  line-height: var(--line-tight);
}

.section-intro__description {
  max-width: 40rem;
}
</style>
