// src/components/Button/Button.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { LinButton } from './index'

vi.mock('../icon', () => ({
  LinIcon: {
    props: ['name', 'size'],
    template: '<svg :data-name="name" :data-size="size"></svg>'
  }
}))

describe('MyButton', () => {

  it('should render with correct type and size', () => {
    const wrapper = mount(LinButton, {
      props: { type: 'success', size: 'small' },
      slots: { default: 'Test Button' }
    })
    expect(wrapper.classes()).toContain('my-btn--success')
    expect(wrapper.classes()).toContain('my-btn--small')
  })

  it('should emit click event when clicked', async () => {
    const onClick = vi.fn()
    const wrapper = mount(LinButton, {
      slots: { default: 'Click Me' },
      // 修正：事件是通过 $emit 触发，不是 props 传入
      attrs: { onClick }
    })
    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should not emit click event when disabled', async () => {
    const onClick = vi.fn()
    const wrapper = mount(LinButton, {
      slots: { default: 'Disabled' },
      props: { disabled: true },
      attrs: { onClick }
    })
    await wrapper.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  // 新增：测试 loading 状态
  it('should render loading state and disable button', () => {
    const wrapper = mount(LinButton, {
      props: { loading: true },
      slots: { default: 'Loading' }
    })
    // 检查 loading 类名
    expect(wrapper.classes()).toContain('my-btn--loading')
    // 检查 disabled 类名
    expect(wrapper.classes()).toContain('my-btn--disabled')
    // 检查 button 原生 disabled 属性
    expect(wrapper.attributes('disabled')).toBe('')
    // 检查 loading 内容是否存在
    expect(wrapper.find('.my-btn__loading').exists()).toBe(true)
  })

  // 新增：测试 plain 朴素按钮
  it('should render plain button with correct style', () => {
    const wrapper = mount(LinButton, {
      props: { plain: true },
      slots: { default: 'Plain Button' }
    })
    expect(wrapper.classes()).toContain('my-btn--plain')
  })

  // 新增：测试 text 文本按钮
  it('should render text button with correct style', () => {
    const wrapper = mount(LinButton, {
      props: { text: true },
      slots: { default: 'Text Button' }
    })
    expect(wrapper.classes()).toContain('my-btn--text')
  })

  // 新增：测试 round 圆角按钮
  it('should render round button with correct style', () => {
    const wrapper = mount(LinButton, {
      props: { round: true },
      slots: { default: 'Round Button' }
    })
    expect(wrapper.classes()).toContain('my-btn--round')
  })

  // 新增：测试 circle 圆形按钮
  it('should render circle button with correct style', () => {
    const wrapper = mount(LinButton, {
      props: { circle: true, icon: 'search' }, // circle 按钮一般配合 icon 使用
      slots: { default: '' }
    })
    expect(wrapper.classes()).toContain('my-btn--circle')
  })

  // 新增：测试 block 块级按钮
  it('should render block button with 100% width', () => {
    const wrapper = mount(LinButton, {
      props: { block: true },
      slots: { default: 'Block Button' }
    })
    expect(wrapper.classes()).toContain('my-btn--block')
  })

  // 新增：测试 icon 属性和插槽
  it('should render icon via prop or slot', () => {
    // 测试 icon prop
    const wrapper1 = mount(LinButton, {
      props: { icon: 'search', size: 'large' },
      slots: { default: 'Search' }
    })
    const icon1 = wrapper1.find('svg')
    expect(icon1.exists()).toBe(true)
    expect(icon1.attributes('data-name')).toBe('search')
    expect(icon1.attributes('data-size')).toBe('18px') // large 对应 18px

    // 测试 icon 插槽（优先级高于 prop）
    const wrapper2 = mount(LinButton, {
      props: { icon: 'search' },
      slots: {
        icon: '<span class="custom-icon">🔍</span>',
        default: 'Search'
      }
    })
    expect(wrapper2.find('.custom-icon').exists()).toBe(true)
    expect(wrapper2.find('svg').exists()).toBe(false) // 插槽覆盖 prop
  })

  // 新增：测试不同类型按钮的样式类
  // 替换原有第135行附近的代码段如下：
  it('should render correct class for different button types', () => {
    const types = ['primary', 'success', 'warning', 'danger', 'info'] as const
    types.forEach((type) => {
      const wrapper = mount(LinButton, { props: { type } })
      expect(wrapper.classes()).toContain(`my-btn--${type}`)
    })
  })
})
