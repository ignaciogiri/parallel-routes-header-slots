import { getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { Share } from "lucide-react"
import { MountIndicator } from "@/components/mount-indicator"

export default async function HeaderRightSlot({ params }: { params: Promise<{ slug: string[] }> }) {
  const t = await getTranslations("common")
  const { slug } = await params
  const path = slug.join("/")

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <MountIndicator />
          <Button variant="outline" size="sm">
            <Share className="h-4 w-4 mr-2" />
            {t("share")}
          </Button>
        </div>
      )
    default:
      return (
        <div className="flex items-center gap-2">
          <MountIndicator />
          <Button variant="ghost" size="sm">{t("signIn")}</Button>
        </div>
      )
  }
}
