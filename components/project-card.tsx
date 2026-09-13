import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/data/projects";

export function ProjectCard({
  project,
  priority = false,
  headingLevel = "h2",
}: {
  project: Project;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Title = headingLevel;

  return (
    <article className="project-card">
      <Link href={`/projetos/${project.slug}`} className="project-image">
        <Image
          src={project.image}
          alt={`Capa do projeto ${project.title}`}
          width={project.width}
          height={project.height}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="project-card-image"
        />

        <span className="image-arrow" aria-hidden="true">
          ↗
        </span>
      </Link>

      <div className="project-card-body">
        <div className="eyebrow">
          <span>{project.category}</span>
          <i>·</i>
          <span>{project.type}</span>
        </div>

        <Link href={`/projetos/${project.slug}`}>
          <Title>{project.title}</Title>
        </Link>

        <p>{project.description}</p>

        <div className="project-meta">
          {project.technologies.length > 0 && (
            <span>{project.technologies.join(" · ")}</span>
          )}

          <Link href={`/projetos/${project.slug}`} className="text-link">
            Ver projeto <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
