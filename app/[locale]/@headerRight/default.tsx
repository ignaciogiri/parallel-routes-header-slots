"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { MountIndicator } from "@/components/mount-indicator"

export default function HeaderRightDefault() {
  const t = useTranslations("common")

  return (
    <div className="flex items-center gap-2">
      <MountIndicator />
      <Button variant="ghost" size="sm">{t("signIn")}</Button>
    </div>
  )
}
