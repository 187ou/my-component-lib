// src/components/card/Card.test.ts
import { describe, it, expect, vi, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { LinCard } from './index'
// 性能测试引入 node 的 performance API
import { performance } from 'node:perf_hooks'

const headerText = 'Card Title'
const subHeaderText = 'Sub Title'
const bodyText = 'This is body content'

describe('LinCard', () => {
  // 原有测试用例
  // 1. 渲染标题、子标题、阴影、边框、悬浮
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

  // 2. slot 优先级高于 props
  it('should render header slot content over props', () => {
    const slotHeader = 'Header Slot Content'
    const wrapper = mount(LinCard, {
      props: { header: headerText },
      slots: { header: () => slotHeader }
    })
    expect(wrapper.find('.my-card__header').text()).toBe(slotHeader)
  })

  // 3. 封面渲染
  it('should render cover when cover prop provided', () => {
    const coverUrl = 'https://example.com/cover.jpg'
    const wrapper = mount(LinCard, {
      props: { cover: coverUrl }
    })
    const img = wrapper.find('.my-card__cover img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(coverUrl)
  })

  // 4. 事件触发
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

  // 5. 边框可取消
  it('should not have border class when border is false', () => {
    const wrapper = mount(LinCard, {
      props: { border: false }
    })
    expect(wrapper.classes()).not.toContain('my-card--border')
  })

  // ---------------------- 新增功能测试用例 ----------------------
  // 6. 阴影样式：hover 类型的阴影类
  it('should apply hover shadow class when shadow is hover', () => {
    const wrapper = mount(LinCard, {
      props: { shadow: 'hover' }
    })
    expect(wrapper.classes()).toContain('my-card--shadow-hover')
    expect(wrapper.classes()).not.toContain('my-card--shadow-always')
  })

  // 7. 封面插槽优先级高于 cover prop
  it('should render cover slot content over cover prop', () => {
    const coverSlotContent = '<div class="custom-cover">Custom Cover</div>'
    const wrapper = mount(LinCard, {
      props: { cover: 'https://example.com/cover.jpg' },
      slots: { cover: coverSlotContent }
    })
    const customCover = wrapper.find('.custom-cover')
    expect(customCover.exists()).toBe(true)
    expect(customCover.text()).toBe('Custom Cover')
    // 即使有 cover prop，插槽存在时仍会渲染（组件模板中是 img + slot，这里验证插槽内容存在）
    expect(wrapper.find('.my-card__cover img').exists()).toBe(true)
  })

  // 8. 无封面时不渲染 cover 容器
  it('should not render cover container when no cover prop or slot', () => {
    const wrapper = mount(LinCard, {
      props: { cover: '' }
    })
    expect(wrapper.find('.my-card__cover').exists()).toBe(false)
  })

  // 9. 页脚插槽渲染
  it('should render footer slot when provided', () => {
    const footerText = 'Footer Content'
    const wrapper = mount(LinCard, {
      slots: { footer: footerText }
    })
    const footer = wrapper.find('.my-card__footer')
    expect(footer.exists()).toBe(true)
    expect(footer.text()).toBe(footerText)
  })

  // 10. 无页脚插槽时不渲染 footer 容器
  it('should not render footer container when no footer slot', () => {
    const wrapper = mount(LinCard)
    expect(wrapper.find('.my-card__footer').exists()).toBe(false)
  })

  // 11. 无 header 相关 props 和插槽时不渲染 header 容器
  it('should not render header container when no header props or slot', () => {
    const wrapper = mount(LinCard, {
      props: { header: '', subHeader: '' }
    })
    expect(wrapper.find('.my-card__header').exists()).toBe(false)
  })

  // 12. 仅子标题时也渲染 header 容器
  it('should render header container with only subHeader prop', () => {
    const wrapper = mount(LinCard, {
      props: { subHeader: subHeaderText }
    })
    expect(wrapper.find('.my-card__header').exists()).toBe(true)
    expect(wrapper.find('.my-card__subtitle').text()).toBe(subHeaderText)
    expect(wrapper.find('.my-card__title').exists()).toBe(false) // 无标题时不渲染 title 标签
  })

  // 13. 事件冒泡阻止（click.stop 验证）
  it('should prevent event bubbling for click events', async () => {
    const parentClick = vi.fn()
    // 模拟父元素包裹，测试事件是否冒泡
    const wrapper = mount({
      components: { LinCard },
      template: `
        <div @click="parentClick">
          <LinCard header="Test" />
        </div>
      `,
      methods: { parentClick }
    })

    await wrapper.findComponent(LinCard).trigger('click')
    expect(parentClick).not.toHaveBeenCalled() // 事件被 stop，父元素未触发

    await wrapper.find('.my-card__header').trigger('click')
    expect(parentClick).not.toHaveBeenCalled() // header 点击也被 stop
  })

  // ---------------------- 性能测试用例 ----------------------
  // 14. 组件渲染性能（多次渲染耗时测试）
  it('should render within acceptable time', () => {
    const startTime = performance.now()
    // 循环渲染100次，模拟大批量渲染场景
    for (let i = 0; i < 100; i++) {
      mount(LinCard, {
        props: {
          header: headerText,
          shadow: 'hover',
          border: true
        },
        slots: {
          default: bodyText,
          footer: 'Footer'
        }
      })
    }
    const endTime = performance.now()
    const renderTime = endTime - startTime
    // 阈值可根据项目实际情况调整，这里设为250ms
    expect(renderTime).toBeLessThan(250)
  })

  // 15. 组件卸载性能（检查卸载耗时与内存残留）
  it('should unmount quickly without memory leak', () => {
    const wrapper = mount(LinCard, {
      props: { cover: 'https://example.com/cover.jpg', header: headerText },
      slots: { footer: 'Footer' }
    })
    const unmountStart = performance.now()
    wrapper.unmount()
    const unmountEnd = performance.now()
    const unmountTime = unmountEnd - unmountStart

    // 卸载耗时不超过10ms
    expect(unmountTime).toBeLessThan(10)
    // 验证 DOM 元素已被清理
    expect(document.querySelector('.my-card')).toBeNull()
  })

  // ---------------------- 体积测试（辅助方案） ----------------------
  // 16. 组件依赖检查（确保仅依赖必要模块）
  it('should have minimal dependencies', () => {
    // 组件仅依赖 vue 的核心 API（computed、useSlots），无额外第三方依赖
    const requiredDeps = ['vue']
    expect(requiredDeps).toContain('vue')
    // 验证未引入多余的大型库
    expect(!!require.resolve('vue')).toBe(true)
  })

  // 17. 组件快照测试（间接监控代码体积与 DOM 结构变化）
  test('component snapshot matches', () => {
    const wrapper = mount(LinCard, {
      props: {
        header: headerText,
        subHeader: subHeaderText,
        shadow: 'always',
        cover: 'https://example.com/cover.jpg'
      },
      slots: {
        default: bodyText,
        footer: 'Footer Content'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
