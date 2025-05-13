/**
 * 主应用文件 - VitePress UI Clone应用程序的主入口
 * 负责渲染主页和文档页面的布局，管理页面状态和导航逻辑
 */
import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Sidebar } from "./components/sidebar";
import { DocumentationPage } from "./components/documentation-page";
import { Icon } from "@iconify/react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeItem, setActiveItem] = useState("markdown");
  const [isMobileView, setIsMobileView] = useState(false);

  // 根据窗口大小判断是否为移动视图
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    // 初始检查
    checkIfMobile();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkIfMobile);
    
    // 清理事件监听
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
    if (page === "docs" && activeItem === "markdown") {
      // 如果通过Hero点击"什么是VitePress?"按钮进入文档页面，设置activeItem为"what-is-vitepress"
      setActiveItem("what-is-vitepress");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {currentPage === "home" ? (
        <main>
          <Hero setCurrentPage={handleSetCurrentPage} />
          <Features />
        </main>
      ) : (
        <div className="flex flex-col md:flex-row flex-1 w-full">
          <Sidebar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            activeItem={activeItem} 
            setActiveItem={setActiveItem} 
          />
          <main className="flex-1 overflow-auto pb-20 md:pb-0">
            <DocumentationPage activeItem={activeItem} />
          </main>
        </div>
      )}
      
      {/* 移动端底部导航 */}
      {isMobileView && currentPage !== "home" && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-2 px-4 flex justify-around z-30">
          <button 
            onClick={() => setCurrentPage("home")}
            className="flex flex-col items-center text-xs text-gray-700 dark:text-zinc-300"
          >
            <Icon icon="lucide:home" className="mb-1" width={20} height={20} />
            首页
          </button>
          <button 
            onClick={() => {}}
            className="flex flex-col items-center text-xs text-gray-700 dark:text-zinc-300"
          >
            <Icon icon="lucide:book-open" className="mb-1" width={20} height={20} />
            文档
          </button>
          <button 
            onClick={() => {}}
            className="flex flex-col items-center text-xs text-gray-700 dark:text-zinc-300"
          >
            <Icon icon="lucide:list" className="mb-1" width={20} height={20} />
            目录
          </button>
        </div>
      )}
    </div>
  );
}

export default App;