// src/components/card/card-types.ts
import type { CSSProperties } from 'vue'

/** Card 组件 Props */
export interface CardProps {
  /** 标题文本（也可通过 header slot 传入更复杂内容） */
  header?: string
  /** 副标题文本 */
  subHeader?: string
  /** 卡片阴影显示时机 */
  shadow?: 'always' | 'hover' | 'never'
  /** 是否显示边框 */
  border?: boolean
  /** 是否开启悬浮提升效果（移动 2px） */
  hoverable?: boolean
  /** 封面图片地址 */
  cover?: string
  /** Body 区域自定义样式 */
  bodyStyle?: CSSProperties
}

/** Card 组件 Emits */
export interface CardEmits {
  /** 点击整个卡片 */
  (e: 'click', evt: MouseEvent): void
  /** 点击标题区域 */
  (e: 'header-click', evt: MouseEvent): void
}
