"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="p-2 hover:bg-muted rounded-md">
      <ArrowLeft className="h-5 w-5" />
    </button>
  )
}
