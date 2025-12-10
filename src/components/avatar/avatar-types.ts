// src/components/avatar/avatar-types.ts
import { Size } from '@/types/basic'

// Avatar Props 类型
export interface AvatarProps {
  src?: string // 图片地址
  size?: Size | number // 预设尺寸或自定义像素
  shape?: 'circle' | 'square' // 形状
  alt?: string // 替代文本
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' // img 对象适配
  icon?: string // 显示图标（当无图片时）
  text?: string // 显示文本（当无图片且无图标时）
  lazy?: boolean // 是否懒加载图片
  errorIcon?: string // 加载失败显示的图标
}

// Avatar 事件类型
export interface AvatarEmits {
  (e: 'error', event: Event): void
  (e: 'load', event: Event): void
}
