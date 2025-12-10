// src/components/card/index.ts
import Card from './Card.vue'
import { withInstall } from '@/utils/install'

export const LinCard = withInstall(Card, 'LinCard')
export default LinCard

export type { CardProps, CardEmits } from './card-types'
