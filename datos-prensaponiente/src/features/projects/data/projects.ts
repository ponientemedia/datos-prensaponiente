// src/features/projects/data/projects.ts
export interface Project {
  slug: string
  title: string
  status: 'active' | 'beta' | 'archive'
}

export const projects: Project[] = [
  { slug: 'salarios', title: 'Salarios municipales', status: 'active' },
  // añade más aquí…
]