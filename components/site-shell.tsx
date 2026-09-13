"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"

const links = [
  ["Projetos", "/projetos"],
  ["Soluções", "/solucoes"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [light, setLight] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("blaze-theme")
    const isLight = saved === "light"
    setLight(isLight)
    document.documentElement.classList.toggle("light", isLight)
    document.documentElement.classList.toggle("dark", !isLight)
  }, [])

  function toggleTheme() {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle("light", next)
    document.documentElement.classList.toggle("dark", !next)
    localStorage.setItem("blaze-theme", next ? "light" : "dark")
  }

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegação principal">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">B</span> Blaze System
          <span className="trademark">™</span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="icon-button"
            type="button"
            onClick={toggleTheme}
            aria-label={light ? "Ativar modo escuro" : "Ativar modo claro"}
          >
            {light ? <Moon /> : <Sun />}
          </button>
          <Link href="/contato" className="button button-small">
            Contato
          </Link>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="mobile-menu" id="mobile-menu">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link href="/contato" className="button" onClick={() => setOpen(false)}>
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand">
            <span className="brand-mark">B</span> Blaze System
            <span className="trademark">™</span>
          </Link>
          <p>
            Profissionalismo não é diferencial.
            <br />
            É padrão.
          </p>
        </div>
        <div className="footer-links">
          <span>Explorar</span>
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Blaze System™</span>
        <span>Studio de desenvolvimento digital</span>
      </div>
    </footer>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
