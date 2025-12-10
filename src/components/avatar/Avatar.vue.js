/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, ref } from 'vue';
import { LinIcon } from '../icon';
const props = withDefaults(defineProps(), {
    size: 'medium',
    shape: 'circle',
    fit: 'cover',
    icon: '',
    text: '',
    lazy: false,
    errorIcon: 'user'
});
const emit = defineEmits();
// 当前展示的 src（可能因加载失败而置空）
const currentSrc = ref(props.src || '');
const hasSrc = computed(() => !!currentSrc.value);
// 处理图片加载失败
const handleError = (e) => {
    currentSrc.value = '';
    emit('error', e);
};
// 头像大小（像素或预设 size）
const sizePx = computed(() => {
    if (typeof props.size === 'number') {
        return `${props.size}px`;
    }
    switch (props.size) {
        case 'large':
            return '48px';
        case 'small':
            return '24px';
        default:
            return '32px';
    }
});
// 计算 class
const avatarClass = computed(() => [
    'my-avatar',
    `my-avatar--${props.shape}`
]);
// 外层样式
const avatarStyle = computed(() => ({
    width: sizePx.value,
    height: sizePx.value,
    lineHeight: sizePx.value,
    fontSize: `calc(${sizePx.value} * 0.5)`
}));
// img 样式
const imgStyle = computed(() => ({
    objectFit: props.fit
}));
// 图标尺寸
const computedIconSize = computed(() => `calc(${sizePx.value} * 0.6)`);
// 文本首字母
const initials = computed(() => props.text?.charAt(0).toUpperCase() || '');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    size: 'medium',
    shape: 'circle',
    fit: 'cover',
    icon: '',
    text: '',
    lazy: false,
    errorIcon: 'user'
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: (__VLS_ctx.avatarClass) },
    ...{ style: (__VLS_ctx.avatarStyle) },
});
if (__VLS_ctx.hasSrc) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ onError: (__VLS_ctx.handleError) },
        ...{ onLoad: (...[$event]) => {
                if (!(__VLS_ctx.hasSrc))
                    return;
                __VLS_ctx.$emit('load', $event);
            } },
        src: (__VLS_ctx.currentSrc),
        alt: (__VLS_ctx.alt),
        ...{ style: (__VLS_ctx.imgStyle) },
        crossorigin: "anonymous",
    });
}
else if (__VLS_ctx.icon) {
    const __VLS_0 = {}.LinIcon;
    /** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: (__VLS_ctx.icon),
        size: (__VLS_ctx.computedIconSize),
    }));
    const __VLS_2 = __VLS_1({
        name: (__VLS_ctx.icon),
        size: (__VLS_ctx.computedIconSize),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-avatar__text" },
    });
    (__VLS_ctx.initials);
}
/** @type {__VLS_StyleScopedClasses['my-avatar__text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinIcon: LinIcon,
            currentSrc: currentSrc,
            hasSrc: hasSrc,
            handleError: handleError,
            avatarClass: avatarClass,
            avatarStyle: avatarStyle,
            imgStyle: imgStyle,
            computedIconSize: computedIconSize,
            initials: initials,
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
