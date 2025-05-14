export default {
  title: 'VitePress',
  description: 'VitePress 文档站点',
  // Markdown配置
  markdown: {
    lineNumbers: true,
    // 配置代码块高亮
    theme: 'github-dark',
    // 启用所有Markdown扩展功能
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  // 忽略死链接检查
  ignoreDeadLinks: true,
  // 添加Vite配置
  vite: {
    // 移除外部配置文件引用，直接内联配置
    plugins: [
      // 在此添加Node.js polyfill支持
    ],
    resolve: {
      alias: {
        // 添加别名如需要
      }
    },
    optimizeDeps: {
      include: ['crypto-browserify', 'buffer', 'stream-browserify', 'events', 'util']
    },
    // 确保在开发和构建时都应用polyfill
    ssr: {
      noExternal: ['crypto-browserify', 'buffer', 'stream-browserify']
    }
  },
  themeConfig: {
    logo: {
      src: '/logo.svg',
      alt: 'VitePress Logo'
    },
    // 禁用导航链接
    docFooter: {
      prev: false,
      next: false
    },
    // 恢复导航栏
    nav: [
      { text: '指南', link: '/introduction/' },
      { text: '编写', link: '/writing/markdown' },
      { text: '参考', link: '/reference/' },
      {
        text: '2.0.0-alpha.5',
        items: [
          { text: '2.0.0-alpha.5', link: '#' },
          { text: '1.0.0', link: '#' },
        ]
      }
    ],
    // 恢复侧边栏
    sidebar: {
      '/introduction/': [
        {
          text: '介绍',
          items: [
            { text: '什么是VitePress', link: '/introduction/' },
            { text: '为什么选择VitePress', link: '/introduction/why-vitepress' },
            { text: '快速开始', link: '/introduction/getting-started' },
          ]
        }
      ],
      '/writing/': [
        {
          text: '编写',
          items: [
            { text: 'Markdown', link: '/writing/markdown' },
            { text: '资源处理', link: '/writing/asset-handling' },
          ]
        }
      ],
      '/reference/': [
        {
          text: 'API参考',
          items: [
            { text: '站点配置', link: '/reference/' },
            { text: '前端元数据', link: '/reference/frontmatter' },
            { text: '运行时API', link: '/reference/runtime-api' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // 启用搜索
    search: {
      provider: 'local'
    },
    // 大纲设置
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    // 本地化
    i18n: {
      search: '搜索',
      menu: '菜单',
      toc: '目录',
      returnToTop: '返回顶部',
      appearance: '外观',
      previous: '上一页',
      next: '下一页',
      pageNotFound: '页面未找到',
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  appearance: true,
  lastUpdated: false
} 