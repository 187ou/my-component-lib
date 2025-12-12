// src/components/button/index.ts
import Button from './Button.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const LinButton = withInstall(Button, 'LinButton')
export default LinButton

// 导出类型（供外部使用）
export type { ButtonProps, ButtonEmits } from './button-types'
