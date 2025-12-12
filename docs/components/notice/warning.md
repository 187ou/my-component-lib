# Warning 警告提示

警告提示用于展示页面中需要用户关注的重要信息，支持多种状态类型和丰富的配置选项。

## 基础用法

:::demo 基础警告提示示例

```vue
<template>
  <my-warning title="消息提醒">这是一条基础的消息提醒</my-warning>
  <my-warning type="success" title="成功提醒">这是一条成功的消息提醒</my-warning>
  <my-warning type="warning" title="警告提醒">这是一条警告的消息提醒</my-warning>
  <my-warning type="error" title="错误提醒">这是一条错误的消息提醒</my-warning>
</template>
```


:::

## 不同类型

:::demo 通过 `type` 属性控制警告类型

```vue
<template>
  <my-warning type="info" title="信息提示">这是一条信息提示</my-warning>
  <my-warning type="success" title="成功提示">这是一条成功提示</my-warning>
  <my-warning type="warning" title="警告提示">这是一条警告提示</my-warning>
  <my-warning type="error" title="错误提示">这是一条错误提示</my-warning>
</template>
```


:::

## 可关闭的警告

:::demo 设置 `closable` 属性可开启关闭功能

```vue
<template>
  <my-warning 
    closable 
    title="可关闭提醒"
    description="这是一条可以关闭的提醒，点击右侧关闭按钮即可关闭"
  />
</template>
```


:::

## 自定义关闭文本

:::demo 通过 `closeText` 属性自定义关闭文本

```vue
<template>
  <my-warning 
    closable
    close-text="知道了"
    title="自定义关闭文本"
    description="使用自定义的关闭文本替换默认的关闭图标"
  />
</template>
```


:::

## 带图标警告

:::demo 设置 `showIcon` 属性控制图标显示，默认为 true

```vue
<template>
  <my-warning show-icon type="info" title="带图标信息">显示信息图标</my-warning>
  <my-warning show-icon type="success" title="带图标成功">显示成功图标</my-warning>
  <my-warning show-icon type="warning" title="带图标警告">显示警告图标</my-warning>
  <my-warning show-icon type="error" title="带图标错误">显示错误图标</my-warning>
</template>
```


:::

## 隐藏图标

:::demo 设置 `showIcon` 为 false 隐藏图标

```vue
<template>
  <my-warning :show-icon="false" type="info" title="无图标信息">隐藏信息图标</my-warning>
</template>
```


:::

## 文字居中

:::demo 设置 `center` 属性使文字居中

```vue
<template>
  <my-warning center type="warning" title="居中警告">这是一条文字居中的警告提示</my-warning>
</template>
```


:::

## 仅有标题

:::demo 只设置标题，不设置描述

```vue
<template>
  <my-warning type="info" title="仅标题" />
</template>
```


:::

## 仅有描述

:::demo 只设置描述，不设置标题

```vue
<template>
  <my-warning type="info" description="这是一条只有描述内容的警告提示" />
</template>
```


:::

## API

### Props

| 参数        | 说明             | 类型                                                         | 可选值                        | 默认值  |
| ----------- | ---------------- | ------------------------------------------------------------ | ----------------------------- | ------- |
| [type](file://D:\homeworks\vue\my-component-lib\src\components\basic\tag\tag-types.ts#L4-L4)      | 警告类型         | `"success" \| "warning" \| "error" \| "info"`                | —                             | `"info"`  |
| [title](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L3-L3)     | 标题             | `string`                                                     | —                             | `""`      |
| [description](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L4-L4) | 描述信息         | `string`                                                     | —                             | `""`      |
| [closable](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L5-L5)  | 是否可关闭       | `boolean`                                                    | —                             | `true`    |
| [closeText](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L6-L6) | 关闭按钮自定义文本 | `string`                                                     | —                             | `""`      |
| [center](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L7-L7)    | 文字是否居中     | `boolean`                                                    | —                             | `false`   |
| [showIcon](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L8-L8)  | 是否显示图标     | `boolean`                                                    | —                             | `true`    |

### Events

| 事件名  | 说明             | 回调参数 |
| ------- | ---------------- | -------- |
| `close` | 关闭警告时触发   | —        |

### Slots

| 插槽名    | 说明         |
| --------- | ------------ |
| `default` | 描述内容     |
| [title](file://D:\homeworks\vue\my-component-lib\src\components\notice\warning\warning-types.ts#L3-L3)   | 标题内容     |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
