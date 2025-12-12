# Card 卡片

`LinCard` 用于将信息组合成独立的可视化容器，常用于展示区块化的信息、数据或操作面板。支持标题、封面、阴影、边框、悬浮动效、页脚等丰富配置，帮助你轻松构建仪表盘、列表项、信息概览等场景。

> 组件基于普通 `div` 封装，可自由透传原生 `div` 的其余属性（如 `style` / `class` / `data-*` 等）。

---

## 引入组件

```ts
import { LinCard } from 'my-component-lib'
```

在模板中直接使用：

```vue
<lin-card header="标题" sub-header="副标题">
  这里是正文内容
</lin-card>
```

---

## 示例

### 1. 基础用法

:::demo 最基础的卡片结构，包含标题和正文内容。
```vue
<template>
  <lin-card header="卡片标题">卡片内容</lin-card>
</template>
```
:::

### 2. 带副标题

:::demo 通过 `sub-header` 提供副标题。
```vue
<template>
  <lin-card header="主标题" sub-header="副标题">详细内容...</lin-card>
</template>
```
:::

### 3. 阴影与悬浮效果

- `shadow` 控制阴影出现时机：`always`（始终显示）/ `hover`（悬浮时显示）/ `never`（无阴影）。
- `hoverable` 使卡片在鼠标悬停时轻微上浮，营造可点击感。

:::demo 设置阴影与悬浮效果
```vue
<template>
  <lin-card header="总览" shadow="always">始终有阴影</lin-card>
  <lin-card header="交互" shadow="hover" :hoverable="true">悬浮阴影 & 上浮</lin-card>
  <lin-card header="平面" shadow="never">无阴影</lin-card>
</template>
```
:::

### 4. 带封面

:::demo 通过 `cover` 属性或 `cover` 插槽插入顶部封面。
```vue
<template>
  <lin-card
    header="猫咪"
    sub-header="可爱的喵喵"
    cover="https://placehold.co/600x200"
  >
    喵星人是一种神奇的生物…
  </lin-card>

  <!-- 使用插槽自定义封面 -->
  <lin-card header="自定义封面">
    <template #cover>
      <video src="/video/intro.mp4" autoplay muted loop></video>
    </template>
    这里是正文
  </lin-card>
</template>
```
:::

### 5. 页脚操作区域

通过 `footer` 插槽可在底部放置操作按钮、链接等。

:::demo 页脚示例
```vue
<template>
  <lin-card header="订单信息" sub-header="2025/12/10">
    <p>订单号：#1008611</p>
    <p>金额：¥ 199.00</p>
    <template #footer>
      <lin-button size="small">查看详情</lin-button>
      <lin-button size="small" type="primary">支付</lin-button>
    </template>
  </lin-card>
</template>
```
:::

### 6. 自定义 Body 样式

可使用 `body-style` 对内容区进行行内样式扩展，如自定义内边距、背景色。

:::demo 自定义内容区样式
```vue
<template>
  <lin-card header="统计" :body-style="{ padding: '0' }">
    <chart-component />
  </lin-card>
</template>
```
:::

---

## API

### Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| `header` | 标题文本（支持 `header` 插槽覆盖） | `string` | — | `""` |
| `subHeader` | 副标题文本 | `string` | — | `""` |
| `shadow` | 阴影显示时机 | `'always' \| 'hover' \| 'never'` | — | `'hover'` |
| `border` | 是否显示边框 | `boolean` | — | `true` |
| `hoverable` | 悬浮提升动画 | `boolean` | — | `false` |
| `cover` | 封面图片地址（`cover` 插槽优先生效） | `string` | — | `""` |
| `bodyStyle` | 内容区自定义样式 | `CSSProperties` | — | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| `click` | 点击卡片触发 | `MouseEvent` |
| `header-click` | 点击标题区域触发 | `MouseEvent` |

### Slots

| 插槽名 | 说明 |
| ------ | ---- |
| `default` | 卡片主体内容 |
| `cover` | 封面区域，自定义图片、视频等 |
| `header` | 自定义标题区域，优先级高于 `header` / `subHeader` Props |
| `footer` | 页脚操作区域 |

---

如有更多需求或反馈，欢迎在 Issue 中提出！🎉
