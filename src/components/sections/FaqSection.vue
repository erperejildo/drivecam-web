<script setup lang="ts">
import AccordionItem from '../shared/AccordionItem.vue'
import SectionIntro from '../shared/SectionIntro.vue'
import type { FaqItem } from '@/content'

defineProps<{
  eyebrow: string
  title: string
  description: string
  items: FaqItem[]
}>()
</script>

<template>
  <section id="faq" class="section faq">
    <div class="shell faq__shell">
      <SectionIntro v-reveal :eyebrow="eyebrow" :title="title" :description="description" />

      <div v-reveal="120" class="faq__list">
        <AccordionItem
          v-for="item in items"
          :key="item.question"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq__shell {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq__list {
  width: 100%;
  max-width: var(--container-narrow);
  margin-top: var(--space-l);
}
</style>
