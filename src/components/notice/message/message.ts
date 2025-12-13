import { createVNode, render } from 'vue'
import Message from './Message.vue'
import type { MessageOptions } from './message-types'

let seed = 0
const instances: any[] = []

const GAP = 16

export function createMessage(options: MessageOptions) {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  let offset = options.offset ?? 20
  instances.forEach(({ vm }) => {
    offset += vm.el.offsetHeight + GAP
  })

  const props = {
    ...options,
    id,
    offset,
    visible: true,
    zIndex: options.zIndex ?? 2000,
    onClose: options.onClose
  }

  const vnode = createVNode(Message, props)

  vnode.props!.onDestroy = () => {
    options.onClose?.()
    render(null, container)
    document.body.removeChild(container)
    const idx = instances.findIndex(i => i.id === id)
    instances.splice(idx, 1)
  }

  render(vnode, container)
  document.body.appendChild(container)

  instances.push({ id, vm: vnode })

  return {
    close: () => vnode.props!.onDestroy()
  }
}
