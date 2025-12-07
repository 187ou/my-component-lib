<template>
  <button
    :class="[
      'my-btn', // Block
      `my-btn--${type}`, // Modifier: 类
      `my-btn--${size}`, // Modifier: 尺寸
      {
        'my-btn--disabled': disabled || loading,
        'my-btn--loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <!-- 图标插槽 -->
    <slot name="icon" v-if="icon">
      <i :class="icon"></i>
    </slot>
    <!-- 加载状态 -->
    <span class="my-btn__loading" v-if="loading">⏳</span>
    <!-- 文本内容 -->
    <span class="my-btn__text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from './button-types'

// 注册 Props（带默认值）
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  icon: ''
})
// 静默处理未使用变量问题
void props

// 注册事件
const emit = defineEmits<ButtonEmits>()
void emit
</script>

<style lang="scss" scoped>
// 引入全局变量
@use '@/styles/variables' as *;

// Block: my-btn
.my-btn {
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
