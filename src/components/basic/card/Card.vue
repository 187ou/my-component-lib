<template>
  <div
    class="my-card"
    :class="cardClasses"
    @click.stop="$emit('click', $event)"
  >
    <!-- Cover Image -->
    <div v-if="hasCover" class="my-card__cover">
      <img :src="cover" alt="card-cover" loading="lazy" />
      <slot name="cover"></slot>
    </div>

    <!-- Header -->
    <div
      v-if="hasHeader"
      class="my-card__header"
      @click.stop="$emit('header-click', $event)"
    >
      <slot v-if="slots.header" name="header" />
      <template v-else>
        <h3 v-if="header" class="my-card__title">{{ header }}</h3>
        <p v-if="subHeader" class="my-card__subtitle">{{ subHeader }}</p>
      </template>
    </div>

    <!-- Body -->
    <div class="my-card__body">
      <slot />
    </div>

    <!-- Footer -->
    <div v-if="slots.footer" class="my-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { CardProps, CardEmits } from './card-types'

// Props
const props = withDefaults(defineProps<CardProps>(), {
  header: '',
  subHeader: '',
  shadow: 'hover',
  border: true,
  hoverable: false,
  cover: ''
})

// Emits
defineEmits<CardEmits>()

const slots = useSlots()

const hasHeader = computed(() => {
  return props.header || props.subHeader || slots.header
})

const hasCover = computed(() => {
  return props.cover || slots.cover
})

// 动态类
const cardClasses = computed(() => [
  `my-card--shadow-${props.shadow}`,
  {
    'my-card--border': props.border,
    'my-card--hoverable': props.hoverable
  }
])
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-card {
  background-color: $color-background-base;
  border-radius: $border-radius-base;
  overflow: hidden;
  transition: $transition-base;
  position: relative;

  &--border {
    border: 1px solid $color-border-base;
  }

  // Shadow variations
  &--shadow-always {
    box-shadow: $box-shadow-base;
  }
  &--shadow-hover:hover {
    box-shadow: $box-shadow-base;
  }

  &--hoverable:hover {
    transform: translateY(-2px);
  }

  // cover
  &__cover {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }

  &__header {
    padding: $spacing-md;
    border-bottom: 1px solid $color-border-light;
    .my-card__title {
      margin: 0;
      font-size: $font-size-large;
      font-weight: $font-weight-medium;
      color: $color-text-primary;
    }
    .my-card__subtitle {
      margin: 4px 0 0 0;
      font-size: $font-size-small;
      color: $color-text-secondary;
    }
  }

  &__body {
    padding: $spacing-md;
    color: $color-text-regular;
  }

  &__footer {
    padding: $spacing-sm $spacing-md;
    border-top: 1px solid $color-border-light;
    text-align: right;
  }
}
</style>
