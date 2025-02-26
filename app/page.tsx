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
  MessageCircle,
  Coffee,
  Folder,
  AlertTriangle,
  Code as CodeIcon,
  Search,
  FileText,
  Map as MapIcon,
  Cpu,
  HelpCircle,
  Edit3,
  CheckSquare,
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
            <Link href="#" className="flex items-center gap-2 group px-3 py-1.5 rounded-md hover:bg-card/60 transition-all duration-300">
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
        <div className="px-4 pt-16 md:pt-24">
          <div className="mx-auto max-w-[900px] text-left">
            {mounted && (
              <div className="mb-16">
                <div className="group relative mx-0 mb-8 w-[140px] cursor-pointer">  
                  <Image
                    src="/RepoPromptLogo_NoBG.png"
                    alt="Repo Prompt Logo"
                    priority
                    width={140}
                    height={140}
                    className="drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                  />
                  <div 
                    className="absolute inset-0 bg-primary/5 rounded-full -z-10 filter blur-lg opacity-70 group-hover:opacity-90 group-hover:blur-xl group-hover:bg-primary/10 transition-all duration-300"
                  ></div>
                </div>
                
                  <Badge variant="outline" className="bg-blue-100 text-blue-600 border-blue-500/20 mr-2 mb-4">
                  macOS Native
                  </Badge>
                <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                  Repo Prompt
                </h1>
                
                <p className="mb-2 text-xl text-medium text-muted-foreground">
                  Code smarter with AI—no more messy copy-pasting.
                </p>
                <p className="mb-8 text-lg text-muted-foreground">
                  Let Repo Prompt structure your prompts and apply AI changes for you.
                </p>
                
                <div className="flex flex-wrap justify-start gap-4">
                  <div className="flex flex-wrap gap-3 justify-start">
                    <div>
                      <Button variant="default" size="lg" className="rounded-full hover:shadow-md" asChild>
                        <Link href="https://testflight.apple.com/join/nBWkUJD6">
                          Download for Mac
                        </Link>
                      </Button>
                    </div>
                    <div>
                      <Button variant="outline" size="lg" className="rounded-full bg-card hover:bg-card/80 hover:shadow-md" asChild>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftCSyLtD1Zl-80dHfXmzczkWvnIPPjKZ-melbXBd4yEInBAw/viewform">
                          Windows/Linux Waitlist
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-start">
                    <div>
                      <Button size="lg" className="rounded-full bg-violet-500 text-purple-50 hover:bg-violet-500/80 hover:shadow-md" asChild>
                        <Link href="https://discord.com/invite/NtbFDAJPGM">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Join Discord
                        </Link>
                      </Button>
                    </div>
                    <div>
                      <Button size="lg" className="rounded-full bg-orange-400 text-orange-50 hover:bg-orange-400/80 hover:shadow-md" asChild>
                        <Link href="https://ko-fi.com/repoprompt">
                          <Coffee className="mr-2 h-4 w-4" />
                          Donate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Why Repo Prompt Section */}
            <Section
              id="why-repo-prompt"
              className="mb-24 scroll-m-20"
              badgeText="The Problem"
              badgeVariant="orange"
              title="Why Repo Prompt?"
            >
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  {
                    title: "Zipping your whole repo?",
                    description: "Too much bloat—send only what's needed"
                  },
                  {
                    title: "LLM underperforming?",
                    description: "Cut the noise for sharper answers"
                  },
                  {
                    title: "Better AI coding?",
                    description: "Select just the files that matter"
                  }
                ].map((feature, i) => (
                  <Card 
                    key={i} 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border transition-all duration-300"
                  >
                    <div className="mb-2">
                      {i === 0 ? <Folder size={24} className="text-orange-500" /> : i === 1 ? <AlertTriangle size={24} className="text-orange-500" /> : <CodeIcon size={24} className="text-orange-500" />}
                    </div>
                    <div className="border-l-2 border-primary/50 pl-4 group-hover:border-primary transition-colors duration-300">
                      <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            {/* Features Section */}
            <div className="mb-24 scroll-m-20" id="features">
              <div className="mb-8 text-left">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-4">
                  Key Features
                </Badge>
                <h2 className="mb-3 text-3xl font-semibold">
                  How It Works
                </h2>
              </div>
              
              <div className="bg-card/50 py-10 px-6 -mx-4 rounded-lg">
                <div className="mx-auto max-w-3xl">
                  <div className="grid gap-6">
                    {[
                      {
                        title: "Find & Select Files",
                        description: "Manually pick files with advanced filtering"
                      },
                      {
                        title: "Optimized XML Output",
                        description: "Structured file tree and meta-prompts"
                      },
                      {
                        title: "Codemap Extraction",
                        description: "Extracts API definitions and references"
                      },
                      {
                        title: "Token Usage Estimation",
                        description: "Know your context size before sending"
                      }
                    ].map((feature, i) => (
                      <Card 
                        key={i}
                        className="p-6 group border-border/50 hover:border-border transition-all duration-300"
                      >
                        <div className="mb-2">
                          {i === 0 ? <Search size={24} className="text-blue-500" /> : i === 1 ? <FileText size={24} className="text-blue-500" /> : i === 2 ? <MapIcon size={24} className="text-blue-500" /> : <Cpu size={24} className="text-blue-500" />}
                        </div>
                        <h3 className="text-lg font-medium mb-1 hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Section */}
            <Section
              id="integrations"
              className="mb-24 scroll-m-20"
              badgeText="Integrations"
              badgeVariant="purple"
              title="Works with Any Model"
              subtitle="Supports OpenAI, Anthropic, DeepSeek, Gemini, Azure, and local models—keeping your workflow private
                    and offline when needed"
            >
              <div className="mx-auto max-w-3xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border transition-all duration-300"
                  >
                    <h3 className="mb-1 text-lg font-medium hover:text-primary transition-colors duration-300">
                      Clipboard Integration
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Seamlessly copy structured prompts as XML to use in any AI chat app—your data stays local
                    </p>
                  </Card>
                  <Card 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border transition-all duration-300"
                  >
                    <h3 className="mb-1 text-lg font-medium hover:text-primary transition-colors duration-300">
                      Precise XML Parsing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Runs locally to format LLM responses into XML, supporting private codebases
                    </p>
                  </Card>
                </div>
              </div>
            </Section>

            {/* Workflow Section */}
            <div className="mb-24 scroll-m-20" id="workflow">
              <div className="mb-8 text-left">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 mb-4">
                  Workflow
                </Badge>
                <h2 className="mb-3 text-3xl font-semibold">
                  Your Workflow
                </h2>
              </div>
              
              <div className="bg-card/50 py-10 px-6 -mx-4 rounded-lg">
                <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
                  {[
                    {
                      title: "Compose",
                      description:
                        "Select files and folders for your prompt's context. Use saved prompts and a repository map to guide the AI's output"
                    },
                    {
                      title: "Chat",
                      description:
                        "Iterate on your files, or learn about how they work, with full control over the context"
                    },
                    {
                      title: "Review",
                      description: "Review all AI made changes, file by file, and approve changes, piecemeal or in bulk"
                    },
                  ].map((step, i) => (
                    <Card 
                      key={i} 
                      className="p-6 text-left group relative overflow-hidden border-border/50 hover:border-border transition-all duration-300"
                    >
                      <div className="mb-2">
                        {i === 0 ? <Edit3 size={24} className="text-green-600" /> : i === 1 ? <MessageCircle size={24} className="text-green-600" /> : <CheckSquare size={24} className="text-green-600" />}
                      </div>
                      <h3 className="mb-1 text-lg font-medium hover:text-green-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Privacy Section */}
            <Section
              id="privacy"
              className="mb-24 scroll-m-20"
              badgeText="Privacy First"
              badgeVariant="orange"
              title="Your Data, Your Control"
              subtitle="Connect to AI providers without intermediaries. Keep your workflow private and offline when needed."
            >
              <div className="mx-auto max-w-3xl">
                <Card 
                  className="p-6 backdrop-blur-sm bg-violet-100 dark:bg-violet-500/20 border-violet-500/20 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "100% local", desc: "Local processing" },
                    { label: "Private", desc: "No data collection" },
                    { label: "Flexible", desc: "Works offline" }
                  ].map((item, i) => (
                    <div key={i} className="text-left">
                    <div className="font-medium mb-1 text-violet-600 dark:text-violet-400">{item.label}</div>
                    <div className="text-sm text-violet-950 dark:text-violet-200">{item.desc}</div>
                    </div>
                  ))}
                  </div>
                </Card>
              </div>
            </Section>
            
            {/* FAQ Section */}
            <Section
              id="faq"
              className="mb-24 scroll-m-20"
              badgeText="FAQ"
              badgeVariant="blue"
              title="How It Makes Coding Easier"
            >
              <div className="mx-auto max-w-3xl">
                <div>
                  {[
                    {
                      question: "When you use Claude or ChatGPT for code, how do you put your files into context?",
                      answer: "Repo Prompt makes it trivial to find and pick files, then hit copy and get an optimized prompt you can paste into a chat box."
                    },
                    {
                      question: "So this does logical normalization of code into some kind of prompt syntax?",
                      answer: "Yes, it performs logical normalization of code into a structured prompt syntax. It's much faster to use the file picker to find and select files."
                    },
                    {
                      question: "How does it compare to other tools?",
                      answer: "Unlike tools that run RAG on your prompt when it's over 32k tokens, with Repo Prompt you get full context with ordering, plus code maps & file tree auto included."
                    }
                  ].map((faq, i) => (
                    <Card 
                      key={i} 
                      className={`p-6 hover:shadow-md border-border/50 hover:border-border transition-all duration-300 ${i < 2 ? 'mb-4' : ''}`}
                    >
                      <div className="mb-2">
                        <HelpCircle size={24} className="text-blue-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        </div>
      </main>

      <footer className="border-t mt-auto">
        <div className="py-12">
          <div className="mx-auto max-w-[900px] px-4">
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
                  href="#" 
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
  badgeVariant: "purple" | "blue" | "green" | "orange",
  title: string,
  subtitle?: string,
  children: React.ReactNode
}) => {
  const badgeClasses = {
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  }
  
  return (
    <section 
      id={id} 
      className={className}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-left">
          <Badge variant="outline" className={`${badgeClasses[badgeVariant]} mb-4`}>
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

