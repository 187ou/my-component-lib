import { ref } from 'vue';
import DropdownMenu from './DropdownMenu.vue';
import LinIcon from "../icon";
const props = defineProps();
const emit = defineEmits(['select', 'command']);
const openSub = ref(null);
const onClick = (item, e) => {
    e.stopPropagation();
    if (item.disabled)
        return;
    if (item.command !== undefined) {
        emit('command', item.command);
    }
    if (!item.children || item.children.length === 0) {
        emit('select', item);
    }
    else {
        // click on parent with children toggles submenu
        openSub.value = openSub.value === item ? null : item;
    }
};
let hoverTimer = null;
const onMouseEnter = (item) => {
    if (!item.children || item.children.length === 0)
        return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
        openSub.value = item;
    }, 120);
};
const onMouseLeave = (item) => {
    if (!item.children || item.children.length === 0)
        return;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
        if (openSub.value === item)
            openSub.value = null;
    }, 160);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-dropdown-submenu']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "my-dropdown-menu" },
    role: "menu",
});
for (const [item] of __VLS_getVForSourceType((props.menu))) {
    (item.value ?? item.label ?? Math.random());
    if (item.type === 'group' && item.children) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ class: "my-dropdown-menu__group" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "my-dropdown-menu__group-title" },
        });
        (item.label);
        /** @type {[typeof DropdownMenu, ]} */ ;
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(DropdownMenu, new DropdownMenu({
            ...{ 'onSelect': {} },
            ...{ 'onCommand': {} },
            menu: (item.children),
        }));
        const __VLS_1 = __VLS_0({
            ...{ 'onSelect': {} },
            ...{ 'onCommand': {} },
            menu: (item.children),
        }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        let __VLS_3;
        let __VLS_4;
        let __VLS_5;
        const __VLS_6 = {
            onSelect: (...[$event]) => {
                if (!(item.type === 'group' && item.children))
                    return;
                __VLS_ctx.$emit('select', $event);
            }
        };
        const __VLS_7 = {
            onCommand: (...[$event]) => {
                if (!(item.type === 'group' && item.children))
                    return;
                __VLS_ctx.$emit('command', $event);
            }
        };
        var __VLS_2;
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            ...{ onClick: (...[$event]) => {
                    if (!!(item.type === 'group' && item.children))
                        return;
                    __VLS_ctx.onClick(item, $event);
                } },
            ...{ onMouseenter: (...[$event]) => {
                    if (!!(item.type === 'group' && item.children))
                        return;
                    __VLS_ctx.onMouseEnter(item);
                } },
            ...{ onMouseleave: (...[$event]) => {
                    if (!!(item.type === 'group' && item.children))
                        return;
                    __VLS_ctx.onMouseLeave(item);
                } },
            ...{ class: "my-dropdown-menu__item" },
            ...{ class: ({
                    'is-disabled': item.disabled,
                    'is-divided': item.divided,
                    'has-children': item.children && item.children.length > 0
                }) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "my-dropdown-menu__left" },
        });
        if (item.icon) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "my-dropdown-menu__icon" },
            });
            const __VLS_8 = {}.LinIcon;
            /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
            // @ts-ignore
            const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
                name: (item.icon),
                size: "14px",
            }));
            const __VLS_10 = __VLS_9({
                name: (item.icon),
                size: "14px",
            }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "my-dropdown-menu__label" },
        });
        (item.label);
        if (item.children && item.children.length > 0) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "my-dropdown-submenu" },
            });
            __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.openSub === item) }, null, null);
            /** @type {[typeof DropdownMenu, ]} */ ;
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent(DropdownMenu, new DropdownMenu({
                ...{ 'onSelect': {} },
                ...{ 'onCommand': {} },
                menu: (item.children),
            }));
            const __VLS_13 = __VLS_12({
                ...{ 'onSelect': {} },
                ...{ 'onCommand': {} },
                menu: (item.children),
            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            let __VLS_15;
            let __VLS_16;
            let __VLS_17;
            const __VLS_18 = {
                onSelect: (...[$event]) => {
                    if (!!(item.type === 'group' && item.children))
                        return;
                    if (!(item.children && item.children.length > 0))
                        return;
                    __VLS_ctx.$emit('select', $event);
                }
            };
            const __VLS_19 = {
                onCommand: (...[$event]) => {
                    if (!!(item.type === 'group' && item.children))
                        return;
                    if (!(item.children && item.children.length > 0))
                        return;
                    __VLS_ctx.$emit('command', $event);
                }
            };
            var __VLS_14;
        }
    }
}
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu__group']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu__group-title']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu__item']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu__left']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-menu__label']} */ ;
/** @type {__VLS_StyleScopedClasses['my-dropdown-submenu']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            DropdownMenu: DropdownMenu,
            LinIcon: LinIcon,
            openSub: openSub,
            onClick: onClick,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
