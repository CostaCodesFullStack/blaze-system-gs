export type ProjectCategory = "Website" | "Sistema" | "Discord" | "Automação"
export type ProjectType = "Produto" | "Projeto conceitual" | "MVP" | "Interno"

export interface Project {
  slug: string
  title: string
  description: string
  category: ProjectCategory
  type: ProjectType
  technologies: string[]
  image: string
  featured?: boolean
  status?: string
  demoUrl?: string
  repositoryUrl?: string
}

export const projects: Project[] = [
  { slug: "clinica-aurora", title: "Clínica Aurora", category: "Website", type: "Projeto conceitual", technologies: ["Next.js", "React", "Tailwind CSS"], image: "/projects/clinica-aurora.png", featured: true, status: "Conceitual", description: "Landing page conceitual desenvolvida para demonstrar uma experiência digital moderna, elegante e orientada à conversão para uma clínica de estética." },
  { slug: "bot-de-torcida", title: "Bot de Torcida", category: "Discord", type: "Produto", technologies: [], image: "/projects/bot-torcida.png", featured: true, status: "Em desenvolvimento", description: "Sistema para gerenciamento e automação de torcidas dentro do Discord, desenvolvido para centralizar processos administrativos e melhorar a organização das comunidades." },
  { slug: "clientflow", title: "ClientFlow", category: "Sistema", type: "MVP", technologies: [], image: "/projects/clientflow.png", featured: true, status: "MVP", description: "Sistema de gerenciamento desenvolvido como MVP para organização de clientes, projetos, tarefas e atividades." },
  { slug: "blaze-system-web", title: "Blaze System Web", category: "Website", type: "Interno", technologies: [], image: "/projects/blaze-system-web.png", status: "Interno", description: "Aplicação web desenvolvida para a própria Blaze System, servindo como base para experiências e funcionalidades digitais da marca." },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
export const featuredProjects = projects.filter((project) => project.featured)
export const relatedProjects = (project: Project) => projects.filter((item) => item.slug !== project.slug && item.category === project.category).slice(0, 2)
