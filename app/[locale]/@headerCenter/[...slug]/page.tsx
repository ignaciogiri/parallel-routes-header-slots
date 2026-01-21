import Link from "next/link"
import type { Route } from "next"
import { getTranslations } from "next-intl/server"
import { SearchBox } from "@/components/search-box"
import { MountIndicator } from "@/components/mount-indicator"

export default async function HeaderCenterSlot({ params }: { params: Promise<{ slug: string[] }> }) {
  const t = await getTranslations("header")
  const { slug } = await params
  const path = slug.join("/")

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-muted rounded text-xs font-medium">{t("aboutPage")}</span>
          <span className="text-sm text-muted-foreground">{t("customCenterSlot")}</span>
          <MountIndicator />
        </div>
      )
    case "editor":
      return (
        <div className="flex items-center gap-2">
          <Link href={"/" as Route} className="font-bold text-xl">
            Acme
          </Link>
          <MountIndicator />
        </div>
      )
    default:
      return <SearchBox />
  }
}
