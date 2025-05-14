import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    nodePolyfills({
      // 是否添加全部的Node.js全局变量和模块
      globals: {
        Buffer: true, // 启用Buffer
        global: true, // 启用global
        process: true, // 启用process
      },
      // 选择要包含的polyfill
      include: ['crypto', 'buffer', 'stream', 'util', 'events'],
      // 禁用不需要的polyfill
      exclude: ['fs']
    }),
  ],
  // 解决可能的路径问题
  resolve: {
    alias: {
      // 添加需要的别名
    }
  },
  // 为VitePress提供特殊配置
  optimizeDeps: {
    include: ['crypto-browserify']
  }
}) 