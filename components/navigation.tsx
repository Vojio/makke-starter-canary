"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useCallback } from "react"
import { ThemeToggle } from "./theme-toggle"
import { socialLinks } from "@/app/content"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  return (
    <nav 
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/10"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-4 w-full">
        <div className="flex items-center justify-between py-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 group p-2 rounded-md hover:bg-card/50 transition-colors duration-150 ease"
            aria-label="Return to homepage"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/RepoPromptLogo.png"
                alt=""
                width={32}
                height={32}
                className="drop-shadow-xs group-hover:drop-shadow-lg transition-all duration-150 ease"
                aria-hidden="true"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="https://testflight.apple.com/join/nBWkUJD6"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 ease"
            >
              Mac Download
            </Link>
            {socialLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 ease"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-md hover:bg-card/60 transition-colors duration-150 ease"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 px-2 border-t border-border/10 animate-in fade-in slide-in-from-top-5 duration-200"
            role="menu"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="https://testflight.apple.com/join/nBWkUJD6"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 ease px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
                role="menuitem"
              >
                Mac Download
              </Link>
              {socialLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 ease px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}