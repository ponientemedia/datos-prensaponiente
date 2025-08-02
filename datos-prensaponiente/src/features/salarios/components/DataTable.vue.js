import { computed } from 'vue';
const props = defineProps();
const header = computed(() => props.columns.map(c => c.label));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "overflow-x-auto shadow-lg rounded-xl border border-neutral-800" },
});
__VLS_asFunctionalElement(__VLS_elements.table, __VLS_elements.table)({
    ...{ class: "min-w-full text-sm" },
});
__VLS_asFunctionalElement(__VLS_elements.thead, __VLS_elements.thead)({
    ...{ class: "bg-neutral-800 text-neutral-400" },
});
__VLS_asFunctionalElement(__VLS_elements.tr, __VLS_elements.tr)({});
for (const [h] of __VLS_getVForSourceType((__VLS_ctx.header))) {
    // @ts-ignore
    [header,];
    __VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
        key: (h),
        ...{ class: "px-4 py-2 text-left" },
    });
    (h);
}
__VLS_asFunctionalElement(__VLS_elements.tbody, __VLS_elements.tbody)({});
for (const [r] of __VLS_getVForSourceType((__VLS_ctx.rows))) {
    // @ts-ignore
    [rows,];
    __VLS_asFunctionalElement(__VLS_elements.tr, __VLS_elements.tr)({
        key: (r.id),
        ...{ class: "border-b border-neutral-800 hover:bg-neutral-800/40" },
    });
    for (const [c] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        // @ts-ignore
        [columns,];
        __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
            key: (c.key),
            ...{ class: "px-4 py-2" },
        });
        (c.formatter ? c.formatter(r[c.key]) : r[c.key]);
    }
}
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-neutral-800']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-800']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral-400']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-neutral-800']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-neutral-800/40']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            header: header,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
