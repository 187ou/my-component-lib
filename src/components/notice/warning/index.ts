// src/components/notice/warning/index.ts
import Warning from './Warning.vue'
import { withInstall } from '@/utils/install'

// 为组件添加 install 方法
export const LinWarning = withInstall(Warning, 'LinWarning')
export default LinWarning

// 导出类型（供外部使用）
export type { WarningProps, WarningEmits } from './warning-types'
