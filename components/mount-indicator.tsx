"use client"

import { useLayoutEffect, useRef, useState } from "react"

export function MountIndicator() {
  const mountTimeRef = useRef<number | null>(null)
  const [, forceUpdate] = useState(0)

  // useLayoutEffect runs synchronously after DOM mutations, before paint
  // This is the most accurate "component is in the DOM" timestamp
  useLayoutEffect(() => {
    if (mountTimeRef.current === null) {
      mountTimeRef.current = performance.now()
    }
  }, [])

  useLayoutEffect(() => {
    const interval = setInterval(() => forceUpdate((n) => n + 1), 16) // ~60fps for smoother updates
    return () => clearInterval(interval)
  }, [])

  const elapsed = mountTimeRef.current !== null
    ? ((performance.now() - mountTimeRef.current) / 1000).toFixed(3)
    : "0.000"

  return (
    <span className="text-xs font-mono text-purple-600 tabular-nums bg-purple-100 px-1.5 py-0.5 rounded">
      {elapsed}s
    </span>
  )
}
