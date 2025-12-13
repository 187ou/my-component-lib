/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { LinIcon } from '@/components/basic/icon';
const props = defineProps();
const nodeClass = computed(() => props.type ? `my-timeline-item--${props.type}` : '');
const nodeStyle = computed(() => ({
    backgroundColor: props.color
}));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
    ...{ class: "my-timeline-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    ...{ class: "my-timeline-item__tail" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-timeline-item__node" },
    ...{ class: (__VLS_ctx.nodeClass) },
    ...{ style: (__VLS_ctx.nodeStyle) },
});
if (__VLS_ctx.icon) {
    const __VLS_0 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: (__VLS_ctx.icon),
    }));
    const __VLS_2 = __VLS_1({
        name: (__VLS_ctx.icon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-timeline-item__wrapper" },
});
if (__VLS_ctx.timestamp) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-timeline-item__timestamp" },
    });
    (__VLS_ctx.timestamp);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-timeline-item__content" },
});
var __VLS_4 = {};
/** @type {__VLS_StyleScopedClasses['my-timeline-item']} */ ;
/** @type {__VLS_StyleScopedClasses['my-timeline-item__tail']} */ ;
/** @type {__VLS_StyleScopedClasses['my-timeline-item__node']} */ ;
/** @type {__VLS_StyleScopedClasses['my-timeline-item__wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['my-timeline-item__timestamp']} */ ;
/** @type {__VLS_StyleScopedClasses['my-timeline-item__content']} */ ;
// @ts-ignore
var __VLS_5 = __VLS_4;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            nodeClass: nodeClass,
            nodeStyle: nodeStyle,
        };
    },
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
