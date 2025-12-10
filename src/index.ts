// src/index.ts
import 'virtual:svg-icons-register'
import { App } from 'vue'
import './styles/index.scss'

// 导入组件
import { LinButton } from './components/button'
import { LinInput } from './components/input'
import { LinLink } from './components/link'
import { LinIcon } from './components/icon'
import { LinAvatar } from './components/avatar'
import { LinCard } from './components/card'
import { LinCarousel } from './components/carousel'

// 组件列表（用于批量注册）
const components = [LinButton, LinLink, LinInput, LinIcon, LinAvatar, LinCard, LinCarousel]

// 全局注册方法
const install = (app: App) => {
  components.forEach(component => {
    app.use(component as any)
  })
}

// 按需导出组件
export { LinButton, LinLink, LinInput, LinAvatar, LinIcon, LinCard, LinCarousel }

// 导出类型
export type { ButtonProps, ButtonEmits } from './components/button/button-types'
export type { InputProps, InputEmits } from './components/input/input-types'
export type { LinkProps, LinkEmits } from './components/link/link-types'
export type { IconProps } from './components/icon/icon-types'
export type { AvatarProps, AvatarEmits } from './components/avatar/avatar-types'
export type { CardProps, CardEmits } from './components/card/card-types'
export type { CarouselProps, CarouselEmits, NormalizedCarouselItem, CarouselItem } from './components/carousel/carousel-types'

// 默认导出（支持 app.use() 全局注册）
export default {
  install
}
