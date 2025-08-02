const props = defineProps();
const emit = defineEmits(['change']);
const size = props.size ?? 50;
const pages = Math.ceil(props.total / size);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.pages > 1) {
    // @ts-ignore
    [pages,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex gap-2 items-center justify-center" },
    });
    for (const [p] of __VLS_getVForSourceType((__VLS_ctx.pages))) {
        // @ts-ignore
        [pages,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.pages > 1))
                        return;
                    __VLS_ctx.emit('change', p);
                    // @ts-ignore
                    [emit,];
                } },
            key: (p),
            ...{ class: (['px-3 py-1 rounded', p === __VLS_ctx.page ? 'bg-primary text-white' : 'bg-neutral-700']) },
        });
        // @ts-ignore
        [page,];
        (p);
    }
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
            pages: pages,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
