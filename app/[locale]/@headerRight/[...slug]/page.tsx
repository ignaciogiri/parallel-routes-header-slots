"use client"

import { useTranslations } from "next-intl"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Share } from "lucide-react"
import { MountIndicator } from "@/components/mount-indicator"

export default function HeaderRightSlot() {
  const params = useParams<{ slug: string[] }>()
  const t = useTranslations("common")
  const path = params.slug?.join("/") ?? ""

  switch (path) {
    case "about":
    case "profile":
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
