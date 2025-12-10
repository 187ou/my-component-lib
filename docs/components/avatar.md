# Avatar 头像

`MyAvatar` 用于展示用户头像，支持图片、图标与文本三种展示方式，并提供尺寸、形状、加载失败回退等丰富能力，可满足大多数用户信息场景。

> 组件基于原生 `<img>` 封装，除下表列出的属性外，也可透传原生图片属性。

---

## 引入组件

```ts
import { MyAvatar } from "my-component-lib";
```

在模板中直接使用：

```vue
<my-avatar src="https://example.com/avatar.png" />
```

---

## 示例

### 1. 基础用法

:::demo 通过 `src` 提供图片地址

```vue
<template>
  <my-avatar src="https://placehold.co/64x64" />
  <my-avatar src="https://placehold.co/64x64" :size="48" />
  <my-avatar src="https://placehold.co/64x64" :size="40" shape="square" />
</template>
```

:::

### 2. 尺寸控制

组件支持三种预设尺寸 (`small` \| `medium` \| `large`) 以及任意像素尺寸（数字），默认 `medium`。

:::demo 通过 `size` 控制尺寸

```vue
<template>
  <my-avatar src="https://placehold.co/64" size="small" />
  <my-avatar src="https://placehold.co/64" size="medium" />
  <my-avatar src="https://placehold.co/64" size="large" />
  <my-avatar src="https://placehold.co/64" :size="80" />
</template>
```

:::

### 3. 形状切换

可通过 `shape` 属性在圆形 (`circle`) 与方形 (`square`) 之间切换。

:::demo `shape` 示例

```vue
<template>
  <my-avatar src="https://placehold.co/64" />
  <my-avatar src="https://placehold.co/64" shape="square" />
</template>
```

:::

### 4. 加载失败回退

当图片加载失败时，将自动回退到图标或文本展示：

1. 首先检查 `icon` 是否传入，若存在显示图标。
2. 若未传入 `icon`，但存在 `text`，则显示其首字母。
3. `error` 事件会在加载失败时触发，可用于业务上报或兜底。

:::demo 加载失败显示 `icon` / `text`

```vue
<template>
  <!-- 图片失效时显示自定义图标 -->
  <my-avatar src="invalid.png" icon="user" />

  <!-- 图片失效时显示首字母 -->
  <my-avatar src="invalid.png" text="Alice" />
</template>
```

:::

### 5. 懒加载

当 `lazy` 设置为 `true` 时，组件将在进入视口后才开始加载图片，可配合滚动列表优化性能。

:::demo 懒加载示例

```vue
<template>
  <my-avatar
    v-for="n in 8"
    :key="n"
    src="https://placehold.co/64x64"
    :lazy="true"
  />
</template>
```

:::

---

## API

### Props

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| `src` | 图片地址 | `string` | — |
| `size` | 尺寸，支持预设值或数字像素 | `"small" \| "medium" \| "large" \| number` | `"medium"` |
| `shape` | 形状 | `"circle" \| "square"` | `"circle"` |
| `alt` | 图片替代文本 | `string` | — |
| `fit` | 图片裁剪填充方式（同 `object-fit`） | `"fill" \| "contain" \| "cover" \| "none" \| "scale-down"` | `"cover"` |
| `icon` | 当无图片时显示的图标名称 | `string` | `""` |
| `text` | 当无图片且无图标时显示的文本，将取首字母 | `string` | `""` |
| `lazy` | 是否使用懒加载 | `boolean` | `false` |
| `errorIcon` | 图片加载失败时默认显示的图标 | `string` | `"user"` |

### Events

| 事件名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
| `load` | 图片加载成功触发 | `Event` |
| `error` | 图片加载失败触发 | `Event` |

### Slots

组件本身不暴露自定义插槽，如需特殊展示可结合外部容器实现。

---

## FAQ

| 问题 | 解答 |
| ---- | ---- |
| 图片不显示怎么办？ | 请检查 `src` 是否正确、是否跨域或网络可达，并关注 `error` 事件回调。 |
| 如何自定义加载失败时的占位？ | 可以通过 `icon` 或 `text` 属性提供图标或文本，也可在 `error` 事件中替换组件。 |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉