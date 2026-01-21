import { Logo } from "@/components/logo"
import { AuthButton } from "@/components/auth-button"
import { BackButton } from "@/components/back-button"

export function DistractionFreeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex-1">
          <BackButton />
        </div>
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex-1 flex justify-end">
          <AuthButton />
        </div>
      </div>
    </header>
  )
}
