"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { ArrowLeft, Search, Share, User, Globe } from "lucide-react"

const routes = [
  {
    path: "/",
    left: <span className="font-bold text-xs">Acme</span>,
    center: <span className="flex items-center gap-1 text-xs"><Search className="h-3 w-3" /> Search</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/about",
    left: <span className="flex items-center gap-1 text-xs"><ArrowLeft className="h-3 w-3" /> About</span>,
    center: <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded">Badge</span>,
    right: <span className="flex items-center gap-1"><Share className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/editor",
    left: <ArrowLeft className="h-3 w-3" />,
    center: <span className="font-bold text-xs">Acme</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/settings",
    left: <span className="font-bold text-xs">Acme</span>,
    center: <span className="flex items-center gap-1 text-xs"><Search className="h-3 w-3" /> Search</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/profile",
    left: <span className="font-bold text-xs">Acme</span>,
    center: <span className="flex items-center gap-1 text-xs"><Search className="h-3 w-3" /> Search</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
]

export function RouteNav() {
  const pathname = usePathname()
  const t = useTranslations("demo")
  // Remove locale prefix for comparison
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/"

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        <div>
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {t("current")}: <code className="bg-muted px-1.5 py-0.5 rounded font-mono">{pathname}</code>
          </p>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="flex items-center gap-4 p-3 bg-muted/50 text-xs text-muted-foreground font-medium border-b">
            <span className="w-20">{t("route")}</span>
            <span className="flex-1 text-center">{t("expectedHeader")}</span>
          </div>
          {routes.map(({ path, left, center, right }) => (
            <Link
              key={path}
              href={path}
              className={`flex items-center gap-4 p-3 border-b last:border-b-0 hover:bg-muted/50 ${
                pathWithoutLocale === path ? "bg-muted" : ""
              }`}
            >
              <code className="font-mono text-sm w-20">{path}</code>
              <div className="flex-1 flex items-center justify-between px-3 py-2 bg-muted/30 rounded border text-muted-foreground">
                {left}
                {center}
                {right}
              </div>
            </Link>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-sm space-y-2">
          <p className="font-semibold text-amber-700">⚠️ {t("problem.title")}</p>
          <p className="text-muted-foreground">
            {t.rich("problem.description", {
              home: (chunks) => <code className="bg-muted px-1 rounded">{chunks}</code>,
              settings: (chunks) => <code className="bg-muted px-1 rounded">{chunks}</code>,
              profile: (chunks) => <code className="bg-muted px-1 rounded">{chunks}</code>,
              handler: (chunks) => <code className="bg-muted px-1 rounded">{chunks}</code>,
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
