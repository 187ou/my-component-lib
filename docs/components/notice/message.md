# Message 消息提示

用于显示全局操作反馈消息，支持不同类型、自动关闭和可自定义持续时间。

## 基础用法

:::demo 基础 Message

```vue
<template>
  <my-message type="success" content="操作成功！" />
  <my-message type="error" content="操作失败！" />
</template>
```

:::

## 自动关闭

:::demo duration 设置

```vue
<template>
  <my-message type="info" content="提示信息" :duration="5000" />
</template>
```

:::

## 可关闭

:::demo closable

```vue
<template>
  <my-message type="warning" content="警告信息" closable />
</template>
```

:::

## API

### Props

| 参数       | 说明         | 类型      | 默认值   |
| -------- | ---------- | ------- | ----- |
| type     | 消息类型       | string  | info  |
| content  | 消息内容       | string  | —     |
| duration | 自动关闭时间(ms) | number  | 3000  |
| closable | 是否可关闭      | boolean | false |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
