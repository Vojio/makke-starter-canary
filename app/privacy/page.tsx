"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState, memo } from "react"

// Import Lucide React Icons
import { 
  Shield,
  ShieldAlert,
  Lock,
  FileCheck,
  Info,
  AlertCircle,
  Menu,
  X
} from "lucide-react"

export default function Page() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // For hydration
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/10">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="flex items-center justify-between py-4">
            {/* Logo - Always visible */}
            <Link href="/" className="flex items-center gap-2 group p-2 rounded-md hover:bg-card/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="/RepoPromptLogo_NoBG.png"
                  alt="Repo Prompt"
                  width={32}
                  height={32}
                  className="drop-shadow-xs filter"
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
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
            
            {/* Mobile Menu Toggle */}
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
          
          {/* Mobile Navigation */}
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

      <main className="flex-grow">
        <div className="px-4 pt-16 md:pt-24 pb-16">
          <div className="mx-auto max-w-[900px] text-left">
            {mounted && (
              <div className="mb-16 max-w-3xl mx-auto">
                <div className="flex items-center gap-4">
                  <Shield size={32} className="text-orange-300" />
                  <h1 className="text-4xl font-semibold tracking-tight">
                    Privacy Policy
                  </h1>
                </div>
              </div>
            )}

            {/* Overview Section */}
            <Section
              id="overview"
              className="mb-12 scroll-m-20"
              badgeText="Overview"
              badgeVariant="secondary"
              title="Our Privacy Commitment"
            >
              <Card className="p-6 border-border/50">
                <p className="text-muted-foreground">
                  Repo Prompt is designed with privacy as a core principle. This privacy policy applies to versions of the application released on or after February 1, 2025. We do not collect or store your code, and we minimize data collection to the bare essentials for analytics and service improvements.
                </p>
              </Card>
            </Section>

            {/* Data Collection Section */}
            <Section
              id="data-collection"
              className="mb-12 scroll-m-20"
              badgeText="Data Collection"
              badgeVariant="secondary"
              title="Minimal Data Collection"
            >
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <ShieldAlert size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    We collect minimal, anonymous usage data through PostHog&apos;s default setup to track daily active users. No personal data, file contents, or identifiable information is collected or stored.
                  </p>
                </div>
              </Card>
            </Section>

            {/* Code Privacy Section */}
            <Section
              id="code-privacy"
              className="mb-12 scroll-m-20"
              badgeText="Code Privacy"
              badgeVariant="secondary"
              title="Your Code Stays Private"
            >
              <Card className="p-6 border-border/50">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Lock size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      No code or files you open in Repo Prompt are transmitted to or stored on our servers.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <FileCheck size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      All local processing: Codemap analysis and other core functionalities run entirely on your machine.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <Shield size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      API integrations are opt-in: If you choose to use external APIs, your queries are sent directly to your configured provider. We do not intermediate or store these requests.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <Lock size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Clipboard features operate locally, ensuring no unintended data transmission.
                    </p>
                  </li>
                </ul>
                <div className="mt-2 p-4 bg-white dark:bg-background rounded-md border border-border/50">
                  <p className="text-sm text-muted-foreground">
                    While we take privacy seriously, we are not responsible for data handling by third-party API providers. Please review their privacy policies separately.
                  </p>
                </div>
              </Card>
            </Section>

            {/* Future Updates Section */}
            <Section
              id="future-updates"
              className="mb-12 scroll-m-20"
              badgeText="Future Updates"
              badgeVariant="secondary"
              title="Policy Updates"
            >
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <Info size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    As we transition out of beta and introduce new features or pricing models, this privacy policy may be updated to reflect any changes in data collection or processing. We remain committed to transparency.
                  </p>
                </div>
              </Card>
            </Section>

            {/* TestFlight Disclaimer */}
            <Section
              id="testflight"
              className="mb-12 scroll-m-20"
              badgeText="TestFlight"
              badgeVariant="secondary"
              title="Apple TestFlight Disclaimer"
            >
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <AlertCircle size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    If you are using Repo Prompt via Apple TestFlight, note that Apple may collect additional data under their own policies. We do not control the collection of this data. Please refer to Apple&apos;s TestFlight privacy policy for details.
                  </p>
                </div>
              </Card>
            </Section>
            
            <div className="flex justify-center mt-16">
              <Button variant="default" size="lg" className="rounded-full" asChild>
                <Link href="/">
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-foreground/10 mt-auto">
        <div className="py-12">
          <div className="mx-auto max-w-[1200px] px-4">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Repo Prompt. All rights reserved.
                </p>
              </div>
              <div className="flex justify-start sm:justify-end gap-6">
                <Link 
                  href="mailto:contact@repoprompt.com" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Reusable section component without animations
const Section = memo(({
  id,
  className,
  badgeText,
  badgeVariant,
  title,
  subtitle,
  children
}: {
  id: string,
  className: string,
  badgeText: string,
  badgeVariant: "secondary",
  title: string,
  subtitle?: string,
  children: React.ReactNode
}) => {
  return (
    <section 
      id={id} 
      className={className}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-left">
          <Badge variant={badgeVariant} className="mb-4">
            {badgeText}
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
})

Section.displayName = "Section"

