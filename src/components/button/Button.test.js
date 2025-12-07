// src/components/Button/Button.test.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MyButton } from './index';
describe('MyButton', () => {
    // 测试默认渲染
    it('should render with default props', () => {
        const wrapper = mount(MyButton, {
            slots: { default: 'Button Text' }
        });
        expect(wrapper.text()).toBe('Button Text');
        expect(wrapper.classes()).toContain('my-btn--primary');
        expect(wrapper.classes()).toContain('my-btn--medium');
    });
    // 测试类型属性
    it('should render with correct type', () => {
        const wrapper = mount(MyButton, {
            props: { type: 'success' },
            slots: { default: 'Success Button' }
        });
        expect(wrapper.classes()).toContain('my-btn--success');
    });
    // 测试点击事件
    it('should emit click event', async () => {
        const wrapper = mount(MyButton, {
            slots: { default: 'Click Me' }
        });
        await wrapper.trigger('click');
        expect(wrapper.emitted('click')).toHaveLength(1);
    });
    // 测试禁用状态
    it('should be disabled when disabled prop is true', () => {
        const wrapper = mount(MyButton, {
            props: { disabled: true },
            slots: { default: 'Disabled Button' }
        });
        expect(wrapper.attributes('disabled')).toBeDefined();
        expect(wrapper.classes()).toContain('my-btn--disabled');
    });
});
