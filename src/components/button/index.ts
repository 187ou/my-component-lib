// src/components/button/index.ts
import Button from './Button.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const MyButton = withInstall(Button, 'MyButton')
export default MyButton

// 导出类型（供外部使用）
export type { ButtonProps, ButtonEmits } from './button-types'
