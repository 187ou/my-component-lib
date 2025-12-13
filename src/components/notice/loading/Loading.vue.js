/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { LinIcon } from '@/components/basic/icon';
const props = withDefaults(defineProps(), {
    visible: false,
    text: '',
    type: 'default'
});
const iconName = computed(() => {
    const iconMap = {
        default: 'loading',
        spinner: 'spinner',
        dots: 'dots'
    };
    return iconMap[props.type] || 'loading';
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    visible: false,
    text: '',
    type: 'default'
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-loading__icon']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "loading-fade",
}));
const __VLS_2 = __VLS_1({
    name: "loading-fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.visible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: (['my-loading', `my-loading--${__VLS_ctx.type}`]) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-loading__spinner" },
    });
    const __VLS_4 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        name: (__VLS_ctx.iconName),
        ...{ class: "my-loading__icon" },
    }));
    const __VLS_6 = __VLS_5({
        name: (__VLS_ctx.iconName),
        ...{ class: "my-loading__icon" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    if (__VLS_ctx.text) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "my-loading__text" },
        });
        (__VLS_ctx.text);
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['my-loading__spinner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-loading__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['my-loading__text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            iconName: iconName,
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
