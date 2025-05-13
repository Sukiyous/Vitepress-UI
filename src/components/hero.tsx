/**
 * 首页顶部Hero区域组件
 * 显示网站标题、副标题和主要行动按钮，是用户访问首页时看到的第一个主要内容区
 */
import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero = ({ setCurrentPage }) => {
  const handleVitePressClick = () => {
    setCurrentPage("docs");
  };
  
  return (
    <section className="hero-gradient py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-vp-blue to-vp-purple bg-clip-text text-transparent">VitePress</span>
            <div className="text-vp-text dark:text-white mt-2">
              由 Vite 和 Vue 驱动的<br />
              静态站点生成器
            </div>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-default-700 dark:text-zinc-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            将 Markdown 变成优雅的文档，只需几分钟
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              color="primary" 
              size="lg" 
              radius="md"
              className="font-medium"
              onClick={handleVitePressClick}
            >
              什么是 VitePress?
            </Button>
            <Button 
              variant="flat" 
              size="lg" 
              radius="md"
              className="font-medium"
            >
              快速开始
            </Button>
            <Button 
              variant="flat" 
              size="lg" 
              radius="md"
              className="font-medium"
              startContent={<Icon icon="lucide:github" />}
            >
              GitHub
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-[280px] h-[320px] md:w-[320px] md:h-[360px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-3xl shadow-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-3xl shadow-md flex items-center justify-center p-6 transform -rotate-3">
              <div className="flex flex-col items-center">
                <Icon icon="logos:vitejs" className="text-6xl mb-4" />
                <div className="text-blue-600 dark:text-blue-400 text-5xl font-bold mb-4">M↓</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};