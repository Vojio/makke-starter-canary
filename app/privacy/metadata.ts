import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Repo Prompt',
  description: 'Learn how Repo Prompt protects your privacy and handles your data. We are committed to keeping your code private and minimizing data collection.',
  keywords: ['privacy policy', 'Repo Prompt', 'code privacy', 'data protection', 'developer tools'],
  openGraph: {
    title: 'Privacy Policy | Repo Prompt',
    description: 'Learn how Repo Prompt protects your privacy and handles your data. We are committed to keeping your code private and minimizing data collection.',
    url: 'https://repoprompt.com/privacy',
    siteName: 'Repo Prompt',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Repo Prompt Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Repo Prompt',
    description: 'Learn how Repo Prompt protects your privacy and handles your data. We are committed to keeping your code private and minimizing data collection.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://repoprompt.com/privacy',
  },
}
