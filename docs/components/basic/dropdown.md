# # Dropdown 下拉菜单

Dropdown 用于展示操作集合，支持点击、悬浮触发，支持 command 事件、多级子菜单、RTL、箭头、表单联动等功能。

## 基础用法

:::demo 最简单的下拉菜单（点击触发）

```vue
<template>
  <my-dropdown
    trigger="click"
    :menu="[
      { label: '编辑', value: 'edit' },
      { label: '删除', value: 'delete' }
    ]"
    @command="(cmd) => console.log(cmd)"
  >
    <my-button>操作</my-button>
  </my-dropdown>
</template>
```

:::

## 悬停触发

:::demo 使用 `trigger="hover"`

```vue
<template>
  <my-dropdown
    trigger="hover"
    :menu="[
      { label: '查看', value: 'v' },
      { label: '更多', value: 'more' }
    ]"
  >
    <my-button>鼠标悬停</my-button>
  </my-dropdown>
</template>
```

:::

## 带分割线、禁用状态

:::demo 设置 `disabled` / `divided` 来调整菜单项状态

```vue
<template>
  <my-dropdown
    trigger="click"
    :menu="[
      { label: '启用项', value: '1' },
      { label: '禁用项', value: '2', disabled: true },
      { divided: true },
      { label: '删除', value: '3', type: 'danger' }
    ]"
  >
    <my-button>更多</my-button>
  </my-dropdown>
</template>
```

:::

## 带箭头（arrow）

:::demo 自动对齐触发元素中心

```vue
<template>
  <my-dropdown
    trigger="click"
    :menu="[
      { label: '项 A', value: 'A' },
      { label: '项 B', value: 'B' }
    ]"
    arrow
  >
    <my-button>带箭头</my-button>
  </my-dropdown>
</template>
```

:::

## 多级子菜单（hover 弹出）

:::demo 子菜单将自动在右侧浮出

```vue
<template>
  <my-dropdown
    trigger="hover"
    :menu="[
      {
        label: '文档',
        children: [
          { label: 'Vue', value: 'vue' },
          { label: 'React', value: 'react' }
        ]
      },
      { label: '关于', value: 'about' }
    ]"
  >
    <my-button>多级菜单</my-button>
  </my-dropdown>
</template>
```

:::

## RTL（从右到左布局）

:::demo 兼容阿拉伯语等 RTL 布局

```vue
<template>
  <div dir="rtl">
    <my-dropdown
      trigger="click"
      :menu="[
        { label: '保存', value: 'save' },
        { label: '另存为', value: 'save-as' }
      ]"
      rtl
    >
      <my-button>操作（RTL）</my-button>
    </my-dropdown>
  </div>
</template>
```

:::

## 表单联动（v-model）

:::demo 使用 `v-model` 获取选中值

```vue
<template>
  <my-dropdown
    v-model="value"
    trigger="click"
    :menu="[
      { label: '苹果', value: 'apple' },
      { label: '香蕉', value: 'banana' }
    ]"
  >
    <my-button>{{ value || '选择水果' }}</my-button>
  </my-dropdown>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

:::

---

## API

### Props

| 参数           | 说明                 | 类型                                      | 默认值       |
| ------------ | ------------------ | --------------------------------------- | --------- |
| `trigger`    | 触发行为               | `"click"` | `"hover"` | `"contextmenu"` | `"hover"` |
| `menu`       | 菜单数据结构             | `DropdownItem[]`                        | `[]`      |
| `placement`  | 弹出位置（含 auto）       | `"auto"` | `"top"`                      | `"auto"`  |
| `offset`     | 菜单偏移量（px）          | `number`                                | `6`       |
| `arrow`      | 是否显示箭头             | `boolean`                               | `false`   |
| `teleport`   | 是否 teleport 到 body | `boolean`                               | `true`    |
| `rtl`        | RTL 排版支持           | `boolean`                               | `false`   |
| `modelValue` | 当前选中值（表单联动）        | `string \| number \| undefined`         | —         |

### DropdownItem 类型

```ts
interface DropdownItem {
  label?: string
  value?: string | number
  disabled?: boolean
  divided?: boolean
  icon?: string
  command?: any
  keepAlive?: boolean
  children?: DropdownItem[]
}
```

### Events

| 事件名                 | 说明           | 参数             |
| ------------------- | ------------ | -------------- |
| `select`            | 选中菜单项时触发     | `value`        |
| `command`           | 触发命令回调       | `commandValue` |
| `visible-change`    | 弹层显示/隐藏时     | `boolean`      |
| `update:modelValue` | v-model 表单联动 | `value`        |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉

