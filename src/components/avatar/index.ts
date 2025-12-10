// src/components/avatar/index.ts
import Avatar from './Avatar.vue'
import { withInstall } from '@/utils/install'

export const LinAvatar = withInstall(Avatar, 'LinAvatar')
export default LinAvatar

export type { AvatarProps, AvatarEmits } from './avatar-types'
