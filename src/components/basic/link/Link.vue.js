/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const props = withDefaults(defineProps(), {
    href: '',
    type: 'default',
    size: 'medium',
    disabled: false,
    underline: false,
    target: '_self',
    icon: '',
    prefixIcon: '',
    suffixIcon: '',
    openInNewTab: false
});
// 静默处理未使用变量问题
import { LinIcon } from '../icon';
import { computed } from 'vue';
// 静默处理未使用变量问题
const iconSize = computed(() => {
    switch (props.size) {
        case 'large':
            return '18px';
        case 'small':
            return '14px';
        default:
            return '16px';
    }
});
const emit = defineEmits();
// 处理点击事件
const handleClick = (event) => {
    if (props.disabled) {
        event.preventDefault();
        return;
    }
    // 如果没有 href，阻止默认行为
    if (!props.href) {
        event.preventDefault();
    }
    emit('click', event);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    href: '',
    type: 'default',
    size: 'medium',
    disabled: false,
    underline: false,
    target: '_self',
    icon: '',
    prefixIcon: '',
    suffixIcon: '',
    openInNewTab: false
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
    ...{ onClick: (__VLS_ctx.handleClick) },
    href: (__VLS_ctx.disabled ? undefined : __VLS_ctx.href),
    target: (__VLS_ctx.openInNewTab ? '_blank' : __VLS_ctx.target),
    ...{ class: ([
            'my-link', // Block
            `my-link--${__VLS_ctx.type}`, // Modifier: 类型
            `my-link--${__VLS_ctx.size}`, // Modifier: 尺寸
            {
                'my-link--disabled': __VLS_ctx.disabled,
                'my-link--underline': __VLS_ctx.underline,
                'my-link--no-href': !__VLS_ctx.href
            }
        ]) },
});
if (__VLS_ctx.$slots.prefix || __VLS_ctx.prefixIcon || __VLS_ctx.icon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-link__prefix" },
    });
    if (__VLS_ctx.$slots.prefix) {
        var __VLS_0 = {};
    }
    else if (__VLS_ctx.prefixIcon) {
        const __VLS_2 = {}.LinIcon;
        /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
        // @ts-ignore
        const __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
            name: (__VLS_ctx.prefixIcon),
            size: (__VLS_ctx.iconSize),
        }));
        const __VLS_4 = __VLS_3({
            name: (__VLS_ctx.prefixIcon),
            size: (__VLS_ctx.iconSize),
        }, ...__VLS_functionalComponentArgsRest(__VLS_3));
    }
    else if (__VLS_ctx.icon) {
        const __VLS_6 = {}.LinIcon;
        /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            name: (__VLS_ctx.icon),
            size: (__VLS_ctx.iconSize),
        }));
        const __VLS_8 = __VLS_7({
            name: (__VLS_ctx.icon),
            size: (__VLS_ctx.iconSize),
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "my-link__text" },
});
var __VLS_10 = {};
if (__VLS_ctx.$slots.suffix || __VLS_ctx.suffixIcon) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-link__suffix" },
    });
    if (__VLS_ctx.$slots.suffix) {
        var __VLS_12 = {};
    }
    else if (__VLS_ctx.suffixIcon) {
        const __VLS_14 = {}.LinIcon;
        /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
            name: (__VLS_ctx.suffixIcon),
            size: (__VLS_ctx.iconSize),
        }));
        const __VLS_16 = __VLS_15({
            name: (__VLS_ctx.suffixIcon),
            size: (__VLS_ctx.iconSize),
        }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    }
}
if (__VLS_ctx.openInNewTab) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-link__external" },
    });
}
/** @type {__VLS_StyleScopedClasses['my-link__prefix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-link__text']} */ ;
/** @type {__VLS_StyleScopedClasses['my-link__suffix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-link__external']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_11 = __VLS_10, __VLS_13 = __VLS_12;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            iconSize: iconSize,
            handleClick: handleClick,
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
