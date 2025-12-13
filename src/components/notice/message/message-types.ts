import type { VNode } from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'danger' | 'loading'

export interface MessageOptions {
  message?: string | VNode
  type?: MessageType
  duration?: number
  showClose?: boolean
  icon?: string
  offset?: number
  zIndex?: number
  onClose?: () => void
}


export interface MessageProps extends MessageOptions {
  id: string
  visible: boolean
}
