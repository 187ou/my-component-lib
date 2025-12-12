# Input 输入框

通过键盘或鼠标输入内容，是最常用的表单控件之一。

> 组件注册名：`MyInput`

---

## 基础用法

:::demo 基本的双向绑定

```vue
<template>
  <my-input v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
```

:::

## 不同尺寸

:::demo 通过 `size` 调整高度

```vue
<template>
  <my-input v-model="valueLarge" size="large" placeholder="大号输入框" />
  <br /><br />
  <my-input v-model="valueMedium" size="medium" placeholder="中号输入框" />
  <br /><br />
  <my-input v-model="valueSmall" size="small" placeholder="小号输入框" />
</template>

<script setup>
import { ref } from "vue";
const valueLarge = ref("");
const valueMedium = ref("");
const valueSmall = ref("");
</script>
```

:::

## 禁用状态

:::demo 设置 `disabled` 使输入框不可编辑

```vue
<template>
  <my-input v-model="value" disabled placeholder="已禁用" />
</template>

<script setup>
import { ref } from "vue";
const value = ref("禁用内容");
</script>
```

:::

## 可清空

:::demo 启用 `clearable` 显示一键清空按钮

```vue
<template>
  <my-input v-model="value" clearable placeholder="可清空输入框" />
</template>

<script setup>
import { ref } from "vue";
const value = ref("可清空内容");
</script>
```

:::

## 带图标

:::demo 使用插槽或属性添加前后缀图标

```vue
<template>
  <!-- 使用插槽 -->
  <my-input v-model="v1" placeholder="搜索">
    <template #prefix>🔍</template>
  </my-input>

  <br /><br />

  <!-- 使用属性 -->
  <my-input v-model="v2" placeholder="选择日期" suffix-icon="calendar" />
</template>

<script setup>
import { ref } from "vue";
const v1 = ref("");
const v2 = ref("");
</script>
```

:::

## 密码框

:::demo 配合 `type="password"` 与 `show-password` 显示/隐藏密码

```vue
<template>
  <my-input
    v-model="pwd"
    type="password"
    show-password
    placeholder="请输入密码"
  />
</template>

<script setup>
import { ref } from "vue";
const pwd = ref("123456");
</script>
```

:::

## 校验状态

:::demo 设置 `error` 显示错误样式

```vue
<template>
  <my-input v-model="value" error placeholder="错误输入" />
</template>

<script setup>
import { ref } from "vue";
const value = ref("错误内容");
</script>
```

:::

## 字数限制

:::demo 配合 `maxlength` 与 `show-word-limit`

```vue
<template>
  <my-input
    v-model="msg"
    maxlength="20"
    show-word-limit
    placeholder="最多 20 个字符"
  />
</template>

<script setup>
import { ref } from "vue";
const msg = ref("");
</script>
```

:::

---

## API

### Props

| 参数                  | 说明                                        | 类型                                                        | 可选值                                    | 默认值      |
| --------------------- | ------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------- | ----------- |
| model-value / v-model | 绑定值                                      | `string \| number`                                          | —                                         | `''`        |
| type                  | 输入框类型                                  | `string`                                                    | `text` / `password` / `number` 等原生类型 | `text`      |
| size                  | 尺寸                                        | `"large" \| "medium" \| "small"`                            | —                                         | `medium`    |
| placeholder           | 占位符                                      | `string`                                                    | —                                         | `''`        |
| disabled              | 是否禁用                                    | `boolean`                                                   | —                                         | `false`     |
| readonly              | 是否只读                                    | `boolean`                                                   | —                                         | `false`     |
| clearable             | 是否可清空                                  | `boolean`                                                   | —                                         | `false`     |
| error                 | 是否为错误状态                              | `boolean`                                                   | —                                         | `false`     |
| show-password         | 当 `type="password"` 时是否可切换明文       | `boolean`                                                   | —                                         | `false`     |
| maxlength             | 输入框最大长度                              | `number`                                                    | —                                         | `undefined` |
| show-word-limit       | 是否展示字数统计，需要配合 `maxlength` 使用 | `boolean`                                                   | —                                         | `false`     |
| input-type            | 主题样式类型，同全局 `Type`                 | `"primary" \| "success" \| "warning" \| "danger" \| "info"` | —                                         | `primary`   |
| prefix-icon           | 前缀图标名称，等同于 `MyIcon` 的 `name`     | `string`                                                    | 见图标列表                                | `''`        |
| suffix-icon           | 后缀图标名称，等同于 `MyIcon` 的 `name`     | `string`                                                    | 见图标列表                                | `''`        |

### Events

| 事件名            | 说明                                 | 回调参数                    |
| ----------------- | ------------------------------------ | --------------------------- |
| update:modelValue | 绑定值更新时触发                     | `(value: string \| number)` |
| input             | 输入时触发                           | `(value: string \| number)` |
| change            | 用户完成输入（失焦或按下回车）时触发 | `(value: string \| number)` |
| focus             | 获得焦点时触发                       | `(event: FocusEvent)`       |
| blur              | 失去焦点时触发                       | `(event: FocusEvent)`       |
| clear             | 点击清空按钮时触发                   | —                           |

### Slots

| 名称   | 说明                                 |
| ------ | ------------------------------------ |
| prefix | 输入框前缀内容（通常放置图标或文本） |
| suffix | 输入框后缀内容                       |
