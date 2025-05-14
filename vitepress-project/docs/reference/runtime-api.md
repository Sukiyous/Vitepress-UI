# 运行时 API

VitePress提供了一组可在主题组件、Markdown内容或用户组件中使用的运行时API。

## useData

`useData`钩子返回站点特定的数据，适用于当前页面。

```js
import { useData } from 'vitepress'

export default {
  setup() {
    const { theme, page, frontmatter, lang } = useData()
    
    // theme - 主题配置（来自themeConfig）
    console.log(theme.value)
    
    // page - 当前页面的数据
    console.log(page.value)
    
    // frontmatter - 当前页面的frontmatter
    console.log(frontmatter.value)
    
    // lang - 站点的语言
    console.log(lang.value)
  }
}
```

## useRoute

`useRoute`钩子返回当前路由对象。

```js
import { useRoute } from 'vitepress'

export default {
  setup() {
    const route = useRoute()
    
    // 路径 - 当前页面的路径
    console.log(route.path)
    
    // data - 页面数据
    console.log(route.data)
  }
}
```

## withBase

`withBase`函数用于将相对路径前置基础路径。

```js
import { withBase } from 'vitepress'

// 如果基础路径是'/base/'
const path = withBase('/foo') // 结果是'/base/foo'
```

## 暗黑模式

VitePress提供了用于切换深色/浅色模式的API。

```js
import { useData } from 'vitepress'

export default {
  setup() {
    const { isDark } = useData()
    
    // 检查是否是深色模式
    console.log(isDark.value)
    
    // 切换模式
    function toggleDark() {
      isDark.value = !isDark.value
    }
    
    return {
      isDark,
      toggleDark
    }
  }
}
``` 