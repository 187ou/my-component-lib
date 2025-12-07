/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const props = withDefaults(defineProps(), {
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    icon: ''
});
// 静默处理未使用变量问题
void props;
const emit = defineEmits();
void emit;
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    icon: ''
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
            'my-btn', // Block
            `my-btn--${__VLS_ctx.type}`, // Modifier: 类
            `my-btn--${__VLS_ctx.size}`, // Modifier: 尺寸
            {
                'my-btn--disabled': __VLS_ctx.disabled || __VLS_ctx.loading,
                'my-btn--loading': __VLS_ctx.loading
            }
        ]) },
    disabled: (__VLS_ctx.disabled || __VLS_ctx.loading),
});
if (__VLS_ctx.icon) {
    var __VLS_0 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: (__VLS_ctx.icon) },
    });
}
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-btn__loading" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "my-btn__text" },
});
var __VLS_2 = {};
/** @type {__VLS_StyleScopedClasses['my-btn__loading']} */ ;
/** @type {__VLS_StyleScopedClasses['my-btn__text']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
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
