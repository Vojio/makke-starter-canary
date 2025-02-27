"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const workflowSteps = [
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

export function WorkflowCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workflowSteps.length)
  }

  const previous = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? workflowSteps.length - 1 : prevIndex - 1)
  }

  if (!mounted) return null

  const currentStep = workflowSteps[currentIndex]
  const imageSrc = theme === 'dark' ? currentStep.darkImage : currentStep.lightImage

  return (
    <div className="relative">
      <div className="aspect-[16/10] relative overflow-hidden rounded-xl shadow-lg border border-border/50">
        <Image
          src={imageSrc}
          alt={currentStep.title}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />
      </div>
      
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {workflowSteps.map((step, index) => (
          <button
            key={step.name}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary/90 w-6"
                : "bg-primary/20 hover:bg-primary/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={previous}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}