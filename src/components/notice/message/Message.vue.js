/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { LinIcon } from '@/components/basic/icon';
const props = defineProps();
const emit = defineEmits();
let timer;
const isVNode = computed(() => typeof props.message === 'object');
const iconName = computed(() => {
    if (props.icon)
        return props.icon;
    switch (props.type) {
        case 'success': return 'success-filled';
        case 'warning': return 'warning';
        case 'danger': return 'close';
        case 'info': return 'info-filled';
        case 'loading': return 'loading';
        default: return '';
    }
});
const style = computed(() => ({
    top: `${props.offset}px`,
    zIndex: props.zIndex
}));
const close = () => {
    emit('destroy');
};
const handleAfterLeave = () => {
    emit('destroy');
};
onMounted(() => {
    if (props.duration !== 0 && props.type !== 'loading') {
        timer = window.setTimeout(close, props.duration);
    }
});
onBeforeUnmount(() => {
    timer && clearTimeout(timer);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onAfterLeave': {} },
    name: "my-message-fade",
    persisted: true,
}));
const __VLS_2 = __VLS_1({
    ...{ 'onAfterLeave': {} },
    name: "my-message-fade",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onAfterLeave: (__VLS_ctx.handleAfterLeave)
};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-message" },
    ...{ class: (`my-message--${__VLS_ctx.type}`) },
    ...{ style: (__VLS_ctx.style) },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.visible) }, null, null);
if (__VLS_ctx.iconName) {
    const __VLS_8 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        ...{ class: "my-message__icon" },
        name: (__VLS_ctx.iconName),
    }));
    const __VLS_10 = __VLS_9({
        ...{ class: "my-message__icon" },
        name: (__VLS_ctx.iconName),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-message__content" },
});
var __VLS_12 = {};
if (__VLS_ctx.isVNode) {
    const __VLS_14 = ((__VLS_ctx.message));
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.message);
}
if (__VLS_ctx.showClose) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ onClick: (__VLS_ctx.close) },
        ...{ class: "my-message__close" },
    });
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['my-message']} */ ;
/** @type {__VLS_StyleScopedClasses['my-message__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['my-message__content']} */ ;
/** @type {__VLS_StyleScopedClasses['my-message__close']} */ ;
// @ts-ignore
var __VLS_13 = __VLS_12;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            isVNode: isVNode,
            iconName: iconName,
            style: style,
            close: close,
            handleAfterLeave: handleAfterLeave,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
