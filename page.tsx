"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Page() {
  const currentYear = new Date().getFullYear()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme based on system preference
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-neutral-900 transition-colors duration-300 dark:bg-neutral-900 dark:text-neutral-50">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#f8f9fa]/80 dark:bg-neutral-900/80 container relative flex items-center justify-center py-4">
        <div className="absolute right-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        <div className="flex items-center gap-12">
          <Link
            href="https://testflight.apple.com/join/nBWkUJD6"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            Mac Download
          </Link>
          <Link
            href="https://discord.com/invite/NtbFDAJPGM"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            Join Discord
          </Link>
          <Link
            href="https://ko-fi.com/repoprompt"
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            Donate
          </Link>
        </div>
      </nav>

      <main className="container px-4 pt-10">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="mb-24">
            <div className="group relative mx-auto mb-8 w-[140px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RepoPromptLogo_NoBG-1yYRL0abYleYk4mPd579cIIhMWZB62.png"
                alt="Repo Prompt Logo"
                width={140}
                height={140}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-orange-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-orange-900/10" />
            </div>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Repo Prompt</h1>
            <p className="mb-2 text-xl text-neutral-700 dark:text-neutral-300">
              Code smarter with AI—no more messy copy-pasting.
            </p>
            <p className="mb-12 text-lg text-neutral-500 dark:text-neutral-400">
              Let Repo Prompt structure your prompts and apply AI changes for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-neutral-200 bg-white px-8 text-[15px] transition-all duration-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  asChild
                >
                  <Link href="https://testflight.apple.com/join/nBWkUJD6">Download for Mac</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-neutral-200 bg-white px-8 text-[15px] transition-all duration-300 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  asChild
                >
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftCSyLtD1Zl-80dHfXmzczkWvnIPPjKZ-melbXBd4yEInBAw/viewform?usp=send_form">
                    Windows/Linux Waitlist
                  </Link>
                </Button>
              </div>
              <div className="flex gap-3">
                <Button
                  className="h-11 rounded-full text-white bg-indigo-500 px-6 transition-all duration-300 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  asChild
                >
                  <Link href="https://discord.com/invite/NtbFDAJPGM">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" role="img">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                    </svg>
                    Join Discord
                  </Link>
                </Button>
                <Button
                  className="h-11 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/30 hover:translate-y-[-1px] dark:shadow-orange-500/10 dark:hover:shadow-orange-500/20"
                  asChild
                >
                  <Link href="https://ko-fi.com/repoprompt">Donate</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Why Repo Prompt Section */}
          <section className="mb-24">
            <h2 className="mb-12 text-3xl font-semibold">Why Repo Prompt?</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="group rounded-xl bg-white p-8 transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-900/30">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">Zipping your whole repo?</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Too much bloat—send only what&apos;s needed</p>
              </div>
              <div className="group rounded-xl bg-white p-8 transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 transition-transform duration-300 group-hover:scale-110 dark:bg-orange-900/30">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">LLM underperforming?</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Cut the noise for sharper answers</p>
              </div>
              <div className="group rounded-xl bg-white p-8 transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 transition-transform duration-300 group-hover:scale-110 dark:bg-indigo-900/30">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="mb-3 text-xl font-medium">Better AI coding?</h3>
                <p className="text-neutral-500 dark:text-neutral-400">Select just the files that matter</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex h-8 items-center rounded-full bg-orange-50 px-3 text-sm font-medium text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  Key Features
                </div>
                <h2 className="mb-4 text-3xl font-semibold">How It Works</h2>
              </div>
              <div className="grid gap-6">
                {[
                  {
                    title: "Find & Select Files",
                    description: "Manually pick files with advanced filtering",
                    badge: "Active",
                    badgeColorLight: "bg-emerald-50 text-emerald-600",
                    badgeColorDark: "dark:bg-emerald-900/30 dark:text-emerald-400",
                  },
                  {
                    title: "Optimized XML Output",
                    description: "Structured file tree and meta-prompts",
                    badge: "Active",
                    badgeColorLight: "bg-emerald-50 text-emerald-600",
                    badgeColorDark: "dark:bg-emerald-900/30 dark:text-emerald-400",
                  },
                  {
                    title: "Codemap Extraction",
                    description: "Extracts API definitions and references",
                    badge: "New",
                    badgeColorLight: "bg-indigo-50 text-indigo-600",
                    badgeColorDark: "dark:bg-indigo-900/30 dark:text-indigo-400",
                  },
                  {
                    title: "Token Usage Estimation",
                    description: "Know your context size before sending",
                    badge: "Active",
                    badgeColorLight: "bg-emerald-50 text-emerald-600",
                    badgeColorDark: "dark:bg-emerald-900/30 dark:text-emerald-400",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="group rounded-xl bg-white p-8 transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750"
                  >
                    <div
                      className={`mb-4 inline-flex h-8 items-center rounded-full ${feature.badgeColorLight} ${feature.badgeColorDark} px-3 text-sm font-medium`}
                    >
                      {feature.badge}
                    </div>
                    <h3 className="mb-3 text-xl font-medium">{feature.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integration Section */}
          <section className="mb-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex h-8 items-center rounded-full bg-indigo-50 px-3 text-sm font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  Integrations
                </div>
                <h2 className="mb-4 text-3xl font-semibold">Works with Any Model</h2>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                  Supports OpenAI, Anthropic, DeepSeek, Gemini, Azure, and local models—keeping your workflow private
                  and offline when needed
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="group rounded-xl bg-white p-8 transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750">
                  <h3 className="mb-3 text-xl font-medium">Clipboard Integration</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Seamlessly copy structured prompts as XML to use in any AI chat app—your data stays local
                  </p>
                </div>
                <div className="group rounded-xl bg-white p-8 transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750">
                  <h3 className="mb-3 text-xl font-medium">Precise XML Parsing</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    Runs locally to format LLM responses into XML, supporting private codebases
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="mb-24">
            <h2 className="mb-12 text-3xl font-semibold">Your Workflow</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Compose",
                  description:
                    "Select files and folders for your prompt's context. Use saved prompts and a repository map to guide the AI's output",
                  emoji: "✍️",
                },
                {
                  title: "Chat",
                  description:
                    "Iterate on your files, or learn about how they work, with full control over the context",
                  emoji: "💬",
                },
                {
                  title: "Review",
                  description: "Review all AI made changes, file by file, and approve changes, piecemeal or in bulk",
                  emoji: "✅",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group rounded-xl bg-white p-8 text-center transition-all duration-300 hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-750"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 transition-transform duration-300 group-hover:scale-110 dark:bg-orange-900/30">
                    <span className="text-xl">{step.emoji}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-medium">{step.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy Section */}
          <section className="mb-24">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex h-8 items-center rounded-full bg-emerald-50 px-3 text-sm font-medium text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Privacy First
                </div>
                <h2 className="mb-4 text-3xl font-semibold">Your Data, Your Control</h2>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                  Connect to AI providers without intermediaries. Keep your workflow private and offline when needed.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-neutral-200 bg-white transition-colors dark:border-neutral-800 dark:bg-neutral-900">
        <div className="container px-4 py-12">
          <div className="mx-auto max-w-[900px]">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  © {currentYear} Repo Prompt. All rights reserved.
                </p>
              </div>
              <div className="flex justify-end gap-6">
                <Link
                  href="#"
                  className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
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

