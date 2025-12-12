/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed } from 'vue';
import { LinIcon } from '@/components/basic/icon';
const props = withDefaults(defineProps(), {
    type: 'info',
    title: '',
    description: '',
    closable: true,
    closeText: '',
    center: false,
    showIcon: true
});
const emit = defineEmits();
const visible = ref(true);
const iconName = computed(() => {
    const iconMap = {
        success: 'check-circle',
        warning: 'warning',
        error: 'error',
        info: 'info'
    };
    return iconMap[props.type] || 'info';
});
const handleClose = () => {
    visible.value = false;
    emit('close');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'info',
    title: '',
    description: '',
    closable: true,
    closeText: '',
    center: false,
    showIcon: true
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "warning-fade",
}));
const __VLS_2 = __VLS_1({
    name: "warning-fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
if (__VLS_ctx.visible) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ([
                'my-warning',
                `my-warning--${__VLS_ctx.type}`,
                {
                    'is-center': __VLS_ctx.center,
                    'is-closeable': __VLS_ctx.closable
                }
            ]) },
    });
    if (__VLS_ctx.showIcon) {
        const __VLS_4 = {}.LinIcon;
        /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
            name: (__VLS_ctx.iconName),
            ...{ class: (['my-warning__icon']) },
        }));
        const __VLS_6 = __VLS_5({
            name: (__VLS_ctx.iconName),
            ...{ class: (['my-warning__icon']) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-warning__content" },
    });
    if (__VLS_ctx.title) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: (['my-warning__title']) },
        });
        (__VLS_ctx.title);
    }
    if (__VLS_ctx.description) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: (['my-warning__description']) },
        });
        (__VLS_ctx.description);
    }
    if (__VLS_ctx.closable) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (__VLS_ctx.handleClose) },
            ...{ class: (['my-warning__close']) },
            type: "button",
        });
        (__VLS_ctx.closeText || '×');
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['my-warning__content']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            visible: visible,
            iconName: iconName,
            handleClose: handleClose,
        };
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
