// src/components/Dropdown/Dropdown.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { LinDropdown } from './index';
import { nextTick } from 'vue';
// mock 图标组件
vi.mock('../icon', () => ({
    LinIcon: {
        props: ['name', 'size'],
        template: '<svg :data-name="name" :data-size="size"></svg>'
    }
}));
describe('MyDropdown', () => {
    beforeEach(() => {
        // ensure clean DOM
        document.body.innerHTML = '';
    });
    it('should show menu on click trigger and emit visible-change', async () => {
        const visibleChange = vi.fn();
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'click',
                teleport: false,
                menu: [{ label: 'A', value: 'a' }]
            },
            slots: {
                default: '<button>Open</button>'
            },
            attrs: { onVisibleChange: visibleChange }
        });
        // initially hidden
        expect(wrapper.find('.my-dropdown__menu-wrapper').exists()).toBe(false);
        await wrapper.trigger('click');
        await nextTick();
        expect(wrapper.find('.my-dropdown__menu-wrapper').exists()).toBe(true);
        expect(visibleChange).toHaveBeenCalledWith(true);
    });
    it('should show menu on hover trigger', async () => {
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'hover',
                teleport: false,
                menu: [{ label: 'B', value: 'b' }]
            },
            slots: { default: '<div class="hover-area">Hover</div>' }
        });
        await wrapper.trigger('mouseenter');
        await new Promise((r) => setTimeout(r, 200)); // wait hover timer
        expect(wrapper.find('.my-dropdown__menu-wrapper').exists()).toBe(true);
        await wrapper.trigger('mouseleave');
        await new Promise((r) => setTimeout(r, 220));
        expect(wrapper.find('.my-dropdown__menu-wrapper').exists()).toBe(false);
    });
    it('should open on contextmenu trigger', async () => {
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'contextmenu',
                teleport: false,
                menu: [{ label: 'Ctx', value: 'ctx' }]
            },
            slots: { default: '<div>RightClick</div>' }
        });
        await wrapper.trigger('contextmenu');
        expect(wrapper.find('.my-dropdown__menu-wrapper').exists()).toBe(true);
    });
    it('should emit command when child menu clicked', async () => {
        const spy = vi.fn();
        const wrapper = mount(LinDropdown, {
            attachTo: document.body,
            props: {
                trigger: 'click',
                teleport: true,
                menu: [
                    { label: 'Item 1', value: 'v1', command: 'v1' },
                ],
                onCommand: spy,
            },
            slots: {
                default: '<button id="trigger">open</button>',
            },
        });
        await wrapper.find('#trigger').trigger('click');
        await wrapper.vm.$nextTick();
        await new Promise((r) => setTimeout(r, 20));
        const items = document.body.querySelectorAll('.my-dropdown-menu__item');
        expect(items.length).toBe(1);
        items[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));
        await wrapper.vm.$nextTick();
        expect(spy).toHaveBeenCalledWith('v1');
    });
    it('should emit command when item has command', async () => {
        const onCommand = vi.fn();
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'click',
                teleport: false,
                menu: [{ label: 'Cmd', value: 'x', command: { act: 'do' } }]
            },
            slots: { default: '<button>Open</button>' },
            attrs: { onCommand }
        });
        await wrapper.trigger('click');
        await nextTick();
        await wrapper.find('.my-dropdown-menu__item').trigger('click');
        expect(onCommand).toHaveBeenCalledTimes(1);
        expect(onCommand.mock.calls[0][0]).toEqual({ act: 'do' });
    });
    it('should render arrow when arrow prop true and compute arrowStyle', async () => {
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'click',
                teleport: false,
                arrow: true,
                menu: [{ label: 'X', value: 'x' }]
            },
            slots: { default: '<button style="width:120px">Btn</button>' }
        });
        await wrapper.trigger('click');
        await nextTick();
        const arrow = wrapper.find('.my-dropdown__arrow');
        expect(arrow.exists()).toBe(true);
        const style = arrow.attributes('style');
        expect(style).toContain('left'); // arrowStyle left computed
    });
    it('should open submenu on hover (multi-level)', async () => {
        const menu = [
            {
                label: 'Parent',
                value: 'p',
                children: [
                    { label: 'Child1', value: 'c1' }
                ]
            }
        ];
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'click',
                teleport: false,
                menu
            },
            slots: { default: '<button>Open</button>' }
        });
        await wrapper.trigger('click');
        await nextTick();
        const parent = wrapper.find('.my-dropdown-menu__item.has-children');
        expect(parent.exists()).toBe(true);
        // hover to open submenu
        await parent.trigger('mouseenter');
        await new Promise((r) => setTimeout(r, 150));
        const submenu = parent.find('.my-dropdown-submenu');
        expect(submenu.exists()).toBe(true);
        expect(submenu.find('.my-dropdown-menu__item').exists()).toBe(true);
    });
    it('should compute RTL menu left based on rtl prop', async () => {
        // provide a small viewport to ensure clamping not interfering
        Object.defineProperty(window, 'innerWidth', { value: 800, configurable: true });
        Object.defineProperty(window, 'innerHeight', { value: 600, configurable: true });
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'click',
                teleport: false,
                rtl: true,
                menu: [{ label: 'R', value: 'r' }]
            },
            slots: { default: '<button style="width:100px">Btn</button>' }
        });
        await wrapper.trigger('click');
        await nextTick();
        const menuWrapper = wrapper.find('.my-dropdown__menu-wrapper');
        expect(menuWrapper.exists()).toBe(true);
        // when rtl, menuStyle.left should be set (style attr present)
        expect(menuWrapper.attributes('style')).toContain('left:');
    });
    it('should not open when manual trigger and only toggle via prop/emit', async () => {
        const wrapper = mount(LinDropdown, {
            props: {
                trigger: 'manual',
                teleport: false,
                menu: [{ label: 'M', value: 'm' }]
            },
            slots: { default: '<button>Manual</button>' }
        });
        await wrapper.trigger('click');
        expect(wrapper.find('.my-dropdown__menu-wrapper').exists()).toBe(false);
    });
});
