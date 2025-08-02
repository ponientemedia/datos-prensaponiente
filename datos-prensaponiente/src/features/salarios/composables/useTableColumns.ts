export const baseColumns = [
  { key:'fullName', label:'Nombre' },
  { key:'role',     label:'Cargo' },
  { key:'region',   label:'Región' },
  { key:'grossPay', label:'Bruto', formatter:(v:number)=>
      v.toLocaleString('es-CL', { style:'currency', currency:'CLP' }) }
]