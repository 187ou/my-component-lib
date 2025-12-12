/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { LinIcon } from '../icon';
const props = withDefaults(defineProps(), {
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    plain: false,
    outline: false,
    closeable: false,
    clickable: false,
    round: false,
    block: false,
    icon: '',
});
const emits = defineEmits();
const handleClick = (event) => {
    if (!props.disabled && props.clickable)
        emits('click', event);
};
const handleClose = (event) => emits('close', event);
const iconSize = computed(() => {
    switch (props.size) {
        case 'large':
            return '16px';
        case 'small':
            return '12px';
        default:
            return '14px';
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    plain: false,
    outline: false,
    closeable: false,
    clickable: false,
    round: false,
    block: false,
    icon: '',
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ onClick: (__VLS_ctx.handleClick) },
    ...{ class: ([
            'my-tag',
            `my-tag--${__VLS_ctx.type}`,
            `my-tag--${__VLS_ctx.size}`,
            {
                'my-tag--plain': __VLS_ctx.plain,
                'my-tag--outline': __VLS_ctx.outline,
                'my-tag--round': __VLS_ctx.round,
                'my-tag--block': __VLS_ctx.block,
                'my-tag--disabled': __VLS_ctx.disabled,
                'my-tag--clickable': __VLS_ctx.clickable && !__VLS_ctx.disabled,
                'my-tag--loading': __VLS_ctx.loading,
            }
        ]) },
});
if (__VLS_ctx.$slots.icon) {
    var __VLS_0 = {};
}
else if (__VLS_ctx.icon) {
    const __VLS_2 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
        name: (__VLS_ctx.icon),
        size: (__VLS_ctx.iconSize),
    }));
    const __VLS_4 = __VLS_3({
        name: (__VLS_ctx.icon),
        size: (__VLS_ctx.iconSize),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
}
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-tag__loading" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "my-tag__text" },
});
var __VLS_6 = {};
if (__VLS_ctx.closeable && !__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ onClick: (__VLS_ctx.handleClose) },
        ...{ class: "my-tag__close" },
    });
}
/** @type {__VLS_StyleScopedClasses['my-tag__loading']} */ ;
/** @type {__VLS_StyleScopedClasses['my-tag__text']} */ ;
/** @type {__VLS_StyleScopedClasses['my-tag__close']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            handleClick: handleClick,
            handleClose: handleClose,
            iconSize: iconSize,
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
