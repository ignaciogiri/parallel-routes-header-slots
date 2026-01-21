"use client"

import { use } from "react"
import Link from "next/link"
import type { Route } from "next"
import { useTranslations } from "next-intl"
import { SearchBox } from "@/components/search-box"

export default function HeaderCenterSlot({ params }: { params: Promise<{ slug?: string[] }> }) {
  const t = useTranslations("header")
  const { slug } = use(params)
  const path = slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-muted rounded text-xs font-medium">{t("aboutPage")}</span>
          <span className="text-sm text-muted-foreground">{t("customCenterSlot")}</span>
        </div>
      )
    case "editor":
      return (
        <Link href={"/" as Route} className="font-bold text-xl">
          Acme
        </Link>
      )
    default:
      return <SearchBox />
  }
}
