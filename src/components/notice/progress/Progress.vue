<template>
  <div class="my-progress" :class="[`my-progress--${type}`, statusClass]">
    <!-- line -->
    <div v-if="type === 'line'" class="my-progress__line">
      <div class="my-progress__outer" :style="outerStyle">
        <div
          class="my-progress__inner"
          :class="statusClass"
          :style="innerStyle"
        />
      </div>
      <span v-if="showText" class="my-progress__text">{{ text }}</span>
    </div>


    <!-- circle -->
    <div v-else class="my-progress__circle">
      <svg viewBox="0 0 100 100">
        <circle
          class="my-progress__circle-track"
          cx="50"
          cy="50"
          r="45"
        />
        <circle
          class="my-progress__circle-path"
          cx="50"
          cy="50"
          r="45"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
          :class="statusClass"
        />
      </svg>
      <span v-if="showText" class="my-progress__text">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressProps } from './progress-types'

const props = withDefaults(defineProps<ProgressProps>(), {
  type: 'line',
  strokeWidth: 8,
  showText: true
})

const percent = computed(() => Math.min(100, Math.max(0, props.percentage)))

const text = computed(() => `${percent.value}%`)

const statusClass = computed(() =>
  props.status ? `my-progress--${props.status}` : ''
)

const innerStyle = computed(() => ({
  width: `${percent.value}%`,
  backgroundColor: props.color
}))

const outerStyle = computed(() => ({
  height: `${props.strokeWidth}px`
}))

const circumference = 2 * Math.PI * 45
const dashOffset = computed(() =>
  circumference * (1 - percent.value / 100)
)
</script>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.my-progress {
  display: inline-flex;
  align-items: center;

  &__line {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__outer {
    width: 200px;
    background: $color-border-base;
    border-radius: 100px;
    overflow: hidden;
  }

  &__inner {
    height: 100%;
    background: $color-primary;
    transition: width 0.3s ease;
  }

  &__circle {
    position: relative;
    width: 120px;
    height: 120px;
  }

  &__circle-track {
    fill: none;
    stroke: $color-border-base;
    stroke-width: 8;
  }

  &__circle-path {
    fill: none;
    stroke: $color-primary;
    stroke-width: 8;
    transition: stroke-dashoffset 0.3s ease;
    transform: rotate(-90deg);
    transform-origin: center;
  }

  &__text {
    font-size: $font-size-small;
  }

  &--success .my-progress__inner,
  &--success .my-progress__circle-path { stroke: $color-success; background: $color-success }

  &--warning .my-progress__inner,
  &--warning .my-progress__circle-path { stroke: $color-warning; background: $color-warning }

  &--danger .my-progress__inner,
  &--danger .my-progress__circle-path { stroke: $color-danger; background: $color-danger }

  &--info .my-progress__inner,
  &--info .my-progress__circle-path { stroke: $color-info; background: $color-info }
}
</style>
