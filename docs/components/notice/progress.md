# Progress 进度条

显示操作或加载进度，支持线性和圆形模式，可自定义颜色、宽度与文字显示。

## 基础用法

:::demo 基础进度条

```vue
<template>
  <my-progress :percentage="50" />
  <my-progress :percentage="80" type="success" />
</template>
```

:::

## 圆形进度条

:::demo circle

```vue
<template>
  <my-progress :percentage="75" type="info" :circle="true" />
</template>
```

:::

## API

### Props

| 参数          | 说明     | 类型      | 默认值     |
| ----------- | ------ | ------- | ------- |
| percentage  | 当前进度   | number  | 0       |
| type        | 进度类型   | string  | primary |
| strokeWidth | 进度条宽度  | number  | 6       |
| circle      | 是否圆形   | boolean | false   |
| color       | 自定义颜色  | string  | —       |
| showText    | 是否显示文字 | boolean | true    |

---

如有更多需求或问题，欢迎在 Issue 中反馈 🎉
