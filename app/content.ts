import { 
  type LucideIcon,
  featureIcons,
  workflowIcons
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