<!-- src/components/Dropdown/DropdownMenu.vue -->
<template>
  <ul class="my-dropdown-menu" role="menu">
    <template v-for="item in props.menu" :key="item.value ?? item.label ?? Math.random()">
    <li
        v-if="item.type === 'group' && item.children"
        class="my-dropdown-menu__group"
      >
        <div class="my-dropdown-menu__group-title">{{ item.label }}</div>
        <DropdownMenu :menu="item.children" @select="$emit('select', $event)" @command="$emit('command', $event)" />
      </li>

      <li
        v-else
        class="my-dropdown-menu__item"
        :class="{
          'is-disabled': item.disabled,
          'is-divided': item.divided,
          'has-children': item.children && item.children.length > 0
        }"
        @click="onClick(item, $event)"
        @mouseenter="onMouseEnter(item)"
        @mouseleave="onMouseLeave(item)"
      >
        <span class="my-dropdown-menu__left">
          <span v-if="item.icon" class="my-dropdown-menu__icon">
            <lin-icon :name="item.icon" size="14px" />
          </span>
          <span class="my-dropdown-menu__label">{{ item.label }}</span>
        </span>

        <!-- 子菜单占位，hover 时显示 -->
        <div v-if="item.children && item.children.length > 0" class="my-dropdown-submenu" v-show="openSub === item">
          <DropdownMenu :menu="item.children" @select="$emit('select', $event)" @command="$emit('command', $event)" />
        </div>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownItem } from './dropdown-types'
import DropdownMenu from './DropdownMenu.vue'
import LinIcon from "../icon";

const props = defineProps<{
  menu: DropdownItem[]
}>()

const emit = defineEmits(['select', 'command'])

const openSub = ref<any>(null)

const onClick = (item: DropdownItem, e: Event) => {
  e.stopPropagation()
  if (item.disabled) return
  if (item.command !== undefined) {
    emit('command', item.command)
  }
  if (!item.children || item.children.length === 0) {
    emit('select', item)
  } else {
    // click on parent with children toggles submenu
    openSub.value = openSub.value === item ? null : item
  }
}

let hoverTimer: any = null
const onMouseEnter = (item: DropdownItem) => {
  if (!item.children || item.children.length === 0) return
  clearTimeout(hoverTimer)
  hoverTimer = setTimeout(() => {
    openSub.value = item
  }, 120)
}
const onMouseLeave = (item: DropdownItem) => {
  if (!item.children || item.children.length === 0) return
  clearTimeout(hoverTimer)
  hoverTimer = setTimeout(() => {
    if (openSub.value === item) openSub.value = null
  }, 160)
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.my-dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 120px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    font-size: $font-size-base;
    cursor: pointer;
    transition: $transition-fast;
    position: relative;

    &:hover {
      background: $color-gray-1;
    }

    &.is-disabled {
      color: $color-text-placeholder;
      cursor: not-allowed;
    }

    &.is-divided {
      border-top: 1px solid $color-border-base;
      margin-top: 6px;
      padding-top: 10px;
    }

    &.has-children {
      > .my-dropdown-submenu {
        position: absolute;
        top: 0;
        left: 100%;
        margin-left: 6px;
        z-index: 4000;
        background: $color-white;
        border: 1px solid $color-border-base;
        border-radius: $border-radius-base;
        box-shadow: $box-shadow-base;
        display: none;
      }

      &:hover > .my-dropdown-submenu {
        display: block;
      }
    }
  }

  &__group {
    padding: 4px 0;

    &-title {
      font-size: 12px;
      padding: 6px 12px;
      color: $color-text-secondary;
    }
  }

  &__icon {
    margin-right: 8px;
    display: inline-flex;
  }

  &__left {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
