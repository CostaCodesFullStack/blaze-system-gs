import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/projetos", "/solucoes", "/sobre", "/contato"].map((path) => ({ url: `https://blazesystem.dev${path}`, lastModified: new Date() })) }
