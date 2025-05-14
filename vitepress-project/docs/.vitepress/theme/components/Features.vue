<template>
  <section class="w-full py-10 md:py-16 lg:py-24 bg-white dark:bg-zinc-900">
    <div class="container px-4 md:px-6 mx-auto">
      <div class="flex flex-col items-center justify-center space-y-4 text-center mb-8 md:mb-12">
        <div class="space-y-2">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-black dark:text-white">特性</h2>
          <p class="max-w-[900px] text-gray-500 dark:text-zinc-400 text-base md:text-lg lg:text-xl/relaxed">
            VitePress 提供多种强大特性，帮助您创建出色的静态网站
          </p>
        </div>
      </div>
      <div class="mx-auto grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start">
        <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/50 p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
          <div class="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 mb-3 md:mb-4">
            <Icon icon="lucide:zap" class="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-black dark:text-white">极速开发体验</h3>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-2">
            基于 Vite 构建，提供闪电般的开发服务器启动速度和即时热更新
          </p>
        </div>
        <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/50 p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
          <div class="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 mb-3 md:mb-4">
            <Icon icon="lucide:code" class="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-black dark:text-white">Markdown 增强</h3>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-2">
            内置丰富的 Markdown 扩展功能，包括代码高亮、导入代码片段等
          </p>
        </div>
        <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/50 p-4 md:p-6 hover:shadow-md transition-shadow duration-300">
          <div class="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500 mb-3 md:mb-4">
            <Icon icon="lucide:layout-template" class="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <h3 class="text-lg md:text-xl font-bold text-black dark:text-white">主题定制</h3>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-2">
            灵活的主题系统，易于扩展和定制，打造独特的站点外观
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
@media (max-width: 639px) {
  .grid-cols-1 > div:not(:last-child) {
    margin-bottom: 1rem;
  }
}

/* 触摸反馈效果 */
@media (max-width: 767px) {
  .hover\:shadow-md:active {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(1px);
  }
}
</style> 