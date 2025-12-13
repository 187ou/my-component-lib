import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { nextTick } from 'vue';
import { LinMessage } from './index';
// mock LinIcon，避免真实 svg / 样式影响测试
vi.mock('@/components/basic/icon', () => ({
    LinIcon: {
        props: ['name'],
        template: '<i class="mock-icon" :data-name="name"></i>'
    }
}));
describe('LinMessage', () => {
    beforeEach(() => {
        // 每个用例前清空 body
        document.body.innerHTML = '';
    });
    afterEach(() => {
        document.body.innerHTML = '';
        vi.useRealTimers();
    });
    it('should render message with text', async () => {
        LinMessage('Hello Message');
        await nextTick();
        expect(document.body.textContent).toContain('Hello Message');
    });
    it('should render correct type class', async () => {
        const types = ['success', 'warning', 'info', 'danger'];
        for (const type of types) {
            LinMessage({ message: type, type });
            await nextTick();
            const el = document.body.querySelector(`.my-message--${type}`);
            expect(el).toBeTruthy();
        }
    });
    it('should auto close after duration', async () => {
        vi.useFakeTimers();
        LinMessage({
            message: 'Auto Close',
            duration: 3000
        });
        await nextTick();
        expect(document.body.textContent).toContain('Auto Close');
        vi.advanceTimersByTime(3000);
        await nextTick();
        expect(document.body.textContent).not.toContain('Auto Close');
    });
    it('should not auto close when duration is 0', async () => {
        vi.useFakeTimers();
        LinMessage({
            message: 'Persistent Message',
            duration: 0
        });
        await nextTick();
        vi.advanceTimersByTime(5000);
        await nextTick();
        expect(document.body.textContent).toContain('Persistent Message');
    });
    it('should render loading message and not auto close', async () => {
        vi.useFakeTimers();
        LinMessage.loading({
            message: 'Loading...'
        });
        await nextTick();
        expect(document.body.textContent).toContain('Loading...');
        expect(document.body.querySelector('.my-message--loading')).toBeTruthy();
        vi.advanceTimersByTime(5000);
        await nextTick();
        expect(document.body.textContent).toContain('Loading...');
    });
    it('should close message manually', async () => {
        const instance = LinMessage({
            message: 'Manual Close',
            duration: 0
        });
        await nextTick();
        expect(document.body.textContent).toContain('Manual Close');
        instance.close();
        await nextTick();
        expect(document.body.textContent).not.toContain('Manual Close');
    });
    it('should call onClose callback when closed', async () => {
        const onClose = vi.fn();
        const instance = LinMessage({
            message: 'Callback Message',
            duration: 0,
            onClose
        });
        await nextTick();
        instance.close();
        await nextTick();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
    it('should render close button and close on click', async () => {
        LinMessage({
            message: 'Closable Message',
            showClose: true,
            duration: 0
        });
        await nextTick();
        const closeBtn = document.body.querySelector('.my-message__close');
        expect(closeBtn).toBeTruthy();
        closeBtn.click();
        await nextTick();
        expect(document.body.textContent).not.toContain('Closable Message');
    });
    it('should render multiple messages', async () => {
        LinMessage('First Message');
        LinMessage('Second Message');
        await nextTick();
        expect(document.body.textContent).toContain('First Message');
        expect(document.body.textContent).toContain('Second Message');
        const messages = document.body.querySelectorAll('.my-message');
        expect(messages.length).toBe(2);
    });
});
