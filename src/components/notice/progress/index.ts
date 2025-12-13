import Progress from './Progress.vue'
import { withInstall } from '@/utils/install'


export const LinProgress = withInstall(Progress, 'LinProgress')
export default LinProgress


export type { ProgressProps } from './progress-types'
