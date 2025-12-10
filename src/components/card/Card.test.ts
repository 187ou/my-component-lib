// src/components/card/Card.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { LinCard } from './index'

const headerText = 'Card Title'
const subHeaderText = 'Sub Title'
const bodyText = 'This is body content'

describe('LinCard', () => {
  // 渲染标题、子标题、阴影、边框、悬浮
  it('should render header, subHeader and apply classes', () => {
    const wrapper = mount(LinCard, {
      props: {
        header: headerText,
        subHeader: subHeaderText,
        shadow: 'always',
        border: true,
        hoverable: true
      },
      slots: {
        default: bodyText
      }
    })

    // Header
    expect(wrapper.find('.my-card__title').text()).toBe(headerText)
    expect(wrapper.find('.my-card__subtitle').text()).toBe(subHeaderText)

    // Body slot
    expect(wrapper.find('.my-card__body').text()).toBe(bodyText)

    // Classes
    expect(wrapper.classes()).toContain('my-card--shadow-always')
    expect(wrapper.classes()).toContain('my-card--border')
    expect(wrapper.classes()).toContain('my-card--hoverable')
  })

  // slot 优先级高于 props
  it('should render header slot content over props', () => {
    const slotHeader = 'Header Slot Content'
    const wrapper = mount(LinCard, {
      props: { header: headerText },
      slots: { header: () => slotHeader }
    })
    expect(wrapper.find('.my-card__header').text()).toBe(slotHeader)
  })

  // 封面渲染
  it('should render cover when cover prop provided', () => {
    const coverUrl = 'https://example.com/cover.jpg'
    const wrapper = mount(LinCard, {
      props: { cover: coverUrl }
    })
    const img = wrapper.find('.my-card__cover img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(coverUrl)
  })

  // 事件触发
  it('should emit click and header-click events', async () => {
    const onClick = vi.fn()
    const onHeaderClick = vi.fn()
    const wrapper = mount(LinCard, {
      props: {
        header: headerText,
        onClick,
        onHeaderClick
      }
    })

    await wrapper.trigger('click')
    expect(onClick).toHaveBeenCalledTimes(1)

    await wrapper.find('.my-card__header').trigger('click')
    expect(onHeaderClick).toHaveBeenCalledTimes(1)
  })

  // 边框可取消
  it('should not have border class when border is false', () => {
    const wrapper = mount(LinCard, {
      props: { border: false }
    })
    expect(wrapper.classes()).not.toContain('my-card--border')
  })
})
