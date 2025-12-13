
# Timeline 时间线

展示事件顺序或流程节点，支持自定义时间戳、类型、颜色和图标。

## 基础用法

:::demo 基础 Timeline

```vue
<template>
  <my-timeline>
    <my-timeline-item timestamp="2024-01-01">项目启动</my-timeline-item>
    <my-timeline-item timestamp="2024-01-02" type="success">完成需求</my-timeline-item>
    <my-timeline-item timestamp="2024-01-03" icon="check">发布上线</my-timeline-item>
  </my-timeline>
</template>
```

:::

## API

### TimelineItem Props

| 参数        | 说明    | 类型     | 默认值 |
| --------- | ----- | ------ | --- |
| timestamp | 时间戳   | string | —   |
| type      | 节点类型  | string | —   |
| color     | 自定义颜色 | string | —   |
| icon      | 图标    | string | —   |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
