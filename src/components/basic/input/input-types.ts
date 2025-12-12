// src/components/Input/input-types.ts
import { Size, Type } from '@/types/basic'

// Input Props 类型
export interface InputProps {
  type?: string
  size?: Size
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  modelValue?: string | number
  error?: boolean
  showPassword?: boolean
  maxlength?: number
  showWordLimit?: boolean
  inputType?: Type
  prefixIcon?: string
  suffixIcon?: string
}

// Input 事件类型
export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'input', value: string | number): void
  (e: 'change', value: string | number): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'clear'): void
}
