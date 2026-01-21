"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { MountIndicator } from "./mount-indicator"

export function SearchBox() {
  const t = useTranslations("search.suggestions")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [inputValue, setInputValue] = useState("")

  const suggestions = [
    t("items"),
    t("vintage"),
    t("electronics"),
    t("furniture"),
  ]

  useEffect(() => {
    if (inputValue) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % suggestions.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [inputValue, suggestions.length])

  const showPlaceholder = !inputValue

  return (
    <div className="relative w-full max-w-md flex items-center gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
      <Input
        placeholder=""
        className="pl-10 w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

        {showPlaceholder && (
          <div className="pointer-events-none absolute inset-y-0 left-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground text-sm"
              >
                {suggestions[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        )}
      </div>
      <MountIndicator />
    </div>
  )
}
