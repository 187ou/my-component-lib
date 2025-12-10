// src/components/link/index.ts
import Link from './Link.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const LinLink = withInstall(Link, 'LinLink')
export default LinLink

// 导出类型（供外部使用）
export type { LinkProps, LinkEmits } from './link-types'