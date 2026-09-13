import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Blaze System™ — Studio digital",
    template: "%s | Blaze System™",
  },
  description:
    "Studio de desenvolvimento de websites, sistemas, bots e soluções digitais.",
  generator: "Blaze System™",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#080808",
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("blaze-theme");var l=t==="light";var r=document.documentElement;r.classList.toggle("light",l);r.classList.toggle("dark",!l);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className="dark"
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
