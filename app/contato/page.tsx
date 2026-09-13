import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Blaze System pelo nosso servidor oficial no Discord.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="container page contact-page">
        <div className="page-intro">
          <div className="eyebrow accent">FALE COM A BLAZE</div>
          <h1>
            Vamos construir
            <br />
            <em>algo?</em>
          </h1>
          <p>
            Tem um projeto, ideia ou necessidade? Entre em contato com a Blaze
            System pelo nosso servidor oficial no Discord.
          </p>
        </div>

        <div className="contact-card">
          <div>
            <div className="eyebrow">DISCORD OFICIAL</div>
            <h2>Vamos conversar.</h2>
            <p>
              Entre no servidor oficial da Blaze System para conhecer nosso
              trabalho, tirar dúvidas ou conversar sobre um novo projeto.
            </p>
          </div>

          <a
            href="https://discord.gg/RXDEBXj4Tr"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Entrar no Discord ↗
          </a>
        </div>

        <div className="contact-card">
          <div>
            <div className="eyebrow">EMAIL</div>
            <h2>Vamos conversar.</h2>
            <p>
              Prefere enviar um e-mail? Entre em contato com a Blaze System pelo
              endereço de e-mail abaixo.
            </p>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cauadevcosta@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            Enviar E-mail ↗
          </a>
        </div>
      </main>
    </SiteShell>
  );
}
