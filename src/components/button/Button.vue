<!-- src/components/Button/Button.vue -->
<template>
  <button
    :class="[
      'my-btn',
      `my-btn--${type}`,
      `my-btn--${size}`,
      {
        'my-btn--disabled': disabled || loading,
        'my-btn--loading': loading,
        'my-btn--plain': props.plain,
        'my-btn--text': text,
        'my-btn--round': round,
        'my-btn--circle': circle,
        'my-btn--block': block
      }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <!-- 图标处理：优先使用插槽，其次使用 icon 属性 -->
    <template v-if="$slots.icon">
      <slot name="icon"></slot>
    </template>
    <my-icon v-else-if="icon" :name="icon" :size="iconSize"></my-icon>

    <!-- 加载状态 -->
    <span class="my-btn__loading" v-if="loading">⏳</span>

    <!-- 文本内容 -->
    <span class="my-btn__text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MyIcon } from '../icon'
import type { ButtonProps, ButtonEmits } from './button-types'

// Props 定义
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  icon: '',
  plain: false,
  text: false,
  round: false,
  circle: false,
  block: false
})

// Emits 定义
defineEmits<ButtonEmits>()

// 根据尺寸计算图标大小（新增）
const iconSize = computed(() => {
  switch (props.size) {
    case 'large':
      return '18px'
    case 'small':
      return '14px'
    default:
      return '16px'
  }
})
</script>

<style lang="scss" scoped>
// 引入全局变量
@use '@/styles/variables' as *;

// Block: my-btn
.my-btn {
  &--block {
    display: flex;
    width: 100%;
  }

  &--round {
    border-radius: $border-radius-large;
  }

  &--circle {
    border-radius: 50%;
    padding: 0;
    width: 40px;
    height: 40px;
  }

  &--plain {
    background-color: transparent;
    color: $color-primary;
    border: 1px solid $color-primary;

    &:hover:not(&--disabled) {
      background-color: color-mix(in srgb, $color-primary 10%, transparent 90%);
    }
  }

  &--text {
    background-color: transparent;
    color: $color-primary;
    padding: 0 4px;

    &:hover:not(&--disabled) {
      text-decoration: underline;
      background-color: transparent;
    }
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px; // 图标与文本间距
  border: none;
  border-radius: $border-radius-base;
  font-size: $font-size-base;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;

  // Element: my-btn__loading
  &__loading {
    font-size: 16px;
  }

  // Element: my-btn__text
  &__text {
    white-space: nowrap;
  }

  // Modifier: --primary
  &--primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover:not(&--disabled) {
      background-color: color-mix(in srgb, $color-primary 90%, white 10%);
    }
  }

  // Modifier: --success
  &--success {
    background-color: $color-success;
    color: $color-white;

    &:hover:not(&--disabled) {
      background-color: color-mix(in srgb, $color-success 90%, white 10%);
    }
  }

  // Modifier: --warning
  &--warning {
    background-color: $color-warning;
    color: $color-white;

    &:hover:not(&--disabled) {
      background-color: color-mix(in srgb, $color-warning 90%, white 10%);
    }
  }

  // Modifier: --danger
  &--danger {
    background-color: $color-danger;
    color: $color-white;

    &:hover:not(&--disabled) {
      background-color: color-mix(in srgb, $color-danger 90%, white 10%);
    }
  }

  // Modifier: --info
  &--info {
    background-color: $color-info;
    color: $color-white;

    &:hover:not(&--disabled) {
      background-color: color-mix(in srgb, $color-info 90%, white 10%);
    }
  }

  // Modifier: --large
  &--large {
    padding: 12px 24px;
    font-size: $font-size-large;
  }

  // Modifier: --medium
  &--medium {
    padding: 8px 16px;
    font-size: $font-size-base;
  }

  // Modifier: --small
  &--small {
    padding: 4px 12px;
    font-size: $font-size-small;
  }

  // Modifier: --disabled
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
