import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { LinLoading } from './index'
import { h } from 'vue'

// Mock LinIcon component
vi.mock('@/components/basic/icon', () => {
  return {
    LinIcon: {
      name: 'LinIcon',
      props: ['name', 'class'],
      setup(props: { name: string; class: string }) {
        return () =>
          h('svg', {
            'data-name': props.name,
            class: props.class
          })
      }
    }
  }
})

describe('LinLoading', () => {
  // Test default rendering
  it('should not render by default when visible is false', () => {
    const wrapper = mount(LinLoading, { props: { visible: false } })
    expect(wrapper.find('.my-loading').exists()).toBe(false)
  })

  it('should render when visible is true', async () => {
    const wrapper = mount(LinLoading, { props: { visible: true } })
    expect(wrapper.find('.my-loading').exists()).toBe(true)
  })

  // Test text prop
  it('should display the correct text', () => {
    const text = 'Loading data...'
    const wrapper = mount(LinLoading, { props: { visible: true, text } })
    expect(wrapper.find('.my-loading__text').text()).toBe(text)
  })

  it('should not display text when text prop is empty', () => {
    const wrapper = mount(LinLoading, { props: { visible: true, text: '' } })
    expect(wrapper.find('.my-loading__text').exists()).toBe(false)
  })

  // Test type prop
  it('should render default type icon when type is default', () => {
    const wrapper = mount(LinLoading, { props: { visible: true, type: 'default' } })
    expect(wrapper.find('.my-loading__icon[data-name="loading"]').exists()).toBe(true)
  })

  it('should render spinner type icon when type is spinner', () => {
    const wrapper = mount(LinLoading, { props: { visible: true, type: 'spinner' } })
    expect(wrapper.find('.my-loading__icon[data-name="spinner"]').exists()).toBe(true)
  })

  it('should render dots type icon when type is dots', () => {
    const wrapper = mount(LinLoading, { props: { visible: true, type: 'dots' } })
    expect(wrapper.find('.my-loading__icon[data-name="dots"]').exists()).toBe(true)
  })

  it('should apply correct class for spinner type', () => {
    const wrapper = mount(LinLoading, { props: { visible: true, type: 'spinner' } })
    expect(wrapper.find('.my-loading--spinner').exists()).toBe(true)
  })

  it('should apply correct class for dots type', () => {
    const wrapper = mount(LinLoading, { props: { visible: true, type: 'dots' } })
    expect(wrapper.find('.my-loading--dots').exists()).toBe(true)
  })
})
