export type ProjectCategory = "Website" | "Sistema" | "Discord" | "Automação";
export type ProjectType = "Produto" | "Projeto conceitual" | "MVP" | "Interno";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  type: ProjectType;
  technologies: string[];
  image: string;
  width: number;
  height: number;
  featured?: boolean;
  status?: string;
  demoUrl?: string;
  repositoryUrl?: string;
  presentationUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "clinica-aurora",
    title: "Clínica Aurora",
    category: "Website",
    type: "Projeto conceitual",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/aurora.png",
    width: 2048,
    height: 1152,
    featured: true,
    status: "Conceitual",
    demoUrl: "https://v0-clinicaaurora.vercel.app",
    repositoryUrl: "https://github.com/CostaCodesFullStack/ClinicaAurora",
    description:
      "Landing page conceitual desenvolvida para demonstrar uma experiência digital moderna, elegante e orientada à conversão para uma clínica de estética.",
  },
  {
    slug: "bot-de-torcida",
    title: "Bot de Torcida",
    category: "Discord",
    type: "Produto",
    technologies: ["TypeScript", "Discord.js"],
    image: "/projects/torcida.png",
    width: 1024,
    height: 1024,
    featured: true,
    status: "Em Produção",
    presentationUrl: "https://youtu.be/hKRJ8VVV-_g",
    description:
      "Sistema para gerenciamento e automação de torcidas dentro do Discord, desenvolvido para centralizar processos administrativos e melhorar a organização das comunidades.",
  },
  {
    slug: "clientflow",
    title: "ClientFlow",
    category: "Sistema",
    type: "MVP",
    technologies: [],
    image: "/projects/client-flow.png",
    width: 1024,
    height: 1024,
    featured: true,
    status: "Em Desenvolvimento",
    description:
      "Sistema de gerenciamento desenvolvido como MVP para organização de clientes, projetos, tarefas e atividades.",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
export const featuredProjects = projects.filter((project) => project.featured);
export const relatedProjects = (project: Project) =>
  projects
    .filter(
      (item) =>
        item.slug !== project.slug && item.category === project.category,
    )
    .slice(0, 2);
