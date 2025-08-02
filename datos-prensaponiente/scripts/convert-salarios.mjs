import fs from 'node:fs'
import { parse } from 'csv-parse/sync'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

/* ───── rutas ───── */
const SRC = resolve(dirname(fileURLToPath(import.meta.url)),
                    '../public/data/datasets/salary')
const DEST = resolve(dirname(fileURLToPath(import.meta.url)),
                    '../public/data/datasets/salary_out')

console.log('SRC :', SRC)
console.log('DEST:', DEST, '\n')

/* ────────── validaciones ────────── */
if (!fs.existsSync(SRC)) {
  console.error('❌  Carpeta SRC no existe:', SRC)
  process.exit(1)
}

const csvFiles = fs.readdirSync(SRC).filter(f => f.toLowerCase().endsWith('.csv'))
if (!csvFiles.length) {
  console.error('❌  No se encontraron archivos .csv en', SRC)
  process.exit(1)
}

fs.mkdirSync(DEST, { recursive: true })

/* ────────── manifest ────────── */
const manifest = { datasets: [] }
let totalRows = 0

for (const file of csvFiles) {
  try {
    console.log('\nProcesando', file, '…')

    const csv = fs.readFileSync(resolve(SRC, file), 'utf-8')
    const records = parse(csv, {
      delimiter: ';',
      columns: true,
      skip_empty_lines: true,
      relax_column_count: true,
      on_record(rec, ctx) {
        if (!ctx.__colCount) ctx.__colCount = Object.keys(rec).length
        return Object.keys(rec).length === ctx.__colCount ? rec : null
      }
    })

    // CORRECCIÓN: Definir firstRow aquí antes de usarla
    const firstRow = records[0]

    // Agrega una validación para archivos CSV vacíos
    if (!firstRow) {
      console.log('    → El archivo está vacío o no se pudo parsear, saltando.')
      continue
    }

    /* localizar key de “Año” */
    const yearColumn = Object.keys(firstRow).find(k => {
      const clean = k
        .replace(/^\uFEFF/, '')
        .normalize('NFD').replace(/\p{Diacritic}/gu, '')
        .trim().toLowerCase()

      return clean === 'ano' || clean === 'anio' || clean === 'periodo'
    })

    // Agrega una validación para cuando no se encuentra la columna de año
    if (!yearColumn) {
      console.log('    → No se pudo encontrar la columna de año, saltando.')
      continue
    }

    /* agrupar por año */
    const byYear = records.reduce((acc, r) => {
      const raw = String(r[yearColumn] ?? '').replace(/[^\d]/g, '')
      const y = Number(raw.slice(0, 4))
      if (!y || Number.isNaN(y) || y < 1900) return acc
      ;(acc[y] ??= []).push(clean(r, file))
      return acc
    }, {})

    console.log('    → años:', Object.keys(byYear).join(', ') || 'ninguno')

    /* escribir JSON por año */
    for (const [year, arr] of Object.entries(byYear)) {
      const out = resolve(DEST, `${year}.json`)
      fs.writeFileSync(out, JSON.stringify(arr))
      manifest.datasets.push({
        year: Number(year),
        file: `/data/salarios/${year}.json`,
        records: arr.length
      })
      console.log(`✔ ${year} (${file}) → ${arr.length} filas`)
      totalRows += arr.length
    }
  } catch (err) {
    console.error(`🚨 Error procesando ${file}:`, err.message)
  }
}

/* guardar manifest */
try {
  fs.writeFileSync(resolve(DEST, 'manifest.json'),
                   JSON.stringify(manifest, null, 2))
  console.log('\n✔ manifest.json generado con', manifest.datasets.length, 'entradas')
} catch (e) {
  console.error('❌  No se pudo escribir manifest.json:', e.message)
}

console.log(`\nResumen: ${csvFiles.length} CSV procesados, ${totalRows} filas totales\n`)

/* ────────── helpers ────────── */
function clean(r, srcFile) {
  return {
    id: crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
    fiscalYear: Number(r['Año'] ?? r['Año ']),
    month: r['Mes'],
    estamento: r['Estamento'],
    fullName: r['Nombre completo'],
    role: r['Cargo o función'],
    grade: r['Grado EUS o jornada'],
    education: r['Calificación profesional o formación'],
    region: r['Región'],
    grossPay: parseMoney(r['Remuneración bruta mensualizada']),
    netPay: parseMoney(r['Remuneración líquida mensualizada']),
    overtimePay: parseMoney(r['Montos y horas extraordinarias diurnas']?.split(':')[0]),
    overtimeHours: parseHours(r['Montos y horas extraordinarias diurnas']),
    startDate: toISO(r['Fecha de inicio dd/mm/aa']),
    endDate: toISO(r['Fecha de término dd/mm/aa']),
    sourceFile: srcFile
  }
}

function parseMoney(str) {
  if (!str || str === '-' || str === 'No tiene') return 0
  return Number(str.replace(/[$\s.]/g, '').replace(',', '.'))
}
function parseHours(str) {
  if (!str || str === 'No tiene') return 0
  const parts = str.split(':')
  return Number(parts[1]?.replace(/[^\d]/g, '') || 0)
}
function toISO(str) {
  if (!str) return null
  const sep = str.includes('.') ? '.' : '/'
  const [d, m, y] = str.split(sep)
  if (!d || !m || !y) return null
  const year = y.length === 2 ? `20${y}` : y
  return `${year}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
}