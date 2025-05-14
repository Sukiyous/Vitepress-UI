<template>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-zinc-900">
    <div class="container px-4 md:px-6 mx-auto">
      <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-black dark:text-white">特性</h2>
          <p class="max-w-[900px] text-gray-500 dark:text-zinc-400 md:text-xl/relaxed">
            VitePress 提供多种强大特性，帮助您创建出色的静态网站
          </p>
        </div>
      </div>
      <div class="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 items-start">
        <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/50 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 mb-4">
            <Icon icon="lucide:zap" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-black dark:text-white">极速开发体验</h3>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-2">
            基于 Vite 构建，提供闪电般的开发服务器启动速度和即时热更新
          </p>
        </div>
        <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/50 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 mb-4">
            <Icon icon="lucide:code" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-black dark:text-white">Markdown 增强</h3>
          <p class="text-sm text-gray-500 dark:text-zinc-400 mt-2">
            内置丰富的 Markdown 扩展功能，包括代码高亮、导入代码片段等
          </p>
        </div>
        <div class="relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-800/50 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500 mb-4">
            <Icon icon="lucide:layout-template" class="h-6 w-6" />
          </div>
          <h3 class="text-xl font-bold text-black dark:text-white">主题定制</h3>
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