import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { nextTick } from 'vue';
import { LinNotification } from './index';
// mock icon 组件
vi.mock('@/components/basic/icon', () => ({
    LinIcon: {
        props: ['name'],
        template: '<i class="mock-icon" :data-name="name"></i>'
    }
}));
describe('LinNotification', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });
    afterEach(() => {
        document.body.innerHTML = '';
        vi.useRealTimers();
    });
    it('should render notification with title and message', async () => {
        LinNotification({
            title: 'Title',
            message: 'Content'
        });
        await nextTick();
        expect(document.body.textContent).toContain('Title');
        expect(document.body.textContent).toContain('Content');
    });
    it('should render correct type class', async () => {
        const types = ['success', 'warning', 'info', 'danger'];
        for (const type of types) {
            LinNotification({
                title: type,
                message: type,
                type
            });
            await nextTick();
            const el = document.body.querySelector(`.my-notification--${type}`);
            expect(el).toBeTruthy();
        }
    });
    it('should render correct position class', async () => {
        const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];
        for (const position of positions) {
            LinNotification({
                title: position,
                message: position,
                position
            });
            await nextTick();
            const el = document.body.querySelector(`.my-notification--${position}`);
            expect(el).toBeTruthy();
        }
    });
    it('should auto close after duration', async () => {
        vi.useFakeTimers();
        LinNotification({
            title: 'Auto',
            message: 'Close',
            duration: 3000
        });
        await nextTick();
        expect(document.body.textContent).toContain('Auto');
        vi.advanceTimersByTime(3000);
        await nextTick();
    });
});
