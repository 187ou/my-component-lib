<template>
  <li class="my-timeline-item">
    <div class="my-timeline-item__tail" />

    <div
      class="my-timeline-item__node"
      :class="nodeClass"
      :style="nodeStyle"
    >
      <lin-icon v-if="icon" :name="icon" />
    </div>

    <div class="my-timeline-item__wrapper">
      <div v-if="timestamp" class="my-timeline-item__timestamp">
        {{ timestamp }}
      </div>
      <div class="my-timeline-item__content">
        <slot />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LinIcon } from '@/components/basic/icon'
import type { TimelineItemProps } from './timeline-types'

const props = defineProps<TimelineItemProps>()

const nodeClass = computed(() =>
  props.type ? `my-timeline-item--${props.type}` : ''
)

const nodeStyle = computed(() => ({
  backgroundColor: props.color
}))
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.my-timeline-item {
  position: relative;
  padding-left: 28px;
  padding-bottom: 20px;

  &:last-child .my-timeline-item__tail {
    display: none;
  }

  &__tail {
    position: absolute;
    left: 12px;
    top: 0;
    height: 100%;
    border-left: 2px solid $color-border-base;
  }

  &__node {
    position: absolute;
    left: 6px;
    top: 4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: $color-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-white;
    font-size: 12px;
  }

  &__wrapper {
    padding-left: 8px;
  }

  &__timestamp {
    font-size: $font-size-small;
    color: $color-text-secondary;
    margin-bottom: 4px;
  }

  &__content {
    font-size: $font-size-base;
  }

  &--success { background: $color-success }
  &--warning { background: $color-warning }
  &--danger { background: $color-danger }
  &--info { background: $color-info }
}
</style>
