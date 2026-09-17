<script setup lang="ts">
import { computed } from 'vue'
import type { IconName } from '@/content/types'

const props = withDefaults(defineProps<{ name: IconName; size?: number }>(), { size: 24 })

const icons: Record<IconName, string[]> = {
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  battery: [
    'M2 9a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z',
    'M22 11v2',
    'M6 11v2',
  ],
  bolt: ['M13 2 4 14h6l-1 8 9-12h-6z'],
  camera: [
    'M23 7l-7 5 7 5V7z',
    'M14 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z',
  ],
  chart: ['M12 20V10', 'M18 20V4', 'M6 20v-4'],
  check: ['M20 6 9 17l-5-5'],
  clip: [
    'M23 4v6h-6',
    'M1 20v-6h6',
    'M3.5 9a9 9 0 0 1 14.9-3.4L23 10',
    'M1 14l4.6 4.4A9 9 0 0 0 20.5 15',
  ],
  close: ['M18 6 6 18', 'M6 6l12 12'],
  float: [
    'M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z',
    'M13 12h7v6h-7z',
  ],
  gauge: ['M3.7 18a9 9 0 1 1 16.6 0', 'M12 14l3.5-3.5'],
  gps: ['M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  lock: [
    'M5 11h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z',
    'M8 11V7a4 4 0 0 1 8 0v4',
  ],
  mail: [
    'M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z',
    'm22 6-10 7L2 6',
  ],
  menu: ['M3 6h18', 'M3 12h18', 'M3 18h18'],
  mic: [
    'M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z',
    'M19 10v1a7 7 0 0 1-14 0v-1',
    'M12 18v4',
  ],
  moon: ['M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'],
  mount: ['M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z', 'M11 19h2'],
  photo: [
    'M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z',
    'M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
    'm21 15-5-5L5 21',
  ],
  shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'm9 12 2 2 4-4'],
  spark: ['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z'],
  stream: [
    'M4.9 19.1a10 10 0 0 1 0-14.2',
    'M7.8 16.2a6 6 0 0 1 0-8.4',
    'M16.2 7.8a6 6 0 0 1 0 8.4',
    'M19.1 4.9a10 10 0 0 1 0 14.2',
    'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  ],
  thermo: ['M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z', 'M12 9v6'],
  'wifi-off': [
    'M2 2l20 20',
    'M8.5 16.5a5 5 0 0 1 7 0',
    'M5 12.9a10 10 0 0 1 5.2-2.7',
    'M12.6 5a10 10 0 0 1 9.4 4.4',
    'M12 20h.01',
  ],
}

const paths = computed(() => icons[props.name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(d, index) in paths" :key="index" :d="d" />
  </svg>
</template>
