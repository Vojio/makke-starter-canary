"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect, useState, memo, useRef } from "react"
import { motion, AnimatePresence, useInView, Variants } from "framer-motion"

// Import Lucide React Icons
import { 
  Apple, 
  MonitorIcon, 
  MessageCircle,
  Coffee
} from "lucide-react"

// Memoized components for better performance
const MotionLink = memo(motion(Link))
const MotionCard = memo(motion(Card))
const MotionBadge = memo(motion(Badge))

// Animation variants
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7 }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

// Removed unused cardHoverVariants

const cardBarVariants: Variants = {
  initial: { height: "100%", width: 2, backgroundColor: "rgba(var(--primary), 0.2)" },
  hover: { 
    backgroundColor: "var(--primary)",
    transition: { duration: 0.5 }
  }
}

const buttonGroupVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

export default function Page() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  // Prevents animation on page load
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <motion.div
                whileHover="hover"
                initial="initial"
                animate="animate"
                className="flex items-center gap-2"
              >
                <Link href="#" className="flex items-center gap-2 group">
                  <motion.div 
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/RepoPromptLogo_NoBG.png"
                      alt="Repo Prompt"
                      width={32}
                      height={32}
                      className="drop-shadow-md filter grayscale hover:grayscale-0 transition-filter duration-300"
                    />
                  </motion.div>
                  <MotionBadge
                    variant="outline"
                    className="font-medium text-sm"
                    whileHover={{ 
                      backgroundColor: "rgba(249, 115, 22, 0.1)", 
                      color: "#f97316", 
                      borderColor: "#f97316" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Repo Prompt
                  </MotionBadge>
                </Link>
              </motion.div>
            </div>
            
            <div className="flex items-center gap-8 md:gap-12">
              <MotionLink
                href="https://testflight.apple.com/join/nBWkUJD6"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                whileHover={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                Mac Download
              </MotionLink>
              <MotionLink
                href="https://discord.com/invite/NtbFDAJPGM"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                whileHover={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                Join Discord
              </MotionLink>
              <MotionLink
                href="https://ko-fi.com/repoprompt"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                whileHover={{ color: "var(--foreground)" }}
                transition={{ duration: 0.2 }}
              >
                Donate
              </MotionLink>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="flex-grow">
        <div className="px-4 pt-16 md:pt-24">
          <div className="mx-auto max-w-[900px] text-center">
            <AnimatePresence>
              {mounted && (
                <div className="mb-24">
                  <motion.div
                    className="group relative mx-auto mb-8 w-[140px] cursor-pointer"  
                    variants={logoVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >  
                    <Image
                      src="/RepoPromptLogo_NoBG.png"
                      alt="Repo Prompt Logo"
                      priority
                      width={140}
                      height={140}
                      className="drop-shadow-lg group-hover:drop-shadow-xl"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-primary/5 rounded-full -z-10 filter"
                      initial={{ opacity: 0.7, filter: "blur(10px)" }}
                      animate={{ opacity: 0.7, filter: "blur(10px)" }}
                      whileHover={{ 
                        opacity: 0.9, 
                        filter: "blur(16px)",
                        backgroundColor: "rgba(var(--primary), 0.1)"
                      }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </motion.div>
                  
                  <motion.h1 
                    className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    Repo Prompt
                  </motion.h1>
                  
                  <motion.p 
                    className="mb-3 text-xl text-muted-foreground"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                    Code smarter with AI—no more messy copy-pasting.
                  </motion.p>
                  
                  <motion.p 
                    className="mb-12 text-lg text-muted-foreground"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                  >
                    Let Repo Prompt structure your prompts and apply AI changes for you.
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    variants={buttonGroupVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div className="flex flex-wrap gap-3 justify-center" variants={staggerContainerVariants}>
                      <motion.div variants={fadeInUpVariants}>
                        <Button variant="outline" size="lg" className="rounded-full hover:shadow-md" asChild>
                          <Link href="https://testflight.apple.com/join/nBWkUJD6">
                            <Apple className="mr-2 h-4 w-4" />
                            Download for Mac
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div variants={fadeInUpVariants}>
                        <Button variant="outline" size="lg" className="rounded-full hover:shadow-md" asChild>
                          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSftCSyLtD1Zl-80dHfXmzczkWvnIPPjKZ-melbXBd4yEInBAw/viewform">
                            <MonitorIcon className="mr-2 h-4 w-4" />
                            Windows/Linux Waitlist
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                    <motion.div className="flex flex-wrap gap-3 justify-center" variants={staggerContainerVariants}>
                      <motion.div variants={fadeInUpVariants}>
                        <Button size="lg" className="rounded-full bg-violet-500 text-purple-50 hover:bg-violet-500/80 hover:shadow-md" asChild>
                          <Link href="https://discord.com/invite/NtbFDAJPGM">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Join Discord
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div variants={fadeInUpVariants}>
                        <Button size="lg" className="rounded-full bg-orange-400 text-orange-50 hover:bg-orange-400/80 hover:shadow-md" asChild>
                          <Link href="https://ko-fi.com/repoprompt">
                            <Coffee className="mr-2 h-4 w-4" />
                            Donate
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Why Repo Prompt Section */}
            <SectionWithInViewAnimation
              id="why-repo-prompt"
              className="mb-24 scroll-m-20"
              badgeText="The Problem"
              badgeVariant="purple"
              title="Why Repo Prompt?"
            >
              <motion.div
                className="grid gap-6 sm:grid-cols-3"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
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
                  <MotionCard 
                    key={i} 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border"
                    variants={fadeInUpVariants}
                    whileHover="hover"
                    initial="initial"
                  >
                    <div className="border-l-2 border-primary/50 pl-4 group-hover:border-primary transition-colors duration-300">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </MotionCard>
                ))}
              </motion.div>
            </SectionWithInViewAnimation>

            {/* Features Section */}
            <SectionWithInViewAnimation
              id="features"
              className="mb-24 scroll-m-20"
              badgeText="Key Features"
              badgeVariant="blue"
              title="How It Works"
            >
              <div className="mx-auto max-w-3xl">
                <motion.div
                  className="grid gap-6"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
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
                    <MotionCard 
                      key={i}
                      className="p-6 overflow-hidden relative group border-border/50 hover:border-border"
                      variants={fadeInUpVariants}
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.div 
                        className="absolute top-0 left-0 w-1 h-full bg-primary/20"
                        variants={cardBarVariants}
                        initial="initial"
                        whileHover="hover"
                      ></motion.div>
                      <div className="flex justify-between items-center mb-3">
                        <motion.h3 
                          className="text-lg font-medium"
                          whileHover={{ color: "var(--primary)" }}
                        >
                          {feature.title}
                        </motion.h3>
                        <motion.div 
                          className="inline-flex h-6 items-center rounded-full bg-muted text-muted-foreground px-2 text-xs font-medium"
                          whileHover={{ backgroundColor: "rgba(var(--primary), 0.1)" }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.badge}
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </MotionCard>
                  ))}
                </motion.div>
              </div>
            </SectionWithInViewAnimation>

            {/* Integration Section */}
            <SectionWithInViewAnimation
              id="integrations"
              className="mb-24 scroll-m-20"
              badgeText="Integrations"
              badgeVariant="orange"
              title="Works with Any Model"
              subtitle="Supports OpenAI, Anthropic, DeepSeek, Gemini, Azure, and local models—keeping your workflow private
                    and offline when needed"
            >
              <div className="mx-auto max-w-3xl">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <MotionCard 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border"
                    variants={fadeInUpVariants}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.h3 
                      className="mb-3 text-lg font-medium"
                      whileHover={{ color: "var(--primary)" }}
                      transition={{ duration: 0.3 }}
                    >
                      Clipboard Integration
                    </motion.h3>
                    <p className="text-muted-foreground text-sm">
                      Seamlessly copy structured prompts as XML to use in any AI chat app—your data stays local
                    </p>
                  </MotionCard>
                  <MotionCard 
                    className="p-6 group hover:shadow-md border-border/50 hover:border-border"
                    variants={fadeInUpVariants}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.h3 
                      className="mb-3 text-lg font-medium"
                      whileHover={{ color: "var(--primary)" }}
                      transition={{ duration: 0.3 }}
                    >
                      Precise XML Parsing
                    </motion.h3>
                    <p className="text-muted-foreground text-sm">
                      Runs locally to format LLM responses into XML, supporting private codebases
                    </p>
                  </MotionCard>
                </motion.div>
              </div>
            </SectionWithInViewAnimation>

            {/* Workflow Section */}
            <SectionWithInViewAnimation
              id="workflow"
              className="mb-24 scroll-m-20"
              badgeText="Workflow"
              badgeVariant="purple"
              title="Your Workflow"
            >
              <motion.div
                className="grid gap-6 sm:grid-cols-3"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
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
                  <MotionCard 
                    key={i} 
                    className="p-6 text-center group relative overflow-hidden border-border/50 hover:border-border"
                    variants={fadeInUpVariants}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div 
                      className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                    <motion.h3 
                      className="mb-3 text-lg font-medium"
                      whileHover={{ color: "var(--primary)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </MotionCard>
                ))}
              </motion.div>
            </SectionWithInViewAnimation>

            {/* Privacy Section */}
            <SectionWithInViewAnimation
              id="privacy"
              className="mb-24 scroll-m-20"
              badgeText="Privacy First"
              badgeVariant="blue"
              title="Your Data, Your Control"
              subtitle="Connect to AI providers without intermediaries. Keep your workflow private and offline when needed."
            >
              <div className="mx-auto max-w-3xl">
                <MotionCard 
                  className="p-6 backdrop-blur-sm bg-primary/5 border-primary/20"
                  whileHover={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="grid grid-cols-3 gap-4"
                    variants={staggerContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {[
                      { label: "100% local", desc: "Local processing" },
                      { label: "Private", desc: "No data collection" },
                      { label: "Flexible", desc: "Works offline" }
                    ].map((item, i) => (
                      <motion.div key={i} className="text-center" variants={fadeInUpVariants}>
                        <div className="font-medium mb-1 text-primary">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </MotionCard>
              </div>
            </SectionWithInViewAnimation>
            
            {/* FAQ Section */}
            <SectionWithInViewAnimation
              id="faq"
              className="mb-24 scroll-m-20"
              badgeText="FAQ"
              badgeVariant="green"
              title="How It Makes Coding Easier"
            >
              <div className="mx-auto max-w-3xl">
                <motion.div
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
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
                    <MotionCard 
                      key={i} 
                      className={`p-6 hover:shadow-md border-border/50 hover:border-border ${i < 2 ? 'mb-4' : ''}`}
                      variants={fadeInUpVariants}
                      whileHover="hover"
                      initial="initial"
                    >
                      <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </MotionCard>
                  ))}
                </motion.div>
              </div>
            </SectionWithInViewAnimation>
          </div>
        </div>
      </main>

      <motion.footer 
        className="border-t mt-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="py-12">
          <div className="mx-auto max-w-[900px] px-4">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Repo Prompt. All rights reserved.
                </p>
              </div>
              <div className="flex justify-end gap-6">
                <MotionLink 
                  href="mailto:contact@repoprompt.com" 
                  className="text-sm text-muted-foreground"
                  whileHover={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                </MotionLink>
                <MotionLink 
                  href="#" 
                  className="text-sm text-muted-foreground"
                  whileHover={{ color: "var(--foreground)" }}
                  transition={{ duration: 0.2 }}
                >
                  Privacy Policy
                </MotionLink>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

// Reusable section component with InView animations
const SectionWithInViewAnimation = memo(({
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const badgeClasses = {
    purple: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    green: "bg-green-500/10 text-green-500 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  }
  
  return (
    <motion.section 
      id={id} 
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="outline" className={`${badgeClasses[badgeVariant]} mb-4`}>
              {badgeText}
            </Badge>
          </motion.div>
          <motion.h2 
            className="mb-4 text-3xl font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        {children}
      </div>
    </motion.section>
  )
})

SectionWithInViewAnimation.displayName = "SectionWithInViewAnimation"

