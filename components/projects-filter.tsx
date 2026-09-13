"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { projects, type ProjectCategory } from "@/src/data/projects"

const filters = [
  ["Todos", "Todos"],
  ["Websites", "Website"],
  ["Sistemas", "Sistema"],
  ["Discord", "Discord"],
  ["Automações", "Automação"],
] as const

export function ProjectsFilter() {
  const [filter, setFilter] = useState("Todos")
  const visible =
    filter === "Todos" ? projects : projects.filter((p) => p.category === (filter as ProjectCategory))

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar projetos">
        {filters.map(([label, value]) => (
          <button
            key={value}
            type="button"
            className={filter === value ? "active" : ""}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} headingLevel="h2" />
        ))}
      </div>
    </>
  )
}
