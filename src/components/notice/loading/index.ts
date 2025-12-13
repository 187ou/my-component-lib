import Loading from './Loading.vue'
import { withInstall } from '@/utils/install'

export const LinLoading = withInstall(Loading, 'LinLoading')
export default LinLoading

export type { LoadingProps } from './loading-types'
