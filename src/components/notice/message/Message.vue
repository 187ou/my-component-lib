<template>
  <transition name="my-message-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="my-message"
      :class="`my-message--${type}`"
      :style="style"
    >
      <!-- icon -->
      <lin-icon
        v-if="iconName"
        class="my-message__icon"
        :name="iconName"
      />

      <!-- content -->
      <div class="my-message__content">
        <slot>
          <component :is="message" v-if="isVNode" />
          <span v-else>{{ message }}</span>
        </slot>
      </div>

      <!-- close -->
      <span
        v-if="showClose"
        class="my-message__close"
        @click="close"
      >×</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted} from 'vue'
import { LinIcon } from '@/components/basic/icon'
import type { MessageProps } from './message-types'

const props = defineProps<MessageProps>()
const emit = defineEmits<{ (e: 'destroy'): void }>()

let timer: number | undefined

const isVNode = computed(() => typeof props.message === 'object')

const iconName = computed(() => {
  if (props.icon) return props.icon
  switch (props.type) {
    case 'success': return 'success-filled'
    case 'warning': return 'warning'
    case 'danger': return 'close'
    case 'info': return 'info-filled'
    case 'loading': return 'loading'
    default: return ''
  }
})

const style = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex
}))

const close = () => {
  emit('destroy')
}

const handleAfterLeave = () => {
  emit('destroy')
}

onMounted(() => {
  if (props.duration !== 0 && props.type !== 'loading') {
    timer = window.setTimeout(close, props.duration)
  }
})

onBeforeUnmount(() => {
  timer && clearTimeout(timer)
})
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.my-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: $border-radius-base;
  box-shadow: $box-shadow-base;
  background: $color-white;
  transition: all 0.3s ease;

  &__icon { font-size: 18px }
  &__content { font-size: $font-size-base }
  &__close { cursor: pointer; margin-left: 8px }

  &--success { color: $color-success }
  &--warning { color: $color-warning }
  &--danger { color: $color-danger }
  &--info { color: $color-info }
}

.my-message-fade-enter-from,
.my-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
