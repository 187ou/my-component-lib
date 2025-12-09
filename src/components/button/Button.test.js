// src/components/Button/Button.test.ts
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { MyButton } from './index';
describe('MyButton', () => {
    // 测试 Props 渲染
    it('should render with correct type and size', () => {
        const wrapper = mount(MyButton, {
            props: { type: 'success', size: 'small' },
            slots: { default: 'Test Button' }
        });
        expect(wrapper.classes()).toContain('my-btn--success');
        expect(wrapper.classes()).toContain('my-btn--small');
    });
    // 测试事件触发
    it('should emit click event when clicked', async () => {
        const onClick = vi.fn();
        const wrapper = mount(MyButton, {
            slots: { default: 'Click Me' },
            props: { onClick }
        });
        await wrapper.trigger('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    // 测试禁用状态
    it('should not emit click event when disabled', async () => {
        const onClick = vi.fn();
        const wrapper = mount(MyButton, {
            slots: { default: 'Disabled' },
            props: { disabled: true, onClick }
        });
        await wrapper.trigger('click');
        expect(onClick).not.toHaveBeenCalled();
    });
});
