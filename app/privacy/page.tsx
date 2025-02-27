"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { privacyIcons } from "@/components/icons"

type PrivacyIcon = keyof typeof privacyIcons

interface PrivacyListItem {
  icon: PrivacyIcon
  text: string
}

interface PrivacySection {
  id: string
  title: string
  content: React.ReactNode
  icon?: PrivacyIcon
}

const privacyListItems: PrivacyListItem[] = [
  {
    icon: "Lock",
    text: "No code or files you open in Repo Prompt are transmitted to or stored on our servers."
  },
  {
    icon: "FileCheck",
    text: "All local processing: Codemap analysis and other core functionalities run entirely on your machine."
  },
  {
    icon: "Shield",
    text: "API integrations are opt-in: If you choose to use external APIs, your queries are sent directly to your configured provider. We do not intermediate or store these requests."
  },
  {
    icon: "Lock",
    text: "Clipboard features operate locally, ensuring no unintended data transmission."
  }
]

const sections: PrivacySection[] = [
  {
    id: "overview",
    title: "Our Privacy Commitment",
    content: (
      <Card className="p-6 border-border/50">
        <p className="text-muted-foreground">
          Repo Prompt is designed with privacy as a core principle. This privacy policy applies to versions of the application released on or after February 1, 2025. We do not collect or store your code, and we minimize data collection to the bare essentials for analytics and service improvements.
        </p>
      </Card>
    ),
    icon: "Shield"
  },
  {
    id: "data-collection",
    title: "Minimal Data Collection",
    content: (
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-4">
          {privacyIcons.ShieldAlert && (
            <privacyIcons.ShieldAlert size={24} className="text-orange-300 mt-1 flex-shrink-0" />
          )}
          <p className="text-muted-foreground">
            We collect minimal, anonymous usage data through PostHog&apos;s default setup to track daily active users. No personal data, file contents, or identifiable information is collected or stored.
          </p>
        </div>
      </Card>
    ),
    icon: "ShieldAlert"
  },
  {
    id: "code-privacy",
    title: "Your Code Stays Private",
    content: (
      <Card className="p-6 border-border/50">
        <ul className="space-y-4" role="list">
          {privacyListItems.map((item, i) => {
            const Icon = privacyIcons[item.icon]
            return (
              <li key={i} className="flex items-start gap-4">
                {Icon && (
                  <Icon size={24} className="text-orange-300 mt-1 flex-shrink-0" aria-hidden="true" />
                )}
                <p className="text-muted-foreground">
                  {item.text}
                </p>
              </li>
            )
          })}
        </ul>
        <div className="mt-2 p-4 bg-white dark:bg-background rounded-md border border-border/50">
          <p className="text-sm text-muted-foreground">
            While we take privacy seriously, we are not responsible for data handling by third-party API providers. Please review their privacy policies separately.
          </p>
        </div>
      </Card>
    ),
    icon: "Lock"
  },
  {
    id: "future-updates",
    title: "Policy Updates",
    content: (
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-4">
          {privacyIcons.Info && (
            <privacyIcons.Info size={24} className="text-orange-300 mt-1 flex-shrink-0" aria-hidden="true" />
          )}
          <p className="text-muted-foreground">
            As we transition out of beta and introduce new features or pricing models, this privacy policy may be updated to reflect any changes in data collection or processing. We remain committed to transparency.
          </p>
        </div>
      </Card>
    ),
    icon: "Info"
  },
  {
    id: "testflight",
    title: "Apple TestFlight Disclaimer",
    content: (
      <Card className="p-6 border-border/50">
        <div className="flex items-start gap-4">
          {privacyIcons.AlertCircle && (
            <privacyIcons.AlertCircle size={24} className="text-orange-300 mt-1 flex-shrink-0" aria-hidden="true" />
          )}
          <p className="text-muted-foreground">
            If you are using Repo Prompt via Apple TestFlight, note that Apple may collect additional data under their own policies. We do not control the collection of this data. Please refer to Apple&apos;s TestFlight privacy policy for details.
          </p>
        </div>
      </Card>
    ),
    icon: "AlertCircle"
  }
]

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow" role="main">
        <div className="px-4 pt-16 md:pt-24 pb-16">
          <div className="mx-auto max-w-[900px] text-left">
            <div className="mb-16 max-w-3xl mx-auto">
              <div className="flex items-center gap-4">
                {privacyIcons.Shield && (
                  <privacyIcons.Shield size={32} className="text-orange-300" aria-hidden="true" />
                )}
                <h1 className="text-4xl font-semibold tracking-tight">
                  Privacy Policy
                </h1>
              </div>
            </div>

            {sections.map((section) => (
              <Section
                key={section.id}
                id={section.id}
                className="mb-12 scroll-m-20"
                badgeText={section.title}
                badgeVariant="secondary"
                title={section.title}
              >
                {section.content}
              </Section>
            ))}
            
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

      <Footer />
    </div>
  )
}