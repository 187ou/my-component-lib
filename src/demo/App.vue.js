/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
import { LinButton, LinIcon, LinInput, LinLink, LinAvatar, LinCard, LinCarousel, LinTag, LinDropdown, LinWarning } from '../index';
import { LinLoading, LinMessage, LinNotification, LinProgress, LinTimeline, LinTimelineItem } from '../index';
LinMessage.info('这是提示信息');
LinNotification.success('这是成功提示');
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
/** @type {__VLS_StyleScopedClasses['loading-demo-simple']} */ ;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_92 = {}.LinTag;
/** @type {[typeof __VLS_components.LinTag, typeof __VLS_components.linTag, typeof __VLS_components.LinTag, typeof __VLS_components.linTag, ]} */ ;
// @ts-ignore
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({
    type: "success",
}));
const __VLS_94 = __VLS_93({
    type: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_93));
__VLS_95.slots.default;
var __VLS_95;
const __VLS_96 = {}.LinTag;
/** @type {[typeof __VLS_components.LinTag, typeof __VLS_components.linTag, typeof __VLS_components.LinTag, typeof __VLS_components.linTag, ]} */ ;
// @ts-ignore
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
    type: "danger",
    closeable: true,
}));
const __VLS_98 = __VLS_97({
    type: "danger",
    closeable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_97));
__VLS_99.slots.default;
var __VLS_99;
const __VLS_100 = {}.LinTag;
/** @type {[typeof __VLS_components.LinTag, typeof __VLS_components.linTag, typeof __VLS_components.LinTag, typeof __VLS_components.linTag, ]} */ ;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({
    type: "primary",
    icon: "star",
}));
const __VLS_102 = __VLS_101({
    type: "primary",
    icon: "star",
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
__VLS_103.slots.default;
var __VLS_103;
const __VLS_104 = {}.LinTag;
/** @type {[typeof __VLS_components.LinTag, typeof __VLS_components.linTag, typeof __VLS_components.LinTag, typeof __VLS_components.linTag, ]} */ ;
// @ts-ignore
const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
    outline: true,
    round: true,
    clickable: true,
}));
const __VLS_106 = __VLS_105({
    outline: true,
    round: true,
    clickable: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_105));
__VLS_107.slots.default;
var __VLS_107;
const __VLS_108 = {}.LinTag;
/** @type {[typeof __VLS_components.LinTag, typeof __VLS_components.linTag, typeof __VLS_components.LinTag, typeof __VLS_components.linTag, ]} */ ;
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({
    loading: true,
}));
const __VLS_110 = __VLS_109({
    loading: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
__VLS_111.slots.default;
var __VLS_111;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_112 = {}.LinDropdown;
/** @type {[typeof __VLS_components.LinDropdown, typeof __VLS_components.linDropdown, typeof __VLS_components.LinDropdown, typeof __VLS_components.linDropdown, ]} */ ;
// @ts-ignore
const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({}));
const __VLS_114 = __VLS_113({}, ...__VLS_functionalComponentArgsRest(__VLS_113));
__VLS_115.slots.default;
const __VLS_116 = {}.LinButton;
/** @type {[typeof __VLS_components.LinButton, typeof __VLS_components.linButton, typeof __VLS_components.LinButton, typeof __VLS_components.linButton, ]} */ ;
// @ts-ignore
const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({}));
const __VLS_118 = __VLS_117({}, ...__VLS_functionalComponentArgsRest(__VLS_117));
__VLS_119.slots.default;
const __VLS_120 = {}.LinIcon;
/** @type {[typeof __VLS_components.LinIcon, typeof __VLS_components.linIcon, ]} */ ;
// @ts-ignore
const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
    name: "arrow-down",
}));
const __VLS_122 = __VLS_121({
    name: "arrow-down",
}, ...__VLS_functionalComponentArgsRest(__VLS_121));
var __VLS_119;
{
    const { dropdown: __VLS_thisSlot } = __VLS_115.slots;
    const __VLS_124 = {}.LinDropdownMenu;
    /** @type {[typeof __VLS_components.LinDropdownMenu, typeof __VLS_components.linDropdownMenu, typeof __VLS_components.LinDropdownMenu, typeof __VLS_components.linDropdownMenu, ]} */ ;
    // @ts-ignore
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({}));
    const __VLS_126 = __VLS_125({}, ...__VLS_functionalComponentArgsRest(__VLS_125));
    __VLS_127.slots.default;
    const __VLS_128 = {}.LinDropdownItem;
    /** @type {[typeof __VLS_components.LinDropdownItem, typeof __VLS_components.linDropdownItem, typeof __VLS_components.LinDropdownItem, typeof __VLS_components.linDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({}));
    const __VLS_130 = __VLS_129({}, ...__VLS_functionalComponentArgsRest(__VLS_129));
    __VLS_131.slots.default;
    var __VLS_131;
    const __VLS_132 = {}.LinDropdownItem;
    /** @type {[typeof __VLS_components.LinDropdownItem, typeof __VLS_components.linDropdownItem, typeof __VLS_components.LinDropdownItem, typeof __VLS_components.linDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({}));
    const __VLS_134 = __VLS_133({}, ...__VLS_functionalComponentArgsRest(__VLS_133));
    __VLS_135.slots.default;
    var __VLS_135;
    const __VLS_136 = {}.LinDropdownItem;
    /** @type {[typeof __VLS_components.LinDropdownItem, typeof __VLS_components.linDropdownItem, typeof __VLS_components.LinDropdownItem, typeof __VLS_components.linDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({}));
    const __VLS_138 = __VLS_137({}, ...__VLS_functionalComponentArgsRest(__VLS_137));
    __VLS_139.slots.default;
    var __VLS_139;
    var __VLS_127;
}
var __VLS_115;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_140 = {}.LinWarning;
/** @type {[typeof __VLS_components.LinWarning, typeof __VLS_components.linWarning, ]} */ ;
// @ts-ignore
const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({
    title: "标题",
    description: "这是内容",
}));
const __VLS_142 = __VLS_141({
    title: "标题",
    description: "这是内容",
}, ...__VLS_functionalComponentArgsRest(__VLS_141));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "loading-demo-simple" },
});
const __VLS_144 = {}.LinLoading;
/** @type {[typeof __VLS_components.LinLoading, typeof __VLS_components.linLoading, ]} */ ;
// @ts-ignore
const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
    visible: true,
    text: "默认加载",
}));
const __VLS_146 = __VLS_145({
    visible: true,
    text: "默认加载",
}, ...__VLS_functionalComponentArgsRest(__VLS_145));
const __VLS_148 = {}.LinLoading;
/** @type {[typeof __VLS_components.LinLoading, typeof __VLS_components.linLoading, ]} */ ;
// @ts-ignore
const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({
    visible: true,
    text: "加载中...",
    type: "spinner",
}));
const __VLS_150 = __VLS_149({
    visible: true,
    text: "加载中...",
    type: "spinner",
}, ...__VLS_functionalComponentArgsRest(__VLS_149));
const __VLS_152 = {}.LinLoading;
/** @type {[typeof __VLS_components.LinLoading, typeof __VLS_components.linLoading, ]} */ ;
// @ts-ignore
const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({
    visible: true,
    text: "加载中...",
    type: "dots",
}));
const __VLS_154 = __VLS_153({
    visible: true,
    text: "加载中...",
    type: "dots",
}, ...__VLS_functionalComponentArgsRest(__VLS_153));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_156 = {}.LinProgress;
/** @type {[typeof __VLS_components.LinProgress, typeof __VLS_components.linProgress, ]} */ ;
// @ts-ignore
const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({
    percentage: (30),
}));
const __VLS_158 = __VLS_157({
    percentage: (30),
}, ...__VLS_functionalComponentArgsRest(__VLS_157));
const __VLS_160 = {}.LinProgress;
/** @type {[typeof __VLS_components.LinProgress, typeof __VLS_components.linProgress, ]} */ ;
// @ts-ignore
const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({
    percentage: (70),
    status: "success",
}));
const __VLS_162 = __VLS_161({
    percentage: (70),
    status: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_161));
const __VLS_164 = {}.LinProgress;
/** @type {[typeof __VLS_components.LinProgress, typeof __VLS_components.linProgress, ]} */ ;
// @ts-ignore
const __VLS_165 = __VLS_asFunctionalComponent(__VLS_164, new __VLS_164({
    percentage: (45),
    type: "circle",
}));
const __VLS_166 = __VLS_165({
    percentage: (45),
    type: "circle",
}, ...__VLS_functionalComponentArgsRest(__VLS_165));
const __VLS_168 = {}.LinProgress;
/** @type {[typeof __VLS_components.LinProgress, typeof __VLS_components.linProgress, ]} */ ;
// @ts-ignore
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({
    percentage: (80),
    color: "skyblue",
}));
const __VLS_170 = __VLS_169({
    percentage: (80),
    color: "skyblue",
}, ...__VLS_functionalComponentArgsRest(__VLS_169));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
const __VLS_172 = {}.LinTimeline;
/** @type {[typeof __VLS_components.LinTimeline, typeof __VLS_components.linTimeline, typeof __VLS_components.LinTimeline, typeof __VLS_components.linTimeline, ]} */ ;
// @ts-ignore
const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({}));
const __VLS_174 = __VLS_173({}, ...__VLS_functionalComponentArgsRest(__VLS_173));
__VLS_175.slots.default;
const __VLS_176 = {}.LinTimelineItem;
/** @type {[typeof __VLS_components.LinTimelineItem, typeof __VLS_components.linTimelineItem, typeof __VLS_components.LinTimelineItem, typeof __VLS_components.linTimelineItem, ]} */ ;
// @ts-ignore
const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({
    timestamp: "2024-01-01",
}));
const __VLS_178 = __VLS_177({
    timestamp: "2024-01-01",
}, ...__VLS_functionalComponentArgsRest(__VLS_177));
__VLS_179.slots.default;
var __VLS_179;
const __VLS_180 = {}.LinTimelineItem;
/** @type {[typeof __VLS_components.LinTimelineItem, typeof __VLS_components.linTimelineItem, typeof __VLS_components.LinTimelineItem, typeof __VLS_components.linTimelineItem, ]} */ ;
// @ts-ignore
const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({
    timestamp: "2024-01-02",
    type: "success",
}));
const __VLS_182 = __VLS_181({
    timestamp: "2024-01-02",
    type: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_181));
__VLS_183.slots.default;
var __VLS_183;
const __VLS_184 = {}.LinTimelineItem;
/** @type {[typeof __VLS_components.LinTimelineItem, typeof __VLS_components.linTimelineItem, typeof __VLS_components.LinTimelineItem, typeof __VLS_components.linTimelineItem, ]} */ ;
// @ts-ignore
const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({
    timestamp: "2024-01-03",
    icon: "check",
}));
const __VLS_186 = __VLS_185({
    timestamp: "2024-01-03",
    icon: "check",
}, ...__VLS_functionalComponentArgsRest(__VLS_185));
__VLS_187.slots.default;
var __VLS_187;
var __VLS_175;
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
/** @type {__VLS_StyleScopedClasses['loading-demo-simple']} */ ;
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
            LinTag: LinTag,
            LinDropdown: LinDropdown,
            LinWarning: LinWarning,
            LinLoading: LinLoading,
            LinProgress: LinProgress,
            LinTimeline: LinTimeline,
            LinTimelineItem: LinTimelineItem,
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
