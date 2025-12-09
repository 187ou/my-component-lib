# Button 按钮

常用的操作按钮，支持不同主题色、尺寸以及多种扩展形态，可满足绝大多数业务场景。

> 本组件基于原生 `<button>` 封装，支持所有原生属性。

## 基础用法

:::demo 基础按钮示例

```vue
<template>
  <my-button>默认按钮</my-button>
  <my-button type="success">成功按钮</my-button>
  <my-button type="warning">警告按钮</my-button>
  <my-button type="danger">危险按钮</my-button>
  <my-button type="info">信息按钮</my-button>
</template>
```

:::

## 不同尺寸

:::demo 通过 `size` 控制按钮尺寸

```vue
<template>
  <my-button size="large">大型按钮</my-button>
  <my-button size="medium">中等按钮</my-button>
  <my-button size="small">小型按钮</my-button>
</template>
```

:::

## 朴素按钮（Plain）

与主题色按钮相比，朴素按钮背景透明，仅保留边框与文字颜色，常用于弱化层级或与背景融为一体的场景。

:::demo 设置 `plain` 属性

```vue
<template>
  <my-button plain>默认朴素</my-button>
  <my-button type="success" plain>成功朴素</my-button>
  <my-button type="danger" plain>危险朴素</my-button>
</template>
```

:::

## 文字按钮（Text / Link）

文字按钮去除背景与边框，仅保留文字本身，鼠标悬停时下划线高亮，适合作为链接或次要操作。

:::demo 设置 `text` 属性

```vue
<template>
  <my-button text>文字按钮</my-button>
  <my-button type="primary" text>主要文字</my-button>
  <my-button type="danger" text>危险文字</my-button>
</template>
```

:::

## 圆角 & 圆形按钮

- `round`：将按钮四角设为较大圆角，常见于卡片底部操作。
- `circle`：按钮呈完美圆形，内部通常只包含图标。

:::demo `round` 与 `circle` 示例

```vue
<template>
  <my-button round>圆角按钮</my-button>
  <my-button type="success" round>成功圆角</my-button>

  <my-button circle icon="icon-search" />
  <my-button type="danger" circle icon="icon-delete" />
</template>
```

````
:::

## 块级按钮（Block）

占据父元素宽度 100%，多用于移动端或表单底部提交按钮。

:::demo 设置 `block` 属性
```vue
<template>
  <my-button type="primary" block>块级按钮</my-button>
</template>
````

:::

## 禁用和加载状态

按钮可通过 `disabled` 禁用交互，也可使用 `loading` 显示加载中状态。

:::demo 禁用与加载

```vue
<template>
  <my-button disabled>禁用按钮</my-button>
  <my-button type="primary" :loading="true">加载中</my-button>
</template>
```

:::

## 图标按钮

可以通过 `icon` 属性或插槽插入图标，与文字组合显示。

:::demo `icon` 属性或 `icon` 插槽

```vue
<template>
  <my-button icon="icon-edit">编辑</my-button>

  <!-- 使用插槽自定义图标 -->
  <my-button>
    <template #icon> ✨ </template>
    自定义图标
  </my-button>
</template>
```

:::

## API

### Props

| 参数       | 说明                  | 类型                                                        | 可选值 | 默认值      |
| ---------- | --------------------- | ----------------------------------------------------------- | ------ | ----------- |
| `type`     | 主题色类型            | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | —      | `"primary"` |
| `size`     | 尺寸                  | `"large" \| "medium" \| "small"`                            | —      | `"medium"`  |
| `disabled` | 是否禁用              | `boolean`                                                   | —      | `false`     |
| `loading`  | 是否处于加载中        | `boolean`                                                   | —      | `false`     |
| `icon`     | 内置图标名            | `string`                                                    | —      | `""`        |
| `plain`    | 朴素按钮              | `boolean`                                                   | —      | `false`     |
| `text`     | 文字按钮              | `boolean`                                                   | —      | `false`     |
| `round`    | 大圆角按钮            | `boolean`                                                   | —      | `false`     |
| `circle`   | 圆形按钮              | `boolean`                                                   | —      | `false`     |
| `block`    | 块级按钮（宽度 100%） | `boolean`                                                   | —      | `false`     |

### Events

| 事件名  | 说明         | 回调参数     |
| ------- | ------------ | ------------ |
| `click` | 点击按钮触发 | `MouseEvent` |

### Slots

| 插槽名    | 说明                             |
| --------- | -------------------------------- |
| `default` | 按钮文本内容                     |
| `icon`    | 图标插槽，优先级高于 `icon` 属性 |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
