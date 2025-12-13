import { createVNode, render } from 'vue'
import Notification from './Notification.vue'
import type { NotificationOptions, NotificationPosition } from './notification-types'

let seed = 0

const instances: Record<NotificationPosition, any[]> = {
  'top-right': [],
  'top-left': [],
  'bottom-right': [],
  'bottom-left': []
}

const GAP = 16

export function createNotification(options: NotificationOptions) {
  const id = `notification_${seed++}`
  const container = document.createElement('div')

  const position = options.position || 'top-right'

  let offset = options.offset ?? 16
  instances[position].forEach(({ vm }) => {
    offset += vm.el.offsetHeight + GAP
  })

  const props = {
    ...options,
    id,
    position,
    offset,
    visible: true,
    zIndex: options.zIndex ?? 3000
  }

  const vnode = createVNode(Notification, props)

  vnode.props!.onDestroy = () => {
    options.onClose?.()

    render(null, container)
    document.body.removeChild(container)

    const list = instances[position]
    const idx = list.findIndex(i => i.id === id)
    if (idx !== -1) list.splice(idx, 1)
  }

  render(vnode, container)
  document.body.appendChild(container)

  instances[position].push({ id, vm: vnode })
  
  return {
    close: () => vnode.props!.onDestroy()
  }
}
