/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
// 按需引入组件（可选，用于测试按需引入）
import { MyButton, MyIcon, MyInput } from '../index';
import { ref } from "vue";
const inputValue = ref('');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-buttons" },
});
const __VLS_0 = {}.MyButton;
/** @type {[typeof __VLS_components.MyButton, typeof __VLS_components.myButton, typeof __VLS_components.MyButton, typeof __VLS_components.myButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
const __VLS_4 = {}.MyButton;
/** @type {[typeof __VLS_components.MyButton, typeof __VLS_components.myButton, typeof __VLS_components.MyButton, typeof __VLS_components.myButton, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    type: "success",
}));
const __VLS_6 = __VLS_5({
    type: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
const __VLS_8 = {}.MyButton;
/** @type {[typeof __VLS_components.MyButton, typeof __VLS_components.myButton, typeof __VLS_components.MyButton, typeof __VLS_components.myButton, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    type: "warning",
    size: "large",
}));
const __VLS_10 = __VLS_9({
    type: "warning",
    size: "large",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
const __VLS_12 = {}.MyButton;
/** @type {[typeof __VLS_components.MyButton, typeof __VLS_components.myButton, typeof __VLS_components.MyButton, typeof __VLS_components.myButton, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    type: "danger",
    disabled: true,
}));
const __VLS_14 = __VLS_13({
    type: "danger",
    disabled: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
const __VLS_16 = {}.MyButton;
/** @type {[typeof __VLS_components.MyButton, typeof __VLS_components.myButton, typeof __VLS_components.MyButton, typeof __VLS_components.myButton, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    loading: true,
}));
const __VLS_18 = __VLS_17({
    loading: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_20 = {}.MyIcon;
/** @type {[typeof __VLS_components.MyIcon, typeof __VLS_components.myIcon, typeof __VLS_components.MyIcon, typeof __VLS_components.myIcon, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    name: "search",
    size: "24px",
    color: "#409eff",
}));
const __VLS_22 = __VLS_21({
    name: "search",
    size: "24px",
    color: "#409eff",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.MyIcon;
/** @type {[typeof __VLS_components.MyIcon, typeof __VLS_components.myIcon, typeof __VLS_components.MyIcon, typeof __VLS_components.myIcon, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    name: "edit",
    size: "24px",
    color: "#67c23a",
}));
const __VLS_26 = __VLS_25({
    name: "edit",
    size: "24px",
    color: "#67c23a",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_28 = {}.MyButton;
/** @type {[typeof __VLS_components.MyButton, typeof __VLS_components.myButton, typeof __VLS_components.MyButton, typeof __VLS_components.myButton, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    type: "primary",
    icon: "search",
}));
const __VLS_30 = __VLS_29({
    type: "primary",
    icon: "search",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
var __VLS_31;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_32 = {}.MyInput;
/** @type {[typeof __VLS_components.MyInput, typeof __VLS_components.myInput, typeof __VLS_components.MyInput, typeof __VLS_components.myInput, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    modelValue: (__VLS_ctx.inputValue),
    placeholder: "搜索",
    prefixIcon: "search",
    clearable: true,
}));
const __VLS_34 = __VLS_33({
    modelValue: (__VLS_ctx.inputValue),
    placeholder: "搜索",
    prefixIcon: "search",
    clearable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
/** @type {__VLS_StyleScopedClasses['demo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-buttons']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            MyButton: MyButton,
            MyIcon: MyIcon,
            MyInput: MyInput,
            inputValue: inputValue,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
