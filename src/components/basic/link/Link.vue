<template>
  <a
    :href="disabled ? undefined : href"
    :target="openInNewTab ? '_blank' : target"
    :class="[
      'my-link', // Block
      `my-link--${type}`, // Modifier: 类型
      `my-link--${size}`, // Modifier: 尺寸
      {
        'my-link--disabled': disabled,
        'my-link--underline': underline,
        'my-link--no-href': !href
      }
    ]"
    @click="handleClick"
  >
    <!-- 图标插槽 -->
    <!-- 前缀内容 -->
    <span
      v-if="$slots.prefix || prefixIcon || icon"
      class="my-link__prefix"
    >
      <template v-if="$slots.prefix">
        <slot name="prefix" />
      </template>
      <template v-else-if="prefixIcon">
        <lin-icon :name="prefixIcon" :size="iconSize" />
      </template>
      <template v-else-if="icon">
        <!-- 兼容旧 icon 用法 -->
        <lin-icon :name="icon" :size="iconSize" />
      </template>
    </span>

    <!-- 文本内容 -->
    <span class="my-link__text">
      <slot></slot>
    </span>

    <!-- 后缀内容 -->
    <span
      v-if="$slots.suffix || suffixIcon"
      class="my-link__suffix"
    >
      <template v-if="$slots.suffix">
        <slot name="suffix" />
      </template>
      <template v-else-if="suffixIcon">
        <lin-icon :name="suffixIcon" :size="iconSize" />
      </template>
    </span>

    <!-- 新标签页打开图标 -->
    <span class="my-link__external" v-if="openInNewTab">
      ↗
    </span>
  </a>
</template>

<script setup lang="ts">
import type { LinkProps, LinkEmits } from './link-types'

// 注册 Props（带默认值）
const props = withDefaults(defineProps<LinkProps>(), {
  href: '',
  type: 'default',
  size: 'medium',
  disabled: false,
  underline: false,
  target: '_self',
  icon: '',
  prefixIcon: '',
  suffixIcon: '',
  openInNewTab: false
})

// 静默处理未使用变量问题
import { LinIcon } from '../icon'
import { computed } from 'vue'

// 静默处理未使用变量问题
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

// 注册事件
const emit = defineEmits<LinkEmits>()

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  // 如果没有 href，阻止默认行为
  if (!props.href) {
    event.preventDefault()
  }

  emit('click', event)
}
</script>

<style lang="scss" scoped>
// 引入全局变量
@use '@/styles/variables' as *;

// Block: my-link
.my-link {
  // Prefix & Suffix Elements
  &__prefix,
  &__suffix {
    display: inline-flex;
    align-items: center;
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  outline: none;

  // Element: my-link__text
  &__text {
    white-space: nowrap;
  }

  // Element: my-link__external
  &__external {
    font-size: 12px;
    margin-left: 2px;
  }

  // Modifier: --default
  &--default {
    color: $color-text-regular;

    &:hover {
      color: $color-primary;
    }
  }

  // Modifier: --primary
  &--primary {
    color: $color-primary;

    &:hover {
      color: color-mix(in srgb, $color-primary 90%, white 10%);
    }
  }

  // Modifier: --success
  &--success {
    color: $color-success;

    &:hover {
      color: color-mix(in srgb, $color-success 90%, white 10%);
    }
  }

  // Modifier: --warning
  &--warning {
    color: $color-warning;

    &:hover {
      color: color-mix(in srgb, $color-warning 90%, white 10%);
    }
  }

  // Modifier: --danger
  &--danger {
    color: $color-danger;

    &:hover {
      color: color-mix(in srgb, $color-danger 90%, white 10%);
    }
  }

  // Modifier: --info
  &--info {
    color: $color-info;

    &:hover {
      color: color-mix(in srgb, $color-info 90%, white 10%);
    }
  }

  // Modifier: --underline
  &--underline {
    text-decoration: underline;

    &:hover {
      text-decoration-thickness: 2px;
    }
  }

  // Modifier: --large
  &--large {
    font-size: $font-size-large;
    padding: 4px 0;
  }

  // Modifier: --medium
  &--medium {
    font-size: $font-size-base;
    padding: 2px 0;
  }

  // Modifier: --small
  &--small {
    font-size: $font-size-small;
    padding: 1px 0;
  }

  // Modifier: --disabled
  &--disabled {
    cursor: not-allowed;
    opacity: 0.6;

    &:hover {
      color: inherit !important;
    }
  }

  // Modifier: --no-href
  &--no-href {
    cursor: default;

    &:hover {
      color: inherit !important;
    }
  }
}
</style>
