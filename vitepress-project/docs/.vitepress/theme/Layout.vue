<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-zinc-900">
    <Header />
    
    <div class="pt-16">
      <!-- 根据路由条件显示不同内容 -->
      <template v-if="isHomePage">
        <main class="w-full">
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
          
          <main class="flex-1 overflow-auto pb-28 md:pb-0 w-full md:max-w-[calc(100%-16rem)]">
            <!-- 文档内容 -->
            <div class="markdown-content w-full mx-auto py-4 px-3 md:p-6 lg:p-8 md:max-w-4xl">
              <Content />
            </div>
            
            <!-- 优化移动端下的本页目录 -->
            <div 
              v-if="showOutline && frontmatter.outline !== false" 
              class="md:hidden fixed bottom-6 left-6 z-40"
            >
              <button 
                @click="toggleOutline" 
                class="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg touch-manipulation active:scale-95 transition-transform"
                aria-label="本页目录"
              >
                <Icon icon="lucide:list" class="h-5 w-5" />
              </button>
              
              <!-- 移动端下的页面目录弹出层 -->
              <Transition name="fade">
                <div 
                  v-if="outlineOpen" 
                  class="fixed inset-x-3 bottom-20 p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-lg z-50 max-h-[60vh] overflow-y-auto overscroll-contain"
                >
                  <div class="flex justify-between items-center mb-3 pb-2 border-b border-gray-100 dark:border-zinc-700">
                    <h3 class="text-lg font-bold">本页目录</h3>
                    <button @click="toggleOutline" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700">
                      <Icon icon="lucide:x" class="h-5 w-5" />
                    </button>
                  </div>
                  <div class="pl-1 text-sm">
                    <div v-for="heading in outline" :key="heading.id" class="my-1">
                      <a 
                        :href="`#${heading.id}`" 
                        :class="{
                          'block py-2 px-3 rounded-md transition-colors': true,
                          'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium': activeHeading === heading.id,
                          'hover:bg-gray-50 dark:hover:bg-zinc-700/50': activeHeading !== heading.id,
                          'pl-7': heading.level === 3
                        }"
                        @click="closeMobileOutline"
                      >
                        {{ heading.text }}
                      </a>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </main>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onBeforeUnmount, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'
import { Icon } from '@iconify/vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
const { frontmatter, page } = useData()

const isHomePage = computed(() => {
  return frontmatter.value.layout === 'home' || route.path === '/'
})

const sidebarOpen = ref(false)
const outlineOpen = ref(false)
const activeHeading = ref('')

// 获取页面大纲
const outline = computed(() => {
  return page.value.headers || []
})

// 判断是否显示大纲
const showOutline = computed(() => {
  return outline.value.length > 0
})

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

// 切换大纲显示
const toggleOutline = () => {
  outlineOpen.value = !outlineOpen.value
  
  if (outlineOpen.value) {
    outlineOpen.value = true
  }
}

// 关闭移动端大纲
const closeMobileOutline = () => {
  outlineOpen.value = false
  
  // 添加一个小延迟以确保目录关闭后再导航
  setTimeout(() => {
    // 关闭后自动滚动到锚点位置
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        // 使用scrollIntoView带来更好的滚动体验
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, 100)
}

// 关闭侧边栏
const closeSidebar = () => {
  sidebarOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

// 监视路由变化关闭侧边栏
watch(() => route.path, () => {
  sidebarOpen.value = false
  outlineOpen.value = false
  document.body.classList.remove('overflow-hidden')
})

// 监听窗口尺寸变化
const handleResize = () => {
  if (window.innerWidth >= 768) {
    if (sidebarOpen.value) {
      sidebarOpen.value = false
      document.body.classList.remove('overflow-hidden')
    }
    if (outlineOpen.value) {
      outlineOpen.value = false
    }
  }
}

// 监听滚动，更新当前活动标题
const updateActiveHeading = () => {
  if (typeof document === 'undefined') return

  const headings = document.querySelectorAll('h2, h3')
  if (headings.length === 0) return

  const scrollY = window.scrollY
  const pageBottom = scrollY + window.innerHeight
  const pageTop = scrollY + 100

  // 找到当前可见的标题
  let currentId = ''
  // 记录最小距离和对应ID
  let minDistance = Infinity
  
  for (const heading of headings) {
    const { top } = heading.getBoundingClientRect()
    const id = heading.id
    
    // 计算距离
    const distance = Math.abs(top - 100)  // 距离顶部100px处
    
    // 如果这个标题比之前找到的更接近顶部可视区域
    if (distance < minDistance) {
      minDistance = distance
      currentId = id
    }
  }

  activeHeading.value = currentId
}

// 挂载事件监听
onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', updateActiveHeading)
    updateActiveHeading()
  }
})

// 监听ESC键关闭侧边栏和目录
const handleEscKey = (e) => {
  if (e.key === 'Escape') {
    if (sidebarOpen.value) {
      sidebarOpen.value = false
      document.body.classList.remove('overflow-hidden')
    }
    if (outlineOpen.value) {
      outlineOpen.value = false
    }
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
    window.removeEventListener('scroll', updateActiveHeading)
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
  /* 确保内容占满屏幕宽度 */
  .markdown-content {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    width: 100vw !important;
    max-width: none !important;
  }
  
  .markdown-content :deep(img) {
    max-width: 100%;
    height: auto;
  }
  
  /* 调整内容间距 */
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

/* 淡入淡出过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style> 