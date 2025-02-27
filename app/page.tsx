"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { socialIcons, uiIcons } from "@/components/icons"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { WorkflowCarousel } from "@/components/workflow-carousel"
import { features, workflowSteps } from "../app/content"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="px-4 pt-16 md:pt-24">
          <div className="mx-auto max-w-[900px] text-left">
            {mounted && (
              <div className="mb-16 max-w-3xl mx-auto">
                <div className="group relative mx-0 mb-8 w-[140px] cursor-pointer">  
                  <Image
                    src="/RepoPromptLogo.png"
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
                
                  <Badge variant="secondary" className="mr-2 mb-4">
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
                      <Button variant="secondary" size="lg" className="rounded-full hover:shadow-md" asChild>
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftCSyLtD1Zl-80dHfXmzczkWvnIPPjKZ-melbXBd4yEInBAw/viewform">
                          Windows/Linux Waitlist
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-start">
                    <div>
                      <Button size="lg" className="rounded-full bg-violet-500/90 text-purple-50 hover:bg-violet-500 hover:shadow-md" asChild>
                        <Link href="https://discord.com/invite/NtbFDAJPGM">
                          <socialIcons.MessageCircle className="mr-2 h-4 w-4" />
                          Join Discord
                        </Link>
                      </Button>
                    </div>
                    <div>
                      <Button size="lg" className="rounded-full bg-orange-400/90 hover:bg-orange-400 text-orange-50 hover:shadow-md" asChild>
                        <Link href="https://ko-fi.com/repoprompt">
                          <socialIcons.Coffee className="mr-2 h-4 w-4" />
                          Donate
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Section
              id="why-repo-prompt"
              className="mb-24 scroll-m-20 "
              badgeText="The Problem"
              badgeVariant="secondary"
              title="Why Repo Prompt?"
            >
              <div className="grid gap-6 sm:grid-cols-3">
                {features.map((feature, i) => (
                  <Card 
                    key={i} 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border transition-all duration-300"
                  >
                    <div className="mb-2">
                      <feature.icon size={24} className="text-orange-300" />
                    </div>
                    <div className="border-l-2 border-primary/50 pl-4 group-hover:border-primary transition-colors duration-300">
                      <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            <div className="mb-24 scroll-m-20" id="features">
              <div className="mb-8 text-left max-w-3xl mx-auto">
                <Badge variant="secondary" className="mb-4">
                  Key Features
                </Badge>
                <h2 className="mb-3 text-3xl font-semibold">
                  How It Works
                </h2>
              </div>
              
              <div className="bg-card/50 py-10 px-6 -mx-4 rounded-lg">
                <div className="mx-auto max-w-3xl">
                  <div className="grid gap-6">
                    {workflowSteps.map((feature, i) => (
                      <Card 
                        key={i}
                        className="p-6 group border-border/50 hover:border-border transition-all duration-300"
                      >
                        <div className="mb-2 text-orange-300">
                          <feature.icon size={24} />
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

            <Section
              id="demo-video"
              className="mb-24 scroll-m-20"
              badgeText="See It In Action"
              badgeVariant="secondary"
              title="Product Demo"
              subtitle="Watch how Repo Prompt transforms your coding workflow with AI"
            >
              <div className="mx-auto max-w-3xl">
                <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                  <iframe 
                    className="w-full h-full absolute inset-0"
                    src="https://www.youtube.com/embed/hNOAEYek1q4"
                    title="Repo Prompt Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button variant="secondary" size="lg" className="rounded-full hover:shadow-md" asChild>
                    <Link href="https://testflight.apple.com/join/nBWkUJD6">
                      Try It Now
                    </Link>
                  </Button>
                </div>
              </div>
            </Section>
            
            <Section
              id="integrations"
              className="mb-24 scroll-m-20"
              badgeText="Integrations"
              badgeVariant="secondary"
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

            <div className="mb-24 scroll-m-20" id="workflow">
              <div className="mb-8 text-left max-w-3xl mx-auto">
                <Badge variant="secondary" className="mb-4">
                  Workflow
                </Badge>
                <h2 className="mb-3 text-3xl font-semibold">
                  Your Workflow
                </h2>
              </div>
              
              {mounted && (
                <div className="bg-card/30 py-10 px-6 -mx-4 rounded-lg mb-8">
                  <div className="max-w-3xl mx-auto">
                    <WorkflowCarousel />
                  </div>
                </div>
              )}
              
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
                      <div className="mb-2 text-orange-300">
                        {i === 0 ? <uiIcons.Edit3 size={24} /> : i === 1 ? <socialIcons.MessageCircle size={24} /> : <uiIcons.CheckSquare size={24} />}
                      </div>
                      <h3 className="mb-1 text-lg font-medium hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <Section
              id="privacy"
              className="mb-24 scroll-m-20"
              badgeText="Privacy First"
              badgeVariant="secondary"
              title="Your Data, Your Control"
              subtitle="Connect to AI providers without intermediaries. Keep your workflow private and offline when needed."
            >
              <div className="mx-auto max-w-3xl">
                <Card 
                  className="p-6 backdrop-blur-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "100% local", desc: "Local processing" },
                    { label: "Private", desc: "No data collection" },
                    { label: "Flexible", desc: "Works offline" }
                  ].map((item, i) => (
                    <div key={i} className="text-left">
                    <div className="font-medium mb-1">{item.label}</div>
                    <div className="text-sm">{item.desc}</div>
                    </div>
                  ))}
                  </div>
                </Card>
              </div>
            </Section>
            
            <Section
              id="faq"
              className="mb-24 scroll-m-20"
              badgeText="FAQ"
              badgeVariant="secondary"
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
                      <div className="mb-2 text-orange-300">
                        <uiIcons.HelpCircle size={24} />
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

      <Footer />
    </div>
  )
}

