/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
import { LinButton, LinIcon, LinInput, LinLink, LinAvatar, LinCard, LinCarousel } from '../index';
const inputValue = ref('');
// Carousel 相关数据
const imageItems = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05'
];
const customItems = [
    {
        title: '功能丰富',
        content: '支持多种轮播效果和交互方式',
        color: '#FF6B6B'
    },
    {
        title: '响应式设计',
        content: '完美适配各种屏幕尺寸',
        color: '#4ECDC4'
    },
    {
        title: '易于使用',
        content: '提供丰富的配置项和自定义插槽',
        color: '#45B7D1'
    }
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['carousel-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['carousel-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-slide']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-slide']} */ ;
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
const __VLS_0 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
const __VLS_4 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    type: "success",
}));
const __VLS_6 = __VLS_5({
    type: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
const __VLS_8 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
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
const __VLS_12 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
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
const __VLS_16 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
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
const __VLS_20 = {}.LinIcon;
/** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
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
const __VLS_24 = {}.LinIcon;
/** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
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
const __VLS_28 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
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
const __VLS_32 = {}.LinInput;
/** @type {[typeof __VLS_components.LinInput, typeof __VLS_components.linInput, typeof __VLS_components.LinInput, typeof __VLS_components.linInput, ]} */ ;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_36 = {}.LinLink;
/** @type {[typeof __VLS_components.LinLink, typeof __VLS_components.linLink, typeof __VLS_components.LinLink, typeof __VLS_components.linLink, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    href: "#",
    icon: "edit",
}));
const __VLS_38 = __VLS_37({
    href: "#",
    icon: "edit",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
var __VLS_39;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-avatars" },
});
const __VLS_40 = {}.LinAvatar;
/** @type {[typeof __VLS_components.LinAvatar, typeof __VLS_components.linAvatar, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    src: "https://placehold.co/150x150.png",
    size: (64),
}));
const __VLS_42 = __VLS_41({
    src: "https://placehold.co/150x150.png",
    size: (64),
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.LinAvatar;
/** @type {[typeof __VLS_components.LinAvatar, typeof __VLS_components.linAvatar, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    icon: "user",
    size: (64),
}));
const __VLS_46 = __VLS_45({
    icon: "user",
    size: (64),
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.LinAvatar;
/** @type {[typeof __VLS_components.LinAvatar, typeof __VLS_components.linAvatar, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    text: "Alice",
    size: (64),
}));
const __VLS_50 = __VLS_49({
    text: "Alice",
    size: (64),
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_52 = {}.LinCard;
/** @type {[typeof __VLS_components.LinCard, typeof __VLS_components.linCard, typeof __VLS_components.LinCard, typeof __VLS_components.linCard, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    header: "标题",
    subHeader: "副标题",
    hoverable: (true),
    shadow: "hover",
}));
const __VLS_54 = __VLS_53({
    header: "标题",
    subHeader: "副标题",
    hoverable: (true),
    shadow: "hover",
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
{
    const { footer: __VLS_thisSlot } = __VLS_55.slots;
    const __VLS_56 = {}.LinButton;
    /** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
        size: "small",
    }));
    const __VLS_58 = __VLS_57({
        size: "small",
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    __VLS_59.slots.default;
    var __VLS_59;
}
var __VLS_55;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "carousel-demo" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_60 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    items: (__VLS_ctx.imageItems),
}));
const __VLS_62 = __VLS_61({
    items: (__VLS_ctx.imageItems),
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_64 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    items: (__VLS_ctx.imageItems),
    autoplay: true,
    interval: (2000),
}));
const __VLS_66 = __VLS_65({
    items: (__VLS_ctx.imageItems),
    autoplay: true,
    interval: (2000),
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
    ...{ style: {} },
});
const __VLS_68 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    items: (__VLS_ctx.imageItems),
    direction: "vertical",
    height: "400px",
}));
const __VLS_70 = __VLS_69({
    items: (__VLS_ctx.imageItems),
    direction: "vertical",
    height: "400px",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_72 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
    items: (__VLS_ctx.imageItems),
    effect: "fade",
}));
const __VLS_74 = __VLS_73({
    items: (__VLS_ctx.imageItems),
    effect: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_73));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_76 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    items: (__VLS_ctx.imageItems),
    effect: "card",
    indicatorType: "number",
}));
const __VLS_78 = __VLS_77({
    items: (__VLS_ctx.imageItems),
    effect: "card",
    indicatorType: "number",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_80 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    items: (__VLS_ctx.customItems),
}));
const __VLS_82 = __VLS_81({
    items: (__VLS_ctx.customItems),
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
__VLS_83.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_83.slots;
    const [{ item, index }] = __VLS_getSlotParams(__VLS_thisSlot);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "custom-slide" },
        ...{ style: ({ backgroundColor: item.color }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (item.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (item.content);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "slide-index" },
    });
    (index + 1);
}
{
    const { 'prev-arrow': __VLS_thisSlot } = __VLS_83.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "custom-arrow" },
    });
}
{
    const { 'next-arrow': __VLS_thisSlot } = __VLS_83.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "custom-arrow" },
    });
}
var __VLS_83;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_84 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    items: (__VLS_ctx.imageItems),
    thumbnails: true,
    arrowPosition: "outer",
}));
const __VLS_86 = __VLS_85({
    items: (__VLS_ctx.imageItems),
    thumbnails: true,
    arrowPosition: "outer",
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "demo-carousel" },
});
const __VLS_88 = {}.LinCarousel;
/** @type {[typeof __VLS_components.LinCarousel, typeof __VLS_components.linCarousel, ]} */ ;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({
    items: (__VLS_ctx.imageItems),
    progressBar: true,
    autoplay: true,
    interval: (3000),
}));
const __VLS_90 = __VLS_89({
    items: (__VLS_ctx.imageItems),
    progressBar: true,
    autoplay: true,
    interval: (3000),
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
/** @type {__VLS_StyleScopedClasses['demo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-avatars']} */ ;
/** @type {__VLS_StyleScopedClasses['carousel-demo']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-slide']} */ ;
/** @type {__VLS_StyleScopedClasses['slide-index']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-section']} */ ;
/** @type {__VLS_StyleScopedClasses['demo-carousel']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LinButton: LinButton,
            LinIcon: LinIcon,
            LinInput: LinInput,
            LinLink: LinLink,
            LinAvatar: LinAvatar,
            LinCard: LinCard,
            LinCarousel: LinCarousel,
            inputValue: inputValue,
            imageItems: imageItems,
            customItems: customItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
