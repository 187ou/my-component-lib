// src/components/link/link-types.ts
import { Size, Type } from '@/types/basic'

// Link Props 类型
export interface LinkProps {
  // 链接地址
  href?: string
  // 链接类型（样式类型）
  type?: Type | 'default'
  // 链接尺寸
  size?: Size
  // 是否禁用
  disabled?: boolean
  // 是否显示下划线
  underline?: boolean
  // 链接目标
  target?: '_blank' | '_self' | '_parent' | '_top'
  // 图标类名（兼容旧用法）
  icon?: string
  // 前置图标名称
  prefixIcon?: string
  // 后置图标名称
  suffixIcon?: string
  // 是否在新标签页打开
  openInNewTab?: boolean
}

// Link 事件类型
export interface LinkEmits {
  (e: 'click', event: MouseEvent): void
}
