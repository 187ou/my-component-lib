/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
const props = withDefaults(defineProps(), {
    items: () => [],
    startIndex: 0,
    autoplay: false,
    interval: 3000,
    loop: true,
    direction: 'horizontal',
    height: '320px',
    effect: 'slide',
    indicatorType: 'dot',
    showIndicators: true,
    showArrows: true,
    arrowPosition: 'inner',
    thumbnails: false,
    progressBar: false,
    pauseOnHover: true
});
const emit = defineEmits();
const current = ref(0);
const hovering = ref(false);
const progress = ref(0);
let nextTimer = null;
let progressTimer = null;
const normalizedItems = computed(() => props.items.map((item, index) => {
    if (typeof item === 'string') {
        return {
            src: item,
            thumbnail: item,
            alt: `carousel-${index + 1}`,
            raw: { src: item }
        };
    }
    return {
        src: item.src,
        thumbnail: item.thumbnail ?? item.src,
        alt: item.alt ?? `carousel-${index + 1}`,
        raw: item
    };
}));
const slideCount = computed(() => normalizedItems.value.length);
const clampIndex = (index) => {
    const total = slideCount.value;
    if (!total)
        return 0;
    if (!props.loop)
        return Math.min(total - 1, Math.max(0, index));
    return (index % total + total) % total;
};
const prevIndex = computed(() => clampIndex(current.value - 1));
const nextIndex = computed(() => clampIndex(current.value + 1));
const rootClasses = computed(() => [
    `is-${props.direction}`,
    `is-${props.effect}`,
    `arrow-${props.arrowPosition}`
]);
const trackStyle = computed(() => {
    if (props.effect !== 'slide')
        return {};
    const axis = props.direction === 'vertical' ? 'Y' : 'X';
    const translateValue = `-${current.value * 100}%`;
    return {
        transform: `translate${axis}(${translateValue})`,
        flexDirection: props.direction === 'vertical' ? 'column' : 'row'
    };
});
const itemClasses = (index) => ({
    'is-active': index === current.value,
    'is-prev': index === prevIndex.value,
    'is-next': index === nextIndex.value
});
const itemStyle = (index) => {
    if (props.effect === 'fade') {
        return {
            opacity: index === current.value ? 1 : 0,
            zIndex: index === current.value ? 2 : 1
        };
    }
    if (props.effect === 'card') {
        if (index === current.value)
            return { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 3 };
        if (index === prevIndex.value)
            return { transform: 'translateX(-65%) scale(0.9)', opacity: 0.9, zIndex: 2 };
        if (index === nextIndex.value)
            return { transform: 'translateX(65%) scale(0.9)', opacity: 0.9, zIndex: 2 };
        return { transform: 'translateX(0) scale(0.8)', opacity: 0, zIndex: 1 };
    }
    return {};
};
const goTo = (index) => {
    if (!slideCount.value)
        return;
    const target = clampIndex(index);
    if (target === current.value) {
        restartTimers();
        return;
    }
    current.value = target;
    emit('change', target);
    emit('update:current', target);
    restartTimers();
};
const next = () => goTo(current.value + 1);
const prev = () => goTo(current.value - 1);
const clearTimers = () => {
    if (nextTimer !== null) {
        window.clearTimeout(nextTimer);
        nextTimer = null;
    }
    if (progressTimer !== null) {
        window.clearInterval(progressTimer);
        progressTimer = null;
    }
};
const scheduleAutoplay = () => {
    clearTimers();
    progress.value = 0;
    if (!props.autoplay || hovering.value || slideCount.value <= 1)
        return;
    const start = performance.now();
    progressTimer = window.setInterval(() => {
        const elapsed = performance.now() - start;
        progress.value = Math.min(100, (elapsed / props.interval) * 100);
    }, 40);
    nextTimer = window.setTimeout(() => {
        progress.value = 0;
        next();
    }, props.interval);
};
const restartTimers = () => {
    if (props.autoplay) {
        scheduleAutoplay();
    }
    else {
        clearTimers();
        progress.value = 0;
    }
};
const handleMouseEnter = () => {
    hovering.value = true;
    if (props.pauseOnHover) {
        clearTimers();
    }
};
const handleMouseLeave = () => {
    hovering.value = false;
    if (props.autoplay) {
        scheduleAutoplay();
    }
};
watch(() => props.items, () => {
    const safeIndex = clampIndex(props.startIndex ?? 0);
    current.value = safeIndex;
    restartTimers();
}, { immediate: true });
watch(() => [props.autoplay, props.interval, props.loop, props.effect], () => restartTimers());
onMounted(() => {
    current.value = clampIndex(props.startIndex ?? 0);
    scheduleAutoplay();
});
onBeforeUnmount(() => {
    clearTimers();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    items: () => [],
    startIndex: 0,
    autoplay: false,
    interval: 3000,
    loop: true,
    direction: 'horizontal',
    height: '320px',
    effect: 'slide',
    indicatorType: 'dot',
    showIndicators: true,
    showArrows: true,
    arrowPosition: 'inner',
    thumbnails: false,
    progressBar: false,
    pauseOnHover: true
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['my-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['is-card']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['is-active']} */ ;
/** @type {__VLS_StyleScopedClasses['is-active']} */ ;
/** @type {__VLS_StyleScopedClasses['is-active']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-carousel" },
    ...{ class: (__VLS_ctx.rootClasses) },
    ...{ style: ({ height: props.height }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseenter: (__VLS_ctx.handleMouseEnter) },
    ...{ onMouseleave: (__VLS_ctx.handleMouseLeave) },
    ...{ class: "my-carousel__viewport" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "my-carousel__track" },
    ...{ style: (__VLS_ctx.trackStyle) },
});
for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.normalizedItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (index),
        ...{ class: "my-carousel__item" },
        ...{ class: (__VLS_ctx.itemClasses(index)) },
        ...{ style: (__VLS_ctx.itemStyle(index)) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-carousel__content" },
    });
    if (__VLS_ctx.$slots.default) {
        var __VLS_0 = {
            item: (item.raw),
            index: (index),
        };
    }
    else {
        if (item.src) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
                ...{ class: "my-carousel__img" },
                src: (item.src),
                alt: (item.alt || `carousel-${index + 1}`),
                loading: "lazy",
            });
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "my-carousel__placeholder" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
    }
}
if (props.showArrows && __VLS_ctx.slideCount > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.prev) },
        ...{ class: "my-carousel__arrow my-carousel__arrow--prev" },
    });
    var __VLS_2 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-carousel__arrow-icon" },
    });
}
if (props.showArrows && __VLS_ctx.slideCount > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (__VLS_ctx.next) },
        ...{ class: "my-carousel__arrow my-carousel__arrow--next" },
    });
    var __VLS_4 = {};
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "my-carousel__arrow-icon" },
    });
}
if (props.progressBar && props.autoplay && __VLS_ctx.slideCount > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-carousel__progress" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-carousel__progress-bar" },
        ...{ style: ({ width: `${__VLS_ctx.progress}%` }) },
    });
}
if (props.showIndicators && props.indicatorType !== 'number' && __VLS_ctx.slideCount > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-carousel__indicators" },
        ...{ class: (`is-${props.indicatorType}`) },
    });
    for (const [_, index] of __VLS_getVForSourceType((__VLS_ctx.slideCount))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.showIndicators && props.indicatorType !== 'number' && __VLS_ctx.slideCount > 1))
                        return;
                    __VLS_ctx.goTo(index);
                } },
            key: (index),
            type: "button",
            ...{ class: "my-carousel__indicator" },
            ...{ class: ({ 'is-active': index === __VLS_ctx.current }) },
        });
    }
}
if (props.showIndicators && props.indicatorType === 'number' && __VLS_ctx.slideCount > 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-carousel__indicator-number" },
    });
    (__VLS_ctx.current + 1);
    (__VLS_ctx.slideCount);
}
if (props.thumbnails && __VLS_ctx.slideCount) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "my-carousel__thumbnails" },
    });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.normalizedItems))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(props.thumbnails && __VLS_ctx.slideCount))
                        return;
                    __VLS_ctx.goTo(index);
                } },
            key: (index),
            ...{ class: "my-carousel__thumbnail" },
            ...{ class: ({ 'is-active': index === __VLS_ctx.current }) },
            type: "button",
        });
        if (item.thumbnail || item.src) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
                src: (item.thumbnail || item.src),
                alt: (item.alt || `thumbnail-${index + 1}`),
            });
        }
        else {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (index + 1);
        }
    }
}
/** @type {__VLS_StyleScopedClasses['my-carousel']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__viewport']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__track']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__item']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__content']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__img']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__placeholder']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__arrow--prev']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__arrow-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__arrow--next']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__arrow-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__progress']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__progress-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__indicators']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__indicator']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__indicator-number']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__thumbnails']} */ ;
/** @type {__VLS_StyleScopedClasses['my-carousel__thumbnail']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2, __VLS_5 = __VLS_4;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            current: current,
            progress: progress,
            normalizedItems: normalizedItems,
            slideCount: slideCount,
            rootClasses: rootClasses,
            trackStyle: trackStyle,
            itemClasses: itemClasses,
            itemStyle: itemStyle,
            goTo: goTo,
            next: next,
            prev: prev,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
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
