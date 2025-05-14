# 快速开始

本指南将帮助你快速搭建一个VitePress站点。

## 先决条件

- [Node.js](https://nodejs.org/) 版本18或更高
- 命令行终端
- 文本编辑器

## 安装

创建并进入一个新目录

```bash
mkdir vitepress-demo
cd vitepress-demo
```

初始化项目

```bash
npm init -y
npm install -D vitepress
```

创建首个文档

```bash
mkdir docs
echo '# Hello VitePress' > docs/index.md
```

添加脚本到package.json

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
}
```

启动开发服务器

```bash
npm run docs:dev
```

现在你已经有了一个基本的VitePress站点！访问 [http://localhost:5173](http://localhost:5173) 即可查看。 