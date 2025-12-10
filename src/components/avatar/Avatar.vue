<!-- src/components/Avatar/Avatar.vue -->
<template>
  <span :class="avatarClass" :style="avatarStyle">
    <template v-if="hasSrc">
      <img
        :src="currentSrc"
        :alt="alt"
        :style="imgStyle"
        crossorigin="anonymous"
        @error="handleError"
        @load="$emit('load', $event)"
      />
    </template>
    <template v-else-if="icon">
      <my-icon :name="icon" :size="computedIconSize" />
    </template>
    <template v-else>
      <span class="my-avatar__text">{{ initials }}</span>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { MyIcon } from '../icon'
import type { AvatarProps, AvatarEmits } from './avatar-types'

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'medium',
  shape: 'circle',
  fit: 'cover',
  icon: '',
  text: '',
  lazy: false,
  errorIcon: 'user'
})

const emit = defineEmits<AvatarEmits>()

// 当前展示的 src（可能因加载失败而置空）
const currentSrc = ref(props.src || '')
const hasSrc = computed(() => !!currentSrc.value)

// 处理图片加载失败
const handleError = (e: Event) => {
  currentSrc.value = ''
  emit('error', e)
}

// 头像大小（像素或预设 size）
const sizePx = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`
  }
  switch (props.size) {
    case 'large':
      return '48px'
    case 'small':
      return '24px'
    default:
      return '32px'
  }
})

// 计算 class
const avatarClass = computed(() => [
  'my-avatar',
  `my-avatar--${props.shape}`
])

// 外层样式
const avatarStyle = computed(() => ({
  width: sizePx.value,
  height: sizePx.value,
  lineHeight: sizePx.value,
  fontSize: `calc(${sizePx.value} * 0.5)`
}))

// img 样式
const imgStyle = computed(() => ({
  objectFit: props.fit
}))

// 图标尺寸
const computedIconSize = computed(() => `calc(${sizePx.value} * 0.6)`)

// 文本首字母
const initials = computed(() => props.text?.charAt(0).toUpperCase() || '')
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: $color-gray-2;
  color: $color-white;
  user-select: none;
  overflow: hidden;

  &--circle {
    border-radius: 50%;
  }

  &--square {
    border-radius: $border-radius-small;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  &__text {
    font-weight: $font-weight-medium;
  }
}
</style>
