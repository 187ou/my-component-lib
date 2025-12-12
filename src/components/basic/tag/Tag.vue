<!-- src/components/Tag/Tag.vue -->
<template>
  <span
    :class="[
      'my-tag',
      `my-tag--${type}`,
      `my-tag--${size}`,
      {
        'my-tag--plain': plain,
        'my-tag--outline': outline,
        'my-tag--round': round,
        'my-tag--block': block,
        'my-tag--disabled': disabled,
        'my-tag--clickable': clickable && !disabled,
        'my-tag--loading': loading,
      }
    ]"
    @click="handleClick"
  >
    <!-- 图标：slot 优先 -->
    <template v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
    <lin-icon v-else-if="icon" :name="icon" :size="iconSize"></lin-icon>

    <!-- loading -->
    <span v-if="loading" class="my-tag__loading">⏳</span>

    <!-- 文本 -->
    <span class="my-tag__text"><slot /></span>

    <!-- closable -->
    <span
      v-if="closeable && !loading"
      class="my-tag__close"
      @click.stop="handleClose"
    >
      ✖
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LinIcon } from '../icon'
import type { TagProps, TagEmits } from './tag-types'

const props = withDefaults(defineProps<TagProps>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  plain: false,
  outline: false,
  closeable: false,
  clickable: false,
  round: false,
  block: false,
  icon: '',
})

const emits = defineEmits<TagEmits>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && props.clickable) emits('click', event)
}

const handleClose = (event: MouseEvent) => emits('close', event)

const iconSize = computed(() => {
  switch (props.size) {
    case 'large':
      return '16px'
    case 'small':
      return '12px'
    default:
      return '14px'
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  font-size: $font-size-base;
  border-radius: $border-radius-base;
  background-color: $color-primary;
  color: $color-white;
  user-select: none;
  transition: 0.25s ease;

  // 尺寸
  &--large {
    padding: 6px 14px;
    font-size: $font-size-large;
  }

  &--medium {
    padding: 4px 10px;
  }

  &--small {
    padding: 2px 6px;
    font-size: $font-size-small;
  }

  // 类型
  &--primary { background-color: $color-primary; }
  &--success { background-color: $color-success; }
  &--warning { background-color: $color-warning; }
  &--danger  { background-color: $color-danger; }
  &--info    { background-color: $color-info; }

  // plain 朴素
  &--plain {
    background-color: transparent;
    border: 1px solid currentColor;
    color: inherit;
  }

  // outline 描边
  &--outline {
    background-color: transparent;
    color: inherit;
    border: 1px dashed currentColor;
  }

  // 点击态
  &--clickable {
    cursor: pointer;
    &:hover {
      filter: brightness(1.1);
    }
  }

  // 禁用
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  // 圆角
  &--round {
    border-radius: $border-radius-large;
  }

  // block
  &--block {
    display: flex;
    width: 100%;
  }

  // loading
  &--loading {
    opacity: 0.7;
  }

  // 文本
  &__text {
    white-space: nowrap;
  }

  // 关闭按钮
  &__close {
    cursor: pointer;
    margin-left: 4px;

    &:hover {
      opacity: 0.7;
    }
  }

  // loading 图标
  &__loading {
    font-size: inherit;
  }
}
</style>
