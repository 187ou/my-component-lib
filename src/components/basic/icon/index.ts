// src/components/Icon/index.ts
import Icon from './Icon.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const LinIcon = withInstall(Icon, 'LinIcon')
export default LinIcon

// 导出类型
export type { IconProps } from './icon-types'
