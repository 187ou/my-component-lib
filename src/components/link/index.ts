// src/components/link/index.ts
import Link from './Link.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const MyLink = withInstall(Link, 'MyLink')
export default MyLink

// 导出类型（供外部使用）
export type { LinkProps, LinkEmits } from './link-types'