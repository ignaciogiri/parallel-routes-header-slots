import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">A</span>
      </div>
      <span className="font-semibold text-lg">Acme</span>
    </Link>
  )
}
