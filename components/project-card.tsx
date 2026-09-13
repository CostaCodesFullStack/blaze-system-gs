import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/src/data/projects"

export function ProjectCard({ project }: { project: Project }) { return <article className="project-card"><Link href={`/projetos/${project.slug}`} className="project-image"><Image src={project.image} alt={`Capa do projeto ${project.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" /><span className="image-arrow">↗</span></Link><div className="project-card-body"><div className="eyebrow"><span>{project.category}</span><i>·</i><span>{project.type}</span></div><Link href={`/projetos/${project.slug}`}><h3>{project.title}</h3></Link><p>{project.description}</p><div className="project-meta">{project.technologies.length > 0 && <span>{project.technologies.join(" · ")}</span>}<Link href={`/projetos/${project.slug}`} className="text-link">Ver projeto <span>→</span></Link></div></div></article> }
