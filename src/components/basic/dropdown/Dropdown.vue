<!-- src/components/Dropdown/Dropdown.vue -->
<template>
  <div
    class="my-dropdown"
    :dir="rtl ? 'rtl' : 'ltr'"
    ref="triggerRef"
    @click="onTriggerClick"
    @contextmenu.prevent="onTriggerRightClick"
    @mouseenter="onTriggerHover(true)"
    @mouseleave="onTriggerHover(false)"
  >
    <slot></slot>

    <Teleport v-if="props.teleport" to="body">
      <transition name="dropdown-fade">
        <div
          v-if="visible"
          class="my-dropdown__menu-wrapper"
          :class="{ 'is-rtl': rtl, 'has-arrow': props.arrow }"
          :style="menuStyle"
          ref="menuRef"
          @mouseenter="onMenuHover(true)"
          @mouseleave="onMenuHover(false)"
        >
          <div v-if="props.arrow" class="my-dropdown__arrow" :style="arrowStyle" />
          <DropdownMenu
            :menu="props.menu"
            @select="onSelect"
            @command="onCommand"
          />
        </div>
      </transition>
    </Teleport>

    <transition name="dropdown-fade" v-else>
      <div
        v-if="visible && !props.teleport"
        class="my-dropdown__menu-wrapper"
        :class="{ 'is-rtl': rtl, 'has-arrow': props.arrow }"
        :style="menuStyle"
        ref="menuRef"
        @mouseenter="onMenuHover(true)"
        @mouseleave="onMenuHover(false)"
      >
        <div v-if="props.arrow" class="my-dropdown__arrow" :style="arrowStyle" />
        <DropdownMenu
          :menu="props.menu"
          @select="onSelect"
          @command="onCommand"
        />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import DropdownMenu from './DropdownMenu.vue'
import type { DropdownProps, DropdownEmits } from './dropdown-types'

const props = withDefaults(defineProps<DropdownProps>(), {
  trigger: 'hover',
  placement: 'auto',
  offset: 6,
  menu: () => [],
  teleport: true,
  arrow: false,
  rtl: false,
  modelValue: undefined
})

const emits = defineEmits<DropdownEmits>()

const visible = ref(false)
const triggerRef = ref<HTMLElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
let hoverTimer: any = null

// show / hide / toggle
const show = async () => {
  if (visible.value) return
  visible.value = true
  emits('visible-change', true)
  await nextTick()
  positionMenu()
}

const hide = () => {
  if (!visible.value) return
  visible.value = false
  emits('visible-change', false)
}

// toggle by trigger
const toggle = () => (visible.value ? hide() : show())

// trigger handlers
const onTriggerClick = () => {
  if (props.trigger === 'click') toggle()
}

const onTriggerRightClick = () => {
  if (props.trigger === 'contextmenu') show()
}

const onTriggerHover = (enter: boolean) => {
  if (props.trigger !== 'hover') return
  clearTimeout(hoverTimer)
  hoverTimer = setTimeout(() => {
    enter ? show() : hide()
  }, 150)
}

const onMenuHover = (enter: boolean) => {
  if (props.trigger !== 'hover') return
  clearTimeout(hoverTimer)
  if (!enter) hoverTimer = setTimeout(hide, 200)
}

// click outside
const onClickOutside = (e: MouseEvent) => {
  if (!visible.value) return
  if (
    !triggerRef.value?.contains(e.target as Node) &&
    !menuRef.value?.contains(e.target as Node)
  ) {
    hide()
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))

// selection and command handling
const onSelect = (item: any) => {
  emits('select', item.value)
  // v-model integration
  emits('update:modelValue', item.value)
  if (!item.keepAlive) hide()
}

const onCommand = (payload: any) => {
  emits('command', payload)
}

// positioning & arrow
const menuStyle = ref<any>({})
const arrowStyle = ref<any>({})

const positionMenu = () => {
  const trigger = triggerRef.value
  const menu = menuRef.value
  if (!trigger || !menu) return

  const rect = trigger.getBoundingClientRect()
  const menuRect = menu.getBoundingClientRect()
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  // default left align to trigger left
  let top = rect.bottom + props.offset
  let left = rect.left

  // placement auto -> check space
  if (props.placement === 'auto') {
    if (top + menuRect.height > windowHeight) {
      top = rect.top - menuRect.height - props.offset
    }
  } else if (props.placement === 'top') {
    top = rect.top - menuRect.height - props.offset
  }

  // RTL: align from right edge
  if (props.rtl) {
    left = rect.right - menuRect.width
    // clamp
    if (left < 0) left = 0
  } else {
    if (left + menuRect.width > windowWidth) {
      left = Math.max(0, windowWidth - menuRect.width - 8)
    }
  }

  menuStyle.value = {
    position: 'absolute',
    top: `${top + window.scrollY}px`,
    left: `${left + window.scrollX}px`,
    minWidth: `${rect.width}px`
  }

  if (props.arrow) {
    // compute arrow position relative to trigger center
    const triggerCenterX = rect.left + rect.width / 2
    const arrowLeft = triggerCenterX - left - 8 // 8 is half arrow width
    arrowStyle.value = {
      left: `${arrowLeft}px`
    }
  }
}

// watch menu visibility to reposition
watch(visible, (v) => {
  if (v) nextTick(positionMenu)
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-dropdown {
  display: inline-block;
  position: relative;
}

.my-dropdown__menu-wrapper {
  background: $color-white;
  border: 1px solid $color-border-base;
  border-radius: $border-radius-base;
  box-shadow: $box-shadow-base;
  padding: 6px 0;
  z-index: 3000;
  transition: $transition-fast;
}

.my-dropdown__menu-wrapper.has-arrow {
  padding-top: 10px; // leave space for arrow
  position: absolute;
}

.my-dropdown__arrow {
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid $color-white;
  position: absolute;
  top: -8px;
  left: 12px;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,0.06));
}

/* RTL adjustments */
.my-dropdown__menu-wrapper.is-rtl {
  direction: rtl;
}

/* fade transition */
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: $transition-fast;
}
</style>
