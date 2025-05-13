/**
 * 首页特性展示组件
 * 展示VitePress的主要特性和优势，通过卡片形式向用户介绍产品亮点
 */
import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "lucide:file-text",
    iconBg: "bg-gray-100",
    title: "专注内容",
    description: "只需 Markdown 即可轻松创建美观的文档站点。"
  },
  {
    icon: "logos:vitejs",
    iconBg: "bg-blue-50",
    title: "享受 Vite 无可比拟的体验",
    description: "服务器即时启动，内容的热更新，还可以使用基于 Vite 生态的插件。"
  },
  {
    icon: "logos:vue",
    iconBg: "bg-green-50",
    title: "使用 Vue 自定义",
    description: "直接在 Markdown 中使用 Vue 语法和组件，或者使用 Vue 组件构建自定义主题。"
  },
  {
    icon: "lucide:rocket",
    iconBg: "bg-orange-50",
    title: "速度真的很快！",
    description: "采用静态 HTML 实现快速的页面初次加载，使用客户端路由实现快速的页面切换导航。"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Features = () => {
  return (
    <section className="py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={item}>
            <Card className="feature-card border border-default-200 dark:border-zinc-800 dark:bg-zinc-900/30 h-full">
              <CardBody className="p-6">
                <div className={`feature-icon ${feature.iconBg} dark:bg-zinc-800`}>
                  <Icon icon={feature.icon} width={24} height={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-default-600 dark:text-zinc-400 text-sm">{feature.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};