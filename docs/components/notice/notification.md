# Notification 通知

页面指定位置的通知消息，可同时存在多条，支持不同类型和自定义图标。

## 基础用法

:::demo Notification

```vue
<template>
  <my-notification type="success" title="成功" content="操作完成！" />
  <my-notification type="warning" title="警告" content="请注意！" />
</template>
```

:::

## 自定义图标

:::demo icon

```vue
<template>
  <my-notification type="info" icon="icon-info" title="提示" content="自定义图标" />
</template>
```

:::

## API

### Props

| 参数       | 说明         | 类型      | 默认值  |
| -------- | ---------- | ------- | ---- |
| type     | 通知类型       | string  | info |
| title    | 标题         | string  | —    |
| content  | 内容         | string  | —    |
| icon     | 图标         | string  | —    |
| duration | 自动关闭时间(ms) | number  | 4500 |
| closable | 是否可关闭      | boolean | true |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
