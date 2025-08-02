import { reactive } from 'vue';
const local = reactive({ q: '', role: '', location: '', salary: '' });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.$emit('search', __VLS_ctx.local);
            // @ts-ignore
            [$emit, local,];
        } },
    ...{ class: "w-full max-w-4xl bg-neutral-800 rounded-full flex overflow-hidden divide-x divide-neutral-700" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    placeholder: "What do you need?",
    ...{ class: "input" },
});
(__VLS_ctx.local.q);
// @ts-ignore
[local,];
__VLS_asFunctionalElement(__VLS_elements.input)({
    placeholder: "Add role",
    ...{ class: "input" },
});
(__VLS_ctx.local.role);
// @ts-ignore
[local,];
__VLS_asFunctionalElement(__VLS_elements.input)({
    placeholder: "Add location",
    ...{ class: "input" },
});
(__VLS_ctx.local.location);
// @ts-ignore
[local,];
__VLS_asFunctionalElement(__VLS_elements.input)({
    placeholder: "Select salary range",
    ...{ class: "input" },
});
(__VLS_ctx.local.salary);
// @ts-ignore
[local,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ class: "bg-primary px-6 flex items-center" },
});
__VLS_asFunctionalElement(__VLS_elements.svg, __VLS_elements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    ...{ class: "w-5 h-5" },
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
});
__VLS_asFunctionalElement(__VLS_elements.path)({
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    'stroke-width': "1.5",
    d: "M17.25 8.25L21 12l-3.75 3.75M3 12h18",
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-800']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-x']} */ ;
/** @type {__VLS_StyleScopedClasses['divide-neutral-700']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            local: local,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
