<template>
  <aside class="w-full md:w-64 border-r border-gray-200 dark:border-zinc-800 md:h-[calc(100vh-4rem)] md:sticky md:top-16 overflow-y-auto bg-gray-50 dark:bg-zinc-900/50 overflow-x-hidden">
    <div class="p-4 md:p-6">
      <div class="flex justify-between items-center mb-5 md:hidden">
        <h2 class="text-lg font-bold">导航</h2>
        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800 touch-manipulation">
          <Icon :icon="isOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="h-6 w-6" />
        </button>
      </div>
      
      <div :class="['md:block', { 'hidden': !isOpen }]">
        <div class="space-y-6">
          <!-- 介绍部分 -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <button @click="toggleSection('introduction')" class="w-full py-2 text-sm font-semibold flex items-center text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors touch-manipulation">
                <Icon :icon="openSections.introduction ? 'lucide:chevron-down' : 'lucide:chevron-right'" class="mr-2 h-5 w-5 flex-shrink-0" />
                <span class="truncate">介绍</span>
              </button>
            </div>
            <div v-if="openSections.introduction" class="ml-6 space-y-2 border-l-2 border-gray-200 dark:border-zinc-700 pl-3">
              <a href="/introduction/" class="block py-2 px-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors touch-manipulation truncate" :class="{ 'text-indigo-600 dark:text-indigo-400 font-medium': route.path === '/introduction/' }">
                什么是VitePress
              </a>
              <a href="/introduction/getting-started" class="block py-2 px-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors touch-manipulation truncate" :class="{ 'text-indigo-600 dark:text-indigo-400 font-medium': route.path === '/introduction/getting-started' }">
                快速开始
              </a>
            </div>
          </div>
          
          <!-- 编写部分 -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <button @click="toggleSection('writing')" class="w-full py-2 text-sm font-semibold flex items-center text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors touch-manipulation">
                <Icon :icon="openSections.writing ? 'lucide:chevron-down' : 'lucide:chevron-right'" class="mr-2 h-5 w-5 flex-shrink-0" />
                <span class="truncate">编写</span>
              </button>
            </div>
            <div v-if="openSections.writing" class="ml-6 space-y-2 border-l-2 border-gray-200 dark:border-zinc-700 pl-3">
              <a href="/writing/markdown" class="block py-2 px-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors touch-manipulation truncate" :class="{ 'text-indigo-600 dark:text-indigo-400 font-medium': route.path === '/writing/markdown' }">
                Markdown
              </a>
              <a href="/writing/asset-handling" class="block py-2 px-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors touch-manipulation truncate" :class="{ 'text-indigo-600 dark:text-indigo-400 font-medium': route.path === '/writing/asset-handling' }">
                资源处理
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vitepress'
import { Icon } from '@iconify/vue'

const router = useRouter()
const route = router.route

const isOpen = ref(true)
const openSections = ref({
  introduction: true,
  writing: route.path.startsWith('/writing/'),
})

function toggleSection(section) {
  openSections.value[section] = !openSections.value[section]
}

// 路由变化时自动展开相应的部分
watch(() => route.path, (newPath) => {
  if (newPath.startsWith('/introduction/')) {
    openSections.value.introduction = true
  } else if (newPath.startsWith('/writing/')) {
    openSections.value.writing = true
  }
})
</script>

<style scoped>
/* 添加触摸友好样式 */
.touch-manipulation {
  touch-action: manipulation;
}

/* 确保侧边栏项目不溢出 */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* 增加侧边栏链接项的视觉间距 */
@media (max-width: 767px) {
  a {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  /* 添加触摸反馈效果 */
  a:active, button:active {
    background-color: rgba(99, 102, 241, 0.1);
    transform: translateY(1px);
  }
}
</style> 