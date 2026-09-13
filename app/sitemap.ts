import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"
import { projects } from "@/src/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const staticPaths = ["", "/projetos", "/solucoes", "/sobre", "/contato"]
  const projectPaths = projects.map((project) => `/projetos/${project.slug}`)

  return [...staticPaths, ...projectPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }))
}
