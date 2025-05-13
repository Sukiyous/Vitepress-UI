/**
 * 文档页面左侧侧边栏组件
 * 提供文档的分类导航和目录结构，负责处理文档页面的导航交互
 */
import React from "react";
import { Link, Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";

const sidebarItems = [
  {
    title: "简介",
    items: [
      { label: "什么是 VitePress?", href: "#what-is-vitepress", id: "what-is-vitepress" },
      { label: "快速开始", href: "#getting-started", id: "getting-started" },
      { label: "路由", href: "#routing", id: "routing" },
      { label: "部署", href: "#deployment", id: "deployment" }
    ]
  },
  {
    title: "写作",
    items: [
      { label: "Markdown 扩展", href: "#markdown", id: "markdown" },
      { label: "资源处理", href: "#asset-handling", id: "asset-handling" },
      { label: "frontmatter", href: "#frontmatter", id: "frontmatter" },
      { label: "在 Markdown 使用 Vue", href: "#using-vue", id: "using-vue" },
      { label: "国际化", href: "#i18n", id: "i18n" }
    ]
  },
  {
    title: "自定义",
    items: [
      { label: "自定义主题", href: "#custom-theme", id: "custom-theme" },
      { label: "扩展默认主题", href: "#extending-default-theme", id: "extending-default-theme" },
      { label: "构建时数据加载", href: "#build-data", id: "build-data" },
      { label: "SSR 兼容性", href: "#ssr-compat", id: "ssr-compat" },
      { label: "选择 CMS", href: "#cms", id: "cms" }
    ]
  },
  {
    title: "实验性功能",
    items: [
      { label: "MPA 模式", href: "#mpa", id: "mpa" }
    ]
  }
];

export const Sidebar = ({ currentPage, setCurrentPage, activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      {/* Mobile sidebar toggle */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary rounded-full p-3 text-white shadow-lg"
        >
          <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} width={24} height={24} />
        </button>
      </div>
      
      {/* Mobile sidebar overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-40 w-64 h-[100vh] bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800
          md:sticky md:top-16 md:h-[calc(100vh-64px)]
          transform transition-transform duration-300 ease-in-out md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-4 h-[60px] flex items-center border-b border-gray-200 dark:border-zinc-800 md:hidden">
          <div className="flex items-center gap-2">
            <Icon icon="logos:vitejs" className="text-2xl" />
            <span className="font-bold text-lg">VitePress</span>
          </div>
        </div>
        
        <div className="p-4 overflow-y-auto h-[calc(100vh-60px)] md:h-[calc(100vh-64px)]">
          <div className="flex flex-col gap-2">
            {sidebarItems.map((section, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-sm font-medium text-default-700 dark:text-zinc-300 mb-2 px-2">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-0.5">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className={`text-sm py-1 px-3 rounded-md ${
                        activeItem === item.id 
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium" 
                          : "text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveItem(item.id);
                        setCurrentPage("docs");
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};