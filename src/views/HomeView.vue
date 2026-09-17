<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import StatsBand from '@/components/sections/StatsBand.vue'
import GapSection from '@/components/sections/GapSection.vue'
import SolutionSection from '@/components/sections/SolutionSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import DownloadSection from '@/components/sections/DownloadSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { useLocale } from '@/composables/useLocale'

const { site } = useLocale()
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <StatsBand />
    <GapSection />
    <SolutionSection />
    <BenefitsSection />
    <FeaturesSection />
    <FaqSection
      :eyebrow="site.faq.eyebrow"
      :title="site.faq.title"
      :description="site.faq.description"
      :items="site.faq.items"
    />
    <DownloadSection />
    <ContactSection />
  </div>
</template>
