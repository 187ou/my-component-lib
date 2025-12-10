# Carousel 轮播图

展示一组轮播内容，支持图片、任意自定义插槽，内置滑动 / 淡入淡出 / 卡片等效果。

## 基础用法

```vue
<template>
  <lin-carousel :items="banners" height="320px" />
</template>

<script setup lang="ts">
const banners = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba'
]
</script>
```

## 自动播放与进度条

```vue
<lin-carousel
  :items="banners"
  autoplay
  :interval="2500"
  progress-bar
/>
```

## 垂直方向

```vue
<lin-carousel
  :items="banners"
  direction="vertical"
  height="400px"
/>
```

## 卡片效果与数字指示器

```vue
<lin-carousel
  :items="banners"
  effect="card"
  indicator-type="number"
/>
```

## 自定义内容与箭头

```vue
<lin-carousel :items="cards">
  <template #default="{ item, index }">
    <div class="custom-card">
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
      <span>第 {{ index + 1 }} 张</span>
    </div>
  </template>

  <template #prev-arrow>👈</template>
  <template #next-arrow>👉</template>
</lin-carousel>
```

## 缩略图模式

```vue
<lin-carousel
  :items="banners"
  thumbnails
  arrow-position="outer"
/>
```

## Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 轮播数据，字符串会被视为图片地址 | `Array<string \| CarouselItem>` | `[]` |
| start-index | 初始索引 | `number` | `0` |
| autoplay | 是否自动播放 | `boolean` | `false` |
| interval | 自动播放间隔（ms） | `number` | `3000` |
| loop | 是否循环播放 | `boolean` | `true` |
| direction | 方向 | `'horizontal' \| 'vertical'` | `horizontal` |
| height | 组件高度 | `string` | `320px` |
| effect | 动画效果 | `'slide' \| 'fade' \| 'card'` | `slide` |
| indicator-type | 指示器样式 | `'dot' \| 'line' \| 'number'` | `dot` |
| show-indicators | 是否显示指示器 | `boolean` | `true` |
| show-arrows | 是否显示左右箭头 | `boolean` | `true` |
| arrow-position | 箭头位置 | `'inner' \| 'outer'` | `inner` |
| thumbnails | 是否显示缩略图 | `boolean` | `false` |
| progress-bar | 是否显示进度条（需开启 autoplay） | `boolean` | `false` |
| pause-on-hover | 悬停时是否暂停 | `boolean` | `true` |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义每个轮播项内容，参数：`{ item, index }` |
| prev-arrow | 自定义上一张箭头 |
| next-arrow | 自定义下一张箭头 |

## Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当前索引变化时触发 | `(index: number)` |
| update:current | 支持 `v-model:current` | `(index: number)` |

---

如有更多需求或反馈，欢迎在 Issue 中提出！🎉
