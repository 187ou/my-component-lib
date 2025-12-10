// src/components/link/Link.test.ts
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { LinLink } from './index';
describe('MyLink', () => {
    // 测试 Props 渲染
    it('should render with correct type and size', () => {
        const wrapper = mount(LinLink, {
            props: { type: 'primary', size: 'small' },
            slots: { default: 'Test Link' }
        });
        expect(wrapper.classes()).toContain('my-link--primary');
        expect(wrapper.classes()).toContain('my-link--small');
    });
    // 测试链接地址
    it('should render correct href attribute', () => {
        const wrapper = mount(LinLink, {
            props: { href: 'https://example.com' },
            slots: { default: 'External Link' }
        });
        expect(wrapper.attributes('href')).toBe('https://example.com');
    });
    // 测试新标签页打开
    it('should render target _blank when openInNewTab is true', () => {
        const wrapper = mount(LinLink, {
            props: { href: 'https://example.com', openInNewTab: true },
            slots: { default: 'New Tab Link' }
        });
        expect(wrapper.attributes('target')).toBe('_blank');
    });
    // 测试下划线
    it('should have underline class when underline prop is true', () => {
        const wrapper = mount(LinLink, {
            props: { underline: true },
            slots: { default: 'Underlined Link' }
        });
        expect(wrapper.classes()).toContain('my-link--underline');
    });
    // 测试事件触发
    it('should emit click event when clicked', async () => {
        const onClick = vi.fn();
        const wrapper = mount(LinLink, {
            props: { href: '#', onClick },
            slots: { default: 'Click Me' }
        });
        await wrapper.trigger('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    // 测试禁用状态
    it('should not emit click event when disabled', async () => {
        const onClick = vi.fn();
        const wrapper = mount(LinLink, {
            props: { href: '#', disabled: true, onClick },
            slots: { default: 'Disabled Link' }
        });
        await wrapper.trigger('click');
        expect(onClick).not.toHaveBeenCalled();
    });
    // 测试禁用状态下的 href
    it('should remove href when disabled', () => {
        const wrapper = mount(LinLink, {
            props: { href: 'https://example.com', disabled: true },
            slots: { default: 'Disabled Link' }
        });
        expect(wrapper.attributes('href')).toBeUndefined();
    });
    // 测试图标插槽
    it('should render icon slot', () => {
        const wrapper = mount(LinLink, {
            props: { icon: 'search' },
            slots: { default: 'Search Link' }
        });
        expect(wrapper.find('.my-link__prefix svg').exists()).toBe(true);
    });
    // 测试外部链接图标
    it('should render external icon when openInNewTab is true', () => {
        const wrapper = mount(LinLink, {
            props: { openInNewTab: true },
            slots: { default: 'External Link' }
        });
        expect(wrapper.find('.my-link__external').exists()).toBe(true);
    });
});
