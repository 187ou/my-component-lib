// src/components/Input/index.ts
import Input from './Input.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const MyInput = withInstall(Input)
export default MyInput

// 导出类型
export type { InputProps, InputEmits } from './input-types'
