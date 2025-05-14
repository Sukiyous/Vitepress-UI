<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-zinc-900">
    <Header />
    
    <div class="pt-16">
      <!-- 根据路由条件显示不同内容 -->
      <template v-if="isHomePage">
        <main>
          <Hero />
          <Features />
        </main>
      </template>
      <template v-else>
        <div class="flex flex-col md:flex-row flex-1 w-full">
          <!-- 移动端切换侧边栏按钮 -->
          <div class="md:hidden fixed bottom-6 right-6 z-40">
            <button 
              @click="toggleSidebar" 
              class="p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg touch-manipulation"
              aria-label="切换侧边栏"
            >
              <Icon :icon="sidebarOpen ? 'lucide:x' : 'lucide:menu'" class="h-6 w-6" />
            </button>
          </div>
          
          <!-- 侧边栏，在移动端可以滑动显示 -->
          <div 
            :class="[
              'transition-transform duration-300 ease-in-out',
              'md:transition-none md:transform-none',
              'fixed md:static md:h-auto z-30 md:z-auto',
              'w-4/5 md:w-64 h-[calc(100vh-4rem)]',
              'top-16 left-0 bottom-0',
              sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            ]"
          >
            <Sidebar />
          </div>
          
          <!-- 侧边栏遮罩层 -->
          <div 
            v-if="sidebarOpen" 
            class="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
            @click="closeSidebar"
          ></div>
          
          <main class="flex-1 overflow-auto pb-28 md:pb-0 w-full">
            <!-- 文档内容 -->
            <div class="markdown-content mx-auto py-4 px-3 md:p-6 lg:p-8 max-w-full md:max-w-4xl">
              <Content />
            </div>
          </main>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import { useRoute, useData } from 'vitepress'
import { Icon } from '@iconify/vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
const { frontmatter } = useData()

const isHomePage = computed(() => {
  return frontmatter.value.layout === 'home' || route.path === '/'
})

const sidebarOpen = ref(false)

// 切换侧边栏
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
  
  // 当打开侧边栏时，禁止背景滚动
  if (sidebarOpen.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

// 关闭侧边栏
const closeSidebar = () => {
  sidebarOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

// 监视路由变化关闭侧边栏
watch(() => route.path, () => {
  sidebarOpen.value = false
  document.body.classList.remove('overflow-hidden')
})

// 监听窗口尺寸变化
const handleResize = () => {
  if (window.innerWidth >= 768 && sidebarOpen.value) {
    sidebarOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
}

// 监听ESC键关闭侧边栏
const handleEscKey = (e) => {
  if (e.key === 'Escape' && sidebarOpen.value) {
    sidebarOpen.value = false
    document.body.classList.remove('overflow-hidden')
  }
}

// 挂载事件监听
if (typeof window !== 'undefined') {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleEscKey)
  
  // 卸载事件监听
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleEscKey)
    document.body.classList.remove('overflow-hidden')
  })
}
</script>

<style>
/* 保证内容区域样式正确 */
.markdown-content {
  width: 100%;
  box-sizing: border-box;
}

/* 重置可能的默认边距 */
.markdown-content :deep(*) {
  margin-top: revert;
  margin-bottom: revert;
  max-width: 100%;
  box-sizing: border-box;
}

/* 确保标题样式 */
.markdown-content :deep(h1) {
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.25rem;
  line-height: 1.3;
  color: #111827;
}

@media (min-width: 768px) {
  .markdown-content :deep(h1) {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
}

.dark .markdown-content :deep(h1) {
  color: #f9fafb;
}

.markdown-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.75rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  line-height: 1.3;
  color: #111827;
}

@media (min-width: 768px) {
  .markdown-content :deep(h2) {
    font-size: 1.875rem;
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
  }
}

.dark .markdown-content :deep(h2) {
  color: #f9fafb;
  border-bottom-color: #374151;
}

.markdown-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  color: #111827;
}

@media (min-width: 768px) {
  .markdown-content :deep(h3) {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
}

.dark .markdown-content :deep(h3) {
  color: #f9fafb;
}

/* 确保段落和列表的间距 */
.markdown-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .markdown-content :deep(p) {
    margin-bottom: 1.25rem;
    line-height: 1.7;
  }
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.25rem;
}

@media (min-width: 768px) {
  .markdown-content :deep(ul),
  .markdown-content :deep(ol) {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
}

/* 美化代码块 */
.markdown-content :deep(pre) {
  border-radius: 0.375rem;
  margin: 1rem 0;
  padding: 0.75rem;
  background-color: #f3f4f6;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .markdown-content :deep(pre) {
    margin: 1.5rem 0;
    padding: 1rem;
  }
}

.dark .markdown-content :deep(pre) {
  background-color: #1f2937;
}

.markdown-content :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
}

/* 美化引用块 */
.markdown-content :deep(blockquote) {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin-left: 0;
  margin-right: 0;
  font-style: italic;
  color: #6b7280;
}

.dark .markdown-content :deep(blockquote) {
  border-left-color: #4b5563;
  color: #9ca3af;
}

/* 美化表格 */
.markdown-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.25rem 0;
  overflow-x: auto;
  display: block;
  max-width: 100%;
}

@media (min-width: 768px) {
  .markdown-content :deep(table) {
    margin: 1.5rem 0;
  }
}

.markdown-content :deep(table th),
.markdown-content :deep(table td) {
  border: 1px solid #e5e7eb;
  padding: 0.5rem;
  text-align: left;
}

@media (min-width: 768px) {
  .markdown-content :deep(table th),
  .markdown-content :deep(table td) {
    padding: 0.75rem;
  }
}

.dark .markdown-content :deep(table th),
.dark .markdown-content :deep(table td) {
  border-color: #374151;
}

.markdown-content :deep(table th) {
  background-color: #f9fafb;
  font-weight: 600;
}

.dark .markdown-content :deep(table th) {
  background-color: #1f2937;
}

/* 美化链接 */
.markdown-content :deep(a) {
  color: #4f46e5;
  text-decoration: none;
  font-weight: 500;
}

.dark .markdown-content :deep(a) {
  color: #818cf8;
}

.markdown-content :deep(a:hover) {
  text-decoration: underline;
}

/* 美化水平线 */
.markdown-content :deep(hr) {
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 1.5rem 0;
}

.dark .markdown-content :deep(hr) {
  border-top-color: #374151;
}

/* 添加触摸友好样式 */
.touch-manipulation {
  touch-action: manipulation;
}

/* 移动端图片缩放到适合屏幕 */
@media (max-width: 767px) {
  .markdown-content :deep(img) {
    max-width: 100%;
    height: auto;
  }
  
  /* 移动端内容布局优化 */
  .markdown-content {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }
  
  /* 移动端内容间距优化 */
  .markdown-content :deep(p),
  .markdown-content :deep(ul),
  .markdown-content :deep(ol),
  .markdown-content :deep(blockquote) {
    margin-bottom: 1.25rem;
  }
  
  .markdown-content :deep(h1) {
    margin-bottom: 1.5rem;
  }
  
  .markdown-content :deep(h2) {
    margin-top: 2rem;
    margin-bottom: 1.25rem;
  }
  
  .markdown-content :deep(h3) {
    margin-top: 1.75rem;
    margin-bottom: 1rem;
  }
  
  /* 确保内容不超出视口 */
  .markdown-content :deep(pre),
  .markdown-content :deep(code),
  .markdown-content :deep(table),
  .markdown-content :deep(blockquote) {
    max-width: 100%;
    word-break: break-word;
  }
  
  /* 小屏幕下的代码块处理 */
  .markdown-content :deep(pre) {
    white-space: pre-wrap;
  }
}
</style> 