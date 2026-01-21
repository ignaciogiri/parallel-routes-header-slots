"use client"

import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { SearchBox } from "@/components/search-box"
import { AuthButton } from "@/components/auth-button"
import { BackButton } from "@/components/back-button"

const DISTRACTION_FREE_ROUTES = ["/editor", "/focus", "/write"]

export function AdaptiveHeader() {
  const pathname = usePathname()
  const isDistractionFree = DISTRACTION_FREE_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {isDistractionFree ? (
          <>
            <div className="flex-1">
              <BackButton />
            </div>
            <div className="flex justify-center">
              <Logo />
            </div>
            <div className="flex-1 flex justify-end">
              <AuthButton />
            </div>
          </>
        ) : (
          <>
            <Logo />
            <div className="flex-1 flex justify-center px-4">
              <SearchBox />
            </div>
            <AuthButton />
          </>
        )}
      </div>
    </header>
  )
}
