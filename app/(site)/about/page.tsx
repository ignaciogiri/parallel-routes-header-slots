export default function AboutPage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-muted-foreground">
          This page uses the <strong>(site)</strong> route group layout with the full header including logo, search box, and authentication.
        </p>
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm">
            Notice how the header has: Logo (left) | Search (center) | Auth (right)
          </p>
        </div>
      </div>
    </div>
  )
}
