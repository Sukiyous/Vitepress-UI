# API参考

这个部分包含了VitePress的API参考文档。

## 配置参考

VitePress站点配置是通过`.vitepress/config.js`文件定义的。

### 基本配置

```js
export default {
  // 站点级选项
  title: 'VitePress',
  description: '由Vue驱动的静态站点生成器',
  base: '/',
  lang: 'zh-CN',
  
  // 主题级选项
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: {...}
  }
}
```

### 主题配置

主题配置允许您自定义网站导航、侧边栏和其他视觉元素。

```js
export default {
  themeConfig: {
    // 导航栏链接
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      {
        text: '下拉菜单',
        items: [
          { text: '项目1', link: '/item1' },
          { text: '项目2', link: '/item2' }
        ]
      }
    ],
    
    // 侧边栏配置
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' }
          ]
        }
      ]
    }
  }
}
```

## Frontmatter

在Markdown文件顶部使用YAML格式定义页面特定属性。

```yaml
---
title: 自定义标题
description: 自定义描述
layout: home
hero:
  name: VitePress
  text: 由Vue驱动的静态站点生成器
  tagline: 简单、强大、高性能
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/
---
``` 