"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function EditorPage() {
  const [content, setContent] = useState("")

  return (
    <div className="container px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Editor</h1>
          <Button>Save</Button>
        </div>
        
        <div className="p-4 rounded-lg bg-muted">
          <p className="text-sm text-muted-foreground">
            This page uses the <strong>(distraction-free)</strong> route group layout with a minimal header: Back arrow (left) | Logo (center) | Auth (right)
          </p>
        </div>

        <Textarea
          placeholder="Start writing..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[400px] resize-none text-lg"
        />

        <p className="text-sm text-muted-foreground text-center">
          {content.length} characters
        </p>
      </div>
    </div>
  )
}
