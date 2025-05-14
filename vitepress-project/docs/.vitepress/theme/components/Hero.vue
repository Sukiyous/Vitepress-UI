<template>
  <section class="w-full py-10 md:py-24 lg:py-32 hero-gradient">
    <div class="w-full mx-auto px-5 md:px-6 max-w-none">
      <div class="flex flex-col items-center space-y-6 md:space-y-6 text-center">
        <div class="space-y-3 md:space-y-3 w-full">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            VitePress
          </h1>
          <p class="mx-auto max-w-full sm:max-w-[700px] text-lg md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 px-0 sm:px-0">
            由 Vite 和 Vue 驱动的静态站点生成器
          </p>
        </div>
        <div class="flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-0 sm:px-0">
          <a href="/introduction/" class="inline-flex h-12 md:h-12 items-center justify-center rounded-md bg-indigo-600 px-6 sm:px-8 text-base font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 touch-manipulation w-full sm:w-auto">
            快速开始
          </a>
          <a href="https://github.com/vuejs/vitepress" class="inline-flex h-12 md:h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-6 sm:px-8 text-base font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 touch-manipulation w-full sm:w-auto">
            <Icon icon="lucide:github" class="mr-2 h-5 w-5" />
            GitHub
          </a>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-4 mt-6 md:mt-6">
          <div class="flex items-center space-x-1">
            <Icon icon="lucide:zap" class="h-5 w-5 text-amber-500" />
            <span class="text-base font-medium">极速开发体验</span>
          </div>
          <div class="hidden xs:block h-4 border-l border-gray-300 dark:border-zinc-700"></div>
          <div class="flex items-center space-x-1">
            <Icon icon="lucide:code" class="h-5 w-5 text-indigo-500" />
            <span class="text-base font-medium">Markdown 增强</span>
          </div>
          <div class="hidden sm:block h-4 border-l border-gray-300 dark:border-zinc-700"></div>
          <div class="hidden sm:flex items-center space-x-1">
            <Icon icon="lucide:layout-template" class="h-5 w-5 text-green-500" />
            <span class="text-base font-medium">主题定制</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(to bottom right, rgba(79, 70, 229, 0.1), rgba(219, 39, 119, 0.1));
  width: 100%;
  box-sizing: border-box;
}

/* 添加触摸友好样式 */
.touch-manipulation {
  touch-action: manipulation;
}

/* 添加额外的响应式断点 */
@media (min-width: 480px) {
  .xs\:block {
    display: block;
  }
}

/* 移动端适配 */
@media (max-width: 640px) {
  .hero-gradient {
    width: 100%;
    padding: 2.5rem 1.25rem;
  }
  
  /* 确保标题和文字不会被挤压 */
  h1 {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  /* 调整按钮大小，使其在移动端更容易点击 */
  a {
    height: 3.25rem !important;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  /* 确保按钮有足够的触控区域 */
  a:active {
    transform: scale(0.98);
  }
}
</style> 