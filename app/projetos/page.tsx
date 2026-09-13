"use client"
import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { SiteShell } from "@/components/site-shell"
import { projects, type ProjectCategory } from "@/src/data/projects"
const filters = [["Todos", "Todos"], ["Websites", "Website"], ["Sistemas", "Sistema"], ["Discord", "Discord"], ["Automações", "Automação"]] as const
export default function ProjectsPage() { const [filter, setFilter] = useState("Todos"); const visible = filter === "Todos" ? projects : projects.filter((p) => p.category === filter as ProjectCategory); return <SiteShell><main className="container page"><div className="page-intro"><div className="eyebrow accent">PORTFÓLIO</div><h1>Projetos</h1><p>Conheça alguns dos projetos e soluções desenvolvidos pela Blaze System.</p></div><div className="filters" role="tablist">{filters.map(([label, value]) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{label}</button>)}</div><div className="project-grid">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></main></SiteShell> }
