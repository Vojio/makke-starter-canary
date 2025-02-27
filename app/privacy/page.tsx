"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { useEffect, useState } from "react"
import { privacyIcons } from "@/components/icons"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <div className="px-4 pt-16 md:pt-24 pb-16">
          <div className="mx-auto max-w-[900px] text-left">
            {mounted && (
              <div className="mb-16 max-w-3xl mx-auto">
                <div className="flex items-center gap-4">
                  <privacyIcons.Shield size={32} className="text-orange-300" />
                  <h1 className="text-4xl font-semibold tracking-tight">
                    Privacy Policy
                  </h1>
                </div>
              </div>
            )}

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

            <Section
              id="data-collection"
              className="mb-12 scroll-m-20"
              badgeText="Data Collection"
              badgeVariant="secondary"
              title="Minimal Data Collection"
            >
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <privacyIcons.ShieldAlert size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    We collect minimal, anonymous usage data through PostHog&apos;s default setup to track daily active users. No personal data, file contents, or identifiable information is collected or stored.
                  </p>
                </div>
              </Card>
            </Section>

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
                    <privacyIcons.Lock size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      No code or files you open in Repo Prompt are transmitted to or stored on our servers.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <privacyIcons.FileCheck size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      All local processing: Codemap analysis and other core functionalities run entirely on your machine.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <privacyIcons.Shield size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      API integrations are opt-in: If you choose to use external APIs, your queries are sent directly to your configured provider. We do not intermediate or store these requests.
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <privacyIcons.Lock size={24} className="text-orange-300 mt-1 flex-shrink-0" />
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

            <Section
              id="future-updates"
              className="mb-12 scroll-m-20"
              badgeText="Future Updates"
              badgeVariant="secondary"
              title="Policy Updates"
            >
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <privacyIcons.Info size={24} className="text-orange-300 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    As we transition out of beta and introduce new features or pricing models, this privacy policy may be updated to reflect any changes in data collection or processing. We remain committed to transparency.
                  </p>
                </div>
              </Card>
            </Section>

            <Section
              id="testflight"
              className="mb-12 scroll-m-20"
              badgeText="TestFlight"
              badgeVariant="secondary"
              title="Apple TestFlight Disclaimer"
            >
              <Card className="p-6 border-border/50">
                <div className="flex items-start gap-4">
                  <privacyIcons.AlertCircle size={24} className="text-orange-300 mt-1 flex-shrink-0" />
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

      <Footer />
    </div>
  )
}