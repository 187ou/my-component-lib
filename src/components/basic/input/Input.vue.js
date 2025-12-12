/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, ref, watch } from 'vue';
import { LinIcon } from '../icon';
const props = withDefaults(defineProps(), {
    type: 'text',
    size: 'medium',
    placeholder: '',
    disabled: false,
    readonly: false,
    clearable: false,
    modelValue: '',
    error: false,
    showPassword: false,
    maxlength: undefined,
    showWordLimit: false,
    inputType: 'primary',
    prefixIcon: '',
    suffixIcon: ''
});
const emit = defineEmits();
// 输入框引用
const inputRef = ref(null);
// 聚焦状态
const isFocused = ref(false);
// 密码可见性状态
const isPasswordVisible = ref(false);
// 输入事件处理
const handleInput = (e) => {
    const target = e.target;
    const value = target.value;
    emit('update:modelValue', value);
    emit('input', value);
};
// 失焦/回车事件处理
const handleChange = (e) => {
    const target = e.target;
    emit('change', target.value);
};
// 聚焦事件处理
const handleFocus = (e) => {
    isFocused.value = true;
    emit('focus', e);
};
// 失焦事件处理
const handleBlur = (e) => {
    isFocused.value = false;
    emit('blur', e);
};
// 清空事件处理
const handleClear = () => {
    emit('update:modelValue', '');
    emit('input', '');
    emit('change', '');
    emit('clear');
    // 清空后重新聚焦
    inputRef.value?.focus();
};
// 切换密码可见性
const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};
const iconSize = computed(() => {
    switch (props.size) {
        case 'large':
            return '18px';
        case 'small':
            return '14px';
        default:
            return '16px';
    }
});
// 监听 modelValue 变化（用于外部直接修改值时同步状态）
watch(() => props.modelValue, (newValue) => {
    if (inputRef.value && inputRef.value.value !== String(newValue)) {
        inputRef.value.value = String(newValue);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    type: 'text',
    size: 'medium',
    placeholder: '',
    disabled: false,
    readonly: false,
    clearable: false,
    modelValue: '',
    error: false,
    showPassword: false,
    maxlength: undefined,
    showWordLimit: false,
    inputType: 'primary',
    prefixIcon: '',
    suffixIcon: ''
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-input--focused']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input--focused']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input--focused']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input--focused']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input--focused']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__prefix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__suffix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__prefix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__suffix']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ([
            'my-input', // Block
            `my-input--${__VLS_ctx.size}`, // Modifier: 尺寸
            `my-input--${__VLS_ctx.inputType}`, // Modifier: 类型
            {
                'my-input--disabled': __VLS_ctx.disabled,
                'my-input--error': __VLS_ctx.error,
                'my-input--focused': __VLS_ctx.isFocused
            }
        ]) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-input__prefix" },
});
if (__VLS_ctx.$slots.prefix) {
    var __VLS_0 = {};
}
else if (__VLS_ctx.prefixIcon) {
    const __VLS_2 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(__VLS_2, new __VLS_2({
        name: (__VLS_ctx.prefixIcon),
        size: (__VLS_ctx.iconSize),
    }));
    const __VLS_4 = __VLS_3({
        name: (__VLS_ctx.prefixIcon),
        size: (__VLS_ctx.iconSize),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (__VLS_ctx.handleInput) },
    ...{ onChange: (__VLS_ctx.handleChange) },
    ...{ onFocus: (__VLS_ctx.handleFocus) },
    ...{ onBlur: (__VLS_ctx.handleBlur) },
    ref: "inputRef",
    type: (__VLS_ctx.type === 'password' && __VLS_ctx.showPassword ? 'text' : __VLS_ctx.type),
    placeholder: (__VLS_ctx.placeholder),
    disabled: (__VLS_ctx.disabled),
    readonly: (__VLS_ctx.readonly),
    value: (__VLS_ctx.modelValue),
    maxlength: (__VLS_ctx.maxlength),
    ...{ class: "my-input__inner" },
});
/** @type {typeof __VLS_ctx.inputRef} */ ;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-input__suffix" },
});
if (__VLS_ctx.type === 'password' && __VLS_ctx.showPassword) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.togglePasswordVisibility) },
        ...{ onMousedown: () => { } },
        type: "button",
        ...{ class: "my-input__password-toggle" },
    });
    (__VLS_ctx.isPasswordVisible ? '👁️' : '👁️‍🗨️');
}
if (__VLS_ctx.showWordLimit && __VLS_ctx.maxlength) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-input__word-limit" },
    });
    (String(__VLS_ctx.modelValue).length);
    (__VLS_ctx.maxlength);
}
if (__VLS_ctx.$slots.suffix) {
    var __VLS_6 = {};
}
else if (__VLS_ctx.suffixIcon) {
    const __VLS_8 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        name: (__VLS_ctx.suffixIcon),
        size: (__VLS_ctx.iconSize),
    }));
    const __VLS_10 = __VLS_9({
        name: (__VLS_ctx.suffixIcon),
        size: (__VLS_ctx.iconSize),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
if (__VLS_ctx.clearable && __VLS_ctx.modelValue && !__VLS_ctx.disabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleClear) },
        ...{ onMousedown: () => { } },
        type: "button",
        ...{ class: "my-input__clear" },
    });
}
/** @type {__VLS_StyleScopedClasses['my-input__prefix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__inner']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__suffix']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__password-toggle']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__word-limit']} */ ;
/** @type {__VLS_StyleScopedClasses['my-input__clear']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_7 = __VLS_6;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            inputRef: inputRef,
            isFocused: isFocused,
            isPasswordVisible: isPasswordVisible,
            handleInput: handleInput,
            handleChange: handleChange,
            handleFocus: handleFocus,
            handleBlur: handleBlur,
            handleClear: handleClear,
            togglePasswordVisibility: togglePasswordVisibility,
            iconSize: iconSize,
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
