/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const props = withDefaults(defineProps(), {
    href: '',
    type: 'default',
    size: 'medium',
    disabled: false,
    underline: false,
    target: '_self',
    icon: '',
    openInNewTab: false
});
// 静默处理未使用变量问题
void props;
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
if (__VLS_ctx.icon) {
    var __VLS_0 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: (__VLS_ctx.icon) },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "my-link__text" },
});
var __VLS_2 = {};
if (__VLS_ctx.openInNewTab) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-link__external" },
    });
}
/** @type {__VLS_StyleScopedClasses['my-link__text']} */ ;
/** @type {__VLS_StyleScopedClasses['my-link__external']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
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
