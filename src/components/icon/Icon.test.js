// src/components/icon/Icon.test.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { LinIcon } from './index';
describe('MyIcon', () => {
    // 测试基本渲染
    it('should render with correct name', () => {
        const wrapper = mount(LinIcon, {
            props: { name: 'search' }
        });
        const svg = wrapper.find('svg');
        const use = svg.find('use');
        // 检查 use 元素是否存在
        expect(use.exists()).toBe(true);
        // 检查 href 或 xlink:href 属性是否正确
        const href = use.attributes('href') || use.attributes('xlink:href');
        expect(href).toBe('#icon-search');
    });
    // 测试尺寸
    it('should render with correct size', () => {
        const wrapper = mount(LinIcon, {
            props: { name: 'search', size: '24px' }
        });
        const svg = wrapper.find('svg');
        expect(svg.attributes('style')).toContain('width: 24px');
        expect(svg.attributes('style')).toContain('height: 24px');
    });
    // 测试颜色
    it('should render with correct color', () => {
        const wrapper = mount(LinIcon, {
            props: { name: 'search', color: '#ff0000' }
        });
        const svg = wrapper.find('svg');
        expect(svg.attributes('style')).toContain('color: rgb(255, 0, 0)');
    });
});
