# Markdown

VitePress使用Markdown作为其内容格式，并支持所有CommonMark规范，以及一些扩展功能。

## 基础语法

### 标题

```
# 一级标题
## 二级标题
### 三级标题
```

### 文本样式

**粗体**
*斜体*
~~删除线~~

示例代码：
```
**粗体**
*斜体*
~~删除线~~
```

### 列表

无序列表:
- 项目1
- 项目2
  - 子项目A
  - 子项目B

示例代码：
```
- 项目1
- 项目2
  - 子项目A
  - 子项目B
```

有序列表:
1. 第一步
2. 第二步
3. 第三步

示例代码：
```
1. 第一步
2. 第二步
3. 第三步
```

## VitePress扩展

### 代码块

```js
export function myFunction() {
  return {
    msg: 'Hello World'
  }
}
```

### 行高亮

```js{3}
export function myFunction() {
  // 这行不会被高亮
  return true // 这行会被高亮
}
```

### 导入代码片段

```md
<<< @/snippets/example.js
```

### 内置组件

::: info
这是一个信息容器
:::

::: warning
这是一个警告容器
:::

::: danger
这是一个危险警告容器
:::

::: details
这是一个详情展开容器
:::

示例代码：
```
::: info
这是一个信息容器
:::

::: warning
这是一个警告容器
:::

::: danger
这是一个危险警告容器
:::

::: details
这是一个详情展开容器
:::
``` 