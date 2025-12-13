<template>
  <transition name="loading-fade">
    <div v-if="visible" :class="['my-loading', `my-loading--${type}`]">
      <div class="my-loading__spinner">
        <lin-icon :name="iconName" class="my-loading__icon" />
        <p v-if="text" class="my-loading__text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LinIcon } from '@/components/basic/icon'
import type { LoadingProps } from './loading-types'

const props = withDefaults(defineProps<LoadingProps>(), {
  visible: false,
  text: '',
  type: 'default'
})

const iconName = computed(() => {
  const iconMap: Record<string, string> = {
    default: 'loading',
    spinner: 'spinner',
    dots: 'dots'
  }
  return iconMap[props.type] || 'loading'
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;

  &__spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__icon {
    font-size: 30px;
    color: $color-primary;
    animation: spin 1s linear infinite;
  }

  &__text {
    margin-top: 10px;
    color: $color-primary;
    font-size: $font-size-base;
  }

  &--spinner {
    .my-loading__icon {
      animation: spin 1s linear infinite;
    }
  }

  &--dots {
    .my-loading__icon {
      animation: pulse 1.5s infinite;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.7;
  }
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity 0.3s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
</style>
