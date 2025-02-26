import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Repo Prompt - Code Smarter with AI',
  description: 'Structure your AI prompts and apply code changes easily. Repo Prompt helps you select, format, and transfer code to AI models without messy copy-pasting.',
  keywords: ['repo prompt', 'coding assistant', 'AI coding', 'developer tools', 'prompt engineering', 'code context', 'macOS app', 'XML formatting'],
  openGraph: {
    title: 'Repo Prompt - Code Smarter with AI',
    description: 'Structure your AI prompts and apply code changes easily. Repo Prompt helps you select, format, and transfer code to AI models without messy copy-pasting.',
    url: 'https://repoprompt.com',
    siteName: 'Repo Prompt',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Repo Prompt - AI Coding Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Repo Prompt - Code Smarter with AI',
    description: 'Structure your AI prompts and apply code changes easily. Repo Prompt helps you select, format, and transfer code to AI models without messy copy-pasting.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://repoprompt.com',
  },
}
