/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const props = withDefaults(defineProps(), {
    size: '1em', // 默认尺寸（继承父元素字体大小）
    color: '' // 默认颜色（继承父元素颜色）
});
// 计算 className（用于外部自定义样式）
const className = props.name ? `my-icon--${props.name}` : '';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    size: '1em', // 默认尺寸（继承父元素字体大小）
    color: '' // 默认颜色（继承父元素颜色）
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    ...{ class: (['my-icon', __VLS_ctx.className]) },
    ...{ style: ({
            width: __VLS_ctx.size,
            height: __VLS_ctx.size,
            color: __VLS_ctx.color
        }) },
    'aria-hidden': "true",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.use, __VLS_intrinsicElements.use)({
    href: (`#icon-${__VLS_ctx.name}`),
    'xlink:href': (`#icon-${__VLS_ctx.name}`),
});
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            className: className,
        };
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
