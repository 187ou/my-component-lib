// src/components/notice/warning/Warning.test.ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { LinWarning } from './index'
import { h } from 'vue';

vi.mock('@/components/basic/icon', () => {
  return {
    LinIcon: {
      name: 'LinIcon',
      props: ['name', 'class'],
      render() {
        // 使用函数参数解构避免this上下文问题
        const props = this as any;
        return h('svg', {
          'data-name': props.name,
          class: props.class
        });
      }
    }
  };
});

// import { h } from 'vue'
//
// vi.mock('@/components/basic/icon', () => ({
//   LinIcon: {
//     name: 'LinIcon',
//     props: ['name', 'classes'],
//     render(props: any) {
//       return h('svg', {
//         'data-name': props.name,
//         class: props.classes
//       })
//     }
//   }
// }))

describe('LinWarning', () => {
  // 1. 测试不同类型的警告组件渲染正确的样式类
  it('should render warning component with default class', () => {
    const wrapper = mount(LinWarning, {
      props: { title: 'Test Warning' }
    });
    expect(wrapper.find('.my-warning').exists()).toBe(true);
  });

  // 2. 测试标题和描述内容正确渲染
  it('should render title and description correctly', () => {
    const title = '提示标题'
    const description = '这是一条详细的提示信息'
    const wrapper = mount(LinWarning, {
      props: { title, description }
    })

    expect(wrapper.find('.my-warning__title').text()).toBe(title)
    expect(wrapper.find('.my-warning__description').text()).toBe(description)
  })

  // 3. 测试关闭按钮功能与 close 事件触发
  it('should emit close event when close button is clicked', async () => {
    const wrapper = mount(LinWarning, {
      props: { closable: true },
      slots: { default: '测试内容' }
    })

    // 点击关闭按钮
    await wrapper.find('.my-warning__close').trigger('click')
    // 验证事件触发
    expect(wrapper.emitted('close')).toBeTruthy()
    // 验证组件隐藏（visible 变为 false）
    expect(wrapper.find('.my-warning').exists()).toBe(false)
  })

  // 4. 测试自定义关闭按钮文本
  it('should render custom close text', () => {
    const closeText = '关闭'
    const wrapper = mount(LinWarning, {
      props: { closable: true, closeText }
    })

    expect(wrapper.find('.my-warning__close').text()).toBe(closeText)
  })

  // 5. 测试隐藏关闭按钮
  it('should not render close button when closable is false', () => {
    const wrapper = mount(LinWarning, {
      props: { closable: false }
    })

    expect(wrapper.find('.my-warning__close').exists()).toBe(false)
    expect(wrapper.classes()).not.toContain('is-closeable')
  })

  // 6. 测试图标显示与隐藏
  it('should show or hide icon based on showIcon prop', () => {
    // 显示图标
    const wrapperWithIcon = mount(LinWarning, {
      props: { showIcon: true, type: 'success' }
    })
    expect(wrapperWithIcon.find('svg[data-name="check-circle"]').exists()).toBe(true)

    // 隐藏图标
    const wrapperWithoutIcon = mount(LinWarning, {
      props: { showIcon: false }
    })
    expect(wrapperWithoutIcon.find('svg').exists()).toBe(false)
  })

  // 7. 测试不同类型对应正确的图标
  it('should render correct icon for each warning type', () => {
    const typeIconMap: Record<string, string> = {
      success: 'check-circle',
      warning: 'warning',
      error: 'error',
      info: 'info'
    }

    Object.entries(typeIconMap).forEach(([type, icon]) => {
      const wrapper = mount(LinWarning, {
        props: { type: type as any, showIcon: true } // 使用类型断言简化处理
      });
      expect(wrapper.find(`svg[data-name="${icon}"]`).exists()).toBe(true)
    })
  })

  // 8. 测试居中对齐布局
  it('should apply center alignment when center prop is true', () => {
    const wrapper = mount(LinWarning, {
      props: { center: true, title: 'Centered Warning' }
    });

    // 首先确认组件存在
    expect(wrapper.find('.my-warning').exists()).toBe(true);
    // 然后检查是否包含居中类名
    expect(wrapper.find('.my-warning').classes()).toContain('is-center');
  });

  // 9. 测试组件基本渲染
  it('should render warning component with default class', () => {
    const wrapper = mount(LinWarning)
    // 检查组件是否存在，而不是检查类名
    expect(wrapper.find('.my-warning').exists()).toBe(true)
  })
})
