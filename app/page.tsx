import Link from "next/link";
import { ArrowUpRight, Bot, Cog, Layers, Monitor } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SiteShell } from "@/components/site-shell";
import { featuredProjects } from "@/src/data/projects";

const solutions = [
  {
    icon: Monitor,
    title: "Websites",
    text: "Interfaces e experiências digitais modernas, responsivas e orientadas a objetivos.",
  },
  {
    icon: Layers,
    title: "Sistemas",
    text: "Aplicações personalizadas desenvolvidas de acordo com necessidades específicas.",
  },
  {
    icon: Bot,
    title: "Discord Bots",
    text: "Bots e sistemas para automação, gerenciamento e organização de comunidades Discord.",
  },
  {
    icon: Cog,
    title: "Automações",
    text: "Processos e integrações desenvolvidos para reduzir tarefas repetitivas e melhorar operações.",
  },
];

export default function Page() {
  return (
    <SiteShell>
      <main>
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow accent">
              <span className="dot" /> BLAZE SYSTEM™
            </div>
            <h1>
              Profissionalismo não é diferencial.
              <br />
              <em>É padrão.</em>
            </h1>
            <p>
              Desenvolvemos produtos e soluções digitais que transformam ideias
              em experiências funcionais, eficientes e prontas para o mundo
              real.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/projetos">
                Ver projetos <ArrowUpRight />
              </Link>
              <Link className="button button-ghost" href="/sobre">
                Conhecer a Blaze <span>→</span>
              </Link>
            </div>
          </div>
          <div className="hero-detail" aria-hidden="true">
            <span>01</span>
            <div className="detail-line" />
            <span>04</span>
          </div>
        </section>

        <section className="section container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">SELEÇÃO DE TRABALHOS</div>
              <h2>Projetos em destaque</h2>
            </div>
            <p>
              Conheça alguns dos produtos e projetos desenvolvidos pela Blaze
              System.
            </p>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                headingLevel="h3"
                priority={index === 0}
              />
            ))}
          </div>
          <Link href="/projetos" className="section-link">
            Ver todos os projetos <span>→</span>
          </Link>
        </section>

        <section className="section section-border container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">COMO PODEMOS AJUDAR</div>
              <h2>
                Soluções digitais
                <br />
                com propósito.
              </h2>
            </div>
            <p>
              Do conceito à entrega, criamos produtos digitais que resolvem
              problemas reais.
            </p>
          </div>
          <div className="solution-grid">
            {solutions.map(({ icon: Icon, title, text }, index) => (
              <div className="solution-card" key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-index" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="cta container">
          <div className="eyebrow accent">PRÓXIMO PROJETO</div>
          <h2>
            Tem uma ideia?
            <br />
            <em>Vamos construir.</em>
          </h2>
          <Link href="/contato" className="button">
            Ver contato <ArrowUpRight />
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
