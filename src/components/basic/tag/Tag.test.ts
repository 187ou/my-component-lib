// src/components/Tag/Tag.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { LinTag } from './index'

// mock 图标组件
vi.mock('../icon', () => ({
  LinIcon: {
    props: ['name', 'size'],
    template: '<svg :data-name="name" :data-size="size"></svg>'
  }
}))

describe('MyTag', () => {

  it('should render with correct type and size', () => {
    const wrapper = mount(LinTag, {
      props: { type: 'danger', size: 'small' },
      slots: { default: 'Tag Text' }
    })
    expect(wrapper.classes()).toContain('my-tag--danger')
    expect(wrapper.classes()).toContain('my-tag--small')
  })

  it('should emit click event when clickable', async () => {
    const onClick = vi.fn()
    const wrapper = mount(LinTag, {
      props: { clickable: true },
      slots: { default: 'Click Me' },
      attrs: { onClick }
    })
    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not emit click event when disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(LinTag, {
      props: { clickable: true, disabled: true },
      slots: { default: 'Disabled' },
      attrs: { onClick }
    })
    await wrapper.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('should emit close event when close button clicked', async () => {
    const onClose = vi.fn()
    const wrapper = mount(LinTag, {
      props: { closeable: true },
      slots: { default: 'Closable' },
      attrs: { onClose }
    })
    await wrapper.find('.my-tag__close').trigger('click')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('should not show close button when loading', () => {
    const wrapper = mount(LinTag, {
      props: { closeable: true, loading: true },
      slots: { default: 'Loading' }
    })
    expect(wrapper.find('.my-tag__close').exists()).toBe(false)
  })

  it('should render loading state', () => {
    const wrapper = mount(LinTag, {
      props: { loading: true },
      slots: { default: 'Loading' }
    })
    expect(wrapper.classes()).toContain('my-tag--loading')
    expect(wrapper.find('.my-tag__loading').exists()).toBe(true)
  })

  it('should render plain style', () => {
    const wrapper = mount(LinTag, {
      props: { plain: true },
      slots: { default: 'Plain' }
    })
    expect(wrapper.classes()).toContain('my-tag--plain')
  })

  it('should render outline style', () => {
    const wrapper = mount(LinTag, {
      props: { outline: true },
      slots: { default: 'Outline' }
    })
    expect(wrapper.classes()).toContain('my-tag--outline')
  })

  it('should render round style', () => {
    const wrapper = mount(LinTag, {
      props: { round: true },
      slots: { default: 'Round' }
    })
    expect(wrapper.classes()).toContain('my-tag--round')
  })

  it('should render block style', () => {
    const wrapper = mount(LinTag, {
      props: { block: true },
      slots: { default: 'Block' }
    })
    expect(wrapper.classes()).toContain('my-tag--block')
  })

  it('should render icon from prop or slot', () => {
    // ① icon prop
    const wrapper1 = mount(LinTag, {
      props: { icon: 'star', size: 'large' },
      slots: { default: 'Star' }
    })
    const icon1 = wrapper1.find('svg')
    expect(icon1.exists()).toBe(true)
    expect(icon1.attributes('data-name')).toBe('star')
    expect(icon1.attributes('data-size')).toBe('16px')

    // ② icon slot > prop
    const wrapper2 = mount(LinTag, {
      props: { icon: 'star' },
      slots: {
        icon: '<span class="custom-icon">⭐</span>',
        default: 'Slot Icon'
      }
    })
    expect(wrapper2.find('.custom-icon').exists()).toBe(true)
    expect(wrapper2.find('svg').exists()).toBe(false)
  })

  it('should render correct classes for all types', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const
    types.forEach((type) => {
      const wrapper = mount(LinTag, { props: { type } })
      expect(wrapper.classes()).toContain(`my-tag--${type}`)
    })
  })
})
