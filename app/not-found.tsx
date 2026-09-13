import Link from "next/link"
export default function NotFound() { return <main className="not-found"><div className="eyebrow accent">ERRO 404</div><h1>Página não encontrada.</h1><p>O endereço que você acessou não existe ou foi movido.</p><Link href="/" className="button">Voltar para o início <span>→</span></Link></main> }
