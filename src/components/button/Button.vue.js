/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { MyIcon } from '../icon';
const props = withDefaults(defineProps(), {
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    icon: '',
    plain: false,
    text: false,
    round: false,
    circle: false,
    block: false
});
const __VLS_emit = defineEmits();
// 根据尺寸计算图标大小（新增）
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    icon: '',
    plain: false,
    text: false,
    round: false,
    circle: false,
    block: false
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('click', $event);
        } },
    ...{ class: ([
            'my-btn',
            `my-btn--${__VLS_ctx.type}`,
            `my-btn--${__VLS_ctx.size}`,
            {
                'my-btn--disabled': __VLS_ctx.disabled || __VLS_ctx.loading,
                'my-btn--loading': __VLS_ctx.loading,
                'my-btn--plain': props.plain,
                'my-btn--text': __VLS_ctx.text,
                'my-btn--round': __VLS_ctx.round,
                'my-btn--circle': __VLS_ctx.circle,
                'my-btn--block': __VLS_ctx.block
            }
        ]) },
    disabled: (__VLS_ctx.disabled || __VLS_ctx.loading),
});
if (__VLS_ctx.$slots.icon) {
    var __VLS_0 = {};
}
else if (__VLS_ctx.icon) {
    const __VLS_2 = {}.MyIcon;
    /** @type {[typeof __VLS_components.MyIcon, typeof __VLS_components.myIcon, typeof __VLS_components.MyIcon, typeof __VLS_components.myIcon, ]} */ ;
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
        ...{ class: "my-btn__loading" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "my-btn__text" },
});
var __VLS_6 = {};
/** @type {__VLS_StyleScopedClasses['my-btn__loading']} */ ;
/** @type {__VLS_StyleScopedClasses['my-btn__text']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MyIcon: MyIcon,
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
