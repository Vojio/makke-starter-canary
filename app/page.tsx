"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState } from "react"
// Import Lucide React Icons
import { 
  Apple, 
  MonitorIcon, 
  MessageCircle,
  Coffee
} from "lucide-react"

export default function Page() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  // Prevents animation on page load
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/10">
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="#" className="flex items-center gap-2 group">
                <div className="relative overflow-hidden">
                  <Image
                    src="/RepoPromptLogo_NoBG.png"
                    alt="Repo Prompt"
                    width={32}
                    height={32}
                    className="group-hover:scale-110 transition-all duration-300 drop-shadow-md filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <Badge variant="outline" className="font-medium text-sm group-hover:bg-orange-500/10 group-hover:text-orange-500 group-hover:border-orange-500 transition-all duration-300">
                  Repo Prompt
                </Badge>
              </Link>
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <Link
                href="https://testflight.apple.com/join/nBWkUJD6"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Mac Download
              </Link>
              <Link
                href="https://discord.com/invite/NtbFDAJPGM"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Join Discord
              </Link>
              <Link
                href="https://ko-fi.com/repoprompt"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Donate
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="px-4 pt-16 md:pt-24">
          <div className="mx-auto max-w-[900px] text-center">
            <div className="mb-24">
              <div className="group relative mx-auto mb-8 w-[140px] duration-300 transform hover:scale-105 cursor-pointer">  
                <Image
                  src="/RepoPromptLogo_NoBG.png"
                  alt="Repo Prompt Logo"
                  priority
                  width={140}
                  height={140}
                  className={`${mounted ? "opacity-100" : "opacity-0"} transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-xl`}
                />
                <div className={`absolute inset-0 bg-primary/5 rounded-full -z-10 filter blur-xl group-hover:blur-2xl group-hover:bg-primary/10 transition-all duration-500 ${mounted ? "opacity-70" : "opacity-0"}`}></div>
              </div>
              <h1 className={`mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-200`}>
                Repo Prompt
              </h1>
              <p className={`mb-3 text-xl text-muted-foreground ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-300`}>
                Code smarter with AI—no more messy copy-pasting.
              </p>
              <p className={`mb-12 text-lg text-muted-foreground ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-400`}>
                Let Repo Prompt structure your prompts and apply AI changes for you.
              </p>
              <div className={`flex flex-wrap justify-center gap-4 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-700 delay-500`}>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button variant="outline" size="lg" className="rounded-full hover:shadow-md transition-all duration-300" asChild>
                    <Link href="https://testflight.apple.com/join/nBWkUJD6">
                      <Apple className="mr-2 h-4 w-4" />
                      Download for Mac
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full hover:shadow-md transition-all duration-300" asChild>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftCSyLtD1Zl-80dHfXmzczkWvnIPPjKZ-melbXBd4yEInBAw/viewform">
                      <MonitorIcon className="mr-2 h-4 w-4" />
                      Windows/Linux Waitlist
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button size="lg" className="rounded-full bg-violet-500 text-purple-50 hover:bg-violet-500/80 hover:shadow-md transition-all duration-300" asChild>
                    <Link href="https://discord.com/invite/NtbFDAJPGM">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Join Discord
                    </Link>
                  </Button>
                  <Button size="lg" className="rounded-full bg-orange-400 text-orange-50 hover:bg-orange-400/80 hover:shadow-md transition-all duration-300" asChild>
                    <Link href="https://ko-fi.com/repoprompt">
                      <Coffee className="mr-2 h-4 w-4" />
                      Donate
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Why Repo Prompt Section */}
            <section className="mb-24 scroll-m-20" id="why-repo-prompt">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20 mb-4">
                  The Problem
                </Badge>
              <h2 className="mb-12 text-3xl font-semibold">Why Repo Prompt?</h2>
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
                    className="p-6 group hover:shadow-md transition-all duration-300 border-border/50 hover:border-border"
                  >
                    <div className="border-l-2 border-primary/50 pl-4 group-hover:border-primary transition-colors duration-300">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-24 scroll-m-20" id="features">
              <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-4">
                      Key Features
                    </Badge>
                  <h2 className="mb-4 text-3xl font-semibold">How It Works</h2>
                </div>
                <div className="grid gap-6">
                  {[
                    {
                      title: "Find & Select Files",
                      description: "Manually pick files with advanced filtering",
                      badge: "Active"
                    },
                    {
                      title: "Optimized XML Output",
                      description: "Structured file tree and meta-prompts",
                      badge: "Active"
                    },
                    {
                      title: "Codemap Extraction",
                      description: "Extracts API definitions and references",
                      badge: "New"
                    },
                    {
                      title: "Token Usage Estimation",
                      description: "Know your context size before sending",
                      badge: "Active"
                    }
                  ].map((feature, i) => (
                    <Card 
                      key={i} 
                      className="p-6 overflow-hidden relative group hover:shadow-md transition-all duration-300 border-border/50 hover:border-border"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-all duration-500 transform origin-bottom"></div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                        <div className="inline-flex h-6 items-center rounded-full bg-muted text-muted-foreground px-2 text-xs font-medium group-hover:bg-primary/10 transition-all duration-300">
                          {feature.badge}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Integration Section */}
            <section className="mb-24 scroll-m-20" id="integrations">
              <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                    <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/20 mb-4">
                      Integrations
                    </Badge>
                  <h2 className="mb-4 text-3xl font-semibold">Works with Any Model</h2>
                  <p className="text-lg text-muted-foreground">
                    Supports OpenAI, Anthropic, DeepSeek, Gemini, Azure, and local models—keeping your workflow private
                    and offline when needed
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Card className="p-6 group hover:shadow-md transition-all duration-300 border-border/50 hover:border-border">
                    <h3 className="mb-3 text-lg font-medium group-hover:text-primary transition-colors duration-300">Clipboard Integration</h3>
                    <p className="text-muted-foreground text-sm">
                      Seamlessly copy structured prompts as XML to use in any AI chat app—your data stays local
                    </p>
                  </Card>
                  <Card className="p-6 group hover:shadow-md transition-all duration-300 border-border/50 hover:border-border">
                    <h3 className="mb-3 text-lg font-medium group-hover:text-primary transition-colors duration-300">Precise XML Parsing</h3>
                    <p className="text-muted-foreground text-sm">
                      Runs locally to format LLM responses into XML, supporting private codebases
                    </p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Workflow Section */}
            <section className="mb-24 scroll-m-20" id="workflow">
                <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/20 mb-4">
                  Workflow
                </Badge>
              <h2 className="mb-12 text-3xl font-semibold">Your Workflow</h2>
              <div className="grid gap-6 sm:grid-cols-3">
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
                    className="p-6 text-center group hover:shadow-md transition-all duration-300 border-border/50 hover:border-border relative overflow-hidden"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <h3 className="mb-3 text-lg font-medium group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Privacy Section */}
            <section className="mb-24 scroll-m-20" id="privacy">
              <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-4">
                Privacy First
                </Badge>
                <h2 className="mb-4 text-3xl font-semibold">Your Data, Your Control</h2>
                <p className="text-lg text-muted-foreground">
                Connect to AI providers without intermediaries. Keep your workflow private and offline when needed.
                </p>
              </div>
              <Card className="p-6 backdrop-blur-sm bg-primary/5 border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-medium mb-1 text-primary">100% local</div>
                    <div className="text-sm text-muted-foreground">Local processing</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium mb-1 text-primary">Private</div>
                    <div className="text-sm text-muted-foreground">No data collection</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium mb-1 text-primary">Flexible</div>
                    <div className="text-sm text-muted-foreground">Works offline</div>
                  </div>
                </div>
              </Card>
              </div>
            </section>
            
            {/* FAQ Section */}
            <section className="mb-24 scroll-m-20" id="faq">
              <div className="mx-auto max-w-3xl">
                <div className="mb-12 text-center">
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20 mb-4">
                      FAQ
                    </Badge>
                  <h2 className="mb-4 text-3xl font-semibold">How It Makes Coding Easier</h2>
                </div>
                <Card className="p-6 mb-4 hover:shadow-md transition-all duration-300 border-border/50 hover:border-border">
                  <h3 className="text-lg font-medium mb-2">When you use Claude or ChatGPT for code, how do you put your files into context?</h3>
                  <p className="text-muted-foreground text-sm">
                    Repo Prompt makes it trivial to find and pick files, then hit copy and get an optimized prompt you can paste into a chat box.
                  </p>
                </Card>
                <Card className="p-6 mb-4 hover:shadow-md transition-all duration-300 border-border/50 hover:border-border">
                  <h3 className="text-lg font-medium mb-2">So this does logical normalization of code into some kind of prompt syntax?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, it performs logical normalization of code into a structured prompt syntax. It&apos;s much faster to use the file picker to find and select files.
                  </p>
                </Card>
                <Card className="p-6 hover:shadow-md transition-all duration-300 border-border/50 hover:border-border">
                  <h3 className="text-lg font-medium mb-2">How does it compare to other tools?</h3>
                  <p className="text-muted-foreground text-sm">
                    Unlike tools that run RAG on your prompt when it&apos;s over 32k tokens, with Repo Prompt you get full context with ordering, plus code maps & file tree auto included.
                  </p>
                </Card>
              </div>
            </section>
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
              <div className="flex justify-end gap-6">
                <Link href="mailto:contact@repoprompt.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contact
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
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

