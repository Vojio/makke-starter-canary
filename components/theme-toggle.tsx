"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // While mounting, keep button disabled and show a simpler UI
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        className="hover:bg-card/50"
        size="icon"
        disabled
        aria-label="Loading theme switcher"
      >
        <Sun className="h-5 w-5 opacity-50" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"
  
  return (
    <Button
      variant="ghost"
      className="hover:bg-card/50"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
    >
      <Sun 
        className="h-5 w-5 rotate-0 scale-100 transition-transform duration-150 ease-in dark:-rotate-90 dark:scale-0" 
        aria-hidden="true"
      />
      <Moon 
        className="absolute h-5 w-5 rotate-90 scale-0 transition-transform duration-150 ease-in dark:rotate-0 dark:scale-100" 
        aria-hidden="true"
      />
    </Button>
  )
}
