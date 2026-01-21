import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container px-4 py-12">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Acme
        </h1>
        <p className="text-lg text-muted-foreground">
          This is the main site layout with full navigation, search, and all features.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Site Layout</CardTitle>
              <CardDescription>
                Full navigation experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Logo on the left, search in the middle, auth on the right.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/about">View About Page</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distraction-Free Layout</CardTitle>
              <CardDescription>
                Focused editing experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Back arrow on the left, centered logo, auth on the right.
              </p>
              <Button asChild className="w-full">
                <Link href="/editor">Open Editor</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
