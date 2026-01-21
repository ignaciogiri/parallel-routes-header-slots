"use client"

import type { Route } from "next"
import { usePathname, useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { ArrowLeft, Search, Share, User, Globe, TriangleAlert } from "lucide-react"

const routes: Array<{ path: Route; left: React.ReactNode; center: React.ReactNode; right: React.ReactNode }> = [
  {
    path: "/" as Route,
    left: <span className="font-bold text-xs">Acme</span>,
    center: <span className="flex items-center gap-1 text-xs"><Search className="h-3 w-3" /> Search</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/about" as Route,
    left: <span className="flex items-center gap-1 text-xs"><ArrowLeft className="h-3 w-3" /> About</span>,
    center: <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded">Badge</span>,
    right: <span className="flex items-center gap-1"><Share className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/editor" as Route,
    left: <ArrowLeft className="h-3 w-3" />,
    center: <span className="font-bold text-xs">Acme</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/settings" as Route,
    left: <span className="font-bold text-xs">Acme</span>,
    center: <span className="flex items-center gap-1 text-xs"><Search className="h-3 w-3" /> Search</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
  {
    path: "/profile" as Route,
    left: <span className="font-bold text-xs">Acme</span>,
    center: <span className="flex items-center gap-1 text-xs"><Search className="h-3 w-3" /> Search</span>,
    right: <span className="flex items-center gap-1"><User className="h-3 w-3" /><Globe className="h-3 w-3" /></span>,
  },
]

export function RouteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations("demo")
  // Remove locale prefix for comparison
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/"

  const handleNavigation = (path: Route) => {
    router.push(path, {
      // @ts-expect-error - experimental option for catch-all routes
      forceOptimisticNavigation: true,
    })
  }

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
            <button
              key={path}
              onClick={() => handleNavigation(path)}
              className={`w-full flex items-center gap-4 p-3 border-b last:border-b-0 hover:bg-muted/50 text-left ${
                pathWithoutLocale === path ? "bg-muted" : ""
              }`}
            >
              <code className="font-mono text-sm w-20">{path}</code>
              <div className="flex-1 flex items-center justify-between px-3 py-2 bg-muted/30 rounded border text-muted-foreground">
                {left}
                {center}
                {right}
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-muted/50 border text-sm space-y-2">
          <p className="font-medium flex items-center gap-2">
            <TriangleAlert className="h-4 w-4" />
            {t("problem.title")}
          </p>
          <p className="text-muted-foreground">{t("problem.description")}</p>
          <p className="text-muted-foreground"><strong>{t.rich("withoutCache.title", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}:</strong> {t.rich("withoutCache.description", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}</p>
          <p className="text-muted-foreground"><strong>{t.rich("withCache.title", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}:</strong> {t.rich("withCache.description", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}</p>
          <p className="text-muted-foreground"><strong>{t.rich("homeException.title", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}:</strong> {t.rich("homeException.description", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}</p>
          <p className="text-muted-foreground"><strong>{t.rich("expected.title", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}:</strong> {t.rich("expected.description", { code: (c) => <code className="bg-muted px-1 rounded text-xs">{c}</code> })}</p>
          <p className="text-xs text-muted-foreground pt-2 border-t">{t("mountIndicator")}</p>
        </div>
      </div>
    </div>
  )
}
