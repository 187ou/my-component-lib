// src/components/Button/button-types.ts
import { Size, Type } from '@/types/basic'

// Button Props 类型
export interface ButtonProps {
  type?: Type
  size?: Size
  disabled?: boolean
  loading?: boolean
  icon?: string
  plain?: boolean
  text?: boolean
  round?: boolean
  circle?: boolean
  block?: boolean
}

// Button 事件类型
export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}
