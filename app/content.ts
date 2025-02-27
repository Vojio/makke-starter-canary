import { 
  type LucideIcon,
  featureIcons,
  workflowIcons,
  socialIcons,
  uiIcons
} from "@/components/icons"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface WorkflowStep {
  title: string
  description: string
  icon: LucideIcon
}

interface CarouselStep {
  name: string
  title: string
  lightImage: string
  darkImage: string
}

export interface Section {
  id: string
  badgeText: string
  title: string
  subtitle?: string
}

interface SocialLink {
  href: string
  icon: LucideIcon
  label: string
}

interface IntegrationCard {
  title: string
  description: string
}

interface FAQItem {
  question: string
  answer: string
}

export const features: Feature[] = [
  { title: "Zipping your whole repo?", description: "Too much bloat—send only what's needed", icon: featureIcons.Folder },
  { title: "LLM underperforming?", description: "Cut the noise for sharper answers", icon: featureIcons.AlertTriangle },
  { title: "Better AI coding?", description: "Select just the files that matter", icon: featureIcons.CodeIcon }
]

export const workflowSteps: WorkflowStep[] = [
  { title: "Find & Select Files", description: "Manually pick files with advanced filtering", icon: workflowIcons.Search },
  { title: "Optimized XML Output", description: "Structured file tree and meta-prompts", icon: workflowIcons.FileText },
  { title: "Codemap Extraction", description: "Extracts API definitions and references", icon: workflowIcons.MapIcon },
  { title: "Token Usage Estimation", description: "Know your context size before sending", icon: workflowIcons.Cpu }
]

export const carouselSteps: CarouselStep[] = [
  {
    name: "compose",
    title: "Compose",
    lightImage: "/workflow/light/compose-light.png",
    darkImage: "/workflow/dark/compose-dark.png",
  },
  {
    name: "chat",
    title: "Chat",
    lightImage: "/workflow/light/chat-light.png",
    darkImage: "/workflow/dark/chat-dark.png",
  },
  {
    name: "review",
    title: "Review",
    lightImage: "/workflow/light/review-light.png",
    darkImage: "/workflow/dark/review-dark.png",
  },
]

export const socialLinks: SocialLink[] = [
  { href: "https://discord.com/invite/NtbFDAJPGM", icon: socialIcons.MessageCircle, label: "Join Discord" },
  { href: "https://ko-fi.com/repoprompt", icon: socialIcons.Coffee, label: "Donate" }
]

export const sections = {
  why: {
    id: "why-repo-prompt",
    badgeText: "The Problem",
    title: "Why Repo Prompt?"
  },
  features: {
    id: "features",
    badgeText: "Key Features",
    title: "How It Works"
  },
  demo: {
    id: "demo-video",
    badgeText: "See It In Action",
    title: "Product Demo",
    subtitle: "Watch how Repo Prompt transforms your coding workflow with AI"
  },
  integrations: {
    id: "integrations",
    badgeText: "Integrations",
    title: "Works with Any Model",
    subtitle: "Supports OpenAI, Anthropic, DeepSeek, Gemini, Azure, and local models—keeping your workflow private and offline when needed"
  },
  workflow: {
    id: "workflow",
    badgeText: "Workflow",
    title: "Your Workflow"
  },
  privacy: {
    id: "privacy",
    badgeText: "Privacy First",
    title: "Your Data, Your Control",
    subtitle: "Connect to AI providers without intermediaries. Keep your workflow private and offline when needed."
  },
  faq: {
    id: "faq",
    badgeText: "FAQ",
    title: "How It Makes Coding Easier"
  }
} as const

export const integrationCards: IntegrationCard[] = [
  {
    title: "Clipboard Integration",
    description: "Seamlessly copy structured prompts as XML to use in any AI chat app—your data stays local"
  },
  {
    title: "Precise XML Parsing",
    description: "Runs locally to format LLM responses into XML, supporting private codebases"
  }
]

export const workflowCards = [
  {
    title: "Compose",
    description: "Select files and folders for your prompt's context. Use saved prompts and a repository map to guide the AI's output",
    icon: uiIcons.Edit3
  },
  {
    title: "Chat",
    description: "Iterate on your files, or learn about how they work, with full control over the context",
    icon: socialIcons.MessageCircle
  },
  {
    title: "Review",
    description: "Review all AI made changes, file by file, and approve changes, piecemeal or in bulk",
    icon: uiIcons.CheckSquare
  }
]

export const privacyMetrics = [
  { label: "100% local", desc: "Local processing" },
  { label: "Private", desc: "No data collection" },
  { label: "Flexible", desc: "Works offline" }
]

export const faqItems: FAQItem[] = [
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
]