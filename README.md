# VitePress UI项目

这是一个基于VitePress的文档站点项目，使用TailwindCSS进行样式设计。该项目由原React UI克隆项目迁移而来，保持了相同的视觉风格，同时获得了VitePress的内容管理优势。

## 项目结构

```
vitepress-project/         # VitePress项目目录
├── docs/                  # 文档内容目录
│   ├── .vitepress/        # VitePress配置目录
│   │   ├── theme/         # 自定义主题
│   │   └── config.js      # VitePress配置文件
│   ├── introduction/      # 介绍文档
│   ├── writing/           # 编写指南
│   └── public/            # 公共资源
└── package.json           # 项目依赖
```

## 功能特性

- 美观的UI设计，与原React克隆版视觉效果相似
- 基于Markdown的内容管理
- 支持明亮/暗黑主题切换
- 响应式布局，适配各种设备尺寸
- 自定义组件和样式

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

或者，从项目根目录启动:

```bash
npm run dev
```

构建项目:

```bash
npm run build
```

## 注意

这个项目是从React UI克隆迁移而来，保留了旧项目的视觉设计，但完全重构为VitePress项目。旧项目的文件已经备份到`old-react-ui`目录中。

## 技术栈

- [React](https://reactjs.org/) - UI 构建库
- [Vite](https://vitejs.dev/) - 现代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式解决方案
- [HeroUI](https://heroui.com/) - UI 组件库
- [Framer Motion](https://www.framer.com/motion/) - 动画库

## 参考资源

- [VitePress 官方网站](https://vitepress.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Vite 指南](https://vitejs.dev/guide/)

version-1.0# Vitepress-UI
