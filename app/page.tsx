"use client"

import { Suspense } from "react"
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
import { VideoPlayer } from "@/components/video-player"
import { Loading } from "@/components/ui/loading"
import { 
  features, 
  workflowSteps, 
  sections, 
  integrationCards, 
  workflowCards,
  privacyMetrics,
  faqItems
} from "@/app/content"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="px-4 pt-16 md:pt-24 pb-16">
          <div className="mx-auto max-w-[900px] text-left">
            <div className="mb-16 max-w-3xl mx-auto">
              <div className="group relative mx-0 mb-8 w-[140px] cursor-pointer">  
                <Image
                  src="/RepoPromptLogo.png"
                  alt="Repo Prompt Logo"
                  priority
                  width={140}
                  height={140}
                  className="drop-shadow-lg group-hover:drop-shadow-xl transition-shadow duration-150 ease"
                />
                <div 
                  className="absolute inset-0 bg-primary/5 rounded-full -z-10 filter blur-lg opacity-70 group-hover:opacity-90 group-hover:blur-xl group-hover:bg-primary/10 transition-all duration-200 ease-in-out"
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
                    <Button variant="default" size="lg" className="rounded-full hover:shadow-md transition-shadow duration-150 ease" asChild>
                      <Link href="https://testflight.apple.com/join/nBWkUJD6">
                        Download for Mac
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <Button variant="secondary" size="lg" className="rounded-full hover:shadow-md transition-shadow duration-150 ease" asChild>
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftCSyLtD1Zl-80dHfXmzczkWvnIPPjKZ-melbXBd4yEInBAw/viewform">
                        Windows/Linux Waitlist
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-start">
                  <div>
                    <Button size="lg" className="rounded-full bg-violet-500/90 text-purple-50 hover:bg-violet-500 hover:shadow-md transition-colors duration-150 ease" asChild>
                      <Link href="https://discord.com/invite/NtbFDAJPGM">
                        <socialIcons.MessageCircle className="mr-2 h-4 w-4" />
                        Join Discord
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <Button size="lg" className="rounded-full bg-orange-400/90 hover:bg-orange-400 text-orange-50 hover:shadow-md transition-colors duration-150 ease" asChild>
                      <Link href="https://ko-fi.com/repoprompt">
                        <socialIcons.Coffee className="mr-2 h-4 w-4" />
                        Donate
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Section
              id={sections.why.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.why.badgeText}
              badgeVariant="secondary"
              title={sections.why.title}
            >
              <div className="grid gap-6 sm:grid-cols-3">
                {features.map((feature, i) => (
                  <Card 
                    key={i} 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border transition-shadow duration-150 ease"
                  >
                    <div className="mb-2">
                      <feature.icon size={24} className="text-orange-300" />
                    </div>
                    <div className="border-l-2 border-primary/50 pl-4 group-hover:border-primary transition-colors duration-150 ease">
                      <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors duration-150 ease">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section
              id={sections.features.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.features.badgeText}
              badgeVariant="secondary"
              title={sections.features.title}
            >
              <div className="bg-card/30 py-10 px-6 -mx-4 rounded-lg">
                <div className="mx-auto max-w-3xl">
                  <div className="grid gap-6">
                    {workflowSteps.map((step, i) => (
                      <Card 
                        key={i}
                        className="p-6 group border-border/50 hover:border-border transition-shadow duration-150 ease"
                      >
                        <div className="mb-2 text-orange-300">
                          <step.icon size={24} />
                        </div>
                        <h3 className="text-lg font-medium mb-1 hover:text-primary transition-colors duration-150 ease">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id={sections.demo.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.demo.badgeText}
              badgeVariant="secondary"
              title={sections.demo.title}
              subtitle={sections.demo.subtitle}
            >
              <div className="mx-auto max-w-3xl">
                <Suspense fallback={<Loading height="h-[400px]" text="Loading demo video..." />}>
                  <VideoPlayer 
                    videoId="hNOAEYek1q4" 
                    title="Repo Prompt Demo"
                  />
                </Suspense>
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
              id={sections.integrations.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.integrations.badgeText}
              badgeVariant="secondary"
              title={sections.integrations.title}
              subtitle={sections.integrations.subtitle}
            >
              <div className="mx-auto max-w-3xl">
                <div className="grid gap-6 sm:grid-cols-2">
                  {integrationCards.map((card, i) => (
                    <Card 
                      key={i}
                      className="p-6 group hover:shadow-md border-border/50 hover:border-border transition-shadow duration-150 ease"
                    >
                      <h3 className="mb-1 text-lg font-medium hover:text-primary transition-colors duration-150 ease">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {card.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </Section>

            <Section
              id={sections.workflow.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.workflow.badgeText}
              badgeVariant="secondary"
              title={sections.workflow.title}
            >
              <div className="mx-auto max-w-3xl">
                <Suspense fallback={<Loading height="h-[400px]" text="Loading workflow preview..." />}>
                  <div className="bg-card/30 py-10 px-6 -mx-4 rounded-lg mb-8">
                    <div className="max-w-3xl mx-auto">
                      <WorkflowCarousel />
                    </div>
                  </div>
                </Suspense>
                
                <div className="bg-card/30 py-10 px-6 -mx-4 rounded-lg">
                  <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
                    {workflowCards.map((card, i) => (
                      <Card 
                        key={i} 
                        className="p-6 text-left group relative overflow-hidden border-border/50 hover:border-border transition-all duration-300"
                      >
                        <div className="mb-2 text-orange-300">
                          <card.icon size={24} />
                        </div>
                        <h3 className="mb-1 text-lg font-medium hover:text-primary transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{card.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section
              id={sections.privacy.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.privacy.badgeText}
              badgeVariant="secondary"
              title={sections.privacy.title}
              subtitle={sections.privacy.subtitle}
            >
              <div className="mx-auto max-w-3xl">
                <Card className="p-6 backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {privacyMetrics.map((item, i) => (
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
              id={sections.faq.id}
              className="mb-24 scroll-m-20"
              badgeText={sections.faq.badgeText}
              badgeVariant="secondary"
              title={sections.faq.title}
            >
              <div className="mx-auto max-w-3xl">
                <div>
                  {faqItems.map((faq, i) => (
                    <Card 
                      key={i} 
                      className={`p-6 hover:shadow-md border-border/50 hover:border-border transition-shadow duration-150 ease ${i < faqItems.length - 1 ? 'mb-4' : ''}`}
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

