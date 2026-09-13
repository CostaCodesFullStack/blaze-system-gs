import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Blaze System é um studio voltado ao desenvolvimento de soluções digitais, produtos e experiências personalizadas.",
}

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="container page about-page">
        <div className="page-intro">
          <div className="eyebrow accent">SOBRE A BLAZE</div>
          <h1>
            Ideias bem construídas
            <br />
            <em>mudam o jogo.</em>
          </h1>
        </div>
        <div className="about-content">
          <div>
            <p className="lead">
              A Blaze System é um studio voltado ao desenvolvimento de soluções digitais, produtos e
              experiências personalizadas.
            </p>
            <p>
              Nosso objetivo é transformar ideias em projetos funcionais, modernos e profissionais,
              combinando tecnologia, design e atenção aos detalhes.
            </p>
          </div>
          <div className="quote">
            “
            <br />
            <strong>
              Profissionalismo não é diferencial.
              <br />
              É padrão.
            </strong>
            ”
          </div>
        </div>
      </main>
    </SiteShell>
  )
}
