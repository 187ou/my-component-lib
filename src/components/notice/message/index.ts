import { createMessage } from './message'
import type { MessageOptions } from './message-types'

// 定义Message函数的类型接口
interface MessageFunction {
  (options: MessageOptions | string): { close: () => void }
  success: (message: string | MessageOptions) => { close: () => void }
  warning: (message: string | MessageOptions) => { close: () => void }
  info: (message: string | MessageOptions) => { close: () => void }
  danger: (message: string | MessageOptions) => { close: () => void }
  loading: (message: string | MessageOptions) => { close: () => void }
}

const Message = ((options: MessageOptions | string) => {
    if (typeof options === 'string') {
      options = { message: options }
    }
    return createMessage({ duration: 3000, type: 'info', ...options })
  }) as MessageFunction

;(['success', 'warning', 'info', 'danger', 'loading'] as const).forEach(type => {
  Message[type] = (message: string | MessageOptions) => {
    return Message({
      ...(typeof message === 'string' ? { message } : message),
      type
    })
  }
})

export const LinMessage = Message
export default LinMessage
