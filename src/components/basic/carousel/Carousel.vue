<!-- src/components/carousel/Carousel.vue -->
<template>
  <div
    class="my-carousel"
    :class="rootClasses"
    :style="{ height: props.height }"
  >
    <div
      class="my-carousel__viewport"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="my-carousel__track" :style="trackStyle">
        <div
          v-for="(item, index) in normalizedItems"
          :key="index"
          class="my-carousel__item"
          :class="itemClasses(index)"
          :style="itemStyle(index)"
        >
          <div class="my-carousel__content">
            <slot
              v-if="$slots.default"
              :item="item.raw"
              :index="index"
            />

            <template v-else>
              <img
                v-if="item.src"
                class="my-carousel__img"
                :src="item.src"
                :alt="item.alt || `carousel-${index + 1}`"
                loading="lazy"
              />
              <div v-else class="my-carousel__placeholder">
                <span>暂无内容</span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 控制箭头 -->
      <div
        v-if="props.showArrows && slideCount > 1"
        class="my-carousel__arrow my-carousel__arrow--prev"
        @click="prev"
      >
        <slot name="prev-arrow">
          <span class="my-carousel__arrow-icon">‹</span>
        </slot>
      </div>
      <div
        v-if="props.showArrows && slideCount > 1"
        class="my-carousel__arrow my-carousel__arrow--next"
        @click="next"
      >
        <slot name="next-arrow">
          <span class="my-carousel__arrow-icon">›</span>
        </slot>
      </div>

      <!-- 进度条 -->
      <div
        v-if="props.progressBar && props.autoplay && slideCount > 1"
        class="my-carousel__progress"
      >
        <div class="my-carousel__progress-bar" :style="{ width: `${progress}%` }"></div>
      </div>

      <!-- 指示器 -->
      <div
        v-if="props.showIndicators && props.indicatorType !== 'number' && slideCount > 1"
        class="my-carousel__indicators"
        :class="`is-${props.indicatorType}`"
      >
        <button
          v-for="(_, index) in slideCount"
          :key="index"
          type="button"
          class="my-carousel__indicator"
          :class="{ 'is-active': index === current }"
          @click="goTo(index)"
        />
      </div>

      <div
        v-if="props.showIndicators && props.indicatorType === 'number' && slideCount > 1"
        class="my-carousel__indicator-number"
      >
        {{ current + 1 }}/{{ slideCount }}
      </div>
    </div>

    <!-- 缩略图区域 -->
    <div v-if="props.thumbnails && slideCount" class="my-carousel__thumbnails">
      <button
        v-for="(item, index) in normalizedItems"
        :key="index"
        class="my-carousel__thumbnail"
        :class="{ 'is-active': index === current }"
        type="button"
        @click="goTo(index)"
      >
        <img
          v-if="item.thumbnail || item.src"
          :src="item.thumbnail || item.src"
          :alt="item.alt || `thumbnail-${index + 1}`"
        />
        <span v-else>{{ index + 1 }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { CSSProperties } from 'vue'
import type {
  CarouselEmits,
  CarouselProps,
  NormalizedCarouselItem
} from './carousel-types'

const props = withDefaults(defineProps<CarouselProps>(), {
  items: () => [],
  startIndex: 0,
  autoplay: false,
  interval: 3000,
  loop: true,
  direction: 'horizontal',
  height: '320px',
  effect: 'slide',
  indicatorType: 'dot',
  showIndicators: true,
  showArrows: true,
  arrowPosition: 'inner',
  thumbnails: false,
  progressBar: false,
  pauseOnHover: true
})

const emit = defineEmits<CarouselEmits>()

const current = ref(0)
const hovering = ref(false)
const progress = ref(0)
let nextTimer: number | null = null
let progressTimer: number | null = null

const normalizedItems = computed<NormalizedCarouselItem[]>(() =>
  props.items.map((item, index) => {
    if (typeof item === 'string') {
      return {
        src: item,
        thumbnail: item,
        alt: `carousel-${index + 1}`,
        raw: { src: item }
      }
    }
    return {
      src: item.src,
      thumbnail: item.thumbnail ?? item.src,
      alt: item.alt ?? `carousel-${index + 1}`,
      raw: item
    }
  })
)

const slideCount = computed(() => normalizedItems.value.length)

const clampIndex = (index: number) => {
  const total = slideCount.value
  if (!total) return 0
  if (!props.loop) return Math.min(total - 1, Math.max(0, index))
  return (index % total + total) % total
}

const prevIndex = computed(() => clampIndex(current.value - 1))
const nextIndex = computed(() => clampIndex(current.value + 1))

const rootClasses = computed(() => [
  `is-${props.direction}`,
  `is-${props.effect}`,
  `arrow-${props.arrowPosition}`
])

const trackStyle = computed<CSSProperties>(() => {
  if (props.effect !== 'slide') return {}
  const axis = props.direction === 'vertical' ? 'Y' : 'X'
  const translateValue = `-${current.value * 100}%`
  return {
    transform: `translate${axis}(${translateValue})`,
    flexDirection: props.direction === 'vertical' ? 'column' : 'row'
  }
})

const itemClasses = (index: number) => ({
  'is-active': index === current.value,
  'is-prev': index === prevIndex.value,
  'is-next': index === nextIndex.value
})

const itemStyle = (index: number) => {
  if (props.effect === 'fade') {
    return {
      opacity: index === current.value ? 1 : 0,
      zIndex: index === current.value ? 2 : 1
    }
  }
  if (props.effect === 'card') {
    if (index === current.value) return { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 3 }
    if (index === prevIndex.value) return { transform: 'translateX(-65%) scale(0.9)', opacity: 0.9, zIndex: 2 }
    if (index === nextIndex.value) return { transform: 'translateX(65%) scale(0.9)', opacity: 0.9, zIndex: 2 }
    return { transform: 'translateX(0) scale(0.8)', opacity: 0, zIndex: 1 }
  }
  return {}
}

const goTo = (index: number) => {
  if (!slideCount.value) return
  const target = clampIndex(index)
  if (target === current.value) {
    restartTimers()
    return
  }
  current.value = target
  emit('change', target)
  emit('update:current', target)
  restartTimers()
}

const next = () => goTo(current.value + 1)
const prev = () => goTo(current.value - 1)

const clearTimers = () => {
  if (nextTimer !== null) {
    window.clearTimeout(nextTimer)
    nextTimer = null
  }
  if (progressTimer !== null) {
    window.clearInterval(progressTimer)
    progressTimer = null
  }
}

const scheduleAutoplay = () => {
  clearTimers()
  progress.value = 0
  if (!props.autoplay || hovering.value || slideCount.value <= 1) return

  const start = performance.now()
  progressTimer = window.setInterval(() => {
    const elapsed = performance.now() - start
    progress.value = Math.min(100, (elapsed / props.interval) * 100)
  }, 40)

  nextTimer = window.setTimeout(() => {
    progress.value = 0
    next()
  }, props.interval)
}

const restartTimers = () => {
  if (props.autoplay) {
    scheduleAutoplay()
  } else {
    clearTimers()
    progress.value = 0
  }
}

const handleMouseEnter = () => {
  hovering.value = true
  if (props.pauseOnHover) {
    clearTimers()
  }
}

const handleMouseLeave = () => {
  hovering.value = false
  if (props.autoplay) {
    scheduleAutoplay()
  }
}

watch(
  () => props.items,
  () => {
    const safeIndex = clampIndex(props.startIndex ?? 0)
    current.value = safeIndex
    restartTimers()
  },
  { immediate: true }
)

watch(
  () => [props.autoplay, props.interval, props.loop, props.effect],
  () => restartTimers()
)

onMounted(() => {
  current.value = clampIndex(props.startIndex ?? 0)
  scheduleAutoplay()
})

onBeforeUnmount(() => {
  clearTimers()
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-carousel {
  position: relative;
  width: 100%;
  background: $color-gray-1;
  border-radius: $border-radius-large;
  overflow: hidden;

  &__viewport {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  &__track {
    display: flex;
    height: 100%;
    transition: transform 0.45s ease;
  }

  &.is-vertical {
    .my-carousel__item {
      width: 100%;
    }
  }

  &.is-fade,
  &.is-card {
    .my-carousel__track {
      position: relative;
    }
    .my-carousel__item {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .my-carousel__item.is-active {
      pointer-events: auto;
    }
  }

  &.is-card {
    .my-carousel__item {
      width: 70%;
      left: 15%;
      top: 10%;
      height: 80%;
      transition: transform 0.45s ease, opacity 0.45s ease;
    }
  }

  &__item {
    flex: 0 0 100%;
    height: 100%;
    position: relative;
    transition: opacity 0.45s ease;
    &.is-active {
      pointer-events: auto;
    }
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-gray-1;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__placeholder {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: $color-text-secondary;
    background: repeating-linear-gradient(45deg, #f5f7fa, #f5f7fa 10px, #eef1f6 10px, #eef1f6 20px);
  }

  /* 箭头 */
  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.35);
    color: $color-white;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: $transition-fast;
    z-index: 3;
    border: none;
  }

  &__arrow:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  &__arrow--prev {
    left: 16px;
  }

  &__arrow--next {
    right: 16px;
  }

  &.arrow-outer {
    .my-carousel__arrow--prev {
      left: 4px;
      transform: translate(-50%, -50%);
    }
    .my-carousel__arrow--next {
      right: 4px;
      transform: translate(50%, -50%);
    }
  }

  &__arrow-icon {
    font-size: 24px;
    line-height: 1;
    user-select: none;
  }

  /* 指示器 */
  &__indicators {
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 3;
    padding: 6px 10px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    backdrop-filter: blur(2px);
  }

  &__indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.45);
    cursor: pointer;
    transition: $transition-fast;
    padding: 0;
  }

  &__indicator.is-active {
    background: $color-primary;
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba($color-primary, 0.15);
  }

  &__indicators.is-line {
    .my-carousel__indicator {
      width: 24px;
      height: 4px;
      border-radius: 4px;
    }
  }

  &__indicator-number {
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    color: $color-white;
    font-size: $font-size-small;
    z-index: 3;
  }

  /* 进度条 */
  &__progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: rgba(0, 0, 0, 0.15);
    z-index: 3;
  }

  &__progress-bar {
    height: 100%;
    background: $color-primary;
    transition: width 0.04s linear;
    width: 0%;
  }

  /* 缩略图 */
  &__thumbnails {
    display: flex;
    gap: 8px;
    padding: 10px;
    background: $color-gray-1;
    border-top: 1px solid $color-border-base;
  }

  &__thumbnail {
    width: 64px;
    height: 48px;
    border: 1px solid $color-border-base;
    padding: 0;
    border-radius: $border-radius-small;
    overflow: hidden;
    background: $color-white;
    cursor: pointer;
    transition: $transition-fast;
  }

  &__thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__thumbnail.is-active {
    border-color: $color-primary;
    box-shadow: 0 0 0 2px rgba($color-primary, 0.2);
  }
}
</style>

