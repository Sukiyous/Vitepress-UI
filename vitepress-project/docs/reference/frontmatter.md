# Frontmatter

Frontmatter是VitePress页面的元数据配置，写在Markdown文件开头，使用YAML格式。

## 基本用法

```yaml
---
title: 页面标题
description: 页面描述
---
```

## 所有选项

### 页面元数据

```yaml
---
# 标题 - 显示在浏览器标题和搜索引擎结果中
title: 页面标题

# 描述 - 用于搜索引擎的元描述
description: 页面描述

# 头部标签 - 注入到页面头部
head:
  - - meta
    - name: og:title
      content: 自定义社交标题
  - - link
    - rel: icon
      href: logo.png
---
```

### 路由

```yaml
---
# 自定义页面永久链接
permalink: /custom-path

# 排除页面，使其不在最终构建中出现
excludeFromSidebar: true
---
```

### 首页配置

```yaml
---
layout: home

hero:
  name: 产品名称
  text: 产品标语
  tagline: 简短描述
  image:
    src: /logo.png
    alt: 产品Logo
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/org/repo

features:
  - title: 简单易用
    details: 使用Markdown进行内容编写，享受流畅的开发体验
    icon: 🚀
  - title: 高性能
    details: 基于Vite构建，提供快速的加载速度和热更新
    icon: ⚡
---
```

### 主题自定义

```yaml
---
# 自定义布局
layout: page

# 自定义容器类名
containerClass: my-container

# 覆盖默认主题的特定值
aside: false
outline: [2, 3]
---
``` 