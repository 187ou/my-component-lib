import { createNotification } from './notification'
import type { NotificationOptions } from './notification-types'

// 定义 Notification 函数的类型接口
interface NotificationFunction {
  (options: NotificationOptions): { close: () => void }
  success: (options: string | NotificationOptions) => { close: () => void }
  warning: (options: string | NotificationOptions) => { close: () => void }
  info: (options: string | NotificationOptions) => { close: () => void }
  danger: (options: string | NotificationOptions) => { close: () => void }
  loading: (options: string | NotificationOptions) => { close: () => void }
}

const Notification = ((options: NotificationOptions) => {
    return createNotification({ duration: 4500, ...options })
  }) as NotificationFunction

;(['success', 'warning', 'info', 'danger', 'loading'] as const).forEach(type => {
  Notification[type] = (options: string | NotificationOptions) => {
    return Notification(
      typeof options === 'string'
        ? { message: options, type }
        : { ...options, type }
    )
  }
})

export const LinNotification = Notification
export default LinNotification
