import { ref, reactive, onMounted } from 'vue';
import SalaryFilter from './components/SalaryFilter.vue';
import DataTable from './components/DataTable.vue';
import Pagination from '@/ui/Pagination.vue';
import { useManifest } from './composables/useManifest';
import { useSalaries } from './composables/useSalaries';
/* filtros y paginación */
const filters = reactive({});
const page = ref(1);
/* datos ------------------------------------------------------------------ */
const { rows, total, loading, fetchPage } = useSalaries();
const { ready, years } = useManifest(); // importa ready
function search() { page.value = 1; fetchPage(filters, page.value); }
function changePage(p) { page.value = p; fetchPage(filters, p); }
onMounted(async () => {
    await ready.value; // 2 espera
    filters.year = years.value[0]; // usa el más reciente
    fetchPage(filters, 1);
});
/* columnas --------------------------------------------------------------- */
const columns = [
    { key: 'fullName', label: 'Nombre' },
    { key: 'role', label: 'Cargo' },
    { key: 'region', label: 'Región' },
    { key: 'grossPay', label: 'Bruto', formatter: (v) => v.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
];
/* primera carga */
fetchPage({}, 1);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "bg-neutral-900 text-white min-h-screen px-6 py-12" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-3xl font-bold mb-6" },
});
/** @type {[typeof SalaryFilter, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SalaryFilter, new SalaryFilter({
    ...{ 'onSearch': {} },
    modelValue: (__VLS_ctx.filters),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onSearch': {} },
    modelValue: (__VLS_ctx.filters),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ search: {} },
    { onSearch: (__VLS_ctx.search) });
// @ts-ignore
[filters, search,];
var __VLS_2;
if (__VLS_ctx.loading) {
    // @ts-ignore
    [loading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "py-20 text-center" },
    });
}
else {
    /** @type {[typeof DataTable, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(DataTable, new DataTable({
        rows: (__VLS_ctx.rows),
        columns: (__VLS_ctx.columns),
    }));
    const __VLS_8 = __VLS_7({
        rows: (__VLS_ctx.rows),
        columns: (__VLS_ctx.columns),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    // @ts-ignore
    [rows, columns,];
    /** @type {[typeof Pagination, ]} */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Pagination, new Pagination({
        ...{ 'onChange': {} },
        page: (__VLS_ctx.page),
        total: (__VLS_ctx.total),
        ...{ class: "mt-6" },
    }));
    const __VLS_12 = __VLS_11({
        ...{ 'onChange': {} },
        page: (__VLS_ctx.page),
        total: (__VLS_ctx.total),
        ...{ class: "mt-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    let __VLS_14;
    let __VLS_15;
    const __VLS_16 = ({ change: {} },
        { onChange: (__VLS_ctx.changePage) });
    // @ts-ignore
    [page, total, changePage,];
    var __VLS_13;
}
/** @type {__VLS_StyleScopedClasses['bg-neutral-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-12']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-20']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            SalaryFilter: SalaryFilter,
            DataTable: DataTable,
            Pagination: Pagination,
            filters: filters,
            page: page,
            rows: rows,
            total: total,
            loading: loading,
            search: search,
            changePage: changePage,
            columns: columns,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
    },
});
; /* PartiallyEnd: #4569/main.vue */
