export default {
  title: '云药家',
  description: 'VitePress 文档站点',
  // 添加基础路径配置，适配GitHub Pages
  base: '/Vitepress-UI/',
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
    // 修改导航栏，只保留"指南"
    nav: [
      { text: '操作指南', link: '/introduction/' },
      
      { text: '疑难报错', link: '/Problem/' },
      
    ],
    // 重新组织侧边栏，将"编写"和"参考"包含在主侧边栏中
    sidebar: {
      '/': [
        {
          text: '介绍',
          items: [
            { text: '什么是VitePress', link: '/introduction/' },
            { text: '为什么选择VitePress', link: '/introduction/why-vitepress' },
            { text: '快速开始', link: '/introduction/getting-started' },
          ]
        },
        {
          text: '基础档案',
          items: [
            { text: '商品管理', link: '/BaseArchice/' },
            { text: '档案A', link: '/BaseArchice/PriceTZ' },
            { text: '档案B', link: '/BaseArchice/ProdtManagement' },
          ]
        },

        {
          text: '编写',
          items: [
            { text: 'Markdown', link: '/writing/markdown' },
            { text: '资源处理', link: '/writing/asset-handling' },
          ]
        },
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
      message: '基于 Djc 许可发布',
      copyright: 'Copyright © 2025-present Evan You'
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
    ['link', { rel: 'icon', href: '/logo.svg' }],
    // 优化移动端视口设置
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover' }],
    // 添加适配iPhone的meta标签
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    // 添加主题色
    ['meta', { name: 'theme-color', content: '#646cff' }],
    // 避免内容被iOS底部工具栏遮挡
    ['style', {}, `
      @supports (padding: max(0px)) {
        body {
          padding-bottom: max(0px, env(safe-area-inset-bottom));
        }
        .fixed-bottom {
          padding-bottom: max(0px, env(safe-area-inset-bottom));
        }
      }
      /* 增加移动端内容间距 */
      @media (max-width: 767px) {
        .content {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
        .content > * {
          margin-bottom: 1.5rem;
        }
        .content p, .content ul, .content ol {
          line-height: 1.8;
        }
      }
    `]
  ],
  appearance: true,
  lastUpdated: false
} 