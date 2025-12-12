<!-- src/components/notice/warning/Warning.vue -->
<template>
  <transition name="warning-fade">
    <div
      v-if="visible"
      :class="[
        'my-warning',
        `my-warning--${type}`,
        {
          'is-center': center,
          'is-closeable': closable
        }
      ]"
    >
      <!-- 图标 -->
      <lin-icon
        v-if="showIcon"
        :name="iconName"
        :class="['my-warning__icon']"
      />

      <!-- 内容区域 -->
      <div class="my-warning__content">
        <span
          v-if="title"
          :class="['my-warning__title']"
        >
          {{ title }}
        </span>
        <p
          v-if="description"
          :class="['my-warning__description']"
        >
          {{ description }}
        </p>
      </div>

      <!-- 关闭按钮 -->
      <button
        v-if="closable"
        :class="['my-warning__close']"
        @click="handleClose"
        type="button"
      >
        {{ closeText || '×' }}
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { LinIcon } from '@/components/basic/icon'
import type { WarningProps, WarningEmits } from './warning-types'

const props = withDefaults(defineProps<WarningProps>(), {
  type: 'info',
  title: '',
  description: '',
  closable: true,
  closeText: '',
  center: false,
  showIcon: true
})

const emit = defineEmits<WarningEmits>()

const visible = ref(true)

const iconName = computed(() => {
  const iconMap: Record<string, string> = {
    success: 'check-circle',
    warning: 'warning',
    error: 'error',
    info: 'info'
  }
  return iconMap[props.type] || 'info'
})

const handleClose = () => {
  visible.value = false
  emit('close')
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-warning {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: $border-radius-base;
  font-size: $font-size-base;
  line-height: 1.5;
  transition: opacity 0.3s;

  &.is-center {
    align-items: center;
    text-align: center;

    .my-warning__content {
      flex: 1;
    }
  }

  &--success {
    background-color: color-mix(in srgb, $color-success 10%, transparent 90%);
    color: $color-success;
    border: 1px solid color-mix(in srgb, $color-success 30%, transparent 70%);
  }

  &--warning {
    background-color: color-mix(in srgb, $color-warning 10%, transparent 90%);
    color: $color-warning;
    border: 1px solid color-mix(in srgb, $color-warning 30%, transparent 70%);
  }

  &--error {
    background-color: color-mix(in srgb, $color-danger 10%, transparent 90%);
    color: $color-danger;
    border: 1px solid color-mix(in srgb, $color-danger 30%, transparent 70%);
  }

  &--info {
    background-color: color-mix(in srgb, $color-info 10%, transparent 90%);
    color: $color-info;
    border: 1px solid color-mix(in srgb, $color-info 30%, transparent 70%);
  }

  &__icon {
    margin-right: 10px;
    font-size: 18px;
    vertical-align: middle;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-weight: bold;
    font-size: $font-size-base;
  }

  &__description {
    margin-top: 4px;
    font-size: $font-size-small;
    color: inherit;
  }

  &__close {
    margin-left: 16px;
    background: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
  }
}

.warning-fade-enter-from,
.warning-fade-leave-to {
  opacity: 0;
}

.warning-fade-enter-active,
.warning-fade-leave-active {
  transition: opacity 0.3s;
}
</style>
