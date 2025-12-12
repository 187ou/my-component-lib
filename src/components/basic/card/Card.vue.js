/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, useSlots } from 'vue';
const props = withDefaults(defineProps(), {
    header: '',
    subHeader: '',
    shadow: 'hover',
    border: true,
    hoverable: false,
    cover: ''
});
const __VLS_emit = defineEmits();
const slots = useSlots();
const hasHeader = computed(() => {
    return props.header || props.subHeader || slots.header;
});
const hasCover = computed(() => {
    return props.cover || slots.cover;
});
// 动态类
const cardClasses = computed(() => [
    `my-card--shadow-${props.shadow}`,
    {
        'my-card--border': props.border,
        'my-card--hoverable': props.hoverable
    }
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    header: '',
    subHeader: '',
    shadow: 'hover',
    border: true,
    hoverable: false,
    cover: ''
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('click', $event);
        } },
    ...{ class: "my-card" },
    ...{ class: (__VLS_ctx.cardClasses) },
});
if (__VLS_ctx.hasCover) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-card__cover" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (__VLS_ctx.cover),
        alt: "card-cover",
        loading: "lazy",
    });
    var __VLS_0 = {};
}
if (__VLS_ctx.hasHeader) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.hasHeader))
                    return;
                __VLS_ctx.$emit('header-click', $event);
            } },
        ...{ class: "my-card__header" },
    });
    if (__VLS_ctx.slots.header) {
        var __VLS_2 = {};
    }
    else {
        if (__VLS_ctx.header) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
                ...{ class: "my-card__title" },
            });
            (__VLS_ctx.header);
        }
        if (__VLS_ctx.subHeader) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
                ...{ class: "my-card__subtitle" },
            });
            (__VLS_ctx.subHeader);
        }
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-card__body" },
});
var __VLS_4 = {};
if (__VLS_ctx.slots.footer) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-card__footer" },
    });
    var __VLS_6 = {};
}
/** @type {__VLS_StyleScopedClasses['my-card']} */ ;
/** @type {__VLS_StyleScopedClasses['my-card__cover']} */ ;
/** @type {__VLS_StyleScopedClasses['my-card__header']} */ ;
/** @type {__VLS_StyleScopedClasses['my-card__title']} */ ;
/** @type {__VLS_StyleScopedClasses['my-card__subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['my-card__body']} */ ;
/** @type {__VLS_StyleScopedClasses['my-card__footer']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_5 = __VLS_4, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            slots: slots,
            hasHeader: hasHeader,
            hasCover: hasCover,
            cardClasses: cardClasses,
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
