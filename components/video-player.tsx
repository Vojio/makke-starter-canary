"use client"

import { useState, useTransition } from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface VideoPlayerProps {
  videoId: string
  title: string
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false)
  const [isPending, startTransition] = useTransition()

  // Handle iframe load error
  const handleError = () => {
    setHasError(true)
  }

  // Retry loading the video
  const handleRetry = () => {
    startTransition(() => {
      setHasError(false)
    })
  }

  if (hasError) {
    return (
      <Card className="aspect-video flex items-center justify-center p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <AlertCircle className="h-10 w-10 text-orange-300" />
          <p className="text-muted-foreground">Failed to load video</p>
          <div className="flex gap-4">
            <Button onClick={handleRetry} variant="outline">
              Try Again
            </Button>
            <Button asChild>
              <Link href="https://testflight.apple.com/join/nBWkUJD6">
                Download Instead
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-card/50 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )}
      <iframe 
        className="w-full h-full absolute inset-0"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onError={handleError}
      />
    </div>
  )
}