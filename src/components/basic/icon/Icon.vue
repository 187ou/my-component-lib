<template>
  <svg
    :class="['my-icon', className]"
    :style="{
      width: size,
      height: size,
      color: color
    }"
    aria-hidden="true"
  >
    <use :href="`#icon-${name}`" :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
import type { IconProps } from './icon-types'

// Props 定义
const props = withDefaults(defineProps<IconProps>(), {
  size: '1em', // 默认尺寸（继承父元素字体大小）
  color: '' // 默认颜色（继承父元素颜色）
})

// 计算 className（用于外部自定义样式）
const className = props.name ? `my-icon--${props.name}` : ''
</script>

<style lang="scss" scoped>
// Block: my-icon
.my-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  fill: currentColor;
  vertical-align: middle;
  transition: all 0.3s ease;
}
</style>
