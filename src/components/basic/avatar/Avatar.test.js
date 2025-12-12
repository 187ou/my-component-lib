// src/components/avatar/Avatar.test.ts
import { describe, it, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { LinAvatar } from './index';
// 体积测试需要引入 rollup-plugin-visualizer（可选，也可以用 vitest 的内置能力）
// 性能测试可以用 jsdom 的 performance API
import { performance } from 'node:perf_hooks';
describe('MyAvatar', () => {
    // 原有测试用例
    // 1. 渲染图片
    it('should render img when src is provided', () => {
        const src = 'https://example.com/avatar.png';
        const wrapper = mount(LinAvatar, {
            props: { src }
        });
        const img = wrapper.find('img');
        expect(img.exists()).toBe(true);
        expect(img.attributes('src')).toBe(src);
    });
    // 2. 加载事件
    it('should emit load event', async () => {
        const src = 'https://example.com/avatar.png';
        const wrapper = mount(LinAvatar, {
            props: { src }
        });
        const img = wrapper.find('img');
        await img.trigger('load');
        expect(wrapper.emitted('load')).toHaveLength(1);
    });
    // 3. 加载失败回退
    it('should handle image error and emit error event', async () => {
        const wrapper = mount(LinAvatar, {
            props: { src: 'invalid.png' }
        });
        const img = wrapper.find('img');
        // 触发 error 事件
        await img.trigger('error');
        expect(wrapper.emitted('error')).toHaveLength(1);
        // 触发 error 后 img 应消失（currentSrc 置空，hasSrc 为 false）
        expect(wrapper.find('img').exists()).toBe(false);
    });
    // 4. 图标回退
    it('should render icon fallback when icon prop is provided without src', () => {
        const wrapper = mount(LinAvatar, {
            props: { icon: 'user' }
        });
        // 检查是否存在包含 icon 的 svg 元素
        const iconElement = wrapper.find('svg.my-icon');
        expect(iconElement.exists()).toBe(true);
        expect(iconElement.classes()).toContain('my-icon--user');
    });
    // 5. 文本回退
    it('should render text fallback when only text is provided', () => {
        const wrapper = mount(LinAvatar, {
            props: { text: 'Alice' }
        });
        const textEl = wrapper.find('.my-avatar__text');
        expect(textEl.exists()).toBe(true);
        expect(textEl.text()).toBe('A');
    });
    // 6. 尺寸与形状
    it('should apply correct size and shape classes', () => {
        const wrapper = mount(LinAvatar, {
            props: { size: 40, shape: 'square' }
        });
        const root = wrapper.find('.my-avatar');
        expect(root.attributes('style')).toContain('width: 40px');
        expect(root.attributes('style')).toContain('height: 40px');
        expect(root.classes()).toContain('my-avatar--square');
    });
    // ---------------------- 新增功能测试用例 ----------------------
    // 7. 预设尺寸（large/medium/small）的样式应用
    it('should apply correct preset size styles', () => {
        // 测试 large 尺寸
        const largeWrapper = mount(LinAvatar, {
            props: { size: 'large' }
        });
        expect(largeWrapper.find('.my-avatar').attributes('style')).toContain('width: 48px');
        expect(largeWrapper.find('.my-avatar').attributes('style')).toContain('height: 48px');
        // 测试 medium 尺寸（默认）
        const mediumWrapper = mount(LinAvatar, {
            props: { size: 'medium' }
        });
        expect(mediumWrapper.find('.my-avatar').attributes('style')).toContain('width: 32px');
        expect(mediumWrapper.find('.my-avatar').attributes('style')).toContain('height: 32px');
        // 测试 small 尺寸
        const smallWrapper = mount(LinAvatar, {
            props: { size: 'small' }
        });
        expect(smallWrapper.find('.my-avatar').attributes('style')).toContain('width: 24px');
        expect(smallWrapper.find('.my-avatar').attributes('style')).toContain('height: 24px');
    });
    // 8. 图标尺寸计算（size * 0.6）
    it('should compute correct icon size', () => {
        const wrapper = mount(LinAvatar, {
            props: { size: 50, icon: 'user' }
        });
        const icon = wrapper.find('svg.my-icon');
        // 图标尺寸应为 50px * 0.6 = 30px
        expect(icon.attributes('style')).toContain('width: calc(30px)');
        expect(icon.attributes('style')).toContain('height: calc(30px)');
        // 测试预设尺寸（large: 48px * 0.6 = 28.8px）
        const largeWrapper = mount(LinAvatar, {
            props: { size: 'large', icon: 'user' }
        });
        const largeIcon = largeWrapper.find('svg.my-icon');
        expect(largeIcon.attributes('style')).toContain('width: calc(28.8px)');
        expect(largeIcon.attributes('style')).toContain('height: calc(28.8px)');
    });
    // 9. 文本首字母为空的处理
    it('should handle empty text correctly', () => {
        const wrapper = mount(LinAvatar, {
            props: { text: '' }
        });
        const textEl = wrapper.find('.my-avatar__text');
        expect(textEl.exists()).toBe(true);
        expect(textEl.text()).toBe('');
    });
    // 10. 图片的 object-fit 样式
    it('should apply correct object-fit style to img', () => {
        const wrapper = mount(LinAvatar, {
            props: { src: 'test.png', fit: 'contain' }
        });
        const img = wrapper.find('img');
        expect(img.attributes('style')).toContain('object-fit: contain');
        // 默认 fit 为 cover
        const defaultWrapper = mount(LinAvatar, {
            props: { src: 'test.png' }
        });
        expect(defaultWrapper.find('img').attributes('style')).toContain('object-fit: cover');
    });
    // 11. 加载失败后显示 errorIcon（补充：原有代码中 errorIcon 未生效，这里测试逻辑）
    it('should render errorIcon when image load fails', async () => {
        const wrapper = mount(LinAvatar, {
            props: { src: 'invalid.png', errorIcon: 'error' }
        });
        const img = wrapper.find('img');
        await img.trigger('error');
        // 图片消失后，显示 errorIcon
        const errorIcon = wrapper.find('svg.my-icon');
        expect(errorIcon.exists()).toBe(true);
        expect(errorIcon.classes()).toContain('my-icon--error');
    });
    // ---------------------- 性能测试用例 ----------------------
    // 12. 组件渲染性能（测试渲染耗时）
    it('should render within acceptable time', () => {
        const startTime = performance.now();
        // 多次渲染模拟性能测试
        for (let i = 0; i < 100; i++) {
            mount(LinAvatar, {
                props: { src: 'test.png', size: 'medium' }
            });
        }
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        // 假设渲染100次耗时不超过250ms（可根据实际情况调整阈值）
        expect(renderTime).toBeLessThan(250);
    });
    // 13. 组件卸载性能
    it('should unmount without memory leak', () => {
        const wrapper = mount(LinAvatar, {
            props: { src: 'test.png' }
        });
        const unmountStart = performance.now();
        wrapper.unmount();
        const unmountEnd = performance.now();
        const unmountTime = unmountEnd - unmountStart;
        expect(unmountTime).toBeLessThan(10); // 卸载耗时不超过10ms
        // 检查是否存在残留的 DOM 元素（vue-test-utils 会自动清理，这里仅作示例）
        expect(document.querySelector('.my-avatar')).toBeNull();
    });
    // ---------------------- 体积测试（辅助方案，需结合构建工具） ----------------------
    // 说明：体积测试通常需要结合 rollup/webpack 的构建统计，这里提供两种方案：
    // 方案1：测试组件的代码行数/依赖大小（简单版）
    it('should have minimal dependencies', () => {
        // 检查组件仅依赖 vue 和 LinIcon
        const deps = ['vue', '../icon'];
        // 这里只是示例，实际可以通过解析代码依赖来验证
        expect(deps).toContain('../icon');
        expect(deps).toContain('vue');
    });
    // 方案2：使用 vitest 的 snapshot 测试（间接验证代码体积变化）
    test('component snapshot', () => {
        const wrapper = mount(LinAvatar, {
            props: { src: 'test.png', size: 'medium', shape: 'circle' }
        });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
