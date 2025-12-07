// src/components/Input/Input.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { MyInput } from './index'

describe('MyInput', () => {
  // 测试默认渲染
  it('should render with default props', () => {
    const wrapper = mount(MyInput)
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('type')).toBe('text')
  })

  // 测试 v-model 双向绑定
  it('should support v-model', async () => {
    const wrapper = mount(MyInput, {
      props: { modelValue: 'test' }
    })
    const input = wrapper.find('input')
    expect(input.element.value).toBe('test')

    // 模拟输入
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })

  // 测试尺寸
  it('should render with correct size', () => {
    const wrapper = mount(MyInput, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('my-input--large')
  })

  // 测试禁用状态
  it('should be disabled when disabled prop is true', () => {
    const wrapper = mount(MyInput, {
      props: { disabled: true }
    })
    const input = wrapper.find('input')
    expect(input.attributes('disabled')).toBeDefined()
    expect(wrapper.classes()).toContain('my-input--disabled')
  })

  // 测试清空功能
  it('should clear value when clear button is clicked', async () => {
    const wrapper = mount(MyInput, {
      props: { modelValue: 'test', clearable: true }
    })
    const clearBtn = wrapper.find('.my-input__clear')
    expect(clearBtn.exists()).toBe(true)

    await clearBtn.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  // 测试前缀插槽
  it('should render prefix slot', () => {
    const wrapper = mount(MyInput, {
      slots: { prefix: '<span class="prefix-icon">🔍</span>' }
    })
    const prefix = wrapper.find('.my-input__prefix .prefix-icon')
    expect(prefix.exists()).toBe(true)
    expect(prefix.text()).toBe('🔍')
  })

  // 测试聚焦/失焦事件
  it('should emit focus and blur events', async () => {
    const wrapper = mount(MyInput)
    const input = wrapper.find('input')

    await input.trigger('focus')
    expect(wrapper.emitted('focus')).toHaveLength(1)
    expect(wrapper.classes()).toContain('my-input--focused')

    await input.trigger('blur')
    expect(wrapper.emitted('blur')).toHaveLength(1)
    expect(wrapper.classes()).not.toContain('my-input--focused')
  })
})
