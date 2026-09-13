import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Blaze System é um studio de desenvolvimento digital focado em transformar ideias em produtos, sistemas e experiências que fazem sentido na prática.",
};

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
              A Blaze System é um studio de desenvolvimento digital focado em
              transformar ideias em produtos, sistemas e experiências que fazem
              sentido na prática.
            </p>
            <p>
              Trabalhamos com tecnologia, design e atenção aos detalhes para
              criar soluções funcionais, bem executadas e preparadas para o
              mundo real.
            </p>
          </div>
          <div className="quote">
            “
            <br />
            <strong>
              Profissionalismo não é diferencial.
              <br />É padrão.
            </strong>
            ”
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
