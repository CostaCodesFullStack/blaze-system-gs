import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"
export const metadata: Metadata = { title: { default: "Blaze System™ — Studio digital", template: "%s | Blaze System™" }, description: "Studio de desenvolvimento de websites, sistemas, bots e soluções digitais.", generator: "Blaze System™" }
export const viewport: Viewport = { colorScheme: "dark light", themeColor: "#080808" }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" suppressHydrationWarning><body>{children}{process.env.NODE_ENV === "production" && <Analytics />}</body></html> }
