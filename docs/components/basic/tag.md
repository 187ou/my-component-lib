# # Tag 标签

用于标记、分类或描述事物状态的小型 UI 元素。支持不同主题色、可关闭、可选中、可自定义图标等功能。

## 基础用法

:::demo 最常见的标签

```vue
<template>
  <my-tag>默认标签</my-tag>
  <my-tag type="success">成功</my-tag>
  <my-tag type="warning">警告</my-tag>
  <my-tag type="danger">危险</my-tag>
  <my-tag type="info">信息</my-tag>
</template>
```

:::

## 可关闭标签

可通过 `closable` 展示关闭按钮。

:::demo 点击右侧关闭图标可移除标签

```vue
<template>
  <my-tag closable>可关闭标签</my-tag>
  <my-tag type="success" closable>成功</my-tag>
  <my-tag type="danger" closable>危险</my-tag>
</template>
```

:::

## 可选标签（Checkable）

标签可以在选中与非选中之间切换。

:::demo 使用 `checkable` 启用点击切换状态

```vue
<template>
  <my-tag checkable>默认</my-tag>
  <my-tag type="success" checkable>成功</my-tag>
  <my-tag type="warning" checkable>警告</my-tag>
</template>
```

:::

## 不同尺寸

:::demo 通过 `size` 控制标签大小

```vue
<template>
  <my-tag size="large">大型标签</my-tag>
  <my-tag size="medium">中等标签</my-tag>
  <my-tag size="small">小型标签</my-tag>
</template>
```

:::

## 图标标签

可使用 `icon` 属性或插槽自定义图标，并显示在标签左侧。

:::demo 添加图标

```vue
<template>
  <my-tag icon="icon-star">热门</my-tag>

  <!-- 使用插槽 -->
  <my-tag>
    <template #icon>🔥</template>
    热度
  </my-tag>
</template>
```

:::

## API

### Props

| 参数          | 说明       | 类型                                                          | 默认值         |
| ----------- | -------- | ----------------------------------------------------------- | ----------- |
| `type`      | 主题色类型    | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | `"primary"` |
| `size`      | 尺寸       | `"large" \| "medium" \| "small"`                            | `"medium"`  |
| `closable`  | 是否可关闭    | `boolean`                                                   | `false`     |
| `checkable` | 是否可切换选中态 | `boolean`                                                   | `false`     |
| `icon`      | 标签图标     | `string`                                                    | `""`        |
| `disabled`  | 是否禁用     | `boolean`                                                   | `false`     |

### Events

| 事件名      | 说明      | 参数                   |
| -------- | ------- | -------------------- |
| `close`  | 点击关闭图标时 | —                    |
| `change` | 选中状态变化时 | `(checked: boolean)` |

### Slots

| 插槽名       | 说明    |
| --------- | ----- |
| `default` | 标签文本  |
| `icon`    | 自定义图标 |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
