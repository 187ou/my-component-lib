# Link 链接

文字超链接组件，用于页面内的导航或跳转到外部链接。

## 基础用法

:::demo
```vue
<template>
  <my-link href="https://example.com">普通链接</my-link>
  <br /><br />
  <my-link href="https://example.com" type="primary">主要链接</my-link>
  <br /><br />
  <my-link href="https://example.com" type="success">成功链接</my-link>
  <br /><br />
  <my-link href="https://example.com" type="warning">警告链接</my-link>
  <br /><br />
  <my-link href="https://example.com" type="danger">危险链接</my-link>
</template>
```
:::

## 不同尺寸

:::demo
```vue
<template>
  <my-link href="#" size="large">大号链接</my-link>
  <br /><br />
  <my-link href="#" size="medium">中号链接</my-link>
  <br /><br />
  <my-link href="#" size="small">小号链接</my-link>
</template>
```
:::

## 带下划线

:::demo
```vue
<template>
  <my-link href="#" underline>带下划线链接</my-link>
  <br /><br />
  <my-link href="#" type="primary" underline>主要下划线链接</my-link>
</template>
```
:::

## 禁用状态

:::demo
```vue
<template>
  <my-link href="https://example.com" disabled>禁用链接</my-link>
  <br /><br />
  <my-link href="https://example.com" type="primary" disabled>禁用主要链接</my-link>
</template>
```
:::

## 新标签页打开

:::demo
```vue
<template>
  <my-link href="https://example.com" open-in-new-tab>新标签页打开</my-link>
  <br /><br />
  <my-link href="https://example.com" target="_blank">使用 target 属性</my-link>
</template>
```
:::

## 带图标

:::demo
```vue
<template>
  <my-link href="#" icon="icon-search">搜索链接</my-link>
  <br /><br />
  <my-link href="#" type="primary" icon="icon-download">下载链接</my-link>
</template>
```
:::

## 自定义图标插槽

:::demo
```vue
<template>
  <my-link href="#">
    <template #prefix>🔍</template>
    搜索链接
  </my-link>
  <br /><br />
  <my-link href="#" type="primary">
    <template #suffix>📎</template>
    附件链接
  </my-link>
</template>
```
:::

## 无链接地址

:::demo
```vue
<template>
  <my-link>无链接文本</my-link>
  <br /><br />
  <my-link type="primary">无链接主要文本</my-link>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| href | 链接地址 | string | '' |
| type | 链接类型 | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' |
| size | 链接尺寸 | 'large' \| 'medium' \| 'small' | 'medium' |
| disabled | 是否禁用 | boolean | false |
| underline | 是否显示下划线 | boolean | false |
| target | 链接目标 | '_blank' \| '_self' \| '_parent' \| '_top' | '_self' |
| icon | 图标类名 | string | '' |
| open-in-new-tab | 是否在新标签页打开 | boolean | false |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击事件 | (event: MouseEvent) => void |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 链接文本内容 |
| prefix | 前缀图标内容 |
| suffix | 后缀图标内容 |