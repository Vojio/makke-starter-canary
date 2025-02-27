"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/10">
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 group p-2 rounded-md hover:bg-card/50 transition-all duration-300">
            <div className="relative overflow-hidden">
              <Image
                src="/RepoPromptLogo.png"
                alt="Repo Prompt"
                width={32}
                height={32}
                className="drop-shadow-xs filter"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="https://testflight.apple.com/join/nBWkUJD6"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Mac Download
            </Link>
            <Link
              href="https://discord.com/invite/NtbFDAJPGM"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Join Discord
            </Link>
            <Link
              href="https://ko-fi.com/repoprompt"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Donate
            </Link>
            <ThemeToggle />
          </div>
          
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-md hover:bg-card/60 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 border-t border-border/10 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-4">
              <Link
                href="https://testflight.apple.com/join/nBWkUJD6"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mac Download
              </Link>
              <Link
                href="https://discord.com/invite/NtbFDAJPGM"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Discord
              </Link>
              <Link
                href="https://ko-fi.com/repoprompt"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}