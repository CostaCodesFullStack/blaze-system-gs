import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { getProject, projects, relatedProjects } from "@/src/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Blaze System™`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = relatedProjects(project);

  return (
    <SiteShell>
      <main className="container project-detail">
        <Link href="/projetos" className="back-link">
          <ArrowLeft /> Todos os projetos
        </Link>
        <div className="detail-heading">
          <div className="eyebrow accent">
            {project.category} <i>·</i> {project.type}
          </div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div className="detail-image">
          <Image
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            width={project.width}
            height={project.height}
            priority
            sizes="100vw"
            className="detail-image-media"
          />
        </div>
        <div className="detail-columns">
          <div>
            <div className="eyebrow">SOBRE O PROJETO</div>
            <h2>
              Sobre este
              <br />
              projeto.
            </h2>
          </div>
          <aside>
            <div className="detail-row">
              <span>Status</span>
              <strong>{project.status || "Projeto"}</strong>
            </div>
            {project.technologies.length > 0 && (
              <div className="detail-row">
                <span>Tecnologias</span>
                <strong>{project.technologies.join(" · ")}</strong>
              </div>
            )}
            {(project.demoUrl ||
              project.presentationUrl ||
              project.repositoryUrl) && (
              <div className="detail-links">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar projeto <ArrowUpRight />
                  </a>
                )}
                {project.repositoryUrl && (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositório <ArrowUpRight />
                  </a>
                )}
                {project.presentationUrl && (
                  <a
                    href={project.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver apresentação <ArrowUpRight />
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>
        {related.length > 0 && (
          <section className="related">
            <div className="eyebrow">CONTINUE EXPLORANDO</div>
            <h2>Projetos relacionados</h2>
            <div className="project-grid">
              {related.map((item) => (
                <ProjectCard key={item.slug} project={item} headingLevel="h3" />
              ))}
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
