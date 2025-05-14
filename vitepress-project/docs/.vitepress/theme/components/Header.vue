<template>
  <nav class="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 h-16 px-4 md:px-6 fixed w-full top-0 z-50">
    <div class="h-full flex items-center justify-between">
      <div class="flex items-center gap-2">
        <a href="/" class="flex items-center gap-2">
          <img src="/logo.svg" alt="VitePress Logo" class="w-8 h-8" />
          <span class="font-bold text-lg text-indigo-500">VitePress</span>
        </a>
        
        <div class="hidden sm:flex ml-2">
          <div class="flex items-center gap-1 text-gray-500 dark:text-zinc-400 text-sm border border-gray-200 dark:border-zinc-700 rounded-md py-1 px-3">
            <Icon icon="lucide:search" width="16" height="16" />
            <span>搜索文档</span>
            <kbd class="hidden md:inline bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 text-xs rounded ml-1">Ctrl K</kbd>
          </div>
        </div>
      </div>
      
      <!-- 移动端菜单按钮 -->
      <div class="md:hidden">
        <button 
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 touch-manipulation"
          @click="toggleMobileMenu"
          aria-label="Menu"
        >
          <Icon :icon="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'" width="24" height="24" />
        </button>
      </div>
      
      <!-- 桌面导航 -->
      <div class="hidden md:flex items-center gap-4">
        <a href="/introduction/" class="text-sm font-medium hover:text-indigo-500 transition-colors">指南</a>
        <a href="/reference/" class="text-sm font-medium hover:text-indigo-500 transition-colors">参考</a>
        
        <!-- 版本下拉菜单 -->
        <div class="relative">
          <button class="flex items-center gap-1 text-sm font-medium" @click="versionDropdown = !versionDropdown">
            2.0.0-alpha.5
            <Icon icon="lucide:chevron-down" width="16" height="16" />
          </button>
          <div v-if="versionDropdown" class="absolute top-full right-0 mt-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md shadow-md py-1 min-w-32 z-50">
            <a href="#" class="block px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700">2.0.0-alpha.5</a>
            <a href="#" class="block px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700">1.0.0</a>
          </div>
        </div>
        
        <!-- 语言下拉菜单 -->
        <div class="relative">
          <button class="flex items-center justify-center" @click="langDropdown = !langDropdown" aria-label="Language">
            <Icon icon="lucide:languages" width="20" height="20" />
          </button>
          <div v-if="langDropdown" class="absolute top-full right-0 mt-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-md shadow-md py-1 min-w-20 z-50">
            <a href="#" class="block px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700">中文</a>
            <a href="#" class="block px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700">English</a>
          </div>
        </div>
        
        <ThemeSwitch />
        
        <a href="https://github.com/vuejs/vitepress" class="inline-flex items-center justify-center hover:text-indigo-500 transition-colors" aria-label="GitHub">
          <Icon icon="lucide:github" width="20" height="20" />
        </a>
      </div>
    </div>
    
    <!-- 移动端菜单 -->
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 z-50 overflow-y-auto"
      @click.self="closeMobileMenu"
    >
      <div class="flex flex-col p-4 space-y-3">
        <a href="/introduction/" class="py-3 text-sm font-medium border-b border-gray-200 dark:border-zinc-800" @click="closeMobileMenu">指南</a>
        <a href="/reference/" class="py-3 text-sm font-medium border-b border-gray-200 dark:border-zinc-800" @click="closeMobileMenu">参考</a>
        
        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-800">
          <span class="text-sm font-medium">版本</span>
          <select class="bg-transparent border border-gray-200 dark:border-zinc-700 rounded-md px-2 py-1 text-sm">
            <option>2.0.0-alpha.5</option>
            <option>1.0.0</option>
          </select>
        </div>
        
        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-800">
          <span class="text-sm font-medium">语言</span>
          <select class="bg-transparent border border-gray-200 dark:border-zinc-700 rounded-md px-2 py-1 text-sm">
            <option>中文</option>
            <option>English</option>
          </select>
        </div>
        
        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-zinc-800">
          <span class="text-sm font-medium">主题</span>
          <ThemeSwitch />
        </div>
        
        <a href="https://github.com/vuejs/vitepress" class="flex items-center gap-2 py-3 border-b border-gray-200 dark:border-zinc-800 text-sm font-medium">
          <Icon icon="lucide:github" width="16" height="16" />
          GitHub
        </a>
        
        <!-- 移动端搜索框 -->
        <div class="mt-2 flex items-center gap-1 text-gray-500 dark:text-zinc-400 text-sm border border-gray-200 dark:border-zinc-700 rounded-md py-2 px-3">
          <Icon icon="lucide:search" width="16" height="16" />
          <input 
            type="text" 
            placeholder="搜索文档" 
            class="w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Icon } from '@iconify/vue'
import ThemeSwitch from './ThemeSwitch.vue'

const mobileMenuOpen = ref(false)
const versionDropdown = ref(false)
const langDropdown = ref(false)

// 关闭移动菜单
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// 切换移动菜单
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  // 当打开菜单时，禁止背景滚动
  if (mobileMenuOpen.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

// 监听ESC键关闭菜单
const handleEscKey = (e) => {
  if (e.key === 'Escape') {
    mobileMenuOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
}

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  if (versionDropdown.value && !event.target.closest('.version-dropdown')) {
    versionDropdown.value = false
  }
  if (langDropdown.value && !event.target.closest('.lang-dropdown')) {
    langDropdown.value = false
  }
}

// 监听窗口尺寸变化
const handleResize = () => {
  if (window.innerWidth >= 768 && mobileMenuOpen.value) {
    mobileMenuOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
}

// 挂载事件监听
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleEscKey)
    window.addEventListener('resize', handleResize)
  }
})

// 卸载事件监听
onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('click', handleClickOutside)
    window.removeEventListener('keydown', handleEscKey)
    window.removeEventListener('resize', handleResize)
    document.body.classList.remove('overflow-hidden')
  }
})

// 监视路由变化关闭菜单
watch(() => window.location.pathname, () => {
  mobileMenuOpen.value = false
  document.body.classList.remove('overflow-hidden')
})
</script>

<style scoped>
/* 添加触摸友好样式 */
.touch-manipulation {
  touch-action: manipulation;
}

/* 移动菜单过渡效果 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 