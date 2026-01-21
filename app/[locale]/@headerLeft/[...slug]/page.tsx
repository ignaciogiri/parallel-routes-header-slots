import Link from "next/link"
import type { Route } from "next"
import { getTranslations } from "next-intl/server"
import { ArrowLeft } from "lucide-react"
import { MountIndicator } from "@/components/mount-indicator"
import { BackButton } from "@/components/back-button"

export default async function HeaderLeftSlot({ params }: { params: Promise<{ slug: string[] }> }) {
  const t = await getTranslations("common")
  const { slug } = await params
  const path = slug.join("/")

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <BackButton />
          <span className="font-semibold">{t("about")}</span>
          <MountIndicator />
        </div>
      )
    case "editor":
      return (
        <div className="flex items-center gap-2">
          <BackButton />
          <MountIndicator />
        </div>
      )
    default:
      return (
        <div className="flex items-center gap-2">
          <Link href={"/" as Route} className="font-bold text-xl">
            Acme
          </Link>
          <MountIndicator />
        </div>
      )
  }
}
