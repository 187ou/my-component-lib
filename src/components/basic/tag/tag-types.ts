// src/components/Tag/tag-types.ts
import { Size, Type } from '@/types/basic'

export interface TagProps {
  type?: Type
  size?: Size
  disabled?: boolean
  loading?: boolean
  plain?: boolean
  outline?: boolean
  closeable?: boolean
  clickable?: boolean
  round?: boolean
  block?: boolean
  icon?: string
}

export interface TagEmits {
  (e: 'close', event: MouseEvent): void
  (e: 'click', event: MouseEvent): void
}
