import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { LinProgress } from './index';
describe('LinProgress', () => {
    it('should render line progress with correct percentage', () => {
        const wrapper = mount(LinProgress, {
            props: { percentage: 50 }
        });
        const inner = wrapper.find('.my-progress__inner');
        expect(inner.attributes('style')).toContain('width: 50%');
    });
    it('should clamp percentage between 0 and 100', () => {
        const wrapper = mount(LinProgress, {
            props: { percentage: 150 }
        });
        const inner = wrapper.find('.my-progress__inner');
        expect(inner.attributes('style')).toContain('width: 100%');
    });
    it('should render circle progress', () => {
        const wrapper = mount(LinProgress, {
            props: { percentage: 30, type: 'circle' }
        });
        expect(wrapper.find('svg').exists()).toBe(true);
    });
    it('should render correct status class', () => {
        const wrapper = mount(LinProgress, {
            props: { percentage: 60, status: 'success' }
        });
        expect(wrapper.classes()).toContain('my-progress--success');
    });
    it('should hide text when showText is false', () => {
        const wrapper = mount(LinProgress, {
            props: { percentage: 40, showText: false }
        });
        expect(wrapper.find('.my-progress__text').exists()).toBe(false);
    });
});
