// src/types/index.ts
import { PropType, ExtractPropTypes } from 'vue'

// 基础尺寸类型
export type Size = 'large' | 'medium' | 'small'

// 基础类型类型
export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'info'

// 示例：定义 Button Props 类型
export const buttonProps = {
  type: {
    type: String as PropType<Type>,
    default: 'primary'
  },
  size: {
    type: String as PropType<Size>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

// props 类型提取方式
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
