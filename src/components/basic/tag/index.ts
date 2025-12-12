// src/components/Tag/index.ts
import Tag from './Tag.vue'
import { withInstall } from '@/utils/install'

export const LinTag = withInstall(Tag, 'LinTag')
export default LinTag

export * from './tag-types'
