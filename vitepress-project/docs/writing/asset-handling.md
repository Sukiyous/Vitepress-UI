# 资源处理

VitePress提供了多种方式来处理静态资源，如图片、样式表和字体等。

## 公共资源

放置在 `public` 目录中的资源将按原样复制到生成的网站中，可通过根路径直接访问：

```md
![图片描述](/logo.png)
```

## 相对路径引用

你也可以使用相对路径从Markdown文件引用放置在项目中的图片：

```md
![图片描述](./images/banner.jpg)
```

VitePress会自动处理这些相对路径，以确保它们在开发和生产环境中均能正常工作。

## SVG组件

你可以将SVG文件作为Vue组件导入：

```vue
<script setup>
import Logo from './Logo.svg'
</script>

<template>
  <Logo class="w-12 h-12" />
</template>
```

## 样式和CSS

VitePress支持直接导入CSS文件：

```js
// .vitepress/theme/index.js
import './styles/main.css'
```

你也可以使用CSS预处理器，例如Sass或Less：

```js
// .vitepress/theme/index.js
import './styles/main.scss'
```

## 字体文件

字体文件可以放在 `public` 目录中并在CSS中引用：

```css
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
``` 