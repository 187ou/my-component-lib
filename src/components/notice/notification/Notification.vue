<template>
  <transition name="my-notification-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="my-notification"
      :class="[
      `my-notification--${type}`,
      `my-notification--${position}`
      ]"
      :style="style"
    >
      <!-- icon -->
      <lin-icon
        v-if="iconName"
        class="my-notification__icon"
        :name="iconName"
      />

      <div class="my-notification__content">
        <div v-if="title" class="my-notification__title">{{ title }}</div>
        <div class="my-notification__message">
          <component :is="message" v-if="isVNode"/>
          <span v-else>{{ message }}</span>
        </div>
      </div>

      <span
        v-if="showClose"
        class="my-notification__close"
        @click="close"
      >×</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {computed, onMounted, onBeforeUnmount} from 'vue'
import {LinIcon} from '@/components/basic/icon'
import type {NotificationProps} from './notification-types'

const props = defineProps<NotificationProps>()
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

const style = computed(() => {
  const pos = props.position || 'top-right'
  const style: Record<string, string> = {
    zIndex: String(props.zIndex)
  }

  if (pos.startsWith('top')) style.top = `${props.offset}px`
  if (pos.startsWith('bottom')) style.bottom = `${props.offset}px`
  if (pos.endsWith('right')) style.right = '16px'
  if (pos.endsWith('left')) style.left = '16px'

  return style
})

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

.my-notification {
  position: fixed;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: 320px;
  background: $color-white;
  border-radius: $border-radius-base;
  box-shadow: $box-shadow-base;


  &__icon { font-size: 20px }
  &__title { font-weight: 600; margin-bottom: 4px }
  &__message { font-size: $font-size-base }
  &__close { cursor: pointer; margin-left: auto }


  &--success { color: $color-success }
  &--warning { color: $color-warning }
  &--danger { color: $color-danger }
  &--info { color: $color-info }
}


.my-notification-fade-enter-from,
.my-notification-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
