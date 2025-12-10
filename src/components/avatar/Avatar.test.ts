// src/components/avatar/Avatar.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { MyAvatar } from './index'

describe('MyAvatar', () => {
  // 渲染图片
  it('should render img when src is provided', () => {
    const src = 'https://example.com/avatar.png'
    const wrapper = mount(MyAvatar, {
      props: { src }
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(src)
  })

  // 加载事件
  it('should emit load event', async () => {
    const src = 'https://example.com/avatar.png'
    const wrapper = mount(MyAvatar, {
      props: { src }
    })
    const img = wrapper.find('img')
    await img.trigger('load')
    expect(wrapper.emitted('load')).toHaveLength(1)
  })

  // 加载失败回退
  it('should handle image error and emit error event', async () => {
    const wrapper = mount(MyAvatar, {
      props: { src: 'invalid.png' }
    })
    const img = wrapper.find('img')
    // 触发 error 事件
    await img.trigger('error')
    expect(wrapper.emitted('error')).toHaveLength(1)
    // 触发 error 后 img 应消失
    expect(wrapper.find('img').exists()).toBe(false)
  })

  // 图标回退
  it('should render icon fallback when icon prop is provided without src', () => {
    const wrapper = mount(MyAvatar, {
      props: { icon: 'user' }
    })
    // 根据实际渲染的DOM结构调整断言
    expect(wrapper.find('.my-icon').exists()).toBe(true)
    expect(wrapper.find('.my-icon--user').exists()).toBe(true)
  })

  // 文本回退
  it('should render text fallback when only text is provided', () => {
    const wrapper = mount(MyAvatar, {
      props: { text: 'Alice' }
    })
    const textEl = wrapper.find('.my-avatar__text')
    expect(textEl.exists()).toBe(true)
    expect(textEl.text()).toBe('A')
  })

  // 尺寸与形状
  it('should apply correct size and shape classes', () => {
    const wrapper = mount(MyAvatar, {
      props: { size: 40, shape: 'square' }
    })
    const root = wrapper.find('.my-avatar')
    expect(root.attributes('style')).toContain('width: 40px')
    expect(root.classes()).toContain('my-avatar--square')
  })
})
