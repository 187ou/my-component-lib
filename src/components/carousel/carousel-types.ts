// src/components/carousel/carousel-types.ts
export type CarouselDirection = 'horizontal' | 'vertical'
export type CarouselEffect = 'slide' | 'fade' | 'card'
export type CarouselIndicator = 'dot' | 'line' | 'number'
export type CarouselArrowPosition = 'inner' | 'outer'

/** 传入的轮播项 */
export interface CarouselItem {
  /** 图片地址 */
  src?: string
  /** 缩略图地址（不传则回退为 src） */
  thumbnail?: string
  /** 图片 alt 文案 */
  alt?: string
  /** 额外数据，插槽可使用 */
  [key: string]: any
}

/** 组件内部使用的标准化结构 */
export interface NormalizedCarouselItem {
  src?: string
  thumbnail?: string
  alt?: string
  raw: CarouselItem
}

/** Carousel 组件 Props */
export interface CarouselProps {
  /** 轮播数据，字符串将自动转换为图片项 */
  items?: Array<string | CarouselItem>
  /** 默认起始索引 */
  startIndex?: number
  /** 是否自动播放 */
  autoplay?: boolean
  /** 自动播放间隔（ms） */
  interval?: number
  /** 是否循环播放 */
  loop?: boolean
  /** 垂直 / 水平方向 */
  direction?: CarouselDirection
  /** 容器高度（带单位） */
  height?: string
  /** 动画效果 */
  effect?: CarouselEffect
  /** 指示器样式 */
  indicatorType?: CarouselIndicator
  /** 是否展示指示器 */
  showIndicators?: boolean
  /** 是否展示左右箭头 */
  showArrows?: boolean
  /** 箭头位置：内侧 / 外侧 */
  arrowPosition?: CarouselArrowPosition
  /** 是否展示缩略图 */
  thumbnails?: boolean
  /** 是否展示进度条（仅 autoplay 时生效） */
  progressBar?: boolean
  /** 鼠标悬停是否暂停自动播放 */
  pauseOnHover?: boolean
}

/** Carousel 组件 Emits */
export interface CarouselEmits {
  /** 轮播项切换时触发 */
  (e: 'change', current: number): void
  /** 支持 v-model:current */
  (e: 'update:current', current: number): void
}

