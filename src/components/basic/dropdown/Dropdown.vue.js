/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';
import DropdownMenu from './DropdownMenu.vue';
const props = withDefaults(defineProps(), {
    trigger: 'hover',
    placement: 'auto',
    offset: 6,
    menu: () => [],
    teleport: true,
    arrow: false,
    rtl: false,
    modelValue: undefined
});
const emits = defineEmits();
const visible = ref(false);
const triggerRef = ref(null);
const menuRef = ref(null);
let hoverTimer = null;
// show / hide / toggle
const show = async () => {
    if (visible.value)
        return;
    visible.value = true;
    emits('visible-change', true);
    await nextTick();
    positionMenu();
};
const hide = () => {
    if (!visible.value)
        return;
    visible.value = false;
    emits('visible-change', false);
};
// toggle by trigger
const toggle = () => (visible.value ? hide() : show());
// trigger handlers
const onTriggerClick = () => {
    if (props.trigger === 'click')
        toggle();
};
const onTriggerRightClick = () => {
    if (props.trigger === 'contextmenu')
        show();
};
const onTriggerHover = (enter) => {
    if (props.trigger !== 'hover')
        return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
        enter ? show() : hide();
    }, 150);
};
const onMenuHover = (enter) => {
    if (props.trigger !== 'hover')
        return;
    clearTimeout(hoverTimer);
    if (!enter)
        hoverTimer = setTimeout(hide, 200);
};
// click outside
const onClickOutside = (e) => {
    if (!visible.value)
        return;
    if (!triggerRef.value?.contains(e.target) &&
        !menuRef.value?.contains(e.target)) {
        hide();
    }
};
onMounted(() => document.addEventListener('click', onClickOutside));
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside));
// selection and command handling
const onSelect = (item) => {
    emits('select', item.value);
    // v-model integration
    emits('update:modelValue', item.value);
    if (!item.keepAlive)
        hide();
};
const onCommand = (payload) => {
    emits('command', payload);
};
// positioning & arrow
const menuStyle = ref({});
const arrowStyle = ref({});
const positionMenu = () => {
    const trigger = triggerRef.value;
    const menu = menuRef.value;
    if (!trigger || !menu)
        return;
    const rect = trigger.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // default left align to trigger left
    let top = rect.bottom + props.offset;
    let left = rect.left;
    // placement auto -> check space
    if (props.placement === 'auto') {
        if (top + menuRect.height > windowHeight) {
            top = rect.top - menuRect.height - props.offset;
        }
    }
    else if (props.placement === 'top') {
        top = rect.top - menuRect.height - props.offset;
    }
    // RTL: align from right edge
    if (props.rtl) {
        left = rect.right - menuRect.width;
        // clamp
        if (left < 0)
            left = 0;
    }
    else {
        if (left + menuRect.width > windowWidth) {
            left = Math.max(0, windowWidth - menuRect.width - 8);
        }
    }
    menuStyle.value = {
        position: 'absolute',
        top: `${top + window.scrollY}px`,
        left: `${left + window.scrollX}px`,
        minWidth: `${rect.width}px`
    };
    if (props.arrow) {
        // compute arrow position relative to trigger center
        const triggerCenterX = rect.left + rect.width / 2;
        const arrowLeft = triggerCenterX - left - 8; // 8 is half arrow width
        arrowStyle.value = {
            left: `${arrowLeft}px`
        };
    }
};
// watch menu visibility to reposition
watch(visible, (v) => {
    if (v)
        nextTick(positionMenu);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    trigger: 'hover',
    placement: 'auto',
    offset: 6,
    menu: () => [],
    teleport: true,
    arrow: false,
    rtl: false,
    modelValue: undefined
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-dropdown__menu-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown__menu-wrapper']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.onTriggerClick) },
    ...{ onContextmenu: (__VLS_ctx.onTriggerRightClick) },
    ...{ onMouseenter: (...[$event]) => {
            __VLS_ctx.onTriggerHover(true);
        } },
    ...{ onMouseleave: (...[$event]) => {
            __VLS_ctx.onTriggerHover(false);
        } },
    ...{ class: "my-dropdown" },
    dir: (__VLS_ctx.rtl ? 'rtl' : 'ltr'),
    ref: "triggerRef",
});
/** @type {typeof __VLS_ctx.triggerRef} */ ;
var __VLS_0 = {};
if (props.teleport) {
    const __VLS_2 = {}.Teleport;
    /** @type {[typeof __VLS_components.Teleport, typeof __VLS_components.Teleport, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
        to: "body",
    }));
    const __VLS_4 = __VLS_3({
        to: "body",
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    __VLS_5.slots.default;
    const __VLS_6 = {}.transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        name: "dropdown-fade",
    }));
    const __VLS_8 = __VLS_7({
        name: "dropdown-fade",
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_9.slots.default;
    if (__VLS_ctx.visible) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onMouseenter: (...[$event]) => {
                    if (!(props.teleport))
                        return;
                    if (!(__VLS_ctx.visible))
                        return;
                    __VLS_ctx.onMenuHover(true);
                } },
            ...{ onMouseleave: (...[$event]) => {
                    if (!(props.teleport))
                        return;
                    if (!(__VLS_ctx.visible))
                        return;
                    __VLS_ctx.onMenuHover(false);
                } },
            ...{ class: "my-dropdown__menu-wrapper" },
            ...{ class: ({ 'is-rtl': __VLS_ctx.rtl, 'has-arrow': props.arrow }) },
            ...{ style: (__VLS_ctx.menuStyle) },
            ref: "menuRef",
        });
        /** @type {typeof __VLS_ctx.menuRef} */ ;
        if (props.arrow) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
                ...{ class: "my-dropdown__arrow" },
                ...{ style: (__VLS_ctx.arrowStyle) },
            });
        }
        /** @type {[typeof DropdownMenu, ]} */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(DropdownMenu, new DropdownMenu({
            ...{ 'onSelect': {} },
            ...{ 'onCommand': {} },
            menu: (props.menu),
        }));
        const __VLS_11 = __VLS_10({
            ...{ 'onSelect': {} },
            ...{ 'onCommand': {} },
            menu: (props.menu),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        let __VLS_13;
        let __VLS_14;
        let __VLS_15;
        const __VLS_16 = {
            onSelect: (__VLS_ctx.onSelect)
        };
        const __VLS_17 = {
            onCommand: (__VLS_ctx.onCommand)
        };
        var __VLS_12;
    }
    var __VLS_9;
    var __VLS_5;
}
else {
    const __VLS_18 = {}.transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        name: "dropdown-fade",
    }));
    const __VLS_20 = __VLS_19({
        name: "dropdown-fade",
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_21.slots.default;
    if (__VLS_ctx.visible && !props.teleport) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onMouseenter: (...[$event]) => {
                    if (!!(props.teleport))
                        return;
                    if (!(__VLS_ctx.visible && !props.teleport))
                        return;
                    __VLS_ctx.onMenuHover(true);
                } },
            ...{ onMouseleave: (...[$event]) => {
                    if (!!(props.teleport))
                        return;
                    if (!(__VLS_ctx.visible && !props.teleport))
                        return;
                    __VLS_ctx.onMenuHover(false);
                } },
            ...{ class: "my-dropdown__menu-wrapper" },
            ...{ class: ({ 'is-rtl': __VLS_ctx.rtl, 'has-arrow': props.arrow }) },
            ...{ style: (__VLS_ctx.menuStyle) },
            ref: "menuRef",
        });
        /** @type {typeof __VLS_ctx.menuRef} */ ;
        if (props.arrow) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
                ...{ class: "my-dropdown__arrow" },
                ...{ style: (__VLS_ctx.arrowStyle) },
            });
        }
        /** @type {[typeof DropdownMenu, ]} */ ;
        // @ts-ignore
        const __VLS_22 = __VLS_asFunctionalComponent(DropdownMenu, new DropdownMenu({
            ...{ 'onSelect': {} },
            ...{ 'onCommand': {} },
            menu: (props.menu),
        }));
        const __VLS_23 = __VLS_22({
            ...{ 'onSelect': {} },
            ...{ 'onCommand': {} },
            menu: (props.menu),
        }, ...__VLS_functionalComponentArgsRest(__VLS_22));
        let __VLS_25;
        let __VLS_26;
        let __VLS_27;
        const __VLS_28 = {
            onSelect: (__VLS_ctx.onSelect)
        };
        const __VLS_29 = {
            onCommand: (__VLS_ctx.onCommand)
        };
        var __VLS_24;
    }
    var __VLS_21;
}
/** @type {__VLS_StyleScopedClasses['my-dropdown']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown__menu-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown__arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown__menu-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown__arrow']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DropdownMenu: DropdownMenu,
            visible: visible,
            triggerRef: triggerRef,
            menuRef: menuRef,
            onTriggerClick: onTriggerClick,
            onTriggerRightClick: onTriggerRightClick,
            onTriggerHover: onTriggerHover,
            onMenuHover: onMenuHover,
            onSelect: onSelect,
            onCommand: onCommand,
            menuStyle: menuStyle,
            arrowStyle: arrowStyle,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
