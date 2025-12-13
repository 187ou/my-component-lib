import { Type } from '@/types/basic'


export type ProgressType = 'line' | 'circle'


export interface ProgressProps {
  percentage: number
  type?: ProgressType
  status?: Type
  strokeWidth?: number
  showText?: boolean
  color?: string
}
