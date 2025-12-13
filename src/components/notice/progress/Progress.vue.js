/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
const props = withDefaults(defineProps(), {
    type: 'line',
    strokeWidth: 8,
    showText: true
});
const percent = computed(() => Math.min(100, Math.max(0, props.percentage)));
const text = computed(() => `${percent.value}%`);
const statusClass = computed(() => props.status ? `my-progress--${props.status}` : '');
const innerStyle = computed(() => ({
    width: `${percent.value}%`,
    backgroundColor: props.color
}));
const outerStyle = computed(() => ({
    height: `${props.strokeWidth}px`
}));
const circumference = 2 * Math.PI * 45;
const dashOffset = computed(() => circumference * (1 - percent.value / 100));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'line',
    strokeWidth: 8,
    showText: true
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-progress__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__circle-path']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__circle-path']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__circle-path']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-progress" },
    ...{ class: ([`my-progress--${__VLS_ctx.type}`, __VLS_ctx.statusClass]) },
});
if (__VLS_ctx.type === 'line') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-progress__line" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-progress__outer" },
        ...{ style: (__VLS_ctx.outerStyle) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
        ...{ class: "my-progress__inner" },
        ...{ class: (__VLS_ctx.statusClass) },
        ...{ style: (__VLS_ctx.innerStyle) },
    });
    if (__VLS_ctx.showText) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "my-progress__text" },
        });
        (__VLS_ctx.text);
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-progress__circle" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        viewBox: "0 0 100 100",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.circle)({
        ...{ class: "my-progress__circle-track" },
        cx: "50",
        cy: "50",
        r: "45",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.circle)({
        ...{ class: "my-progress__circle-path" },
        cx: "50",
        cy: "50",
        r: "45",
        'stroke-dasharray': (__VLS_ctx.circumference),
        'stroke-dashoffset': (__VLS_ctx.dashOffset),
        ...{ class: (__VLS_ctx.statusClass) },
    });
    if (__VLS_ctx.showText) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "my-progress__text" },
        });
        (__VLS_ctx.text);
    }
}
/** @type {__VLS_StyleScopedClasses['my-progress']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__line']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__outer']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__text']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__circle']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__circle-track']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__circle-path']} */ ;
/** @type {__VLS_StyleScopedClasses['my-progress__text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            text: text,
            statusClass: statusClass,
            innerStyle: innerStyle,
            outerStyle: outerStyle,
            circumference: circumference,
            dashOffset: dashOffset,
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
