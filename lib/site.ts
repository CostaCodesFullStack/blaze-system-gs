/** Production site origin. Prefer NEXT_PUBLIC_SITE_URL; fallback keeps the existing project domain. */
export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")
  return "https://blazesystem.dev"
}
