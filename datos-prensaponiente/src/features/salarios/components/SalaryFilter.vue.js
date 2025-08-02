import { watch, defineModel, defineEmits } from 'vue';
import { useManifest } from '../composables/useManifest';
const model = defineModel();
const emit = defineEmits(['search']);
/* helpers ---------------------------------------------------------------- */
function update(key, val) {
    (model.value ?? (model.value = {}))[key] = val; // crea el objeto si es null
}
function handleSelect(e) {
    const value = e.target.value;
    update('year', value ? Number(value) : undefined);
}
function handleInput(key, e) {
    update(key, e.target.value || undefined);
}
/* síncroniza con SalariosPage ------------------------------------------- */
watch(model, () => emit('search'), { deep: true });
/* años ------------------------------------------------------------------- */
/* const years = ref<number[]>([])
onMounted(async () => {
  const { years: y } = await useManifest()
  years.value = y
}) */
const { years } = useManifest();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_defaults = {};
const __VLS_modelEmit = defineEmits();
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.emit('search');
            // @ts-ignore
            [emit,];
        } },
    ...{ class: "flex flex-wrap gap-4 mb-6" },
});
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
    ...{ onChange: (__VLS_ctx.handleSelect) },
    value: (__VLS_ctx.model?.year),
    ...{ class: "input w-28" },
});
// @ts-ignore
[handleSelect, model,];
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: (undefined),
});
for (const [y] of __VLS_getVForSourceType((__VLS_ctx.years))) {
    // @ts-ignore
    [years,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        key: (y),
        value: (y),
    });
    (y);
}
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.handleInput('role', $event);
            // @ts-ignore
            [handleInput,];
        } },
    value: (__VLS_ctx.model?.role),
    placeholder: "Rol",
    ...{ class: "input w-40" },
});
// @ts-ignore
[model,];
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.handleInput('region', $event);
            // @ts-ignore
            [handleInput,];
        } },
    value: (__VLS_ctx.model?.region),
    placeholder: "Región",
    ...{ class: "input w-40" },
});
// @ts-ignore
[model,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ class: "btn-primary px-6" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['w-28']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['w-40']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['w-40']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            model: model,
            emit: emit,
            handleSelect: handleSelect,
            handleInput: handleInput,
            years: years,
        };
    },
    emits: {
        ...{},
        ...{},
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
    },
    emits: {
        ...{},
        ...{},
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
