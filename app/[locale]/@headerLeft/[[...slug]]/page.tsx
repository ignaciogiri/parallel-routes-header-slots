"use client"

import { use } from "react"
import Link from "next/link"
import type { Route } from "next"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { ArrowLeft } from "lucide-react"

export default function HeaderLeftSlot({ params }: { params: Promise<{ slug?: string[] }> }) {
  const router = useRouter()
  const t = useTranslations("common")
  const { slug } = use(params)
  const path = slug?.join("/") ?? ""

  switch (path) {
    case "about":
      return (
        <div className="flex items-center gap-2">
          <button onClick={() => router.back()} className="p-2 hover:bg-muted rounded-md">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="font-semibold">{t("about")}</span>
        </div>
      )
    case "editor":
      return (
        <button onClick={() => router.back()} className="p-2 hover:bg-muted rounded-md">
          <ArrowLeft className="h-5 w-5" />
        </button>
      )
    default:
      return (
        <Link href={"/" as Route} className="font-bold text-xl">
          Acme
        </Link>
      )
  }
}
