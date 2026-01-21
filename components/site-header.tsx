import { Logo } from "@/components/logo"
import { SearchBox } from "@/components/search-box"
import { AuthButton } from "@/components/auth-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4">
        <Logo />
        <SearchBox />
        <AuthButton />
      </div>
    </header>
  )
}
