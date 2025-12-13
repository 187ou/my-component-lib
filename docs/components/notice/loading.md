# Loading 加载中

提供全局或局部加载状态的显示组件，可用于按钮、页面或区域加载提示，支持不同尺寸和文本提示。

## 基础用法

:::demo 基础 Loading

```vue
<template>
  <my-loading />
  <my-loading text="加载中..." />
</template>
```

:::

## 自定义尺寸

:::demo 设置 size

```vue
<template>
  <my-loading size="small" text="小尺寸加载" />
  <my-loading size="medium" text="中等尺寸加载" />
  <my-loading size="large" text="大尺寸加载" />
</template>
```

:::

## 局部加载

:::demo 局部覆盖

```vue
<template>
  <div style="position: relative; width: 200px; height: 100px; border: 1px solid #ccc;">
    <my-loading :overlay="true" text="局部加载" />
    <p>区域内容</p>
  </div>
</template>
```

:::

## API

### Props

| 参数      | 说明       | 类型      | 默认值    |
| ------- | -------- | ------- | ------ |
| text    | 显示的文本    | string  | ''     |
| size    | 加载图标大小   | string  | medium |
| overlay | 是否显示遮罩   | boolean | false  |
| visible | 是否显示加载状态 | boolean | true   |

### Slots

| 插槽名     | 说明          |
| ------- | ----------- |
| default | 可自定义加载图标或内容 |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
