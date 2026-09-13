import type { Metadata } from "next"
import { ProjectsFilter } from "@/components/projects-filter"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça alguns dos projetos e soluções desenvolvidos pela Blaze System.",
}

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="container page">
        <div className="page-intro">
          <div className="eyebrow accent">PORTFÓLIO</div>
          <h1>Projetos</h1>
          <p>Conheça alguns dos projetos e soluções desenvolvidos pela Blaze System.</p>
        </div>
        <ProjectsFilter />
      </main>
    </SiteShell>
  )
}
