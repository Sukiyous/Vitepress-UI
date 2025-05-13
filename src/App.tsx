/**
 * 主应用文件 - VitePress UI Clone应用程序的主入口
 * 负责渲染主页和文档页面的布局，管理页面状态和导航逻辑
 */
import React, { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Sidebar } from "./components/sidebar";
import { DocumentationPage } from "./components/documentation-page";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeItem, setActiveItem] = useState("markdown");

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
        <div className="flex flex-1 w-full">
          <Sidebar 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            activeItem={activeItem} 
            setActiveItem={setActiveItem} 
          />
          <main className="flex-1 overflow-auto">
            <DocumentationPage activeItem={activeItem} />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;