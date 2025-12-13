import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Timeline from './Timeline.vue';
import TimelineItem from './TimelineItem.vue';
import { h } from "vue";
// mock icon
vi.mock('@/components/basic/icon', () => ({
    LinIcon: {
        props: ['name'],
        template: '<i class="mock-icon" :data-name="name"></i>'
    }
}));
describe('LinTimeline', () => {
    it('should render timeline items', () => {
        const wrapper = mount(Timeline, {
            slots: {
                default: () => [
                    h(TimelineItem, { timestamp: '2024-01-01' }, { default: () => 'Start' }),
                    h(TimelineItem, { timestamp: '2024-01-02' }, { default: () => 'Process' })
                ]
            }
        });
        expect(wrapper.findAll('.my-timeline-item').length).toBe(2);
        expect(wrapper.text()).toContain('Start');
        expect(wrapper.text()).toContain('Process');
    });
    it('should render timestamp correctly', () => {
        const wrapper = mount(TimelineItem, {
            props: { timestamp: '2024-01-01' },
            slots: { default: 'Content' }
        });
        expect(wrapper.text()).toContain('2024-01-01');
    });
    it('should apply type class', () => {
        const wrapper = mount(TimelineItem, {
            props: { type: 'success' },
            slots: { default: 'Success' }
        });
        expect(wrapper.find('.my-timeline-item__node').classes())
            .toContain('my-timeline-item--success');
    });
    it('should render custom icon', () => {
        const wrapper = mount(TimelineItem, {
            props: { icon: 'check' },
            slots: { default: 'Icon Item' }
        });
        const icon = wrapper.find('.mock-icon');
        expect(icon.exists()).toBe(true);
        expect(icon.attributes('data-name')).toBe('check');
    });
});
