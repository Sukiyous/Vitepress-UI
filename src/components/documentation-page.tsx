/**
 * 文档页面主体内容组件
 * 根据activeItem参数渲染不同的文档内容，包括Markdown扩展和VitePress介绍页面
 * 同时提供右侧的页面导航功能
 */
import React from "react";
import { Card, Code, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
export const DocumentationPage = ({ activeItem }) => {
  if (activeItem === "what-is-vitepress") {
    return <WhatIsVitePress />;
  }
  
  // 默认显示Markdown扩展内容
  return (
    <div className="py-8 px-4 md:px-8 max-w-none mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1 max-w-none mx-auto md:mx-0 md:pr-72 lg:pr-80">
          <h1 className="text-3xl font-bold mb-4">Markdown 扩展</h1>
          <p className="text-gray-600 dark:text-zinc-400 mb-8">VitePress 带有内置的 Markdown 扩展。</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 id="anchor" className="text-2xl font-semibold mb-4 group">
                标题锚点
                <a href="#anchor" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">标题会自动应用锚点。可以使用 <Code>markdown.anchor</Code> 选项配置锚点的渲染。</p>
            </section>
            
            <section className="mb-10">
              <h2 id="custom-anchor" className="text-2xl font-semibold mb-4 group">
                自定义锚点
                <a href="#custom-anchor" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：</p>
              
              <Card className="mb-4 bg-zinc-50 dark:bg-zinc-900 border border-default-200 dark:border-zinc-800">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code>
                    # 使用自定义锚点 {"{#my-anchor}"}
                  </code>
                </pre>
              </Card>
              
              <p className="mb-4">这允许将标题链接为 <Code>#my-anchor</Code>，而不是默认的 <Code>#使用自定义锚点</Code>。</p>
            </section>
            
            <Divider className="my-8" />
            
            <section className="mb-10">
              <h2 id="links" className="text-2xl font-semibold mb-4 group">
                链接
                <a href="#links" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">内部和外部链接都会被特殊处理。</p>
            </section>
            
            <section className="mb-10">
              <h2 id="internal-links" className="text-2xl font-semibold mb-4 group">
                内部链接
                <a href="#internal-links" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">内部和外部链接部分都会被特殊处理。</p>
            </section>
          </div>
        </div>
        
        <div className="w-full md:w-64 md:flex-shrink-0 md:fixed md:right-4 lg:right-8 xl:right-16 2xl:right-32 md:top-20">
          <div className="pt-4">
            <div className="border-l border-gray-200 dark:border-zinc-800 pl-4 relative z-10">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-zinc-400 mb-4">页面导航</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#anchor" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">标题锚点</a>
                </li>
                <li>
                  <a href="#custom-anchor" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">自定义锚点</a>
                </li>
                <li>
                  <a href="#links" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">链接</a>
                </li>
                <li>
                  <a href="#internal-links" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">内部链接</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// "什么是VitePress?"页面组件
const WhatIsVitePress = () => {
  return (
    <div className="py-8 px-4 md:px-8 max-w-none mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1 max-w-none mx-auto md:mx-0 md:pr-72 lg:pr-80">
          <h1 className="text-3xl font-bold mb-4">什么是 VitePress?</h1>
          <p className="text-gray-600 dark:text-zinc-400 mb-8">
            VitePress 是一个静态站点生成器（SSG），专为构建快速、以内容为中心的网站而设计。
          </p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 id="introduction" className="text-2xl font-semibold mb-4 group">
                简介
                <a href="#introduction" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">
                VitePress 是由 Vue.js 团队创建的静态站点生成器，基于 Vite 构建。它专为技术文档而设计，但也可用于构建任何静态网站。
              </p>
              <p className="mb-4">
                VitePress 采用 Markdown 作为其内容格式，并使用 Vue 的组件系统、响应式框架和虚拟DOM的强大功能来提供增强的内容呈现。
              </p>
            </section>
            
            <section className="mb-10">
              <h2 id="why-vitepress" className="text-2xl font-semibold mb-4 group">
                为什么选择VitePress
                <a href="#why-vitepress" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">VitePress 有几个突出的特点使其成为文档网站的绝佳选择：</p>
              
              <ul className="list-disc pl-6 mb-4">
                <li><strong>速度快</strong> - 由 Vite 提供支持的极快的开发和构建速度</li>
                <li><strong>简单</strong> - 简约 API 设计，专注于内容</li>
                <li><strong>强大</strong> - 支持 Markdown 增强功能和 Vue 组件</li>
                <li><strong>轻量</strong> - 精简的客户端运行时，优化的构建输出</li>
              </ul>
            </section>
            
            <Divider className="my-8" />
            
            <section className="mb-10">
              <h2 id="features" className="text-2xl font-semibold mb-4 group">
                特性
                <a href="#features" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">VitePress 提供了许多强大的功能：</p>
              
              <Card className="mb-6 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Markdown 增强</h3>
                  <p>支持标题锚点、自定义容器、代码高亮、行号、代码组、导入代码片段等。</p>
                </div>
              </Card>
              
              <Card className="mb-6 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                <div className="p-4">
                  <h3 className="font-medium mb-2">Vue 集成</h3>
                  <p>在 Markdown 中使用 Vue 组件和指令，创建交互式文档。</p>
                </div>
              </Card>
              
              <Card className="mb-6 bg-zinc-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
                <div className="p-4">
                  <h3 className="font-medium mb-2">主题自定义</h3>
                  <p>轻松自定义默认主题或创建自己的自定义主题。</p>
                </div>
              </Card>
            </section>
            
            <section className="mb-10">
              <h2 id="how-it-works" className="text-2xl font-semibold mb-4 group">
                工作原理
                <a href="#how-it-works" className="ml-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:link" />
                </a>
              </h2>
              <p className="mb-4">
                VitePress 在构建时将 Markdown 文件转换为 HTML，并在生产环境中提供静态文件以实现最佳性能。它还提供了一个开发服务器，支持热模块替换（HMR）以获得良好的开发体验。
              </p>
              <p className="mb-4">
                VitePress 网站的生产版本是完全静态的 HTML，可以部署到任何静态网站托管服务，如 Netlify、GitHub Pages、Vercel 等。
              </p>
            </section>
          </div>
        </div>
        
        <div className="w-full md:w-64 md:flex-shrink-0 md:fixed md:right-4 lg:right-8 xl:right-16 2xl:right-32 md:top-20">
          <div className="pt-4">
            <div className="border-l border-gray-200 dark:border-zinc-800 pl-4 relative z-10">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-zinc-400 mb-4">页面导航</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#introduction" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">简介</a>
                </li>
                <li>
                  <a href="#why-vitepress" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">为什么选择VitePress</a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">特性</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">工作原理</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};