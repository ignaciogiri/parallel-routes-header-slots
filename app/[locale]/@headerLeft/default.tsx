import Link from "next/link"
import type { Route } from "next"
import { MountIndicator } from "@/components/mount-indicator"

export default function HeaderLeftDefault() {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/" as Route} className="font-bold text-xl">
        Acme
      </Link>
      <MountIndicator />
    </div>
  )
}
