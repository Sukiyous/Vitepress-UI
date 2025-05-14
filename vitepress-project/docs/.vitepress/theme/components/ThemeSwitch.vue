<template>
  <button @click="toggleDark" class="relative h-6 w-12 rounded-full bg-gray-200 dark:bg-zinc-700 transition-colors">
    <div :class="['absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transform transition-transform', isDark ? 'translate-x-6' : '']">
      <Icon v-if="isDark" icon="lucide:moon" class="w-3 h-3 text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Icon v-else icon="lucide:sun" class="w-3 h-3 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('vitepress-theme', isDark.value ? 'light' : 'dark')
  isDark.value = !isDark.value
}
</script> 