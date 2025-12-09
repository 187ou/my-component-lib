# Icon 图标

`MyIcon` 组件用于渲染项目内置的 SVG 图标，支持尺寸、颜色定制，并可与 Button / Input / Link 等组件无缝联动。所有图标均采用 Symbol Sprite 方式注入，可通过 `name` 属性快速调用。

> 当前组件仅负责渲染已有的图标符号，如需新增图标请参考「自定义 / 拓展」章节。

---

## 引入组件

```ts
import { MyIcon } from "my-component-lib";
```

在模板中直接使用：

```vue
<my-icon name="search" />
```

---

## 示例

### 1. 基础用法

:::demo 通过 `name` 指定图标名称

```vue
<template>
  <my-icon name="search" />
  <my-icon name="edit" />
  <my-icon name="delete" />
  <my-icon name="success" />
  <my-icon name="warning" />
</template>
```

:::

### 2. 调整尺寸

`size` 支持任何合法的 CSS 尺寸值（如 `16px`、`1.5em`、`2rem` 等）。

:::demo 通过 `size` 指定图标大小

```vue
<template>
  <my-icon name="search" size="16px" />
  <my-icon name="search" size="24px" />
  <my-icon name="search" size="32px" />
  <my-icon name="search" size="40px" />
</template>
```

:::

### 3. 修改颜色

可使用 `color` 属性快速修改图标颜色，默认继承父元素 `color`。

:::demo 通过 `color` 修改颜色

```vue
<template>
  <my-icon name="search" color="#409eff" />
  <my-icon name="search" color="#67c23a" />
  <my-icon name="search" color="#e6a23c" />
  <my-icon name="search" color="#f56c6c" />
</template>
```

:::

### 4. 与其他组件组合

`MyIcon` 可通过各组件的图标相关属性直接集成。

:::demo Button / Input / Link 中的使用

```vue
<template>
  <!-- Button -->
  <my-button type="primary" icon="search">搜索</my-button>
  <my-button type="success" icon="success">成功</my-button>
  <my-button type="warning" icon="warning">警告</my-button>
  <my-button type="danger" icon="delete">删除</my-button>

  <!-- Input -->
  <my-input v-model="inputValue" placeholder="搜索" prefix-icon="search" />
  <br />
  <my-input
    v-model="inputValue"
    placeholder="密码"
    type="password"
    suffix-icon="warning"
  />

  <!-- Link -->
  <my-link href="#" prefix-icon="search">搜索链接</my-link>
  <br />
  <my-link href="#" suffix-icon="download">下载链接</my-link>
</template>

<script setup lang="ts">
import { ref } from "vue";
const inputValue = ref("");
</script>
```

:::

---

## API

### Props

| 属性  | 说明                                                      | 类型               | 默认值 |
| ----- | --------------------------------------------------------- | ------------------ | ------ |
| name  | 图标名称（必填），对应 `src/types/icon-types.ts` 中的名称 | `string`           | —      |
| size  | 图标尺寸，接受任何合法 CSS 尺寸值                         | `string \| number` | `1em`  |
| color | 图标颜色，接受任何合法 CSS 颜色值                         | `string`           | —      |

### Slots

组件本身 **不提供** 自定义插槽，若需在其他组件（Button / Input / Link 等）中自定义图标内容，可使用它们暴露的 `icon` / `prefix` / `suffix` 插槽。

### 事件

`MyIcon` 仅作为静态渲染组件，本身不触发任何自定义事件。

---

## 自定义 / 拓展

1. **新增图标**：

   - 将 `svg` 文件导入到项目的图标打包脚本（例如 `vite-plugin-svg-icons`）目录中。
   - 运行打包脚本后会生成对应的 Symbol ID，规则通常为 `icon-<文件名>`。
   - 在 `src/types/icon-types.ts` 的 `iconNames` 数组中追加名称，以获得完整的类型提示。

2. **样式覆盖**：

   - 组件底层的 SVG 元素拥有 `my-icon` 基础类，可通过全局样式或深度选择器覆盖其 `fill`、`stroke`、`transition` 等属性。
   - 若需为特定图标定制样式，组件内部会为每个图标额外添加 `my-icon--<name>` 修饰类。

3. **可访问性 (a11y)**：
   - 组件内部使用 `<svg>` + `<use>` 组合，并添加 `aria-hidden="true"`，默认将图标标记为装饰作用，不参与辅助技术。
   - 如果图标承担语义含义，可改用 `<span role="img" aria-label="描述">` 方式自行实现。

---

## 常见问题 (FAQ)

| 问题                   | 解答                                                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 如何查看所有可用图标？ | 运行项目后，在浏览器控制台执行 `document.querySelectorAll('svg symbol')` 查看已注册的 Symbol ID；或阅读 `src/assets/icons` 目录下的文件名列表。 |
| 图标无法显示怎么办？   | 确认 `name` 是否在图标库中存在；若按需加载，请检查打包脚本是否正确生成 SVG Sprite；确认浏览器控制台无跨域或路径错误。                           |


---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
