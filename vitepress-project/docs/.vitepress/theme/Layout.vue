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
          <Sidebar />
          <main class="flex-1 overflow-auto pb-20 md:pb-0">
            <!-- 文档内容 -->
            <div class="markdown-content p-6 md:p-8 lg:p-10 mx-auto max-w-4xl">
              <Content />
            </div>
          </main>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
const { frontmatter } = useData()

const isHomePage = computed(() => {
  return frontmatter.value.layout === 'home' || route.path === '/'
})
</script>

<style>
/* 保证内容区域样式正确 */
.markdown-content {
  width: 100%;
}

/* 重置可能的默认边距 */
.markdown-content :deep(*) {
  margin-top: revert;
  margin-bottom: revert;
}

/* 确保标题样式 */
.markdown-content :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #111827;
}

.dark .markdown-content :deep(h1) {
  color: #f9fafb;
}

.markdown-content :deep(h2) {
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  line-height: 1.3;
  color: #111827;
}

.dark .markdown-content :deep(h2) {
  color: #f9fafb;
  border-bottom-color: #374151;
}

.markdown-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: #111827;
}

.dark .markdown-content :deep(h3) {
  color: #f9fafb;
}

/* 确保段落和列表的间距 */
.markdown-content :deep(p) {
  margin-bottom: 1.25rem;
  line-height: 1.7;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.markdown-content :deep(li) {
  margin-bottom: 0.5rem;
}

/* 美化代码块 */
.markdown-content :deep(pre) {
  border-radius: 0.375rem;
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f3f4f6;
  overflow-x: auto;
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
  margin: 1.5rem 0;
  overflow-x: auto;
  display: block;
}

.markdown-content :deep(table th),
.markdown-content :deep(table td) {
  border: 1px solid #e5e7eb;
  padding: 0.75rem;
  text-align: left;
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
  margin: 2rem 0;
}

.dark .markdown-content :deep(hr) {
  border-top-color: #374151;
}
</style> 