<template>
  <div
    :class="[
      'my-input', // Block
      `my-input--${size}`, // Modifier: 尺寸
      `my-input--${inputType}`, // Modifier: 类型
      {
        'my-input--disabled': disabled,
        'my-input--error': error,
        'my-input--focused': isFocused
      }
    ]"
  >
    <!-- 前缀插槽 -->
    <div class="my-input__prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </div>

    <!-- 输入框 -->
    <input
      ref="inputRef"
      :type="type === 'password' && showPassword ? 'text' : type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :maxlength="maxlength"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      class="my-input__inner"
    />

    <!-- 后缀内容 -->
    <div class="my-input__suffix">
      <!-- 密码显示/隐藏按钮 -->
      <button
        v-if="type === 'password' && showPassword"
        type="button"
        class="my-input__password-toggle"
        @click="togglePasswordVisibility"
        @mousedown.prevent
      >
        {{ isPasswordVisible ? '👁️' : '👁️‍🗨️' }}
      </button>

      <!-- 字数限制显示 -->
      <span
        v-if="showWordLimit && maxlength"
        class="my-input__word-limit"
      >
        {{ String(modelValue).length }}/{{ maxlength }}
      </span>

      <!-- 后缀插槽 -->
      <slot name="suffix"></slot>

      <!-- 清空按钮 -->
      <button
        v-if="clearable && modelValue && !disabled"
        type="button"
        class="my-input__clear"
        @click="handleClear"
        @mousedown.prevent
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { InputProps, InputEmits } from './input-types'

// Props 定义
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'medium',
  placeholder: '',
  disabled: false,
  readonly: false,
  clearable: false,
  modelValue: '',
  error: false,
  showPassword: false,
  maxlength: undefined,
  showWordLimit: false,
  inputType: 'primary'
})

// Emits 定义
const emit = defineEmits<InputEmits>()

// 输入框引用
const inputRef = ref<HTMLInputElement | null>(null)
// 聚焦状态
const isFocused = ref(false)
// 密码可见性状态
const isPasswordVisible = ref(false)

// 输入事件处理
const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  const value = target.value
  emit('update:modelValue', value)
  emit('input', value)
}

// 失焦/回车事件处理
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('change', target.value)
}

// 聚焦事件处理
const handleFocus = (e: FocusEvent) => {
  isFocused.value = true
  emit('focus', e)
}

// 失焦事件处理
const handleBlur = (e: FocusEvent) => {
  isFocused.value = false
  emit('blur', e)
}

// 清空事件处理
const handleClear = () => {
  emit('update:modelValue', '')
  emit('input', '')
  emit('change', '')
  emit('clear')
  // 清空后重新聚焦
  inputRef.value?.focus()
}

// 切换密码可见性
const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

// 监听 modelValue 变化（用于外部直接修改值时同步状态）
watch(() => props.modelValue, (newValue) => {
  if (inputRef.value && inputRef.value.value !== String(newValue)) {
    inputRef.value.value = String(newValue)
  }
})
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

// Block: my-input
.my-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  background-color: $color-white;
  border: 1px solid $color-gray-2;
  border-radius: $border-radius-base;
  transition: all 0.3s ease;

  // 类型修饰符
  &--primary {
    border-color: $color-primary;

    &.my-input--focused {
      border-color: $color-primary;
      box-shadow: 0 0 0 2px rgba($color-primary, 0.2);
    }
  }

  &--success {
    border-color: $color-success;

    &.my-input--focused {
      border-color: $color-success;
      box-shadow: 0 0 0 2px rgba($color-success, 0.2);
    }
  }

  &--warning {
    border-color: $color-warning;

    &.my-input--focused {
      border-color: $color-warning;
      box-shadow: 0 0 0 2px rgba($color-warning, 0.2);
    }
  }

  &--danger {
    border-color: $color-danger;

    &.my-input--focused {
      border-color: $color-danger;
      box-shadow: 0 0 0 2px rgba($color-danger, 0.2);
    }
  }

  &--info {
    border-color: $color-info;

    &.my-input--focused {
      border-color: $color-info;
      box-shadow: 0 0 0 2px rgba($color-info, 0.2);
    }
  }

  // 错误状态
  &--error {
    border-color: $color-danger;

    &.my-input--focused {
      border-color: $color-danger;
      box-shadow: 0 0 0 2px rgba($color-danger, 0.2);
    }
  }

  // 禁用状态
  &--disabled {
    background-color: $color-gray-1;
    border-color: $color-gray-2;
    cursor: not-allowed;

    .my-input__inner {
      background-color: transparent;
      cursor: not-allowed;
    }
  }

  // Modifier: --large
  &--large {
    height: 40px;

    .my-input__inner {
      font-size: $font-size-large;
      padding: 0 12px;
    }

    .my-input__prefix,
    .my-input__suffix {
      padding: 0 8px;
    }
  }

  // Modifier: --medium
  &--medium {
    height: 32px;

    .my-input__inner {
      font-size: $font-size-base;
      padding: 0 10px;
    }

    .my-input__prefix,
    .my-input__suffix {
      padding: 0 6px;
    }
  }

  // Modifier: --small
  &--small {
    height: 24px;

    .my-input__inner {
      font-size: $font-size-small;
      padding: 0 8px;
    }

    .my-input__prefix,
    .my-input__suffix {
      padding: 0 4px;
    }
  }

  // Element: my-input__prefix
  &__prefix {
    display: flex;
    align-items: center;
    color: $color-gray-4;
    font-size: 14px;
  }

  // Element: my-input__inner
  &__inner {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: inherit;
    color: $color-gray-6;

    &::placeholder {
      color: $color-gray-3;
    }
  }

  // Element: my-input__suffix
  &__suffix {
    display: flex;
    align-items: center;
    color: $color-gray-4;
    font-size: 14px;
  }

  // Element: my-input__clear
  &__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    padding: 0;
    border: none;
    background: none;
    color: $color-gray-4;
    font-size: 12px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      color: $color-gray-6;
      background-color: $color-gray-2;
    }
  }

  // Element: my-input__password-toggle
  &__password-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 0;
    border: none;
    background: none;
    color: $color-gray-4;
    font-size: 14px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      color: $color-primary;
      background-color: $color-gray-2;
    }
  }

  // Element: my-input__word-limit
  &__word-limit {
    font-size: 12px;
    color: $color-gray-4;
    margin-right: 4px;

    .my-input--error & {
      color: $color-danger;
    }
  }
}
</style>
