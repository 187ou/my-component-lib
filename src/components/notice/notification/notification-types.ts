import type { VNode } from 'vue'

export type NotificationType = 'success' | 'warning' | 'info' | 'danger' | 'loading'
export type NotificationPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'

export interface NotificationOptions {
  title?: string
  message?: string | VNode
  type?: NotificationType
  duration?: number
  position?: NotificationPosition
  showClose?: boolean
  icon?: string
  offset?: number
  zIndex?: number
  onClose?: () => void
}

export interface NotificationProps extends NotificationOptions {
  id: string
  visible: boolean
}
