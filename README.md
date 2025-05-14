# VitePress UI项目

这是一个基于VitePress的文档站点项目，使用TailwindCSS进行样式设计。该项目完全基于VitePress实现，保持了优雅的视觉风格，同时获得了VitePress的内容管理优势。

## 项目结构

```
vitepress-project/         # VitePress项目目录
├── docs/                  # 文档内容目录
│   ├── .vitepress/        # VitePress配置目录
│   │   ├── theme/         # 自定义主题
│   │   │   ├── components/ # 自定义组件
│   │   │   └── styles/    # 样式文件
│   │   └── config.js      # VitePress配置文件
│   ├── introduction/      # 介绍文档
│   ├── writing/           # 编写指南
│   ├── reference/         # API参考文档
│   └── public/            # 公共资源
└── package.json           # 项目依赖
```

## 功能特性

- 美观的UI设计，基于TailwindCSS实现
- 基于Markdown的内容管理
- 支持明亮/暗黑主题切换
- 响应式布局，适配各种设备尺寸
- 自定义组件和样式
- 文档目录结构清晰，易于扩展

## 快速开始

安装依赖:

```bash
cd vitepress-project
npm install
```

启动开发服务器:

```bash
npm run docs:dev
```

构建项目:

```bash
npm run docs:build
```

预览构建结果:

```bash
npm run docs:preview
```

## 技术栈

- [VitePress](https://vitepress.dev/) - Vue驱动的静态站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [Vite](https://vitejs.dev/) - 现代前端构建工具
- [TailwindCSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Iconify](https://iconify.design/) - 图标系统

## 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Vue.js 指南](https://cn.vuejs.org/guide/introduction.html)

version-1.0# Vitepress-UI
